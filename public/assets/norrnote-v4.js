(() => {
  const reveal = () => {
    const items = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(el => io.observe(el));
  };

  const parallax = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const stage = document.querySelector('.visual-stage');
    if (!stage || window.matchMedia('(max-width: 760px)').matches) return;
    const layers = [...stage.querySelectorAll('[data-parallax]')];
    stage.addEventListener('pointermove', (e) => {
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      layers.forEach((el) => {
        const depth = Number(el.dataset.parallax || 1);
        el.style.translate = `${x * depth * 8}px ${y * depth * 8}px`;
      });
    });
    stage.addEventListener('pointerleave', () => {
      layers.forEach((el) => { el.style.translate = ''; });
    });
  };

  reveal();
  parallax();
})();