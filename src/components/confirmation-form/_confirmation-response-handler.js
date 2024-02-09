import { isSuccess } from 'Utils/handle-form-submit/_isSuccess';
import { errorsProcessingFromResponse } from 'Utils/errors/errors-processing-from-response';
import { CONFIRMATION_PAGE_CONSTANTS } from 'Constants/constants';

export function confirmationResponseHandler(response, controlsArray) {
  if (!isSuccess(response)) {
    errorsProcessingFromResponse(response, controlsArray);
  } else {
    window.location.href = document.getElementById(
      CONFIRMATION_PAGE_CONSTANTS.confirmationForm,
    ).dataset.locationHref;
  }
}
