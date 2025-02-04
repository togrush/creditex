export function showToast(message, isError = false) {
  const toastElement = document.createElement('div');
  toastElement.textContent = message;
  toastElement.classList.add('toast', isError ? 'toast-error' : 'toast-success');
  document.body.appendChild(toastElement);

  setTimeout(() => {
    toastElement.classList.add('visible');
  }, 100);

  setTimeout(() => {
    toastElement.classList.remove('visible');
    setTimeout(() => {
      document.body.removeChild(toastElement);
    }, 300);
  }, 5000);
}
