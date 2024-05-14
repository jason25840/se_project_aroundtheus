export default class Api {
  constructor({ baseUrl, headers }) {
    this.server = baseUrl;
    this.headers = headers;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }
  getUserInfo() {
    return fetch(`${this.server}/users/me`, {
      headers: this.headers,
    }).then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this.server}/cards`, {
      headers: this.headers,
    }).then(this._checkResponse);
  }
  renderCards() {
    Promise.all(this.getUserInfo(), this.getInitialCards());
  }

  userProfileInfo(name, about) {
    return fetch(`${this.server}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._checkResponse);
  }

  addNewCard(cardData) {
    return fetch(`${this.server}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: cardData.name.value,
        link: cardData.link.value,
      }),
    }).then(this._checkResponse);
  }

  // other methods for working with the API
}
