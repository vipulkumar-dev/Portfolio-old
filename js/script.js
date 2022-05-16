new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  scrollingSpeed: 1000,
  anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage"],

  onLeave: function (index, nextIndex, direction) {
    if (nextIndex.index == 1) {
      anime({
        targets: ".js-letter",
        translateX: ["-105%", 0],
        easing: "easeInOutCubic",
        duration: 900,
        delay: anime.stagger(50, { start: 300 }),
      });

      anime({
        targets: ".image__cover",
        translateX: [0, "110%"],
        translateZ: 0,
        easing: "easeInOutQuart",
        function(el, i) {
          return 1200 - 200 * i;
        },
        delay: anime.stagger(50),
      });

      anime({
        targets: ".image",
        scale: [0.75, 1],
        translateX: ["10%", 0],
        translateZ: 0,
        easing: "easeOutCubic",
        duration: 1500,
        delay: 50,
      });
    }
  },
});
