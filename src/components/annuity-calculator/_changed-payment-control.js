import { calcAnnuityPayments } from 'Components/annuity-calculator/_calc-annuity-payments';

let isChanging = false;

export function changedPaymentControl(
  value,
  amountControl,
  termControl,
  annualInterestRate,
) {
  if (isChanging) return;

  isChanging = true;

  const newTermControlValue = Number(
    calcAnnuityPayments(
      amountControl.value,
      termControl.value,
      annualInterestRate,
    ).loanTerm,
  );
  if (
    termControl.max >= newTermControlValue
    && termControl.min <= newTermControlValue
  ) {
    termControl.value = Math.ceil(amountControl.value / value);
    termControl.dispatchEvent(new Event('input'));
  } else if (
    newTermControlValue > termControl.max
    || newTermControlValue < termControl.min
  ) {
    amountControl.value = termControl.value * value;
    amountControl.dispatchEvent(new Event('input'));
  }

  isChanging = false;
}
