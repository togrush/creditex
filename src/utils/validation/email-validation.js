import { RegExps } from 'Constants/reg-exps';

export function emailValidation(control) {
  return RegExps.VALID_EMAIL.test(control.value.toLowerCase().trim());
}
