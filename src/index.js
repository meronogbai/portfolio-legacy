import fetchRepos from './api/fetchRepos';
import displayRepos from './components/displayRepos';
import './style.css';

const projects = document.querySelector('#projects');

fetchRepos()
  .then(repos => {
    projects.removeChild(projects.lastElementChild);
    projects.appendChild(displayRepos(repos));
  });
