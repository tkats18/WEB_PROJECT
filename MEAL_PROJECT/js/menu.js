import { setSlideShow } from "./home.js";
import { setMainContent } from "./contentManager.js";
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
          <div class="select_container half_width">
            <select class="menu_list_main_header_search_item_input">
              <option class="menu_list_main_header_search_item_input main_select" >Search..</option>
              <option class="menu_list_main_header_search_item_input main_select" >Name</option>
              <option class="menu_list_main_header_search_item_input main_select">Area</option>
              <option class="menu_list_main_header_search_item_input main_select">Main Ingredient</option>
              <option class="menu_list_main_header_search_item_input main_select">Category</option>
            </select>
            </div>
            <div class="text_input_container half_width">
            <input type="text" class="menu_list_main_header_search_item_input"></input>
            </div>
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
        <img class="backgound_image" style="height:680px !important;" src="../data/processedPhotoes/main_page_background.jpg">
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

var searchStr = "";
function getFood(food) {
  var res = "";
  var map = {};
  if (food !== null) {
    for (var i = 0; i < food.length; i += 1) {
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
  for (
    var i = 0;
    i < document.querySelector("div.list_content").children.length;
    i += 1
  ) {
    document
      .querySelector("div.list_content")
      .children[i].addEventListener("click", (e) => {
        displayModal(map[e.target.id]);
      });
  }
}
var data;
var allData;
var start = 0;

function contains(searchData, id) {
  if (searchData === null) return false;
  for (var i = 0; i < searchData.length; i += 1) {
    if (searchData[i].idMeal === id) return true;
  }
  return false;
}

async function generateSearchMenu(link) {
  const resp = await fetch(link);
  const res = await resp.json();
  data = allData.filter((item) => contains(res.meals, item.idMeal));
  getFood(data);
}
async function generateAllMeals(link) {
  const resp = await fetch(link);
  const res = await resp.json();
  allData = res.meals;
  data = res.meals;
  getFood(res.meals);
}

var areaSelect = ``;
var categorySelect = ``;

async function fetcher(link, object) {
  const responseee = await fetch(link);
  const res = await responseee.json();
  var curOption = ``;
  var resultHtml = `<select class="menu_list_main_header_search_item_input ${object}">`;
  for (var i = 0; i < res.meals.length; i += 1) {
    curOption = `
      <option class="menu_list_main_header_search_item_input">${res.meals[i][object]}</option> 
    `;
    resultHtml += curOption;
  }
  resultHtml += `</select>`;
  return resultHtml;
}

function addSearchListener() {
  document
    .querySelector("button.search_class")
    .addEventListener("click", function () {
      var curUrl = urls[document.querySelector("select").selectedIndex];
      var curStr = document.querySelector("div.text_input_container")
        .childNodes[0].value;
      start = 0;
      if (document.querySelector("select").selectedIndex !== 0) {
        generateSearchMenu(curUrl + curStr);
      } else {
        data = allData;
        getFood(allData);
      }
    });
}
function addSearchInputListeners() {
  document.querySelector("select").addEventListener("change", function (e) {
    switch (e.target.selectedIndex) {
      case 0:
      case 1:
      case 3:
        document.querySelector(
          "div.text_input_container"
        ).innerHTML = `<input type="text" class="menu_list_main_header_search_item_input"></input>
          `;
        break;
      case 2:
        setAreaOptions();
        break;
      case 4:
        document.querySelector(
          "div.text_input_container"
        ).innerHTML = areaSelect;
        break;
    }
  });
}

function addPaginationListeners() {
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

async function initializeConstants() {
  areaSelect = await fetcher(
    "https://www.themealdb.com/api/json/v1/1/list.php?c=list",
    "strCategory"
  );
  categorySelect = await fetcher(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
    "strArea"
  );
}

export function menuInitializationFunction() {
  initializeConstants();
  setSlideShow(false);
  setMainContent(menu);
  generateAllMeals("https://www.themealdb.com/api/json/v1/1/search.php?s=");
  addSearchListener();
  addSearchInputListeners();
  addPaginationListeners();
}

export function setAreaOptions() {
  document.querySelector("div.text_input_container").innerHTML = categorySelect;
}
export function setCategoryOptions() {
  document.querySelector("div.text_input_container").innerHTML = areaSelect;
}
