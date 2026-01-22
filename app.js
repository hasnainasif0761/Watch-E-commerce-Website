var ham = document.querySelector(".hamburger");
var navLinks = document.querySelector(".nav-links");

ham.addEventListener('click',()=>{
    navLinks.classList.toggle("open");
})