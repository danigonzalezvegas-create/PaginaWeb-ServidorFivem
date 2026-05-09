// REVEAL ON SCROLL
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// NAV SCROLLED
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// HAMBURGER
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

    // Filtros de tienda
    const filterBtns = document.querySelectorAll('.filter-btn');
    const categories = document.querySelectorAll('.shop-category');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        categories.forEach(cat => {
          if (filter === 'all' || cat.dataset.cat === filter) {
            cat.style.display = 'block';
          } else {
            cat.style.display = 'none';
          }
        });
      });
    });

    // Cierra menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ── COOKIES ──
(function() {
  const consent = localStorage.getItem('calipso_cookie_consent');
  const overlay = document.getElementById('cookieOverlay');
  const banner  = document.getElementById('cookieBanner');
  const body    = document.body;

  function hideCookieBanner() {
    overlay.style.display = 'none';
    banner.style.display  = 'none';
    body.classList.remove('cookie-blur');
  }

  if (consent) {
    hideCookieBanner();
  } else {
    body.classList.add('cookie-blur');
  }

  document.getElementById('cookieAll').addEventListener('click', () => {
    localStorage.setItem('calipso_cookie_consent', 'all');
    hideCookieBanner();
  });

  document.getElementById('cookieEssential').addEventListener('click', () => {
    localStorage.setItem('calipso_cookie_consent', 'essential');
    hideCookieBanner();
  });

  document.getElementById('cookieReject').addEventListener('click', () => {
    localStorage.setItem('calipso_cookie_consent', 'rejected');
    hideCookieBanner();
  });
})();

// Botón resetear cookies
    document.getElementById('resetCookies').addEventListener('click', () => {
      localStorage.removeItem('calipso_cookie_consent');
      const btn = document.getElementById('resetCookies');
      btn.textContent = '✓ Preferencias reseteadas — recarga la página';
      btn.style.background = '#00cc66';
      btn.style.borderColor = '#00cc66';
      btn.style.color = '#002211';
    });