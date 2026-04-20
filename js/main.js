document.addEventListener('DOMContentLoaded', () => {
  // Capturando elementos do DOM
  const modalOverlay = document.getElementById('modal');
  const modalAvatar = document.getElementById('modal-avatar');
  const modalName = document.getElementById('modal-name');
  const modalRole = document.getElementById('modal-role');
  const modalBio = document.getElementById('modal-bio');
  const btnClose = document.querySelector('.js-modal-close');
  const triggers = document.querySelectorAll('.js-modal-trigger');

  window.addEventListener('load', () => {
    document.body.classList.add('page-loaded');
});

  // Função para abrir o modal
  const openModal = (name, role, initials, bio, photo) => {
    // 1. Limpa o conteúdo anterior do avatar
    modalAvatar.innerHTML = ''; 

    // 2. Lógica: Tem foto válida? Cria <img>. Se não, usa Iniciais.
    if (photo && photo !== 'undefined' && photo !== '') {
      const imgElement = document.createElement('img');
      imgElement.src = photo;
      imgElement.alt = `Foto de ${name}`;
      modalAvatar.appendChild(imgElement);
    } else {
      modalAvatar.textContent = initials;
    }

    // 3. Preenche o restante dos dados
    modalName.textContent = name;
    modalRole.textContent = role;
    modalBio.textContent = bio;
    
    // 4. Exibe o modal e trava o scroll do fundo
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  // Função para fechar o modal
  const closeModal = () => {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = ''; // Destrava o scroll do fundo
  };

  // Adicionando um ÚNICO evento de clique em cada card executivo
  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault(); 
      
      // Extraindo todos os dados do HTML (dataset)
      const { name, role, initials, bio, photo } = trigger.dataset;
      
      // Enviando para a função
      openModal(name, role, initials, bio, photo);
    });
  });

  // Evento: Fechar pelo botão X
  if (btnClose) {
    btnClose.addEventListener('click', closeModal);
  }

  // Evento: Fechar ao clicar fora do modal (no overlay escuro)
  modalOverlay.addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
      closeModal();
    }
  });

  // Evento: Fechar usando a tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript carregado! Ligando o site..."); // Isso vai aparecer no F12
    document.body.classList.add('page-loaded');
});