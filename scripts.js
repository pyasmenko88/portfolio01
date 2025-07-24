document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('visited')) {
    document.body.classList.add('intro-animate');
    localStorage.setItem('visited', 'true');
  }
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

  const iframes = document.querySelectorAll('.video-wrapper iframe');
  iframes.forEach((iframe) => {
    iframe.addEventListener('load', () => {
      iframe.parentElement.classList.add('loaded');
    });
  });

  const modal = document.getElementById('modal');
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');

  function openModal(event) {
    const card = event.currentTarget;
    const id = card.getAttribute('data-modal-id');
      if (id) {
        const template = document.getElementById(id);
        if (template) {
          modal.querySelector('.modal-content').innerHTML = template.innerHTML;
        }
      }

      const images = modal.querySelectorAll('.modal-content img');
      images.forEach((img) => {
        function onImgLoad() {
          img.classList.add('loaded');
        }
        if (img.complete) {
          onImgLoad();
        } else {
          img.addEventListener('load', onImgLoad);
          img.addEventListener('error', onImgLoad);
        }
      });

      if (window.innerWidth < 768) {
        const firstHeading = modal.querySelector('.modal-content h1');
        if (firstHeading) {
          const h2 = document.createElement('h2');
          h2.innerHTML = firstHeading.innerHTML;
          firstHeading.replaceWith(h2);
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

