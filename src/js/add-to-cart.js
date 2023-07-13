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
    const successText = document.querySelector('.under-remove-btn-text')
    
    
    if (button.textContent=== `remove from the shopping list`) {
        dataBase.firebaseRemoveBookFromList(getUserId(), bookId);
      button.textContent = `Add to shopping list`;

      successText.classList.add('text-hidden')
              dataBase.firebaseAddBookToList(getUserId(), bookId)
      dataBase.onAuthStateChanged(function (user) {
          const userId = user.uid;
        dataBase.firebaseSelectBooksFromList(userId).then(function (result) {
          if (document.querySelector('.red-dot') && result === false) {
            document.querySelector('.red-dot').remove()
          } else {
                  document.querySelector('.red-dot').textContent = result.length
          }
        })
      })
        return;
    }
    dataBase.firebaseAddBookToList(getUserId(), bookId)
     dataBase.onAuthStateChanged(function (user) {
      if (user) {
        const userId = user.uid;
        dataBase.firebaseSelectBooksFromList(userId).then(function (result) {
          const a = document.querySelector('.nav-link-shopping')
          if (result.length > 0) {
            a.classList.add("animate__animated", "animate__headShake", "animate__slow");
            setTimeout(() => {
               a.classList.remove("animate__animated", "animate__headShake", "animate__slow")
            }, 1000);
            let beforeElement = document.createElement('span');
            if (document.querySelector('.red-dot')) {
              document.querySelector('.red-dot').remove()
            } 
            beforeElement.classList.add('red-dot');
            beforeElement.textContent = result.length
            a.prepend(beforeElement);  
          } else {
            document.querySelector('.red-dot').remove()
          }
          if (result===false) {
              return;
          } else if(result.includes(bookId)) {
              button.textContent = `remove from the shopping list`
              successText.classList.remove('text-hidden')
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
        const successText = document.querySelector('.under-remove-btn-text')
      if (user) {
        const userId = user.uid;
          dataBase.firebaseSelectBooksFromList(userId).then(function (result) {
          if (result===false) {
              return;
          } else if(result.includes(bookId)) {
              btn.textContent = `remove from the shopping list`
              successText.classList.remove('text-hidden')
              }
        }).catch(function (error) {
          console.error('Помилка :', error);
        });
      }
    
    }   
    );
}


export { onClick,checkBook };