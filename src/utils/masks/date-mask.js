export function dateMask(control) {
  const value = control.value.replace(/\D/g, '');

  const day = value.substring(0, 2);
  const month = value.substring(2, 4);
  const year = value.substring(4, 8);

  control.value = `${day}.${month}.${year}`;
}
