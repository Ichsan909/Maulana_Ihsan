export function sideNavFunctionality() {
  const sideNavContainer = document.querySelector(".side-nav");
  const sideNavLink = document.querySelectorAll(".side-nav li .nav-link");
  const header = document.querySelector("header");

  function switchSection(secName, header) {
    location.href = `#${secName}-section`;
    sideNavContainer.style.display = "none";
    header.style.display = "block";
  }

  sideNavLink.forEach((nav) => {
    nav.addEventListener("click", () => {
      const navClass = nav.classList[1];

      switch (navClass) {
        case "home":
          switchSection("home", header);
          break;
        case "about":
          switchSection("about", header);
          break;
        case "skill":
          switchSection("services", header);
          break;
        case "projects":
          switchSection("projects", header);
          break;
        case "contact":
          switchSection("contact", header);
      }
    });
  });

  // hide side-nav//
  const hideSideNavBtn = document.querySelector(".hide-sideNav-btn");
  hideSideNavBtn.addEventListener("click", () => {
    crossAnimation();
    sideNavContainer.style.animation = "hide-side-nav 1s forwards";


    setTimeout(() => {
      sideNavContainer.style.display = "none";
      header.style.display = "block";
    }, 900);
  });

  function crossAnimation() {
    const leftCross = hideSideNavBtn.querySelector(".left");
    const rightCross = hideSideNavBtn.querySelector(".right");
    leftCross.style.animation = "hide-left-cross 0.8s forwards";
    rightCross.style.animation = "hide-right-cross 0.8s forwards";

    setTimeout(() => {
      leftCross.style.animation = "show-left-cross 0.8s";
      rightCross.style.animation = "show-right-cross 0.8s";
    }, 900);
  }

  // hide sidenav when screen-width is long
  function updateWidth() {
    const width = window.innerWidth;
    if (width >= 851) {
      sideNavContainer.style.display = "none";
      header.style.display = "block";
    }
  }
  window.addEventListener("resize", updateWidth);

  // responsive sidenav when scrolling in another section
  const sections = document.querySelectorAll("section");
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          sideNavLink.forEach((nav) => {
            const navCLass = nav.classList[1];
            const secClass = entry.target.classList[1];

            if (secClass === navCLass)
                {nav.classList.add('active')} 
            else{nav.classList.remove('active')}
          });
        }
      });
    },
    {
      rootMargin: "-250px",
    }
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
}
