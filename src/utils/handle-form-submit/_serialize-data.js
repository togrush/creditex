export function serializeData(controlsArrayOrForm) {
  let data;
  if (Array.isArray(controlsArrayOrForm)) {
    data = new FormData();
    controlsArrayOrForm.forEach((control) => {
      control.setAttribute('readonly', '');
      data.append(control.name, control.value);
    });
  }

  if (
    !Array.isArray(controlsArrayOrForm)
    && controlsArrayOrForm !== null
    && typeof controlsArrayOrForm === 'object'
  ) {
    data = new FormData(controlsArrayOrForm);
  }
  // console.log(data);
  // data.forEach((value, key) => {
  //   console.log(`serializeData: ${key} - ${value}`);
  // });
  return data;
}
