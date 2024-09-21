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

const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Opcional: Cambio automático de diapositivas cada 5 segundos
setInterval(nextSlide, 5000);

function showPopup(event) {
    const href = event.currentTarget.getAttribute('href');
    if (!href) {
        event.preventDefault();
        document.getElementById('popup').style.display = 'block';
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