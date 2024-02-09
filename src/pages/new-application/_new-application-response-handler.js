import { isSuccess } from 'Utils/handle-form-submit/_isSuccess';
import { errorsProcessingFromResponse } from 'Utils/errors/errors-processing-from-response';
import { toggleSteps } from './_toggle-steps';

export function newApplicationResponseHandler(
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
    toggleSteps(3, 4);
  }
}
