import { showError } from 'Utils/errors/show-error';
import { ERRORS } from 'Components/start-work/constants/errors';

export function isFileSizeValid(file, control) {
  if (file.size > control.size) {
    showError(ERRORS.CE011(file), control);
    return false;
  }
  return true;
}
