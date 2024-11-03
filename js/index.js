//Selectors
const hamburguerIcon = document.querySelector('.menu__mobile__hamburguer');
const menu = document.querySelector('.nav__list');
const addButtonAboutme = document.querySelector('#about__more-about-me');
const addButtonSkillSet = document.querySelector('#about__skill-set');
const imgLautaro = document.querySelector('.presentation__img');
const overlayRight = document.querySelector('.overlayRight');
const overlayLeft = document.querySelector('.overlayLeft');
const goBackProfileButton = document.querySelector(
  '#overlayRight__button_container__button_back'
);
const goBackSkillsButton = document.querySelector(
  '#overlayLeft__button_container__button_back'
);
const skillsContainer = document.querySelector('.overlayLeft__container__text');
const profileContainer = document.querySelector(
  '.overlayRight__container_text'
);
const navLinks = document.querySelectorAll('.nav__ul > li > a');

//Vars
let isDark = false;

//Listeners
hamburguerIcon.addEventListener('click', () => {
  menu.classList.toggle('menu__mobile__show');
});
addButtonAboutme.addEventListener('click', () => {
  overlayRight.classList.toggle('activate');
  addButtonAboutme.classList.toggle('clicked');
  profileContainer.classList.add('fade-in');
});
goBackProfileButton.addEventListener('click', () => {
  overlayRight.classList.toggle('activate');
  addButtonAboutme.classList.toggle('clicked');
});
addButtonSkillSet.addEventListener('click', () => {
  overlayLeft.classList.toggle('activate');
  addButtonSkillSet.classList.toggle('clicked');
  skillsContainer.classList.add('fade-in');
});
goBackSkillsButton.addEventListener('click', () => {
  overlayLeft.classList.toggle('activate');
  addButtonSkillSet.classList.toggle('clicked');
});
navLinks.forEach((a) => {
  a.addEventListener('click', () => {
    menu.classList.toggle('menu__mobile__show');
  });
});

//Detect Browser Theme and change Automatically
if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  isDark = true;
  darkSwitcher(isDark);
}
//Toggle Dark Theme Manually
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
  isDark = !isDark;
  darkSwitcher(isDark);
});

//Functions
function darkSwitcher(isDark) {
  const hamburguerIcon = document.querySelector('.menu__mobile__hamburguer');
  const aboutme = document.querySelector('#about');
  const contactme = document.querySelector('#contactme');
  const projects = document.querySelectorAll('.project');
  const inputName = document.querySelector('form').children[0];
  const inputEmail = document.querySelector('form').children[1];
  const inputTextarea = document.querySelector('form').children[2];
  const addButtonAboutme = document.querySelector('#about__more-about-me');
  const addButtonSkillSet = document.querySelector('#about__skill-set');
  const penButton = document.querySelector('.portfolio__heading img');
  const projectGitButtons = document.querySelectorAll(
    '.project__header__links__git'
  );
  const projectLaunchButtons = document.querySelectorAll(
    '.project__header__links__launch'
  );
  const projectTechnologies = document.querySelectorAll(
    '.project__footer__techs'
  );
  const footer = document.querySelector('footer');
  const overlayContainerBg = document.querySelector('.overlayRight__container');
  const overlayContainerBgLeft = document.querySelector(
    '.overlayLeft__container'
  );
  const goBackProfileButton = document.querySelector(
    '#overlayRight__button_container__button_back'
  );

  document.body.classList.toggle('dark');
  hamburguerIcon.classList.toggle('dark');
  aboutme.classList.toggle('dark');
  contactme.classList.toggle('dark');
  projects.forEach((project) => {
    project.classList.toggle('dark');
  });
  inputName.classList.toggle('dark');
  inputEmail.classList.toggle('dark');
  inputTextarea.classList.toggle('dark');
  addButtonAboutme.classList.toggle('dark');
  addButtonSkillSet.classList.toggle('dark');
  penButton.classList.toggle('dark');
  projectGitButtons.forEach((button) => {
    button.classList.toggle('dark');
  });
  projectLaunchButtons.forEach((button) => {
    button.classList.toggle('dark');
  });
  projectTechnologies.forEach((button) => {
    Object.entries(button.children).forEach(([key, value]) => {
      value.classList.toggle('dark');
    });
  });
  footer.classList.toggle('dark');
  goBackProfileButton.classList.toggle('dark');
  overlayContainerBg.classList.toggle('dark');
  overlayContainerBgLeft.classList.toggle('dark');

  if (isDark) {
    imgLautaro.src = 'assets/images/lautaro_dark.jpg';
    projectGitButtons.forEach((button) => {
      button.classList.toggle('dark');
    });
    projectLaunchButtons.forEach((button) => {
      button.classList.toggle('dark');
    });
  } else {
    imgLautaro.src = 'assets/images/lautaro.jpg';
    projectGitButtons.forEach((button) => {
      button.classList.toggle('dark');
    });
    projectLaunchButtons.forEach((button) => {
      button.classList.toggle('dark');
    });
  }
}

export { isDark, darkSwitcher };
