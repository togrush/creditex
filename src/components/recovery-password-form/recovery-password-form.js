import { RECOVERY_PASSWORD_PAGE_CONSTANTS } from 'Components/start-work/constants/constants';
import { numbersOnly } from 'Utils/masks/numbers-only-mask';
import { resetError } from 'Utils/errors/reset-error';
import { recoveryPasswordValidation } from 'Components/recovery-password-form/_recovery-password-validation';
import { handleFormSubmit } from 'Utils/handle-form-submit/handle-form-submit';
import { recoveryPasswordResponseHandler } from 'Components/recovery-password-form/_recovery-password-response-handler';
import 'UIKit/form-password/form-password';
import { getControls } from 'Utils/get-controls';

const recoveryPasswordForm = document.getElementById(
  RECOVERY_PASSWORD_PAGE_CONSTANTS.recoveryPasswordForm,
);
const recoveryPasswordFormControls = getControls(recoveryPasswordForm);

recoveryPasswordFormControls.forEach((control) => {
  control.addEventListener('input', (event) => {
    resetError(event.target);
    if (
      event.target.id
      === RECOVERY_PASSWORD_PAGE_CONSTANTS.recoveryPasswordFormControls
        .confirmationCodeControl
    ) {
      numbersOnly(event.target);
    }
  });
});

document
  .getElementById(RECOVERY_PASSWORD_PAGE_CONSTANTS.newPasswordChangeButton)
  .addEventListener('click', (event) => {
    event.preventDefault();
    if (recoveryPasswordValidation(recoveryPasswordFormControls)) {
      handleFormSubmit(
        recoveryPasswordForm,
        recoveryPasswordForm.method,
        recoveryPasswordForm.action,
        recoveryPasswordResponseHandler,
        true,
      );
    }
  });
