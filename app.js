var ham = document.querySelector(".hamburger");
var navLinks = document.querySelector(".nav-links");
var incr = document.getElementById("incr");

ham.addEventListener('click',()=>{
    navLinks.classList.toggle("open");
})

function ShowAlert(){
    alert("Item Added to Cart Successfully 🎉");
}

function incrementCart(){
    let count = parseInt(incr.innerText) || 0;
    count++;
    incr.innerText = count;
}