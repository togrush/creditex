import { NEW_PASSWORD_PAGE } from 'Constants/constants';

export function newPasswordShowMessage(isSuccess) {
  const messageText = document.getElementById(NEW_PASSWORD_PAGE.message);

  if (isSuccess) {
    messageText.textContent = messageText.dataset.successMessageText;
    messageText
      .closest('.new-password-block__message')
      .classList.add('new-password-block__message_success');
  } else {
    messageText.textContent = messageText.dataset.errorMessageText;
    messageText
      .closest('.new-password-block__message')
      .classList.add('new-password-block__message_error');
  }
  messageText.classList.remove('visually-hidden');
}
