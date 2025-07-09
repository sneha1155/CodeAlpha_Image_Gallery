document.addEventListener('DOMContentLoaded', function () {
const images = document.querySelectorAll('.lightbox-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
let  currentIndex = 0;

//triggering lightbox when clicked on image
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

//closing when close button clicked
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

//closing when background clicked
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// On-screen arrow buttons
document.querySelector('.nav.left').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

document.querySelector('.nav.right').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

//keyboard key navigation
document.addEventListener('keydown', (e) =>{
    if(lightbox.style.display === 'flex'){
        if(e.key==='ArrowRight') {
            currentIndex = (currentIndex + 1) % images.length;
            lightboxImg.src = images[currentIndex].src;
        }
        else if(e.key==='ArrowLeft') {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            lightboxImg.src = images[currentIndex].src;
        }
        else if(e.key==='Escape') {
            lightbox.style.disply = 'none';
        }
    }
} )
});

