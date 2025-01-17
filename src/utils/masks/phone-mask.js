export function addPhoneMask(controls = null) {
  function getInputNumbersValue(input) {
    return input.value.replace(/\D/g, '');
  }

  function onPhonePaste(e) {
    const input = e.target;
    const inputNumbersValue = getInputNumbersValue(input);
    const pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      const pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
      }
    }
  }

  // eslint-disable-next-line consistent-return
  function onPhoneInput(e) {
    const input = e.target;
    let inputNumbersValue = getInputNumbersValue(input);
    const { selectionStart } = input;
    let formattedInputValue = '';

    if (!inputNumbersValue) {
      input.value = '';
      return '';
    }

    if (input.value.length !== selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      // eslint-disable-next-line consistent-return
      return;
    }

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] === '9') inputNumbersValue = `7${inputNumbersValue}`;
      const firstSymbols = inputNumbersValue[0] === '8' ? '+7' : '+7';
      formattedInputValue = `${firstSymbols} `;
      input.value = `${firstSymbols} `;
      if (inputNumbersValue.length > 1) {
        formattedInputValue += `(${inputNumbersValue.substring(1, 4)}`;
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += `) ${inputNumbersValue.substring(4, 7)}`;
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += `-${inputNumbersValue.substring(7, 9)}`;
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += `-${inputNumbersValue.substring(9, 11)}`;
      }
    } else {
      formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
    }
    input.value = formattedInputValue;
  }

  function onPhoneKeyDown(e) {
    const inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode === 8 && inputValue.length === 1) {
      e.target.value = '';
    }
  }

  let telControls = [];

  if (!controls) {
    telControls = document?.querySelectorAll('input[type="tel"]');
  } else {
    telControls = controls;
  }

  telControls.forEach((phoneInput) => {
    phoneInput.addEventListener('keydown', onPhoneKeyDown);
    phoneInput.addEventListener('input', onPhoneInput, false);
    phoneInput.addEventListener('paste', onPhonePaste, false);
  });
}

addPhoneMask();
