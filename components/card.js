export default class Card {
  constructor(data, cardSelector, openPreviewModal) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._openPreviewModal = openPreviewModal;
  }

  _setEventListeners() {
    //.card__like-button
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    //.card__trash-button
    this._cardElement
      .querySelector(".card__trash-button")
      .addEventListener("Click", () => {
        this._handleTrashButton();
      });

    this._cardImageElement
      .querySelector("#modal__preview-card")
      .addEventListener("click", () => {
        this._openPreviewModal(this);
      });
  }

  _handleTrashButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    //this._setEventListeners();
  }
}
console.log(this._cardImageElement);