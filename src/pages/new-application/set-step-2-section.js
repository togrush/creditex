import { NEW_APPLICATION_PAGE } from 'Components/start-work/constants/constants';

export function setStep2Section(control) {
  const step2FormSection = document.getElementById(
    NEW_APPLICATION_PAGE.sections.step2,
  );
  if (control.value === 'ip') {
    step2FormSection
      .querySelector('.new-application__ip')
      .classList.remove('visually-hidden');
    step2FormSection
      .querySelector('.new-application__ooo')
      .classList.add('visually-hidden');
  }

  if (control.value === 'ooo') {
    step2FormSection
      .querySelector('.new-application__ooo')
      .classList.remove('visually-hidden');
    step2FormSection
      .querySelector('.new-application__ip')
      .classList.add('visually-hidden');
  }
}
