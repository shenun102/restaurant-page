import Page from "./page.js";
import imgLink from "./img/strawberry-mochi.jpg";
import imgLink2 from "./img/matcha-mochi.jpg";
import imgLink3 from "./img/caramel-mochi.png";
import imgLink4 from "./img/pistachio-mochi.jpg";

export default function loadMenu() {
  // Creates a new instance of page
  const menuPage = new Page();

  // Create menu container
  const menuContainer = menuPage.createDiv("", "", "menu-container");
  const menuHeader = menuPage.createDiv("Menu", "", "menu-header");
  const itemContainer = menuPage.createDiv("", "", "item-container");

  // Add element to menu container
  menuContainer.appendChild(menuHeader);
  menuContainer.appendChild(itemContainer);
  // Add menuContainer to content
  content.appendChild(menuContainer);

  // Define the menu items
  const items = [
    {
      name: "Strawberry Mochi",
      src: imgLink,
      alt: "Strawberry Mochi",
      price: "£9.99",
    },
    {
      name: "Matcha Mochi",
      src: imgLink2,
      alt: "Matcha Mochi",
      price: "£9.99",
    },
    {
      name: "Caramel Mochi",
      src: imgLink3,
      alt: "Caramel Mochi",
      price: "£9.99",
    },
    {
      name: "Pistachio Mochi",
      src: imgLink4,
      alt: "Pistachio Mochi",
      price: "£9.99",
    },
  ];

  // Loop through array and create structure
  items.forEach((item) => {
    const menuItem = menuPage.createDiv("", "", "menu-item");
    const itemHeader = menuPage.createDiv(item.name, "", "item-header");
    const img = menuPage.createImg(item.src, item.alt, "item-img");
    const itemPrice = menuPage.createDiv(item.price, "", "item-price");

    // Append all elements to menuItem and then append menuItem to itemContainer
    menuItem.appendChild(itemHeader);
    menuItem.appendChild(img);
    menuItem.appendChild(itemPrice);

    itemContainer.appendChild(menuItem);
  });
}

{
  /* <div class="menu-container">
        <div class="menu-header">Menu</div>
        <div class="item-container">
          <div class="menu-item">
            <div class="item-header">Strawberry Mochi</div>
            <img src="./img/strawberry-mochi.jpg" alt="" class="item-img" />
            <div class="item-price">£ 9.99</div>
          </div>
          <div class="menu-item">
            <div class="item-header">Matcha Mochi</div>
            <img src="./img/matcha-mochi.jpg" alt="" class="item-img" />
            <div class="item-price">£ 9.99</div>
          </div>
          <div class="menu-item">
            <div class="item-header">Cramel Mochi</div>
            <img src="./img/caramel-mochi.png" alt="" class="item-img" />
            <div class="item-price">£ 9.99</div>
          </div>
          <div class="menu-item">
            <div class="item-header">Pistachio Mochi</div>
            <img src="./img/pistachio-mochi.jpg" alt="" class="item-img" />
            <div class="item-price">£ 9.99</div>
          </div>
        </div>
      </div> */
}
