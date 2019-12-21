window.addEventListener("load", () => {
  anime
    .timeline({ easing: "easeOutExpo" })
    .add({ targets: ".nav-wrapper", opacity: [0, 1], width: ["0px", "980px"] })
    .add({ targets: ".logo", width: ["0px", "230px"] }, "-=500")
    .add(
      {
        targets: ".logo h1, nav a",
        opacity: [0, 1],
        translateY: [20, 0],
        delay: (b, c) => 100 * c
      },
      "-=700"
    )
    .add(
      { targets: ".text-section", translateY: [100, 0], opacity: [0, 1] },
      "-=400"
    )
    .add(
      { targets: ".image-section", translateY: [-250, 0], opacity: [0, 1] },
      "-=1000"
    )
    .add(
      { targets: ".gallery-headline", translateY: [40, 0], opacity: [0, 1] },
      "-=700"
    )
    .add(
      { targets: ".gallery-loader", translateY: [40, 0], opacity: [0, 1] },
      "-=1600"
    )
    .add(
      {
        targets: ".ham-line",
        translateX: ["500", "0"],
        opacity: [0, 1],
        duration: 800,
        delay: (b, c) => 100 * c
      },
      "-=700"
    )
    .add(
      {
        targets: ".social a",
        translateX: ["500", "0"],
        opacity: [0, 1],
        delay: (b, c) => 200 * c
      },
      "-=1000"
    )
    .add(
      {
        targets: ".gallery-nav div",
        translateY: ["500", "0"],
        opacity: [0, 1],
        delay: (b, c) => 200 * c
      },
      "-=1000"
    );
});
