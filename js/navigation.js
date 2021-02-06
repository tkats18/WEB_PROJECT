const navigationHtml = `<div class="header" >
    <div class="header_text_div">
    
    <div>
    599 99 99 99
    </div>
    <div>
    8:00-19:30
    </div>
    </div>
    <img  class="logo head_logo" src="../data/photoes/logo.jpg">
    <div class="header_text_div">
    <div>
    Kakha Bendukidze 
    Campus 0131 Tbilisi
    </div>
    </div>
    </div>
    <div class="burger_div">
    <ul>
        <li class="chosen">
        </li>
    
        </ul>
    <i class="fa fa-bars nav_icon"></i>
    </div>
    <ul class="dynamic_menu_bar" style="overflow: hidden;">
    <li class="dynamic_menu_bar_item" id="home_par">
    <a class="dynamic_menu_bar_item_link home_link_class" >HOME</a>
    
    </li>
    <li class="dynamic_menu_bar_item" id="MENU_par">
    <a class="dynamic_menu_bar_item_link menu_link_class">MENU</a>
    
    </li>
    <li class="dynamic_menu_bar_item" id="ABOUT_par">
    <a class="dynamic_menu_bar_item_link about_link_class" >ABOUT</a>
    
    </li>
    <li class="dynamic_menu_bar_item" id="CONTACT_par">
    <a class="dynamic_menu_bar_item_link contact_link_class" >CONTACT</a>
    
    </li>
    </ul>
   
    `;

function deactivateAllLinks() {
  var menuList = document.querySelector("ul.dynamic_menu_bar");
  for (var i = 0; i < menuList.childNodes.length; i++) {
    console.log(menuList.parentElement);
    menuList.childNodes[i].className = "dynamic_menu_bar_item";
  }
}

export function activateCurrentLink(name) {
  var newLinkclassName = name + "_link_class";
  deactivateAllLinks();
  document.querySelector("a." + newLinkclassName).parentElement.className =
    "dynamic_menu_bar_item active_link";
  document.querySelector("li.chosen").innerHTML = name;
}

export function initializeNavigation() {
  document.querySelector("div.top_panel").innerHTML = navigationHtml;
  document.querySelector("i.nav_icon").addEventListener("click", function () {
    if (
      document.querySelector("ul.dynamic_menu_bar").style.display === "none"
    ) {
      document.querySelector("ul.dynamic_menu_bar").style.display = "block";
    } else {
      document.querySelector("ul.dynamic_menu_bar").style.display = "none";
    }
  });
}
