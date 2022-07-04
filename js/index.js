lottie.loadAnimation({
  container: grid, // the dom element that will contain the animation
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "../bodymovin/grid.json",
});

lottie.loadAnimation({
  container: image, // the dom element that will contain the animation
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "../bodymovin/techlines.json",
});

// about me animation
//
//
//

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
