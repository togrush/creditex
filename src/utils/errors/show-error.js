import { getErrorElement } from 'Utils/errors/get-error-element';

export function showError(errorFunc, control) {
  const errorElem = getErrorElement(control);

  if (errorElem) {
    errorElem.textContent = errorFunc;
    errorElem.classList.add('error_block', 'error_fade');
  }
}
