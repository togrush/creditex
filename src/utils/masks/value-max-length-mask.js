export function valueMaxLengthMask(control, maxLength) {
  control.value = control.value.slice(0, maxLength);
}
