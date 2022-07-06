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
