function openModal(modal) {
  modal.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeModalByEsc);
}

function closeModal(modal) {
  modal.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeModalByEsc);
}

function closeModalByEsc(evt) {
  if(evt.key === 'Escape') {
    const openedModal = document.querySelector('.popup_is-opened');
    closeModal(openedModal);
  }
}

function closeModalByOverlay(evt) {
  if(element.classList.contains('popup')) {
    closeModal(element);
  }
}

export {openModal, closeModal, closeModalByEsc};