/**
 * Downloads file by creating a HTML anchor and simulating a click. The anchor element
 * is removed once the click event has completed.
 * @param {string} uriToFile the URI to the file, eg. /docs.
 * @param {string} filename the name of the file, including extension, eg. cv.pdf.
 */
export default function downloadFile(
  uriToFile: string,
  filename: string
): void {
  const element: HTMLAnchorElement = document.createElement('a');

  element.href = `${uriToFile}/${filename}`;
  element.download = filename;
  element.style.display = 'none';

  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
