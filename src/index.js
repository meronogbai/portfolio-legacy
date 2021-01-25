import './style.css';
import '@fortawesome/fontawesome-free/js/all';

const modalBtns = document.querySelectorAll('.modal-btn');

modalBtns.forEach(modalBtn => {
  modalBtn.addEventListener('click', () => {
    const modalBg = document.createElement('div');
    modalBg.classList = 'fixed inset-0 bg-gray-200 bg-opacity-70 flex justify-center items-center';
    const modal = document.createElement('div');
    modal.classList = 'bg-white w-10/12 px-3 rounded relative';
    const modalBody = modalBtn.parentElement.querySelector('div.project');
    const modalSkills = modalBtn.parentElement.querySelector('ul.project-skills');
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '<i class="fas fa-window-close fa-lg text-blue-800 absolute top-0 right-0"></i>';
    closeBtn.addEventListener('click', () => {
      modalBg.remove();
    });
    modal.append(closeBtn, modalBody.cloneNode(true), modalSkills.cloneNode(true));
    modalBg.append(modal);
    modalBg.addEventListener('click', e => {
      if (e.target === modalBg) {
        modalBg.remove();
      }
    });
    document.body.append(modalBg);
  });
});
