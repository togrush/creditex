import { calcAnnuityPayments } from 'Components/annuity-calculator/_calc-annuity-payments';
import { getLocaleString } from 'Utils/get-locale-string';
import { pluralizer } from 'pluralizer-for-js';

export function preparePaymentControlValue(
  amountControl,
  paymentControl,
  termControl,
) {
  const calcAnnuityPaymentsResult = calcAnnuityPayments(
    amountControl.value,
    termControl.value,
  );

  paymentControl.value = `${getLocaleString(
    Math.round(calcAnnuityPaymentsResult.payments[0].paymentAmount),
  )} ${pluralizer(
    Math.round(calcAnnuityPaymentsResult.payments[0].paymentAmount),
    'рубль',
    'рубля',
    'рублей',
    false,
  )}`;

  return calcAnnuityPaymentsResult;
}
