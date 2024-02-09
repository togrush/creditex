export function getControls(lookingInThisElement) {
  const controlsArray = [];
  const controlsTags = ['input', 'select'];

  controlsTags.forEach((tag) => {
    lookingInThisElement.querySelectorAll(tag).forEach((control) => {
      controlsArray.push(control);
    });
  });

  return controlsArray;
}
