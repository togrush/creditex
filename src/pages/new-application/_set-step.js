import { NEW_APPLICATION_PAGE } from 'Components/start-work/constants/constants';

export function setStep(sectionNumber, thisIsSteps = false) {
  if (!thisIsSteps) {
    switch (sectionNumber) {
      case 1:
        return NEW_APPLICATION_PAGE.sections.step1;
      case 2:
        return NEW_APPLICATION_PAGE.sections.step2;
      case 3:
        return NEW_APPLICATION_PAGE.sections.step3;
      default:
        return NEW_APPLICATION_PAGE.sections.stepThanks;
    }
  } else {
    switch (sectionNumber) {
      case 1:
        return NEW_APPLICATION_PAGE.steps.step1;
      case 2:
        return NEW_APPLICATION_PAGE.steps.step2;
      case 3:
        return NEW_APPLICATION_PAGE.steps.step2;
      default:
        return NEW_APPLICATION_PAGE.steps.step3;
    }
  }
}
