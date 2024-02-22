import { deleteCard, addLike, removeLike } from "./api";

const cardTemplate = document.querySelector('#card-template').content;

function createCard(cardData, handleLikeClick, handleImageClick, handleDeleteClick) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardElement.querySelector('.card__title').textContent = cardData.name;
  cardElement.querySelector('.card__likes-number').textContent = cardData.likes.length;
  cardElement.querySelector('.card__delete-button').addEventListener('click', (evt) => handleDeleteClick(evt, cardData['_id']));
  cardElement.querySelector('.card__like-button').addEventListener('click', (evt) => handleLikeClick(evt, cardData['_id']));
  cardImage.addEventListener('click', handleImageClick);
  return cardElement;
}

function handleDeleteClick(evt, cardId) {
  deleteCard(cardId)
    .then(evt.target.closest('.card').remove())
    .catch(err => console.log(err));
}

function handleLikeClick(evt, cardId) {
  const likeButton = evt.target;
  const likesNumberElement = likeButton.closest('.card__like-button-container').querySelector('.card__likes-number');
  const toggleState = (count) => {
    likesNumberElement.textContent = count;
    likeButton.classList.toggle('card__like-button_is-active');
  }
  if(!likeButton.classList.contains('card__like-button_is-active')) {
    addLike(cardId)
      .then(result => toggleState(result.likes.length))
      .catch(err => console.log(err));
  }
  else {
    removeLike(cardId)
      .then(result => toggleState(result.likes.length))
      .catch(err => console.log(err));
  }
}

export { createCard, handleLikeClick, handleDeleteClick };