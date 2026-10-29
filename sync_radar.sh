#!/bin/bash
# Sync latest radar telemetry and audio dispatch from Raspberry Pi to local website directory
set -e
scp -i ~/.ssh/id_ed25519_pi -q shreyas@192.168.10.211:~/nashik-radar/data/rail_influx.json "/Users/shreyas/Documents/Nashik Final/data/rail_influx.json"
scp -i ~/.ssh/id_ed25519_pi -q shreyas@192.168.10.211:~/nashik-radar/data/telemetry_hub.json "/Users/shreyas/Documents/Nashik Final/data/telemetry_hub.json"
scp -i ~/.ssh/id_ed25519_pi -q shreyas@192.168.10.211:~/nashik-radar/audio/morning_dispatch.mp3 "/Users/shreyas/Documents/Nashik Final/audio/morning_dispatch.mp3"
echo "Telemetry & Morning Dispatch synced successfully from Raspberry Pi node."
