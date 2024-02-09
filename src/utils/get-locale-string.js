import { pluralizer } from 'pluralizer-for-js';

export function getLocaleString(str, isYears) {
  const convertible = str.toString().replace(/\s/g, '');
  if (isYears) {
    return pluralizer(Number(convertible), 'месяц', 'месяца', 'месяцев', true);
  }

  return Number(convertible).toLocaleString('ru-RU', {
    style: 'decimal',
  });
}
