import Firebase from './firebase/firebase.js';
import storage from './storage.js';

const firebaseInstance = new Firebase();
const exists = storage.isKeyExists('UserData');
const load = storage.load('UserData');
const userNameElement = document.querySelector('.userName');
if (exists) {
    var userTitle = document.querySelector('.userTitle');
    var singINButton = document.querySelector('.button-sing-in');
    var shopingLsit = document.getElementById('nav-item-shopping-list');
    shopingLsit.style.display = 'block';
    userTitle.style.display = 'block';
    singINButton.style.display = 'none';
    const userName = load.userName;
    
userNameElement.textContent = userName;
} else {

firebaseInstance.onAuthStateChanged(function (user) {
    if (user) {
        const userId = user.uid;
        firebaseInstance.getUserData(userId).then(function (userData) {
            const userName = userData.name;
const userNameElement = document.querySelector('.userName');
userNameElement.textContent = userName;
storage.save('UserData', { userID: userId, userName: userName });            
        });

            
            console.log('User is authenticated', userId);
            
            
            var userTitle = document.querySelector('.userTitle');
            var singINButton = document.querySelector('.button-sing-in');
            var shopingLsit = document.getElementById('nav-item-shopping-list');
            shopingLsit.style.display = 'block';
            userTitle.style.display = 'block';
            singINButton.style.display = 'none';
            
           
       
    }
    else {
        console.log('User is not authenticated');
        return false;
    }
});
    
}



