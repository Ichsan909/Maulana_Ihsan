export function projectsSectionFunctionality(){
  const projects = [
    {
        image: 'project.gif',
        title: 'Web devloper',
        description: 'Halo! Saya Maulana Ihsan, mahasiswa semester 4 di bidang IT yang memiliki minat besar pada pengembangan web. Saat ini, saya fokus mempelajari Python dan framework Django untuk membangun aplikasi web modern. Dalam proses ini, saya juga mendalami konsep backend, frontend, dan integrasi data untuk menciptakan aplikasi yang dinamis dan fungsional.',
        role: 'Prontend',
        clientSatisfaction: '95%'
    },
    {
        image: 'project.gif',
        title: 'Python',
        description: 'Python adalah bahasa pemrograman serbaguna yang saya gunakan untuk mengembangkan aplikasi dan membangun logika backend. Dengan sintaks yang sederhana dan mudah dipahami, Python membantu saya menyelesaikan berbagai proyek, mulai dari pengolahan data hingga pembuatan aplikasi web. Bahasa ini juga menjadi fondasi utama dalam perjalanan saya mempelajari Django.',
        role: 'Backend',
        clientSatisfaction: '95%'
    },
    
  ];

  let projectHTML = '';

  projects.forEach(project => {
    projectHTML+= `
      <div class="project-card">
          <div class="container title-and-description">
            <h2 class="project-title">${project.title}</h2>
            <p class="project-description semi-transparent-word">
              ${project.description}
            </p>
            <button class="call-to-action-btn">Visit Site</button>
          </div>
          <div class="fade-bgColor"></div>
          <div class="container image-and-result">   
            <img class="project-image" src="images and icons/icons/${project.image}" alt="proj-img" />
            <div class="project-result d-flex">
              <div>
                <p class="role semi-transparent-word">Role</p>
                <p class="result">${project.role}</p>
              </div>  
              <div>
                <p class="satisfaction semi-transparent-word">
                  Client satisfaction
                </p>
                <p class="result">${project.clientSatisfaction}</p>
              </div>
            </div>
          </div>
        </div>
    `
  });
  
  document.querySelector('.projects-container').innerHTML = projectHTML


}
