import {
  COMMON_CONSTANTS,
  CONFIRMATION_PAGE_CONSTANTS,
} from 'Components/start-work/constants/constants';
import { numbersOnly } from 'Utils/masks/numbers-only-mask';
import { resetError } from 'Utils/errors/reset-error';
import { handleFormSubmit } from 'Utils/handle-form-submit/handle-form-submit';
import { confirmationResponseHandler } from 'Components/confirmation-form/_confirmation-response-handler';
import { showError } from 'Utils/errors/show-error';
import { ERRORS } from 'Components/start-work/constants/errors';

const codeControl = document.getElementById(
  CONFIRMATION_PAGE_CONSTANTS.confirmationFormControls.confirmationCodeControl,
);

const confirmationForm = document.getElementById(
  CONFIRMATION_PAGE_CONSTANTS.confirmationForm,
);

codeControl.addEventListener('input', () => {
  resetError(codeControl);
  numbersOnly(codeControl);
});

document
  .getElementById(CONFIRMATION_PAGE_CONSTANTS.confirmationForwardButton)
  .addEventListener('click', (event) => {
    event.preventDefault();

    if (
      codeControl.value.length
      && codeControl.value.length <= COMMON_CONSTANTS.MAX_SMS_CODE_LENGTH
    ) {
      handleFormSubmit(
        confirmationForm,
        confirmationForm.method,
        confirmationForm.action,
        confirmationResponseHandler,
        true,
      );
    } else if (!codeControl.value.length) {
      showError(ERRORS.CE008(), codeControl);
    } else {
      showError(ERRORS.CE002(), codeControl);
    }
  });
