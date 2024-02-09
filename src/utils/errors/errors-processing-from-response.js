import { ERRORS } from 'Constants/errors';
import { showError } from 'Utils/errors/show-error';

export function errorsProcessingFromResponse(
  response,
  controlsArrayOrForm,
  defaultErrorControl = null,
) {
  if (Array.isArray(controlsArrayOrForm)) {
    controlsArrayOrForm.forEach((control) => {
      control.removeAttribute('readonly');
      response['error-info'].forEach((controlError) => {
        if (controlError['control-name'] === control.name) {
          showError(
            controlError['control-name'] === control.name
              ? controlError['error-text']
              : ERRORS.CE003(),
            control,
          );
        } else if (
          defaultErrorControl
          && (controlError['control-name'] === undefined
            || controlError['control-name'] === 'undefined')
        ) {
          showError(ERRORS.CE004(), defaultErrorControl);
        }
      });
    });
  } else {
    const controlsArray = [];
    controlsArrayOrForm.querySelectorAll('input').forEach((input) => {
      controlsArray.push(input);
    });
    controlsArrayOrForm.querySelectorAll('select').forEach((select) => {
      controlsArray.push(select);
    });
    errorsProcessingFromResponse(response, controlsArray, defaultErrorControl);
  }
}
