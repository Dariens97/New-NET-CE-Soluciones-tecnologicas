// Espera a que el documento HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {

  // 1. Busca el botón de hamburguesa en el HTML
  const navToggle = document.querySelector('.nav-toggle');
  
  // 2. Busca la lista del menú a la que le daremos "toggle"
  const navList = document.querySelector('#main-nav-list');

  // 3. Asegurarnos de que ambos existan antes de hacer nada
  if (navToggle && navList) {
    
    // 4. Cuando se haga clic en el botón...
    navToggle.addEventListener('click', () => {
      
      // ...alterna (toggle) la clase. Si la tiene, la quita; si no, la pone.
      navList.classList.toggle('nav-list--visible');
      
      // 5. Actualiza ARIA (accesibilidad) para lectores de pantalla
      const isVisible = navList.classList.contains('nav-list--visible');
      navToggle.setAttribute('aria-expanded', isVisible);
    });
  }
  
});
// --- CÓDIGO PARA EL HEADER "SCROLLED" ---

// Espera a que el documento esté cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Busca el header en el HTML
    const mainHeader = document.querySelector('.main-header');

    // 2. Si el header existe...
    if (mainHeader) {
        
        // 3. ...escucha el evento "scroll" en la ventana
        window.addEventListener('scroll', () => {
            
            // Obtenemos la posición actual del scroll
              const scrollY = window.scrollY;
              
              // Revisamos si el header YA TIENE la clase
              const isScrolled = mainHeader.classList.contains('header-scrolled');

              // Lógica de la "zona muerta"
              if (scrollY > 50 && !isScrolled) {
                  // 1. Si bajamos más de 50px Y AÚN NO está oscuro...
                  // ...lo oscurecemos.
                  mainHeader.classList.add('header-scrolled');
              } else if (scrollY < 40 && isScrolled) {
                  // 2. Si subimos más de 40px Y SÍ está oscuro...
                  // ...lo aclaramos.
                  mainHeader.classList.remove('header-scrolled');
              }
        });
    }
});
// --- CÓDIGO PARA ANIMACIÓN "FADE-IN" AL SCROLL ---

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Busca *todos* los elementos que queremos animar
    // Les pondremos la clase 'fade-in-on-scroll' en el HTML
    const elementsToFadeIn = document.querySelectorAll('.fade-in-on-scroll');

    // 2. Opciones para el observador
    const observerOptions = {
        root: null, // Observa en relación al viewport
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
        rootMargin: '0px'
    };

    // 3. Creamos el observador
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento está entrando en la pantalla
            if (entry.isIntersecting) {
                // Añadimos la clase que activa la animación
                entry.target.classList.add('is-visible');
                // Dejamos de observar este elemento (la animación es solo 1 vez)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 4. Le decimos al observador que vigile cada elemento
    elementsToFadeIn.forEach(element => {
        fadeInObserver.observe(element);
    });

});
document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.querySelector('.back-to-top');

  if(backToTopButton) {
    window.addEventListener('scroll', () => {
      // Muestra el botón si bajamos más de 400px
      if (window.scrollY > 400) {
        backToTopButton.classList.add('is-visible');
      } else {
        backToTopButton.classList.remove('is-visible');
      }
    });
  }
// --- MÓDULO 5: (NUEVO) COPIAR EMAIL AL PORTAPAPELES ---
    
    // 1. Busca todos los links con la nueva clase
    const copyEmailLinks = document.querySelectorAll('.js-copy-email');

    if (copyEmailLinks.length > 0) {
        copyEmailLinks.forEach(link => {
            
            // 2. Añade un "oyente" de clic
            link.addEventListener('click', function(e) {
                
                // 3. Previene la acción por defecto (abrir Outlook)
                e.preventDefault();

                // 4. Obtiene el email del texto del link
                const email = this.textContent;
                const originalText = this.textContent; // Guarda el texto original
                
                // 5. Intenta copiar al portapapeles
                navigator.clipboard.writeText(email).then(() => {
                    
                    // 6. Feedback al usuario (¡Éxito!)
                    this.textContent = '¡Copiado!';
                    this.style.opacity = '0.7'; // Lo atenúa un poco

                    // 7. Vuelve al texto original después de 2 segundos
                    setTimeout(() => {
                        this.textContent = originalText;
                        this.style.opacity = '1';
                    }, 2000);
                    
                }).catch(err => {
                    // En caso de error (ej. permisos)
                    console.error('Error al copiar el email: ', err);
                });
            });
        });
    }
// --- MÓDULO 6: (NUEVO) ENVÍO DE FORMULARIO CONTACTO (AJAX) ---
    
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status-message');

    if (contactForm && formStatus) {
        
        contactForm.addEventListener('submit', function(e) {
            
            // 1. Evita que la página se recargue
            e.preventDefault();
            
            const form = e.target;
            const data = new FormData(form);
            const action = form.action;
            
            // 2. Muestra "Enviando..."
            formStatus.textContent = 'Enviando mensaje...';
            formStatus.className = 'success'; // Reutiliza el estilo verde

            // 3. Envía los datos a Formspree en segundo plano
            fetch(action, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    // 4. ¡Éxito! Muestra mensaje y BORRA el formulario
                    formStatus.textContent = '¡Gracias! Tu mensaje ha sido enviado.';
                    formStatus.className = 'success';
                    
                    form.reset(); // <-- ¡AQUÍ ESTÁ LA MAGIA!
                    
                } else {
                    // 5. Error del servidor
                    formStatus.textContent = 'Oops! Hubo un error al enviar.';
                    formStatus.className = 'error';
                }
            }).catch(error => {
                // 6. Error de red (sin conexión)
                console.error('Error de red:', error);
                formStatus.textContent = 'Error de red. Revisa tu conexión.';
                formStatus.className = 'error';
            });
        });
    }
});

