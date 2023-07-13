import Firebase from './firebase/firebase.js';
import { isKeyExists, load, save } from './storage.js';

const firebaseInstance = new Firebase();
const exists = isKeyExists('UserData');
const userData = load('UserData');
const userNameElement = document.querySelector('.userName');

if (exists) {
  var userTitle = document.querySelector('.userTitle');
  var singINButton = document.querySelector('.button-sing-in');
  var shopingLsit = document.getElementById('nav-item-shopping-list');
  shopingLsit.style.display = 'block';
  userTitle.style.display = 'block';
  singINButton.style.display = 'none';
  
  const userName = userData.userName;
  //console.log(userName);
  userNameElement.textContent = userName;
} else {
  firebaseInstance.onAuthStateChanged(function (user) {
    if (user) {
      const userId = user.uid;
      firebaseInstance.getUserData(userId).then(function (userData) {
        const userName = userData.name;
        save('UserData', { userID: userId, userName: userName });
        console.log('User is authenticated', userId);
        
        var userTitle = document.querySelector('.userTitle');
        var singINButton = document.querySelector('.button-sing-in');
        var shopingLsit = document.getElementById('nav-item-shopping-list');
        shopingLsit.style.display = 'block';
        userTitle.style.display = 'block';
        singINButton.style.display = 'none';
        
        userNameElement.textContent = userName;
      });
    } else {
      console.log('User is not authenticated');
      userNameElement.textContent = ''; // Встановлюємо пустий рядок як значення
      return false;
    }
  });
}