import { COMMON_CONSTANTS } from 'Components/start-work/constants/constants';

export function passwordValidation(control) {
  return control.value.length >= COMMON_CONSTANTS.MIN_PASSWORD_LENGTH;
}
