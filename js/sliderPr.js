// script.js

const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;

// Get the width of one product and calculate the total width for 4 products
const product = document.querySelector('.product');
const productWidth = product.offsetWidth;

function updateSlider() {
    const translateX = -(currentSlide * productWidth);
    slider.style.transform = `translateX(${translateX}px)`;
}

nextBtn.addEventListener('click', () => {
    if (currentSlide < slider.childElementCount - 5) { // Ensure it doesn't slide beyond total products
        currentSlide++;
        updateSlider();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
});
