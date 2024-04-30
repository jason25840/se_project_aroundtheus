import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector }, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    this.popupForm.reset();
    super.close();
  }

  _getInputValues() {
    const inputs = this._popupElement.querySelectorAll(".modal__input");
    const inputItems = {};

    inputs.forEach(({ name, value }) => {
      inputItems[name] = value;
    });
    return inputItems;
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }
}
