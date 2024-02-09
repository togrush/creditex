export function isAlreadyAddedToControl(file, control) {
  let isAlreadyAddedToControl = false;
  for (const controlFile of control.files) {
    if (file.name === controlFile.name && file.size === controlFile.size) {
      isAlreadyAddedToControl = true;
    }
  }
  return isAlreadyAddedToControl;
}
