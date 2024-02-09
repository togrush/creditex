import {
  COMMON_CONSTANTS,
  RECOVERY_PASSWORD_PAGE_CONSTANTS,
} from 'Constants/constants';
import { showError } from 'Utils/errors/show-error';
import { ERRORS } from 'Constants/errors';
import { passwordValidation } from 'Utils/validation/password-validation';

export function recoveryPasswordValidation(controls) {
  let isValid = true;
  controls.forEach((control) => {
    if (
      control.id
      === RECOVERY_PASSWORD_PAGE_CONSTANTS.recoveryPasswordFormControls
        .confirmationCodeControl
    ) {
      if (
        !(
          control.value.length
          && control.value.length <= COMMON_CONSTANTS.MAX_SMS_CODE_LENGTH
        )
      ) {
        isValid = false;
        if (!control.value.length) {
          showError(ERRORS.CE008(), control);
        } else {
          showError(ERRORS.CE002(), control);
        }
      }
    }

    if (
      control.id
      === RECOVERY_PASSWORD_PAGE_CONSTANTS.recoveryPasswordFormControls
        .newPasswordControl
    ) {
      if (!passwordValidation(control)) {
        isValid = false;
        showError(ERRORS.CE005(), control);
      }
    }

    if (
      control.id
      === RECOVERY_PASSWORD_PAGE_CONSTANTS.recoveryPasswordFormControls
        .newPasswordRepeatControl
    ) {
      if (
        control.value
        !== document.getElementById(
          RECOVERY_PASSWORD_PAGE_CONSTANTS.recoveryPasswordFormControls
            .newPasswordControl,
        ).value
      ) {
        isValid = false;
        showError(ERRORS.CE006(), control);
      }
    }
  });
  return isValid;
}
