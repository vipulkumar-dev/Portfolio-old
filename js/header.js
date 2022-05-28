const menuButton = document.querySelector(".menu");
const roundBG = document.querySelector(".roundBG");
const ul = document.querySelector(".gyu");

let menuIstrue = true;

menuButton.addEventListener("click", () => {
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
