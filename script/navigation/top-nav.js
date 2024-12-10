export function header() {
  const header = document.querySelector("header");
  const sideNavContainer = document.querySelector(".side-nav");

  //add shadow everytime scroll down
  window.onscroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      header.classList.add("with-shadow");
    } else {
      header.classList.remove("with-shadow");
    }
  };

   // show side-nav //
   const showSideNavBtn = document.querySelector(".show-side-nav-icon");
   showSideNavBtn.addEventListener("click", () => {
     sideNavContainer.style.display = "block";
     sideNavContainer.style.animation = "show-side-nav 0.6s ease-in-out  forwards";
   });

  // top padding when i used nav to go other section
  const headerHeight = document.querySelector("header").offsetHeight;
  document.documentElement.style.setProperty(
    "--scroll-padding",
    `${headerHeight + 13}px`
  );

  // responsive top nav when scrolling in another section
  const sections = document.querySelectorAll("section");
  const topNavLink = document.querySelectorAll(".top-nav ul li .nav-link");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        
        if (entry.isIntersecting) {    
          topNavLink.forEach((nav) => {
            const secClass = entry.target.classList[1];
            const navClass  = nav.classList[1];
   
            if (secClass === navClass)
                {nav.classList.add('active')}
           else { nav.classList.remove('active') } 
            
          });
        }
      });
    },
    {
      rootMargin: "-200px",
    }
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
}
