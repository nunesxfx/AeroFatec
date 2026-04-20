/* AeroFatec — main.js */

/* --- Page load animation --- */
window.addEventListener('load', () => {
  document.body.classList.add('page-loaded');
});

/* --- Nav: scroll transparency --- */
const navEl = document.querySelector('nav');

function updateNav() {
  if (!navEl) return;
  navEl.classList.toggle('scrolled', window.scrollY > 60);
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* --- Modal --- */
const overlay = document.getElementById('modal');

if (overlay) {
  const modalName   = document.getElementById('modal-name');
  const modalRole   = document.getElementById('modal-role');
  const modalBio    = document.getElementById('modal-bio');
  const modalAvatar = document.getElementById('modal-avatar');
  const linksContainer = document.getElementById('modal-links');

  document.querySelectorAll('.js-modal-trigger').forEach(card => {
    card.addEventListener('click', e => {
      e.preventDefault();

      const { name, role, bio, photo, initials, linkedin, github, cv } = card.dataset;

      if (modalName)   modalName.textContent   = name;
      if (modalRole)   modalRole.textContent   = role;
      if (modalBio)    modalBio.textContent    = bio;

      if (modalAvatar) {
        modalAvatar.innerHTML = (photo && photo !== 'null' && photo !== '')
          ? `<img src="${photo}" alt="${name}">`
          : `<span>${initials || ''}</span>`;
      }

      if (linksContainer) {
        linksContainer.innerHTML = [
          linkedin && `<a href="${linkedin}" target="_blank" class="modal-link-btn btn-linkedin" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>`,
          github   && `<a href="${github}"   target="_blank" class="modal-link-btn btn-github"   title="GitHub"><i class="fab fa-github"></i></a>`,
          cv       && `<a href="${cv}"       target="_blank" class="modal-link-btn btn-cv"        title="Currículo PDF"><i class="fas fa-file-pdf"></i></a>`,
        ].filter(Boolean).join('');
      }

      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.js-modal-close').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });
}

/* --- Hamburger menu --- */
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}