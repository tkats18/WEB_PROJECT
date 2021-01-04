import { hideMap } from "./aboutUs.js";
import { setMainContent } from "./contentManager.js";
import { setSlideShow } from "./home.js";
// import { hideMap } from "./aboutUs.js";

const contact = `
<div class="container">
<div class="contact_header">
    <h1>Contact Us</h1>
</div>
<br><br>
<form action="/action_page.php">
  <p for="fname">First Name</p>
  <input  type="text" id="fname" name="firstname" placeholder="Enter your name" required>

  <p for="lname">Last Name</p>
  <input type="text" id="lname" name="lastname" placeholder="Enter your last name" required>

  <p>Phone Number </p>  
  <input type="tel" placeholder="Enter your phone number" required>

  <p >Your Message</p>
  <textarea id="subject" name="subject" placeholder="Enter your Message" style="height:200px"></textarea>
  <input class="add_input" style="margin 0 auto;" type="submit" value="Submit">
</form>
</div>

`;

export function contactPageInitializationFunction() {
  setSlideShow(false);
  setMainContent(contact);
  document.querySelector("div.footer").style.marginTop = "30px";
  document.querySelector("div.content").style.height = "auto";
  //   height: 15%;
  hideMap();
}
