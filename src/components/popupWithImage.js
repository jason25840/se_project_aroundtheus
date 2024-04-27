import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  contructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popupElement.querySelector(
      ".modal__preview-image"
    );
    this._imageTitle = this._popupElement.querySelector("#preview-title");
  }

  open(cardData) {
    this._imageElement.src = cardData.link;
    this._imageElement.alt = cardData.name;
    this._imageTitle.textContent = cardData.name;
    super.open();
  }
}
