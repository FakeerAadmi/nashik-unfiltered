/* ============================================
   NASHIK UNFILTERED — Shared JavaScript
   ============================================ */

/* Determine current page */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const isInfoPage = ['getting-here.html', 'international.html'].includes(currentPage);

/* ============================================
   NAV INJECTION
   ============================================ */
function injectMobileNav() {
  if (document.getElementById('mobileDrawer') || document.getElementById('mobileNav')) return;

  const path = window.location.pathname.split('/').pop() || 'index.html';

  function isAct(p) {
    if (p === 'index.html' && (path === '' || path === 'index.html')) return 'active';
    return path === p ? 'active' : '';
  }

  // Backdrop
  const backdrop = document.createElement('div');
  backdrop.className = 'mono-drawer-backdrop';
  backdrop.id = 'monoDrawerBackdrop';
  backdrop.onclick = closeMobileNav;
  document.body.appendChild(backdrop);

  // Drawer
  const drawer = document.createElement('div');
  drawer.className = 'mono-drawer';
  drawer.id = 'mobileNav';
  drawer.innerHTML = `
    <div class="mono-drawer-header">
      <div class="mono-drawer-brand">
        <img src="assets/images/nashik_unfiltered_new_emblem_dark.png" alt="Nashik Unfiltered Emblem" style="height: 18px; width: auto; vertical-align: middle; margin-right: 8px;">
        NASHIK UNFILTERED
      </div>
      <div class="mono-drawer-close" onclick="closeMobileNav()" aria-label="Close Navigation">✕</div>
    </div>

    <div class="mono-drawer-body">
      <div class="mono-drawer-section">
        <div class="mono-drawer-section-title">01 / The Field Directory</div>
        <div class="mono-drawer-links">
          <a href="index.html" class="mono-drawer-link ${isAct('index.html')}" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">01</span>City Guide</span>
            <span>↗</span>
          </a>
          <a href="food.html" class="mono-drawer-link ${isAct('food.html')}" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">02</span>Food &amp; Cafes</span>
            <span style="font-size:0.7rem;opacity:0.7;">55 spots</span>
          </a>
          <a href="things-to-do.html" class="mono-drawer-link ${isAct('things-to-do.html')}" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">03</span>The Valley &amp; Wines</span>
            <span>↗</span>
          </a>
          <a href="day-trips.html" class="mono-drawer-link ${isAct('day-trips.html')}" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">04</span>Day Trips &amp; Trails</span>
            <span>↗</span>
          </a>
          <a href="shopping.html" class="mono-drawer-link ${isAct('shopping.html')}" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">05</span>Shopping &amp; Craft</span>
            <span>↗</span>
          </a>
          <a href="nightlife.html" class="mono-drawer-link ${isAct('nightlife.html')}" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">06</span>After Dark</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      <div class="mono-drawer-section">
        <div class="mono-drawer-section-title">02 / Affairs, Culture &amp; Archives</div>
        <div class="mono-drawer-links">
          <a href="kumbh.html" class="mono-drawer-link ${isAct('kumbh.html')}" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">07</span>Simhastha Kumbh 2026–28</span>
            <span style="font-size:0.7rem;font-weight:700;color:#E2725B;">Special</span>
          </a>
          <a href="history.html" class="mono-drawer-link ${isAct('history.html')}" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">08</span>Nashik Chronicle</span>
            <span>↗</span>
          </a>
          <a href="gallery.html" class="mono-drawer-link ${isAct('gallery.html')}" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">09</span>Photo Archive</span>
            <span>↗</span>
          </a>
          <a href="news.html" class="mono-drawer-link ${isAct('news.html')}" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">10</span>Civic Affairs &amp; Dispatches</span>
            <span>↗</span>
          </a>
          <a href="updates.html" class="mono-drawer-link ${isAct('updates.html')}" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">11</span>Field Log &amp; Updates</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      <div class="mono-drawer-section">
        <div class="mono-drawer-section-title">03 / Ground Intel &amp; Telemetry</div>
        <div class="mono-drawer-links">
          <a href="telemetry.html" class="mono-drawer-link ${isAct('telemetry.html')}" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">12</span>Live Telemetry Bureau</span>
            <span style="font-size:0.7rem;font-weight:700;color:#1B5E20;">Live Field Desk</span>
          </a>
          <a href="telemetry.html#rail-section" class="mono-drawer-link" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">13</span>Rail Influx Radar</span>
            <span>↗</span>
          </a>
          <a href="telemetry.html#terroir-section" class="mono-drawer-link" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">14</span>Terroir &amp; Microclimate</span>
            <span>↗</span>
          </a>
          <a href="telemetry.html#river-section" class="mono-drawer-link" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">15</span>Godavari River Stage</span>
            <span>↗</span>
          </a>
          <a href="telemetry.html#kumbh-section" class="mono-drawer-link" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">16</span>Simhastha Works Radar</span>
            <span>↗</span>
          </a>
          <a href="telemetry.html#mandi-section" class="mono-drawer-link" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">17</span>Deccan Mandi Wire</span>
            <span>↗</span>
          </a>
          <a href="telemetry.html#audio-dispatch" class="mono-drawer-link" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">18</span>07:00 AM Audio Dispatch</span>
            <span>Listen</span>
          </a>
        </div>
      </div>

      <div class="mono-drawer-section">
        <div class="mono-drawer-section-title">04 / Travel, Logistics &amp; Manifesto</div>
        <div class="mono-drawer-links">
          <a href="getting-here.html" class="mono-drawer-link ${isAct('getting-here.html')}" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">19</span>Transit &amp; Getting Here</span>
            <span>↗</span>
          </a>
          <a href="seasonal.html" class="mono-drawer-link ${isAct('seasonal.html')}" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">20</span>Agricultural Almanac</span>
            <span>↗</span>
          </a>
          <a href="international.html" class="mono-drawer-link ${isAct('international.html')}" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">21</span>International Briefing</span>
            <span>↗</span>
          </a>
          <a href="faq.html" class="mono-drawer-link ${isAct('faq.html')}" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">22</span>Travel FAQ &amp; Intel</span>
            <span>↗</span>
          </a>
          <a href="about.html" class="mono-drawer-link ${isAct('about.html')}" onclick="closeMobileNav()">
            <span><span class="mono-drawer-num">23</span>The Manifesto</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>

    <div class="mono-drawer-footer">
      <div class="mono-drawer-weather">
        <span>● 24°C · Clear · Wine Harvest Season</span>
      </div>
      <a href="getting-here.html" class="mono-drawer-cta">Plan Your Visit</a>
    </div>
  `;
  document.body.appendChild(drawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileNav();
  });
}

function injectNav() {
  injectMobileNav();
  if (document.querySelector(".monocle-header") || document.getElementById("mainNav")) return;
  const nav = document.createElement('nav');
  nav.className = 'navbar transparent' + (isInfoPage ? ' dark-nav' : '');
  nav.id = 'mainNav';
  nav.innerHTML = `
    <a href="index.html" class="nav-logo">Nashik <span>Unfiltered</span></a>
    <div class="nav-links">
      <a href="things-to-do.html" ${currentPage === 'things-to-do.html' ? 'class="active"' : ''}>Things To Do</a>
      <a href="food.html" ${currentPage === 'food.html' ? 'class="active"' : ''}>Food & Cafes</a>
      <a href="day-trips.html" ${currentPage === 'day-trips.html' ? 'class="active"' : ''}>Day Trips</a>
      <a href="shopping.html" ${currentPage === 'shopping.html' ? 'class="active"' : ''}>Shopping</a>
      <a href="nightlife.html" ${currentPage === 'nightlife.html' ? 'class="active"' : ''}>After Dark</a>
      <a href="history.html" ${currentPage === 'history.html' ? 'class="active"' : ''}>History</a>
      <a href="news.html" class="nav-news ${currentPage === 'news.html' ? 'active' : ''}"><span class="news-dot"></span>What's New</a>
      <a href="getting-here.html" class="nav-cta ${currentPage === 'getting-here.html' ? 'active' : ''}">Plan Visit</a>
    </div>
    <div class="nav-hamburger" id="hamburger" onclick="openMobileNav()">
      <span></span><span></span><span></span>
    </div>
  `;
  document.body.prepend(nav);
}

function openMobileNav() {
  let drawer = document.getElementById('mobileNav') || document.getElementById('mobileDrawer');
  let backdrop = document.getElementById('monoDrawerBackdrop') || document.getElementById('drawerBackdrop');
  if (!drawer) {
    injectMobileNav();
    drawer = document.getElementById('mobileNav') || document.getElementById('mobileDrawer');
    backdrop = document.getElementById('monoDrawerBackdrop') || document.getElementById('drawerBackdrop');
  }
  if (drawer) drawer.classList.add('open');
  if (backdrop) backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  const drawer = document.getElementById('mobileNav') || document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('monoDrawerBackdrop') || document.getElementById('drawerBackdrop');
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

/* Sticky nav on scroll */
function initNavScroll() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
      nav.classList.remove('transparent');
    } else {
      nav.classList.remove('scrolled');
      nav.classList.add('transparent');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* Footer injection removed: all pages use canonical mono-footer */
function injectFooter() { /* noop */ }

/* ============================================
   SCROLL REVEAL
   ============================================ */
function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  elements.forEach(el => observer.observe(el));
}

/* ============================================
   VIBE TAG FILTER
   ============================================ */
let activeFilters = new Set();

function initVibeFilter() {
  // Collect all filter buttons
  const filterBtns = document.querySelectorAll('.vibe-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.dataset.tag;
      if (activeFilters.has(tag)) {
        activeFilters.delete(tag);
        btn.classList.remove('active');
      } else {
        activeFilters.add(tag);
        btn.classList.add('active');
      }
      filterCards();
    });
  });

  // Reset button
  const resetBtn = document.getElementById('resetFilters');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      activeFilters.clear();
      filterBtns.forEach(b => b.classList.remove('active'));
      filterCards();
    });
  }
}

function filterCards() {
  const cards = document.querySelectorAll('[data-tags]');
  cards.forEach(card => {
    if (activeFilters.size === 0) {
      card.style.display = '';
      card.style.opacity = '1';
      return;
    }
    const cardTags = card.dataset.tags.split(',').map(t => t.trim());
    const matches = [...activeFilters].every(f => cardTags.includes(f));
    card.style.display = matches ? '' : 'none';
    card.style.opacity = matches ? '1' : '0';
  });
}

/* ============================================
   SEASONAL BANNER (What's On)
   ============================================ */
const seasonalData = {
  0: { label: 'January', theme: 'Cool & Crispy', highlight: 'Ideal trekking weather — hit Harihar Fort before the crowds.', event: 'Nashik Wine Festival', color: '#4A6741' },
  1: { label: 'February', theme: 'Harvest Season', highlight: 'Grape Harvest Festival in full swing at Sula & York vineyards.', event: 'Grape Harvest Festival', color: '#6B1F2A' },
  2: { label: 'March', theme: 'Festival Energy', highlight: 'Holi celebrations are loud, colourful, and unforgettable in old city.', event: 'Holi in Panchavati', color: '#C4622D' },
  3: { label: 'April', theme: 'Heat Rises', highlight: 'Escape to Bhandardara before the real summer hits.', event: 'Visit waterfalls while you can', color: '#8a6c3a' },
  4: { label: 'May', theme: 'Mango Season', highlight: 'Alphonso mangoes from Konkan flood the Saraf Bazaar — eat as many as you can.', event: 'Alphonso Mango Feast', color: '#d4841a' },
  5: { label: 'June', theme: 'Monsoon Arrival', highlight: 'First rains transform the Sahyadris. Igatpuri comes alive with mist.', event: 'Monsoon begins', color: '#2C3E7A' },
  6: { label: 'July', theme: 'Lush & Green', highlight: 'Waterfalls everywhere. Gangapur Dam fills up. The city is gorgeous.', event: 'Waterfall season peak', color: '#4A6741' },
  7: { label: 'August', theme: 'Monsoon Peak', highlight: 'Saptashrungi Mata trek in the rain is otherworldly. Wear good shoes.', event: 'Nag Panchami', color: '#4A6741' },
  8: { label: 'September', theme: 'Ganesh Utsav', highlight: 'Ganesh Chaturthi turns Nashik into a city of processions and drums.', event: 'Ganesh Chaturthi', color: '#C4622D' },
  9: { label: 'October', theme: 'Post-Monsoon Glow', highlight: 'Best time to visit — lush, cool, and clear. Book accommodation early.', event: 'Navratri & Dussehra', color: '#6B1F2A' },
  10: { label: 'November', theme: 'Wine Country', highlight: 'Early harvest begins. The vineyards turn golden. Grab a tour.', event: 'Vineyard harvest tours', color: '#6B1F2A' },
  11: { label: 'December', theme: 'Winter Magic', highlight: 'Cool nights, bonfires at vineyards, Christmas at Nashik\'s cafes.', event: 'Christmas brunches & wine nights', color: '#2C3E7A' }
};

function initSeasonalBanner() {
  const banner = document.getElementById('seasonalBanner');
  if (!banner) return;
  const month = new Date().getMonth();
  const data = seasonalData[month];
  banner.style.background = data.color;
  banner.querySelector('.seasonal-label').textContent = data.label;
  banner.querySelector('.seasonal-theme').textContent = data.theme;
  banner.querySelector('.seasonal-highlight').textContent = data.highlight;
  banner.querySelector('.seasonal-event').textContent = data.event;
}

/* ============================================
   STICKY SECTION HEADERS (Things To Do)
   ============================================ */
function initStickyHeaders() {
  const sections = document.querySelectorAll('[data-section-name]');
  const indicator = document.getElementById('sectionIndicator');
  if (!indicator || !sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        indicator.textContent = e.target.dataset.sectionName;
        indicator.style.opacity = '1';
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ============================================
   FOOD DIRECTORY LIVE FILTER (The Infatuation Hybrid)
   ============================================ */
function initFoodDirectoryFilter() {
  const searchInput = document.getElementById('foodSearchInput');
  const catPills = document.querySelectorAll('.cat-pill');
  const nbrPills = document.querySelectorAll('.nbr-pill');
  const counterEl = document.getElementById('foodSpotCounter');
  const cards = document.querySelectorAll('.food-entry-item');
  if (!cards.length) return;

  let activeCat = 'all';
  let activeNbr = 'all';
  let query = '';

  function filterAll() {
    let visibleCount = 0;
    cards.forEach(card => {
      const text = (card.innerText || '').toLowerCase();
      const cat = (card.dataset.category || '').toLowerCase();
      const nbr = (card.dataset.neighborhood || '').toLowerCase();
      
      const matchesQuery = !query || text.includes(query);
      const matchesCat = activeCat === 'all' || cat.includes(activeCat.toLowerCase());
      const matchesNbr = activeNbr === 'all' || nbr.includes(activeNbr.toLowerCase());

      if (matchesQuery && matchesCat && matchesNbr) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (counterEl) {
      counterEl.textContent = `Showing ${visibleCount} of ${cards.length} curated spots`;
    }

    // Hide empty category blocks if needed
    document.querySelectorAll('.food-category-block').forEach(block => {
      const visibleEntries = block.querySelectorAll('.food-entry-item:not([style*="display: none"])');
      block.style.display = visibleEntries.length > 0 ? '' : 'none';
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      query = e.target.value.trim().toLowerCase();
      filterAll();
    });
  }

  catPills.forEach(btn => {
    btn.addEventListener('click', () => {
      catPills.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCat = btn.dataset.filter;
      filterAll();
    });
  });

  nbrPills.forEach(btn => {
    btn.addEventListener('click', () => {
      nbrPills.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeNbr = btn.dataset.filter;
      filterAll();
    });
  });

  // Auto-activate category from URL hash (e.g. food.html#misal or food.html#cafes)
  function applyHashFilter() {
    const rawHash = (window.location.hash || '').replace('#', '').toLowerCase();
    if (!rawHash) return;
    const targetPill = Array.from(catPills).find(b => b.dataset.filter === rawHash);
    if (targetPill) {
      catPills.forEach(b => b.classList.remove('active'));
      targetPill.classList.add('active');
      activeCat = rawHash;
      filterAll();
    }
  }

  applyHashFilter();
  window.addEventListener('hashchange', applyHashFilter);
}

/* ============================================
   DOSSIER SCROLLSPY & VIBE FILTER
   ============================================ */
function initDossierScrollSpy() {
  const chapters = document.querySelectorAll('.dossier-chapter');
  const navItems = document.querySelectorAll('.dossier-nav-item');
  if (!chapters.length || !navItems.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navItems.forEach(item => {
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }, { rootMargin: '-20% 0px -60% 0px' });

  chapters.forEach(c => observer.observe(c));

  // Vibe switcher
  const vibeBtns = document.querySelectorAll('.dossier-vibe-btn');
  vibeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      vibeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const vibe = btn.dataset.vibe;
      
      chapters.forEach(ch => {
        if (vibe === 'all' || ch.dataset.vibe.includes(vibe)) {
          ch.style.display = '';
        } else {
          ch.style.display = 'none';
        }
      });
    });
  });
}

/* ============================================
   CATALOG FILTER (Shopping)
   ============================================ */
function initCatalogFilter() {
  const filterBtns = document.querySelectorAll('.catalog-filter-btn');
  const items = document.querySelectorAll('.catalog-item');
  if (!filterBtns.length || !items.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.catalog;
      items.forEach(it => {
        if (cat === 'all' || (it.dataset.catalog && it.dataset.catalog.includes(cat))) {
          it.style.display = '';
        } else {
          it.style.display = 'none';
        }
      });
    });
  });
}

/* ============================================
   GALLERY FILTER & LIGHTBOX
   ============================================ */
function initGallery() {
  const pills = document.querySelectorAll('.gallery-filter-pill');
  const cards = document.querySelectorAll('.gallery-photo-card');
  const lightbox = document.getElementById('monoLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');

  if (pills.length && cards.length) {
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const cat = pill.getAttribute('data-cat') || 'all';

        cards.forEach(card => {
          const itemCat = card.getAttribute('data-cat') || '';
          if (cat === 'all' || itemCat === cat) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  if (lightbox && lightboxImg && lightboxCaption) {
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('img');
        const title = card.querySelector('.gallery-card-title');
        const caption = card.querySelector('.gallery-card-caption');
        
        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt || 'Nashik Photo';
          const capText = (title ? title.textContent : '') + (caption ? ' — ' + caption.textContent : '');
          lightboxCaption.textContent = capText;
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    window.closeLightbox = function() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('mono-lightbox-close')) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }
}

/* ============================================
   NAV DROPDOWN TOGGLE (TOUCH & DESKTOP)
   ============================================ */
function initNavDropdowns() {
  const items = document.querySelectorAll('.mono-has-dropdown');
  items.forEach(item => {
    const trigger = item.querySelector('.mono-nav-trigger');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          const isOpen = item.classList.contains('open');
          items.forEach(i => i.classList.remove('open'));
          if (!isOpen) item.classList.add('open');
        }
      });
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.mono-has-dropdown')) {
      items.forEach(i => i.classList.remove('open'));
    }
  });
}

/* ============================================
   INIT ALL
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  initNavScroll();
  initReveal();
  initVibeFilter();
  initSeasonalBanner();
  initStickyHeaders();
  initFoodDirectoryFilter();
  initDossierScrollSpy();
  initCatalogFilter();
  initGallery();
  initNavDropdowns();
  initDistrictAtlas();
  initRedditWire();
});


/* ============================================================
   SOLARI DI UDINE / DOT-MATRIX CONCOURSE MASTER BOARD
   ============================================================ */
let solariMasterData = null;
let solariCurrentFilter = 'all';
let solariSearchQuery = '';
let solariSoundEnabled = false;
let solariAudioCtx = null;
let solariClockTimer = null;

const SOLARI_CHARS = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789:.-➔·";

// Procedural mechanical keyboard / split-flap tile snap click
function playMechanicalClick() {
  if (!solariSoundEnabled) return;
  try {
    if (!solariAudioCtx) {
      solariAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (solariAudioCtx.state === 'suspended') {
      solariAudioCtx.resume();
    }

    const now = solariAudioCtx.currentTime;

    // 1. High-frequency tactile switch click (3600Hz down to 2400Hz, 8ms)
    const osc = solariAudioCtx.createOscillator();
    const oscGain = solariAudioCtx.createGain();
    const highPass = solariAudioCtx.createBiquadFilter();

    highPass.type = 'highpass';
    highPass.frequency.setValueAtTime(2200, now);

    osc.type = 'square';
    osc.frequency.setValueAtTime(3600 + Math.random() * 400, now);
    osc.frequency.exponentialRampToValueAtTime(2400, now + 0.008);

    oscGain.gain.setValueAtTime(0.04, now);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.008);

    osc.connect(highPass);
    highPass.connect(oscGain);
    oscGain.connect(solariAudioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.009);

    // 2. Plastic tile resonance body (1600Hz decaying in 14ms)
    const bodyOsc = solariAudioCtx.createOscillator();
    const bodyGain = solariAudioCtx.createGain();
    const bandPass = solariAudioCtx.createBiquadFilter();

    bandPass.type = 'bandpass';
    bandPass.frequency.setValueAtTime(1600, now);
    bandPass.Q.setValueAtTime(3.0, now);

    bodyOsc.type = 'triangle';
    bodyOsc.frequency.setValueAtTime(1700 + Math.random() * 200, now);
    bodyOsc.frequency.exponentialRampToValueAtTime(1100, now + 0.014);

    bodyGain.gain.setValueAtTime(0.03, now);
    bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.014);

    bodyOsc.connect(bandPass);
    bandPass.connect(bodyGain);
    bodyGain.connect(solariAudioCtx.destination);

    bodyOsc.start(now);
    bodyOsc.stop(now + 0.015);
  } catch (e) {}
}

window.toggleSolariSound = function() {
  solariSoundEnabled = !solariSoundEnabled;
  const btn = document.getElementById('solariSoundToggle');
  const label = document.getElementById('solariSoundLabel');
  if (btn && label) {
    if (solariSoundEnabled) {
      btn.classList.add('active');
      label.textContent = 'SOUND: ON';
      playMechanicalClick();
    } else {
      btn.classList.remove('active');
      label.textContent = 'SOUND: OFF';
    }
  }
};

function updateSolariClock() {
  const clockEl = document.getElementById('solariClock');
  if (!clockEl) return;
  const now = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60 * 1000) + istOffset);
  const h = String(istTime.getHours()).padStart(2, '0');
  const m = String(istTime.getMinutes()).padStart(2, '0');
  const s = String(istTime.getSeconds()).padStart(2, '0');
  clockEl.textContent = `${h}:${m}:${s} IST`;
}

// Deliberate, rhythmic mechanical character flip animation (slower speed)
function cycleCellText(el, finalText, delayMs = 0) {
  setTimeout(() => {
    const target = (finalText || '').trim().toUpperCase();
    if (!target) {
      el.textContent = ' ';
      return;
    }
    const len = target.length;
    let step = 0;
    const maxSteps = 8 + Math.floor(Math.random() * 4); // 8-11 deliberate flips

    el.classList.add('solari-flipping');

    const interval = setInterval(() => {
      step++;
      if (step >= maxSteps) {
        clearInterval(interval);
        el.textContent = target;
        el.classList.remove('solari-flipping');
        playMechanicalClick();
      } else {
        let display = '';
        for (let i = 0; i < len; i++) {
          if (target[i] === ' ' || target[i] === ':' || target[i] === '-' || target[i] === '➔') {
            display += target[i];
          } else if (step > maxSteps - 3) {
            display += target[i];
          } else {
            display += SOLARI_CHARS[Math.floor(Math.random() * SOLARI_CHARS.length)];
          }
        }
        el.textContent = display;
        if (Math.random() > 0.4) playMechanicalClick();
      }
    }, 68); // 68ms per flip step for a crisp mechanical rhythm
  }, delayMs);
}

async function initRailRadar() {
  const container = document.getElementById('railRadarWidget');
  if (!container) return;

  try {
    let data = null;
    try {
      const hubRes = await fetch('data/telemetry_hub.json?t=' + Date.now());
      if (hubRes.ok) {
        const hub = await hubRes.json();
        if (hub && hub.rail_influx && hub.rail_influx.trains && hub.rail_influx.trains.length > 0) {
          data = hub.rail_influx;
        }
      }
    } catch (e) {}

    if (!data) {
      const res = await fetch('data/rail_influx.json?t=' + Date.now());
      if (res.ok) data = await res.json();
    }

    if (!data) throw new Error('Data not found');
    solariMasterData = data;

    // If board is already mounted, re-filter & flip rows smoothly into new data
    const existingBoard = document.getElementById('solariBoard');
    if (existingBoard) {
      const countEl = document.getElementById('countAll');
      if (countEl && data.trains) countEl.textContent = data.trains.length;
      applySolariFilters();
    } else {
      renderSolariMasterBoard(container, data);
    }
  } catch (err) {
    console.log('Rail radar offline or using static fallback:', err);
    if (!document.getElementById('solariBoard')) {
      renderStaticRailFallback(container);
    }
  }
}

function renderSolariMasterBoard(container, data) {
  const intel = data.transit_intel || {};
  const trains = data.trains || [];

  container.innerHTML = `
    <div class="solari-board-container" id="solariBoard">
      <!-- Master Board Header -->
      <div class="solari-header">
        <div class="solari-header-left">
          <div class="solari-icon-box" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#F5A623" stroke-width="2">
              <rect x="4" y="3" width="16" height="15" rx="2"></rect>
              <path d="M4 11h16M8 3v4M16 3v4"></path>
              <circle cx="8" cy="15" r="1.5" fill="#F5A623"></circle>
              <circle cx="16" cy="15" r="1.5" fill="#F5A623"></circle>
              <path d="M6 18l-2 3M18 18l2 3M8 21h8"></path>
            </svg>
          </div>
          <div>
            <div class="solari-title">ARRIVALS &amp; RAIL INFLUX</div>
            <div class="solari-subtitle">CENTRAL RAILWAY · NASHIK ROAD (NK) · MAIN CONCOURSE</div>
          </div>
        </div>

        <div class="solari-header-right">
          <div class="solari-clock-box">
            <span class="solari-clock-label">STATION TIME</span>
            <span class="solari-clock-digits" id="solariClock">02:35:10 IST</span>
          </div>
          <button class="solari-sound-btn" id="solariSoundToggle" onclick="toggleSolariSound()" title="Toggle mechanical board sound">
            <span id="solariSoundLabel">SOUND: OFF</span>
          </button>
        </div>
      </div>

      <!-- Control Pills & Search -->
      <div class="solari-controls">
        <div class="solari-filter-pills" id="solariFilters">
          <button class="solari-pill active" data-filter="all" onclick="filterSolariBoard('all')">ALL SERVICES (<span id="countAll">${trains.length}</span>)</button>
          <button class="solari-pill" data-filter="down" onclick="filterSolariBoard('down')">FROM MUMBAI (DOWN)</button>
          <button class="solari-pill" data-filter="up" onclick="filterSolariBoard('up')">TOWARDS MUMBAI (UP)</button>
          <button class="solari-pill" data-filter="ontime" onclick="filterSolariBoard('ontime')">ON TIME</button>
          <button class="solari-pill" data-filter="delayed" onclick="filterSolariBoard('delayed')">DELAYED</button>
        </div>
        <div class="solari-search-wrap">
          <input type="text" id="solariSearch" class="solari-search-input" placeholder="SEARCH TRAIN OR CITY..." oninput="handleSolariSearch(this.value)">
        </div>
      </div>

      <!-- Concourse Board Table Grid -->
      <div class="solari-board-scroll">
        <div class="solari-table">
          <div class="solari-row solari-thead">
            <div class="solari-col">TIME</div>
            <div class="solari-col">TRAIN</div>
            <div class="solari-col">SERVICE</div>
            <div class="solari-col">ORIGIN ➔ DESTINATION</div>
            <div class="solari-col">PLAT</div>
            <div class="solari-col">DEBOARD</div>
            <div class="solari-col">REMARK</div>
          </div>
          <div class="solari-tbody" id="solariRowsContainer">
            <!-- Rows populated dynamically -->
          </div>
        </div>
      </div>

      <!-- Station Platform & Road Impact Footer -->
      <div class="solari-footer">
        <div class="solari-footer-metric">
          <span class="solari-dot-green"></span>
          <span>CORRIDOR FLOW: <strong>${data.surge_level || 'NORMAL DISPATCH'}</strong></span>
        </div>
        <div class="solari-footer-metric">
          <span>EST. DEBOARDED (4H): <strong>~${(data.total_deboarded_pax_est || 0).toLocaleString()} PASSENGERS</strong></span>
        </div>
        <div class="solari-footer-metric">
          <span>BYTCO ARTERIAL: <strong>${intel.dwarka_corridor_delay || 'NOMINAL (8–10 MIN RUN)'}</strong></span>
        </div>
      </div>
    </div>
  `;

  // Start live clock
  if (solariClockTimer) clearInterval(solariClockTimer);
  updateSolariClock();
  solariClockTimer = setInterval(updateSolariClock, 1000);

  // Render initial rows with cascading animation
  renderSolariRows(trains, true);
}

function renderSolariRows(trains, animate = true) {
  const container = document.getElementById('solariRowsContainer');
  if (!container) return;

  if (!trains || trains.length === 0) {
    container.innerHTML = `
      <div style="padding: 28px 20px; text-align: center; color: #777; font-family: 'DotGothic16', monospace; font-size: 1.1rem; letter-spacing: 0.08em;">
        NO SCHEDULED INBOUND TRAINS FOUND IN THIS CORRIDOR
      </div>
    `;
    return;
  }

  container.innerHTML = trains.map((t, idx) => {
    const isDelay = t.delay && t.delay.includes('+');
    const statusClass = isDelay ? 'red' : 'green';
    const statusText = isDelay ? t.delay.toUpperCase() : 'ON TIME';
    const platCode = (t.platform || 'PF 2').replace('Platform ', 'PF ');
    const deboardPax = t.est_deboarded_pax ? `~${t.est_deboarded_pax} PAX` : '~160 PAX';
    const serviceName = (t.name || 'EXPRESS').toUpperCase();
    const routeText = (t.route_display || t.route || '').toUpperCase();

    return `
      <div class="solari-row" onclick="toggleSolariDetail('${t.number}')" title="Click to inspect route & transit intelligence">
        <div class="solari-col"><span class="solari-cell amber" data-final="${t.arrival_time}">00:00</span></div>
        <div class="solari-col"><span class="solari-cell amber" data-final="${t.number}">00000</span></div>
        <div class="solari-col"><span class="solari-cell white" data-final="${serviceName}">${serviceName.substring(0, 16)}</span></div>
        <div class="solari-col"><span class="solari-cell dim" data-final="${routeText}">${routeText.substring(0, 36)}</span></div>
        <div class="solari-col"><span class="solari-cell white" data-final="${platCode}">${platCode}</span></div>
        <div class="solari-col"><span class="solari-cell dim" data-final="${deboardPax}">${deboardPax}</span></div>
        <div class="solari-col"><span class="solari-cell ${statusClass}" data-final="${statusText}">${statusText}</span></div>
      </div>
      <div class="solari-detail-drawer" id="solariDetail_${t.number}">
        <div class="solari-detail-grid">
          <div>
            <div class="solari-detail-title">CORRIDOR &amp; SERVICE CATEGORY</div>
            <div class="solari-detail-body">${t.direction || 'CENTRAL RAILWAY MAINLINE'} · ${t.category || 'Superfast Express'}</div>
          </div>
          <div>
            <div class="solari-detail-title">STATION DEBOARDING INFLUX</div>
            <div class="solari-detail-body">${deboardPax} deboarding at Nashik Road (${t.deboard_ratio_pct || 15}% train capacity). Local auto stands staffed at Bytco exit.</div>
          </div>
          <div>
            <div class="solari-detail-title">THAL GHAT &amp; DWARKA ADVISORY</div>
            <div class="solari-detail-body">Kasara to Igatpuri banker locomotive banking clear. NH60 Dwarka arterial travel time to Shalimar/Panchavati: 12 minutes.</div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (animate) {
    const cells = container.querySelectorAll('.solari-cell');
    cells.forEach((cell, i) => {
      const finalText = cell.getAttribute('data-final') || cell.textContent;
      const rowIndex = Math.floor(i / 7);
      const colIndex = i % 7;
      const delay = rowIndex * 95 + colIndex * 20;
      cycleCellText(cell, finalText, delay);
    });
  } else {
    const cells = container.querySelectorAll('.solari-cell');
    cells.forEach(cell => {
      const finalText = cell.getAttribute('data-final');
      if (finalText) cell.textContent = finalText;
    });
  }
}

window.toggleSolariDetail = function(num) {
  const drawer = document.getElementById(`solariDetail_${num}`);
  if (drawer) {
    drawer.classList.toggle('open');
  }
};

window.filterSolariBoard = function(category) {
  solariCurrentFilter = category;

  const pills = document.querySelectorAll('.solari-pill');
  pills.forEach(p => {
    if (p.getAttribute('data-filter') === category) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });

  applySolariFilters();
};

window.handleSolariSearch = function(query) {
  solariSearchQuery = (query || '').toLowerCase().trim();
  applySolariFilters();
};

function applySolariFilters() {
  if (!solariMasterData || !solariMasterData.trains) return;
  let trains = solariMasterData.trains;

  if (solariCurrentFilter === 'down') {
    trains = trains.filter(t => (t.direction || '').toUpperCase().includes('DOWN'));
  } else if (solariCurrentFilter === 'up') {
    trains = trains.filter(t => (t.direction || '').toUpperCase().includes('UP'));
  } else if (solariCurrentFilter === 'ontime') {
    trains = trains.filter(t => (t.delay || '').toLowerCase().includes('on time'));
  } else if (solariCurrentFilter === 'delayed') {
    trains = trains.filter(t => (t.delay || '').includes('+'));
  }

  if (solariSearchQuery) {
    trains = trains.filter(t => {
      const q = solariSearchQuery;
      return (t.number && t.number.includes(q)) ||
             (t.name && t.name.toLowerCase().includes(q)) ||
             (t.route_display && t.route_display.toLowerCase().includes(q)) ||
             (t.direction && t.direction.toLowerCase().includes(q));
    });
  }

  renderSolariRows(trains, true);
}

function renderStaticRailFallback(container) {
  container.innerHTML = `
    <div class="solari-board-container">
      <div class="solari-header">
        <div class="solari-header-left">
          <div class="solari-title">NASHIK ROAD (NK) · PRIMARY TRANSIT GATEWAY</div>
        </div>
      </div>
      <div style="padding:24px;color:#AAA;font-family:'DotGothic16',monospace;font-size:1rem;line-height:1.7;">
        Central Railway Mainline · Coordinates: 20.00°N, 73.82°E<br>
        Nashik Road connects 50+ daily express trains linking CSMT, Pune, Nagpur, Delhi and Varanasi.<br>
        Key daily services: 12110 Panchavati Express, 17618 Tapovan Express, 12534 Pushpak Express, 12138 Punjab Mail.
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  initRailRadar();
  initTelemetryHub();

  // Autonomous 7-minute periodic polling
  setInterval(() => {
    initRailRadar();
    initTelemetryHub();
  }, 7 * 60 * 1000);
});

/* ============================================================
   TELEMETRY BUREAU & AUDIO DISPATCH HYDRATOR
   ============================================================ */
window.toggleAudio = function() {
  const audio = document.getElementById('dispatchAudio');
  const btn = document.getElementById('playBtn');
  if (!audio || !btn) return;

  if (audio.paused) {
    audio.play().then(() => {
      btn.innerHTML = 'Pause';
    }).catch(err => {
      console.log('Audio playback prevented or failed:', err);
    });
  } else {
    audio.pause();
    btn.innerHTML = 'Play Briefing';
  }
};

window.seekAudio = function(e) {
  const audio = document.getElementById('dispatchAudio');
  const wrap = document.getElementById('audioProgressWrap');
  if (!audio || !wrap || !audio.duration) return;

  const rect = wrap.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const pct = Math.max(0, Math.min(1, clickX / rect.width));
  audio.currentTime = pct * audio.duration;
};

function formatSeconds(sec) {
  if (isNaN(sec) || sec === Infinity) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function initAudioListeners() {
  const audio = document.getElementById('dispatchAudio');
  if (!audio) return;

  audio.addEventListener('timeupdate', () => {
    const fill = document.getElementById('audioProgress');
    const timeEl = document.getElementById('audioTime');
    if (fill && audio.duration) {
      fill.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
    }
    if (timeEl) {
      const cur = formatSeconds(audio.currentTime);
      const total = formatSeconds(audio.duration || 75);
      timeEl.textContent = `${cur} / ${total}`;
    }
  });

  audio.addEventListener('ended', () => {
    const btn = document.getElementById('playBtn');
    const fill = document.getElementById('audioProgress');
    if (btn) btn.innerHTML = 'Play Briefing';
    if (fill) fill.style.width = '0%';
  });
}

async function initTelemetryHub() {
  initAudioListeners();

  const tracks = document.querySelectorAll('.telemetry-ticker-track');
  const terroir = document.getElementById('terroirCurrent');
  const river = document.getElementById('riverStorage');
  if (!tracks.length && !terroir && !river) return;

  try {
    const res = await fetch('data/telemetry_hub.json?t=' + Date.now());
    if (!res.ok) throw new Error('Telemetry hub not found');
    const data = await res.json();
    hydrateTelemetryPage(data);
  } catch (err) {
    console.log('Telemetry hub using static fallbacks:', err);
  }
}

function hydrateTelemetryPage(data) {
  if (!data) return;

  // 1. Ticker tape marquee (all instances across the site)
  const tracks = document.querySelectorAll('.telemetry-ticker-track');
  if (tracks.length > 0) {
    const surge = data.rail_influx ? data.rail_influx.surge_badge : 'NOMINAL';
    const delta = data.terroir ? ('+' + data.terroir.diurnal_delta_c + '°C') : '+14.5°C';
    const godavari = data.godavari ? (data.godavari.capacity_pct + '%') : '86.4%';
    const godavariDischarge = data.godavari && data.godavari.discharge_cusecs ? (data.godavari.discharge_cusecs.toLocaleString() + ' CFS') : '1,200 CFS';
    const days = data.kumbh_radar ? (data.kumbh_radar.countdown_days + ' DAYS') : '732 DAYS';

    // Build commodity items dynamically from data.mandi.commodities
    let mandiItemsHtml = '';
    if (data.mandi && Array.isArray(data.mandi.commodities) && data.mandi.commodities.length > 0) {
      mandiItemsHtml = data.mandi.commodities.map(c => {
        let trendCls = '';
        let arrow = '—';
        if (c.trend === 'up') {
          trendCls = 'up';
          arrow = '▲';
        } else if (c.trend === 'down') {
          trendCls = 'down';
          arrow = '▼';
        }
        return `<div class="telemetry-ticker-item">${c.crop.toUpperCase()}: <span class="val ${trendCls}">${c.modal_price} ${arrow}</span></div>`;
      }).join('');
    } else {
      mandiItemsHtml = `
        <div class="telemetry-ticker-item">LASALGAON RED ONION: <span class="val up">₹2,450 / QTL ▲</span></div>
        <div class="telemetry-ticker-item">NASHIK GRAPES: <span class="val">₹95 / KG —</span></div>
        <div class="telemetry-ticker-item">KALWAN POMEGRANATE: <span class="val up">₹140 / KG ▲</span></div>
        <div class="telemetry-ticker-item">DINDORI TOMATO: <span class="val down">₹18 / KG ▼</span></div>
      `;
    }

    const fullItemsHtml = `
      <div class="telemetry-ticker-item">TELEMETRY: <span class="val">ACTIVE TRANSMISSION</span></div>
      <div class="telemetry-ticker-item">STATION: <span class="val">NK ROAD ${surge}</span></div>
      <div class="telemetry-ticker-item">TERROIR: <span class="val">${delta} DIURNAL DELTA</span></div>
      <div class="telemetry-ticker-item">GODAVARI: <span class="val">${godavari} STORAGE · ${godavariDischarge}</span></div>
      <div class="telemetry-ticker-item">SIMHASTHA 2026: <span class="val">T-MINUS ${days}</span></div>
      ${mandiItemsHtml}
      <div class="telemetry-ticker-item">DISPATCH: <span class="val">${data.refresh_time_short || '07:00 IST'} MORNING WIRE</span></div>
    `;

    tracks.forEach(track => {
      track.innerHTML = `
        <div class="telemetry-ticker-group">${fullItemsHtml}</div>
        <div class="telemetry-ticker-group" aria-hidden="true">${fullItemsHtml}</div>
      `;
    });
  }

  // 2. Audio Dispatch
  if (data.audio_dispatch) {
    const headline = document.getElementById('audioHeadline');
    const transcript = document.getElementById('audioTranscript');
    if (headline && data.audio_dispatch.headline) headline.textContent = data.audio_dispatch.headline;
    if (transcript && data.audio_dispatch.transcript) transcript.textContent = `"${data.audio_dispatch.transcript}"`;
  }

  // 3. Terroir
  if (data.terroir) {
    const curEl = document.getElementById('terroirCurrent');
    const delEl = document.getElementById('terroirDelta');
    const humEl = document.getElementById('terroirHumidity');
    const comEl = document.getElementById('terroirComment');

    if (curEl) curEl.textContent = `${data.terroir.current_temp_c}°C`;
    if (delEl) delEl.textContent = `+${data.terroir.diurnal_delta_c}°C`;
    if (humEl) humEl.textContent = `${data.terroir.humidity_pct}%`;
    if (comEl && data.terroir.editorial_take) comEl.textContent = data.terroir.editorial_take;
  }

  // 4. Godavari River
  if (data.godavari) {
    const storEl = document.getElementById('riverStorage');
    const outEl = document.getElementById('riverOutflow');
    const safeEl = document.getElementById('riverSafety');
    const comEl = document.getElementById('riverComment');

    if (storEl) storEl.textContent = `${data.godavari.capacity_pct}%`;
    if (outEl) outEl.textContent = `${(data.godavari.discharge_cusecs || 1200).toLocaleString()} cfs`;
    if (safeEl) safeEl.textContent = data.godavari.bathing_safety_grade || 'Grade A';
    if (comEl && data.godavari.editorial_bulletin) comEl.textContent = data.godavari.editorial_bulletin;
  }

  // 5. Simhastha Kumbh Radar
  if (data.kumbh_radar) {
    const cdEl = document.getElementById('kumbhCountdown');
    const pctEl = document.getElementById('kumbhOverallPct');
    const fillEl = document.getElementById('kumbhProgressFill');
    const listEl = document.getElementById('kumbhProjectsList');

    if (cdEl) cdEl.textContent = `${data.kumbh_radar.countdown_days} DAYS LEFT`;
    if (pctEl) pctEl.textContent = `${data.kumbh_radar.progress_overall_pct}% Complete`;
    if (fillEl) fillEl.style.width = `${data.kumbh_radar.progress_overall_pct}%`;

    if (listEl && Array.isArray(data.kumbh_radar.priority_milestones)) {
      listEl.innerHTML = data.kumbh_radar.priority_milestones.map((m, idx, arr) => `
        <div style="padding: 6px 0; ${idx < arr.length - 1 ? 'border-bottom: 1px solid var(--mono-hairline);' : ''} display:flex; justify-content:space-between;">
          <span>${m.name}</span>
          <strong style="color:#111;">${m.progress_pct}%</strong>
        </div>
      `).join('');
    }
  }

  // 6. APMC Mandi Wire
  if (data.mandi && Array.isArray(data.mandi.commodities)) {
    const tableBody = document.getElementById('mandiTableBody');
    if (tableBody) {
      tableBody.innerHTML = data.mandi.commodities.map(c => {
        let trendColor = '#666';
        let trendIcon = '— Steady';
        if (c.trend === 'up') {
          trendColor = '#1B5E20';
          trendIcon = '▲ Up';
        } else if (c.trend === 'down') {
          trendColor = '#C62828';
          trendIcon = '▼ Soft';
        }
        return `
          <tr>
            <td><strong>${c.crop}</strong></td>
            <td>${c.modal_price}</td>
            <td>${c.min_max}</td>
            <td style="color:${trendColor};font-weight:700;">${trendIcon}</td>
          </tr>
        `;
      }).join('');
    }
  }
}


/* ============================================================
   THE DISTRICTS OF NASHIK: INTERACTIVE TOPOGRAPHIC ATLAS
   ============================================================ */
const DISTRICTS_DATA = {
  "old-nashik": {
    tag: "DISTRICT 01 · SACRED CORE",
    elevation: "585m MSL",
    title: "Old Nashik & Panchavati",
    marathi: "जुने नाशिक आणि पंचवटी",
    summary: "The 2,000-year-old beating heart of the city. A living maze of Peshwa-era timber wadas, narrow gallis, and ancient basalt steps where priests chant at dawn and hereditary coppersmiths beat pure metal by hand.",
    terrain: "Basalt River Terraces & Sacred Bend",
    sound: "Hammer on copper, river lap, temple bells",
    primeHour: "06:30 – 09:00 AM (Dawn prayers & market)",
    waypoints: [
      { name: "Tambat Ali", cat: "Copper Artisans Guild" },
      { name: "Ramkund Basalt Steps", cat: "Godavari Confluence" },
      { name: "Kalaram Mandir", cat: "Black Stone Peshwa Shrine" },
      { name: "Sarkar Wada", cat: "18th-C. Architectural Relic" }
    ],
    link: "history.html#panchavati",
    linkText: "Explore Old Nashik & Sacred Heritage →"
  },
  "gangapur-road": {
    tag: "DISTRICT 02 · CIVIC & CULTURAL CORRIDOR",
    elevation: "595m MSL",
    title: "Gangapur & College Road",
    marathi: "गंगापूर आणि कॉलेज रोड",
    summary: "The modern intellectual spine of Nashik. Tree-canopied avenues hosting independent specialty coffee roasteries, university campuses, bookstores, and modernist residential enclaves overlooking the Godavari basin.",
    terrain: "Gently Sloping Plateau & Alluvial Basin",
    sound: "Espresso steam, student chatter, Gulmohar rustle",
    primeHour: "08:00 – 11:00 AM & 05:00 – 08:00 PM",
    waypoints: [
      { name: "The Pilgrim Specialty Coffee", cat: "Single-Origin Micro-Roast" },
      { name: "KTHM Campus & Godavari Promenade", cat: "Canopied Walk" },
      { name: "Goda Park Riverside Deck", cat: "Sunset Amphitheatre" },
      { name: "Sula Urban Tasting Lounge", cat: "Boutique Pours" }
    ],
    link: "day-trips.html",
    linkText: "Explore Gangapur & College Road →"
  },
  "wine-basin": {
    tag: "DISTRICT 03 · VITICULTURAL BASIN",
    elevation: "610m MSL",
    title: "Wine Terroir Basin (Gangapur & Dindori)",
    marathi: "द्राक्ष आणि वाईन व्हॅली",
    summary: "The Northern Deccan’s premium viticultural terroir. Nestled between the tranquil backwaters of Gangapur Dam and rolling red-laterite foothills, where Chenin Blanc, Shiraz, and Cabernet Sauvignon thrive in the 15°C diurnal shift.",
    terrain: "Gravelly Volcanic Loam & Lakeside Slopes",
    sound: "Tractor hum, Sahyadri breeze, clink of stemware",
    primeHour: "04:30 – 07:30 PM (Golden hour harvest light)",
    waypoints: [
      { name: "Beyond by Sula & Vineyard Estate", cat: "Heritage Plots" },
      { name: "York Winery Balcony", cat: "Unobstructed Reservoir Vistas" },
      { name: "Vallonné Vineyards (Igatpuri-side)", cat: "Boutique French Barrel Aging" },
      { name: "Chandon India Spumante Cellars", cat: "Méthode Traditionnelle" }
    ],
    link: "things-to-do.html#vineyards",
    linkText: "Inspect the Wine Terroir Dossier →"
  },
  "deolali": {
    tag: "DISTRICT 04 · COLONIAL HIGHLANDS",
    elevation: "615m MSL",
    title: "Deolali Cantonment",
    marathi: "देवळाली कॅम्प",
    summary: "Established in 1861 as a British convalescent hill station, Deolali retains wide quiet avenues lined with silver oak and bougainvillea, red-tiled colonial bungalows, Temple Hill vistas, and an unhurried, serene microclimate.",
    terrain: "High Deccan Tableland & Basalt Outcrops",
    sound: "Bugle calls at dusk, dry pine needles crunching, breeze",
    primeHour: "06:00 – 08:30 AM & 05:00 – 07:00 PM",
    waypoints: [
      { name: "Temple Hill (Khandoba Shrine)", cat: "360° Deccan Panoramas" },
      { name: "Barnes School & Stone Chapels", cat: "19th-C. Gothic Architecture" },
      { name: "Rest Camp Road Walk", cat: "Century-Old Banyan Canopy" },
      { name: "Artillery Centre Museum", cat: "Regimental Archives" }
    ],
    link: "day-trips.html#deolali",
    linkText: "Explore Deolali Cantonment →"
  },
  "nashik-road": {
    tag: "DISTRICT 05 · INDUSTRIAL & RAIL HUB",
    elevation: "575m MSL",
    title: "Nashik Road & Industrial Spine",
    marathi: "नाशिक रोड आणि उद्योग क्षेत्र",
    summary: "The city’s historic transport gateway and industrial bedrock. Home to India’s Currency Note Press (1928), the bustling Central Railway junction, and culinary legends serving fiery black-gravy misal to generations of rail commuters.",
    terrain: "Railway Alluvial Flatland & Ambad Plateau",
    sound: "Locomotive whistles, clatter of steel woks, shift sirens",
    primeHour: "07:00 – 10:00 AM (Morning rail arrivals & misal)",
    waypoints: [
      { name: "Nashik Road Junction (NK)", cat: "Central Railway Trunk" },
      { name: "India Security Press & CNP (Est. 1928)", cat: "Colonial Mint Complex" },
      { name: "Shamsundar Misal", cat: "Legendary Black Tari Since 1980" },
      { name: "Ambad MIDC Precision Engineering Ring", cat: "Aero & Auto Hub" }
    ],
    link: "food.html#misal",
    linkText: "Discover Nashik Road & Misal Heritage →"
  },
  "trimbak-watershed": {
    tag: "DISTRICT 06 · SACRED SAHYADRI FOOTHILLS",
    elevation: "750m – 1,295m MSL",
    title: "Trimbak & Brahmagiri Watershed",
    marathi: "त्र्यंबकेश्वर आणि ब्रह्मगिरी",
    summary: "The dramatic western rampart where the Godavari River is born out of volcanic basalt crevices. Dominated by the vertical cliffs of Brahmagiri mountain and the 12th-century Jyotirlinga shrine carved from dense black basalt.",
    terrain: "Precipitous Sahyadri Escarpment & Cloud Forest",
    sound: "Cascading water, wind off cliffs, temple conch",
    primeHour: "05:30 – 08:30 AM (Mist clearing off Brahmagiri)",
    waypoints: [
      { name: "Trimbakeshwar Jyotirlinga", cat: "Peshwa Black Basalt Architecture" },
      { name: "Brahmagiri Cliff Trail", cat: "750 Stone Steps to the Godavari Source" },
      { name: "Kushavarta Kund", cat: "Sacred Stepped Reservoir" },
      { name: "Anjaneri Hill", cat: "Birthplace of Hanuman & Tableland Trek" }
    ],
    link: "history.html#trimbak",
    linkText: "Ascend to Trimbak & Brahmagiri →"
  }
};

window.selectDistrict = function(districtId) {
  const data = DISTRICTS_DATA[districtId];
  if (!data) return;

  // 1. Update selector buttons
  const buttons = document.querySelectorAll(".district-tab-btn");
  buttons.forEach(btn => {
    if (btn.getAttribute("data-district") === districtId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // 2. Update SVG polygons and pins
  const polygons = document.querySelectorAll(".district-polygon");
  polygons.forEach(p => p.classList.remove("active"));
  const activePoly = document.getElementById(`poly-${districtId}`);
  if (activePoly) activePoly.classList.add("active");

  const pins = document.querySelectorAll(".district-pin");
  pins.forEach(pin => pin.classList.remove("active"));
  const activePin = document.getElementById(`pin-${districtId}`);
  if (activePin) activePin.classList.add("active");

  // 3. Update dossier card with micro-fade transition
  const card = document.getElementById("districtDossierCard");
  if (card) {
    card.classList.add("fading");
    setTimeout(() => {
      const tagEl = document.getElementById("dossierTag");
      const elevEl = document.getElementById("dossierElevation");
      const titleEl = document.getElementById("dossierTitle");
      const marathiEl = document.getElementById("dossierMarathi");
      const summaryEl = document.getElementById("dossierSummary");
      const terrainEl = document.getElementById("dossierTerrain");
      const soundEl = document.getElementById("dossierSound");
      const primeEl = document.getElementById("dossierPrimeHour");
      const waypointsEl = document.getElementById("dossierWaypoints");
      const btnEl = document.getElementById("dossierBtn");

      if (tagEl) tagEl.textContent = data.tag;
      if (elevEl) elevEl.textContent = data.elevation;
      if (titleEl) titleEl.textContent = data.title;
      if (marathiEl) marathiEl.textContent = data.marathi;
      if (summaryEl) summaryEl.textContent = data.summary;
      if (terrainEl) terrainEl.textContent = data.terrain;
      if (soundEl) soundEl.textContent = data.sound;
      if (primeEl) primeEl.textContent = data.primeHour;

      if (waypointsEl && Array.isArray(data.waypoints)) {
        waypointsEl.innerHTML = data.waypoints.map(w => `
          <li class="dossier-waypoint-item">
            <strong>${w.name}</strong>
            <span class="cat">${w.cat}</span>
          </li>
        `).join("");
      }

      if (btnEl) {
        btnEl.href = data.link;
        btnEl.textContent = data.linkText;
      }

      card.classList.remove("fading");
    }, 120);
  }
};

window.initDistrictAtlas = function() {
  const section = document.getElementById("districtAtlasSection");
  if (!section) return;

  // Bind interactive SVG polygons and pins
  Object.keys(DISTRICTS_DATA).forEach(id => {
    const poly = document.getElementById(`poly-${id}`);
    if (poly) {
      poly.style.cursor = "pointer";
      poly.addEventListener("click", () => window.selectDistrict(id));
    }
    const pin = document.getElementById(`pin-${id}`);
    if (pin) {
      pin.style.cursor = "pointer";
      pin.addEventListener("click", () => window.selectDistrict(id));
    }
  });

  // Default to old-nashik
  window.selectDistrict("old-nashik");
};


/* ============================================================
   SUBREDDIT WIRE: r/nashik DISPATCH & TELEMETRY
   ============================================================ */
window.filterReddit = function(category) {
  const tabs = document.querySelectorAll(".mono-reddit-tab");
  tabs.forEach(tab => {
    if (tab.getAttribute("data-category") === category) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  const cards = document.querySelectorAll(".mono-reddit-card");
  cards.forEach(card => {
    const cardCat = card.getAttribute("data-category");
    if (category === "all" || cardCat === category) {
      card.style.display = "flex";
      card.style.opacity = "0";
      setTimeout(() => { card.style.opacity = "1"; }, 40);
    } else {
      card.style.display = "none";
    }
  });
};

window.initRedditWire = function() {
  const grid = document.getElementById("redditGrid");
  if (!grid) return;

  fetch("data/reddit_feed.json")
    .then(res => res.json())
    .then(data => {
      if (!data || !Array.isArray(data.dispatches) || data.dispatches.length === 0) return;
      grid.innerHTML = data.dispatches.map(item => `
        <article class="mono-reddit-card" data-category="${item.category}">
          <div class="mono-reddit-meta-row">
            <span class="mono-reddit-flair">${item.flair}</span>
            <span class="mono-reddit-time">${item.time_ago}</span>
          </div>
          <h3 class="mono-reddit-card-title">
            <a href="${item.url}" target="_blank" rel="noopener">
              ${item.title}
            </a>
          </h3>
          <p class="mono-reddit-excerpt">${item.excerpt}</p>
          <div class="mono-reddit-footer-row">
            <div class="mono-reddit-stats">
              <span class="mono-reddit-ups">▲ ${item.upvotes}</span>
              <span>${item.comments_count} Comments</span>
              <span style="color:#999;">${item.author}</span>
            </div>
            <a href="${item.url}" target="_blank" rel="noopener" class="mono-reddit-link">Thread ↗</a>
          </div>
        </article>
      `).join("");
    })
    .catch(err => {
      // Graceful fallback to pre-rendered HTML
      console.log("Using static Reddit wire fallback:", err);
    });
};
