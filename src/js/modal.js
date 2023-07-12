import {
  markupModal,
} from './markup.js';
import { onClick,checkBook } from './add-to-cart.js';
import { booksView } from './sidebarCategories.js';
const overlay = document.querySelector('#overlay-modal');
const closeButton = document.querySelector('.js-modal-close');
const modalBook = document.querySelector('.modal-book');
// const modalShoppingList = document.querySelector('.js-cart-list')
const newModal = document.querySelector('.new-modal')

let bookId = ''

function closeModal() {
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

export async function createMarkupModal(bookId) {
  const mark = await markupModal(bookId);
  newModal.innerHTML = mark;
  const addBook = document.querySelector('.add-book-button');
  checkBook(addBook);
  addBook.addEventListener('click', onClick);
}

booksView.addEventListener('click', onBook);

async function onBook(e) {
  try {
    bookId = e.target.closest('.outlineli').dataset.id;
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




