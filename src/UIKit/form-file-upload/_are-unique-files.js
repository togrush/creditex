import { isAlreadyAddedToControl } from 'UIKit/form-file-upload/_is-already-added-to-control';

export function areUniqueFiles(files, control) {
  for (let index = files.length - 1; index >= 0; index--) {
    const file = files[index];
    if (isAlreadyAddedToControl(file, control)) {
      files.splice(index, 1);
    }
  }
  return files;
}
