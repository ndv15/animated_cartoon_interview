const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

const stats = document.querySelectorAll('.stat');

function animateStat(el) {
  const target = Number(el.dataset.target || 0);
  const start = performance.now();
  const duration = 1200;

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(target * progress);
    el.textContent = `${value}%`;
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = '1';
      animateStat(entry.target);
    }
  });
}, { threshold: 0.6 });

stats.forEach((s) => observer.observe(s));
