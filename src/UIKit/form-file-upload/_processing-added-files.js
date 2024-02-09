import { createUploadFileElement } from 'UIKit/form-file-upload/_create-upload-file-element';
import { createImagePreview } from 'UIKit/form-file-upload/_create-image-preview';
import { showUploaded } from 'UIKit/form-file-upload/_show-uploaded';
import { showEmpty } from 'UIKit/form-file-upload/_show-empty';

export async function processingAddedFiles(control, isPreview) {
  const formFileUploadElement = control.closest('.form-file-upload');
  const loadedFilesBlock = formFileUploadElement.querySelector('#loaded');
  const emptyFilesBlock = formFileUploadElement.querySelector('#empty');
  const uploadFileTemplate = formFileUploadElement.querySelector(
    '#loaded-file-template',
  );
  const previewBlock = formFileUploadElement.querySelector('#preview');

  loadedFilesBlock.innerHTML = '';
  previewBlock.innerHTML = '';

  const promises = [...control.files].map(async (file) => {
    const fileExtension = file.name.split('.').pop().toLowerCase();

    loadedFilesBlock.append(
      createUploadFileElement(file, uploadFileTemplate, control, isPreview),
    );

    if (
      (file.type.startsWith('image/')
        || ['jpg', 'jpeg', 'png'].includes(fileExtension))
      && isPreview
    ) {
      await createImagePreview(control, file, previewBlock);
    }
  });

  if (control.files.length) {
    showUploaded(loadedFilesBlock, emptyFilesBlock);
  } else {
    showEmpty(loadedFilesBlock, emptyFilesBlock);
  }

  await Promise.all(promises);

  if (previewBlock.querySelectorAll('img').length) {
    previewBlock.classList.remove('visually-hidden');
  } else {
    previewBlock.classList.add('visually-hidden');
  }
}
