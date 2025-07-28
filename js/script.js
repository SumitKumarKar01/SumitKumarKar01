
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