import { phoneValidation } from 'Utils/validation/phone-validation';
import { showError } from 'Utils/errors/show-error';
import { sendData } from 'Utils/handle-form-submit/_send-data';
import { serializeData } from 'Utils/handle-form-submit/_serialize-data';
import { ERRORS } from 'Constants/errors';

export function goToRegistrationPage(offerControl, pagePath) {
  const form = offerControl.closest('form');
  if (offerControl.value) {
    if (phoneValidation(offerControl)) {
      sendData(form.method, serializeData([offerControl]), form.action, false);
      window.location.href = `${pagePath}?phoneNumber=${encodeURIComponent(
        offerControl.value.toString().replace(/[^\d]/g, ''),
      )}`;
    } else {
      showError(ERRORS.CE001(), offerControl);
    }
  } else {
    window.location.href = pagePath;
  }
}
