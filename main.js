/* ============================================================
   PORTFOLIO - MAIN JAVASCRIPT
   ============================================================ */

// ── PAGE LOADER ────────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    document.body.style.overflow = '';
    initAnimations();
  }, 1900);
});
document.body.style.overflow = 'hidden';

// ── NAVBAR SCROLL EFFECT ───────────────────────────────────────
const navbar = document.getElementById('navbar');
const backTop = document.getElementById('back-top');

window.addEventListener('scroll', () => {
  // Navbar
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  // Back to top
  backTop.classList.toggle('show', window.scrollY > 400);
  // Active nav link
  updateActiveNav();
  // Skill bars
  animateSkillBars();
});

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── ACTIVE NAV LINK ────────────────────────────────────────────
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  let current = '';

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) {
      current = sec.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// ── HAMBURGER / MOBILE MENU ────────────────────────────────────
const hamburger   = document.querySelector('.hamburger');
const mobileMenu  = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── TYPING TEXT ANIMATION ──────────────────────────────────────
const typedEl = document.getElementById('typed-text');
const roles = [
  'Web Developer',
  'Digital Marketer',
  'UI/UX Enthusiast',
  'Content Creator',
  'Branding Specialist',
  'Multimedia Designer'
];
let roleIndex = 0;
let charIndex  = 0;
let isDeleting = false;
let typeDelay  = 120;

function typeRole() {
  const current = roles[roleIndex];

  if (!isDeleting) {
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      typeDelay = 2000;
    } else {
      typeDelay = 100;
    }
  } else {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex  = (roleIndex + 1) % roles.length;
      typeDelay  = 300;
    } else {
      typeDelay = 55;
    }
  }
  setTimeout(typeRole, typeDelay);
}

// ── SCROLL REVEAL ──────────────────────────────────────────────
function initAnimations() {
  typeRole();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  animateSkillBars();
}

// ── SKILL BARS ANIMATION ───────────────────────────────────────
let skillsAnimated = false;
function animateSkillBars() {
  if (skillsAnimated) return;
  const skillsSection = document.getElementById('skills');
  if (!skillsSection) return;

  const rect = skillsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 80) {
    skillsAnimated = true;
    document.querySelectorAll('.skill-fill').forEach(bar => {
      const target = bar.dataset.width;
      setTimeout(() => { bar.style.width = target + '%'; }, 200);
    });
  }
}

// ── CERTIFICATE MODAL ──────────────────────────────────────────
const certModal   = document.getElementById('cert-modal');
const modalImg    = document.getElementById('modal-img');
const modalTitle  = document.getElementById('modal-title');
const modalIssuer = document.getElementById('modal-issuer');

document.querySelectorAll('.cert-card').forEach(card => {
  card.addEventListener('click', () => {
    const imgSrc  = card.dataset.img;
    const title   = card.dataset.title;
    const issuer  = card.dataset.issuer;

    modalImg.src       = imgSrc;
    modalImg.alt       = title;
    modalTitle.textContent  = title;
    modalIssuer.textContent = issuer;

    certModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

document.querySelector('.modal-close').addEventListener('click', closeCertModal);
certModal.addEventListener('click', (e) => {
  if (e.target === certModal) closeCertModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCertModal();
});
function closeCertModal() {
  certModal.classList.remove('open');
  document.body.style.overflow = '';
}

// ── CONTACT FORM ───────────────────────────────────────────────
const contactForm    = document.getElementById('contact-form');
const formSuccess    = document.querySelector('.form-success');
const submitBtn      = document.getElementById('submit-btn');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  submitBtn.textContent = 'Sending…';
  submitBtn.disabled    = true;

  // Simulate send (replace with real endpoint / EmailJS / Formspree)
  setTimeout(() => {
    formSuccess.style.display = 'block';
    contactForm.reset();
    submitBtn.textContent = 'Message Sent ✓';
    setTimeout(() => {
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
      formSuccess.style.display = 'none';
    }, 4000);
  }, 1400);
});

// ── FLOATING PARTICLES ─────────────────────────────────────────
const canvas = document.getElementById('particles-canvas');
const ctx    = canvas.getContext('2d');
let particles = [];
const COLORS  = ['#F2C4C4', '#D6CCE8', '#F4C9A9', '#E8D5A3', '#FADADD'];

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x    = Math.random() * canvas.width;
    this.y    = Math.random() * canvas.height;
    this.r    = Math.random() * 3 + 1;
    this.dx   = (Math.random() - 0.5) * 0.4;
    this.dy   = (Math.random() - 0.5) * 0.4;
    this.alpha= Math.random() * 0.5 + 0.1;
    this.color= COLORS[Math.floor(Math.random() * COLORS.length)];
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x < 0 || this.x > canvas.width ||
        this.y < 0 || this.y > canvas.height) {
      this.reset();
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.alpha;
    ctx.fill();
  }
}

for (let i = 0; i < 55; i++) particles.push(new Particle());

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  ctx.globalAlpha = 1;
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ── SMOOTH SECTION TRANSITIONS ─────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  });
});
