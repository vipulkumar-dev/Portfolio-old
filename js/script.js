new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  // navigation: true,
  navigationPosition: "left",
  scrollingSpeed: 1300,
  easingcss3: "cubic-bezier(.70,0,.30,1)",
  anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage"],
  credits: { enabled: false },

  onLeave: function (index, nextIndex, direction) {
    if (nextIndex.index == 1) {
      anime({
        targets: ".js-letter",
        translateX: ["-105%", 0],
        easing: "easeInOutCubic",
        duration: 900,
        delay: anime.stagger(50, { start: 500 }),
      });

      anime({
        targets: ".image__cover",
        translateX: [0, "110%"],
        translateZ: 0,
        easing: "easeInOutQuart",
        duration: 1200,
        delay: anime.stagger(50, { start: 200 }),
      });

      anime({
        targets: ".image",
        scale: [0.75, 1],
        translateX: ["10%", 0],
        translateZ: 0,
        easing: "easeOutCubic",
        duration: 2200,
        delay: 50,
      });
    }
  },
});
