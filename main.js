const iconMenuOpen = document.querySelector('.hamburgueIconOpen');
const iconMenuClose = document.querySelector('.hamburgueIconClose');
const menuOpen = document.querySelector('.menu');

iconMenuOpen.addEventListener('click', () =>{
    menuOpen.classList.toggle('inactive');
    iconMenuOpen.classList.toggle('inactive');
    iconMenuClose.classList.toggle('inactive');
})

iconMenuClose.addEventListener('click', () =>{
    menuOpen.classList.toggle('inactive');
    iconMenuOpen.classList.toggle('inactive');
    iconMenuClose.classList.toggle('inactive');
})