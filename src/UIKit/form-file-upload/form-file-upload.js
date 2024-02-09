import { undoFileOpening } from 'UIKit/form-file-upload/_undoFileOpening';
import { areUniqueFiles } from 'UIKit/form-file-upload/_are-unique-files';
import { addFiles } from 'UIKit/form-file-upload/_add-files';

const fileControls = document.querySelectorAll(
  'input[type="file"]:not([hidden])',
);

undoFileOpening();

fileControls.forEach((control) => {
  const dropZone = control.closest('#drop-zone');
  const isPreview = control.dataset.isPreview === 'true';
  const bufferInput = dropZone.querySelector(`#${control.id}-buffer`);

  dropZone.addEventListener('drop', (event) => {
    const files = areUniqueFiles([...event.dataTransfer.files], control);
    addFiles(control, files, isPreview);
  });

  bufferInput.addEventListener('change', () => {
    if (bufferInput.files.length) {
      const files = areUniqueFiles([...bufferInput.files], control);
      bufferInput.value = '';
      addFiles(control, files, isPreview);
    }
  });
});
