import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const titleElement = document.querySelector(".logo");
const txtElement = document.querySelector("h2");
const firstCardElement = document.querySelector(".screen-1");
const firstElement = document.querySelector(".title");
const secondCardElement = document.querySelector(".screen-2");
const secondElement = document.querySelector(".timer");
const startButton = document.querySelector(".start-button");

const tl2 = gsap.timeline();

function animateTl1() {
  const tl1 = gsap.timeline();
  tl1.fromTo(
    titleElement,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 2,
      delay: 0.5,
    }
  );
  tl1.fromTo(
    txtElement,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 2,
    },
    "-=0.1"
  );
  tl1.fromTo(
    firstElement,
    { opacity: 1 },
    {
      opacity: 0,
      duration: 1.5,
    },
    "-=1"
  );
  tl1.fromTo(
    firstCardElement,
    { opacity: 1 },
    {
      opacity: 0,
      duration: 1.5,
    },
    "-=0.5"
  );
  return tl1;
}

function animateTl2() {
  tl2.to(secondElement, { opacity: 0, duration: 1.5 });
  tl2.to(
    secondCardElement,
    {
      opacity: 0,
      duration: 1.5,
    },
    "-=0.5"
  );
  return tl2;
}

startButton.addEventListener("click", function () {
  const tl2 = animateTl2();
  tl2.play();
});

const tl1 = animateTl1();
