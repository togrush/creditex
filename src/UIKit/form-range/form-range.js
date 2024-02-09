import { getLocaleString } from 'Utils/get-locale-string';
import { pluralizer } from 'pluralizer-for-js';
import { changeAfterChangingControlValue } from 'UIKit/form-range/_change-after-changing-control-value';

const ranges = document.querySelectorAll('.range');

ranges.forEach((range) => {
  const inputText = range.querySelector('input[type="text"]');
  const inputRange = range.querySelector('input[type="range"]');
  const customTrack = range.querySelector('.range__custom-track');
  const minValueElement = range.querySelector('.range__min');
  const maxValueElement = range.querySelector('.range__max');

  if (inputRange.dataset.isYears === 'true') {
    inputRange.min *= 12;
    inputRange.max *= 12;
    inputRange.dataset.startValue *= 12;
  }

  [minValueElement, maxValueElement].forEach((extremeValue) => {
    extremeValue.textContent = getLocaleString(extremeValue.textContent);
  });

  if (inputRange.dataset.startValue) {
    inputRange.value = inputRange.dataset.startValue;
  }

  changeAfterChangingControlValue(inputRange, inputText, customTrack);

  range.querySelectorAll('.range__postfix').forEach((postfix) => {
    postfix.textContent = pluralizer(
      Number(
        postfix.dataset.minPostfix
          ? range.querySelector('.range__min').textContent
          : range.querySelector('.range__max').textContent,
      ),
      inputText.dataset.pluralizeOne,
      inputText.dataset.pluralizeTwo,
      inputText.dataset.pluralizeFive,
      false,
    );
  });

  ['input', 'change'].forEach((eventType) => {
    inputRange.addEventListener(eventType, () => {
      changeAfterChangingControlValue(inputRange, inputText, customTrack);
    });
  });

  inputText.addEventListener('focus', () => {
    inputText.value = inputRange.value;
  });

  ['change', 'blur', 'keydown'].forEach((eventType) => {
    inputText.addEventListener(eventType, (event) => {
      if (
        (event.type === 'change' || event.type === 'blur')
        && Number(inputText.value) <= Number(inputRange.max)
        && Number(inputText.value) >= Number(inputRange.min)
      ) {
        if (event.type === 'change') {
          inputRange.value = inputText.value;
          inputRange.dispatchEvent(new Event('input'));
        }

        if (event.type === 'blur') {
          changeAfterChangingControlValue(inputRange, inputText, customTrack);
        }
      }
    });
  });
});
