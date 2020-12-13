const slideshowImages = document.getElementsByClassName("slide_div");

const nextImageDelay = 3000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

var isSlideShowOn = true;

function nextImage() {
  if (isSlideShowOn) {
    slideshowImages[currentImageCounter].style.opacity = 0;

    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;

    slideshowImages[currentImageCounter].style.opacity = 1;
  }
}

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

    parent.appendChild(input);
    parent.appendChild(input1);
  }
}

const menu = `
<div class="backgound_image">
<div class="list_image">
  <img class="backgound_image" src="../data/photoes/slide_1 (1).jpg">
</div>
      <div class="menu_list_main_header">
        
      <div class="menu_list_main_header_search">
          
        <div class="menu_list_main_header_search_item">

            <input id="search_id" placeholder="search by name" class="menu_list_main_header_search_item_input" type="text"></input>
            <button  class="add_input">search</button>
            </div>
          
          <div class="menu_list_main_header_search_item">
              <button class="add_ingredients hid">add ingredients</button> 
            <div id="container" name="container"></div>
          </div>

        </div>
        </div>
        <div class="list_content">

          
        </div>
        </img>
  </div>
`;
var searchStr = "";
function getFood() {
  var res = "";
  for (var i = 0; i < food.length; i += 1) {
    console.log(i);
    if (i < 10) {
      if (
        searchStr === "" ||
        (searchStr !== "" && food[i].name.includes(searchStr))
      ) {
        res += `
        <div class="list_card">
        <img class="list_img" width="100%" height="50%" src="${food[i].picture_url}">
        <div class="list_container">
        <h4><b>${food[i].name}</b></h4>
        <p>${food[i].price}</p>
        </div>
        </div>
        `;
      }
    }
  }
  document.querySelector("div.list_content").innerHTML = res;
}

function addEventListeners() {
  document
    .querySelector("a.menu_link_class")
    .addEventListener("click", function menuFunction() {
      isSlideShowOn = false;
      document.querySelector("div.content").innerHTML = menu;
      document
        .querySelector("button.add_ingredients")
        .addEventListener("click", function () {
          addFields();
        });
      getFood();
      document
        .querySelector("button.add_input")
        .addEventListener("click", function () {
          searchStr = document.getElementById("search_id").value;
          getFood();
        });
      // getFood();
    });
}

addEventListeners();

const food = [
  {
    name: "pizza",
    price: "$19.90",
    description: "this is a big ass pazza",
    calories: "200",
    picture_url: "./../data/photoes/370744.jpg",
  },

  {
    name: "pizza",
    price: "$19.90",
    description: "this is a big ass pazza",
    calories: "200",
    picture_url: "./../data/photoes/370744.jpg",
  },
  {
    name: "pizza",
    price: "$19.90",
    description: "this is a big ass pazza",
    calories: "200",
    picture_url: "./../data/photoes/370744.jpg",
  },
  {
    name: "pazza",
    price: "$19.90",
    description: "this is a big ass pazza",
    calories: "200",
    picture_url: "./../data/photoes/370744.jpg",
  },
  {
    name: "pazza",
    price: "$19.90",
    description: "this is a big ass pazza",
    calories: "200",
    picture_url: "./../data/photoes/370744.jpg",
  },
  {
    name: "pazza",
    price: "$19.90",
    description: "this is a big ass pazza",
    calories: "200",
    picture_url: "./../data/photoes/370744.jpg",
  },
  {
    name: "pazza",
    price: "$19.90",
    description: "this is a big ass pazza",
    calories: "200",
    picture_url: "./../data/photoes/370744.jpg",
  },
  {
    name: "pizza",
    price: "$19.90",
    description: "this is a big ass pazza",
    calories: "200",
    picture_url: "./../data/photoes/370744.jpg",
  },
  {
    name: "pazza",
    price: "$19.90",
    description: "this is a big ass pazza",
    calories: "200",
    picture_url: "./../data/photoes/370744.jpg",
  },
  {
    name: "pazza",
    price: "$19.90",
    description: "this is a big ass pazza",
    calories: "200",
    picture_url: "./../data/photoes/370744.jpg",
  },
  {
    name: "pazza",
    price: "$19.90",
    description: "this is a big ass pazza",
    calories: "200",
    picture_url: "./../data/photoes/370744.jpg",
  },
];
