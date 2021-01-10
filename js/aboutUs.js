// import { setMainContent } from "./contentManager.js";
// import { setSlideShow } from "./home.js";

const aboutUs = `
    <div class="info_card">
    <div class="info_card_item_container">

    <div class="info_card_items">
            <div style=" position: relative;display:flex; justify-content: center; margin-bottom: 5%; align-items: center;">
                <img   src="../data/photoes/food.png" width="94" height="100">
            </div>
            <div style=" position: relative;display:flex; justify-content: center; align-items: center;">
                <p style="margin-bottom: 5%; font-weight: bold; color:black;" class="price">Who Are We?</p>
                <br/>
            </div>
            <div style=" position: relative;display:flex; justify-content: center; align-items: center;">
                <p>
                    We are a fresh and exciting new bar concept that features
                    live music and craft beer. We are new to the scene and 
                    we are looking to get as many new customers as possible.
                    We are a pub not a bar, we want to be a place where 
                    everyone can enjoy a great evening. We are a one stop 
                    shop when it comes to everything you may need to know 
                    for a great night out.
                </p>
            </div>
        </div>
        <div class="info_card_items">
            <div style=" position: relative;display:flex; justify-content: center; margin-bottom: 5%; align-items: center;">
                <img   src="../data/photoes/2102350.png" width="94" height="100">
            </div>
            <div style=" position: relative;display:flex; justify-content: center; align-items: center;">
                <p style="margin-bottom: 5%; font-weight: bold; color:black;" class="price">Friendly Environment</p>
                <br/>
            </div>
            <div style=" position: relative;display:flex; justify-content: center; align-items: center;">
                <p>
                This is a bar where we believe that you are our friend. 
                We work as a team to make your experience a memorable one.
                 So, if you are tired of the same old establishment, then
                why not come and enjoy a new time and a new place inside? 
                The brand is the same, the design is the same, the atmosphere 
                is the same. We are your bar. Come and enjoy a night out.
                </p>
            </div>
        </div>
    </div>
    
    
    <div class="info_card_item_container">

    <div class="info_card_items">
            <div style=" position: relative;display:flex; justify-content: center; margin-bottom: 5%; align-items: center;">
                <img   src="../data/photoes/129226.png" width="94" height="100">
            </div>
            <div style=" position: relative;display:flex; justify-content: center; align-items: center;">
                <p style="margin-bottom: 5%; font-weight: bold; color:black;" class="price">Who Are We?</p>
                <br/>
            </div>
            <div style=" position: relative;display:flex; justify-content: center; align-items: center;">
                <p>
                Our staff and our bartenders are passionate about creating 
                the best drinks in town. We want you to come experience a great
                bar and party atmosphere. We are a friendly and welcoming place.
                Come in and enjoy your time. We have a great space and great people.
                Our bar is also a great place for gathering all your friends on 
                special days. 
                </p>
            </div>
        </div>
        <div class="info_card_items">
            <div style=" position: relative;display:flex; justify-content: center; margin-bottom: 5%; align-items: center;">
                <img   src="../data/photoes/1732202.png" width="94" height="100">
            </div>
            <div style=" position: relative;display:flex; justify-content: center; align-items: center;">
                <p style="margin-bottom: 5%; font-weight: bold; color:black;" class="price">Friendly Environment</p>
                <br/>
            </div>
            <div style=" position: relative;display:flex; justify-content: center; align-items: center;">
                <p>
                We also have a large selection of wines and spirits and we cater  for large
                groups as well." We give you the opportunity to meet new people, meet
                some interesting people and make new friends. Dax, our friendly and 
                knowledgeable bartender has been in the hospitality industry for over 
                20 years. His experience includes the ownership of a few small bars and 
                </p>
            </div>
        </div>
    </div>
    


    </div>

`;
function hideMap() {
  document.querySelector("div.location_container").style.display = "none";
}

function exposeMap() {
  document.querySelector("div.location_container").style.display = "flex";
}

function aboutPageInitializationFunction() {
  setSlideShow(false);
  setMainContent(aboutUs);
  document.querySelector("div.footer").style.marginTop = "30px";
  document.querySelector("div.content").style.height = "";
  exposeMap();
  document.getElementById("map").style.height = "30%";
}
