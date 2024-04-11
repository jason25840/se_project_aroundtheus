class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._formElement = formElement;
  }

  _showInputError(formElement, inputElement) {
    console.log("this is getting seen");
    const errorMessageElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);

    errorMessageElement.textContent = this._inputElement.validationMessage;
    errorMessageElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorMessageElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorMessageElement.textContent = "";
    errorMessageElement.classList.remove(this._errorClass);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputElement)) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
      return;
    }

    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  _hasInvalidInput(inputList) {
    return ![...inputList].every((inputElement) => inputElement.validity.valid);
  }

  _checkInputValidity(formElement, inputElement) {
    console.log("check in put validity for:", inputElement);
    if (!inputElement.validity.valid) {
      console.log("Input is not valid. Showing error.");
      return this._showInputError(formElement, inputElement);
    }
    console.log("Input is valid. Hiding error.");
    _hideInputError(inputElement);
  }

  _setEventListeners() {
    this._inputElement = this._formElement.querySelectorAll(
      this._inputSelector
    );
    this._submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );
    this._inputElement.forEach((inputElement) => {
      inputElement.addEventListener("input", (e) => {
        this._checkInputValidity(this.formElement, inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners(this._formElement);
  }
}
//console.log(inputList);
export default FormValidator;
