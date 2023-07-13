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
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const userId = userCredential.user.uid;
      return this.getUserData(userId)
        .then((userData) => {
          const name = userData && userData.name ? userData.name : 'NONAME';
            
            return { userId: userId, name: name };
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === 'auth/wrong-password') {
        Notiflix.Notify.failure('Password is incorrect');
      } else {
        Notiflix.Notify.failure('Sign In Error:', errorMessage);
      }

      return { userId: null, name: 'NONAME' };
    });
}

    getUserData(userId) {
  return firebase.database().ref('users/' + userId).once('value')
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        throw new Error('User data not found');
      }
    });
    }
    
//LogOutFunction
        firebaseLogOut() {
firebase.auth().signOut()
    .then(() => {
      
    Notiflix.Notify.success('SignOut is Success');
    })
    .catch((error) => {
      
    Notiflix.Notify.failure('SignOut Error',error);
    });
    }

//check user if auth
  onAuthStateChanged(callback) {
    return firebase.auth().onAuthStateChanged(callback);
    }
    
//Add book to list
    firebaseAddBookToList(userID, bookID)
    {
  firebase.database().ref('users/' + userID + '/shoppingList').push({
  bookID: bookID,
})
      .then(() => {
    Notiflix.Notify.success('Book was successfully added');
})
      .catch((error) => {
    Notiflix.Notify.failure('Error. Book was not added.',error);
});
        
    }


// remove book from list
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

        
        bookKeys.forEach((key) => {
          shoppingListRef.child(key).remove();
        });
        Notiflix.Notify.success('Book was removed.');
      } else {
          Notiflix.Notify.failure('Book was not found.');
      }
    })
            .catch((error) => {
        Notiflix.Notify.failure('Error during removing Book:', error);
      
    });
        
    }

    // clean all ShoppingList
    firebaseClearShoppingList(userID)
    
    {
    const shoppingListRef = firebase.database().ref('users/' + userID + '/shoppingList');
    shoppingListRef
    .remove()
    .then(() => {
     Notiflix.Notify.success('Shopping List was cleaned.');
    })
        .catch((error) => {
        Notiflix.Notify.failure('Error during cleaning Shopping List:', error);
      
    });
    }
// getting the  list of book id 
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
    console.error('Error getting the list :', error);
    return false;
  });
        
    }



}

export default Firebase;