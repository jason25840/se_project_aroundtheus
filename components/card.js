class Card {
  constructor(data, cardSelector, openPreviewModal) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._openPreviewModal = openPreviewModal;
  }

  _cardSelector() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._cardElement = this._getTemplate();
    this._cardImageEl = cardElement.querySelector(".card__image");
    this._cardTitleEl = cardElement.querySelector(".card__title");
    this._likeButton = cardElement.querySelector(".card__like-button");
    this._deleteButton = cardElement.querySelector(".card__trash-button");

    this._cardImageEl.src = cardData.link;
    this._cardImageEl.alt = cardData.name;
    this._cardTitleEl.textContent = cardData.name;

    this._setEventListeners();

    return this._cardElement;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", this._handleLikeIcon);
    this._deleteButton.addEventListener("click", this._handleTrashButton);
    this._cardImageEl.addEventListener("click", () => this._handleImageClick);
  }

  _handleTrashButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeIcon() {
    console.log(this);
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleImageClick(cardData) {
    this._cardImageElement
      .querySelector("#modal__preview-card")
      .openPreviewModal(cardData);
  }
}

export default Card;
