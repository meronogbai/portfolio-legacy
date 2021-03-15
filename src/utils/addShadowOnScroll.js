const addShadowOnScroll = (element) => {
  window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
      element.classList.remove('shadow');
    } else if (!element.classList.contains('shadow')) {
      element.classList.add('shadow');
    }
  });
};

export default addShadowOnScroll;
