import PopUp from "./Popup";

export default class PopUpWithConfirm extends PopUp {
  constructor(popUpSelector) {
    super(popUpSelector);
    this._popUpFormSubmit = this._popupElement.querySelector(".modal__button");
  }

  handleDelete(handleDeleteSubmit) {
    this._handleDeleteSubmit = handleDeleteSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popUpFormSubmit.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleDeleteSubmit();
    });
  }
}
