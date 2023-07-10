import {
  getCategoryList,
  getBestSellers,
  getCategory,
  getBook,
} from './API.js';

import { cutTitle } from './cutTitles.js';

import image1 from '../images/modal-images/image1.png';
import image2 from '../images/modal-images/image2.png';
import image3 from '../images/modal-images/image3.png';

const titleCategories = document.querySelector('.title_categories');

export function markupUpSideCategories() {
  const marcup = getCategoryList().then(resp => {
    return resp
      .map(
        ({ list_name }) => `
      <li>
      <a href="#" class="side-category">${list_name}</a>
      </li>`
      )
      .join('');
  });

  return marcup;
}

export function markupAllCategories() {
  const marcup = getBestSellers().then(resp => {
    return resp
      .map(({ list_name, books }) => {
        const allCategoriesTitlePage = `Best Sellers Books`;
        const startTitle = allCategoriesTitlePage
          .split(' ')
          .splice(0, allCategoriesTitlePage.split(' ').length - 1)
          .join(' ');
        const endTitle =
          allCategoriesTitlePage.split(' ')[
            allCategoriesTitlePage.split(' ').length - 1
          ];
        titleCategories.innerHTML = `${startTitle} <span class="category_title_last_word">${endTitle}<span>`;
        return (
          ` <li class="category-books"><h2 class="adition-category-title">${list_name}</h2><ul class="list-books" data-category="${list_name}">` +
          books
            .map(
              ({
                book_image = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.freepik.com%2Fpremium-psd%2Fblank-cover-book-mockup_6814948.htm&psig=AOvVaw1pv5Qa3fm2txSvUlVovAqz&ust=1687133787207000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCwj6LFy_8CFQAAAAAdAAAAABAF',
                author = 'anonymous author',
                title = 'book without title',
                _id,
              }) => {
                title = cutTitle(title);
                author = cutTitle(author);
                return `<li class="outlineli hidde" data-id="${_id}">
                <div class="book-tumb">

                <img class="book_temp" src="${book_image}" width="335" heigth="485" loading="lazy" alt="${title}">
                <p class="book-tumb-text">quick view</p>
                </div>
                <div class="book-info">
                <h2 class="book-info-title">${title}</h2>
                <p class="book-info-autor">${author}</p>
                </div>
                </li>`;
              }
            )
            .join('') +
          `</ul><button class="load-more-books">see more</button></li>`
        );
      })
      .join('');
  });

  return marcup;
}

export function markupCategorieItem(target) {
  const marcup = getCategory(target).then(resp => {
    return resp

      .map(
        ({
          list_name,
          book_image = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.freepik.com%2Fpremium-psd%2Fblank-cover-book-mockup_6814948.htm&psig=AOvVaw1pv5Qa3fm2txSvUlVovAqz&ust=1687133787207000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCwj6LFy_8CFQAAAAAdAAAAABAF',
          title = 'book without title',
          author = 'anonymous author',
          _id,
        }) => {
          const startTitle = list_name
            .split(' ')
            .splice(0, list_name.split(' ').length - 1)
            .join(' ');
          title = cutTitle(title);
          author = cutTitle(author);
          const endTitle =
            list_name.split(' ')[list_name.split(' ').length - 1];
          titleCategories.innerHTML = `${startTitle} <span class="category_title_last_word">${endTitle}<span>`;
          return `

        <li class="outlineli" data-id="${_id}">
        <div class="book-tumb">
        <img class="book_temp" src="${book_image}" width="335" heigth="485" loading="lazy" alt="${title}">
        <p class="book-tumb-text">quick view</p>
        </div>
        <div class="book-info">
        <h2 class="book-info-title">${title}</h2>
        <p class="book-info-autor">${author}</p>
        </div>
        </li>`;
        }
      )
      .join('');
  });

  return marcup;
}

// Отрисовка на кнопку See More
export async function markupCategorieItemMore(target) {
  const marcup = await getCategory(target).then(resp => {
    return resp
      .map(({ list_name, book_image, title, author, description, _id }) => {
        title = cutTitle(title);
        author = cutTitle(author);
        return `
        <li class="outlineli" data-id="${_id}">
        <div class="book-tumb">
        <img class="book_temp" src="${book_image}" width="335" heigth="485" loading="lazy" alt="${title}">
        <p class="book-tumb-text">quick view</p>
        </div>
        <div class="book-info">
        <h2 class="book-info-title">${title}</h2>
        <p class="book-info-autor">${author}</p>
        </div>
        </li>`;
      })
      .join('');
  });
  return marcup;
}

const modalContent = document.querySelector('.modal-content');

export async function markupModal(bookId) {

  const markup = await getBook(bookId).then(
    ({ book_image, title, author, description, _id, buy_links }) => `
    <div class="modal-content-book">
<div class="book-modal" data-book-id="${_id}">
      <img class="modal-image-book" src="${book_image}" alt="Book cover" />
      <div class="modal-info">
      <h3 class="modal-title-book">${title}</h3>
      <p class="modal-author-book">${author}</p>
      <p class="modal-description-book">${
        description || 'Oopps. No description'}</p>
      </div>
    </div>
  </div>
  <ul class="shopping-link-list-book">
    <li class="shopping-link-item-book">
      <a
        href="${buy_links[0].url}"
        target="_blank"
        rel="noreferrer noopener"
        class="shopping-link"
      >
        <img
          class="shopping-link-image"
          src="${image1}"
          width="62px"
          height="19px"
          alt="Amazon-link"
      /></a>
    </li>
    <li class="shopping-link-item">
      <a href="${buy_links[1].url}"
      target="_blank"
      rel="noreferrer noopener"
      class="shopping-link">
        <img
          class="shopping-link-image"
          src="${image2}"
          width="33px"
          height="32px"
          alt="Applebook-link"
      /></a>
    </li>
    <li class="shopping-link-item">
      <a href="${buy_links[4].url}"
      target="_blank"
      rel="noreferrer noopener"
      class="shopping-link">
        <img
          class="shopping-link-image"
          src="${image3}"
          width="38px"
          height="36px"
          alt="Shops-link"
      /></a>
    </li>
  </ul>
  <button class="add-book-button js-btn-add" type="submit" data-id=${_id}>add to shopping list</button>

  <p class="under-remove-btn-text text-hidden">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
    `
  );
  console.log(markup);
  return markup;
}


