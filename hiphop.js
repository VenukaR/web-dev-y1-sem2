//FLOATING BUTTON & the Catogories Tab

document.querySelector('.floating-button').addEventListener('click', function() {
    const element = document.querySelector('.hiphop-header');
    const offset = element.offsetTop;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });