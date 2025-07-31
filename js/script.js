
function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');
  const mobileBackdrop = document.getElementById('mobileBackdrop');
  const closeToggle = document.querySelector('.mobile-close-toggle');
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  mobileNav.classList.toggle('active');
  mobileBackdrop.classList.toggle('active');
  if (mobileNav.classList.contains('active')) {
    closeToggle.classList.add('show');
    menuToggle.classList.add('hide');
  } else {
    closeToggle.classList.remove('show');
    menuToggle.classList.remove('hide');
  }
}
function closeMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');
  const mobileBackdrop = document.getElementById('mobileBackdrop');
  const closeToggle = document.querySelector('.mobile-close-toggle');
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  mobileNav.classList.remove('active');
  mobileBackdrop.classList.remove('active');
  closeToggle.classList.remove('show');
  menuToggle.classList.remove('hide');
}
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeMobileMenu();
  }
});
// Add scroll effect for mobile header
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Drag to scroll functionality for photo gallery
document.addEventListener('DOMContentLoaded', function() {
  const photoGrid = document.querySelector('.photo-grid');
  
  if (photoGrid) {
    let isDown = false;
    let startX;
    let scrollLeft;

    // Mouse events for desktop drag scrolling
    photoGrid.addEventListener('mousedown', (e) => {
      isDown = true;
      photoGrid.classList.add('dragging');
      startX = e.pageX - photoGrid.offsetLeft;
      scrollLeft = photoGrid.scrollLeft;
      photoGrid.style.cursor = 'grabbing';
    });

    photoGrid.addEventListener('mouseleave', () => {
      isDown = false;
      photoGrid.classList.remove('dragging');
      photoGrid.style.cursor = 'grab';
    });

    photoGrid.addEventListener('mouseup', () => {
      isDown = false;
      photoGrid.classList.remove('dragging');
      photoGrid.style.cursor = 'grab';
    });

    photoGrid.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - photoGrid.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      photoGrid.scrollLeft = scrollLeft - walk;
    });

    // Set initial cursor style
    photoGrid.style.cursor = 'grab';
    
    // Prevent default drag behavior on images
    const photoCards = photoGrid.querySelectorAll('.photo-card');
    photoCards.forEach(card => {
      card.addEventListener('dragstart', (e) => {
        e.preventDefault();
      });
    });
  }
});

// Photo gallery navigation function
function scrollPhotoGallery(direction) {
  const photoGrid = document.querySelector('.photo-grid');
  if (!photoGrid) return;
  
  const cardWidth = photoGrid.querySelector('.photo-card').offsetWidth;
  const gap = 24; // 1.5rem = 24px
  const scrollAmount = cardWidth + gap;
  
  // Check current scroll position
  const currentScroll = photoGrid.scrollLeft;
  const maxScroll = photoGrid.scrollWidth - photoGrid.clientWidth;
  
  if (direction === 'left') {
    if (currentScroll <= 0) {
      // At the beginning, trigger bounce animation
      photoGrid.classList.add('bounce-left');
      setTimeout(() => photoGrid.classList.remove('bounce-left'), 400);
      return;
    }
    
    photoGrid.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'right') {
    if (currentScroll >= maxScroll) {
      // At the end, trigger bounce animation
      photoGrid.classList.add('bounce-right');
      setTimeout(() => photoGrid.classList.remove('bounce-right'), 400);
      return;
    }
    
    photoGrid.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}