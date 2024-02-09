import { addPhoneMask } from 'Utils/masks/phone-mask';
import { RESTORE_PASSWORD_REQUEST_PAGE_CONSTANTS } from 'Constants/constants';
import { resetError } from 'Utils/errors/reset-error';
import { handleFormSubmit } from 'Utils/handle-form-submit/handle-form-submit';
import { showError } from 'Utils/errors/show-error';
import { ERRORS } from 'Constants/errors';
import { phoneValidation } from 'Utils/validation/phone-validation';
import { restorePasswordRequestHandler } from 'Components/restore-password-request-form/_restore-password-request-handler';

const restorePasswordRequestForm = document.getElementById(
  RESTORE_PASSWORD_REQUEST_PAGE_CONSTANTS.restorePasswordRequestForm,
);
const phoneNumberControl = document.getElementById(
  RESTORE_PASSWORD_REQUEST_PAGE_CONSTANTS.restorePasswordRequestFormControls
    .restorePasswordPhoneNumber,
);

addPhoneMask();

phoneNumberControl.addEventListener('input', () => {
  resetError(phoneNumberControl);
});

document
  .getElementById(
    RESTORE_PASSWORD_REQUEST_PAGE_CONSTANTS.restorePasswordRequestForwardButton,
  )
  .addEventListener('click', (event) => {
    event.preventDefault();

    if (phoneValidation(phoneNumberControl)) {
      handleFormSubmit(
        restorePasswordRequestForm,
        restorePasswordRequestForm.method,
        restorePasswordRequestForm.action,
        restorePasswordRequestHandler,
        true,
      );
    } else {
      showError(ERRORS.CE001(), phoneNumberControl);
    }
  });
