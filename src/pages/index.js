//Imports

import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
//import Popup from "../components/Popup.js";
import PopupWithForm from "../components/popupWithForm.js";
//import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
//import { initialCards, config, selectors } from "../../utils/constants.js";
import Section from "../components/Section.js";
import {
  initialCards,
  selectors,
  config,
  formData,
} from "../../utils/constants.js";

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

/* Instantiations*/

const cardSection = new Section(
  { items: initialCards, renderer: renderCard },
  ".cards__gallery"
);

function renderCard(cardData) {
  const card = new Card(
    cardData,
    "#card-template",
    openPreviewModal
  ).getCardElement();
  cardSection.addItem(card);
  //cardListEl.prepend(card);
}

const userInfo = new UserInfo(
  "#profile-title-input",
  "#profile-description-input"
);

const profileEditForm = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);

/*Validation*/

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

//function handleMouseClickModalClose(e) {
//  if (e.target.classList.contains("modal")) {
//    const modal = document.querySelector(".modal_opened");
//   ;
// }
//}

function handleProfileEditSubmit() {
  userInfo.setUserInfo(formData);
  profileEditForm.close();
  //e.preventDefault();
  //profileTitle.textContent = profileTitleInput.value;
  //profileDescription.textContent = profileDescriptionInput.value;
  //closePopup(profileEditModal);
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

profileEditForm.setEventListeners();

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
  profileEditForm.open();
  userInfo.getUserInfo(formData);
  //profileTitleInput.value = profileTitle.textContent;
  //profileDescriptionInput.value = profileDescription.textContent;
  //openPopup(profileEditModal);
});

addNewCardButton.addEventListener("click", () => {
  openPopup(addCardModal);
});

profileForm.addEventListener("submit", handleProfileEditSubmit);
cardForm.addEventListener("submit", handleCardFormSubmit);

/*forEach loop*/

//initialCards.forEach((cardData) => renderCard(cardData));

//Initialize all my instantiations

cardSection.renderItems(initialCards);
//CardPreviewPopup.setEventListeners();
// All the rest
