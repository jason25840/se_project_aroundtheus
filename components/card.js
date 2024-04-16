class Card {
  constructor(cardData, cardSelector, openPreviewModal) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._openPreviewModal = openPreviewModal;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.firstElementChild.cloneNode(true);

    return cardElement;
  }

  _handleLikeButton() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleTrashButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleImageClick() {
    console.log("it is clicking!");
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._openPreviewModal();
      });
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeButton();
      });

    this._cardElement
      .querySelector(".card__trash-button")
      .addEventListener("click", () => {
        this._handleTrashButton();
      });

    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleImageClick(this);
      });
  }

  getCardElement() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();

    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(".card__title").textContent = this._name;

    return this._cardElement;
  }
}

export default Card;
