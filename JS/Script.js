document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const menu = document.getElementById('menu');
  const overlay = document.getElementById('overlay');
  const gallery = document.getElementById('gallery');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const galleryImages = document.querySelectorAll('.gallery-img');

  let currentIndex = 0;
  const imageWidth = 430;
  

  menuIcon.addEventListener('click', () => {
    menu.classList.add('active');
    overlay.classList.add('active');
  });

  overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
  });

  const updateGallery = () => {
    const offset = -currentIndex * imageWidth;
    gallery.style.transform = `translateX(${offset}px)`;
  };

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateGallery();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < galleryImages.length - 1) {
      currentIndex++;
      updateGallery();
    }
  });

  

});


