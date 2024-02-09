export function radioValidation(radioComponent) {
  let isChecked = false;
  const radioInputs = radioComponent.querySelectorAll('input[type="radio"]');
  radioInputs.forEach((radio) => {
    if (radio.checked) {
      isChecked = true;
    }
  });
  return {
    isChecked,
    control: radioInputs[0],
  };
}
