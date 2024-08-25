import imageLink from "./img/black-bean-sweet-dessert-dish.jpg";
import imageLink1 from "./img/colorful-dessert-mochi (1).jpg";
import imageLink2 from "./img/japanese-colorful-mochi-marble-background.jpg";

class HomePage {
  constructor() {
    console.log("Initiated");
  }

  createImg(src, alt, classNames = "", id = "") {
    // Create image element
    const img = document.createElement("img");
    // Set the source and alt attributes
    img.src = src;
    img.alt = alt;
    // Set class or id names if provided
    if (id) img.id = id;
    if (classNames) img.className = classNames;
    return img;
  }

  createDiv(text, id, classNames) {
    const div = document.createElement("div");
    if (id) div.id = id;
    if (classNames) div.className = classNames;
    if (text) div.textContent = text;
    return div;
  }

  // Appends an element to the container
  addElement(parent, child) {
    const parentSelector = document.querySelector(parent);
    parentSelector.appendChild(child);
  }
}

// Load Home function

export default function loadHome() {
  // Initialise HomePage
  const homePage = new HomePage();

  // Clears the content
  const content = document.querySelector("#content");
  content.innerHTML = "";

  // Create first div
  const div = homePage.createDiv(
    "Heaven in your mouth. An explosion of fluffiness.",
    "",
    "text-content"
  );

  // Create image container
  const div2 = homePage.createDiv("", "", "img-container");

  // Create the three image element
  const imageEl = homePage.createImg(imageLink, "black bean dessert", "mochi");
  const imageEl2 = homePage.createImg(imageLink1, "Three mochi", "mochi");
  const imageEl3 = homePage.createImg(imageLink2, "the mochi", "mochi");

  // Create second div
  const div3 = homePage.createDiv(
    "Indulge in the exquisite charm of mochi, a truly magical confectionary that will captivate your senses and leave you in awe. This delightful treat, with its soft, chewy texture and subtle sweetness, offers an unparalleled experience in every bite. Crafted from glutinous rice, mochi embodies a perfect blend of tradition and taste, offering a comforting embrace that melts in your mouth.",
    "",
    "text-description"
  );

  // Add div ton the container
  homePage.addElement("#content", div);
  // Add image element to the container
  homePage.addElement("#content", div2);
  homePage.addElement(".img-container", imageEl);
  homePage.addElement(".img-container", imageEl2);
  homePage.addElement(".img-container", imageEl3);
  homePage.addElement("#content", div3);
}
