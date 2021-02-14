import { setMainContent } from "./contentManager.js";
import { setSlideShow } from "./home.js";

const providers = `


    <div class="provider_content">
        <div class="provider_heading">
            <h4>OUR PROVIDERS</h4>
        </div>
        <div class="two_item_container">
            <div class="provider_item">
                <img src='../data/processedPhotoes/provider_1.png'>
                <p> Hong Kong Phooey, number one super guy. Hong Kong Phooey, quicker than the 
                human eye. He’s got style, a groovy style, and a car that just won’t stop. When 
                the going gets tough, he’s really rough, with a Hong Kong Phooey chop (Hi-Ya!).</p>
            </div>
            <div class="provider_item">
                <img src='../data/processedPhotoes/provider_2.jpg'>
                <p> Hey there where ya goin’, not exactly knowin’, who says you have to call 
                just one place home. He’s goin’ everywhere, B.J. McKay and his best friend Bear.
                He just keeps on movin’, ladies keep improvin’, every day is better than the 
                last.</p>
            </div>
        </div>
        <div class="two_item_container">
            <div class="provider_item">
                <img src='../data/processedPhotoes/provider_3.jpg'>
                <p>There’s a voice that keeps on calling me. Down the road, that’s where I’ll 
                always be. Every stop I make, I make a new friend. Can’t stay for long, just 
                turn around and I’m gone again. Maybe tomorrow, I’ll want to settle down, Until
                tomorrow, I’ll just keep moving on.</p>
            </div>
            <div class="provider_item">
                <img src='../data/processedPhotoes/provider_4.jpg'>
                <p>New dreams and better scenes, and best of all I don’t pay property tax. 
                Rollin’ down to Dallas, who’s providin’ my palace, off to New Orleans or who 
                knows where. Places new and ladies, too, I’m B.J. McKay and this is my best 
                friend Bear. </p>
            </div>
        </div>

    </div>
`;

export function providersPageInitializationFunction() {
  setSlideShow(false);
  setMainContent(providers);
  document.querySelector("div.footer").style.marginTop = "30px";
  document.querySelector("div.content").style.height = "auto";
}
