document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            showSlide(currentSlide - 1);
        } else if (event.key === 'ArrowRight') {
            showSlide(currentSlide + 1);
        }
    });
});