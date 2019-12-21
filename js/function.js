document.addEventListener("DOMContentLoaded", () => {
  let f = document.querySelectorAll("nav a");
  f.forEach(b => {
    b.addEventListener("mouseenter", () => {
      let c = b.querySelectorAll(".letter");
      anime.remove(c),
        anime
          .timeline({ targets: c })
          .add({
            translateX: [0, -30],
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 500,
            delay: (b, c) => 30 * c
          })
          .add({
            translateX: [40, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1100,
            delay: (b, c) => 30 * c
          });
    });
  });
  let g = document.querySelectorAll(".sidebar-section .social a");
  g.forEach(b => {
    b.addEventListener("mouseenter", () => {
      const c = b.querySelectorAll(".letter");
      anime.remove(c),
        anime
          .timeline({ targets: c })
          .add({
            translateY: [0, -30],
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 500,
            delay: (b, c) => 30 * c
          })
          .add({
            translateY: [40, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1100,
            delay: (b, c) => 30 * c
          });
    });
  });
  const a = document.querySelectorAll("#yellow-bg img"),
    b = document.querySelectorAll("#yellow-bg");
  b.forEach(b => {
    b.addEventListener("click", () => {
      anime
        .timeline({ targets: a })
        .add({
          translateX: [0, -30],
          opacity: [1, 0],
          easing: "easeInExpo",
          duration: 500,
          delay: (b, c) => 30 * c
        })
        .add({
          translateX: [40, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 800,
          delay: (b, c) => 30 * c
        });
    });
  });
  const c = document.querySelectorAll("#white-bg div"),
    d = document.querySelectorAll("#white-bg");
  d.forEach(a => {
    a.addEventListener("click", () => {
      anime
        .timeline({ targets: c })
        .add({
          translateX: [0, 30],
          opacity: [1, 0],
          easing: "easeInExpo",
          duration: 500,
          delay: (b, c) => 30 * c
        })
        .add({
          translateX: [-40, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 800,
          delay: (b, c) => 30 * c
        });
    });
  });
  const e = document.querySelectorAll("#hamburger"),
    h = document.querySelectorAll("#hamburger div");
  e.forEach(a => {
    a.addEventListener("click", () => {
      anime
        .timeline({ targets: e })
        .add(
          {
            targets: ".ham-line",
            translateX: ["300", "0"],
            opacity: [0, 1],
            duration: 1500,
            delay: (b, c) => 100 * c
          },
          "-=700"
        );
    });
  });
});
