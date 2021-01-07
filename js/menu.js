import { setSlideShow } from "./home.js";
import { setMainContent } from "./contentManager.js";
import { hideMap } from "./aboutUs.js";
import { displayModal } from "./foodModal.js";

const urls = [
  "no url",
  "https://www.themealdb.com/api/json/v1/1/search.php?s=",
  "https://www.themealdb.com/api/json/v1/1/filter.php?a=",
  "https://www.themealdb.com/api/json/v1/1/filter.php?i=",
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=",
];

const menu = `
    <div class="menu_list_main_header_search">
        <div class="menu_list_main_header_search_item">
          <div class="two_input_wrap">
            <select class="menu_list_main_header_search_item_input">
              <option class="menu_list_main_header_search_item_input" >Name</option>
              <option class="menu_list_main_header_search_item_input" >Name</option>
              <option class="menu_list_main_header_search_item_input">Area</option>
              <option class="menu_list_main_header_search_item_input">Main Ingredient</option>
              <option class="menu_list_main_header_search_item_input">Category</option>
            </select>
            <input type="text" class="menu_list_main_header_search_item_input"></input>
          </div>
        </div>
        <div class="menu_list_main_header_search_ingredient">
        
        <div id="container" class="input_container" name="container">
        <button  class="add_input search_class">search</button>
          </div>
        </div>
    </div>
  <div class="backgound_image_menu">
    <div class="list_image">
        <img class="backgound_image" style="height:680px !important;" src="../data/photoes/slide_1 (1).jpg">
    </div>
    <div class="list_content">
    </div>
    <div class="pagination">
      <h3 class="next_button">next</h3>
      <h3 class="previous_button">previous</h3>
    </div>
    </img>
  </div>

`;
// function addFields() {
//   var parent = document.getElementById("container");

//   console.log(parent.childNodes.length);
//   if (parent.childNodes.length < 7) {
//     var input = document.createElement("input");
//     input.setAttribute("type", "text");
//     console.log(parent);
//     input.setAttribute("type", "text");
//     input.setAttribute("class", "menu_list_main_header_search_item_input");

//     var input1 = document.createElement("input");
//     input1.setAttribute("type", "text");
//     input1.setAttribute("class", "menu_list_main_header_search_item_input");

//     console.log(parent);
//     var parentOfBoth = document.createElement("div");
//     parentOfBoth.setAttribute("class", "two_input_wrap");

//     parentOfBoth.appendChild(input);
//     parentOfBoth.appendChild(input1);
//     parent.appendChild(parentOfBoth);
//   }
// }

var searchStr = "";
function getFood(food) {
  var res = "";
  var map = {};
  if (food !== null) {
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
                <h4 id="${food[i].idMeal}" ><b id="${food[i].idMeal}">${food[i].strMeal}</b></h4>
                <p id="${food[i].idMeal}">$22.00</p>
              </div>
            </div>
            `;
          map[food[i].idMeal] = food[i];
        }
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

    document
      .querySelector("div.list_content")
      .children[i].addEventListener("click", (e) => {
        displayModal(map[e.target.id]);
      });
  }
}
var data;
var start = 0;
async function generateMenu(link) {
  console.log(link);
  const resp = await fetch(link);
  const res = await resp.json();
  data = res.meals;
  getFood(res.meals);
}

export function menuInitializationFunction() {
  setSlideShow(false);
  setMainContent(menu);
  hideMap();
  // document.querySelector("div.content").style.height = "1250px";

  // document
  //   .querySelector("button.add_ingredients")
  //   .addEventListener("click", function () {
  //     addFields();
  //   });
  generateMenu("https://www.themealdb.com/api/json/v1/1/search.php?s=");

  document
    .querySelector("button.search_class")
    .addEventListener("click", function () {
      console.log("movedii");
      console.log(document.querySelector("select").selectedIndex);
      console.log(
        document.querySelector("input.menu_list_main_header_search_item_input")
          .value
      );
      // console.log();
      var curUrl = urls[document.querySelector("select").selectedIndex];
      var curStr = document.querySelector(
        "input.menu_list_main_header_search_item_input"
      ).value;
      start = 0;
      if (document.querySelector("select").selectedIndex !== 0) {
        generateMenu(curUrl + curStr);
      }
    });
  document
    .querySelector("h3.next_button")
    .addEventListener("click", function () {
      if (start + 10 < data.length) {
        start += 10;
        getFood(data.slice(start));
      }
    });
  document
    .querySelector("h3.previous_button")
    .addEventListener("click", function () {
      if (start >= 10) {
        start -= 10;
        getFood(data.slice(start));
      }
    });
}
