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

function closeModalByOverlayClick(evt) {
  if(evt.target.classList.contains('popup')) {
    closeModal(evt.target);
  }
}

function setCloseModalWindowEventListeners(modal) {
  modal.querySelector('.popup__close').addEventListener('click', () => closeModal(modal));
  modal.addEventListener('click', closeModalByOverlayClick);
}

export { openModal, closeModal, setCloseModalWindowEventListeners };