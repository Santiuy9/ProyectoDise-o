const buttonMenu = document.getElementById('buttonMenu');
const buttonCloseMenu = document.getElementById('buttonCloseMenu')
const listMenu = document.getElementById('listMenu');
const bgOpacity = document.getElementById('backgroundOpacity');

buttonMenu.addEventListener('click', () => {
    bgOpacity.classList.add('backgroundOpacityOpen');
    listMenu.classList.add('listMenuOpen');
});

buttonCloseMenu.addEventListener('click', () => {
    bgOpacity.classList.remove('backgroundOpacityOpen');
    listMenu.classList.remove('listMenuOpen');

})
