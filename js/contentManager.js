import { menuInitializationFunction } from "./menu.js";
import { homePageInitializationFunction } from "./home.js";
import { aboutPageInitializationFunction } from "./aboutUs.js";
import { contactPageInitializationFunction } from "./contact.js";
import { closeModal } from "./foodModal.js";

export function setMainContent(htmlContent) {
  document.querySelector("div.content").innerHTML = htmlContent;
}

function initialize() {
  homePageInitializationFunction();
}

function addPageEventListeners() {
  document
    .querySelector("a.menu_link_class")
    .addEventListener("click", function () {
      menuInitializationFunction();
    });
  document
    .querySelector("a.home_link_class")
    .addEventListener("click", function () {
      homePageInitializationFunction();
    });
  document
    .querySelector("a.about_link_class")
    .addEventListener("click", function () {
      aboutPageInitializationFunction();
    });

  document
    .querySelector("a.contact_link_class")
    .addEventListener("click", function () {
      contactPageInitializationFunction();
    });
  document
    .querySelector("button.close_modal")
    .addEventListener("click", function () {
      closeModal();
    });
}

addPageEventListeners();
initialize();
