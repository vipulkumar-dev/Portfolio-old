lottie.loadAnimation({
  container: grid, // the dom element that will contain the animation
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "../bodymovin/grid.json",
});

// about me animation
//
//
//
const home__hero = document.querySelector(".home__hero");

gsap.to(".home__hero", {
  scrollTrigger: {
    trigger: ".s2",
    start: "top bottom",
    end: "bottom top",
    // pin: ".home__hero",
    pinSpacing: false,
    markers: true,
    onUpdate: (self) => {
      if (self.progress >= 0.09) {
        home__hero.classList.add("active");
      } else {
        home__hero.classList.remove("active");
      }
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
