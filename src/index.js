// index.js
// Import css
import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
// import loadAbout from "./about.js";

const content = document.querySelector("#content");

// Load the home page
// loadHome();
// loadMenu();

// Event listener for buttons
const navBtn = document.querySelectorAll(".nav-btn");
navBtn.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    content.innerHTML = "";
    console.log(e.target);
    if (e.target.classList.contains("home")) {
      console.log("Home");
      loadHome();
    }
    if (e.target.classList.contains("menu")) {
      console.log("menu");
      loadMenu();
    }
    if (e.target.classList.contains("about")) {
      console.log("about");
      // loadAbout();
    } else return;
  })
);
