const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
      alt: "Горы, покрытые зеленью."
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
      alt: "Река, окруженная лесом и холмами."
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
      alt: "Ряд многоэтажных панельных домов."
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
      alt: "Земля, покрытая островками мха и других низкорослых растений."
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
      alt: "Железная дорога, окруженная лесом."
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
      alt: "Скала на берегу замерзшего озера."
    }
];

function createCard(card, like, openCard, deleteCard) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = card.link;
  cardImage.alt = card.alt;
  cardElement.querySelector('.card__title').textContent = card.name;
  cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard);
  cardElement.querySelector('.card__like-button').addEventListener('click', like);
  cardImage.addEventListener('click', openCard);
  return cardElement;
}

function addCard(cardElement, list) {
  list.append(cardElement);
}

function deleteCard(evt) {
  evt.target.parentElement.remove();
}

function like(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

export { initialCards, createCard, addCard, like, deleteCard };