export default class Page {
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
}
