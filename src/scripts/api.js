const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-7',
  headers: {
    authorization: 'cd9abd36-5941-411a-af00-2044548d1ec1',
    'Content-Type': 'application/json'
  }
}

const userRequest = `${config.baseUrl}/users/me`;
const cardsRequest = `${config.baseUrl}/cards`;
const cardLikeRequest = `${cardsRequest}/likes`

const handleResponse = (response) => {
  if(response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.status}`);
} 

const getUserData = () => {
  return fetch(userRequest, {
    headers: config.headers
  })
    .then(handleResponse);
}

const getInitialCards = () => {
  return fetch(cardsRequest, {
    headers: config.headers
  })
    .then(handleResponse);
}

const updateUserData = (name, about) => {
  return fetch(userRequest, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
    .then(handleResponse);
}

const postCard = (name, link) => {
  return fetch(cardsRequest, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  })
    .then(handleResponse);
}

const deleteCard = (cardId) => {
  return fetch(`${cardsRequest}/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(handleResponse);
}

const addLike = (cardId) => {
  return fetch(`${cardLikeRequest}/${cardId}`, {
    method: 'PUT',
    headers: config.headers
  })
    .then(handleResponse);
}

const removeLike = (cardId) => {
  return fetch(`${cardLikeRequest}/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(handleResponse);
}

const updateAvatar = (avatarLink) => {
  return fetch(`${userRequest}/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarLink
    })
  })
    .then(handleResponse);
}

export { getUserData, getInitialCards, updateUserData, postCard, deleteCard, addLike, removeLike, updateAvatar }