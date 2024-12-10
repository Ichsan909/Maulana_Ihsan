export function animation(){
  // about me entry animation
  const aboutMe = document.querySelector('.about-self ');
  const aboutMeObserver = new IntersectionObserver(entry => {
    const aboutMe = entry[0].target;
    if(entry[0].isIntersecting){
      aboutMe.style.animation = 'about-me 1s ease forwards'
    }
  },
   {
    rootMargin: '-100px'
  });

  aboutMeObserver.observe(aboutMe);


  // about profile pic entry animation
  const aboutProfilePic = document.querySelector('#about-section .profile-pic');
  const aboutProfileObserver = new IntersectionObserver(entry => {
    const aboutProfilePic = entry[0].target;
    if(entry[0].isIntersecting){
      aboutProfilePic.style.animation = 'about-profile-slide 1s ease forwards'
    }
  },
  {
    rootMargin: '-100px'
  });
 
  aboutProfileObserver.observe(aboutProfilePic);


  // skills entry animation
  const skills = document.querySelectorAll('.skills-container .skill');
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const skill = entry.target;
      if(entry.isIntersecting){
        skill.style.animation = 'cards-entry 1s ease forwards';
      }
    })
  },
  {
    rootMargin: '-70px'
  }
  );

  skills.forEach(skill => {
    skillsObserver.observe(skill)
  });


  // My offered Service animation
  const services = document.querySelectorAll('#services-section .card');

  const servicesObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const service = entry.target;
      if(entry.isIntersecting){
        service.style.animation = 'cards-entry 1s ease forwards';
      }
    })
  });

  services.forEach(service => {
    servicesObserver.observe(service)
  });


    // contact input entry animation
    const contactInputs = document.querySelectorAll('#contact-section .input');
    const inputObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const input = entry.target;
        if(entry.isIntersecting){
          input.style.animation = 'contact-input-entry 1s ease forwards'
        }
      })
    },
    {
      rootMargin: '-100px'
    }
  );
    
  contactInputs.forEach(input => {
    inputObserver.observe(input)
  })

}

