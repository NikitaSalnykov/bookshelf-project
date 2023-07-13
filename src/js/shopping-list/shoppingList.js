import symbolDefs from '../../images/symbol-defs.svg';
import emptyDtTab1x from '../../images/shop-list/empty-desktop-tablet@1x.png';
import emptyDtTab2x from '../../images/shop-list/empty-desktop-tablet@2x.png';
import emptyMob1x from '../../images/shop-list/empty-mobile@1x.png';
import emptyMob2x from '../../images/shop-list/empty-mobile@2x.png';
import amazonPng from '../../images/png-icons/shops/amazon-icon1x.png';
import amazonPng2x from '../../images/png-icons/shops/amazon-icon2x.png';
import appleBookPng from '../../images/png-icons/shops/applebook-icon1x.png';
import appleBookPng2x from '../../images/png-icons/shops/applebook-icon2x.png';
import bookShopPng from '../../images/png-icons/shops/bookshop-icon1x.png';
import bookShopPng2x from '../../images/png-icons/shops/bookshop-icon2x.png';

import Pagination from 'tui-pagination';
import { getBook } from '../API';
import { load } from '../storage';
import Firebase from '../firebase/firebase.js';
import { loader } from '../loader'

const firebaseInstance = new Firebase();

const modalShoppingList = document.querySelector('.js-card')
const cartEl = document.querySelector('.js-shopping-cart');
const cartListEl = document.querySelector('.js-cart-list');
const paginationContainer = document.getElementById('pagination');

const STORAGE_KEY = 'storage-data';

const userId = load('UserData').userID

firebaseInstance.onAuthStateChanged(function (user) {
  cartListEl.innerHTML = loader()
    if (user) {
        const userId = user.uid;
      firebaseInstance.firebaseSelectBooksFromList(userId).then(async function (result) {
            if (result !== false) {

              const a = markupFullCard(result)
              Promise.all(a).then(markup => {
                cartListEl.innerHTML = markup.join('')
            })
            .catch(error => {
              console.error('Ошибка при ожидании результатов:', error);
            });

            } else {
                createEmptyCart() ;
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





// let page;
// let currentPage = 1;
// let itemsPerPage;
// let visiblePages;
// let resizeTimeout;

// cartListEl.addEventListener('click', deleteCard);
// window.addEventListener('resize', changePagOptionsByScreenWidth);
// document.addEventListener('DOMContentLoaded', firstPageLoaded);

// createShoppingList();

// export function createShoppingList() {
//   const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   if (!storageData || storageData.length === 0) {
//     createEmptyCart(); // виклик функції створення порожнього кошика
//   } else {
//     const totalItems = storageData.length;
//     initPagination(totalItems); // ініціалізація пагінації
//     createFullCart(storageData, currentPage); // виклик функції створення списка кошика
//   }
// }

// Функція створення порожнього кошика
export function createEmptyCart() {
  const markup = `
    <div class="cart-empty">
      <p class="cart-empty__text">
        This page is empty, add some books and proceed to order.
      </p>
      <picture>
        <source
          srcset="
            ${emptyDtTab1x} 1x,
            ${emptyDtTab2x} 2x
          "
          media="(min-width: 768px)"
        />
        <img
          srcset="
            ${emptyMob1x} 1x,
            ${emptyMob2x} 2x
            "
          src="${emptyMob1x}"
          alt="Empty cart"
          loading="lazy"
          class="cart-empty__img"
        />
      </picture>
    </div>`;

  cartEl.innerHTML = markup;
}



// // Функція створення повного кошика
// function createFullCart(arr, page) {
//   const startIndex = (page - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const itemsOnPage = arr.slice(startIndex, endIndex);

//   const markup = itemsOnPage
//     .map(
//       ({
//         id,
//         book_image,
//         title,
//         author,
//         marketAmazon,
//         marketAppleBooks,
//         marketBookshop,
//         list_name,
//       }) =>
//         `
//       <li class="cart__item card js-card" data-book-id="${id}">
//         <picture>
//           <img
//             loading="lazy"
//             src="${
//               book_image
//                 ? book_image
//                 : './images/placeholders/very-small-placeholder.png'
//             }"
//             alt="${title}"
//             class="card__img"
//             width="110"
//             height="142"
//           />
//         </picture>
//         <div class="card__content">
//           <h3 class="card__title">${title.trim()}</h3>
//           <p class="card__category">${list_name.trim()}</p>
//           <p class="card__description">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//             Temporibus, architecto voluptate sint debitis ab fugit
//             laudantium nostrum dolore quisquam? Laboriosam nulla eum a,
//             quo, molestiae sed error possimus expedita veniam maiores
//             nam maxime provident quod blanditiis cum voluptate. A
//             provident corrupti dignissimos ullam. Porro architecto
//             maiores est ullam sed. Cum.
//             Temporibus, architecto voluptate sint debitis ab fugit
//             laudantium nostrum dolore quisquam? Laboriosam nulla eum a,
//             quo, molestiae sed error possimus expedita veniam maiores
//             nam maxime provident quod blanditiis cum voluptate. A
//             provident corrupti dignissimos ullam. Porro architecto
//             maiores est ullam sed. Cum.
//           </p>
//           <div class="card__footer">
//             <p class="card__author">${author.trim()}</p>
//             <ul class="card__shops list">
//               <li class="shop">
//                 <a
//                   href="${marketAmazon}"
//                   target="_blank"
//                   rel="noopener nofollow"
//                 >
//                   <img class="shop__image--amazon"
//                     loading="lazy"
//                     width="28"
//                     height="28"
//                     srcset="
//                       ${amazonPng} 1x,
//                       ${amazonPng2x} 2x
//                     "
//                     src="${amazonPng}"
//                     alt="amazon.com"
//                 /></a>
//               </li>
//               <li class="shop">
//                 <a
//                   href="${marketAppleBooks}"
//                   target="_blank"
//                   rel="noopener nofollow"
//                 >
//                   <img class="shop__image--apple"
//                     loading="lazy"
//                     width="28"
//                     height="28"
//                     srcset="
//                       ${appleBookPng} 1x,
//                       ${appleBookPng2x} 2x
//                     "
//                     src="${appleBookPng}"
//                     alt="books.apple.com"
//                 /></a>
//               </li>
//               <li class="shop">
//                 <a
//                   href="${marketBookshop}"
//                   target="_blank"
//                   rel="noopener nofollow"
//                 >
//                   <img class="shop__image--bookshop"
//                     loading="lazy"
//                     width="28"
//                     height="28"
//                     srcset="
//                       ${bookShopPng} 1x,
//                       ${bookShopPng2x} 2x
//                     "
//                     src="${bookShopPng}"
//                     alt="bookshop.org"
//                 /></a>
//               </li>
//             </ul>
//           </div>
//           <button
//             aria-label="delete" class="card__delete button js-card__delete"
//             type="button"
//           >
//             <svg class="icon-delete" width="22" height="22">
//               <use x="1%" href="${svgBin}#icon-bin"></use>
//             </svg>
//           </button>
//         </div>
//       </li>`
//     )
//     .join('');

//   cartListEl.innerHTML = markup;
// }

// // Функція ініціалізації пагінації
// function initPagination(totalItems) {
//   const pagination = new Pagination(paginationContainer, {
//     totalItems: totalItems,
//     itemsPerPage: itemsPerPage,
//     visiblePages: visiblePages,
//     centerAlign: true,
//     page: currentPage,
//   });
//   // Обробка подій пагінації та оновлення списку
//   pagination.on('afterMove', eventData => {
//     currentPage = eventData.page;
//     const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
//     createFullCart(storageData, currentPage);
//     return currentPage;
//   });
// }

// // Функція видалення картки + виклик функції перемальовки сторінки
// function deleteCard(evt) {
//   if (evt.target.classList.contains('js-card__delete')) {
//     const card = evt.target.closest('.js-card');
//     const bookId = card.dataset.bookId;
//     const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
//     const newStorageData = storageData.filter(object => object.id !== bookId);
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(newStorageData));
//     if (!newStorageData.length) {
//       card.remove();
//       createEmptyCart();
//     }

//     const countPages = Math.ceil(newStorageData.length / itemsPerPage);
//     if (countPages >= currentPage) {
//       card.remove();
//       createShoppingList();
//     } else {
//       page = countPages;
//       currentPage = countPages;
//       card.remove();
//       createShoppingList();
//     }
//   }
// }

// // Функція зміни кількості відображення карток на сторінці в залежності від ширини екрану
// function changePagOptionsByScreenWidth() {
//   const screenWidth = window.innerWidth;
//   if (screenWidth < 768) {
//     visiblePages = 1;
//     itemsPerPage = 4;
//     clearTimeout(resizeTimeout);

//     resizeTimeout = setTimeout(function () {
//       createShoppingList();
//     }, 200);
//   } else if (screenWidth >= 768) {
//     itemsPerPage = 3;
//     visiblePages = 3;
//     clearTimeout(resizeTimeout);

//     resizeTimeout = setTimeout(function () {
//       createShoppingList();
//     }, 200);
//   }
// }

// // Функція зміни кількості відображення карток на сторінці в залежності від ширини екрану при першій загрузці сторінки
// function firstPageLoaded() {
//   const screenWidth = window.innerWidth;

//   if (screenWidth < 768) {
//     visiblePages = 1;
//     itemsPerPage = 4;
//     createShoppingList();
//   } else if (screenWidth >= 768) {
//     itemsPerPage = 3;
//     visiblePages = 3;
//     createShoppingList();
//   }
// }

export function markupFullCard(arr) {
  const markup = arr.map(el =>
                 getBook(el).then(({
                  _id,
                  book_image,
                  title,
                  author,
                  marketAmazon,
                  marketAppleBooks,
                  marketBookshop,
                  list_name,
                }) => `
      <li class="cart__item card js-card" data-id="${_id}">
        <picture>
          <img
            loading="lazy"
            src="${
              book_image
                ? book_image
                : './images/placeholders/very-small-placeholder.png'
            }"
            alt="${title}"
            class="card__img"
            width="110"
            height="142"
          />
        </picture>
        <div class="card__content">
          <h3 class="card__title">${title.trim()}</h3>
          <p class="card__category">${list_name.trim()}</p>
          <p class="card__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus, architecto voluptate sint debitis ab fugit
            laudantium nostrum dolore quisquam? Laboriosam nulla eum a,
            quo, molestiae sed error possimus expedita veniam maiores
            nam maxime provident quod blanditiis cum voluptate. A
            provident corrupti dignissimos ullam. Porro architecto
            maiores est ullam sed. Cum.
            Temporibus, architecto voluptate sint debitis ab fugit
            laudantium nostrum dolore quisquam? Laboriosam nulla eum a,
            quo, molestiae sed error possimus expedita veniam maiores
            nam maxime provident quod blanditiis cum voluptate. A
            provident corrupti dignissimos ullam. Porro architecto
            maiores est ullam sed. Cum.
          </p>
          <div class="card__footer">
            <p class="card__author">${author.trim()}</p>
            <ul class="card__shops list">
              <li class="shop">
                <a
                  href="${marketAmazon}"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <img class="shop__image--amazon"
                    loading="lazy"
                    width="28"
                    height="28"
                    srcset="
                      ${amazonPng} 1x,
                      ${amazonPng2x} 2x
                    "
                    src="${amazonPng}"
                    alt="amazon.com"
                /></a>
              </li>
              <li class="shop">
                <a
                  href="${marketAppleBooks}"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <img class="shop__image--apple"
                    loading="lazy"
                    width="28"
                    height="28"
                    srcset="
                      ${appleBookPng} 1x,
                      ${appleBookPng2x} 2x
                    "
                    src="${appleBookPng}"
                    alt="books.apple.com"
                /></a>
              </li>
              <li class="shop">
                <a
                  href="${marketBookshop}"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <img class="shop__image--bookshop"
                    loading="lazy"
                    width="28"
                    height="28"
                    srcset="
                      ${bookShopPng} 1x,
                      ${bookShopPng2x} 2x
                    "
                    src="${bookShopPng}"
                    alt="bookshop.org"
                /></a>
              </li>
            </ul>
          </div>
          <button
            aria-label="delete" class="card__delete button js-card__delete"
            type="button"
          >
            <svg class="icon-delete" width="22" height="22">
              <use x="1%" href="${symbolDefs}#icon-delete"></use>
            </svg>
          </button>
        </div>
      </li>`)
              )
              
 return markup
}