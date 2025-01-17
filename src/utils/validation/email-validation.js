import { RegExps } from 'Components/start-work/constants/reg-exps';

export function emailValidation(control) {
  return RegExps.VALID_EMAIL.test(control.value.toLowerCase().trim());
}
