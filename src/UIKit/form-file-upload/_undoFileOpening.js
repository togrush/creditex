export function undoFileOpening() {
  ['dragover', 'drop'].forEach((stoppableEvent) => {
    document.addEventListener(stoppableEvent, (event) => {
      event.preventDefault();
      return false;
    });
  });
}
