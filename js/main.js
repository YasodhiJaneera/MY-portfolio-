// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Scroll-spy: highlight active nav link based on section in view
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
);

sections.forEach(section => observer.observe(section));

// Contact form (client-side only demo — replace action with a real endpoint or mailto)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim() || 'Portfolio contact';
  const message = document.getElementById('message').value.trim();

  const mailto = `mailto:senadheerajaneera@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `From: ${name} (${email})\n\n${message}`
  )}`;

  window.location.href = mailto;
  status.textContent = 'Opening your email client…';
  form.reset();
});
