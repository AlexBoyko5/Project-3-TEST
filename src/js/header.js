// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const menuIcon = document.querySelector('.header-menu-icon');

//   const toggleMenu = () => {
//     const isMenuOpen = mobileMenu.classList.contains('is-open');
//     mobileMenu.classList.toggle('is-open');
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);

//     if (isMenuOpen) {
//       menuIcon.querySelector('use').setAttribute('href', "./img/symbol-defs.svg#icon-burger");
//     } else {
//       menuIcon.querySelector('use').setAttribute('href', "./img/symbol-defs.svg#icon-x");
//     }
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);
// })();

// function handleResize() {
//   const screenWidth = window.innerWidth;
//   const navElement = document.querySelector('.nav');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const menuIcon = document.querySelector('.header-menu-icon');

//   if (screenWidth >= 768) {
//     navElement.style.display = 'block';
//     openMenuBtn.style.display = 'none';
//     mobileMenu.classList.remove('is-open');
//     menuIcon.querySelector('use').setAttribute('href', './img/symbol-defs.svg#icon-burger');
//   } else if (screenWidth <= 400) {
//     navElement.style.display = 'none';
//     openMenuBtn.style.display = 'block';
//     mobileMenu.classList.remove('is-open');
//     menuIcon.querySelector('use').setAttribute('href', './img/symbol-defs.svg#icon-burger');
//   } else {
//     navElement.style.display = 'none';
//     openMenuBtn.style.display = 'block';
//   }
// }

// window.addEventListener('resize', function() {
//     handleResize();
//   });
  
//   handleResize();

//====================================================================================================//

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const menuIconBurger = document.querySelector('.burger-icon');
  const menuIconClose = document.querySelector('.close-icon');

  const toggleMenu = () => {
  const isMenuOpen = mobileMenu.classList.contains('is-open');
    mobileMenu.classList.toggle('is-open');
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);

        if (!isMenuOpen) {
        menuIconClose.classList.remove('hidden');
        menuIconBurger.classList.add('hidden');
      } else {
        menuIconClose.classList.add('hidden');
        menuIconBurger.classList.remove('hidden');
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
})();

function handleResize() {
  const screenWidth = window.innerWidth;
  const navElement = document.querySelector('.nav');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const mobileMenu = document.querySelector('.js-menu-container');
  const menuIconBurger = document.querySelector('.burger-icon');
  const menuIconClose = document.querySelector('.close-icon');

  if (screenWidth >= 768) {
    navElement.style.display = 'block';
    openMenuBtn.style.display = 'none';
    mobileMenu.classList.remove('is-open');
    menuIconBurger.classList.remove('hidden');
    menuIconClose.classList.add('hidden');
  } else if (screenWidth <= 400) {
    navElement.style.display = 'none';
    openMenuBtn.style.display = 'block';
    mobileMenu.classList.remove('is-open');
    menuIconBurger.classList.remove('hidden');
    menuIconClose.classList.add('hidden');
  } else {
    navElement.style.display = 'none';
    openMenuBtn.style.display = 'block';
  }
}

window.addEventListener('resize', function() {
  handleResize();
});
  
handleResize();


