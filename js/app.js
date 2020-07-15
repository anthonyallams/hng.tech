//Smooth Scrolling
$("#nav a, .btn").on("click", (e) => {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      1200
    );
  }
});

//Collapse hamburger on anchor/li click
let menu = document.querySelector(".menu-wrap");
let closeIcon = document.querySelector(".toggler");

menu.addEventListener("click", handleMenuClick);

function handleMenuClick(event) {
  if (event.target instanceof HTMLAnchorElement) {
    closeIcon.checked = false;
  }
}

//initiliaze AOS
AOS.init({
  offset: 100,
  disable: function () {
    var maxWidth = 650;
    return window.innerWidth < maxWidth;
  },
});

//Intersection Observer for change on scroll
// const nav = document.querySelector(".nav");
// const main = document.querySelector(".main");

// const mainOptions = {
//   rootMargin: "-200px 0px 0px 0px",
// };

// const mainObserver = new IntersectionObserver((entries, mainObserver) => {
//   entries.forEach((entry) => {
//     console.log(entry.target);
//     if (!entry.isIntersecting) {
//       nav.classList.add("nav-scrolled");
//     } else {
//       nav.classList.remove("nav-scrolled");
//     }
//   });
// }, mainOptions);

// mainObserver.observe(main);

const header = document.querySelector("nav");
const sectionOne = document.querySelector(".subtitle");

const sectionOneOptions = {
  rootMargin: "-100px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
