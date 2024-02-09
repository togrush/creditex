document.querySelectorAll('input[type="password"]').forEach((control) => {
  const iconContainer = control
    .closest('.form-control')
    .querySelector('.form-control__password-toggle');
  iconContainer.addEventListener('click', () => {
    if (control.type === 'password') {
      iconContainer.classList.remove('form-control__password-toggle_password');
      control.type = 'text';
    } else {
      iconContainer.classList.add('form-control__password-toggle_password');
      control.type = 'password';
    }
  });
});
