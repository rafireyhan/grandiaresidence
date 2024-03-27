//Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const logo = document.getElementById('logo');

    if(window.scrollY > fixedNav){
        header.classList.add('navbar-fixed');
        header.classList.add('text-black');
        header.classList.remove('text-white');
        logo.src = "public/images/logo.png";
    }else{
        header.classList.remove('navbar-fixed');
        header.classList.add('text-white');
        header.classList.remove('text-black');
        logo.src = "public/images/logo-white.png";
    }
}

//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const header = document.querySelector('header');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
    header.classList.toggle('text-black');
    header.classList.remove('text-white');
});