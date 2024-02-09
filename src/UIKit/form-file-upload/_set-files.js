export function setFiles(files, control) {
  const dT = new DataTransfer();
  Array.from(control.files)
    .concat(...files)
    .forEach((file) => {
      dT.items.add(new File([file], file.name));
    });
  control.files = dT.files;
}
