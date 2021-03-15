import addShadowOnScroll from './utils/addShadowOnScroll';
import fetchRepos from './api/fetchRepos';
import displayRepos from './components/displayRepos';
import './style.css';

const nav = document.querySelector('nav');
const projects = document.querySelector('#projects');

addShadowOnScroll(nav);

fetchRepos()
  .then(repos => {
    projects.removeChild(projects.lastElementChild);
    projects.appendChild(displayRepos(repos));
  });
