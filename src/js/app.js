import { CountUp } from "countup.js";
import Swiper from "swiper/bundle";
import AOS from "aos";
// import 'aos/dist/aos.css';

(function () {
  window.location.hash = "#";

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("header--scrolled");
  }
})();

addEventListener("hashchange", () => {
  let hash = window.location.hash;

  if (hash === "#menu") {
    document.querySelector(".menu").classList.add("menu--active");
  } else {
    document.querySelector(".menu").classList.remove("menu--active");
    const currentY = window.scrollY;
    window.scrollTo(0, currentY);
  }
});

addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("header--scrolled");
  } else {
    document.querySelector(".header").classList.remove("header--scrolled");
  }
}, {passive: true});

const swiperProjects = new Swiper(".ourProjects__images--tablet", {
  slidesPerView: 1,
  width: 394,
  spaceBetween: 30,
});

const swiper = new Swiper(".photoreports__images--tablet", {
  slidesPerView: 1,
  width: 394,
  spaceBetween: 30,
});

const swiperNews = new Swiper(".news__list--tablet", {
  slidesPerView: 1,
  width: 280,
  spaceBetween: 30,
});

let result1 = new CountUp("result1", 4000, {
  useGrouping: false,
});
let result2 = new CountUp("result2", 2300, {
  useGrouping: false,
  suffix: "т",
});
let result3 = new CountUp("result3", 432, {
  useGrouping: false,
});
let result4 = new CountUp("result4", 411, {
  useGrouping: false,
});
let result5 = new CountUp("result5", 1300, {
  useGrouping: false,
});
let result6 = new CountUp("result6", 4560, {
  useGrouping: false,
});
let result7 = new CountUp("result7", 60, {
  useGrouping: false,
  suffix: "т",
});
let result8 = new CountUp("result8", 2000, {
  useGrouping: false,
});

const results = [result1, result2, result3, result4, result5, result6, result7, result8];

const elementsForCopy = document.querySelectorAll(".howToHelp__props--text");
elementsForCopy.forEach((element) => {
  element.addEventListener("click", () => {
    navigator.clipboard
      .writeText(element.innerText)
      .catch((err) => {
        console.error("Error in copying", err);
      });
  });
})

const target = document.querySelector('.results__wrapper--stats');

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
}
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      results.forEach((item) => {
        item.start();
      })
    }
  });
}

let observer = new IntersectionObserver(callback, options);
observer.observe(target);

AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});
