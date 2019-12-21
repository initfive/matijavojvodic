var page = 0;
(technologiesLink = document.querySelector("#technologies-link")),
  (homeLink = document.querySelector("#home-link")),
  (worksLink = document.querySelector("#works-link")),
  (aboutLink = document.querySelector("#about-link")),
  (contactLink = document.querySelector("#contact-link")),
  (yellowLink = document.querySelector("#yellow-bg")),
  (whiteLink = document.querySelector("#white-bg")),
  (hambiLink = document.querySelector("#hamburger")),
  (linkArray = [homeLink, technologiesLink, worksLink, aboutLink, contactLink]),
  linkArray.forEach(b => {
    b.addEventListener("click", () => {
      b === technologiesLink
        ? (fetchPage(b, "technologies.html"), (page = 1))
        : b === worksLink
        ? (fetchPage(b, "works.html"), (page = 2))
        : b === homeLink
        ? (fetchPage(b, "index.html"), (page = 0))
        : b === aboutLink
        ? (fetchPage(b, "about.html"), (page = 3))
        : b === contactLink && (fetchPage(b, "contact.html"), (page = 4));
    });
  });
function fetchPage(b, c) {
  let d = `${window.location.protocol}//${window.location.hostname}`;
  window.location.port && (d += `:${window.location.port}`),
    fetch(`${d}/${c}`)
      .then(function(b) {
        return b.text();
      })
      .then(function(a) {
        let b = new DOMParser().parseFromString(a, "text/html");
        anime
          .timeline({ easing: "easeInExpo" })
          .add({
            targets: ".text-section h1, .text-section p, .text-section",
            translateX: -700,
            opacity: 0,
            easing: "easeInExpo",
            duration: 700
          })
          .add(
            {
              targets:
                ".image-section, .image-section-contact, .image-section-about, .image-section-collections, .image-section-works",
              translateY: [0, -250],
              opacity: [1, 0],
              complete: () => {
                document.querySelector(".column-wrapper").remove();
              }
            },
            "-=1000"
          ),
          setTimeout(function() {
            document
              .querySelector("body")
              .insertBefore(
                b.querySelector(".new-content"),
                document.querySelector(".gallery-nav")
              ),
              anime
                .timeline({ easing: "easeOutExpo" })
                .add({
                  targets:
                    ".new-content .text-section h1, .new-content .text-section p, .new-content .text-section",
                  translateX: [-600, 0],
                  delay: (a, b) => 100 * b,
                  opacity: [0, 1]
                })
                .add(
                  {
                    targets:
                      ".image-section, .image-section-contact, .image-section-collections,  .image-section-about, .image-section-works",
                    translateY: [-250, 0],
                    opacity: [0, 1]
                  },
                  "-=1000"
                );
            var c = anime.timeline({ easing: "easeOutExpo", duration: 2e3 });
            c.add(
              {
                delay: 2940,
                targets: ".line-love-figma",
                opacity: 1,
                easing: "easeOutExpo",
                width: ["0%", "95%"]
              },
              "-=1500"
            )
              .add(
                {
                  targets: ".line-love-sketch",
                  opacity: 1,
                  easing: "easeOutExpo",
                  width: ["0%", "90%"]
                },
                "-=1700"
              )
              .add(
                {
                  targets: ".line-love-style",
                  opacity: 1,
                  easing: "easeOutExpo",
                  width: ["0%", "98%"]
                },
                "-=1600"
              )
              .add(
                {
                  targets: ".line-love-interact",
                  opacity: 1,
                  easing: "easeOutExpo",
                  width: ["0%", "85%"]
                },
                "-=1700"
              )
              .add(
                {
                  targets: ".line-love-react",
                  opacity: 1,
                  easing: "easeOutExpo",
                  width: ["0%", "90%"]
                },
                "-=1800"
              )
              .add(
                {
                  targets: ".line-love-native",
                  opacity: 1,
                  easing: "easeOutExpo",
                  width: ["0%", "80%"]
                },
                "-=1900"
              );
          }, 700);
      });
}
yellowLink.addEventListener("click", () => {
  (page -= 1), -1 == page && (page = 4), listing();
}),
  whiteLink.addEventListener("click", () => {
    (page += 1), 5 == page && (page = 0), listing();
  });
function listing() {
  1 == page
    ? fetchArrow("technologies.html")
    : 2 == page
    ? fetchArrow("works.html")
    : 3 == page
    ? fetchArrow("about.html")
    : 4 == page
    ? fetchArrow("contact.html")
    : 0 == page && fetchArrow("index.html");
}
function fetchArrow(b) {
  let c = `${window.location.protocol}//${window.location.hostname}`;
  window.location.port && (c += `:${window.location.port}`),
    fetch(`${c}/${b}`)
      .then(function(b) {
        return b.text();
      })
      .then(function(a) {
        let b = new DOMParser().parseFromString(a, "text/html");
        anime({
          targets:
            ".text-section h1, .text-section p, .text-section, .image-section, .image-section-contact, .image-section-about, .image-section-collections, .image-section-works",
          translateX: -700,
          opacity: 0,
          easing: "easeInExpo",
          duration: 700,
          complete: () => {
            document.querySelector(".column-wrapper").remove();
          }
        }),
          setTimeout(function() {
            document
              .querySelector("body")
              .insertBefore(
                b.querySelector(".new-content"),
                document.querySelector(".gallery-nav")
              ),
              anime
                .timeline({ easing: "easeOutExpo" })
                .add({
                  targets:
                    ".new-content .text-section h1, .new-content .text-section p, .new-content .text-section",
                  translateX: [-600, 0],
                  delay: (a, b) => 100 * b,
                  opacity: [0, 1]
                })
                .add(
                  {
                    targets:
                      ".image-section, .image-section-contact, .image-section-collections,  .image-section-about, .image-section-works",
                    translateY: [-250, 0],
                    opacity: [0, 1]
                  },
                  "-=1000"
                );
            var c = anime.timeline({ easing: "easeOutExpo", duration: 2e3 });
            c.add(
              {
                delay: 2940,
                targets: ".line-love-figma",
                opacity: 1,
                easing: "easeOutExpo",
                width: ["0%", "95%"]
              },
              "-=1500"
            )
              .add(
                {
                  targets: ".line-love-sketch",
                  opacity: 1,
                  easing: "easeOutExpo",
                  width: ["0%", "90%"]
                },
                "-=1700"
              )
              .add(
                {
                  targets: ".line-love-style",
                  opacity: 1,
                  easing: "easeOutExpo",
                  width: ["0%", "98%"]
                },
                "-=1600"
              )
              .add(
                {
                  targets: ".line-love-interact",
                  opacity: 1,
                  easing: "easeOutExpo",
                  width: ["0%", "89%"]
                },
                "-=1700"
              )
              .add(
                {
                  targets: ".line-love-react",
                  opacity: 1,
                  easing: "easeOutExpo",
                  width: ["0%", "93%"]
                },
                "-=1800"
              )
              .add(
                {
                  targets: ".line-love-native",
                  opacity: 1,
                  easing: "easeOutExpo",
                  width: ["0%", "80%"]
                },
                "-=1900"
              );
          }, 700);
      });
}
