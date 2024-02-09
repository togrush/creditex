import { showError } from 'Utils/errors/show-error';
import { ERRORS } from 'Constants/errors';

export function isFileSizeValid(file, control) {
  if (file.size > control.size) {
    showError(ERRORS.CE011(file), control);
    return false;
  }
  return true;
}
