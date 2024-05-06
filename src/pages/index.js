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
  profileForm,
  cardForm,
  addCardModalCloseButton,
  profileCloseButton,
  previewCloseButton,
  profileEditButton,
  addNewCardButton,
} from "../../utils/constants.js";

/*Functions*/

function openPreviewModal(cardData) {
  previewModalImage.src = this._link;
  previewModalImage.alt = this._name;
  previewTitle.textContent = cardData.name;
  openPopup(previewModal);
}

/* Instantiations*/

//const profileFormValidator = new FormValidator(options, profileFormElement);
//profileFormValidator.enableValidation();

//const addCardFormValidator = new FormValidator(options, addCardFormElement);
//addCardFormValidator.enableValidation();

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
  //cardListEl.prepend(card);
}

const userInfo = new UserInfo({
  nameSelector: "#profile-title",
  jobSelector: "#profile-description",
});
//const { description, title } = userInfo.getUserInfo();
//formData.description.value = description;
//formData.title.value = title;

const profileEditForm = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);
profileEditForm.setEventListeners();

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

function handleProfileEditSubmit(inputItems) {
  userInfo.setUserInfo({
    name: inputItems["#profile-title"],
    job: inputItems["#profile-description"],
  });
  console.log(inputItems);

  profileEditForm.close();
  return userInfo;
  //profileEditForm.reset();
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
  //FormValidator["#profile-form"]
  profileEditForm.open();
  userInfo.getUserInfo();
  //profileTitleInput.value = profileTitle.textContent;
  //profileDescriptionInput.value = profileDescription.textContent;
  //openPopup(profileEditModal);
});

addNewCardButton.addEventListener("click", () => {
  openPopup(addCardModal);
});

//profileForm.addEventListener("submit", handleProfileEditSubmit);
cardForm.addEventListener("submit", handleCardFormSubmit);

/*forEach loop*/

//initialCards.forEach((cardData) => renderCard(cardData));

//Initialize all my instantiations

cardSection.renderItems(initialCards);
//CardPreviewPopup.setEventListeners();
// All the rest
