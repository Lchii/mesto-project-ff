const placesList = document.querySelector('.places__list');

function createCard(card, deleteCard) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = card.link;
  cardImage.alt = card.alt;
  cardElement.querySelector('.card__title').textContent = card.name;
  cardElement.querySelector('.card__delete-button').addEventListener('click', evt => deleteCard(evt));
  return cardElement;
}

function addCard(cardElement) {
  placesList.append(cardElement);
}

function deleteCard(event) {
  event.target.parentElement.remove();
}

initialCards.forEach(item => addCard(createCard(item, deleteCard)));