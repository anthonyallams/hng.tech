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

// scroll body to 0px on click
$("#back-to-top").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    400
  );
  return false;
});

//Preloader;
$(window).on("load", function () {
  $(".status").slideUp(1500);
});

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

///////////////////////////////////
///////////////////////////////////
//COUNTDOWN TIMER FUNCTION
///////////////////////////////////
//////////////////////////////////
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const year = document.querySelector(".year");
const countdown = document.querySelector(".countdown");

//Declare the time variables
const currentYear = new Date().getUTCFullYear();
const eventMonth = `January`.slice(0, 3);
const eventDay = `26`;
let eventDate = new Date(`${eventMonth} ${eventDay} ${currentYear} 00:00:00`);
let diff;

//Get event date based on current date
const getEventDate = () => {
  const time = new Date();
  if (eventDate > time) {
    //Set background year
    year.innerHTML = `${eventMonth} ${eventDay}, ${currentYear}`;
  } else {
    eventDate = new Date(
      `${eventMonth} ${eventDay} ${currentYear + 1} 00:00:00`
    );
    //Set background year
    year.innerHTML = `${eventMonth} ${eventDay}, ${currentYear + 1}`;
  }
};

//Pad hours, mins and secs with 0 if value is less than 10
const padTime = (time) => time.toString().padStart(2, "00");

//Update the DOM Count down
const updateDOMCountDown = () => {
  const time = new Date();
  const diff = eventDate - time;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  //Add the time values to DOM
  days.innerHTML = d;
  hours.innerHTML = padTime(h);
  minutes.innerHTML = padTime(m);
  seconds.innerHTML = padTime(s);
};
getEventDate();
//Run the time every second
setInterval(updateDOMCountDown, 1000);

// Counter JS
const counters = document.querySelectorAll(".counter-num");
const speed = 500;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    // console.log(target);
    const count = +counter.innerText;

    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});
