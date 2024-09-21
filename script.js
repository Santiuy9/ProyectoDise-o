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


function showPopup(event) {
    const href = event.currentTarget.getAttribute('href');
    if (!href) {
        event.preventDefault();
        document.getElementById('popup').style.display = 'flex';
        document.getElementById('popup').style.flexDirection = 'column';
        document.getElementById('popup-backdrop').style.display = 'block';
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup-backdrop').style.display = 'none';
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', showPopup);
});

document.getElementById('popup-backdrop').addEventListener('click', closePopup);
