import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/*Elements*/

/*profile elements*/

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileCloseButton = profileEditModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

/*addCard elements*/

const addCardModal = document.querySelector("#add-card-modal");
const addCardModalCloseButton = addCardModal.querySelector(".modal__close");
const addNewCardButton = document.querySelector("#image__add-button");

/*form elements*/

const profileForm = document.forms["profile-form"];
const cardForm = document.forms["card-form"];

/*card elements*/

const cardListEl = document.querySelector(".cards__gallery");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardTitleInput = document.querySelector("#image-title-input");
const cardUrlInput = document.querySelector("#image-url-input");

/*preview elements*/

const previewModal = document.querySelector("#modal__preview-card");
const previewModalImage = document.querySelector(".modal__preview-image");
const previewTitle = previewModal.querySelector("#preview-title");
const previewCloseButton = previewModal.querySelector(".modal__close");

/*Functions*/

function closePopup(popup) {
  popup.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEsc);
  document.removeEventListener("mousedown", handleMouseClickModalClose);
}

function openPopup(popup) {
  popup.classList.add("modal_opened");
  document.addEventListener("keydown", handleEsc);
  document.addEventListener("mousedown", handleMouseClickModalClose);
}

function openPreviewModal(cardData) {
  previewModalImage.src = this._link;
  previewModalImage.alt = this._name;
  previewTitle.textContent = cardData.name;
  openPopup(previewModal);
}

function renderCard(cardData) {
  const card = new Card(
    cardData,
    "#card-template",
    openPreviewModal
  ).getCardElement();
  cardListEl.prepend(card);
}

/*Validation*/

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editFormValidator = new FormValidator(config, profileForm);
const addCardValidator = new FormValidator(config, cardForm);

editFormValidator.enableValidation();
addCardValidator.enableValidation();

/*Event Handlers*/

function handleEsc(e) {
  if (e.key === "Escape") {
    const modal = document.querySelector(".modal_opened");
    closePopup(modal);
  }
}

function handleMouseClickModalClose(e) {
  if (e.target.classList.contains("modal")) {
    const modal = document.querySelector(".modal_opened");
    closePopup(modal);
  }
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link });
  e.target.reset();
  closePopup(addCardModal);
}

/*Event Listeners*/

addCardModalCloseButton.addEventListener("click", function () {
  closePopup(addCardModal);
});

profileCloseButton.addEventListener("click", function () {
  closePopup(profileEditModal);
});

previewCloseButton.addEventListener("click", function () {
  closePopup(previewModal);
});

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal);
});

addNewCardButton.addEventListener("click", () => {
  openPopup(addCardModal);
});

profileForm.addEventListener("submit", handleProfileEditSubmit);
cardForm.addEventListener("submit", handleCardFormSubmit);

/*forEach loop*/

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));
