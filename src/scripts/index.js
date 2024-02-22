import '../pages/index.css';
import { createCard, handleLikeClick, handleDeleteClick } from './card';
import { openModal, closeModal, setCloseModalWindowEventListeners } from './modal';
import { enableValidation, clearValidation } from './validation';
import { getUserData, getInitialCards, updateUserData, postCard, updateAvatar } from './api';

const cardsContainer = document.querySelector('.places__list');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__image');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const popups = document.querySelectorAll('.popup');
const editPopup = document.querySelector('.popup_type_edit');
const editAvatarPopup = document.querySelector('.popup_type_edit-avatar');
const newCardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

const image = imagePopup.querySelector('.popup__image');
const caption = imagePopup.querySelector('.popup__caption');

const editFormElement = document.querySelector('form[name=edit-profile]');
const nameInput = editFormElement.querySelector('input[name=name]');
const jobInput = editFormElement.querySelector('input[name=description]');

const newCardFormElement = document.querySelector('form[name=new-place]');
const placeInput = newCardFormElement.querySelector('input[name=place-name]');
const linkInput = newCardFormElement.querySelector('input[name=link]');

const editAvatarFormElement = document.querySelector('form[name=edit-avatar]');
const avatarLinkInput = editAvatarFormElement.querySelector('.popup__input_type_url');

function addCard(cardElement, container) {
  container.append(cardElement);
}

function renderLoading(isLoading, button) {
  if(isLoading) {
    button.textContent = 'Сохранение...'; 
  }
  else {
    button.textContent = 'Сохранить';
  }
}

function openPopup(popup) {
  const form = popup.querySelector('.popup__form');
  if(form != null) {
    form.reset();
  }
  openModal(popup);
  if(popup === editPopup) {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
  }
  clearValidation(popup, {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error'
  });
}

function handleImageClick(evt) {
  const currentImage = evt.target;
  image.src = currentImage.src;
  image.alt = currentImage.alt;
  caption.textContent = currentImage.closest('.card').querySelector('.card__title').textContent;
  openModal(imagePopup);
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  const button = editPopup.querySelector('.popup__button');
  renderLoading(true, button);
  updateUserData(nameInput.value, jobInput.value)
    .then(result => {
      profileTitle.textContent = result.name;
      profileDescription.textContent = result.about;
      renderLoading(false, button);
      closeModal(editPopup);
    })
    .catch(err => console.log(err))
}

function handleEditAvatarFormSubmit(evt) {
  evt.preventDefault();
  const button = editAvatarPopup.querySelector('.popup__button');
  renderLoading(true, button);
  updateAvatar(avatarLinkInput.value)
    .then(result => {
      profileImage.style.backgroundImage = `url(\'${result.avatar}\')`;
      renderLoading(false, button);
      closeModal(editAvatarPopup);
    })
    .catch(err => console.log(err));
}

function handleNewCardFormSubmit(evt) {
  evt.preventDefault();
  const button = newCardPopup.querySelector('.popup__button');
  renderLoading(true, button);
  postCard(placeInput.value, linkInput.value)
    .then(result => {
      cardsContainer.prepend(createCard(result, handleLikeClick, handleImageClick, handleDeleteClick));
      renderLoading(false, button);
      closeModal(newCardPopup);
    })
    .catch(err => console.log(err));
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
}); 


editButton.addEventListener('click', () => openPopup(editPopup));
profileImage.addEventListener('click', () => openPopup(editAvatarPopup));

addButton.addEventListener('click', () => openPopup(newCardPopup));

editFormElement.addEventListener('submit', handleEditFormSubmit);
newCardFormElement.addEventListener('submit', handleNewCardFormSubmit);
editAvatarFormElement.addEventListener('submit', handleEditAvatarFormSubmit);

popups.forEach(item => setCloseModalWindowEventListeners(item));

Promise.all([getUserData(), getInitialCards()])
  .then(results => {
    const [userData, cardsList] = results;
    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileImage.style.backgroundImage = `url(\'${userData.avatar}\')`;

    cardsList.forEach(cardData => {
      const cardElement = createCard(cardData, handleLikeClick, handleImageClick, handleDeleteClick);
      if(cardData.owner['_id'] != userData['_id']){
        cardElement.querySelector('.card__delete-button').style.display = 'none';
      }
      cardData.likes.forEach(user => {
        if(user['_id'] === userData['_id']) {
          cardElement.querySelector('.card__like-button').classList.add('card__like-button_is-active');
        }
      });
      addCard(cardElement, cardsContainer);
    });
  })
  .catch(err => console.log(err));

