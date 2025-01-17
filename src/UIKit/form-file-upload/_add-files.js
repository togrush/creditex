import { resetError } from 'Utils/errors/reset-error';
import { showError } from 'Utils/errors/show-error';
import { ERRORS } from 'Components/start-work/constants/errors';
import { filesValidation } from 'UIKit/form-file-upload/_files-validation';
import { setFiles } from 'UIKit/form-file-upload/_set-files';
import { processingAddedFiles } from 'UIKit/form-file-upload/_processing-added-files';

export function addFiles(control, files, isPreview) {
  resetError(control);
  if (!control.multiple) {
    control.value = '';
    control.closest('.form-file-upload').querySelector('#loaded').innerHTML = '';
    if (files.length > 1) {
      showError(ERRORS.CE012(files[0]), control);
      files = [files[0]];
    }
  }
  if (filesValidation(files, control)) {
    setFiles(files, control);
    processingAddedFiles(control, isPreview);
  }
}
