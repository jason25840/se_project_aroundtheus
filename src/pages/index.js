//Imports

import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/popupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import {
  initialCards,
  selectors,
  config,
  profileForm,
  cardForm,
  cardTitleInput,
  cardUrlInput,
  profileEditButton,
  addNewCardButton,
} from "../../utils/constants.js";

/*Functions*/

function openPreviewModal(data) {
  previewImagePopup.open(data);
}

/* Instantiations*/

const cardSection = new Section(
  { items: initialCards, renderer: renderCard },
  ".cards__gallery"
);

function renderCard(cardData) {
  const card = new Card(
    cardData,
    selectors.cardTemplate,
    //"#card-template",
    openPreviewModal
  ).getCardElement();
  cardSection.addItem(card);
}

const userInfo = new UserInfo(".profile__title", ".profile__description");
const profileEditForm = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);
const cardEditForm = new PopupWithForm("#add-card-modal", handleCardFormSubmit);
const previewImagePopup = new PopupWithImage("#modal__preview-card");

/*Validation*/

const editFormValidator = new FormValidator(config, profileForm);
const addCardValidator = new FormValidator(config, cardForm);

/*Event Handlers*/

function handleProfileEditSubmit(inputItems) {
  userInfo.setUserInfo(inputItems);
  profileEditForm.close();
}

function handleCardFormSubmit() {
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link });
  cardEditForm.close();
  //cardEditForm.reset();
}

/*Event Listeners*/

profileEditButton.addEventListener("click", () => {
  profileEditForm.open();
  userInfo.getUserInfo();
});

addNewCardButton.addEventListener("click", () => {
  cardEditForm.open();
});

profileEditForm.setEventListeners();
cardEditForm.setEventListeners();
previewImagePopup.setEventListeners();

//Initialization

cardSection.renderItems(initialCards);
editFormValidator.enableValidation();
addCardValidator.enableValidation();

