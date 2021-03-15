import displayRepo from './displayRepo';

const displayRepos = (repos) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'grid lg:grid-cols-2 gap-4';
  repos.forEach(repo => {
    wrapper.appendChild(displayRepo(repo));
  });
  return wrapper;
};

export default displayRepos;
