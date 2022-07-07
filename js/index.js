gsap.registerPlugin(ScrollTrigger);

const introContainer = document.querySelector("#intro");
const introContainer2 = document.querySelector("#intro2");
const introContainer3 = document.querySelector(".background__color");

const animation__container = document.querySelector("#logo_animation");

const anim = lottie.loadAnimation({
  container: animation__container, // the dom element that will contain the animation
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "https://dev-codemax.github.io/Portfolio/bodymovin/intro.json",
});

anim.addEventListener("complete", function () {
  setTimeout(() => {
    introContainer.style.transform = "scale(17) rotate(45deg)";
    introContainer.style.opacity = "0";
    introContainer2.style.transform = "scale(17) rotate(45deg)";
    introContainer3.style.transform = "scale(17) rotate(45deg)";
    gsap.fromTo(
      ".heading__span",
      {
        yPercent: 120,
      },
      {
        yPercent: 0,
        duration: 0.7,
        delay: 1,
        stagger: 0.1,
        ease: CustomEase.create("custom", "M0,0 C0.6,0 0,1 1,1 "),
      }
    );

    gsap.fromTo(
      ".up",
      {
        yPercent: 30,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1.4,
        duration: 0.7,
        delay: 1.3,
        stagger: 0.1,
        ease: CustomEase.create("custom", "M0,0 C0.6,0 0,1 1,1 "),
      }
    );

    gsap.fromTo(
      ".up2",
      {
        yPercent: -20,
        opacity: 0,
      },
      {
        yPercent: -50,
        opacity: 1.2,
        duration: 0.7,
        delay: 1.2,
        stagger: 0.1,
        ease: CustomEase.create("custom", "M0,0 C0.6,0 0,1 1,1 "),
      }
    );
  }, 300);
});

//

lottie.loadAnimation({
  container: grid, // the dom element that will contain the animation
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "https://dev-codemax.github.io/Portfolio//bodymovin/grid.json",
});

gsap.to(".contact__content", {
  scrollTrigger: {
    trigger: ".contact__content h3",
    start: "top bottom",
    end: "bottom top",
    onEnter: () => {
      document.querySelector(".contact__content h3").classList.add("active");
    },
  },
});

//
gsap.to(".circulerText", {
  scrollTrigger: {
    trigger: ".circulerText",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
  rotate: 720,
});
