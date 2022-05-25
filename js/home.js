const introContainer = document.querySelector("#intro");
const animation__container = document.querySelector("#logo_animation");

const anim = lottie.loadAnimation({
  container: animation__container, // the dom element that will contain the animation
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "../bodymovin/data.json", // the path to the animation json
});

const up = document.querySelectorAll(".up");

anim.addEventListener("complete", function () {
  setTimeout(() => {
    introContainer.style.transform = "translate(0%, -120%)";

    up.forEach((element) => {
      element.classList.toggle("active");
    });
    // gsap.fromTo(
    //   ".up",
    //   { y: 500 },
    //   {
    //     duration: 1.5,
    //     y: 0,
    //     delay: 0.4,
    //     ease: CustomEase.create("custom", "M0,0,C0.702,0,0,1,1,1"),
    //   }
    // );
  }, 300);
});

const menuButton = document.querySelector(".menu");
const roundBG = document.querySelector(".roundBG");
const ul = document.querySelector(".nav__container .nav__bar .menu ul");

let menuIstrue = true;

menuButton.addEventListener("click", () => {
  console.log("!");
  menuButton.classList.toggle("active");
  roundBG.classList.toggle("active");
  ul.classList.toggle("active");

  if (menuIstrue == true) {
    gsap.fromTo(
      ".nav__link",
      { x: 300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.04,
        delay: 0.4,
      }
    );

    menuIstrue = false;
  } else {
    gsap.fromTo(
      ".nav__link",
      {
        x: 0,
        opacity: 1,
      },
      {
        x: 300,
        duration: 0,
        opacity: 0,
        stagger: 0.07,
        delay: 0.4,
      }
    );

    menuIstrue = true;
  }
});
