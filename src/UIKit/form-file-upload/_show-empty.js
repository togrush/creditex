export function showEmpty(loadedBlock, emptyBlock) {
  emptyBlock.classList.remove('form-file-upload__text_hidden');
  loadedBlock.classList.add('form-file-upload__text_hidden');
}
