import splitOnHypen from '../utils/splitOnHyphen';
import outputListFromTags from '../utils/outputListFromTags';

const displayRepo = (repo) => {
  const project = document.createElement('article');
  project.className = 'lg:col-span-1 rounded-md shadow-md hover:shadow-lg flex flex-col justify-between';
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
    <a target="_blank" href=${repo.node.homepageUrl} rel="noopener noreferrer" title="External Link">
      <i class="fas fa-external-link-alt fa-lg text-blue-800" aria-hidden="true"></i>
    </a>
    <a target="_blank" href=${repo.node.url} rel="noopener noreferrer" title="Source Code">
      <i class="fab fa-github fa-lg text-blue-800" aria-hidden="true"></i>
    </a>
  `;
  buttons.className = 'flex gap-2 items-center';
  const footer = document.createElement('div');
  footer.className = 'flex justify-between p-3';
  footer.append(tags, buttons);
  const body = document.createElement('div');
  body.append(image, description);
  project.append(body, footer);
  return project;
};

export default displayRepo;
