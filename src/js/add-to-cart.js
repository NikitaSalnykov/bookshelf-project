import { load } from './storage';
import Firebase from "./firebase/firebase.js";

const dataBase = new Firebase;

const getUserId =()=> {
    return load('UserData').userID;
}

function onClick(event) {
    event.preventDefault()
    const button = event.target;
    const bookId = button.dataset.id;
    
    if (button.textContent=== `remove from the shopping list`) {
        dataBase.firebaseRemoveBookFromList(getUserId(), bookId);
        button.textContent = `Add to shopping list`;
        return;
    }
    dataBase.firebaseAddBookToList(getUserId(), bookId)
     dataBase.onAuthStateChanged(function (user) {
      if (user) {
        const userId = user.uid;
          dataBase.firebaseSelectBooksFromList(userId).then(function (result) {
          if (result===false) {
              return;
          } else if(result.includes(bookId)) {
              button.textContent = `remove from the shopping list`
              }
        }).catch(function (error) {
          console.error('Помилка :', error);
        });
      }
    
    }   
    );
    
}

const checkBook = (btn) => {
    dataBase.onAuthStateChanged(function (user) {
        const bookId = btn.dataset.id
      if (user) {
        const userId = user.uid;
          dataBase.firebaseSelectBooksFromList(userId).then(function (result) {
          if (result===false) {
              return;
          } else if(result.includes(bookId)) {
              btn.textContent = `remove from the shopping list`
              }
        }).catch(function (error) {
          console.error('Помилка :', error);
        });
      }
    
    }   
    );
}


export { onClick,checkBook };