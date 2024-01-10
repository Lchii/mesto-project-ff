function createCard(card, deleteCard) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  cardElement.querySelector('.card__image').src = card.link;
  cardElement.querySelector('.card__title').textContent = card.name;
  cardElement.querySelector('.card__delete-button').addEventListener('click', evt => deleteCard(evt));
  const placesList = document.querySelector('.places__list');
  placesList.append(cardElement);
}

function deleteCard(event) {
  event.target.parentElement.remove();
}

initialCards.forEach(item => createCard(item, deleteCard));
