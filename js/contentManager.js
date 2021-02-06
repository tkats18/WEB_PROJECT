import { menuInitializationFunction } from "./menu.js";
import { homePageInitializationFunction } from "./home.js";
import { aboutPageInitializationFunction } from "./aboutUs.js";
import { contactPageInitializationFunction } from "./contact.js";
import { closeModal } from "./foodModal.js";
import { initializeNavigation, activateCurrentLink } from "./navigation.js";

function addPageEventListeners() {
  document
    .querySelector("a.menu_link_class")
    .addEventListener("click", function (e) {
      window.location.hash = "menu";
    });
  document
    .querySelector("a.home_link_class")
    .addEventListener("click", function (e) {
      window.location.hash = "";
    });
  document
    .querySelector("a.about_link_class")
    .addEventListener("click", function (e) {
      window.location.hash = "about";
    });

  document
    .querySelector("a.contact_link_class")
    .addEventListener("click", function (e) {
      window.location.hash = "contact";
    });
  document
    .querySelector("button.close_modal")
    .addEventListener("click", function () {
      closeModal();
    });
}

export function setMainContent(htmlContent) {
  document.querySelector("div.content").innerHTML = htmlContent;
}

const routs = {
  "": homePageInitializationFunction,
  menu: menuInitializationFunction,
  about: aboutPageInitializationFunction,
  contact: contactPageInitializationFunction,
};

function hashHandler() {
  routs[window.location.hash.substr(1)]();
  activateCurrentLink(
    window.location.hash.substr(1) !== ""
      ? window.location.hash.substr(1)
      : "home"
  );
}

window.addEventListener("hashchange", hashHandler, false);

window.addEventListener("load", hashHandler, false);

initializeNavigation();
addPageEventListeners();
