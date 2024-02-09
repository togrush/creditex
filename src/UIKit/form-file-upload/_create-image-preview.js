export function createImagePreview(control, file, previewBlock) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (e) {
      const image = new Image();

      image.classList.add('form-file-upload__preview-item');
      image.dataset.fileName = file.name;
      image.src = e.target.result;
      previewBlock.append(image);

      resolve();
    };

    reader.onerror = function (error) {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
}
