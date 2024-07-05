//string

const fileName = 'title.qwerty.exe';

const posLastDote = fileName.trim().lastIndexOf('.');
const format = fileName.trim().slice(posLastDote + 1);

switch (format) {
  case 'txt':
  case 'doc':
    console.log('текст');
    break;
  case 'jpg':
  case 'png':
    console.log('зображення');
    break;
  case 'exe':
    console.log('інсталяшка');
    break;
  case 'html':
  case 'css':
  case 'js':
    console.log('веб');
    break;
  default:
    console.log('невідомий формат');
    break;
}
