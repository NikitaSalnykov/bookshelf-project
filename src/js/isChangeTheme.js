const checkBoxTheme = document.querySelector('#theme-switch');
const body = document.querySelector('body');

export default function onChangeTheme(event) {
    // alert();
  let value = '';
  if (event.currentTarget.checked) {
    value = 'dark-theme';
    body.classList.add(value);
    body.classList.remove('light-theme');
  } else {
    value = 'light-theme';
    body.classList.remove('dark-theme');
    body.classList.add(value);
  }
  
}
