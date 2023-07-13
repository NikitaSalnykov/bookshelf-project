import { booksAPI } from './booksAPI.js';
const API = new booksAPI();
import axios from "axios";

const bookCategories = document.querySelector('.categories');
const book_title = document.querySelector('.book-title');
// bookCategories.addEventListener('click', data => console.log(data.target))
let preventTarget;
function addhh () {
	

API.getBookByCategoryLists({})
	.then(data => {
		const arrC4 = data.data;
		console.log(arrC4)
		bookCategories.innerHTML = `<li class="allCat bold">ALL CATEGORIES</li>` + arrC4.map(({ list_name }) => `<li>${list_name}</li>`).join('')

		// return arrC4
		preventTarget = document.querySelector('.allCat');
	}
	)
	.catch(e => console.log(e));
	
}

addhh();

	console.log('qqq')
	bookCategories.addEventListener('click', function(event) {
		let example = event.target.textContent;
		book_title.innerHTML = `${example}`

		console.log(event.target.textContent);
		preventTarget.classList.remove('bold');
		preventTarget = event.target;
		preventTarget.classList.add('bold');
	
		// API.getBookByCategoryLists({})
		// .then(data => {
		// 	const arrC4 = data.data;
		// 	console.log(arrC4)
		// 	bookCategories.innerHTML = `<li>ALL CATEGORIES</li>` + arrC4.map(({ list_name }) => `<li>${list_name}</li>`).join('')
		// 	event.target.classList.add('bold');
		// 	// return arrC4
		// }
		// )
		// .catch(e => console.log(e));
		// console.log('fg')
		// event.target.classList.add('bold');
	});




// const bookCategories = document.querySelector('.categories');
// bookCategories.addEventListener('click', data => console.dir(data))



// API.getBookByCategoryLists({})
// 	.then(data => {
// 		const arrC4 = data.data;
// 		console.log(arrC4)
// 		bookCategories.innerHTML = `<li>ALL CATEGORIES</li>` + arrC4.map(({ list_name }) => `<li>${list_name}</li>`).join('')
// 	}
// 	)
// 	.catch(e => console.log(e));

