import imageLink from "./img/black-bean-sweet-dessert-dish.jpg";
import imageLink1 from "./img/colorful-dessert-mochi (1).jpg";
import imageLink2 from "./img/japanese-colorful-mochi-marble-background.jpg";
import Page from "./page.js";

// Load Home function

export default function loadHome() {
  // Initialise Page
  const homePage = new Page();

  // Clears the content
  const content = document.querySelector("#content");
  content.innerHTML = "";

  // Create first div
  const headerText = homePage.createDiv(
    "Heaven in your mouth. An explosion of fluffiness.",
    "",
    "text-content"
  );

  // Create image container
  const imgContainer = homePage.createDiv("", "", "img-container");

  // Create the three image element
  const imageEl = homePage.createImg(imageLink, "black bean dessert", "mochi");
  const imageEl2 = homePage.createImg(imageLink1, "Three mochi", "mochi");
  const imageEl3 = homePage.createImg(imageLink2, "the mochi", "mochi");

  // Create second div
  const textDescription = homePage.createDiv(
    "Indulge in the exquisite charm of mochi, a truly magical confectionary that will captivate your senses and leave you in awe. This delightful treat, with its soft, chewy texture and subtle sweetness, offers an unparalleled experience in every bite. Crafted from glutinous rice, mochi embodies a perfect blend of tradition and taste, offering a comforting embrace that melts in your mouth.",
    "",
    "text-description"
  );

  // Add headerText to the content
  content.appendChild(headerText);
  // Add imagecontainer to content
  content.appendChild(imgContainer)
  // Add images to image container
  imgContainer.appendChild(imageEl)
  imgContainer.appendChild(imageEl2)
  imgContainer.appendChild(imageEl3)
  // Add textDescription to content
  content.appendChild(textDescription)
}

{
  /* <div class="text-content">
        Heaven in your mouth. An explosion of fluffiness.
      </div>
      <div class="img-container">
        <img
          src="./img/black-bean-sweet-dessert-dish.jpg"
          alt="Black bean dessert"
          class="mochi"
        />
        <img
          src="./img/colorful-dessert-mochi (1).jpg"
          alt="More mochi"
          class="mochi"
        />
        <img
          src="./img/japanese-colorful-mochi-marble-background.jpg"
          alt="Mochi"
          class="mochi"
        />
      </div>
      <div class="text-description">
        Indulge in the exquisite charm of mochi, a truly magical confectionary that will captivate your senses and leave you in awe. This delightful treat, with its soft, chewy texture and subtle sweetness, offers an unparalleled experience in every bite. Crafted from glutinous rice, mochi embodies a perfect blend of tradition and taste, offering a comforting embrace that melts in your mouth.
      </div> */
}
