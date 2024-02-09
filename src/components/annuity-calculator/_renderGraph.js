export function renderGraph(graphBlock, loanCalculationObject) {
  if (graphBlock.childElementCount !== 0) {
    graphBlock.innerHTML = '';
  }

  loanCalculationObject.payments.forEach((payment) => {
    const paymentColumn = document.createElement('div');
    const mainDebt = document.createElement('div');
    const percent = document.createElement('div');

    paymentColumn.classList.add('calculator__payment-column');

    mainDebt.classList.add('calculator__main-debt');
    mainDebt.style.height = `${payment.mainDebt}`;

    percent.classList.add('calculator__percent-column');
    percent.style.height = `${payment.percents}`;

    paymentColumn.append(percent);
    paymentColumn.append(mainDebt);
    graphBlock.append(paymentColumn);
  });
}
