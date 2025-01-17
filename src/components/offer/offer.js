import { addPhoneMask } from 'Utils/masks/phone-mask';
import { goToRegistrationPage } from 'Utils/go-to-registration-page';
import { resetError } from 'Utils/errors/reset-error';

const offerControl = document.getElementById('offer-phone');
const offerButton = document.getElementById('offer-button');

addPhoneMask();
offerButton?.addEventListener('click', (event) => {
  event.preventDefault();
  goToRegistrationPage(offerControl, offerButton.dataset.regPagePath);
});

offerControl?.addEventListener('input', () => {
  resetError(offerControl);
});
