import { RenderContent } from "./renderContent.js";
import { header } from "./navigation/top-nav.js";
import { sideNavFunctionality } from "./navigation/side-nav.js";
import { homeSectionFunctionality } from "./home.js";
import { projectsSectionFunctionality } from "./project.js";
import { animation } from "./animation.js";

RenderContent();

header();

sideNavFunctionality();

homeSectionFunctionality();

projectsSectionFunctionality();

animation();


const sections = document.querySelectorAll('section:not(#home-section)');
const seeMoreBtn =document.querySelector('.see-more-btn');


seeMoreBtn.addEventListener('click', ()=>{
  seeMoreBtn.style.display = 'none';
  sections.forEach(section => {
    section.style.display = 'inherit'
  })
})

// glowing background
const glowingDotsHTML = `
        <div class="glowing">
    
        <span style="--i:1;"></span>
        
        <span style="--i:2;"></span>
        
        <span style="--i:3;"></span>
        
      </div> 
      <div class="glowing">
        
        <span style="--i:1;"></span>
        
        <span style="--i:2;"></span>
        
        <span style="--i:3;"></span>
        
      </div> 
      <div class="glowing">
        
        <span style="--i:1;"></span>
        
        <span style="--i:2;"></span>
        
        <span style="--i:3;"></span>
        
      </div>
      <div class="glowing">
        
        <span style="--i:1;"></span>
        
        <span style="--i:2;"></span>
        
        <span style="--i:3;"></span>
        
      </div>
`;

const glowingDotsContaniner = document.querySelector('.glowing-dots-container').innerHTML = glowingDotsHTML;

