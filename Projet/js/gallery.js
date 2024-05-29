let currentCategory = null;
let currentIndex = 0;

function showCategory(category) {
   
    const galleries = document.querySelectorAll('.gallery');
    galleries.forEach(gallery => {
        gallery.style.display = 'none';
    });

  
    const selectedGallery = document.getElementById(category);
    if (selectedGallery) {
        selectedGallery.style.display = 'block';
        currentCategory = category;
        currentIndex = 0;
        updateImages();
        setImagesDimensions(); 
    }
}

function updateImages() {
    const gallery = document.getElementById(currentCategory);
    const images = gallery.querySelectorAll('.image-container');

    images.forEach((container, index) => {
        if (index === currentIndex) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    });
}


function prevImage() {
    const gallery = document.getElementById(currentCategory);
    const images = gallery.querySelectorAll('.image-container');

    currentIndex = (currentIndex - 1 + images.length) === currentIndex ? 0 : currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateImages();
    setImagesDimensions(); 
}

function nextImage() {
    const gallery = document.getElementById(currentCategory);
    const images = gallery.querySelectorAll('.image-container');

    currentIndex = (currentIndex + 1) % images.length;
    updateImages();
    setImagesDimensions(); 
}

function firstImage() {
    currentIndex = 0;
    updateImages();
    setImagesDimensions(); 
}

function lastImage() {
    const gallery = document.getElementById(currentCategory);
    const images = gallery.querySelectorAll('.image-container');
    currentIndex = images.length - 1;
    updateImages();
    setImagesDimensions();
}
function setImagesDimensions() {
    const gallery = document.getElementById(currentCategory);
    const images = gallery.querySelectorAll('.image-container img');

    images.forEach(image => {
        image.style.width = '50%';
        image.style.height = '150%';
    });
}


document.addEventListener('DOMContentLoaded', () => {
    showCategory('rivers');
});
document.addEventListener('keydown', function(event) {
    if (currentCategory) {
        if (event.key === 'ArrowLeft') {
            prevImage();
        } else if (event.key === 'ArrowRight') {
            nextImage();
        }
    }
});