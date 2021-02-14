import { setAreaOptions, setCategoryOptions } from "./menu.js";

function addEventListeners(documentObj, item, seterFunction, index) {
  document.querySelector(documentObj).addEventListener("click", function () {
    closeModal();
    document.querySelector(
      "select.menu_list_main_header_search_item_input"
    ).selectedIndex = index;
    seterFunction();
    document.querySelector(
      "div.text_input_container"
    ).childNodes[0].value = item;
    document.querySelector("button.search_class").click();
  });
}

export function displayModal(data) {
  var modal_content = document.querySelector("div.modal_content");
  document.querySelector("label.modal_heading").innerHTML = "Food Information";
  document.querySelector("button.back_button").style.display = "none";

  var new_modal_content = "";
  new_modal_content +=
    '<div class="modal_header"><div class="modal_header_text"><h1>' +
    data.strMeal +
    "</h1>" +
    "<div class='modal_header_text_item'> <h3>Food Area</h3>" +
    "<p class='modal_area_parag ingredient_link'>" +
    data.strArea +
    "</p></div> <div class='modal_header_text_item'> <h3>Food Category</h3>" +
    " <p class='modal_category_parag ingredient_link'>" +
    data.strCategory +
    "</p></div>" +
    '</div> <div class="modal_header_img"> <img src="' +
    data.strMealThumb +
    '" width="40%" height="40%" ></div></div>';

  new_modal_content += '<div class="modal_footer">';
  new_modal_content += '<div style=" display: flex; flex-direction: column;">';
  new_modal_content += '<div class="' + "modal_instruction_div" + '">';
  new_modal_content += '<label class="instuction_label" >Instructions</label>';
  new_modal_content +=
    '<div style="display: block;" class="' + "modal_ingredient_div" + '">';

  new_modal_content += "<label>" + data["strInstructions"] + "</label>";
  new_modal_content += "</div>";
  new_modal_content += '<label class="instuction_label" >Ingredients</label>';
  new_modal_content += '<div class="' + "modal_ingredient_div" + '">';
  for (var i = 1; i <= 20; i += 1) {
    if (
      data["strIngredient" + i] !== null &&
      data["strIngredient" + i] !== ""
    ) {
      new_modal_content +=
        '<label class="ingredient_link" id="ingredient_' +
        i +
        '">' +
        data["strIngredient" + i] +
        "</label>";
    }
  }
  new_modal_content += "</div>";
  new_modal_content += "</div>";

  new_modal_content += "</div>";
  new_modal_content += "</div>";
  modal_content.innerHTML = new_modal_content;

  document.querySelector("div.modal_div").style.display = "block";
  addEventListeners("p.modal_area_parag", data.strArea, setAreaOptions, 2);
  addEventListeners(
    "p.modal_category_parag",
    data.strCategory,
    setCategoryOptions,
    4
  );
  for (let i = 1; i <= 20; i++) {
    if (
      data["strIngredient" + i] !== null &&
      data["strIngredient" + i] !== ""
    ) {
      document
        .getElementById("ingredient_" + i)
        .addEventListener("click", function () {
          displayIngredientModal(data, data["strIngredient" + i]);
        });
    }
  }
}

export function closeModal() {
  var modal = document.querySelector("div.modal_div");
  modal.style.display = "none";
}

async function displayIngredientModal(foodData, ingredientName) {
  var modal_content = document.querySelector("div.modal_content");
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=Salmon"
  );
  const res = await resp.json();
  let ingredientInfo = "";
  for (let i = 0; i < res.meals.length; i++) {
    if (res.meals[i].strIngredient === ingredientName) {
      ingredientInfo = res.meals[i].strDescription;
      break;
    }
  }
  if (
    ingredientInfo === "" ||
    ingredientInfo === null ||
    ingredientInfo === undefined
  ) {
    ingredientInfo = "No Information";
  }
  var new_modal_content = "";
  new_modal_content +=
    "<div class='modal_header_text ingredient_modal_head'> <h1>";
  new_modal_content += ingredientName;
  new_modal_content += " </h1></div>";
  // <div class='modal_header'> <div class='modal_header_text'> <h1>"
  new_modal_content +=
    '<div class="ingrediet_modal_main"><div class="modal_header_img">';
  new_modal_content +=
    '<img src="https://www.themealdb.com/images/ingredients/' +
    ingredientName +
    '.png"></div>';
  new_modal_content +=
    '<div class="modal_footer  ingredient_data"> <div class="modal_instruction_div ingredient_modal_str"><label class="about_ingr_label">';
  new_modal_content += "About Ingredient";
  new_modal_content +=
    "</label></div> <div class='modal_ingredient_div ingredient_description'>" +
    ingredientInfo +
    "</div></div></div>";

  modal_content.innerHTML = new_modal_content;
  if (ingredientInfo === "No Information") {
    document.querySelector("div.ingredient_description").style.fontSize =
      "18px";
    document.querySelector("div.ingredient_description").style.display = "flex";
    document.querySelector("div.ingredient_description").style.justifyContent =
      "center";
    document.querySelector("div.ingredient_description").style.marginLeft = "0";
    document.querySelector("div.ingredient_description").style.width = "100%";
    // about_ingr_label
    document.querySelector("label.about_ingr_label").style.fontSize = "25px";
  }
  document.querySelector("label.modal_heading").innerHTML =
    "Ingredient Information";
  var prevButton = document.querySelector("button.back_button");

  prevButton.style.display = "block";
  prevButton.addEventListener("click", function () {
    displayModal(foodData);
  });
}
