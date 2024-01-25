// Toggle Kelas Active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika Humburger Menu di Klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};




//klik diluar sidebar untuk menghilangkan Nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click',function(e){
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) 
    {
        navbarNav.classList.remove('active');
    }
})