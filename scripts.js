document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.portfolio-card');
  cards.forEach((card) => {
    const img = card.querySelector('.portfolio-card__image img');
    if (!img) return;
    function onLoad() {
      card.classList.add('loaded');
    }
    if (img.complete) {
      onLoad();
    } else {
      img.addEventListener('load', onLoad);
      img.addEventListener('error', onLoad);
    }
  });
});

