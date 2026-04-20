/* ============================================
   AeroFatec — main.js
============================================ */

/* ---------- 1. Entrada da página ---------- */
window.addEventListener('load', () => {
  document.body.classList.add('page-loaded');
});

/* ---------- 2. Nav: Transparência no Scroll ---------- */
const navEl = document.querySelector('nav');
function updateNav() {
  if (!navEl) return;
  if (window.scrollY > 60) {
    navEl.classList.add('scrolled');
  } else {
    navEl.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* ---------- 3. Lógica do Modal (Centralizado e Travado) ---------- */
const overlay = document.getElementById('modal');

if (overlay) {
  const modalName   = document.getElementById('modal-name');
  const modalRole   = document.getElementById('modal-role');
  const modalBio    = document.getElementById('modal-bio');
  const modalAvatar = document.getElementById('modal-avatar');

  /* Abrir modal */
  document.querySelectorAll('.js-modal-trigger').forEach(card => {
    card.addEventListener('click', e => {
      e.preventDefault();
      
      const name     = card.getAttribute('data-name');
      const role     = card.getAttribute('data-role');
      const bio      = card.getAttribute('data-bio');
      const photo    = card.getAttribute('data-photo');
      const initials = card.getAttribute('data-initials');

      if(modalName) modalName.textContent = name;
      if(modalRole) modalRole.textContent = role;
      if(modalBio)  modalBio.textContent  = bio;
      
      if(modalAvatar) {
        modalAvatar.innerHTML = (photo && photo !== "null" && photo !== "") 
          ? `<img src="${photo}" alt="${name}">` 
          : `<span>${initials || ''}</span>`;
      }

      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  /* Fechar modal - SOMENTE NO BOTÃO X */
  const closeModal = () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.js-modal-close').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });
}

/* ---------- 4. Menu Hamburguer Mobile ---------- */
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}