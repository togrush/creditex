import { isSuccess } from 'Utils/handle-form-submit/_isSuccess';
import { errorsProcessingFromResponse } from 'Utils/errors/errors-processing-from-response';

export function restorePasswordRequestHandler(response, controlsArrayOrForm) {
  if (!isSuccess(response)) {
    errorsProcessingFromResponse(response, controlsArrayOrForm);
  }
}
