import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._submitBtn = this._popupElement.querySelector(".modal__button");
    this._submitBtnText = this._submitBtn.textContent;
  }

  _getInputValues() {
    const inputs = this._popupForm.querySelectorAll(".modal__input");
    const inputItems = {};

    inputs.forEach((input) => {
      inputItems[input.name] = input.value;
    });
    return inputItems;
  }
  renderLoading(isLoading, loadingText = "Saving...") {
    if (isLoading) {
      this._submitBtn.textContent = loadingText;
    } else {
      this._submitBtn.textContent = this._submitBtnText;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
}
