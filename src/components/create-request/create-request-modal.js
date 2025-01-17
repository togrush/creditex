import { REGISTRATION_PAGE_CONSTANTS } from 'Components/start-work/constants/constants';

import 'UIKit/form-password/form-password';
import { addPhoneMask } from 'Utils/masks/phone-mask';
import { registrationValidation } from 'Components/registration-form/_registration-validation';
import { handleFormSubmit } from 'Utils/handle-form-submit/handle-form-submit';
import { getControls } from 'Utils/get-controls';

const registrationForm = document.getElementById(
  'registrationFormModal',
);
const registrationControls = getControls(registrationForm);

const phoneControl = document.getElementById(
  REGISTRATION_PAGE_CONSTANTS.registrationFormControls.phoneControlModal,
);

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

document
  .getElementById('comeInButtonModal')
  ?.addEventListener('click', (event) => {
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
      document.body.classList.add('no-scroll'); // Убираем скролл
    });
  });

  closeModalButtons?.forEach((button) => {
    button.addEventListener('click', () => {
      modal.setAttribute('hidden', '');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('no-scroll'); // Возвращаем скролл
    });
  });

  modal?.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.setAttribute('hidden', '');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('no-scroll'); // Возвращаем скролл
    }
  });
});
