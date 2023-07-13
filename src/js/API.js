import axios from 'axios';

const options = {
  method: 'get',
  baseURL: 'https://books-backend.p.goit.global/books/',
  url: '',
};

export async function getCategoryList() {
  options.url = 'category-list';
  const response = await axios(options).then(rep => rep.data).catch(error => {
    console.log(error.message);
  } );
  return response;
}

export async function getCategory(target) {
  options.url = `category?category=${target}`;
  const response = await axios(options).then(rep => rep.data).catch(error => {
    console.log(error.message);
  } );
  return response;
}

export async function getBestSellers() {
  options.url = 'top-books';
  const response = await axios(options).then(rep => rep.data).catch(error => {
    console.log(error.message);
  } );
  return response;
}

export async function getBook(bookId) {
  options.url = `${bookId}`;
  const response = await axios(options).then(rep => rep.data).catch(error => {
    console.log(error.message);
  } );
  return response;
}
