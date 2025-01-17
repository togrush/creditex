import { showError } from 'Utils/errors/show-error';
import { ERRORS } from 'Components/start-work/constants/errors';

export function isFileExtensionValid(file, control) {
  if (
    !control.accept
      .split(', ')
      .includes(`.${file.name.split('.').pop().toLowerCase()}`)
  ) {
    showError(ERRORS.CE010(file), control);
    return false;
  }
  return true;
}
