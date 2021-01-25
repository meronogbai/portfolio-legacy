import './style.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all';

const modalBtn = document.querySelector('.modal-btn');

modalBtn.addEventListener('click', () => {
  const modalBg = document.createElement('div');
  const modalBody = modalBtn.parentElement.querySelector('div.project');
  const modalFoot = modalBtn.parentElement.querySelector('ul.project-skills');
  modalBg.classList = 'fixed inset-0 bg-gray-100 bg-opacity-70 flex justify-center items-center';
  const modal = document.createElement('div');
  modal.classList = 'bg-white w-64 p-5 rounded';
  const closeBtn = document.createElement('i');
  closeBtn.classList = 'fas fa-window-close fa-lg text-blue-800';
  modal.append(closeBtn, modalBody.cloneNode(true), modalFoot.cloneNode(true));
  modalBg.append(modal);
  modalBg.addEventListener('click', () => {
    modalBg.remove();
  });
  document.body.append(modalBg);
});