const cardTemplate = document.querySelector('#card-template').content;

function createCard(cardData, handleLikeClick, handleImageClick, handleDeleteClick) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = cardData.link;
  cardImage.alt = cardData.alt;
  cardElement.querySelector('.card__title').textContent = cardData.name;
  cardElement.querySelector('.card__delete-button').addEventListener('click', handleDeleteClick);
  cardElement.querySelector('.card__like-button').addEventListener('click', handleLikeClick);
  cardImage.addEventListener('click', handleImageClick);
  return cardElement;
}

function handleDeleteClick(evt) {
  evt.target.closest('.card').remove();
}

function handleLikeClick(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

export { createCard, handleLikeClick, handleDeleteClick };