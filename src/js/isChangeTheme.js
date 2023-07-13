const checkBoxTheme = document.querySelector('#theme-switch');
const checkBoxThemeMobile = document.querySelector('#theme-switch-menu')
const body = document.querySelector('body');

const KEY_STORE = 'colorThemeChanger';

export default function onChangeTheme(event) {
  // alert();
  let value = '';
  if (event.currentTarget.checked) {
    // if checked, then we add dark theme(save in "value") and remove light theme
    value = 'dark-theme';
    body.classList.add(value);
    body.classList.remove('light-theme');
  } else {
    // otherwise, remove the dark and add the light theme
    value = 'light-theme';
    body.classList.remove('dark-theme');
    body.classList.add(value);
  }
  /* 
 Save the theme string in the browser's local storage(30).
On reload, the function pageStoredOnReboot(33) is triggered that the page is saved upon reload, i.e.,
to keep the theme on reload without changes.
*/
  /*
 When page reloads, then on (46) we call the function pageStoredOnReboot,
and function looks at which topic is saved.If there is a dark theme, then we put this class,
otherwise - a light theme 
*/
  localStorage.setItem(KEY_STORE, value);
}

function pageStoredOnReboot() {
  const storedValue = localStorage.getItem(KEY_STORE);

  if (storedValue) {
    body.classList.add(storedValue);
  } else {
    body.classList.add('light-theme');
  }

  if (storedValue === 'dark-theme') {
    checkBoxTheme.setAttribute('checked', true);
    checkBoxThemeMobile.setAttribute('checked', true);
  }
}
pageStoredOnReboot();
