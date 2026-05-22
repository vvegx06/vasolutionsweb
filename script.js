document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavbar();
  initSections();
  initCounters();
  initProgressBar();
  initLang();
  applyLang();
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

/* ─── LANGUAGE ─── */
let currentLang = 'es';

const translations = {
  es: {
    'nav.nosotros': 'Nosotros',
    'nav.servicios': 'Servicios',
    'nav.proyectos': 'Proyectos',
    'nav.modalidades': 'Modalidades',
    'nav.contacto': 'Contacto',
    'hero.tag': 'Consultoría Estratégica Digital',
    'hero.line1': 'Impulsamos tu',
    'hero.line2': 'crecimiento',
    'hero.line3': 'digital',
    'hero.desc': 'Transformamos negocios a través de tecnología estratégica, creatividad innovadora y análisis profundo. Desde startups hasta empresas consolidadas. También trabajamos con <strong>Shopify</strong> como opción económica para tu tienda online.',
    'hero.btn1': 'Ver proyectos',
    'hero.btn2': 'Conversemos',
    'hero.scroll': 'Desplázate',
    'metrics.proyecto': 'Proyecto',
    'metrics.cliente': 'Cliente',
    'metrics.desde': 'Desde',
    'nosotros.title': 'Quiénes<br>somos',
    'nosotros.desc1': '<strong>VA Solutions</strong> nació en 2026 con una visión clara: democratizar la tecnología para empresas pequeñas y medianas. Somos una consultora integral que combina <strong>tecnología</strong>, <strong>creatividad</strong> y <strong>análisis estratégico</strong> para impulsar negocios.',
    'nosotros.desc2': 'Desde startups hasta empresas consolidadas, entendemos los desafíos únicos de cada etapa de crecimiento y construimos estrategias diseñadas para escalar.',
    'nosotros.quote': '"Diseñamos el futuro digital de tu empresa, creando valor medible en cada paso."',
    'stats.proyecto': 'Proyecto entregado',
    'stats.cliente': 'Cliente activo',
    'stats.dedicacion': '% Dedicación',
    'stats.soporte': '/7 Soporte',
    'servicios.title': 'Servicios',
    'servicios.desc': 'Soluciones integrales diseñadas para impulsar tu presencia digital y optimizar tus procesos.',
    'servicios.card1.title': 'Desarrollo Web',
    'servicios.card1.desc': 'Sitios web funcionales, seguros y escalables. Experiencias digitales que conectan con tu audiencia. También desarrollamos en <strong>Shopify</strong>, una opción económica y profesional para tu tienda online.',
    'servicios.card2.title': 'Marketing Digital',
    'servicios.card2.desc': 'Estrategias de publicidad segmentada para maximizar tu ROI. Campañas optimizadas que alcanzan tu público ideal.',
    'servicios.card3.title': 'Automatización & Bots',
    'servicios.card3.desc': 'Mensajería inteligente para WhatsApp con atención 24/7. Automatización que convierte mientras duermes.',
    'servicios.card4.title': 'Gestión de Redes',
    'servicios.card4.desc': 'Contenido estratégico para fortalecer tu marca. Community management que construye comunidad y genera engagement.',
    'proyectos.title': 'Proyectos<br>Realizados',
    'proyectos.desc': 'Nuestro primer proyecto realizado. Cada cliente recibe la misma dedicación y calidad.',
    'proyectos.tag': 'Shopify · Tienda Online',
    'proyectos.name': 'Neighborhood CR',
    'proyectos.detail': 'Tienda de ropa online desarrollada en Shopify. Catálogo completo, pasarela de pago y diseño responsivo.',
    'proyectos.link': 'Visitar sitio →',
    'modalidades.title': 'Modalidades',
    'modalidades.desc': 'Elige el modelo de trabajo que mejor se adapte a tus necesidades.',
    'plan1.label': 'Mensual',
    'plan1.title': 'Contratos<br>Mensuales',
    'plan1.desc': 'Crecimiento continuo y sostenible con soporte prioritario.',
    'plan1.feature1': 'Soporte prioritario',
    'plan1.feature2': 'Optimización continua',
    'plan1.feature3': 'Reportes mensuales',
    'plan1.feature4': 'Estrategia personalizada',
    'plan1.cta': 'Ver planes →',
    'plan2.label': 'Puntual',
    'plan2.title': 'Servicios<br>Puntuales',
    'plan2.desc': 'Soluciones específicas con entrega garantizada y documentación.',
    'plan2.feature1': 'Proyecto definido',
    'plan2.feature2': 'Entrega garantizada',
    'plan2.feature3': 'Documentación completa',
    'plan2.feature4': 'Soporte post-proyecto',
    'plan2.cta': 'Ver servicios →',
    'plan3.label': 'A medida',
    'plan3.title': 'Planes<br>Personalizados',
    'plan3.desc': 'Hoja de ruta diseñada exclusivamente para tu negocio.',
    'plan3.feature1': 'Análisis completo',
    'plan3.feature2': 'Estrategia custom',
    'plan3.feature3': 'Implementación guiada',
    'plan3.feature4': 'Seguimiento trimestral',
    'plan3.cta': 'Consultar →',
    'contacto.title': 'Contacto',
    'contacto.desc': '¿Listo para transformar tu negocio? Escríbenos y encontremos la mejor estrategia juntos.',
    'contacto.wa': 'WhatsApp',
    'contacto.email': 'Email',
    'contacto.ig': 'Instagram',
    'contacto.ubicacion': 'Ubicación',
    'contacto.cta': 'Trabajemos juntos',
    'contacto.btn': 'Enviar mensaje',
    'footer.desc': 'Consultoría estratégica digital para negocios que buscan escalar. Tecnología, creatividad y estrategia en un solo lugar.',
    'footer.nav': 'Navegación',
    'footer.contacto': 'Contacto',
    'footer.rights': '&copy; 2026 VA Solutions. Todos los derechos reservados.',
    'footer.privacidad': 'Privacidad',
    'footer.terminos': 'Términos',
    'popup.cta': 'Solicitar información',
    'popup.includes': 'Incluye:',
    'popup.duration': 'Duración:',
    'popup.cancel': 'Cancelación:',
    'popup.choose': 'Elegir plan',
    'popup.details': 'Detalles',
    'popup.wa_plan_prefix': 'Hola! Estoy interesado en el plan',
  },
  en: {
    'nav.nosotros': 'About Us',
    'nav.servicios': 'Services',
    'nav.proyectos': 'Projects',
    'nav.modalidades': 'Plans',
    'nav.contacto': 'Contact',
    'hero.tag': 'Digital Strategic Consulting',
    'hero.line1': 'We drive your',
    'hero.line2': 'digital',
    'hero.line3': 'growth',
    'hero.desc': 'We transform businesses through strategic technology, innovative creativity, and deep analysis. From startups to established companies. We also work with <strong>Shopify</strong> as an affordable option for your online store.',
    'hero.btn1': 'View projects',
    'hero.btn2': "Let's talk",
    'hero.scroll': 'Scroll',
    'metrics.proyecto': 'Project',
    'metrics.cliente': 'Client',
    'metrics.desde': 'Since',
    'nosotros.title': 'Who<br>we are',
    'nosotros.desc1': '<strong>VA Solutions</strong> was founded in 2026 with a clear vision: to democratize technology for small and medium businesses. We are an integrated consultancy combining <strong>technology</strong>, <strong>creativity</strong>, and <strong>strategic analysis</strong> to drive businesses forward.',
    'nosotros.desc2': 'From startups to established companies, we understand the unique challenges of each growth stage and build strategies designed to scale.',
    'nosotros.quote': '"We design your company\'s digital future, creating measurable value at every step."',
    'stats.proyecto': 'Project delivered',
    'stats.cliente': 'Active client',
    'stats.dedicacion': '% Dedication',
    'stats.soporte': '/7 Support',
    'servicios.title': 'Services',
    'servicios.desc': 'Comprehensive solutions designed to boost your digital presence and optimize your processes.',
    'servicios.card1.title': 'Web Development',
    'servicios.card1.desc': 'Functional, secure, and scalable websites. Digital experiences that connect with your audience. We also develop on <strong>Shopify</strong>, an affordable and professional option for your online store.',
    'servicios.card2.title': 'Digital Marketing',
    'servicios.card2.desc': 'Targeted advertising strategies to maximize your ROI. Optimized campaigns that reach your ideal audience.',
    'servicios.card3.title': 'Automation & Bots',
    'servicios.card3.desc': 'Smart WhatsApp messaging with 24/7 support. Automation that converts while you sleep.',
    'servicios.card4.title': 'Social Media Management',
    'servicios.card4.desc': 'Strategic content to strengthen your brand. Community management that builds community and generates engagement.',
    'proyectos.title': 'Our<br>Projects',
    'proyectos.desc': 'Our first completed project. Every client receives the same dedication and quality.',
    'proyectos.tag': 'Shopify · Online Store',
    'proyectos.name': 'Neighborhood CR',
    'proyectos.detail': 'Online clothing store built with Shopify. Complete catalog, payment gateway, and responsive design.',
    'proyectos.link': 'Visit site →',
    'modalidades.title': 'Work Plans',
    'modalidades.desc': 'Choose the work model that best fits your needs.',
    'plan1.label': 'Monthly',
    'plan1.title': 'Monthly<br>Contracts',
    'plan1.desc': 'Continuous and sustainable growth with priority support.',
    'plan1.feature1': 'Priority support',
    'plan1.feature2': 'Continuous optimization',
    'plan1.feature3': 'Monthly reports',
    'plan1.feature4': 'Personalized strategy',
    'plan1.cta': 'View plans →',
    'plan2.label': 'One-time',
    'plan2.title': 'One-time<br>Services',
    'plan2.desc': 'Specific solutions with guaranteed delivery and documentation.',
    'plan2.feature1': 'Defined project',
    'plan2.feature2': 'Guaranteed delivery',
    'plan2.feature3': 'Full documentation',
    'plan2.feature4': 'Post-project support',
    'plan2.cta': 'View services →',
    'plan3.label': 'Custom',
    'plan3.title': 'Custom<br>Plans',
    'plan3.desc': 'Roadmap designed exclusively for your business.',
    'plan3.feature1': 'Complete analysis',
    'plan3.feature2': 'Custom strategy',
    'plan3.feature3': 'Guided implementation',
    'plan3.feature4': 'Quarterly follow-up',
    'plan3.cta': 'Inquire →',
    'contacto.title': 'Contact',
    'contacto.desc': 'Ready to transform your business? Write to us and let\'s find the best strategy together.',
    'contacto.wa': 'WhatsApp',
    'contacto.email': 'Email',
    'contacto.ig': 'Instagram',
    'contacto.ubicacion': 'Location',
    'contacto.cta': "Let's work together",
    'contacto.btn': 'Send message',
    'footer.desc': 'Digital strategic consulting for businesses looking to scale. Technology, creativity, and strategy in one place.',
    'footer.nav': 'Navigation',
    'footer.contacto': 'Contact',
    'footer.rights': '&copy; 2026 VA Solutions. All rights reserved.',
    'footer.privacidad': 'Privacy',
    'footer.terminos': 'Terms',
    'popup.cta': 'Request info',
    'popup.includes': 'Includes:',
    'popup.duration': 'Duration:',
    'popup.cancel': 'Cancellation:',
    'popup.choose': 'Choose plan',
    'popup.details': 'Details',
    'popup.wa_plan_prefix': 'Hi! I am interested in the plan',
  }
};

function t(key) {
  return translations[currentLang]?.[key] ?? translations.es[key] ?? '';
}

function initLang() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    btn.textContent = currentLang === 'es' ? 'EN' : 'ES';
    applyLang();
  });
}

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const txt = translations[currentLang]?.[key];
    if (txt === undefined) return;
    if (el.dataset.i18nHtml !== undefined) {
      el.innerHTML = txt;
    } else {
      el.textContent = txt;
    }
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
const popupData = {
  es: {
    nosotros: {
      title: 'Sobre VA Solutions',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
      description: 'VA Solutions fue fundada con una visión clara: hacer la tecnología accesible y sencilla para empresas pequeñas que quieren crecer en el mundo digital.',
      features: ['Fundación 2026', 'Enfoque PYME', 'Tecnología accesible', 'Pasión por crecer', 'Compromiso real', 'Resultados medibles']
    },
    web: {
      title: 'Desarrollo Web', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
      description: 'Creamos sitios web modernos, funcionales y optimizados para convertir visitantes en clientes. Cada proyecto es único y diseñado a medida de tus necesidades. También desarrollamos en Shopify, una opción económica y profesional para tiendas online.',
      features: ['Diseño responsivo', 'Optimización SEO', 'Shopify', 'Seguridad SSL', 'CMS personalizado', 'Integraciones API'], waMsg: 'Hola! Quiero información sobre Desarrollo Web'
    },
    marketing: {
      title: 'Marketing Digital', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>',
      description: 'Estrategias de publicidad digital que generan resultados medibles. Maximizamos tu ROI con campañas optimizadas en Meta Ads y otras plataformas.',
      features: ['Meta Ads', 'Google Ads', 'Analytics', 'A/B Testing', 'Remarketing', 'Email Marketing'], waMsg: 'Hola! Quiero información sobre Marketing Digital'
    },
    bots: {
      title: 'Automatización & Bots', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 12h8M12 8v8"/></svg>',
      description: 'Automatizá tu atención al cliente con bots inteligentes para WhatsApp. Disponibilidad 24/7 para nunca perder una oportunidad.',
      features: ['WhatsApp Bot', 'Atención 24/7', 'Chatbot IA', 'Integración CRM', 'Auto respuestas', 'Reportes en tiempo real'], waMsg: 'Hola! Quiero información sobre Automatización & Bots'
    },
    redes: {
      title: 'Gestión de Redes', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h4"/></svg>',
      description: 'Construimos tu presencia digital con contenido estratégico. Community management que conecta con tu audiencia y genera engagement.',
      features: ['Plan de contenido', 'Gráficos personalizados', 'Copywriting', 'Community Manager', 'Análisis de métricas', 'Calendario editorial'], waMsg: 'Hola! Quiero información sobre Gestión de Redes'
    },
    contratos: {
      title: 'Contratos Mensuales', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
      description: 'Elige el plan mensual que mejor se adapte a tus necesidades. Todos incluyen soporte prioritario y reportes mensuales.',
      options: [
        { name: 'Básico', price: '$199/mes', includes: ['Soporte por WhatsApp', 'Reportes mensuales', '2 publicaciones/mes', 'Gestión básica'], duration: 'Mes a mes', cancel: 'Cancelar con 15 días de anticipación' },
        { name: 'Profesional', price: '$399/mes', includes: ['Soporte prioritario', 'Reportes quincenales', '4 publicaciones/mes', 'Gestión completa', 'Analytics básico'], duration: 'Mes a mes', cancel: 'Cancelar con 15 días de anticipación' },
        { name: 'Empresarial', price: '$699/mes', includes: ['Soporte 24/7', 'Reportes semanales', '8 publicaciones/mes', 'Gestión integral', 'Analytics avanzado', 'Estrategia dedicada'], duration: 'Contrato mínimo 3 meses', cancel: 'Cancelar con 30 días de anticipación' }
      ]
    },
    puntuales: {
      title: 'Servicios Puntuales', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.7 1.7a1 1 0 001.4 0l3.3-3.3a1 1 0 000-1.4l-1.7-1.7a1 1 0 00-1.4 0zM2 12l6 6M12 2l6 6"/></svg>',
      description: 'Proyectos únicos para necesidades específicas. Entrega garantizada y documentación completa.',
      options: [
        { name: 'Landing Page', price: '$299', includes: ['Diseño responsivo', 'Formulario de contacto', 'SEO básico', 'Entrega en 5 días'], duration: 'Proyecto único', cancel: 'No hay reembolso tras iniciar' },
        { name: 'Tienda Online', price: '$499', includes: ['Hasta 50 productos', 'Pasarela de pagos', 'Gestión de pedidos', 'Entrega en 10 días'], duration: 'Proyecto único', cancel: 'No hay reembolso tras iniciar' },
        { name: 'Web Corporativa', price: '$399', includes: ['Hasta 10 páginas', 'Diseño profesional', 'SEO básico', 'Entrega en 7 días'], duration: 'Proyecto único', cancel: 'No hay reembolso tras iniciar' },
        { name: 'Gestión Redes', price: '$249/mes', includes: ['8 publicaciones/mes', 'Gráficos personalizados', 'Copywriting', 'Community manager'], duration: 'Mes a mes', cancel: 'Cancelar con 7 días de anticipación' }
      ]
    },
    personalizados: {
      title: 'Planes Personalizados', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
      description: 'Hoja de ruta diseñada exclusivamente para tu negocio. Analizamos tus necesidades y construimos una estrategia a tu medida.',
      features: ['Análisis completo', 'Estrategia custom', 'Implementación guiada', 'Seguimiento trimestral', 'Soporte dedicado', 'Reportes personalizados'], waMsg: 'Hola! Quiero información sobre Planes Personalizados'
    }
  },
  en: {
    nosotros: {
      title: 'About VA Solutions',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
      description: 'VA Solutions was founded with a clear vision: to make technology accessible and simple for small businesses looking to grow in the digital world.',
      features: ['Founded 2026', 'SME Focus', 'Accessible Tech', 'Passion to Grow', 'Real Commitment', 'Measurable Results']
    },
    web: {
      title: 'Web Development', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
      description: 'We create modern, functional, and optimized websites to turn visitors into customers. We also develop on Shopify, an affordable professional option for online stores.',
      features: ['Responsive Design', 'SEO Optimization', 'Shopify', 'SSL Security', 'Custom CMS', 'API Integrations'], waMsg: 'Hi! I want info about Web Development'
    },
    marketing: {
      title: 'Digital Marketing', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>',
      description: 'Digital advertising strategies that deliver measurable results. Maximize your ROI with optimized campaigns on Meta Ads and other platforms.',
      features: ['Meta Ads', 'Google Ads', 'Analytics', 'A/B Testing', 'Remarketing', 'Email Marketing'], waMsg: 'Hi! I want info about Digital Marketing'
    },
    bots: {
      title: 'Automation & Bots', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 12h8M12 8v8"/></svg>',
      description: 'Automate your customer service with smart WhatsApp bots. 24/7 availability so you never miss an opportunity.',
      features: ['WhatsApp Bot', '24/7 Support', 'AI Chatbot', 'CRM Integration', 'Auto Replies', 'Real-time Reports'], waMsg: 'Hi! I want info about Automation & Bots'
    },
    redes: {
      title: 'Social Media Management', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h4"/></svg>',
      description: 'Build your digital presence with strategic content. Community management that connects with your audience and drives engagement.',
      features: ['Content Plan', 'Custom Graphics', 'Copywriting', 'Community Manager', 'Analytics', 'Editorial Calendar'], waMsg: 'Hi! I want info about Social Media Management'
    },
    contratos: {
      title: 'Monthly Contracts', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
      description: 'Choose the monthly plan that best fits your needs. All include priority support and monthly reports.',
      options: [
        { name: 'Basic', price: '$199/mo', includes: ['WhatsApp support', 'Monthly reports', '2 posts/mo', 'Basic management'], duration: 'Month to month', cancel: 'Cancel with 15 days notice' },
        { name: 'Professional', price: '$399/mo', includes: ['Priority support', 'Biweekly reports', '4 posts/mo', 'Full management', 'Basic analytics'], duration: 'Month to month', cancel: 'Cancel with 15 days notice' },
        { name: 'Enterprise', price: '$699/mo', includes: ['24/7 Support', 'Weekly reports', '8 posts/mo', 'Full management', 'Advanced analytics', 'Dedicated strategy'], duration: 'Min 3 month contract', cancel: 'Cancel with 30 days notice' }
      ]
    },
    puntuales: {
      title: 'One-time Services', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.7 1.7a1 1 0 001.4 0l3.3-3.3a1 1 0 000-1.4l-1.7-1.7a1 1 0 00-1.4 0zM2 12l6 6M12 2l6 6"/></svg>',
      description: 'Unique projects for specific needs. Guaranteed delivery and complete documentation.',
      options: [
        { name: 'Landing Page', price: '$299', includes: ['Responsive design', 'Contact form', 'Basic SEO', '5-day delivery'], duration: 'One-time project', cancel: 'No refund after starting' },
        { name: 'Online Store', price: '$499', includes: ['Up to 50 products', 'Payment gateway', 'Order management', '10-day delivery'], duration: 'One-time project', cancel: 'No refund after starting' },
        { name: 'Corporate Site', price: '$399', includes: ['Up to 10 pages', 'Professional design', 'Basic SEO', '7-day delivery'], duration: 'One-time project', cancel: 'No refund after starting' },
        { name: 'Social Media', price: '$249/mo', includes: ['8 posts/mo', 'Custom graphics', 'Copywriting', 'Community manager'], duration: 'Month to month', cancel: 'Cancel with 7 days notice' }
      ]
    },
    personalizados: {
      title: 'Custom Plans', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
      description: 'Roadmap designed exclusively for your business. We analyze your needs and build a strategy tailored to you.',
      features: ['Complete analysis', 'Custom strategy', 'Guided implementation', 'Quarterly follow-up', 'Dedicated support', 'Custom reports'], waMsg: 'Hi! I want info about Custom Plans'
    }
  }
};

/* ─── POPUP FUNCTIONS ─── */
function openPopup(service) {
  const data = popupData[currentLang]?.[service] || popupData.es[service];
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
            '<div class="plan-section"><h5>' + t('popup.includes') + '</h5><ul>' +
              opt.includes.map(function (i) { return '<li>' + i + '</li>'; }).join('') +
            '</ul></div>' +
            '<div class="plan-section"><h5>' + t('popup.duration') + '</h5><p>' + opt.duration + '</p></div>' +
            '<div class="plan-section"><h5>' + t('popup.cancel') + '</h5><p>' + opt.cancel + '</p></div>' +
            '<a href="https://wa.me/50683886445?text=' + encodeURIComponent(t('popup.wa_plan_prefix') + ' ' + opt.name + ' (' + opt.price + ')') + '" class="btn btn-primary plan-btn" target="_blank">' + t('popup.choose') + '</a>' +
          '</div>' +
        '</div>';
    });
    html += '</div>';
    features.innerHTML = html;
    cta.style.display = 'none';
  } else {
    features.innerHTML = '<h4>' + t('popup.details') + '</h4><ul>' + data.features.map(function (f) { return '<li>' + f + '</li>'; }).join('') + '</ul>';
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
