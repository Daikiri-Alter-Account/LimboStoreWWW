// Manejo de Términos y Condiciones
document.addEventListener('DOMContentLoaded', function() {
  const termsModal = document.getElementById('termsModal');
  const acceptBtn = document.getElementById('acceptTerms');
  const catalogContent = document.getElementById('catalogContent');

  function formatTermsNumbering() {
    const numberedTitles = document.querySelectorAll('.terms-text p strong');
    numberedTitles.forEach((title) => {
      title.innerHTML = title.innerHTML.replace(
        /__([0-9]+(?:\.[0-9]+)*\.?)__/g,
        '<span class="term-number">$1</span>'
      );
    });
  }

  // Configuración de partículas
  const particlesConfig = {
    particles: {
      number: { value: 120, density: { enable: true, value_area: 800 } },
      color: { value: '#00d4ff' },
      shape: { type: 'circle' },
      opacity: { value: 0.8, random: true },
      size: { value: 5, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#00d4ff',
        opacity: 0.5,
        width: 2
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  };

  const termsParticlesConfig = {
    particles: {
      number: { value: 150, density: { enable: true, value_area: 800 } },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: { value: 0.6, random: false },
      size: { value: 6, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.5,
        width: 2
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 0.6 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  };

  // Verificar si ya aceptó los términos
  termsModal.style.display = 'flex';
  catalogContent.style.display = 'none';
  formatTermsNumbering();
  particlesJS('terms-particles', termsParticlesConfig);

  // Aceptar términos
  acceptBtn.addEventListener('click', function() {
    termsModal.style.display = 'none';
    catalogContent.style.display = 'block';
    particlesJS('particles-bg', particlesConfig);
  });

  // Efecto de brillo siguiendo el cursor en la barra superior
  const topBar = document.querySelector('.top-bar');
  
  topBar.addEventListener('mousemove', function(e) {
    const rect = topBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    topBar.style.setProperty('--mouse-x', x + 'px');
    topBar.style.setProperty('--mouse-y', y + 'px');
  });

  // Manejo del menú desplegable
  const menuButtons = document.querySelectorAll('.menu-btn');
  
  menuButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation();
      const targetId = this.getAttribute('data-target');
      const popup = document.getElementById(targetId);
      
      // Cerrar todas las ventanas
      document.querySelectorAll('.popup-window').forEach(w => {
        w.classList.remove('active');
      });
      
      // Abrir la ventana clickeada
      if (popup) {
        popup.classList.add('active');
      }
    });
  });

  // Manejo de enlaces internos (como el de métodos de pago)
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('payment-link')) {
      e.preventDefault();
      e.stopPropagation();
      const targetId = e.target.getAttribute('data-target');
      const popup = document.getElementById(targetId);
      
      // Cerrar todas las ventanas
      document.querySelectorAll('.popup-window').forEach(w => {
        w.classList.remove('active');
      });
      
      // Abrir la ventana de métodos de pago
      if (popup) {
        popup.classList.add('active');
      }
    }
  });

  // Cerrar con botón X
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('close-btn')) {
      e.stopPropagation();
      e.target.closest('.popup-window').classList.remove('active');
    }
  });

  // Cerrar ventanas al hacer clic fuera
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.popup-window') && !e.target.closest('.menu-btn')) {
      document.querySelectorAll('.popup-window').forEach(popup => {
        popup.classList.remove('active');
      });
    }
  });

  // Prevenir que la ventana se cierre al hacer clic dentro
  document.querySelectorAll('.popup-window').forEach(popup => {
    popup.addEventListener('click', function(e) {
      if (!e.target.classList.contains('close-btn')) {
        e.stopPropagation();
      }
    });
  });

  // Animaciones de los cuadros de características
  function animateFeatures() {
    // Contador de ventas (0 a 500+)
    let count = 0;
    const salesCounter = document.getElementById('counter-sales');
    const salesInterval = setInterval(() => {
      count += 10;
      if (count >= 500) {
        salesCounter.textContent = '500+';
        clearInterval(salesInterval);
      } else {
        salesCounter.textContent = count;
      }
    }, 20);

    // Efecto de escritura para "Ventas"
    const salesText = 'Ventas';
    const salesElement = document.getElementById('text-sales');
    let salesIndex = 0;
    setTimeout(() => {
      const salesTypeInterval = setInterval(() => {
        if (salesIndex < salesText.length) {
          salesElement.textContent += salesText.charAt(salesIndex);
          salesIndex++;
        } else {
          clearInterval(salesTypeInterval);
        }
      }, 100);
    }, 1000);

    // Efecto de escritura para "24/7"
    const supportText = '24/7';
    const supportElement = document.getElementById('text-support');
    let supportIndex = 0;
    const supportTypeInterval = setInterval(() => {
      if (supportIndex < supportText.length) {
        supportElement.textContent += supportText.charAt(supportIndex);
        supportIndex++;
      } else {
        clearInterval(supportTypeInterval);
      }
    }, 150);

    // Efecto de escritura para "Soporte"
    const supportLabelText = 'Soporte';
    const supportLabelElement = document.getElementById('text-support-label');
    let supportLabelIndex = 0;
    setTimeout(() => {
      const supportLabelInterval = setInterval(() => {
        if (supportLabelIndex < supportLabelText.length) {
          supportLabelElement.textContent += supportLabelText.charAt(supportLabelIndex);
          supportLabelIndex++;
        } else {
          clearInterval(supportLabelInterval);
        }
      }, 100);
    }, 600);

    // Efecto de escritura para "100%"
    const guaranteeText = '100%';
    const guaranteeElement = document.getElementById('text-guarantee');
    let guaranteeIndex = 0;
    const guaranteeTypeInterval = setInterval(() => {
      if (guaranteeIndex < guaranteeText.length) {
        guaranteeElement.textContent += guaranteeText.charAt(guaranteeIndex);
        guaranteeIndex++;
      } else {
        clearInterval(guaranteeTypeInterval);
      }
    }, 150);

    // Efecto de escritura para "Garantía"
    const guaranteeLabelText = 'Garantía';
    const guaranteeLabelElement = document.getElementById('text-guarantee-label');
    let guaranteeLabelIndex = 0;
    setTimeout(() => {
      const guaranteeLabelInterval = setInterval(() => {
        if (guaranteeLabelIndex < guaranteeLabelText.length) {
          guaranteeLabelElement.textContent += guaranteeLabelText.charAt(guaranteeLabelIndex);
          guaranteeLabelIndex++;
        } else {
          clearInterval(guaranteeLabelInterval);
        }
      }, 100);
    }, 600);
  }

  // Iniciar animaciones cuando se aceptan los términos
  acceptBtn.addEventListener('click', function() {
    setTimeout(animateFeatures, 500);
  });

  // Efecto de máquina de escribir
  const texts = [
    'Más de 500 ventas concluidas! 💸',
    'Soporte activo 24/7 😎⚡',
    'Garantía al 100% 😜',
    'Cuentas premium a un gran precio, y mucho más!👻'
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typewriterElement = document.getElementById('typewriter-text');

  function typeWriter() {
    const currentText = texts[textIndex];
    
    if (!isDeleting) {
      typewriterElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      
      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeWriter, 2000);
        return;
      }
    } else {
      typewriterElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, 500);
        return;
      }
    }
    
    setTimeout(typeWriter, isDeleting ? 50 : 100);
  }

  acceptBtn.addEventListener('click', function() {
    setTimeout(typeWriter, 1000);
  });
});


  // Manejo del modal de producto
  const productModal = document.getElementById('productModal');
  const buyButtons = document.querySelectorAll('.buy-btn');
  
  function formatProductDescription(rawDescription) {
    const normalized = (rawDescription || '').replace(/&#10;/g, '\n');
    const escaped = normalized
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
    
    const withMarkdownLinks = escaped.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    return withMarkdownLinks.replace(/\n/g, '<br>');
  }

  buyButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation();
      const card = this.closest('.product-card');
      const title = card.getAttribute('data-product-title');
      const description = card.getAttribute('data-product-description');
      const image = card.getAttribute('data-product-image');

      document.getElementById('modalProductTitle').textContent = title;
      document.getElementById('modalProductDescription').innerHTML = formatProductDescription(description);
      document.getElementById('modalProductImage').src = image;

      productModal.classList.add('active');
    });
  });

  // Cerrar modal de producto
  productModal.querySelector('.close-btn').addEventListener('click', function(e) {
    e.stopPropagation();
    productModal.classList.remove('active');
  });

  // Cerrar modal al hacer clic fuera
  document.addEventListener('click', function(e) {
    if (e.target === productModal) {
      productModal.classList.remove('active');
    }
  });


  // Filtrado de productos por categoría
  const categoryButtons = document.querySelectorAll('.category-btn');
  const productCards = document.querySelectorAll('.product-card');

  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      
      // Actualizar botón activo
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filtrar productos
      productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
