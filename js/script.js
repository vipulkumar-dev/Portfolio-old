new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  navigationPosition: "left",
  fixedElements: ".background",
  scrollingSpeed: 1300,
  easingcss3: "cubic-bezier(.60,0,.30,1)",
  anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage"],
  credits: { enabled: false },

  onLeave: function (index, nextIndex, direction) {
    if (nextIndex.index == 1) {
      anime({
        targets: ".s2 .js-letter",
        translateX: ["-105%", 0],
        easing: "easeInOutCubic",
        duration: 900,
        delay: anime.stagger(80, { start: 500 }),
      });

      anime({
        targets: ".s2 .image__cover",
        translateX: [0, "110%"],
        translateZ: 0,
        easing: "easeInOutQuart",
        duration: 1400,
        delay: anime.stagger(100, { start: 200 }),
      });

      anime({
        targets: ".s2 .image",
        scale: [0.75, 1],
        translateX: ["10%", 0],
        translateZ: 0,
        easing: "easeOutCubic",
        duration: 2000,
        delay: 50,
      });

      anime({
        targets: ".s2 .page-num p",
        translateY: ["100%", 0],
        translateZ: 0,
        easing: "easeInOutCubic",
        delay: 1000,
      });
    }

    if (nextIndex.index == 2) {
      anime({
        targets: ".s3 .js-letter",
        translateX: ["-105%", 0],
        easing: "easeInOutCubic",
        duration: 900,
        delay: anime.stagger(80, { start: 500 }),
      });

      anime({
        targets: ".s3 .image__cover",
        translateX: [0, "110%"],
        translateZ: 0,
        easing: "easeInOutQuart",
        duration: 1400,
        delay: anime.stagger(100, { start: 200 }),
      });

      anime({
        targets: ".s3 .image",
        scale: [0.75, 1],
        translateX: ["10%", 0],
        translateZ: 0,
        easing: "easeOutCubic",
        duration: 2000,
        delay: 50,
      });

      anime({
        targets: ".s3 .page-num p",
        translateY: ["100%", 0],
        translateZ: 0,
        easing: "easeInOutCubic",
        delay: 1000,
      });
    }
  },
});

// anime({
//   targets: ".s1__title",
//   translateX: ["-105%", "105%"],
//   easing: "easeInOutCubic",
//   duration: 900,
//   delay: 5000,
// });
