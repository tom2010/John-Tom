document.addEventListener('DOMContentLoaded', function() {
  const menu = document.querySelector('.navbar__menu');
  const toggle = document.getElementById('mobile-menu');
  const bars = toggle.querySelectorAll('.bar');

  toggle.addEventListener('click', function() {
    menu.classList.toggle('active');
    toggle.classList.toggle('is-active');
  });
});