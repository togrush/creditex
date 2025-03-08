document.addEventListener('DOMContentLoaded', () => {
  const cookieConsent = document.querySelector('.cookie-consent');
  const cookieModal = document.querySelector('.cookie-modal');
  const cookieLink = document.querySelector('.cookie-consent__link');
  const cookieButton = document.querySelector('.cookie-consent__button');
  const cookieModalClose = document.querySelector('.cookie-modal__close');

  if (!localStorage.getItem('cookieConsent')) {
    cookieConsent.style.display = 'flex';
  }

  cookieLink.addEventListener('click', (e) => {
    e.preventDefault();
    cookieModal.style.display = 'block';
  });

  cookieModalClose.addEventListener('click', () => {
    cookieModal.style.display = 'none';
  });

  cookieButton.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'true');
    cookieConsent.style.display = 'none';
  });
});
