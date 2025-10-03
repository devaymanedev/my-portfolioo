const hamburgerIcon = document.querySelector('.hamburger-icon');
const menuLinks = document.querySelector('.menu-links');

function toggleMenu() {
  if (!menuLinks || !hamburgerIcon) return;
  menuLinks.classList.toggle('open');
  hamburgerIcon.classList.toggle('active');
  const expanded = hamburgerIcon.classList.contains('active');
  hamburgerIcon.setAttribute('aria-expanded', expanded);
}

if (hamburgerIcon) {
  hamburgerIcon.addEventListener('click', toggleMenu);
  hamburgerIcon.setAttribute('tabindex', '0');
  hamburgerIcon.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });
}

document.addEventListener('click', (e) => {
  if (!menuLinks || !hamburgerIcon) return;
  if (!e.target.closest('.hamburger-menu') && menuLinks.classList.contains('open')) {
    menuLinks.classList.remove('open');
    hamburgerIcon.classList.remove('active');
    hamburgerIcon.removeAttribute('aria-expanded');
  }
});

window.addEventListener('resize', () => {
  if (!menuLinks || !hamburgerIcon) return;
  if (window.innerWidth > 768) {
    menuLinks.classList.remove('open');
    hamburgerIcon.classList.remove('active');
    hamburgerIcon.removeAttribute('aria-expanded');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill-progress').forEach(el => {
    const w = el.style.width || null;
    if (!w) return;
    el.style.width = '0';
    setTimeout(() => { el.style.width = w; }, 120);
  });
});
