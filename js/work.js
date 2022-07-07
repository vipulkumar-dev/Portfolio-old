new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  navigationPosition: "left",
  fixedElements: ".background",
  scrollingSpeed: 1300,
  easingcss3: "cubic-bezier(.70,0,.30,1)",
  anchors: ["first", "second", "third", "fourth", "fifth", "sixth"],
  credits: { enabled: false },

  onLeave: function (index, nextIndex, direction) {
    var classPrefix = nextIndex.index + 1;
    anime({
      targets: `.s${classPrefix} .js-letter`,
      translateX: ["-105%", 0],
      easing: "easeInOutCubic",
      duration: 900,
      delay: anime.stagger(85, { start: 600 }),
    });

    anime({
      targets: `.s${classPrefix} .image__cover`,
      translateX: [0, "110%"],
      translateZ: 0,
      easing: "easeInOutQuart",
      duration: 1200,
      delay: anime.stagger(100, { start: 200 }),
    });

    anime({
      targets: `.s${classPrefix} .image`,
      scale: [0.75, 1],
      translateX: ["10%", 0],
      translateZ: 0,
      easing: "easeOutCubic",
      duration: 1750,
      delay: 300,
    });

    anime({
      targets: `.s${classPrefix} .page-num p`,
      translateY: ["100%", 0],
      translateZ: 0,
      easing: "easeInOutCubic",
      delay: 800,
    });
  },
});

// anime({
//   targets: ".s1__title",
//   translateX: ["-105%", "105%"],
//   easing: "easeInOutCubic",
//   duration: 900,
//   delay: 5000,
// });
