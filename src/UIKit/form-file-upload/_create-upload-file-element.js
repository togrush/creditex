import { deleteUploadedFile } from 'UIKit/form-file-upload/_delete-uploaded-file';
import { resetError } from 'Utils/errors/reset-error';

export function createUploadFileElement(
  file,
  uploadFileTemplate,
  control,
  isPreview,
) {
  const uploadFileElement = uploadFileTemplate.content
    .cloneNode(true)
    .querySelector('.form-file-upload__loaded-file');
  uploadFileElement.dataset.fileName = `${file.name}`;
  uploadFileElement.querySelector('p').textContent = `${file.name} (${(
    file.size
    / 1024
    / 1024
  ).toFixed(2)} Мбайт)`;
  const deleteIcon = uploadFileElement.querySelector(
    '.form-file-upload__delete',
  );
  deleteIcon.addEventListener('click', (delEvent) => {
    delEvent.stopPropagation();
    delEvent.preventDefault();
    resetError(control);
    deleteUploadedFile(control, deleteIcon, isPreview);
  });
  return uploadFileElement;
}
