import { RegExps } from 'Constants/reg-exps';

export function phoneValidation(control) {
  return RegExps.VALID_PHONE.test(
    control.value.toString().replace(/[^\d]/g, ''),
  );
}
