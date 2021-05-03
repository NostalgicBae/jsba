const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = ()=>{
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
}

cancelBtn.onclick = ()=>{
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
}

window.onscroll = ()=>{
    this.scrollY > 190 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

function hover(element) {
    element.setAttribute('src', '../img/Logo-hover.png');
}
    
function unhover(element) {
    element.setAttribute('src', '../img/Logo.png');
}