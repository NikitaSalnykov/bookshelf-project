import onChangeTheme from './isChangeTheme.js';
 const checkBoxTheme = document.querySelector('#theme-switch');
 const checkBoxThemeMobile = document.querySelector('#theme-switch-menu')

checkBoxTheme.addEventListener('change', onChangeTheme);
checkBoxThemeMobile.addEventListener('change', onChangeTheme);

