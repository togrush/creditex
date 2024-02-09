export function showUploaded(loadedBlock, emptyBlock) {
  loadedBlock.classList.remove('form-file-upload__text_hidden');
  emptyBlock.classList.add('form-file-upload__text_hidden');
}
