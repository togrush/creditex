import { REGISTRATION_PAGE_CONSTANTS } from 'Components/start-work/constants/constants';

import 'UIKit/form-password/form-password';
import { addPhoneMask } from 'Utils/masks/phone-mask';
import { registrationValidation } from 'Components/registration-form/_registration-validation';
import { handleFormSubmit } from 'Utils/handle-form-submit/handle-form-submit';
import { getControls } from 'Utils/get-controls';

const registrationForm = document.getElementById('registrationForm');
const registrationControls = getControls(registrationForm);
const phoneControl = document
  .getElementById(REGISTRATION_PAGE_CONSTANTS.registrationFormControls.phoneControl);
const comeInButton = document.getElementById('comeInButton');
const termsCheckbox = document.getElementById('terms_agreement_page');
const privacyCheckbox = document.getElementById('privacy_policy_consent_page');

addPhoneMask();

export const handleCloseModal = () => {
  const modal = document.getElementById('modal');
  modal.setAttribute('hidden', '');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
};

if (phoneControl?.value) {
  phoneControl.value = new URLSearchParams(window.location?.search)?.get('phoneNumber');
  phoneControl.dispatchEvent(new Event('input'));
}

const updateButtonState = () => {
  if (termsCheckbox.checked && privacyCheckbox.checked) {
    comeInButton.disabled = false;
  } else {
    comeInButton.disabled = true;
  }
};

termsCheckbox?.addEventListener('change', updateButtonState);
privacyCheckbox?.addEventListener('change', updateButtonState);

document.getElementById('comeInButton')?.addEventListener('click', (event) => {
  event.preventDefault();
  if (registrationValidation(registrationControls)) {
    handleFormSubmit(
      registrationForm,
      registrationForm.method,
      registrationForm.action,
      null,
      true,
      null,
      'Ваша заявка принята, мы вам перезвоним',
    );
    handleCloseModal();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = modal?.querySelectorAll('[data-modal-close]');

  openModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      modal.removeAttribute('hidden');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('no-scroll');
    });
  });

  closeModalButtons?.forEach((button) => {
    button.addEventListener('click', () => {
      modal.setAttribute('hidden', '');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('no-scroll');
    });
  });

  modal?.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.setAttribute('hidden', '');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('no-scroll');
    }
  });
});
