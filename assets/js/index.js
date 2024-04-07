const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');


// try again and send pics

//
hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
  document.body.classList.toggle('o');
});
