// Mobile nav toggle script
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('navigation');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        navToggle.classList.toggle('open');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                navToggle.classList.remove('open');
            }
        });
    });

    // disable scroll when mobile nav is open
    const body = document.body;
    navToggle.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });
}

// Hide/show navbar on scroll
(function() {
  const navbar = document.querySelector('.navbar');
  const mobileNav = document.getElementById('navigation');
  if (!navbar) return;

  let lastY = window.scrollY;
  let ticking = false;

  function handleScroll() {
    const currentY = window.scrollY;

    if (currentY > lastY && currentY > 60) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }

    lastY = currentY;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();
