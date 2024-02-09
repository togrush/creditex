import { showError } from 'Utils/errors/show-error';
import { ERRORS } from 'Constants/errors';
import { NEW_APPLICATION_PAGE } from 'Constants/constants';
import { resetError } from 'Utils/errors/reset-error';
import { phoneValidation } from 'Utils/validation/phone-validation';
import { emailValidation } from 'Utils/validation/email-validation';

export function step1Validation(controls) {
  let isValid = true;
  controls.forEach((control) => {
    resetError(control);
    if (control.id === NEW_APPLICATION_PAGE.controlsIds.userType) {
      if (!control.value) {
        isValid = false;
        showError(ERRORS.CE014(), control);
      }
    }
    if (control.id === NEW_APPLICATION_PAGE.controlsIds.fio) {
      if (!control.value.trim()) {
        isValid = false;
        showError(ERRORS.CE002(), control);
      }
    }

    if (control.id === NEW_APPLICATION_PAGE.controlsIds.inn) {
      if (!control.value.trim()) {
        isValid = false;
        showError(ERRORS.CE013(), control);
      }

      if (
        control.value
        && !document.getElementById(NEW_APPLICATION_PAGE.controlsIds.userType)
          .value
      ) {
        isValid = false;
        showError(ERRORS.CE015(), control);
      }

      if (
        document.getElementById(NEW_APPLICATION_PAGE.controlsIds.userType)
          .value === 'ooo'
        && control.value.length !== 10
      ) {
        isValid = false;
        showError(ERRORS.CE002(), control);
      }

      if (
        document.getElementById(NEW_APPLICATION_PAGE.controlsIds.userType)
          .value === 'ip'
        && control.value.length !== 12
      ) {
        isValid = false;
        showError(ERRORS.CE002(), control);
      }
    }

    if (control.id === NEW_APPLICATION_PAGE.controlsIds.email) {
      if (!emailValidation(control)) {
        isValid = false;
        showError(ERRORS.CE009(), control);
      }
    }

    if (control.id === NEW_APPLICATION_PAGE.controlsIds.phoneNumber) {
      if (!phoneValidation(control)) {
        isValid = false;
        showError(ERRORS.CE001(), control);
      }
    }
  });
  return isValid;
}
