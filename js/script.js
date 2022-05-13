new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,

  onLeave: function (index, nextIndex, direction) {
    if (nextIndex.index == 2) {
      console.log("vipul");
      anime({
        targets: ".js-letter",
        translateY: "180%",
        translateX: "180%",
        duration: 800,
        delay: 700,
        easing: "easeInOutCubic",
      });
    }
  },
});
