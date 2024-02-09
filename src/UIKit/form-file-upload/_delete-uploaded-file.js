import { showEmpty } from 'UIKit/form-file-upload/_show-empty';

export function deleteUploadedFile(control, delIcon, isPreview) {
  const formFileUploadElement = control.closest('.form-file-upload');
  const { fileName } = delIcon.closest('.form-file-upload__loaded-file').dataset;
  const dt = new DataTransfer();
  const previewBlock = formFileUploadElement.querySelector('#preview');

  Array.from(control.files)
    .filter((file) => file.name !== fileName)
    .forEach((file) => {
      dt.items.add(file);
    });
  control.files = dt.files;

  if (isPreview) {
    formFileUploadElement
      .querySelector('#preview')
      .querySelectorAll('img')
      .forEach((img) => {
        if (img.dataset.fileName === fileName) {
          img.remove();
        }
      });
  }

  delIcon.closest('.form-file-upload__loaded-file').remove();

  if (!control.files.length) {
    showEmpty(
      control.closest('.form-file-upload').querySelector('#loaded'),
      control.closest('.form-file-upload').querySelector('#empty'),
    );
  }

  if (!previewBlock.querySelectorAll('img').length) {
    previewBlock.classList.add('visually-hidden');
  }
}
