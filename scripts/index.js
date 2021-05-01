const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

function hover(element) {
  element.setAttribute('src', '../img/Logo-hover.png');
}
  
function unhover(element) {
  element.setAttribute('src', '../img/Logo.png');
}