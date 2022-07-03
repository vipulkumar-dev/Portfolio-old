const s1 = document.querySelector(".s1");
const s1Height = s1.clientHeight;

const s3 = document.querySelector(".s3");

// s3.style.top = "s1Height";

gsap.from(".s3", {
  scrollTrigger: {
    trigger: ".s2",
    start: "bottom bottom",
    end: "top top",
    markers: true,
    onUpdate: (self) => {
      if (self.progress >= 0.001) {
        s3.classList.remove("unactive");
      } else {
        s3.classList.add("unactive");
      }
    },
    onEnter: () => {
      if (s3.classList.contains("other")) {
        //
        document.querySelector(".sheading__break").classList.add("active");

        let tlsheading__anim1 = gsap.timeline({
          delay: 0.5,
        });

        tlsheading__anim1
          .fromTo(
            ".sheading__anim1",
            {
              y: 93.0983,
            },
            {
              y: -48,
              duration: 0.55,
              ease: CustomEase.create("custom", "M0,0 C0,0 0.24,1 1,1 "),
            }
          )
          .to(".sheading__anim1", {
            y: 0,
            duration: 0.57,
            ease: CustomEase.create("custom", "M0,0 C0.71,0 0.27,1 1,1 "),
          })
          .from(
            ".sheading__anim1",
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
        let tlsheading__anim2 = gsap.timeline({
          delay: 0.6,
        });

        tlsheading__anim2
          .fromTo(
            ".sheading__anim2",
            {
              y: 93.0983,
            },
            {
              y: -48,
              duration: 0.55,
              ease: CustomEase.create("custom", "M0,0 C0,0 0.24,1 1,1 "),
            }
          )
          .to(".sheading__anim2", {
            y: 0,
            ease: CustomEase.create("custom", "M0,0 C0.71,0 0.27,1 1,1 "),
          })
          .from(
            ".sheading__anim2",
            {
              opacity: 0,
              duration: 0.15,
              ease: CustomEase.create("custom", "M0,0 C0.71,0 0.27,1 1,1 "),
            },
            "-=1.12"
          );

        s3.classList.remove("other");
      }
    },
  },
});
