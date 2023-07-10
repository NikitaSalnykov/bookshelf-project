import Firebase from './firebase/firebase.js';
import storage from './storage.js';
const firebaseInstance = new Firebase();
var logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.addEventListener('click', function() {

    firebaseInstance.firebaseLogOut();
storage.clear("UserData");
  var userTitle = document.querySelector('.userTitle');
    var singINButton = document.querySelector('.button-sing-in');
  var shopingLsit = document.getElementById('nav-item-shopping-list');
  shopingLsit.style.display = 'none';
  userTitle.style.display = 'none';
  singINButton.style.display = 'block';
    
    });