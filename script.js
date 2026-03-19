// ---- Hamburger menu toggle ----
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });
}

// ---- Highlight active nav link based on current page ----
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const links = document.querySelectorAll('.nav-links a');

links.forEach(function (link) {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
