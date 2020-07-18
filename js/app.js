//Smooth Scrolling
$("#nav a, .btn").on("click", (e) => {
  if (this.hash !== "") {
    // e.preventDefault();

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

//Intersection observer for sticky nav
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

// Preloader
// $(window).on("load", function () {
//   $(".loader").slideUp(1000);
// });

// const loader = document.querySelector(".loader");
// const body = document.querySelector(".container");

// const init = () => {
//   setTimeout(() => {
//     loader.style.opacity = 0;
//     loader.style.display = "none";

//     body.style.display = "block";
//     setTimeout(() => {
//       body.style.opacity = 1;
//     }, 50);
//   }, 4000);
// };

// init();
