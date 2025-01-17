export const REGULAR_ANNUITY_CALCULATOR_CONSTANTS = {
  ANNUAL_INTEREST_RATE: 9,
  rangeControls: {
    AMOUNT_NAME_ID: 'range-control-calculator-amount',
    PAYMENT_NAME_ID: 'form-control-calculator-payment',
    TERM_NAME_ID: 'range-control-calculator-term',
  },
  rangeTextControls: {
    AMOUNT_TEXT_NAME_ID: 'range-control-text-calculator-amount',
    TERM_TEXT_NAME_ID: 'range-control-text-calculator-term',
  },
  GRAPH_BLOCK_ID: 'calculator-graph',
};

export const PARTNER_CALCULATOR_CONSTANTS = {
  rangeControls: {
    BORROWERS_NAME_ID: 'range-control-partner-calc-number-of-borrowers',
    AVERAGE_LOAN_AMOUNT_NAME_ID:
      'range-control-partner-calc-average-loan-amount',
  },
  RESULT_ID: 'partner-calc-result',
};

export const AUTHORIZATION_PAGE_CONSTANTS = {
  rememberUserCheckbox: 'auth-remember-user',
  phoneControl: 'auth-phone',
  passwordControl: 'auth-password',
  comeInButton: 'auth-come-in-button',
  authorization_form: 'authorization-form',
};

export const REGISTRATION_PAGE_CONSTANTS = {
  registrationForm: 'registration-form',
  registrationFormControls: {
    userTypeControl: 'registration-user-type',
    nameControl: 'registration-name',
    lastNameControl: 'registration-last-name',
    secondNameControl: 'registration-second-name',
    innControl: 'registration-inn',
    phoneControl: 'registration-phone',
    phoneControlModal: 'registration-phone-modal',
    passwordControl: 'registration-password',
    repeatPasswordControl: 'registration-repeat-password',
    rememberUserCheckbox: 'registration-remember-user',
  },
  toAuthButton: 'registration-to-auth-button',
  comeInButton: 'registration-come-in-button',
};

export const CONFIRMATION_PAGE_CONSTANTS = {
  confirmationForm: 'confirmation-form',
  confirmationFormControls: {
    confirmationCodeControl: 'confirmation-code',
    confirmationSignedData: 'confirmation-signed-data',
  },
  confirmationForwardButton: 'confirmation-forward-button',
};

export const RESTORE_PASSWORD_REQUEST_PAGE_CONSTANTS = {
  restorePasswordRequestForm: 'restore-password-request-form',
  restorePasswordRequestFormControls: {
    restorePasswordPhoneNumber: 'restore-password-phone-number',
  },
  restorePasswordRequestForwardButton:
    'restore-password-request-forward-button',
};

export const RECOVERY_PASSWORD_PAGE_CONSTANTS = {
  recoveryPasswordForm: 'recovery-password-form',
  recoveryPasswordFormControls: {
    confirmationCodeControl: 'recovery-password-confirmation-code',
    newPasswordControl: 'recovery-password-password',
    newPasswordRepeatControl: 'recovery-password-password-repeat',
  },
  newPasswordChangeButton: 'recovery-password-change-password-button',
};

export const BROKER_LK_PAGE = {
  copyReferralLinkButton: 'referral-link-copy-button',
};

export const NEW_APPLICATION_PAGE = {
  formId: 'new-application-form',
  controlsIds: {
    userType: 'user-type',
    inn: 'inn',
    fio: 'fio',
    email: 'email',
    phoneNumber: 'phone-number',
    card51: 'card-51',
    financialStatements: 'financial-statements',
    statementFromTheBank: 'statement-from-the-bank',
    passport: 'passport',
    passportSeries: 'passport-series',
    passportNumber: 'passport-number',
    passportIssued: 'passport-issued',
    passportDate: 'passport-date',
    passportFio: 'passport-fio',
    bankStatement: 'bank-statement',
    creditType: 'credit-type',
    collateralType: 'collateral-type',
  },
  buttons: {
    goToStep2: 'go-to-step-2',
    returnToStep1: 'return-to-step-1',
    skipToStep3: 'skip-to-step-3',
    goToStep3: 'go-to-step-3',
    returnToStep2: 'return-to-step-2',
    sendFromBankClient: 'send-from-bank-client',
    submit: 'submit-form',
  },
  sections: {
    step1: 'step-1',
    step2: 'step-2',
    step3: 'step-3',
    stepThanks: 'thanks-step',
  },
  steps: {
    step1: 'form-step-1',
    step2: 'form-step-2',
    step3: 'form-step-3',
  },
};

export const NEW_PASSWORD_PAGE = {
  form: 'new-password-form',
  controls: {
    password: 'new-password-password',
    repeat: 'new-password-password-repeat',
  },
  buttons: {
    back: 'new-password-back-button',
    submit: 'new-password-submit-button',
  },
  message: 'new-password-message-text',
};

export const COMMON_CONSTANTS = {
  MIN_PASSWORD_LENGTH: 6,
  MAX_SMS_CODE_LENGTH: 8,
};
