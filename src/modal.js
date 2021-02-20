const injectDetails = (modalBody) => {
  const details = document.createElement('div');
  let externalLink;
  let githubLink;
  let content;
  if (modalBody.classList.contains('first-project')) {
    externalLink = 'http://manga-central.netlify.app/';
    githubLink = 'https://github.com/meronokbay/manga-central';
    content = 'An SPA that lets you view and search Asian comics (manga) by fetching data from Jikan API.';
  } else if (modalBody.classList.contains('second-project')) {
    externalLink = 'https://group-payments.herokuapp.com/';
    githubLink = 'https://github.com/meronokbay/group-payments';
    content = 'Group Payments is a web app that allows you to group payments with your friends and family.';
  } else if (modalBody.classList.contains('third-project')) {
    externalLink = 'https://meronokbay.github.io/panda-runner/';
    githubLink = 'https://github.com/meronokbay/panda-runner';
    content = 'Panda Runner is a game where you play the role of a panda and collect as many coins as you can before falling over a platform or getting hurt.';
  } else if (modalBody.classList.contains('fourth-project')) {
    externalLink = 'https://github.com/meronokbay/microverse-linters-setup/blob/main/setup_linters';
    githubLink = 'https://github.com/meronokbay/microverse-linters-setup';
    content = 'This is a bash script that lets you install and setup linters quickly for the programming languages used in the Microverse curriculum.';
  }
  details.innerHTML = `
  <p class="py-3">${content}</p>
  <a target="_blank" class="bg-blue-800 text-white font-semibold block py-3 mb-1 text-center rounded"
  href="${externalLink}">
    See Live <i class="fas fa-external-link-alt"></i>
  </a>
  <a target="_blank" class="bg-blue-800 text-white font-semibold block py-3 mb-1 text-center rounded"
  href="${githubLink}">
    See Source <i class="fab fa-lg fa-github"></i>
  </a>
  `;
  return details;
};

export default (modalBtns) => {
  modalBtns.forEach(modalBtn => {
    modalBtn.addEventListener('click', () => {
      const modalBg = document.createElement('div');
      modalBg.classList = 'fixed inset-0 bg-gray-200 bg-opacity-70 flex justify-center items-center';
      const modal = document.createElement('div');
      modal.classList = 'bg-white w-10/12 p-3 pt-7 rounded relative';
      const modalBody = modalBtn.parentElement.querySelector('div.project');
      const modalSkills = modalBtn.parentElement.querySelector('ul.project-skills');
      const closeBtn = document.createElement('button');
      closeBtn.classList = 'absolute top-0 right-0 text-blue-800';
      closeBtn.innerHTML = '<i class="fas fa-window-close fa-lg"></i>';
      closeBtn.addEventListener('click', () => {
        modalBg.remove();
      });
      modal.append(
        closeBtn,
        modalBody.cloneNode(true),
        modalSkills.cloneNode(true),
        injectDetails(modalBody),
      );
      modalBg.append(modal);
      modalBg.addEventListener('click', e => {
        if (e.target === modalBg) {
          modalBg.remove();
        }
      });
      document.body.append(modalBg);
    });
  });
};