

export function loader() {
  return `<div class="loader book">
  <figure class="page"></figure>
  <figure class="page"></figure>
  <figure class="page"></figure>
</div>
<h1 class="loader-title">Reading</h1>`
}



//example

// import { loader } from "./loader"

// const body = document.querySelector('body')

// async function renderBooks() {
//   body.innerHTML = loader();
//   await body.innerHTML = renderBooks; // func fetch 
// }