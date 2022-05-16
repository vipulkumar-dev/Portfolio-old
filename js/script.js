new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  scrollingSpeed: 700,

  onLeave: function (index, nextIndex, direction) {
    if (nextIndex.index == 1) {
      console.log("vipul");
      anime({
        targets: ".js-letter",
        translateX: ["-105%", 0],
        easing: "easeInOutCubic",
        duration: 800,
        delay: anime.stagger(50, { start: 500 }),
      });
    }
  },
});
