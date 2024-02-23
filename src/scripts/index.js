import '../pages/index.css';
import { createCard, handleLikeClick, handleDeleteClick, currentCard, currentCardId } from './card';
import { openModal, closeModal, setCloseModalWindowEventListeners } from './modal';
import { enableValidation, clearValidation } from './validation';
import { getUserData, getInitialCards, updateUserData, postCard, updateAvatar, deleteCard } from './api';

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error'
};

let userId;

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
export const deleteCardPopup = document.querySelector('.popup_type_delete');

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

const deleteCardFormElement = document.querySelector('form[name=delete-card]');

function addCard(cardElement, container) {
  container.append(cardElement);
}

function renderLoading(isLoading, button) {
  button.textContent = isLoading ? 'Сохранение...' : 'Сохранить';
}

function openPopup(popup) {
  const formElement = popup.querySelector('.popup__form');
  clearValidation(formElement, validationConfig);
  openModal(popup);
  if(popup === editPopup) {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
  }
}

function handleImageClick(evt) {
  const currentImage = evt.target;
  image.src = currentImage.src;
  image.alt = currentImage.alt;
  caption.textContent = currentImage.alt;
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
      closeModal(editPopup);
    })
    .catch(err => console.log(err))
    .finally(() => renderLoading(false, button));
}

function handleEditAvatarFormSubmit(evt) {
  evt.preventDefault();
  const button = editAvatarPopup.querySelector('.popup__button');
  renderLoading(true, button);
  updateAvatar(avatarLinkInput.value)
    .then(result => {
      profileImage.style.backgroundImage = `url(\'${result.avatar}\')`;
      closeModal(editAvatarPopup);
    })
    .catch(err => console.log(err))
    .finally(() => renderLoading(false, button));
}

function handleNewCardFormSubmit(evt) {
  evt.preventDefault();
  const button = newCardPopup.querySelector('.popup__button');
  renderLoading(true, button);
  postCard(placeInput.value, linkInput.value)
    .then(result => {
      cardsContainer.prepend(createCard(result, handleLikeClick, handleImageClick, handleDeleteClick, userId));
      closeModal(newCardPopup);
    })
    .catch(err => console.log(err))
    .finally(() => renderLoading(false, button));
}

function handleDeleteCardFormSubmit(evt) {
  evt.preventDefault();
  deleteCard(currentCardId)
  .then(() => {
    currentCard.remove();
    closeModal(deleteCardPopup);
  })
  .catch(err => console.log(err));
}

enableValidation(validationConfig); 

editButton.addEventListener('click', () => openPopup(editPopup));
profileImage.addEventListener('click', () => openPopup(editAvatarPopup));

addButton.addEventListener('click', () => openPopup(newCardPopup));

editFormElement.addEventListener('submit', handleEditFormSubmit);
newCardFormElement.addEventListener('submit', handleNewCardFormSubmit);
editAvatarFormElement.addEventListener('submit', handleEditAvatarFormSubmit);
deleteCardFormElement.addEventListener('submit', handleDeleteCardFormSubmit);

popups.forEach(setCloseModalWindowEventListeners);

Promise.all([getUserData(), getInitialCards()])
  .then(results => {
    const [userData, cardsList] = results;
    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileImage.style.backgroundImage = `url(\'${userData.avatar}\')`;
    userId = userData['_id'];
    cardsList.forEach(cardData => addCard(createCard(cardData, handleLikeClick, handleImageClick, handleDeleteClick, userId), cardsContainer));
  })
  .catch(err => console.log(err));

