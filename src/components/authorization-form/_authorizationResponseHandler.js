import { errorsProcessingFromResponse } from 'Utils/errors/errors-processing-from-response';
import { isSuccess } from 'Utils/handle-form-submit/_isSuccess';
import { AUTHORIZATION_PAGE_CONSTANTS } from 'Components/start-work/constants/constants';

export function authorizationResponseHandler(
  response,
  controlsArrayOrForm,
  defaultErrorControl = null,
) {
  if (!isSuccess(response)) {
    errorsProcessingFromResponse(
      response,
      controlsArrayOrForm,
      defaultErrorControl,
    );
  } else {
    window.location.href = document.getElementById(
      AUTHORIZATION_PAGE_CONSTANTS.authorization_form,
    ).dataset.locationHref;
  }
}
