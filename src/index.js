import splitOnHypen from './splitOnHyphen';
import outputListFromTags from './outputListFromTags';
import './style.css';

const nav = document.querySelector('nav');

// show shadow on nav on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    nav.classList.remove('shadow');
  } else {
    nav.classList.add('shadow');
  }
});

fetch('/.netlify/functions/fetchRepos')
  .then(response => response.json())
  .then(data => {
    const wrapper = document.createElement('div');
    wrapper.className = 'grid lg:grid-cols-2 gap-3';
    data.forEach(repo => {
      const project = document.createElement('article');
      project.className = 'lg:col-span-1 rounded-md shadow-md flex flex-col justify-between';
      const image = document.createElement('div');
      image.className = 'p-3 h-48 rounded';
      image.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), no-repeat center/cover url('${repo.node.openGraphImageUrl}'`;
      const title = document.createElement('h3');
      title.className = 'font-extrabold text-white text-xl';
      title.textContent = splitOnHypen(repo.node.name);
      image.appendChild(title);
      const description = document.createElement('p');
      description.className = 'p-3';
      description.textContent = repo.node.description;
      const tags = outputListFromTags(repo.node.repositoryTopics.edges);
      const buttons = document.createElement('div');
      buttons.innerHTML = `
        <a target="_blank" href=${repo.node.homepageUrl} rel="noopener noreferrer">
          <i class="fas fa-external-link-alt fa-lg text-blue-800"></i>
        </a>
        <a target="_blank" href=${repo.node.url} rel="noopener noreferrer">
          <i class="fab fa-github fa-lg text-blue-800"></i>
        </a>
      `;
      buttons.className = 'flex gap-2 items-center';
      const footer = document.createElement('div');
      footer.className = 'flex justify-between p-3';
      footer.append(tags, buttons);
      const body = document.createElement('div');
      body.append(image, description);
      project.append(body, footer);
      wrapper.appendChild(project);
    });
    const projects = document.querySelector('#projects');
    const loading = document.querySelector('.loading');
    loading.remove();
    projects.appendChild(wrapper);
  });