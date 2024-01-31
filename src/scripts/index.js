import '../pages/index.css';
import { initialCards } from './cards';
import { createCard, handleLikeClick, handleDeleteClick } from './card';
import { openModal, closeModal, setCloseModalWindowEventListeners } from './modal';

const cardsContainer = document.querySelector('.places__list');
const popups = document.querySelectorAll('.popup');
const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const addButton = document.querySelector('.profile__add-button');
const newCardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');
const image = imagePopup.querySelector('.popup__image');
const caption = imagePopup.querySelector('.popup__caption');
const editFormElement = document.querySelector('form[name=edit-profile]');
const nameInput = editFormElement.querySelector('input[name=name]');
const jobInput = editFormElement.querySelector('input[name=description]'); 
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const newCardFormElement = document.querySelector('form[name=new-place]');
const placeInput = newCardFormElement.querySelector('input[name=place-name]');
const linkInput = newCardFormElement.querySelector('input[name=link]');

function addCard(cardElement, container) {
  container.append(cardElement);
}

function openEditPopupWithCurrentData() {
  openModal(editPopup);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
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
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(editPopup);
}

function handleNewCardFormSubmit(evt) {
  evt.preventDefault();
  const cardData = {};
  cardData.name = placeInput.value;
  cardData.link = linkInput.value;
  cardData.alt = placeInput.value;
  cardsContainer.prepend(createCard(cardData, handleLikeClick, handleImageClick, handleDeleteClick));
  newCardFormElement.reset();
  closeModal(newCardPopup);
}

editButton.addEventListener('click', openEditPopupWithCurrentData);
addButton.addEventListener('click', () => openModal(newCardPopup));

editFormElement.addEventListener('submit', handleEditFormSubmit);
newCardFormElement.addEventListener('submit', handleNewCardFormSubmit);

initialCards.forEach(item => addCard(createCard(item, handleLikeClick, handleImageClick, handleDeleteClick), cardsContainer));
popups.forEach(item => setCloseModalWindowEventListeners(item));