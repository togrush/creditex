import { isSuccess } from 'Utils/handle-form-submit/_isSuccess';
import { errorsProcessingFromResponse } from 'Utils/errors/errors-processing-from-response';
import { REGISTRATION_PAGE_CONSTANTS } from 'Constants/constants';

export function registrationResponseHandler(response, controlsArray) {
  if (!isSuccess(response)) {
    errorsProcessingFromResponse(response, controlsArray);
  } else {
    window.location.href = `${
      document.getElementById(REGISTRATION_PAGE_CONSTANTS.registrationForm)
        .dataset.locationHref
    }&signedData=${response.SIGNED_DATA ? response.SIGNED_DATA : ''}`;
  }
}
