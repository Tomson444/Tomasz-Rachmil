document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll('.red-circle');
    const textContainer = document.querySelector('.text-container');

    circles.forEach(circle => {
        circle.addEventListener('click', function() {
            const text = this.getAttribute('data-text');
            textContainer.textContent = text;
            textContainer.style.display = 'block';
        });
    });
});
