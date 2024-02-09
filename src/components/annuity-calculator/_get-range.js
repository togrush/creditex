import { REGULAR_ANNUITY_CALCULATOR_CONSTANTS } from 'Constants/constants';

export function getRange(target, controls) {
  let range = null;

  if (
    target.id
    === REGULAR_ANNUITY_CALCULATOR_CONSTANTS.rangeTextControls.AMOUNT_TEXT_NAME_ID
  ) {
    range = controls.amountControl;
  }

  if (
    target.id
    === REGULAR_ANNUITY_CALCULATOR_CONSTANTS.rangeTextControls.TERM_TEXT_NAME_ID
  ) {
    range = controls.termControl;
  }

  return range;
}
