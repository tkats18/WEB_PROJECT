// import { setAreaOptions, setCategoryOptions } from "./menu.js";

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
function setAreaOptions() {
  document.querySelector("div.text_input_container").innerHTML = categorySelect;
}
function setCategoryOptions() {
  document.querySelector("div.text_input_container").innerHTML = areaSelect;
}

function displayModal(data) {
  var modal_content = document.querySelector("div.modal_content");
  var new_modal_content = "";
  console.log(data);
  new_modal_content +=
    '<div class="modal_header"><div class="modal_header_text"><h1>' +
    data.strMeal +
    "</h1>" +
    "<div class='modal_header_text_item'> <h3>Food Area</h3>" +
    "<p class='modal_area_parag'>" +
    data.strArea +
    "</p></div> <div class='modal_header_text_item'> <h3>Food Category</h3>" +
    " <p class='modal_category_parag'>" +
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
      new_modal_content += "<label>" + data["strIngredient" + i] + "</label>";
    }
  }
  new_modal_content += "</div>";
  new_modal_content += "</div>";

  new_modal_content += "</div>";
  new_modal_content += "</div>";
  console.log(data);
  modal_content.innerHTML = new_modal_content;
  document.querySelector("div.modal_div").style.display = "block";
  addEventListeners("p.modal_area_parag", data.strArea, setAreaOptions, 2);
  addEventListeners(
    "p.modal_category_parag",
    data.strCategory,
    setCategoryOptions,
    4
  );
}

function closeModal() {
  var modal = document.querySelector("div.modal_div");
  modal.style.display = "none";
}
