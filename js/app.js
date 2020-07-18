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

//validation function and event listener
const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (name.value !== "" && email.value !== "") {
    // swal('Good Job!','You will receive an email shortly',)
    Swal.fire({
      showclass: {
        popup: "swal-show",
        backdrop: "swal-backdrop-show",
        icon: "swal-icon-show",
      },
      position: "center",
      title: "Congratulations!",
      icon: "success",
      html: "<h2>You have been shortlisted for HNGI8</h2>",
      showConfirmButton: false,
      // timer: 2500,
    });
    document.querySelector("#email").value = "";
    document.querySelector("#name").value = "";
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Sorry",
      text: "Please check your name and email address!",
      footer: "<a href>Then try again</a>",
      timer: 1500,
    });
    document.querySelector("#email").value = "";
    document.querySelector("#name").value = "";
  }
});

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
