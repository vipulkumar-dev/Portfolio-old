gsap.registerPlugin(ScrollTrigger);

const introContainer = document.querySelector("#intro");
const logo_animation = document.querySelector("#logo_animation");

const animation__container = document.querySelector("#logo_animation");

const anim = lottie.loadAnimation({
  container: animation__container,
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "https://vipulkumar-dev.github.io/Portfolio-old/bodymovin/intro.json",
});

anim.addEventListener("complete", function () {
  setTimeout(() => {
    introContainer.style.transform = "scale(17) rotate(45deg)";
    logo_animation.style.opacity = "0";
    gsap.fromTo(
      ".heading__span",
      {
        yPercent: 120,
      },
      {
        yPercent: 0,
        duration: 0.7,
        delay: 0.6,
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
        opacity: 1,
        duration: 0.7,
        delay: 0.8,
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
        opacity: 1,
        duration: 0.7,
        delay: 0.9,
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
  path: "https://codemax.info/bodymovin/grid.json",
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
  rotate: 360,
});
