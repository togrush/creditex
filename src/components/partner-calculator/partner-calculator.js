import { PARTNER_CALCULATOR_CONSTANTS } from 'Constants/constants';
import { getCalculationResult } from 'Components/partner-calculator/_get-calculation-result';
import { goToRegistrationPage } from 'Utils/go-to-registration-page';
import { resetError } from 'Utils/errors/reset-error';

const borrowers = document.getElementById(
  PARTNER_CALCULATOR_CONSTANTS.rangeControls.BORROWERS_NAME_ID,
);
const averageLoanAmount = document.getElementById(
  PARTNER_CALCULATOR_CONSTANTS.rangeControls.AVERAGE_LOAN_AMOUNT_NAME_ID,
);
const result = document.getElementById(PARTNER_CALCULATOR_CONSTANTS.RESULT_ID);
const calcPhoneControl = document.getElementById('partner-calc-phone');
const calcButton = document.getElementById('partner-calc-button');

result.textContent = getCalculationResult(averageLoanAmount, borrowers);

[borrowers, averageLoanAmount].forEach((control) => {
  control.addEventListener('input', () => {
    result.textContent = getCalculationResult(averageLoanAmount, borrowers);
  });
});

calcButton.addEventListener('click', (event) => {
  event.preventDefault();
  goToRegistrationPage(calcPhoneControl, calcButton.dataset.regPagePath);
});

calcPhoneControl.addEventListener('input', () => {
  resetError(calcPhoneControl);
});
