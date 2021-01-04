// import { exposeMap } from "./aboutUs";

export function displayModal(data) {
  var modal_content = document.querySelector("div.modal_content");
  var new_modal_content = "";
  new_modal_content +=
    '<div class="modal_img"><h1>' +
    data.strMeal +
    '</h1> <img src="' +
    data.strMealThumb +
    '" width="40%" height="40%" ></div>';
  new_modal_content += '<div class="modal_footer">';
  new_modal_content += '<div style="width:50%;">';

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

  new_modal_content += '<div class="' + "modal_instruction_div" + '">';
  new_modal_content += '<label class="instuction_label" >Instructions</label>';
  new_modal_content += "<label>" + data["strInstructions"] + "</label>";
  new_modal_content += "</div>";
  new_modal_content += "</div>";
  console.log(data);
  modal_content.innerHTML = new_modal_content;
  document.querySelector("div.modal_div").style.display = "block";
}

export function closeModal() {
  var modal = document.querySelector("div.modal_div");
  modal.style.display = "none";
}
