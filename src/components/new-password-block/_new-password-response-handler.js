import { isSuccess } from 'Utils/handle-form-submit/_isSuccess';
import { errorsProcessingFromResponse } from 'Utils/errors/errors-processing-from-response';
import { NEW_PASSWORD_PAGE } from 'Constants/constants';
import { newPasswordShowMessage } from 'Components/new-password-block/_new-password-show-message';

export function newPasswordResponseHandler(
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
    newPasswordShowMessage(false);
  } else {
    newPasswordShowMessage(true);
    window.setTimeout(() => {
      window.location.href = document.getElementById(
        NEW_PASSWORD_PAGE.form,
      ).dataset.locationHref;
    }, 5000);
  }
}
