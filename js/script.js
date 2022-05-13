new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  afterLoad: function (origin, destination, direction, trigger) {
    var origin = this;

    //using index
    if (origin.index == 0) {
      alert("Section 1 afterLoad");
    }
    if (origin.index == 1) {
      alert("Section 2 afterLoad");
    }

    if (origin.index == 2) {
      alert("Section 3 afterLoad");
    }

    if (origin.index == 3) {
      alert("Section 4 afterLoad");
    }
  },
  onLeave: function (origin, destination, direction, trigger) {
    var leavingSection = this;

    //after leaving section 2

    if (leavingSection.index == 0) {
      alert("Section 1 onLeave");
    }
    if (leavingSection.index == 1) {
      alert("Section 2 onLeave");
    }

    if (leavingSection.index == 2) {
      alert("Section 3 onLeave");
    }

    if (leavingSection.index == 3) {
      alert("Section 4 onLeave");
    }
  },
  beforeLeave: function (origin, destination, direction, trigger) {
    // prevents scroll until we scroll 4 times
    alert("beforeLeave");
  },
});
