import { setMainContent } from "./contentManager.js";
import { hideMap } from "./aboutUs.js";

const nextImageDelay = 3000;
let currentImageCounter = 0;
var isSlideShowOn = true;
const slideshowImages = document.getElementsByClassName("slide_div");

setInterval(nextImage, nextImageDelay);
if (slideshowImages[currentImageCounter])
  slideshowImages[currentImageCounter].style.opacity = 1;

function nextImage() {
  if (isSlideShowOn) {
    slideshowImages[currentImageCounter].style.opacity = 0;

    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;

    slideshowImages[currentImageCounter].style.opacity = 1;
  }
}

function setSlideShow(isOn) {
  console.log(isSlideShowOn);
  isSlideShowOn = isOn;
}
async function getSlideData() {
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
  );
  const res = await resp.json();
  var slideContent = document.querySelector("div.slide_divs_container");
  for (var i = 0; i < 5; i += 1) {
    var newSlideDiv = document.createElement("div");
    newSlideDiv.setAttribute("class", "slide_div");
    var newSlideDivImgCont = document.createElement("div");
    newSlideDivImgCont.setAttribute("class", "slide_photo_container");
    var newSlideDivImg = document.createElement("img");
    newSlideDivImg.setAttribute("class", "slide_photo");
    newSlideDivImg.setAttribute("src", res.meals[i].strMealThumb);
    newSlideDivImgCont.appendChild(newSlideDivImg);
    var newSlideDivCard = document.createElement("div");
    newSlideDivCard.setAttribute("class", "card");
    var newSlideDivH1 = document.createElement("h1");
    newSlideDivH1.innerHTML = res.meals[i].strMeal;
    var newSlideDivDescpT = document.createElement("div");
    newSlideDivDescpT.setAttribute("class", "decription_text_div");

    var newSlideDivP = document.createElement("p");
    newSlideDivP.innerHTML = "$20.00";

    var newSlideDivDescP = document.createElement("p");

    newSlideDivDescP.innerHTML = res.meals[i].strInstructions.substring(1, 400);
    newSlideDivDescP.setAttribute("class", "decription_text");

    newSlideDivDescpT.appendChild(newSlideDivDescP);
    newSlideDivCard.appendChild(newSlideDivP);

    newSlideDivCard.appendChild(newSlideDivH1);
    newSlideDivCard.appendChild(newSlideDivDescpT);

    newSlideDiv.appendChild(newSlideDivImgCont);
    newSlideDiv.appendChild(newSlideDivCard);
    slideContent.appendChild(newSlideDiv);
  }
}

function homePageInitializationFunction() {
  const HomeHtml = `
    <div class="backgound_image">
        <img class="backgound_image_pic" src="./../data/photoes/slide_1 (1).jpg">
        <div class="slide_divs_container"></div>
        </div>
        <br style="height: 30%;"/> <br/> <br/> <br/> <br/>
        <div class="info_card">
        <div class="info_card_items">
            <div style=" position: relative;display:flex; justify-content: center; margin-bottom: 5%; align-items: center;">
                <img   src="../data/photoes/icon_1.png">
            </div>
            <div style=" position: relative;display:flex; justify-content: center; align-items: center;">
                <p style="margin-bottom: 5%;" class="price">Delivery</p>
                <br/>
            </div>
            <div style=" position: relative;display:flex; justify-content: center; align-items: center;">
                <p>kasgdkhhhkjashkdjhjdahsjkkdjsakdsabjdasbdfjkbh
                adsjfbhksjdhbfjkasbdfjkbhadsjfbhkdskajbhdjsabs
                jdhbfjhbjhbjhbjhbjhbjbh
                </p>
            </div>
        </div>
        <div class="info_card_items">
            <div style=" position: relative;display:flex; justify-content: center; margin-bottom: 5%; align-items: center;">
                <img   src="../data/photoes/icon_2.png">
            </div>
            <div style=" position: relative;display:flex; justify-content: center; align-items: center;">
                <p style="margin-bottom: 5%;" class="price">Recipe</p>
                <br/>
            </div>
            <div style=" position: relative;display:flex; justify-content: center; align-items: center;">
                <p>kasgdkhhhkjashkdjhjdahsbjdasbdfjkbh
                adsjfbhksjdhbfjkasbdfjkbhadsjfbhks
                jdhbfjhbjhbjhbjhbjhbjbh
                </p>
            </div>
        </div>
    </div>
`;
  document.querySelector("div.content").style.height = "1150px";
  document.querySelector("div.footer").style.marginTop = "0px";

  hideMap();
  setMainContent(HomeHtml);
  getSlideData();
  setSlideShow(true);
}

export { homePageInitializationFunction, setSlideShow };
