import { REGULAR_ANNUITY_CALCULATOR_CONSTANTS } from 'Constants/constants';

export function calcAnnuityPayments(loanAmount, loanTerm) {
  const monthlyInterestRate = REGULAR_ANNUITY_CALCULATOR_CONSTANTS.ANNUAL_INTEREST_RATE / 100 / 12;
  const totalPayments = loanTerm;
  const annuityCoefficient = (monthlyInterestRate * (1 + monthlyInterestRate) ** totalPayments)
    / ((1 + monthlyInterestRate) ** totalPayments - 1);

  const payments = [];

  let remainingLoanAmount = loanAmount;
  let totalLoanWithInterest = 0; // Инициализируем переменную для суммы займа с процентами

  for (let month = 1; month <= totalPayments; month++) {
    const interestPayment = remainingLoanAmount * monthlyInterestRate;
    const principalPayment = annuityCoefficient * loanAmount - interestPayment;
    remainingLoanAmount -= principalPayment;

    const totalPayment = principalPayment + interestPayment;

    payments.push({
      month,
      mainDebt: `${((principalPayment / totalPayment) * 100).toFixed(2)}%`,
      percents: `${((interestPayment / totalPayment) * 100).toFixed(2)}%`,
      paymentAmount: totalPayment.toFixed(2),
      principalPayment: principalPayment.toFixed(2),
      interestPayment: interestPayment.toFixed(2),
    });

    totalLoanWithInterest += totalPayment; // Суммируем сумму займа с процентами
  }

  return {
    loanAmount,
    loanTerm,
    totalLoanWithInterest: totalLoanWithInterest.toFixed(2),
    payments,
  };
}
