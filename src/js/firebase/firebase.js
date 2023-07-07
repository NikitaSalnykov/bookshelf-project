import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import Notiflix from 'notiflix';

class Firebase {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyCo7Hm3k-gsUsQ5NwATa_fhUGPi8TrU9Lo",
      authDomain: "localhost",
      projectId: "bookshelf-2f203",
      databaseURL: "https://bookshelf-2f203-default-rtdb.firebaseio.com"
    };
    firebase.initializeApp(firebaseConfig);
  }

  firebaseSignUp(email, password, userName) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const userId = userCredential.user.uid;

        firebase.database().ref('users/' + userId).set({
          name: userName,
        });

        Notiflix.Notify.success('Sign Up Success');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Notiflix.Notify.failure('Email already in use');
        } else {
          Notiflix.Notify.failure('Registration failed: ' + error.message);
        }
      });
    }
    //SingIn Function
    firebaseSignIn(email, password) {
firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
         const userId = userCredential.user.uid;
      
        Notiflix.Notify.success('Sign in Success');
        return userId;
    })
     .catch((error) => {
      
      const errorCode = error.code;
         const errorMessage = error.message;
         
      if (errorCode === 'auth/wrong-password') {
        Notiflix.Notify.failure('Password is incorect');
      } else {
        Notiflix.Notify.failure('Sing In Error:', errorMessage);
         }
        return false; 
    });
    }
//LogOutFunction
        firebaseLogOut() {
firebase.auth().signOut()
    .then(() => {
      
    Notiflix.Notify.success('SignOut is Success');
    })
    .catch((error) => {
      
    Notiflix.Notify.success('SignOut Error',error);
    });
    }

//check user if auth
  onAuthStateChanged(callback) {
    return firebase.auth().onAuthStateChanged(callback);
    }
    

    firebaseAddBookToList(userID, bookID)
    {
  firebase.database().ref('users/' + userID + '/shoppingList').push({
  bookID: bookID,
})
.then(() => {
  console.log('Дані успішно додано до бази даних');
})
.catch((error) => {
  console.error('Помилка при записі даних:', error);
});
        
    }



    firebaseRemoveBookFromList(userID, bookID)
    {
        const shoppingListRef = firebase.database().ref('users/' + userID + '/shoppingList');
        shoppingListRef
    .orderByChild('bookID')
    .equalTo(bookID)
    .once('value')
    .then((snapshot) => {
      if (snapshot.exists()) {
        const bookKeys = Object.keys(snapshot.val());

        // Видалення кожної книжки з бази даних за ключем
        bookKeys.forEach((key) => {
          shoppingListRef.child(key).remove();
        });

        console.log(`Книжка з bookID ${bookID} видалена з корзини.`);
      } else {
        console.log(`Книжка з bookID ${bookID} не знайдена в корзині.`);
      }
    })
    .catch((error) => {
      console.error('Помилка при видаленні книжки з корзини:', error);
    });
        
    }

    firebaseClearShoppingList(userID)
    
    {
    const shoppingListRef = firebase.database().ref('users/' + userID + '/shoppingList');
    shoppingListRef
    .remove()
    .then(() => {
      console.log('Корзину очищено.');
    })
    .catch((error) => {
      console.error('Помилка при очищенні корзини:', error);
    });
    }

    firebaseSelectBooksFromList(userID)
    {
var shoppingListRef = firebase.database().ref('users/' + userID + '/shoppingList');

  return shoppingListRef.once('value').then(function(snapshot) {
    var shoppingListData = snapshot.val();

    if (shoppingListData) {
      var bookIds = Object.values(shoppingListData).map(function(book) {
        return book.bookID;
      });
      return bookIds;
    } else {
      return false;
    }
  }).catch(function(error) {
    console.error('Помилка при отриманні списку книжок з корзини:', error);
    return false;
  });
        
    }



}

export default Firebase;