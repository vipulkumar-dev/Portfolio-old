const introContainer = document.querySelector("#intro");
const animation__container = document.querySelector("#logo_animation");

const anim = lottie.loadAnimation({
  container: animation__container, // the dom element that will contain the animation
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "../bodymovin/data.json", // the path to the animation json
});

anim.addEventListener("complete", function () {
  setTimeout(() => {
    introContainer.style.transform = "translate(0%, -100%)";
    gsap.fromTo(
      ".text",
      { y: 500 },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        ease: "power4.out",
      }
    );
  }, 300);
});
