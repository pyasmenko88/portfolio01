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

  const modal = document.getElementById('modal');
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');

  function openModal(event) {
    const card = event.currentTarget;
    const templateId = card.getAttribute('data-modal-id');
    if (templateId) {
      const tmpl = document.getElementById(templateId);
      if (tmpl) {
        modal.querySelector('.modal-content').innerHTML = tmpl.innerHTML;
      }
    }
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  cards.forEach((card) => {
    card.addEventListener('click', openModal);
  });

  overlay.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);
});

