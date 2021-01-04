import { setSlideShow } from "./home.js";
import { setMainContent } from "./contentManager.js";
import { hideMap } from "./aboutUs.js";
import { displayModal } from "./foodModal.js";

const menu = `
  <div class="menu_list_main_header">
    <div class="menu_list_main_header_search">
        <div class="menu_list_main_header_search_item">
          <input id="search_id" placeholder="search by name" class="menu_list_main_header_search_item_input" type="text"></input>
          <button  class="add_input">search</button>
        </div>
        <div class="menu_list_main_header_search_ingredient">
          <div class="ingredient_div">
              <button class="add_ingredients hid">add ingredients</button> 
              <button class="add_ingredients hid">search by ingredients</button> 
          </div>
          <div id="container" class="input_container" name="container">
              <div class="two_input_wrap">
                <input type="text" class="menu_list_main_header_search_item_input"></input>
                <input type="text" class="menu_list_main_header_search_item_input"></input>
              </div>
          </div>
        </div>
    </div>
  </div>
  <div class="backgound_image">
    <div class="list_image">
        <img class="backgound_image" src="../data/photoes/slide_1 (1).jpg">
    </div>
    <div class="list_content">
    </div>
    </img>
  </div>

`;
function addFields() {
  var parent = document.getElementById("container");

  console.log(parent.childNodes.length);
  if (parent.childNodes.length < 7) {
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    console.log(parent);
    input.setAttribute("type", "text");
    input.setAttribute("class", "menu_list_main_header_search_item_input");

    var input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("class", "menu_list_main_header_search_item_input");

    console.log(parent);
    var parentOfBoth = document.createElement("div");
    parentOfBoth.setAttribute("class", "two_input_wrap");

    parentOfBoth.appendChild(input);
    parentOfBoth.appendChild(input1);
    parent.appendChild(parentOfBoth);
  }
}

var searchStr = "";
function getFood(food) {
  var res = "";
  var map = {};
  for (var i = 0; i < food.length; i += 1) {
    console.log(i);
    if (i < 10) {
      if (
        searchStr === "" ||
        (searchStr !== "" && food[i].name.includes(searchStr))
      ) {
        res += `
          <div id="${food[i].idMeal}" class="list_card">
            <img id="${food[i].idMeal}" class="list_img" width="100%" height="50%" src="${food[i].strMealThumb}">
            <div id="${food[i].idMeal}" class="list_container">
                <h4 id="${food[i].idMeal}" ><b>${food[i].strMeal}</b></h4>
                <p id="${food[i].idMeal}">$22.00</p>
            </div>
          </div>
        `;
        map[food[i].idMeal] = food[i];
      }
    }
  }
  document.querySelector("div.list_content").innerHTML = res;
  console.log(document.querySelector("div.list_content").childNodes);
  for (
    var i = 0;
    i < document.querySelector("div.list_content").children.length;
    i += 1
  ) {
    console.log(document.querySelector("div.list_content").children[i]);
    // document.querySelector("div.list_content").children[i].onClick = () => {};
    document
      .querySelector("div.list_content")
      .children[i].addEventListener("click", (e) => {
        displayModal(map[e.target.id]);
      });
  }
}
async function generateMenu(link) {
  const resp = await fetch(link);
  const res = await resp.json();
  console.log(res.meals);
  getFood(res.meals);
}
export function menuInitializationFunction() {
  setSlideShow(false);
  setMainContent(menu);
  hideMap();
  document.querySelector("div.content").style.height = "1150px";

  document
    .querySelector("button.add_ingredients")
    .addEventListener("click", function () {
      addFields();
    });
  generateMenu("https://www.themealdb.com/api/json/v1/1/search.php?f=b");

  document
    .querySelector("button.add_input")
    .addEventListener("click", function () {
      searchStr = document.getElementById("search_id").value;
    });
}
