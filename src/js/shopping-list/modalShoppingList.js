import {
  markupModal,
} from '../markup.js';
import { onClick,checkBook } from '../add-to-cart.js';
import Firebase from '../firebase/firebase';
import { load } from '../storage';
import { markupFullCard, createEmptyCart } from './shoppingList'


const firebaseInstance = new Firebase();
const overlay = document.querySelector('#overlay-modal');
const closeButton = document.querySelector('.js-modal-close');
const modalBook = document.querySelector('.modal-book');
const modalShoppingList = document.querySelector('.js-cart-list')
const newModal = document.querySelector('.new-modal')
const cartListEl = document.querySelector('.js-cart-list');

let bookId = ''

const userId = load('UserData').userID

function closeModal() {
    firebaseInstance.onAuthStateChanged(function (user) {
    if (user) {
        const userId = user.uid;
      firebaseInstance.firebaseSelectBooksFromList(userId).then(async function (result) {
          // console.log('id', userId);
            if (result !== false) {
              const a = markupFullCard(result)
              Promise.all(a).then(markup => {
                cartListEl.innerHTML = markup.join('')
            })
            .catch(error => {
              console.error('Ошибка при ожидании результатов:', error);
            });

            } else {
                createEmptyCart()
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
)
  modalBook.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';

  closeButton.removeEventListener('click', closeModal);
  overlay.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', handleKeyPress);
}

function handleKeyPress(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

let updateCart = document;

export async function createMarkupModal(bookId) {
  const mark = await markupModal(bookId);
  newModal.innerHTML = mark;
  const addBook = document.querySelector('.add-book-button')
  checkBook(addBook)
  addBook.addEventListener('click', onClick)
}

modalShoppingList.addEventListener('click', onBook);

async function onBook(e) {
  if (e.target.nodeName === "BUTTON") { 
    bookId = e.target.closest('.js-card').dataset.id;
    firebaseInstance.firebaseRemoveBookFromList(userId, bookId)
    return firebaseInstance.onAuthStateChanged(function (user) {
    if (user) {
        const userId = user.uid;
      firebaseInstance.firebaseSelectBooksFromList(userId).then(async function (result) {
          // console.log('id', userId);
            if (result !== false) {
              
              const a = markupFullCard(result)
              Promise.all(a).then(markup => {
                cartListEl.innerHTML = markup.join('')
            })
            .catch(error => {
              console.error('Ошибка при ожидании результатов:', error);
            });

            } else {
                createEmptyCart()
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
);
   }
  
  try {
    bookId = e.target.closest('.js-card').dataset.id;
  } catch (error) {
    return;
  }
  if (!bookId) {
    return;
  }

  await createMarkupModal(bookId);
  createMarkupModal(bookId)
  const buttonAdd = document.querySelector('.js-btn-add')
  const textAfterButton = document.querySelector('.under-remove-btn-text')

  async function addClass() {
    modalBook.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    closeButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', handleKeyPress);
    closeButton.removeEventListener('click', onBook);
    overlay.removeEventListener('click', onBook);
  }
  addClass();
}


