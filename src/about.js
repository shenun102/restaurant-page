import Page from "./page.js";

export default function loadAbout() {
  const aboutPage = new Page();

  // Create div elements
  const aboutContainer = aboutPage.createDiv("", "", "about-container");

  // About us
  const aboutUs = aboutPage.createDiv("", "", "about-us");
  const aboutHeading = aboutPage.createDiv("About us", "", "about-heading");
  const aboutUsContent = aboutPage.createDiv(
    `We believe that mochi is more than just a sweet; it's an experience.
            Here, we craft our mochi using time-honored techniques and the
            finest ingredients. Each batch is made fresh daily in our kitchen,
            ensuring that every bite delivers the authentic taste and chewy
            texture that mochi lovers crave.`,
    "",
    "about-us-content"
  );
  aboutUs.append(aboutHeading, aboutUsContent);

  // Opening hours
  const openingHours = aboutPage.createDiv("", "", "opening-hours");
  const aboutHeading2 = aboutPage.createDiv("Opening hours", "", "about-heading");
  const monday = aboutPage.createDiv("Monday : Closed", "", "monday day");
  const tueToThur = aboutPage.createDiv(
    "Tuesday - Thursday : 9:00am ~ 19:00pm",
    "",
    "day"
  );
  const friToSat = aboutPage.createDiv(
    "Friday - Saturday : 9:00am ~ 21:00pm",
    "",
    "day"
  );
  const sunday = aboutPage.createDiv("Sunday : 9:00am ~ 18:00pm", "", "day");
  openingHours.append(aboutHeading2, monday, tueToThur, friToSat, sunday);

  // Contact us
  const contactUs = aboutPage.createDiv("", "", "contact-us");
  const aboutHeading3 = aboutPage.createDiv("Contact us", "", "about-heading");
  const phone = aboutPage.createDiv("Contact us at +XX XXXXXXXXXX", "", "phone");
  const email = aboutPage.createDiv(
    "Email us at mochi-deluxe@heavenly.com",
    "",
    "email"
  );
  contactUs.append(aboutHeading3, phone, email);

  // Finally add the div to about container and content
  aboutContainer.append(aboutUs, openingHours, contactUs);
  content.append(aboutContainer);
}

