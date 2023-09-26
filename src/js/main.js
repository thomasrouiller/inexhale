import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const titleElement = document.querySelector(".logo");
const txtElement = document.querySelector("h2");

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
