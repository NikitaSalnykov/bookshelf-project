
import Firebase from './firebase.js';

const email = 'taras_678@ukr.net';
const password = 'Taras_123432atdgbdd';
const userName = "Vasia";
let userIds = null;
const firebaseInstance = new Firebase();

//firebaseInstance.firebaseSignUp(email, password, userName);

//firebaseInstance.firebaseLogOut();

//firebaseInstance.firebaseSignIn(email, password);

firebaseInstance.onAuthStateChanged(function(user) {
    if (user) {
        const userId = user.uid;
        console.log('User is authenticated', userId);
        
        
        //firebaseInstance.firebaseAddBookToList(userId, '3234');
        // firebaseInstance.firebaseRemoveBookFromList(userId, '2234');
        //firebaseInstance.firebaseClearShoppingList(userId);

         firebaseInstance.firebaseSelectBooksFromList(userId).then(function(result) {
   if (result !== false) {
     console.log('Список книжок з корзини:', result);
   } else {
     console.log('Корзина порожня');
   }
 }).catch(function(error) {
   console.error('Помилка при отриманні списку книжок з корзини:', error);
 });
       return userId;
   } else {
     // Користувач неавторизований
       console.log('User is not authenticated');
       return false;
   }
    
});

//console.log('User is authenticated',userIds);