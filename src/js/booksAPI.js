// https://books-backend.p.goit.global/api-docs/
// https://books-backend.p.goit.global/books/category-list
// https://books-backend.p.goit.global/books/top-books
// https://books-backend.p.goit.global/books/category?category=selectedCategory
// https://books-backend.p.goit.global/books/ bookId


import axios from "axios";

export class booksAPI {
	#BASE_URL = 'https://books-backend.p.goit.global';

async getBookByCategoryLists() {
	const resp = await axios.get(`${this.#BASE_URL}/books/category-list`)
	if (!resp.statusText === 'OK') {
		throw new Error('Not found')
	}
	return resp;
};

async getBookByCategory(categoryList) {
	console.log(categoryList);
	const resp = await axios.get(`${this.#BASE_URL}/books/${categoryList}`)
	if (!resp.statusText === 'OK') {
		throw new Error('Not found')
	}
	return resp;
};

async getBestSellers(topBooks) {
      console.log(topBooks);
		const resp = await axios.get(`${this.#BASE_URL}/books/${topBooks}`)
			if (!resp.statusText === 'OK') {
				throw new Error('Not found')
			}
		return resp;
}

async getBookById(bookId) {
   console.log(bookId);
	const resp = await axios.get(`${this.#BASE_URL}/books/${bookId}`)
	if (!resp.statusText === 'OK') {
		throw new Error('Not found')
	}
	return resp;
}
};
