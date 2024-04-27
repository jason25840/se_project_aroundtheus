import "./index.css";

//Import Classes

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
//import PopupWithImage from "../components/PopupWithImage.js";
import { initialCards, selectors } from "../components/constants.js";
import Section from "../components/Section.js";

//Instantiate Classes

const CardSection = new Section(
  {
    items: [initialCards],
    renderer: (item) => {
      const cardElement = new Card(item, selectors.cardTemplate);
      CardSection.addItems(cardElement.getCardElement());
    },
  },
  selectors.cardSection
);

//const CardPreviewPopup = new PopupWithImage("#modal__preview-card", () => {
//  CardPreviewPopup.open();
//});

//const newCardPopup = new popUpWithForm("#add-card-modal", () => {});
//newCardPopup.open();

//Initialize all my instantiations

CardSection.renderItems();

// All the rest
