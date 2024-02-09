document.querySelectorAll('.card-issued__numbers').forEach((numbersBlock) => {
  const transformable = Array.from(numbersBlock.querySelectorAll('span'))[2];
  transformable.textContent = new Intl.NumberFormat('ru-RU').format(
    Number(transformable.textContent),
  );
});
