const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    // Anitmate Links
    navLinks.forEach((link, index) => {
        link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 2.5}s';
    });
}

navSlide();