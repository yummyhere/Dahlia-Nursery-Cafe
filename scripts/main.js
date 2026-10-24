/**
 * Dahlia Botanical Café & Nursery — Client Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initScrollReveals();
  initMenuViewSwitcher();
  initMenuFiltering();
  initGalleryLightbox();
  initModals();
  initCafeOpenStatus();
  initDateSpotWaveAnimation();
  initSearchModal();
});

/* -------------------------------------------------------------
 * 1. Navbar Scroll Transition
 * ------------------------------------------------------------- */
function initNavbarScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* -------------------------------------------------------------
 * 2. Mobile Navigation Drawer
 * ------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-close');

  if (!toggleBtn || !mobileNav) return;

  const toggle = () => {
    const isOpen = mobileNav.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  toggleBtn.addEventListener('click', toggle);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      toggle();
    }
  });
}

/* -------------------------------------------------------------
 * 3. Intersection Observer Scroll Reveals
 * ------------------------------------------------------------- */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal-fade-up');
  if (!revealElements.length) return;

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.12
  });

  revealElements.forEach(el => observer.observe(el));
}

/* -------------------------------------------------------------
 * 4. Menu View Switcher (Circular Plate Cards vs Compact Rows)
 * ------------------------------------------------------------- */
function initMenuViewSwitcher() {
  const cardsBtn = document.getElementById('view-cards-btn');
  const rowsBtn = document.getElementById('view-rows-btn');
  const plateGrid = document.getElementById('menu-plate-grid');
  const rowsContainer = document.getElementById('menu-rows-container');

  if (!cardsBtn || !rowsBtn || !plateGrid || !rowsContainer) return;

  cardsBtn.addEventListener('click', () => {
    cardsBtn.classList.add('active');
    rowsBtn.classList.remove('active');
    plateGrid.style.display = 'grid';
    rowsContainer.style.display = 'none';
  });

  rowsBtn.addEventListener('click', () => {
    rowsBtn.classList.add('active');
    cardsBtn.classList.remove('active');
    plateGrid.style.display = 'none';
    rowsContainer.style.display = 'block';
  });
}

/* -------------------------------------------------------------
 * 5. Menu Category Tab Filtering
 * ------------------------------------------------------------- */
function initMenuFiltering() {
  const tabButtons = document.querySelectorAll('.menu-tab-btn');
  const plateCards = document.querySelectorAll('.plate-card');
  const menuItems = document.querySelectorAll('.menu-list-item');
  const categoryHeaders = document.querySelectorAll('.menu-section-category-title');

  if (!tabButtons.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterCategory = btn.getAttribute('data-category');

      // 1. Filter Circular Plate Cards
      plateCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCat === filterCategory) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.35s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });

      // 2. Filter Category Headers & Grids in Compact Rows View
      categoryHeaders.forEach(header => {
        const headerCat = header.getAttribute('data-category');
        const nextGrid = header.nextElementSibling;
        const isGrid = nextGrid && nextGrid.classList.contains('menu-list-grid');

        if (filterCategory === 'all' || headerCat === filterCategory) {
          header.style.display = 'flex';
          if (isGrid) nextGrid.style.display = 'grid';
        } else {
          header.style.display = 'none';
          if (isGrid) nextGrid.style.display = 'none';
        }
      });

      // 3. Filter individual items in Compact Rows
      menuItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filterCategory === 'all' || itemCat === filterCategory) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* -------------------------------------------------------------
 * 5. Gallery Lightbox Modal
 * ------------------------------------------------------------- */
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('gallery-lightbox');
  if (!galleryItems.length || !lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const caption = item.getAttribute('data-caption') || img.alt || '';

      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = caption;

      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/* -------------------------------------------------------------
 * 6. Modals (Menu, Story, Reservation)
 * ------------------------------------------------------------- */
function initModals() {
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
  const closeButtons = document.querySelectorAll('.modal-close-btn');
  const backdrops = document.querySelectorAll('.modal-backdrop');

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-modal-target');
      const modal = document.getElementById(targetId);
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = (modal) => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-backdrop');
      if (modal) closeModal(modal);
    });
  });

  backdrops.forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal(backdrop);
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      backdrops.forEach(m => {
        if (m.classList.contains('active')) closeModal(m);
      });
    }
  });

  // Handle Reservation Form Submission (client mock feedback)
  const reservationForm = document.getElementById('reservation-form');
  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const successMsg = document.getElementById('reservation-success');
      if (successMsg) {
        reservationForm.style.display = 'none';
        successMsg.style.display = 'block';
      }
    });
  }

  // Handle Newsletter Form
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      const btn = newsletterForm.querySelector('button');
      if (input && input.value) {
        btn.textContent = 'Subscribed ✓';
        btn.style.backgroundColor = 'var(--color-moss)';
        input.value = '';
        setTimeout(() => {
          btn.textContent = 'Subscribe';
          btn.style.backgroundColor = '';
        }, 3500);
      }
    });
  }
}

/* -------------------------------------------------------------
 * 7. Live Café Open/Closed Status
 * ------------------------------------------------------------- */
function initCafeOpenStatus() {
  const statusEl = document.getElementById('cafe-live-status');
  if (!statusEl) return;

  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 1 is Monday, ...
  const hour = now.getHours();
  const minute = now.getMinutes();
  const timeInMinutes = hour * 60 + minute;

  // Schedule:
  // Mon (1): Closed
  // Tue - Fri (2-5): 08:30 (510 min) - 19:00 (1140 min)
  // Sat - Sun (6, 0): 09:00 (540 min) - 20:00 (1200 min)
  let isOpen = false;
  let statusText = '';

  if (day === 1) {
    isOpen = false;
    statusText = 'Closed Today (Plant Care Day) · Opens Tuesday 08:30';
  } else if (day >= 2 && day <= 5) {
    if (timeInMinutes >= 510 && timeInMinutes < 1140) {
      isOpen = true;
      statusText = 'Open Today until 19:00 · Fresh Roasts & Greenhouse Seating';
    } else {
      isOpen = false;
      statusText = 'Closed Now · Opens Tomorrow at 08:30';
    }
  } else {
    // Saturday or Sunday
    if (timeInMinutes >= 540 && timeInMinutes < 1200) {
      isOpen = true;
      statusText = 'Open Today until 20:00 · Weekend Brunch & Slow Roasts';
    } else {
      isOpen = false;
      statusText = 'Closed Now · Opens at 09:00';
    }
  }

  const dot = statusEl.querySelector('.status-dot');
  const text = statusEl.querySelector('.status-text');

  if (dot) {
    dot.style.backgroundColor = isOpen ? '#88C377' : '#B87558';
    dot.style.boxShadow = isOpen ? '0 0 8px #88C377' : '0 0 8px #B87558';
  }
  if (text) {
    text.textContent = statusText;
  }
}

/* -------------------------------------------------------------
 * 8. Date Spot Continuous Wave Text Animation
 * ------------------------------------------------------------- */
function initDateSpotWaveAnimation() {
  const textPath = document.getElementById('date-wave-textpath');
  if (!textPath) return;

  let offset = 0;
  let lastTime = performance.now();

  function tick(now) {
    const delta = (now - lastTime) / 1000;
    lastTime = now;
    // Glide text smoothly along wave ribbon (~1.6% per second)
    offset -= 1.6 * delta;
    if (offset <= -40) {
      offset = 0;
    }
    textPath.setAttribute('startOffset', `${offset}%`);
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}


/* -------------------------------------------------------------
 * 10. Search Modal
 * ------------------------------------------------------------- */
function initSearchModal() {
  const MENU_ITEMS = [
    { name: 'Bang Bang Prawns', desc: 'Crispy batter fried prawns, signature sriracha honey sauce.', price: 'Rs. 2,095', cat: 'Starters' },
    { name: 'Trio of Fries', desc: 'Fries in three flavours: truffle & mushrooms / kimchi / bolognese.', price: 'Rs. 1,145', cat: 'Starters' },
    { name: 'Smashed Potatoes', desc: 'Herb & garlic smashed baby potatoes, crème fraîche dip.', price: 'Rs. 995', cat: 'Starters' },
    { name: 'Dahlia Garden Salad', desc: 'Seasonal greens, heirloom tomatoes, lemon-herb vinaigrette.', price: 'Rs. 1,045', cat: 'Starters' },
    { name: 'Slow-Cooked Beef Steak', desc: 'Pan-seared sirloin, chimichurri, grilled seasonal vegetables.', price: 'Rs. 3,595', cat: 'Mains' },
    { name: 'Prawn Aglio Olio', desc: 'Spaghetti, tiger prawns, chilli, garlic, parsley, lemon.', price: 'Rs. 2,795', cat: 'Mains' },
    { name: 'Mushroom Risotto', desc: 'Wild mushroom, parmesan, truffle oil, fresh thyme.', price: 'Rs. 1,995', cat: 'Mains' },
    { name: 'Truffle Chicken', desc: 'Pan-seared chicken breast, truffle cream sauce, mashed potato.', price: 'Rs. 2,695', cat: 'Mains' },
    { name: 'Detroit-Style Pepperoni', desc: 'Caramelised edges, rich tomato base, premium pepperoni.', price: 'Rs. 2,395', cat: 'Detroit Pizza' },
    { name: 'Botanical Veggie Pizza', desc: 'Roasted vegetables, goat cheese, pesto, sun-dried tomatoes.', price: 'Rs. 2,095', cat: 'Detroit Pizza' },
    { name: 'Chicken Tikka Pizza', desc: 'Smoked tikka chicken, mint chutney base, mozzarella.', price: 'Rs. 2,295', cat: 'Detroit Pizza' },
    { name: 'Eggs Benedict', desc: 'Poached eggs, hollandaise, back bacon, toasted sourdough.', price: 'Rs. 1,695', cat: 'Brunch' },
    { name: 'Avocado Toast', desc: 'Smashed avocado, feta, cherry tomatoes, micro herbs, sourdough.', price: 'Rs. 1,395', cat: 'Brunch' },
    { name: 'The Full Dahlia Breakfast', desc: 'Eggs your way, sausage, mushrooms, grilled tomato, toast.', price: 'Rs. 1,895', cat: 'Brunch' },
    { name: 'Brioche French Toast', desc: 'Thick-cut brioche, maple syrup, berries, vanilla cream.', price: 'Rs. 1,295', cat: 'Brunch' },
    { name: 'Chocolate Lava Cake', desc: 'Warm dark chocolate, vanilla ice cream, raspberry coulis.', price: 'Rs. 1,045', cat: 'Desserts' },
    { name: 'Crème Brûlée', desc: 'Classic vanilla bean custard, caramelised sugar crust.', price: 'Rs. 945', cat: 'Desserts' },
    { name: 'Seasonal Fruit Tart', desc: 'Shortcrust pastry, pastry cream, fresh seasonal fruits.', price: 'Rs. 895', cat: 'Desserts' },
    { name: 'Signature Dahlia Latte', desc: 'Double espresso, steamed oat milk, house botanical syrup.', price: 'Rs. 795', cat: 'Coffee' },
    { name: 'Flat White', desc: 'Ristretto shots, silky microfoam, served in a ceramic cup.', price: 'Rs. 645', cat: 'Coffee' },
    { name: 'Matcha Latte', desc: 'Ceremonial grade matcha, steamed milk, light sweetness.', price: 'Rs. 745', cat: 'Coffee' },
    { name: 'Cold Brew', desc: '18-hour cold-steeped single origin, served over ice.', price: 'Rs. 695', cat: 'Coffee' },
    { name: 'Cortado', desc: 'Equal parts espresso and warm milk, perfectly balanced.', price: 'Rs. 595', cat: 'Coffee' },
    { name: 'Hibiscus Rose Cooler', desc: 'Hibiscus, rose water, lemon, sparkling water.', price: 'Rs. 695', cat: 'Botanical Drinks' },
    { name: 'Cucumber Mint Refresher', desc: 'Fresh cucumber, mint, lime, honey, sparkling water.', price: 'Rs. 645', cat: 'Botanical Drinks' },
    { name: 'Green Goddess Smoothie', desc: 'Spinach, apple, ginger, banana, coconut water.', price: 'Rs. 745', cat: 'Botanical Drinks' },
    { name: 'Chamomile Honey Lemonade', desc: 'Chamomile tea, fresh lemon, local honey, ice.', price: 'Rs. 595', cat: 'Botanical Drinks' },
  ];

  const input = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear-btn');
  const resultsEl = document.getElementById('search-results');
  const hintEl = document.getElementById('search-hint');
  const modal = document.getElementById('search-modal');

  if (!input || !modal) return;

  // Auto-focus when modal opens, clear when it closes
  const observer = new MutationObserver(() => {
    if (modal.classList.contains('active')) {
      setTimeout(() => input.focus(), 120);
    } else {
      input.value = '';
      renderResults('');
    }
  });
  observer.observe(modal, { attributes: true, attributeFilter: ['class'] });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    input.focus();
    renderResults('');
  });

  input.addEventListener('input', () => {
    renderResults(input.value.trim());
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (input.value) {
        input.value = '';
        renderResults('');
      } else {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
      }
    }
  });

  function highlight(text, query) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>');
  }

  function renderResults(query) {
    clearBtn.classList.toggle('visible', !!query);

    if (!query) {
      resultsEl.innerHTML = '';
      hintEl.style.display = 'block';
      return;
    }

    hintEl.style.display = 'none';
    const q = query.toLowerCase();
    const matches = MENU_ITEMS.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.cat.toLowerCase().includes(q)
    );

    if (!matches.length) {
      resultsEl.innerHTML = `<p class="search-no-results">No results for "<strong>${query}</strong>"<br><span style="font-size:0.85rem;opacity:0.7;">Try: coffee, brunch, pizza, steak…</span></p>`;
      return;
    }

    resultsEl.innerHTML = matches.map(item => `
      <div class="search-result-item">
        <div style="flex:1;min-width:0;">
          <div class="search-result-name">${highlight(item.name, query)}</div>
          <div class="search-result-category">${item.cat}</div>
          <div class="search-result-desc">${highlight(item.desc, query)}</div>
        </div>
        <div class="search-result-price">${item.price}</div>
      </div>
    `).join('');
  }
}
