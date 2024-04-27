export const initialCards = [
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

export const selectors = {
  cardSection: ".cards__gallery",
  cardTemplate: "#card-template",
};
