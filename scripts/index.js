const initialCards = [
  {
    name: "Maui, Hawaii",
    link: "https://images.unsplash.com/photo-1583912385566-058bb89a4cff?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Zion National Park, Utah",
    link: "https://images.unsplash.com/photo-1524274165673-750e79bf7e2e?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Acadia National Park, Maine",
    link: "https://images.unsplash.com/photo-1686271846078-9f9818bd9793?q=80&w=2265&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Great Smoky Mountains, Tennessee",
    link: "https://images.unsplash.com/photo-1634662626305-44f7f243eb09?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Seattle, Washington",
    link: "https://images.unsplash.com/photo-1693748459960-0bf103ee06d0?q=80&w=2237&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Key West, Florida",
    link: "https://images.unsplash.com/photo-1601136939973-5b5dc52a16cb?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

/* ----------------------------------------------------------------------------------------------------- */
/*                                                  Elements                                                          */
/* ----------------------------------------------------------------------------------------------------- */

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditCloseButton =
  profileEditModal.querySelector("#edit-close-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListElement = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/* -----------------------------------------------------------------------------------------------------  */
/*                                                  Functions                                                          */
/* ----------------------------------------------------------------------------------------------------- */

function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  //access the card title and image and store them in variables
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");
  //set the path to the image to the link field of the object
  //set the image alt text to the name field of the object
  //set the card title to the name field of the object, too
  cardTitleElement.textContent = cardData.name;
  //return the ready HTML element with the filled-in data
  return cardElement;
}
/* ----------------------------------------------------------------------------------------------------- */
/*                                                  Event Handlers                                                          */
/* ----------------------------------------------------------------------------------------------------- */
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
}

/* -----------------------------------------------------------------------------------------------------  */
/*                                                  Event Listeners                                                 */
/* ----------------------------------------------------------------------------------------------------- */
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

profileEditCloseButton.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListElement.append(cardElement);
});
