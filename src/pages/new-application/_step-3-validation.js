import { NEW_APPLICATION_PAGE } from 'Constants/constants';
import { showError } from 'Utils/errors/show-error';
import { ERRORS } from 'Constants/errors';
import { RegExps } from 'Constants/reg-exps';
import { resetError } from 'Utils/errors/reset-error';
import { radioValidation } from 'Utils/validation/radio-validation';

export function step3Validation(controls) {
  let isValid = true;

  controls.forEach((control) => {
    resetError(control);

    if (control.id === NEW_APPLICATION_PAGE.controlsIds.passport) {
      if (control.files.length <= 0) {
        showError(ERRORS.CE013(), control);
        isValid = false;
      }
    }

    if (
      control.id === NEW_APPLICATION_PAGE.controlsIds.passportSeries
      || control.id === NEW_APPLICATION_PAGE.controlsIds.passportNumber
      || control.id === NEW_APPLICATION_PAGE.controlsIds.passportDate
    ) {
      const currentRegExp = (() => {
        switch (control.id) {
          case NEW_APPLICATION_PAGE.controlsIds.passportNumber:
            return RegExps.VALID_PASSPORT_NUMBER;
          case NEW_APPLICATION_PAGE.controlsIds.passportDate:
            return RegExps.VALID_DATE;
          default:
            return RegExps.VALID_PASSPORT_SERIES;
        }
      })();
      if (!currentRegExp.test(control.value)) {
        showError(ERRORS.CE002(), control);
        isValid = false;
      }

      if (!control.value) {
        showError(ERRORS.CE013(), control);
        isValid = false;
      }
    }

    if (
      control.id === NEW_APPLICATION_PAGE.controlsIds.passportIssued
      || control.id === NEW_APPLICATION_PAGE.controlsIds.passportFio
    ) {
      if (!control.value) {
        showError(ERRORS.CE013(), control);
        isValid = false;
      }
    }
  });

  [
    document.getElementById(NEW_APPLICATION_PAGE.controlsIds.creditType),
    document.getElementById(NEW_APPLICATION_PAGE.controlsIds.collateralType),
  ]
    .map((radio) => radioValidation(radio))
    .forEach((validationResult) => {
      if (!validationResult.isChecked) {
        showError(ERRORS.CE014(), validationResult.control);
        isValid = false;
      }
    });

  return isValid;
}
