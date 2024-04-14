class Card {
  constructor(data, cardSelector, openPreviewModal) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._openPreviewModal = openPreviewModal;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.firstElementChild.cloneNode(true);
    console.log(cardElement);

    return cardElement;
  }

  _setEventListeners() {
    console.warn("this is not done yet");
    // this._likeButton.addEventListener("click", this._handleLikeIcon);
    // this._deleteButton.addEventListener("click", this._handleTrashButton);
    // this._cardImageEl.addEventListener("click", () => this._handleImageClick);
  }

  getCardElement(cardData) {
    this._cardElement = this._getTemplate();
    this._setEventListeners();

    //this._cardImageEl = cardElement.querySelector(".card__image");
    //this._cardTitleEl = cardElement.querySelector(".card__title");
    //this._likeButton = cardElement.querySelector(".card__like-button");
    //this._deleteButton = cardElement.querySelector(".card__trash-button");

    this._cardElement.querySelector(".card__image").src = cardData.link;
    this._cardElement.querySelector(".card__description").textContent =
      this._name;

    return this._cardElement;
  }

  //_handleTrashButton() {
  //  this._cardElement.remove();
  //  this._cardElement = null;
  //}

  //_handleLikeIcon() {
  //  console.log(this);
  //  this._cardElement
  //    .querySelector(".card__like-button")
  //   .classList.toggle("card__like-button_active");
  //}

  //_handleImageClick(cardData) {
  //  this._cardImageElement
  //    .querySelector("#modal__preview-card")
  //   .openPreviewModal(cardData);
  //}
}

export default Card;
