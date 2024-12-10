export function homeSectionFunctionality() {
  // display Skills
  const mySkills = ["Back End", "Devloper"];
  let stringIndex = 0;
  let arrayIndex = 0;
  let isAdding = true;
  let interval;
  const displaySkills = document.querySelector(".display-skills");

  function displayDelay(timeoutDelay, intervalDelay) {
    setTimeout(() => {
      interval = setInterval(diplaySkillsFunc, intervalDelay);
    }, timeoutDelay);
    clearInterval(interval);
  }
  function diplaySkillsFunc() {
    const skill = mySkills[arrayIndex];

    if (isAdding) {
      let skills = skill.substring(0, stringIndex + 1);
      displaySkills.innerText = `${skills}|`;
      stringIndex++;
      if (stringIndex === skill.length) {
        isAdding = false;
        displayDelay(2000, 60);
      }
    } else {
      stringIndex--;
      let skills = skill.substring(0, stringIndex);
      displaySkills.innerText = `${skills}|`;
      if (stringIndex === 0) {
        isAdding = true;
        arrayIndex = (arrayIndex + 1) % mySkills.length;
        displayDelay(500, 120);
      }
    }
  }
  interval = setInterval(diplaySkillsFunc, 95);

  // Adjust Gradient Light//
  const profilePic = document.querySelector(
    ".home-section .profile-pic #first-layer"
  );
  const gradientWords = document.querySelectorAll(
    ".home-section .gradient-word "
  );

  profilePic.addEventListener("mouseover", () => {
    gradientWords.forEach((word) => {
      word.style.background = "var(--super-gradient-color)";
      word.style.color = "transparent";
      word.style.backgroundClip = "text";
    });
  });

  profilePic.addEventListener("mouseleave", () => {
    gradientWords.forEach((word) => {
      word.style.background = "var(--gradient-color)";
      word.style.color = "transparent";
      word.style.backgroundClip = "text";
    });
  });
}
