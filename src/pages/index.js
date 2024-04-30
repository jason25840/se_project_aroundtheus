import "./index.css";

//Import Classes

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards, selectors } from "../../utils/constants.js";
import Section from "../components/Section.js";

//Instantiate Classes

const CardPreviewPopup = new PopupWithImage(selectors.previewModal);
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const cardElement = new Card(
        cardData,
        selectors.cardTemplate,
        openPreviewModal((cardData) => {
          CardPreviewPopup.open(cardData);
        })
      );
      cardSection.addItem(cardElement.getCardElement());
    },
  },
  selectors.cardSection
);

//const userInformation = new UserInfo({
//  name: "#profile-title-input",
//  description: "#profile-description-input",
//});

//const profileModal = new PopupWithForm("#profile-edit-modal", (data) => {
//  userInformation.setUserInfo({
//    name: data.title,
//    description: data.description,
//  });
//  console.log("something");
//});
//profileModal.setEventListeners();
//  selectors.ProfileEditButton.addEventListener("click", () => {
// editProfileFormValidator.resetValidation();
//  const userData = userInformation.getUserInfo();
//  ProfileTitleInput.value = userData.name;
// ProfileDescriptionInput.value = userData.description.trim();
//
// profileModal.open();
//});

//const profileFormPopup = new PopupWithForm(addCardModal, () =>
//  console.log("popup open")
//);

//profileFormPopup.open();

//profileFormPopup.close();

//const newCardPopup = new PopupWithForm("#add-card-modal", () => {});
//newCardPopup.open();

//Initialize all my instantiations

cardSection.renderItems(initialCards);
CardPreviewPopup.setEventListeners();
// All the rest
