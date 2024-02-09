export function getCalculationResult(averageLoanAmount, borrowers) {
  return (averageLoanAmount.value / borrowers.value).toLocaleString('ru-RU', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}
