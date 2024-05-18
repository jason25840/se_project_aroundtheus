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

export const profileEditButton = document.querySelector("#profile-edit-button");
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const profileCloseButton =
  profileEditModal.querySelector(".modal__close");
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

/*addCard elements*/

export const addCardModal = document.querySelector("#add-card-modal");
export const addCardModalCloseButton =
  addCardModal.querySelector(".modal__close");
export const addNewCardButton = document.querySelector("#image__add-button");

/*form elements*/

export const profileForm = document.forms["profile-form"];
export const cardForm = document.forms["card-form"];
export const deleteCardForm = document.querySelector("#modal__delete-form");
export const newName = document.querySelector("#profile-title-input");
export const newJob = document.querySelector("#profile-description-input");
export const formData = { title: newName, description: newJob };
export const avatarUpdateForm = document.forms["avatar__form"];


/*card elements*/

export const cardListEl = document.querySelector(".cards__gallery");
export const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
export const cardTitleInput = document.querySelector("#image-title-input");
export const cardUrlInput = document.querySelector("#image-url-input");
export const cardDeleteButton = deleteCardForm.querySelector(".modal-delete-button");

/*preview elements*/

export const previewModal = document.querySelector("#modal__preview-card");
export const previewModalImage = document.querySelector(
  ".modal__preview-image"
);
export const previewTitle = previewModal.querySelector("#preview-title");
export const previewCloseButton = previewModal.querySelector(".modal__close");

export const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

export const selectors = {
  cardSection: ".cards__gallery",
  cardTemplate: "#card-template",
  popupForm: "modal__form",
  previewModal: "#modal__preview-card",
  previewImage: "modal__preview-image",
  addCardModal: "#add-card-modal",
};
