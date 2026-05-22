document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavbar();
  initSections();
  initCounters();
  initMobileMenu();
  initProgressBar();
});

/* ─── LOADER ─── */
function initLoader() {
  setTimeout(() => {
    document.querySelector('.loader')?.classList.add('hide');
  }, 1000);
}

/* ─── NAVBAR ─── */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

/* ─── MOBILE MENU ─── */
function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('open');
    });
  });
}

/* ─── SECTION SCROLL ANIMATIONS ─── */
function initSections() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach(s => observer.observe(s));
}

/* ─── COUNTER ANIMATION ─── */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el, target) {
  const duration = 1500;
  const steps = 30;
  const stepTime = duration / steps;
  let current = 0;
  const increment = target / steps;

  const tick = () => {
    current += increment;
    if (current >= target) {
      el.textContent = target + (target === 24 || target === 100 ? '+' : '');
      return;
    }
    el.textContent = Math.floor(current);
    setTimeout(tick, stepTime);
  };
  tick();
}

/* ─── SCROLL PROGRESS BAR ─── */
function initProgressBar() {
  const bar = document.createElement('div');
  bar.className = 'progress-bar';
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const winH = window.innerHeight;
    const docH = document.documentElement.scrollHeight;
    const pct = scrollY / (docH - winH);
    bar.style.width = `${pct * 100}%`;
  }, { passive: true });
}

/* ─── SMOOTH SCROLL ─── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ─── POPUP DATA ─── */
const serviceData = {
  nosotros: {
    title: 'Sobre VA Solutions',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    description: 'VA Solutions fue fundada con una visión clara: hacer la tecnología accesible y sencilla para empresas pequeñas que quieren crecer en el mundo digital. Combinamos tecnología, creatividad y análisis estratégico para ofrecer soluciones personalizadas.',
    features: ['Fundación 2026', 'Enfoque PYME', 'Tecnología accesible', 'Pasión por crecer', 'Compromiso real', 'Resultados medibles']
  },
  web: {
    title: 'Desarrollo Web',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
    description: 'Creamos sitios web modernos, funcionales y optimizados para convertir visitantes en clientes. Cada proyecto es único y diseñado a medida de tus necesidades. También desarrollamos en Shopify, una opción económica y profesional para tiendas online.',
    features: ['Diseño responsivo', 'Optimización SEO', 'Shopify', 'Seguridad SSL', 'CMS personalizado', 'Integraciones API'],
    waMsg: 'Hola! Quiero información sobre Desarrollo Web'
  },
  marketing: {
    title: 'Marketing Digital',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>',
    description: 'Estrategias de publicidad digital que generan resultados medibles. Maximizamos tu ROI con campañas optimizadas en Meta Ads y otras plataformas.',
    features: ['Meta Ads', 'Google Ads', 'Analytics', 'A/B Testing', 'Remarketing', 'Email Marketing'],
    waMsg: 'Hola! Quiero información sobre Marketing Digital'
  },
  bots: {
    title: 'Automatización & Bots',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 12h8M12 8v8"/></svg>',
    description: 'Automatizá tu atención al cliente con bots inteligentes para WhatsApp. Disponibilidad 24/7 para nunca perder una oportunidad.',
    features: ['WhatsApp Bot', 'Atención 24/7', 'Chatbot IA', 'Integración CRM', 'Auto respuestas', 'Reportes en tiempo real'],
    waMsg: 'Hola! Quiero información sobre Automatización & Bots'
  },
  redes: {
    title: 'Gestión de Redes',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h4"/></svg>',
    description: 'Construimos tu presencia digital con contenido estratégico. Community management que conecta con tu audiencia y genera engagement.',
    features: ['Plan de contenido', 'Gráficos personalizados', 'Copywriting', 'Community Manager', 'Análisis de métricas', 'Calendario editorial'],
    waMsg: 'Hola! Quiero información sobre Gestión de Redes'
  },
  contratos: {
    title: 'Contratos Mensuales',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    description: 'Elige el plan mensual que mejor se adapte a tus necesidades. Todos incluyen soporte prioritario y reportes mensuales.',
    options: [
      { name: 'Básico', price: '$199/mes', includes: ['Soporte por WhatsApp', 'Reportes mensuales', '2 publicaciones/mes', 'Gestión básica'], duration: 'Mes a mes', cancel: 'Cancelar con 15 días de anticipación' },
      { name: 'Profesional', price: '$399/mes', includes: ['Soporte prioritario', 'Reportes quincenales', '4 publicaciones/mes', 'Gestión completa', 'Analytics básico'], duration: 'Mes a mes', cancel: 'Cancelar con 15 días de anticipación' },
      { name: 'Empresarial', price: '$699/mes', includes: ['Soporte 24/7', 'Reportes semanales', '8 publicaciones/mes', 'Gestión integral', 'Analytics avanzado', 'Estrategia dedicada'], duration: 'Contrato mínimo 3 meses', cancel: 'Cancelar con 30 días de anticipación' }
    ]
  },
  puntuales: {
    title: 'Servicios Puntuales',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.7 1.7a1 1 0 001.4 0l3.3-3.3a1 1 0 000-1.4l-1.7-1.7a1 1 0 00-1.4 0zM2 12l6 6M12 2l6 6"/></svg>',
    description: 'Proyectos únicos para necesidades específicas. Entrega garantizada y documentación completa.',
    options: [
      { name: 'Landing Page', price: '$299', includes: ['Diseño responsivo', 'Formulario de contacto', 'SEO básico', 'Entrega en 5 días'], duration: 'Proyecto único', cancel: 'No hay reembolso tras iniciar' },
      { name: 'Tienda Online', price: '$499', includes: ['Hasta 50 productos', 'Pasarela de pagos', 'Gestión de pedidos', 'Entrega en 10 días'], duration: 'Proyecto único', cancel: 'No hay reembolso tras iniciar' },
      { name: 'Web Corporativa', price: '$399', includes: ['Hasta 10 páginas', 'Diseño profesional', 'SEO básico', 'Entrega en 7 días'], duration: 'Proyecto único', cancel: 'No hay reembolso tras iniciar' },
      { name: 'Gestión Redes', price: '$249/mes', includes: ['8 publicaciones/mes', 'Gráficos personalizados', 'Copywriting', 'Community manager'], duration: 'Mes a mes', cancel: 'Cancelar con 7 días de anticipación' }
    ]
  },
  personalizados: {
    title: 'Planes Personalizados',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    description: 'Hoja de ruta diseñada exclusivamente para tu negocio. Analizamos tus necesidades y construimos una estrategia a tu medida.',
    features: ['Análisis completo', 'Estrategia custom', 'Implementación guiada', 'Seguimiento trimestral', 'Soporte dedicado', 'Reportes personalizados'],
    waMsg: 'Hola! Quiero información sobre Planes Personalizados'
  },
  proyecto1: {
    title: 'Neighborhood CR — Tienda Shopify',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
    description: 'Tienda online de ropa desarrollada en Shopify. Catálogo completo con pasarela de pago integrada, diseño responsivo y panel de administración. Una solución económica y profesional.',
    features: ['Shopify', 'Catálogo completo', 'Pasarela de pagos', 'Diseño responsivo', 'Panel admin', 'SEO básico']
  }
};

/* ─── POPUP FUNCTIONS ─── */
function openPopup(service) {
  const data = serviceData[service];
  if (!data) return;

  const popup = document.getElementById('popupOverlay');
  const title = document.getElementById('popupTitle');
  const icon = document.getElementById('popupIcon');
  const body = document.getElementById('popupBody');
  const features = document.getElementById('popupFeatures');
  const cta = document.getElementById('popupCta');

  title.textContent = data.title;
  icon.innerHTML = data.icon;
  body.textContent = data.description;

  if (data.options) {
    let html = '<div class="popup-options">';
    data.options.forEach(function (opt) {
      html +=
        '<div class="popup-plan-option">' +
          '<div class="plan-header" onclick="togglePlan(this)">' +
            '<div>' +
              '<h4>' + opt.name + '</h4>' +
              '<span class="plan-price">' + opt.price + '</span>' +
            '</div>' +
            '<span class="plan-arrow">▼</span>' +
          '</div>' +
          '<div class="plan-details">' +
            '<div class="plan-section"><h5>Incluye:</h5><ul>' +
              opt.includes.map(function (i) { return '<li>' + i + '</li>'; }).join('') +
            '</ul></div>' +
            '<div class="plan-section"><h5>Duración:</h5><p>' + opt.duration + '</p></div>' +
            '<div class="plan-section"><h5>Cancelación:</h5><p>' + opt.cancel + '</p></div>' +
            '<a href="https://wa.me/50683886445?text=' + encodeURIComponent('Hola! Estoy interesado en el plan ' + opt.name + ' (' + opt.price + ')') + '" class="btn btn-primary plan-btn" target="_blank">Elegir plan</a>' +
          '</div>' +
        '</div>';
    });
    html += '</div>';
    features.innerHTML = html;
    cta.style.display = 'none';
  } else {
    features.innerHTML = '<h4>Detalles</h4><ul>' + data.features.map(function (f) { return '<li>' + f + '</li>'; }).join('') + '</ul>';
    cta.style.display = '';

    if (data.waMsg) {
      const msg = encodeURIComponent(data.waMsg);
      cta.href = 'https://wa.me/50683886445?text=' + msg;
      cta.onclick = function (e) { e.preventDefault(); window.open(cta.href, '_blank'); };
    } else {
      cta.onclick = function (e) { e.preventDefault(); closePopup(); };
    }
  }

  popup.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function togglePlan(header) {
  header.parentElement.classList.toggle('expanded');
}

function closePopup() {
  const popup = document.getElementById('popupOverlay');
  popup.classList.add('closing');
  setTimeout(function () {
    popup.classList.remove('active', 'closing');
    document.body.style.overflow = '';
  }, 300);
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closePopup();
});
