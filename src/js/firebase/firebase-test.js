
import Firebase from './firebase.js';

const email = 'taras_678@ukr.net';
const password = 'Taras_123432atdgbdd';
const userName = "Vasiawwww";

const firebaseInstance = new Firebase();

//firebaseInstance.firebaseSignUp(email, password, userName);

//firebaseInstance.firebaseLogOut();

firebaseInstance.firebaseSignIn(email, password);

firebaseInstance.onAuthStateChanged(function (user) {
    if (user) {
        const userId = user.uid;
        console.log('User is authenticated', userId);
        
        
        //firebaseInstance.firebaseAddBookToList(userId, '6234');
        // firebaseInstance.firebaseRemoveBookFromList(userId, '5234');
        //firebaseInstance.firebaseClearShoppingList(userId);

        firebaseInstance.firebaseSelectBooksFromList(userId).then(function (result) {
            if (result !== false) {
                console.log('Список книжок з корзини:', result);
            } else {
                console.log('Корзина порожня');
            }
        }).catch(function (error) {
            console.error('Помилка при отриманні списку книжок з корзини:', error);
        });
        return userId;
    }
    else {
     
        console.log('User is not authenticated');
        return false;
    }
    
} 
  /*  }
}*/
);

//console.log('User is authenticated',userIds);
/*firebaseInstance.firebaseSignIn(email, password)
  .then((userData) => {
    if (userData) {
      console.log(userData);
    } else {
      console.log(false);
    }
  });*/