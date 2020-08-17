const menuBtn = document.getElementsByClassName('menu-btn');
const mobileMenu = document.getElementsByClassName('mobile-menu');
const menuLinks = document.querySelectorAll('.mobile-menu');
const backdrop = document.getElementById('backdrop');

const clickedBtn = function () {
    mobileMenu[0].classList.toggle('active');
    backdrop.classList.toggle('active');
};

menuBtn[0].addEventListener('click', clickedBtn);
menuLinks[0].addEventListener('click', clickedBtn);
backdrop.addEventListener('click', clickedBtn);
