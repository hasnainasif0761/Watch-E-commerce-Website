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

function swapImage(img, imgSrc) {
    var image = document.getElementById(img);
    image.src = imgSrc
}

var ExpandPara = false;
function showPara() {
    var para = document.getElementById("showPara");
    if(!ExpandPara){
        para.innerHTML = ` Quis, animi architecto iste aspernatur, iure officia dolores veritatis praesentium voluptatem dolorem fugit earum reiciendis fuga temporibus cumque excepturi atque facere minus!<a href="#" onclick="showPara()">Hide para</a>`
        ExpandPara = true;
    }else{
        para.innerHTML = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. <a href="#" onclick="showPara()">Show Para</a>`    
        ExpandPara = false;
    }

}

function changeImage(imgId, imgSrc){
    var image = document.getElementById(imgId);

    if (image.style.display === 'none') {
        image.style.display = 'block';
        image.src = imgSrc;
    } else {
        image.style.display = 'none';
    }
}





