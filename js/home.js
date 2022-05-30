const introContainer = document.querySelector("#intro");
const animation__container = document.querySelector("#logo_animation");

const anim = lottie.loadAnimation({
  container: animation__container, // the dom element that will contain the animation
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "https://xcode319.github.io/Portfolio/bodymovin/data.json", // the path to the animation json
});

const up = document.querySelectorAll(".up");

anim.addEventListener("complete", function () {
  setTimeout(() => {
    introContainer.style.transform = "translate(0%, -100%)";

    // gsap.fromTo(
    //   ".up",
    //   { y: 500() },
    //   {
    //     duration: 1.5,
    //     y: 0,
    //     delay: 0.3,
    //     ease: CustomEase.create("custom", "M0,0,C0.702,0,0,1,1,1"),
    //   }
    // );

    // gsap.from(".up", {
    //   y: 500,
    //   duration: 1.5,
    //   delay: 0.3,
    //   ease: CustomEase.create("custom", "M0,0,C0.702,0,0,1,1,1"),
    // });

    anime({
      targets: `.up`,
      translateY: ["400px", 0],
      easing: "cubicBezier(.7,0,0,1)",
      duration: 1500,
      delay: 250,
    });

    // gsap.fromTo(
    //   ".home__hero",
    //   { scale: 1 },
    //   {
    //     duration: 1.5,
    //     scale: 0.9,
    //     delay: 1,
    //     ease: CustomEase.create("custom", "M0,0 C0.8,0 0,1 1,1 "),
    //   }
    // );

    anime({
      targets: `.menuup`,
      translateY: ["100px", 0],
      opacity: [0, 1],
      easing: "cubicBezier(.8,0,0,1)",
      duration: 1500,
      delay: 1500,
    });

    anime({
      targets: `.home__hero`,
      scale: [1, 0.9],
      easing: "cubicBezier(.8,0,0,1)",
      duration: 1500,
      delay: 1500,
      complete: function () {
        home__hero.style.transition = "all 0.8s cubic-bezier(0.66, 0, 0.18, 1)";
      },
    });
  }, 300);
});

gsap.to(".circulerText", {
  scrollTrigger: {
    trigger: ".circulerText",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
  rotate: 720,
});

const home__hero = document.querySelector(".home__hero");

gsap.to(".home__hero", {
  scrollTrigger: {
    trigger: ".s2",
    start: "top bottom",
    end: "bottom top",
    pin: ".home__hero",
    pinSpacing: false,
    // markers: true,
    onUpdate: (self) => {
      if (self.progress >= 0.09) {
        home__hero.classList.add("active");
      } else {
        home__hero.classList.remove("active");
      }
    },
  },
});

gsap.from(".proj1 .line h3", {
  scrollTrigger: {
    trigger: ".proj1 .line ",
    start: "top center",
    end: "bottom 70%",

    onEnter: () => {
      document.querySelector(".proj1 .imagewrappper").classList.add("active");
      // document.querySelector(".image img").style.transform = "scale(1)";
    },
  },
  y: 300,
  skewY: 10,
  stagger: 0.2,
  duration: 0.9,
  ease: CustomEase.create("custom", "M0,0 C0.322,0 0,1 1,1 "),
});

gsap.from(".proj2 .line h3", {
  scrollTrigger: {
    trigger: ".proj2 .line ",
    start: "top 70%",
    end: "bottom top",

    onEnter: () => {
      document.querySelector(".proj2 .imagewrappper").classList.add("active");
      // document.querySelector(".image img").style.transform = "scale(1)";
    },
  },
  y: 300,
  skewY: 10,
  stagger: 0.2,
  duration: 0.9,
  ease: CustomEase.create("custom", "M0,0 C0.322,0 0,1 1,1 "),
});
