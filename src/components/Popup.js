export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose.bind(this));
    document.addEventListener("mousedown", this._handleMouseClickModalClose);
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
    document.removeEventListener("mousedown", this._handleMouseClickModalClose);
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      const modal = document.querySelector(".modal_opened");
      this.close(modal);
    }
  }

  _handleMouseClickModalClose(e) {
    if (e.target.classList.contains("modal")) {
      const modal = document.querySelector(".modal_opened");
      this.close(modal);
    }
  }

  setEventListeners() {
    const closeButton = this._popupElement.querySelector(".modal__close");
    closeButton.addEventListener("click", () => {
      this.close();
    });
    this._popupElement.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal_opened")) {
        this.close();
      }
    });
  }
}
