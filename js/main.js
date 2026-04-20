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

/* ---------- 3. Lógica do Modal (Blindada e Otimizada) ---------- */
const overlay = document.getElementById('modal');

// O 'if (overlay)' garante que o código só rode se o modal estiver no HTML
if (overlay) {
  const modalName   = document.getElementById('modal-name');
  const modalRole   = document.getElementById('modal-role');
  const modalBio    = document.getElementById('modal-bio');
  const modalAvatar = document.getElementById('modal-avatar');
  const linksContainer = document.getElementById('modal-links'); // Pegamos o container aqui

  document.querySelectorAll('.js-modal-trigger').forEach(card => {
    card.addEventListener('click', e => {
      e.preventDefault();
      
      const name     = card.getAttribute('data-name');
      const role     = card.getAttribute('data-role');
      const bio      = card.getAttribute('data-bio');
      const photo    = card.getAttribute('data-photo');
      const initials = card.getAttribute('data-initials');
      const linkedin = card.getAttribute('data-linkedin');
      const github   = card.getAttribute('data-github');
      const cv       = card.getAttribute('data-cv');

      if(modalName) modalName.textContent = name;
      if(modalRole) modalRole.textContent = role;
      if(modalBio)  modalBio.textContent  = bio;
      
      if(modalAvatar) {
        modalAvatar.innerHTML = (photo && photo !== "null" && photo !== "") 
          ? `<img src="${photo}" alt="${name}">` 
          : `<span>${initials || ''}</span>`;
      }

      // SÓ executa a lógica de links se o container existir nesta página
      if (linksContainer) {
        let linksHTML = ''; 
        if (linkedin) linksHTML += `<a href="${linkedin}" target="_blank" class="modal-link-btn btn-linkedin" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>`;
        if (github)   linksHTML += `<a href="${github}" target="_blank" class="modal-link-btn btn-github" title="GitHub"><i class="fab fa-github"></i></a>`;
        if (cv)       linksHTML += `<a href="${cv}" target="_blank" class="modal-link-btn btn-cv" title="Currículo PDF"><i class="fas fa-file-pdf"></i></a>`;
        
        linksContainer.innerHTML = linksHTML;
      }

      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  /* Fechar modal */
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