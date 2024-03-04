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

const closeButtons = document.querySelectorAll("#close-button");

/*profile elements*/

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileCloseButton = profileEditModal.querySelector("#close-button");

/*addCard elements*/

const addCardModal = document.querySelector("#add-card-modal");
const addCardModalCloseButton = addCardModal.querySelector("#close-button");
const addNewCardButton = document.querySelector("#image__add-button");

/*profile elements*/

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

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
const previewCloseButton = previewModal.querySelector("#close-button");

/*Functions*/

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__trash-button");

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  cardImageEl.addEventListener("click", () => {
    openPreviewModal(cardData);
  });

  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;

  return cardElement;
}

function openPreviewModal(cardData) {
  previewModalImage.src = cardData.link;
  previewModalImage.alt = cardData.name;
  previewTitle.textContent = cardData.name;
  previewModal.classList.add("modal_opened");
}

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
}

/*Event Handlers*/

function handleCloseButtonClick(event) {
  const clickedButton = event.target;
  const modalToClose = clickedButton.closest(".modal");
  if (modalToClose) {
    modalToClose.classList.remove("modal_opened");
  }
}

function handleOpenButtonClick(event) {
  const clickedOpenButton = event.target;
  const modalToOpen = clickedOpenButton.closest("#modal__open");
  if (modalToOpen) {
    modalToOpen.classList.add("modal_opened");
  }
  if (clickedOpenButton === profileEditButton) {
    profileTitleInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
    profileEditModal.classList.add("modal_opened");
  }
  if (clickedOpenButton === addNewCardButton) {
    addCardModal.classList.add("modal_opened");
  }
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  e.target.reset();
  handleCloseButtonClick(profileEditModal);
}

function handleCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link });
  e.target.reset();
  handleCloseButtonClick(addCardModal);
}

/*Event Listeners*/

//profileEditButton.addEventListener("click", () => {
//  profileTitleInput.value = profileTitle.textContent;
//  profileDescriptionInput.value = profileDescription.textContent;
//  profileEditModal.classList.add("modal_opened");
//});

//addNewCardButton.addEventListener("click", () => {
//  addCardModal.classList.add("modal_opened");
//});

document.addEventListener("click", handleCloseButtonClick);

document.body.addEventListener("click", handleOpenButtonClick);

profileForm.addEventListener("submit", handleProfileEditSubmit);
cardForm.addEventListener("submit", handleCardFormSubmit);

/*forEach loop*/

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));

