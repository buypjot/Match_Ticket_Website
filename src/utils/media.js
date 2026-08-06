export function getMediaUrl(path) {
  if (path == "") return '';
  /*  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:') || path.startsWith('blob:')) {
     return path;
   } */

  return `https://app.matchticket.in/${path}`;
}
