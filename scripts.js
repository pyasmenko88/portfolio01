document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.portfolio-card__image');
  containers.forEach((container) => {
    const img = container.querySelector('img');
    if (!img) return;
    function onLoad() {
      container.classList.add('loaded');
    }
    if (img.complete) {
      onLoad();
    } else {
      img.addEventListener('load', onLoad);
      img.addEventListener('error', onLoad);
    }
  });
});

