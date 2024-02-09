import { setStep } from './_set-step';

export function toggleSteps(fromStep, toStep) {
  document.getElementById(setStep(fromStep)).classList.add('visually-hidden');
  document.getElementById(setStep(toStep)).classList.remove('visually-hidden');

  if (
    ((fromStep === 1 || fromStep === 2) && (toStep === 1 || toStep === 2))
    || (fromStep === 3 && toStep === 4)
  ) {
    document
      .getElementById(setStep(fromStep, true))
      .classList.remove('form-step_active');
    document
      .getElementById(setStep(toStep, true))
      .classList.add('form-step_active');
  }

  window.scrollTo(0, 0);
}
