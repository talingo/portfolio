import { isDark } from './index.js';
import { localData } from '../data/data.js';

const render = (data) => {
  cleanProjects();
  data.projects.forEach((project) => {
    renderProject(project);
    applyHoverImage(project);
  });
  refreshDark();
};

const callApi = async () => {
  try {
    const respuesta = await fetch(
      'https://portfolio-ygjf.onrender.com/portfolio/projects'
    );
    const data = await respuesta.json();
    render(data);
  } catch (error) {
    console.log(error);
    callJson();
  }
};

const callJson = () => {
  render(localData);
};

// Switch callApi() or callJson()
document.addEventListener('DOMContentLoaded', callJson);

const renderProject = (project) => {
  const {
    _id,
    name,
    displayName,
    description,
    image,
    repositoryUrl,
    technologies,
    url,
  } = project;
  let techsImgArray = [];
  technologies.forEach((tech) => {
    const imgString = techToImg(tech);
    techsImgArray.push(imgString);
  });

  // Repository image link render
  let repositoryImg = '';
  if (
    repositoryUrl === '' ||
    repositoryUrl === null ||
    repositoryUrl === undefined
  ) {
    repositoryImg = '';
  } else {
    repositoryImg = `<a href="${repositoryUrl}" target="_blank"><img class="project__header__links__git"
                                src="assets/images/icons_svg/icon_github.svg" alt="github repository"></a>`;
  }

  // Deploy image link render
  let deployImg = '';
  if (url === '' || url === null || url === undefined) {
    deployImg = '';
  } else {
    deployImg = `<a href="${url}" target="_blank"><img class="project__header__links__launch"
                                src="assets/images/icons_svg/launch.svg" alt="project view"></a>`;
  }

  const projectsContainer = document.querySelector('.projects__container');
  const divProjectContainer = document.createElement('div');
  divProjectContainer.innerHTML = `
            <div class="project draw-border" id="${_id}">
                <div class="project__header">
                    <div class="project__header__name">
                        <p>//&nbsp;</p>
                        <h1>${displayName}</h1>
                    </div>
                    <div class="project__header__links">
                        ${repositoryImg}
                        ${deployImg}
                    </div>
                </div>
                <div class="project__img__filter"><img src="${image}"
                        alt="project screenshot"></div>
                <div class="project__footer">
                    <p>${description}</p>
                    <div class="project__footer__techs">
                         ${techsImgArray.join(' ')}
                    </div>
                </div>
            </div>
    `;

  projectsContainer.insertBefore(
    divProjectContainer,
    projectsContainer.firstChild
  );
};

function transformImageURL(url) {
  return url.replace('-duo-yellow', '-normal');
}

const applyHoverImage = (project) => {
  const { _id, image } = project;
  const img = document.getElementById(_id).children[1].childNodes[0];
  console.log(img);
  const originalSrc = img.getAttribute('src');
  const transformedURL = transformImageURL(image);
  const newSrc = transformedURL;

  img.addEventListener('mouseover', () => {
    img.setAttribute('src', newSrc);
  });

  img.addEventListener('mouseout', () => {
    img.setAttribute('src', originalSrc);
  });
};
const cleanProjects = () => {
  const projectsContainer = document.querySelector('.projects__container');
  projectsContainer.innerHTML = '';
};
const refreshDark = () => {
  if (isDark) {
    const projects = document.querySelectorAll('.project');
    projects.forEach((project) => {
      project.classList.toggle('dark');
    });
    const projectTechnologies = document.querySelectorAll(
      '.project__footer__techs'
    );
    projectTechnologies.forEach((button) => {
      Object.entries(button.children).forEach(([key, value]) => {
        value.classList.toggle('dark');
      });
    });
  }
};

function techToImg(technology) {
  let techToImg = '';

  switch (technology.toUpperCase()) {
    case 'JS':
      techToImg =
        '<img src="assets/images/icons_svg/icon_javascript_.svg" alt="javascript">';
      break;
    case 'HTML':
      techToImg =
        '<img src="assets/images/icons_svg/icon_html5_.svg" alt="html5">';
      break;
    case 'CSS':
      techToImg =
        '<img src="assets/images/icons_svg/icon_css3_.svg" alt="css3">';
      break;
    case 'PHP':
      techToImg = '<img src="assets/images/icons_svg/icon_php_.svg" alt="php">';
      break;
    case 'MONGODB':
      techToImg =
        '<img src="assets/images/icons_svg/icon_mongodb_.svg" alt="mongoDB">';
      break;
    case 'MYSQL':
      techToImg =
        '<img src="assets/images/icons_svg/icon_mysql_.svg" alt="mySQL">';
      break;
    case 'POSTGRESQL':
      techToImg =
        '<img src="assets/images/icons_svg/icon_postgresql_.svg" alt="PostgreSQL">';
      break;
    case 'GRAPHQL':
      techToImg =
        '<img src="assets/images/icons_svg/icon_graphql_.svg" alt="GraphQL">';
      break;
    case 'NESTJS':
      techToImg =
        '<img src="assets/images/icons_svg/icon_nestjs_.svg" alt="NestJs">';
      break;
    case 'NEXTJS':
      techToImg =
        '<img src="assets/images/icons_svg/icon_next%20dot%20js_.svg" alt="NestJs">';
      break;
    case 'NODEJS':
      techToImg =
        '<img src="assets/images/icons_svg/icon_node%20dot%20js_.svg" alt="NodeJs">';
      break;
    case 'REACT':
      techToImg =
        '<img src="assets/images/icons_svg/icon_react_.svg" alt="React">';
      break;
    case 'REDUX':
      techToImg =
        '<img src="assets/images/icons_svg/icon_redux_.svg" alt="Redux">';
      break;
    case 'SASS':
      techToImg =
        '<img src="assets/images/icons_svg/icon_sass_.svg" alt="SASS">';
      break;
    case 'SOCKETIO':
      techToImg =
        '<img src="assets/images/icons_svg/icon_socket%20dot%20io_.svg" alt="Socket io">';
      break;
    case 'TAILWIND':
      techToImg =
        '<img src="assets/images/icons_svg/icon_tailwindcss_.svg" alt="Socket io">';
      break;
    case 'TYPESCRIPT':
      techToImg =
        '<img src="assets/images/icons_svg/icon_typescript_.svg" alt="TypeScript">';
      break;
    case 'C#':
      techToImg =
        '<img src="assets/images/icons_svg/icon_csharp_.svg" alt="C#">';
      break;
    case 'UNITY':
      techToImg =
        '<img src="assets/images/icons_svg/icon_unity_.svg" alt="Unity3d">';
      break;
    case 'WORDPRESS':
      techToImg =
        '<img src="assets/images/icons_svg/icon_wordpress_.svg" alt="Wordpress">';
      break;
    case 'MATERIALUI':
      techToImg =
        '<img src="assets/images/icons_svg/icon_materialui.svg" alt="Material UI">';
      break;
    case 'STYLEDCOMPONENTS':
      techToImg =
        '<img src="assets/images/icons_svg/icon_styledcomponents.svg" alt="Styled Components">';
      break;
    case 'DOCKER':
      techToImg =
        '<img src="assets/images/icons_svg/icon_docker.svg.svg" alt="Docker">';
      break;

    default:
      break;
  }
  return techToImg;
}
