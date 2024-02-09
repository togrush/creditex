import 'UIKit/form-password/form-password';
import 'Utils/masks/phone-mask';
import { AUTHORIZATION_PAGE_CONSTANTS } from 'Constants/constants';
import { phoneValidation } from 'Utils/validation/phone-validation';
import { passwordValidation } from 'Utils/validation/password-validation';
import { showError } from 'Utils/errors/show-error';
import { ERRORS } from 'Constants/errors';
import { resetError } from 'Utils/errors/reset-error';
import { handleFormSubmit } from 'Utils/handle-form-submit/handle-form-submit';
import { authorizationResponseHandler } from 'Components/authorization-form/_authorizationResponseHandler';
import { getControls } from 'Utils/get-controls';

const authorizationForm = document.getElementById(
  AUTHORIZATION_PAGE_CONSTANTS.authorization_form,
);
const phoneControl = document.getElementById(
  AUTHORIZATION_PAGE_CONSTANTS.phoneControl,
);
const passwordControl = document.getElementById(
  AUTHORIZATION_PAGE_CONSTANTS.passwordControl,
);
const authorizationFormControls = getControls(authorizationForm);

authorizationFormControls.forEach((control) => {
  control.addEventListener('input', () => {
    resetError(control);
  });
});

document
  .getElementById(AUTHORIZATION_PAGE_CONSTANTS.comeInButton)
  .addEventListener('click', (event) => {
    event.preventDefault();

    authorizationFormControls.forEach((control) => {
      resetError(control);
    });

    if (!phoneValidation(phoneControl)) {
      showError(ERRORS.CE001(), phoneControl);
    }
    if (!passwordValidation(passwordControl)) {
      showError(ERRORS.CE002(), passwordControl);
    }

    if (phoneValidation(phoneControl) && passwordValidation(passwordControl)) {
      handleFormSubmit(
        authorizationForm,
        authorizationForm.method,
        authorizationForm.action,
        authorizationResponseHandler,
        true,
        passwordControl,
      );
    }
  });
