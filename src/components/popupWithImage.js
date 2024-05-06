import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = document.querySelector(".modal__preview-image");
    this._imageTitle = document.querySelector("#preview-title");
  }

  open() {
    this._popupElement.querySelector("#preview-title").textContent = name;
    const image = this._popupElement.querySelector(".modal__preview-image");
    image.src = link;
    image.alt = this._popupElement.name;
    //this._imageElement.src = cardData.link;
    //this._imageElement.alt = cardData.name;
    //this._imageTitle.textContent = cardData.name;
    super.open();
  }
}
