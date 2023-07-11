import {
  markupUpSideCategories,
  markupAllCategories,
  markupCategorieItem,
  markupCategorieItemMore,
} from './markup.js';
import {loader} from './loader.js';
import { title } from 'process';

const sideCategoriesList = document.querySelector('.js_side_categories_list');
const titleCategorie = document.querySelector('.title_categories')
export const booksView = document.querySelector('.js_books_view');

async function createMarkupCategories() {
  const mark = await markupUpSideCategories();
  sideCategoriesList.insertAdjacentHTML('beforeend', mark);
}
createMarkupCategories();

async function createMarkupHero() {
  titleCategorie.textContent = ''
  booksView.innerHTML = loader();
  const mark = await markupAllCategories();
  booksView.innerHTML = mark;
}
createMarkupHero();

async function createMarkupCategorieItem(target) {
  titleCategorie.textContent = ''
  booksView.innerHTML = loader();
  const mark = await markupCategorieItem(target);
  booksView.innerHTML = mark;
}


sideCategoriesList.addEventListener('click', onClick);

async function onClick(e) {
  e.preventDefault();
  let target = e.target.textContent;

  if (!(e.target.tagName === 'A')) {
    return;
  }
  if (target === 'All categories') {
    createMarkupHero();
  } else {
    createMarkupCategorieItem(target);
  }
  [...e.currentTarget.children].map(el =>
    el.classList.remove('selected-category')
  );
  e.target.parentNode.classList.add('selected-category');
}

// Load More
booksView.addEventListener('click', onSeeMore);
async function onSeeMore(e) {
  let targetBtn = e.target.classList.contains('load-more-books');
  if (!targetBtn) {
    return;
  }
  let fetchtitle = e.target.closest('.category-books').firstChild.textContent;
  await createMarkupCategorieItemMore(fetchtitle);
  e.target.classList.add('no-btn');
  [...e.target.previousSibling.children].map(el =>
    el.classList.remove('hidden')
  );
}

async function createMarkupCategorieItemMore(target) {
  const listBooks = document.querySelectorAll('.list-books');
  const categorie = [...listBooks].filter(el => el.dataset.category === target);
  const mark = await markupCategorieItemMore(target);
  categorie[0].innerHTML = mark;
}
