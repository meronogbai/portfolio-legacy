import './style.css';
import setupModals from './modal';

const nav = document.querySelector('nav');
const modalBtns = document.querySelectorAll('.modal-btn');

setupModals(modalBtns);

window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    nav.classList.remove('shadow');
  } else {
    nav.classList.add('shadow');
  }
});