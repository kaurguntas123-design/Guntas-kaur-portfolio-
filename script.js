const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const roles = ['Finance & Business Analysis', 'Financial Consulting', 'Digital Marketing'];
const target = document.getElementById('typed');
let roleIndex = 0, charIndex = roles[0].length, deleting = true;
function typeRole() {
  const current = roles[roleIndex];
  target.textContent = current.slice(0, charIndex);
  if (deleting) {
    charIndex--;
    if (charIndex < 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; charIndex = 0; }
  } else {
    charIndex++;
    if (charIndex > roles[roleIndex].length) { deleting = true; setTimeout(typeRole, 1300); return; }
  }
  setTimeout(typeRole, deleting ? 45 : 75);
}
setTimeout(typeRole, 1800);

const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.nav a');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, {rootMargin: '-35% 0px -55% 0px'});
sections.forEach(section => observer.observe(section));
