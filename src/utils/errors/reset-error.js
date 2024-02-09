import { getErrorElement } from 'Utils/errors/get-error-element';

export function resetError(control) {
  const errorElem = getErrorElement(control);

  if (errorElem) {
    if (
      errorElem.classList.contains('error_fade')
      && errorElem.classList.contains('error_block')
    ) {
      errorElem.classList.remove('error_fade');
      errorElem.classList.remove('error_block');
      errorElem.textContent = '';
    }
  }
}
