document.addEventListener('DOMContentLoaded', () => {
  // Hide loading screen
  setTimeout(() => {
    document.querySelector('.skew-loader')?.classList.add('hide');
    setTimeout(() => {
      document.querySelector('.skew-loader')?.remove();
    }, 600);
  }, 1500);

  // Initialize all animations
  initAnimations();
  initNavbar();
  initHeroAnimations();
  initScrollAnimations();
  initParallax();
  initCursor();
  initReveal();
});

// Popup functions (global scope)
const serviceData = {
  nosotros: {
    title: 'Sobre VA Solutions',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    description: 'VA Solutions fue fundada en 2026 por un joven de 19 años con una visión clara: hacer la tecnología accesible y sencilla para empresas pequeñas que querem crecer en el mundo digital.',
    features: ['Fundación 2026', 'Fundador de 19 años', 'Enfoque en empresas pequeñas', 'Tecnología accesible', 'Pasión por crecer', 'Compromiso real']
  },
  web: {
    title: 'Desarrollo Web',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
    description: 'Creamos sitios web modernos, funcionales y optimizados para convertir visitantes en clientes. Cada proyecto es único y diseñado a medida de tus necesidades.',
    features: ['Diseño responsivo', 'Optimización SEO', 'Velocidad de carga', 'Seguridad SSL', 'CMS personalizado', 'Integraciones API'],
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
    waMsg: 'Hola! quiero información sobre Gestión de Redes'
  },
  contratos: {
    title: 'Contratos Mensuales',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    description: 'Elige el plan mensual que mejor se adapte a tus necesidades. Todos incluyen soporte prioritario y reportes mensuales.',
    options: [
      { 
        name: 'Básico', 
        price: '$199/mes',
        includes: ['Soporte por WhatsApp', 'Reportes mensuales', '2 publicaciones/mes', 'Gestión básica'],
        duration: 'Mes a mes',
        cancel: 'Cancelar con 15 días de anticipación'
      },
      { 
        name: 'Profesional', 
        price: '$399/mes',
        includes: ['Soporte prioritario', 'Reportes quincenales', '4 publicaciones/mes', 'Gestión completa', 'Analytics básico'],
        duration: 'Mes a mes',
        cancel: 'Cancelar con 15 días de anticipación'
      },
      { 
        name: 'Empresarial', 
        price: '$699/mes',
        includes: ['Soporte 24/7', 'Reportes semanales', '8 publicaciones/mes', 'Gestión integral', 'Analytics avanzado', 'Estrategia dedicada'],
        duration: 'Contrato mínimo 3 meses',
        cancel: 'Cancelar con 30 días de anticipación'
      }
    ]
  },
  puntuales: {
    title: 'Servicios Puntuales',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.7 1.7a1 1 0 001.4 0l3.3-3.3a1 1 0 000-1.4l-1.7-1.7a1 1 0 00-1.4 0zM2 12l6 6M12 2l6 6"/></svg>',
    description: 'Proyectos únicos para necesidades específicas. Entrega garantizada y documentación completa.',
    options: [
      { 
        name: 'Landing Page', 
        price: '$299',
        includes: ['Diseño responsivo', 'Formulario de contacto', 'SEO básico', 'Entrega en 5 días'],
        duration: 'Proyecto único',
        cancel: 'No hay reembolso tras iniciar'
      },
      { 
        name: 'Tienda Online', 
        price: '$499',
        includes: ['Hasta 50 productos', 'Pasarela de pagos', 'Gestión de pedidos', 'Entrega en 10 días'],
        duration: 'Proyecto único',
        cancel: 'No hay reembolso tras iniciar'
      },
      { 
        name: 'Web Corporativa', 
        price: '$399',
        includes: ['Hasta 10 páginas', 'Diseño profesional', 'SEO básico', 'Entrega en 7 días'],
        duration: 'Proyecto único',
        cancel: 'No hay reembolso tras iniciar'
      },
      { 
        name: 'Gestión Redes', 
        price: '$249/mes',
        includes: ['8 publicaciones/mes', 'Gráficos personalizados', 'Copywriting', 'Community manager'],
        duration: 'Mes a mes',
        cancel: 'Cancelar con 7 días de anticipación'
      }
    ]
  }
};

function openPopup(service) {
  var data = serviceData[service];
  if (!data) return;
  
  var popup = document.getElementById('popupOverlay');
  var title = document.getElementById('popupTitle');
  var icon = document.getElementById('popupIcon');
  var body = document.getElementById('popupBody');
  var features = document.getElementById('popupFeatures');
  var cta = document.getElementById('popupCta');
  
  title.textContent = data.title;
  icon.innerHTML = data.icon;
  body.textContent = data.description;
  
  // Handle popups with options (planes)
  if (data.options) {
    var optionsHtml = '<div class="popup-options">';
    data.options.forEach(function(opt) {
      optionsHtml += 
        '<div class="popup-plan-option">' +
          '<div class="plan-header" onclick="togglePlan(this)">' +
            '<div>' +
              '<h4 class="plan-name">' + opt.name + '</h4>' +
              '<span class="plan-price">' + opt.price + '</span>' +
            '</div>' +
            '<span class="plan-arrow">▼</span>' +
          '</div>' +
          '<div class="plan-details">' +
            '<div class="plan-section"><h5>Incluye:</h5><ul>' +
              opt.includes.map(function(i) { return '<li>' + i + '</li>'; }).join('') +
            '</ul></div>' +
            '<div class="plan-section"><h5>Duración:</h5><p>' + opt.duration + '</p></div>' +
            '<div class="plan-section"><h5>Cancelación:</h5><p>' + opt.cancel + '</p></div>' +
            '<a href="https://wa.me/50683886455?text=' + encodeURIComponent('Hola! Estoy interesados en el plan ' + opt.name + ' (' + opt.price + ')') + '" class="btn btn-primary plan-btn" target="_blank">Elegir este plan</a>' +
          '</div>' +
        '</div>';
    });
    optionsHtml += '</div>';
    features.innerHTML = optionsHtml;
    cta.style.display = 'none';
  } else {
    // Regular service popups
    features.innerHTML = '<h4>Incluye</h4><ul>' + data.features.map(function(f) { return '<li>' + f + '</li>'; }).join('') + '</ul>';
    cta.style.display = '';
    
    // Set WhatsApp link with message for service popups
    if (data.waMsg) {
      var encodedMsg = encodeURIComponent(data.waMsg);
      var waLink = 'https://wa.me/50683886455?text=' + encodedMsg;
      cta.href = waLink;
      cta.onclick = function(e) {
        e.preventDefault();
        window.open(waLink, '_blank');
      };
    } else {
      cta.onclick = function(e) {
        e.preventDefault();
        closePopup();
      };
    }
  }
  
  popup.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Function to handle option selection
function selectOption(msg) {
  var decodedMsg = decodeURIComponent(msg);
  var waLink = 'https://wa.me/50683886455?text=' + msg;
  window.open(waLink, '_blank');
}

// Function to toggle plan accordion
function togglePlan(header) {
  var planOption = header.parentElement;
  planOption.classList.toggle('expanded');
}

function closePopup(event) {
  if (event && event.target !== event.currentTarget) return;
  var popup = document.getElementById('popupOverlay');
  popup.classList.add('closing');
  setTimeout(function() {
    popup.classList.remove('active', 'closing');
    document.body.style.overflow = '';
  }, 300);
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closePopup();
});

// Initialize all animations
function initAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        animateOnScroll.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Animate all sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade-section');
    animateOnScroll.observe(section);
  });

  // Animate service cards with stagger
  document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    card.classList.add('fade-up');
    animateOnScroll.observe(card);
  });

  // Animate plan cards with stagger
  document.querySelectorAll('.plan-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
    card.classList.add('fade-up');
    animateOnScroll.observe(card);
  });

  // Animate info items
  document.querySelectorAll('.info-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
    item.classList.add('fade-up');
    animateOnScroll.observe(item);
  });

  // Animate footer links
  document.querySelectorAll('.footer-grid > div').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
    item.classList.add('fade-up');
    animateOnScroll.observe(item);
  });
}

// Navbar effects
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Add/remove scrolled class
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Hide/show on scroll
    if (currentScroll > lastScroll && currentScroll > 100) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

// Hero animations
function initHeroAnimations() {
  const hero = document.querySelector('.hero');
  const heroContent = document.querySelector('.hero-content');
  if (!hero || !heroContent) return;

  const elements = heroContent.children;
  Array.from(elements).forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
    el.style.transitionDelay = `${i * 0.12}s`;

    setTimeout(() => {
      el.style.opacity = '';
      el.style.transform = '';
    }, 150);
  });

  // Hero scroll indicator animation
  const scrollIndicator = document.querySelector('.hero-scroll');
  if (scrollIndicator) {
    scrollIndicator.style.opacity = '0';
    scrollIndicator.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
    scrollIndicator.style.transitionDelay = '0.8s';

    setTimeout(() => {
      scrollIndicator.style.opacity = '';
    }, 1000);
  }
}

// Scroll-triggered animations
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '-50px',
    threshold: 0.1
  };

  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        // Different animation types
        const animType = element.dataset.animation;
        
        if (animType === 'scale') {
          element.classList.add('scale-in');
        } else if (animType === 'slide-left') {
          element.classList.add('slide-in-left');
        } else if (animType === 'slide-right') {
          element.classList.add('slide-in-right');
        } else if (animType === 'rotate') {
          element.classList.add('rotate-in');
        } else {
          element.classList.add('fade-in-up');
        }

        // Add staggered children animation
        if (element.classList.contains('stagger')) {
          const children = element.querySelectorAll(':scope > *');
          children.forEach((child, i) => {
            child.style.transitionDelay = `${i * 0.08}s`;
            child.classList.add('fade-in-up');
          });
        }

        // Remove from observer
        if (!element.classList.contains('repeat')) {
          animateOnScroll.unobserve(element);
        }
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll('[data-animation], .stagger').forEach(el => {
    animateOnScroll.observe(el);
  });
}

// Parallax effects
function initParallax() {
  const heroBg = document.querySelector('.hero-bg');
  const sections = document.querySelectorAll('.section');

  if (!heroBg) return;

  // Add floating orbs to hero
  for (let i = 0; i < 5; i++) {
    const orb = document.createElement('div');
    orb.className = 'floating-orb';
    orb.style.cssText = `
      position: absolute;
      width: ${Math.random() * 200 + 100}px;
      height: ${Math.random() * 200 + 100}px;
      background: radial-gradient(circle, rgba(5,26,36,${Math.random() * 0.1 + 0.02}) 0%, transparent 70%);
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
      animation-delay: ${Math.random() * -5}s;
    `;
    heroBg.appendChild(orb);
  }

  // Parallax scroll effect
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    
    // Move hero background
    heroBg.style.transform = `translateY(${scrolled * 0.3}px) scale(${1 + scrolled * 0.0005})`;
    
    // Parallax sections
    sections.forEach((section, i) => {
      const speed = (i + 1) * 0.05;
      const bg = section.querySelector('.section-bg');
      if (bg) {
        bg.style.transform = `translateY(${(scrolled - section.offsetTop) * speed}px)`;
      }
    });
  }, { passive: true });
}

// Custom cursor follower
function initCursor() {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  const cursorLarge = document.createElement('div');
  cursorLarge.className = 'cursor-large';
  document.body.appendChild(cursorLarge);

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let largeX = 0, largeY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Animate cursor
  const animateCursor = () => {
    // Smooth follow
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    largeX += (mouseX - largeX) * 0.1;
    largeY += (mouseY - largeY) * 0.1;

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    cursorLarge.style.left = `${largeX}px`;
    cursorLarge.style.top = `${largeY}px`;

    requestAnimationFrame(animateCursor);
  };
  animateCursor();

  // Scale on hover
  const hoverElements = document.querySelectorAll('a, button, .service-card, .plan-card');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      cursorLarge.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      cursorLarge.classList.remove('hover');
    });
  });
}

// Reveal text effect (letter by letter)
function initReveal() {
  // Add magnetic effect to buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  // Image reveal effect on scroll
  const images = document.querySelectorAll('img[data-reveal]');
  images.forEach(img => {
    img.style.clipPath = 'inset(100% 0 0 0)';
    img.style.transition = 'clip-path 1s cubic-bezier(0.16, 1, 0.3, 1)';

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          img.style.clipPath = 'inset(0 0 0 0)';
          observer.unobserve(img);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(img);
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Form submission with animation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalHTML = btn.innerHTML;
    
    // Loading animation
    btn.innerHTML = '<span class="loading"></span> Enviando...';
    btn.disabled = true;
    btn.style.opacity = '0.8';

    setTimeout(() => {
      // Success animation
      btn.innerHTML = '✓ Mensaje enviado';
      btn.style.background = '#10b981';
      
      setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.background = '';
        btn.style.opacity = '';
        btn.disabled = false;
        contactForm.reset();
      }, 2000);
    }, 1500);
  });
}

// Add entrance animation to page load
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Stagger animation for body children
  document.body.children.forEach((child, i) => {
    if (child.tagName !== 'SCRIPT') {
      child.style.animationDelay = `${i * 0.2}s`;
    }
  });
});

// Interactive hover effects
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mouseenter', (e) => {
    const icon = card.querySelector('.service-icon');
    if (icon) {
      icon.style.transform = 'scale(1.1) rotate(5deg)';
      icon.style.background = '#051A24';
      icon.style.color = '#fff';
    }
  });

  card.addEventListener('mouseleave', (e) => {
    const icon = card.querySelector('.service-icon');
    if (icon) {
      icon.style.transform = '';
      icon.style.background = '';
      icon.style.color = '';
    }
  });
});

// Page exit animation
document.querySelectorAll('a:not([href^="#"])').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    
    document.body.classList.add('page-exit');
    
    setTimeout(() => {
      window.location.href = href;
    }, 500);
  });
});

// Add random particle effects
function createParticles() {
  const container = document.querySelector('.hero');
  if (!container) return;

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: #051A24;
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      opacity: ${Math.random() * 0.3};
      animation: particle ${Math.random() * 20 + 10}s linear infinite;
      animation-delay: ${Math.random() * -10}s;
    `;
    container.appendChild(particle);
  }
}

// Add extra animations on scroll progress
let lastScrollY = 0;
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;
  const scrollPercent = scrollY / (docHeight - windowHeight);

  // Progress bar
  let progressBar = document.querySelector('.progress-bar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(90deg, #051A24, #0D212C);
      width: 0%;
      z-index: 9999;
      transition: width 0.1s;
    `;
    document.body.appendChild(progressBar);
  }
  
  progressBar.style.width = `${scrollPercent * 100}%`;

  lastScrollY = scrollY;
}, { passive: true });

// Run particles
createParticles();