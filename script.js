// Menu responsivo
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('toggle');

  // Acessibilidade aria-expanded
  const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
  burger.setAttribute('aria-expanded', !expanded);
});

burger.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    burger.click();
  }
});

// Modal galeria
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const galleryImages = document.querySelectorAll('.gallery-grid img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    openModal(img);
  });
  img.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(img);
    }
  });
});

function openModal(img) {
  modal.style.display = 'block';
  modal.setAttribute('aria-hidden', 'false');
  modalImg.src = img.src;
  modalImg.alt = img.alt;
  captionText.textContent = img.alt;
  closeBtn.focus();
}

closeBtn.addEventListener('click', closeModal);
closeBtn.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    closeModal();
  }
});

modal.addEventListener('click', e => {
  if (e.target === modal) {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}

// Formulário com validação simples

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', e => {
  e.preventDefault
