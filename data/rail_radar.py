#!/usr/bin/env python3
"""
Nashik Road Rail Influx & Transit Radar Engine
Running on Station Substation at Nashik Road (NK)

DIRECTIONAL & DE-BOARDING MODEL:
Tracks ALL incoming trains through Nashik Road (NK) in BOTH directions:
1. UP Line (Inbound towards Mumbai/Pune):
   - Trains from Vidarbha, Khandesh, North/East India (Howrah, Gorakhpur, Varanasi, Nagpur, Amravati, Nanded).
   - Originators / Early Terminals (e.g. Bhusawal/Manmad -> Mumbai): Morning commuters getting off at NK.
2. DOWN Line (Outbound from Mumbai/Pune into Northern Maharashtra):
   - Trains originating at CSMT, LTT, Dadar, Pune heading outward.
   - Panchavati Express (12109), Tapovan Express (17617), Godavari Express (12111), Rajya Rani (17611).
3. Kumbh Mela Specials:
   - Inbound from all 4 Indian railway zones into Nashik/Trimbak.
"""

import urllib.request
import urllib.parse
import http.cookiejar
import json
import re
import time
import os
from datetime import datetime

OUTPUT_DIR = os.path.expanduser('~/nashik-radar/data')
os.makedirs(OUTPUT_DIR, exist_ok=True)
OUTPUT_FILE = os.path.join(OUTPUT_DIR, 'rail_influx.json')

# Major Station Code Directory for clear display
STATION_NAMES = {
    'CSMT': 'Mumbai CSMT',
    'LTT': 'Mumbai Lokmanya Tilak',
    'DR': 'Mumbai Dadar',
    'HWH': 'Kolkata Howrah',
    'GKP': 'Gorakhpur Jn',
    'BPQ': 'Balharshah',
    'SHM': 'Shalimar',
    'AMI': 'Amravati',
    'LPI': 'Lingampalli (Hyderabad)',
    'ASR': 'Amritsar Jn',
    'BNRS': 'Varanasi Banaras',
    'BSB': 'Varanasi Jn',
    'SNSI': 'Sainagar Shirdi',
    'NED': 'Hazur Sahib Nanded',
    'NGP': 'Nagpur Jn',
    'PUNE': 'Pune Jn',
    'MMR': 'Manmad Jn',
    'BSL': 'Bhusawal Jn',
    'JHS': 'Jhansi / Virangana',
    'PRYJ': 'Prayagraj Jn',
    'NZM': 'Delhi Hazrat Nizamuddin',
    'NDLS': 'New Delhi',
    'NK': 'Nashik Road'
}

def get_readable_station(code):
    return STATION_NAMES.get(code.upper().strip(), code.upper().strip())

def clean_text(raw_html):
    """Strip HTML tags and clean up whitespace."""
    text = re.sub(r'<[^<]+?>', '', raw_html)
    text = text.replace('&nbsp;', ' ').replace('\r', ' ').replace('\n', ' ')
    return ' '.join(text.split()).strip()

def fetch_live_arrivals(station_code='NK', hours=4):
    """Fetch live arrival stream from NTES for station_code with CSRF token handshake."""
    cj = http.cookiejar.CookieJar()
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))

    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Referer': 'https://enquiry.indianrail.gov.in/mntes/'
    }

    req1 = urllib.request.Request('https://enquiry.indianrail.gov.in/mntes/', headers=headers)
    opener.open(req1, timeout=10)

    t = int(time.time() * 1000)
    req_csrf = urllib.request.Request(
        f'https://enquiry.indianrail.gov.in/mntes/GetCSRFToken?t={t}',
        headers=headers
    )
    csrf_raw = opener.open(req_csrf, timeout=10).read().decode('utf-8')
    token_m = re.search(r'value=[\"\']([^\"\']+)[\"\']', csrf_raw)
    name_m = re.search(r'name=[\"\']([^\"\']+)[\"\']', csrf_raw)

    post_data = {
        'jFromStationInput': station_code,
        'jToStationInput': '',
        'jHrs': str(hours)
    }
    if token_m and name_m:
        post_data[name_m.group(1)] = token_m.group(1)

    req_post = urllib.request.Request(
        'https://enquiry.indianrail.gov.in/mntes/q?opt=LiveStation&subOpt=show',
        data=urllib.parse.urlencode(post_data).encode('utf-8'),
        headers=headers
    )
    html = opener.open(req_post, timeout=12).read().decode('utf-8', errors='ignore')
    return html

def parse_route_and_direction(route_str):
    """Parse origin, destination, and corridor direction (Down vs Up line)."""
    parts = route_str.split('-')
    if len(parts) == 2:
        orig = parts[0].strip()
        dest = parts[1].strip()
    else:
        orig = route_str
        dest = 'NK'

    # Determine Direction
    # Down line: Originates in Mumbai (CSMT/LTT/DR) or Pune heading outward into Maharashtra/India
    # Up line: Inbound from North/East/Vidarbha heading toward Mumbai
    if orig.upper() in ['CSMT', 'LTT', 'DR', 'PUNE', 'KYN', 'BDTS']:
        direction = "DOWN (From Mumbai/Pune)"
    elif dest.upper() in ['CSMT', 'LTT', 'DR', 'PUNE', 'KYN']:
        direction = "UP (Towards Mumbai)"
    else:
        direction = "CROSS-COUNTRY"

    orig_full = get_readable_station(orig)
    dest_full = get_readable_station(dest)

    return orig, dest, f"{orig_full} → {dest_full}", direction

def get_deboarding_ratio(train_name, orig, dest, direction):
    """Realistic deboarding estimation based on origin, destination, and train type."""
    name_u = train_name.upper()

    # Case 1: Terminating at Nashik Road
    if dest.upper() == 'NK' or 'NASHIK' in name_u:
        return 0.85

    # Case 2: Regional Commuters (Panchavati, Tapovan, Godavari, Rajya Rani, Sevagram)
    if any(k in name_u for k in ['PANCHAVATI', 'TAPOVAN', 'GODAVARI', 'RAJYA RANI']):
        return 0.45

    # Case 3: Kumbh Mela Pilgrim Specials
    if any(k in name_u for k in ['KUMBH', 'MELA', 'SPECIAL']):
        return 0.75

    # Case 4: Shirdi / Pilgrim services (e.g. Vande Bharat, Sainagar Express)
    if any(k in name_u for k in ['VANDE BHARAT', 'SHIRDI', 'SAINAGAR']):
        return 0.25

    # Case 5: Regional Trains from Vidarbha/Marathwada into Mumbai (Devagiri, Sevagram, Amravati Exp, Nanded Exp)
    # Good number of business/court travelers getting off at Nashik
    if any(k in name_u for k in ['DEVAGIRI', 'SEVAGRAM', 'AMRAVATI', 'NANDED']):
        return 0.20

    # Case 6: Long-Distance Cross-Country Superfasts/Mails (Howrah, Gorakhpur, Banaras, Shalimar, Punjab Mail, Pushpak)
    # Vast majority are traveling between major states; Nashik Road is just a 2-minute intermediate halt.
    return 0.10

def get_diurnal_multiplier(hour):
    """Time-of-day traffic weighting for Nashik Road arterial roads."""
    if 0 <= hour < 5:
        # Deep night: Zero traffic on Bytco-Dwarka corridor
        return 0.15
    elif 5 <= hour < 8:
        # Dawn buildup
        return 0.60
    elif 8 <= hour < 11:
        # Morning office and station rush
        return 1.00
    elif 11 <= hour < 16:
        # Midday plateau
        return 0.50
    elif 16 <= hour < 17:
        # Late afternoon transition
        return 0.70
    elif 17 <= hour < 21:
        # Evening peak traffic
        return 1.00
    else:
        # 21:00 - 24:00 night taper
        return 0.40

def parse_trains(html):
    """Parse train arrivals table from NTES response across all directions."""
    trains = []
    rows = re.findall(r'<tr[^>]*>(.*?)</tr>', html, re.DOTALL)

    for r in rows:
        tds = re.findall(r'<td[^>]*>(.*?)</td>', r, re.DOTALL)
        if len(tds) < 5:
            continue

        raw_info = clean_text(tds[1])
        train_num_m = re.search(r'(\b\d{5}\b)', raw_info)
        if not train_num_m:
            continue

        train_num = train_num_m.group(1)

        name_part = raw_info.replace(train_num, '').strip()
        name_part = re.sub(r'\|.*', '', name_part).strip()
        route_m = re.search(r'\((.*?)\)', raw_info)
        route_raw = route_m.group(1) if route_m else ''

        orig, dest, route_display, direction = parse_route_and_direction(route_raw)

        if not name_part:
            train_name = raw_info.split('|')[1].split('(')[0].strip() if '|' in raw_info else 'Express'
        else:
            train_name = name_part

        raw_arr = clean_text(tds[2])
        raw_plat = clean_text(tds[4])

        plat_m = re.search(r'(\d+)', raw_plat)
        platform = f"Platform {plat_m.group(1)}" if plat_m else "PF TBA"

        arr_time_m = re.search(r'(\d{2}:\d{2})', raw_arr)
        arr_time = arr_time_m.group(1) if arr_time_m else 'Upcoming'

        delay = "On Time"
        if "Mins" in raw_arr or "Hrs" in raw_arr:
            delay_m = re.search(r'(\d+\s*(?:Mins|Hrs\.?))', raw_arr)
            if delay_m:
                delay = f"+{delay_m.group(1)}"
        elif "Delay" in raw_arr:
            delay = "Delayed"

        # Baseline train total capacity
        if any(w in raw_info.upper() for w in ['SPECIAL', 'KUMBH', 'MELA']):
            category = "Mela Special"
            total_train_capacity = 2200
        elif any(w in raw_info.upper() for w in ['MAIL', 'SUPERFAST', 'SF']):
            category = "Superfast / Mail"
            total_train_capacity = 1600
        elif 'PASSENGER' in raw_info.upper() or 'MEMU' in raw_info.upper():
            category = "Local / MEMU"
            total_train_capacity = 900
        else:
            category = "Express"
            total_train_capacity = 1300

        # Deboarding percentage based on direction and route
        deboard_ratio = get_deboarding_ratio(train_name, orig, dest, direction)
        actual_deboard_pax = int(total_train_capacity * deboard_ratio)

        trains.append({
            "number": train_num,
            "name": train_name.title() if train_name else "Indian Railways Express",
            "route_codes": route_raw,
            "route_display": route_display,
            "direction": direction,
            "arrival_time": arr_time,
            "delay": delay,
            "platform": platform,
            "category": category,
            "train_capacity": total_train_capacity,
            "deboard_ratio_pct": int(deboard_ratio * 100),
            "est_deboarded_pax": actual_deboard_pax
        })

    return trains

def compute_local_transit_intel(trains):
    """Compute passenger volume wave and road bottleneck impact for Nashik Road."""
    now = datetime.now()
    current_hour = now.hour
    diurnal_factor = get_diurnal_multiplier(current_hour)

    total_deboarded = sum(t['est_deboarded_pax'] for t in trains)
    train_count = len(trains)

    # Direction breakdown
    down_trains = sum(1 for t in trains if 'DOWN' in t.get('direction', ''))
    up_trains = sum(1 for t in trains if 'UP' in t.get('direction', ''))

    effective_road_pressure = total_deboarded * diurnal_factor

    if effective_road_pressure > 3500 and (8 <= current_hour <= 21):
        surge_level = "HEAVY TRANSIT WAVE"
        surge_badge = "HEAVY"
        bytco_status = "Bytco Circle auto stands crowded; slow clearing."
        dwarka_delay = "+18 to +25 mins above normal"
        recommended_bypass = "Heavy load on NH60. Divert through Subhash Road -> Jail Road toward Dwarka."
    elif effective_road_pressure > 1800 and (7 <= current_hour <= 22):
        surge_level = "MODERATE EXIT LOAD"
        surge_badge = "MODERATE"
        bytco_status = "Steady auto queue; minor pause at Datta Mandir signal."
        dwarka_delay = "+8 to +12 mins"
        recommended_bypass = "Main NH60 corridor moving steadily; normal routing acceptable."
    elif 0 <= current_hour < 5:
        surge_level = "NIGHT CLEARANCE"
        surge_badge = "CLEAR"
        bytco_status = "Roads fully deserted. Zero street-level congestion."
        dwarka_delay = "Nominal (8–10 min clear run to Dwarka)"
        recommended_bypass = "Direct Nashik-Pune Highway (NH60) via Dwarka Flyover is wide open."
    else:
        surge_level = "FLUID FLOW"
        surge_badge = "FLUID"
        bytco_status = "Station forecourt & Bytco Circle moving without friction."
        dwarka_delay = "Nominal (Standard commute time)"
        recommended_bypass = "Direct route via NH60 / Bytco Flyover is unobstructed."

    now_str = now.strftime("%Y-%m-%d %H:%M:%S IST")
    time_only = now.strftime("%I:%M %p IST")

    return {
        "status": "online",
        "station_name": "Nashik Road (NK)",
        "coordinates": "20.00°N, 73.82°E",
        "elevation_msl": "592m MSL",
        "last_updated": now_str,
        "last_updated_time": time_only,
        "train_count_next_4h": train_count,
        "down_line_mumbai_trains": down_trains,
        "up_line_inbound_trains": up_trains,
        "total_deboarded_pax_est": total_deboarded,
        "diurnal_window": f"{current_hour:02d}:00–{(current_hour+1)%24:02d}:00 (Weight: {diurnal_factor}x)",
        "surge_level": surge_level,
        "surge_badge": surge_badge,
        "transit_intel": {
            "bytco_circle_status": bytco_status,
            "dwarka_corridor_delay": dwarka_delay,
            "recommended_local_bypass": recommended_bypass,
            "reporting_node": "Nashik Road Field Bureau · Central Railway Junction"
        },
        "trains": trains[:10]
    }

def main():
    print(f"[{datetime.now()}] Polling NTES for Nashik Road (NK) - All Directions...")
    try:
        html = fetch_live_arrivals('NK', hours=4)
        trains = parse_trains(html)
        print(f"Parsed {len(trains)} active trains across both directions.")

        payload = compute_local_transit_intel(trains)

        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            json.dump(payload, f, indent=2, ensure_ascii=False)

        print(f"Successfully generated {OUTPUT_FILE} (Size: {os.path.getsize(OUTPUT_FILE)} bytes)")
    except Exception as e:
        print(f"Error updating rail radar: {e}")

if __name__ == '__main__':
    main()
