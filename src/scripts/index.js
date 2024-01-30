import '../pages/index.css';
import { initialCards, createCard, addCard, like, deleteCard } from './cards';
import { openModal, closeModal } from './modal';

const placesList = document.querySelector('.places__list');
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

function openCard(evt) {
  const currentImage = evt.target;
  image.src = currentImage.src;
  image.alt = currentImage.alt;
  caption.textContent = currentImage.parentElement.querySelector('.card__title').textContent;
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
  const cardInfo = {};
  console.log(placeInput, linkInput);
  cardInfo.name = placeInput.value;
  cardInfo.link = linkInput.value;
  cardInfo.alt = 'Место в России.';
  placesList.prepend(createCard(cardInfo, like, openCard, deleteCard));
  newCardFormElement.reset();
  closeModal(newCardPopup);
}

editButton.addEventListener('click', () => {
  openModal(editPopup);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
});

addButton.addEventListener('click', () => openModal(newCardPopup));

document.addEventListener('click', evt => {
  const element = evt.target;
  if(element.classList.contains('popup__close')) {
    closeModal(element.parentElement.parentElement);
  }
  if(element.classList.contains('popup')) {
    closeModal(element);
  }
});

editFormElement.addEventListener('submit', handleEditFormSubmit);
newCardFormElement.addEventListener('submit', handleNewCardFormSubmit);

initialCards.forEach(item => addCard(createCard(item, like, openCard, deleteCard), placesList));