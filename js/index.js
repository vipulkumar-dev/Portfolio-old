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
let tlaheading__anim1 = gsap.timeline({
  delay: 0.4,
  scrollTrigger: {
    trigger: ".aheading__break",
    onEnter: () => {
      document.querySelector(".aheading__break").classList.add("active");
    },
  },
});

tlaheading__anim1
  .fromTo(
    ".aheading__anim1",
    {
      y: 93.0983,
    },
    {
      y: -48,
      duration: 0.55,
      ease: CustomEase.create("custom", "M0,0 C0,0 0.24,1 1,1 "),
    }
  )
  .to(".aheading__anim1", {
    y: 0,
    duration: 0.57,
    ease: CustomEase.create("custom", "M0,0 C0.71,0 0.27,1 1,1 "),
  })
  .from(
    ".aheading__anim1",
    {
      opacity: 0,
      duration: 0.15,
      ease: CustomEase.create("custom", "M0,0 C0.71,0 0.27,1 1,1 "),
    },
    "-=1.12"
  );

//
//
//
let tlaheading__anim2 = gsap.timeline({
  delay: 0.5,
  scrollTrigger: {
    trigger: ".aheading__break",
  },
});

tlaheading__anim2
  .fromTo(
    ".aheading__anim2",
    {
      y: 93.0983,
    },
    {
      y: -48,
      duration: 0.55,
      ease: CustomEase.create("custom", "M0,0 C0,0 0.24,1 1,1 "),
    }
  )
  .to(".aheading__anim2", {
    y: 0,
    ease: CustomEase.create("custom", "M0,0 C0.71,0 0.27,1 1,1 "),
  })
  .from(
    ".aheading__anim2",
    {
      opacity: 0,
      duration: 0.15,
      ease: CustomEase.create("custom", "M0,0 C0.71,0 0.27,1 1,1 "),
    },
    "-=1.12"
  );

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
