let slideIndex = 0;
const slide = document.querySelectorAll('.slide');
const slides = document.querySelectorAll('.slides');

function showSlides() {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
    slide.forEach(slide => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}

function nextSlide() {
    if (slideIndex < slides.length - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    showSlides();
}

setInterval(nextSlide, 3000);
