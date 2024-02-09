import { isFileExtensionValid } from 'UIKit/form-file-upload/_is-file-extension-valid';
import { isFileSizeValid } from 'UIKit/form-file-upload/_is-file-size-valid';

export function filesValidation(files, control) {
  let isFilesValid = true;

  files.forEach((file) => {
    if (!isFileExtensionValid(file, control)) {
      return (isFilesValid = false);
    }
    if (!isFileSizeValid(file, control)) {
      return (isFilesValid = false);
    }
  });

  return isFilesValid;
}
