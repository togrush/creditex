import { NEW_PASSWORD_PAGE } from 'Components/start-work/constants/constants';

export function newPasswordHideMessage() {
  const message = document.getElementById(NEW_PASSWORD_PAGE.message);

  message.innerText = '';
  message.classList.add('visually-hidden');
  message.classList.remove(
    'new-password-block__message_success',
    'new-password-block__message_error',
  );
}
