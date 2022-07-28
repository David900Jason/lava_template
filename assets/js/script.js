const navbar = document.querySelector("header");
const navbarLinks = [...document.querySelectorAll("header nav .links > li > a")];
const sections = [...document.querySelectorAll("section")];

let sectionsIds = sections.map((section) => {
  return section.id;
});

navbarLinks.forEach((link) => {
  link.dataset.page = `${link.innerText.toLowerCase()}`;
});

let navbarLinksIds = navbarLinks.map((link) => {
  return link.dataset.page;
});

window.onscroll = function () {
  if (this.scrollY >= 700) {
    navbar.style.cssText = `
      position: fixed;
      background-color: #fff;
      box-shadow: 0px 0px 10px rgba(0,0,0,0.15) !important;
    `;
  } else {
    navbar.style.cssText = `
      position: absolute;
      background-color: transparent;
      box-shadow: none;
    `;
  }
}