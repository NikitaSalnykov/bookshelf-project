function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i),i("kyEFX").register(JSON.parse('{"5ZPII":"index.598f9a73.js","81UPo":"logo1.626c9508.png","1U0n4":"logo2.652b354e.png","lEhDT":"logo3.1d091ebd.png","5UbS1":"index.cb526770.css","4l2W5":"index.d7fd810f.js"}')),i("lJLy0");var s=i("cTOKP");function l(e){return e.length>18?e.slice(0,18)+"...":e}var a=i("5uEKZ"),r={};r=new URL(i("kyEFX").resolve("81UPo"),import.meta.url).toString();var c={};c=new URL(i("kyEFX").resolve("1U0n4"),import.meta.url).toString();var d={};d=new URL(i("kyEFX").resolve("lEhDT"),import.meta.url).toString();const u=document.querySelector(".title_categories");async function p(){return(0,s.getBestSellers)().then((e=>e.map((({list_name:e,books:n})=>{const t="Best Sellers Books",o=t.split(" ").splice(0,t.split(" ").length-1).join(" "),i=t.split(" ")[t.split(" ").length-1];return u.innerHTML=`${o} <span class="category_title_last_word">${i}<span>`,` <li class="category-books"><h2 class="adition-category-title">${e}</h2><ul class="list-books" data-category="${e}">`+n.map((({book_image:e="https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.freepik.com%2Fpremium-psd%2Fblank-cover-book-mockup_6814948.htm&psig=AOvVaw1pv5Qa3fm2txSvUlVovAqz&ust=1687133787207000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCwj6LFy_8CFQAAAAAdAAAAABAF",author:n="anonymous author",title:t="book without title",_id:o})=>`<li class="outlineli hidde" data-id="${o}">\n                <div class="book-tumb">\n\n                <img class="book_temp" src="${e}" width="335" heigth="485" loading="lazy" alt="${t=l(t)}">\n                <p class="book-tumb-text">quick view</p>\n                </div>\n                <div class="book-info">\n                <h2 class="book-info-title">${t}</h2>\n                <p class="book-info-autor">${n=l(n)}</p>\n                </div>\n                </li>`)).join("")+'</ul><button class="load-more-books">see more</button></li>'})).join("")))}function g(e){return(0,s.getCategory)(e).then((e=>e.map((({list_name:e,book_image:n="https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.freepik.com%2Fpremium-psd%2Fblank-cover-book-mockup_6814948.htm&psig=AOvVaw1pv5Qa3fm2txSvUlVovAqz&ust=1687133787207000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCwj6LFy_8CFQAAAAAdAAAAABAF",title:t="Unknown book",author:o="Unknown author",_id:i})=>{const s=e.split(" ").splice(0,e.split(" ").length-1).join(" ");t=l(t),o=l(o);const a=e.split(" ")[e.split(" ").length-1];return u.innerHTML=`${s} <span class="category_title_last_word">${a}<span>`,`\n\n        <li class="outlineli" data-id="${i}">\n        <div class="book-tumb">\n        <img class="book_temp" src="${n}" width="335" heigth="485" loading="lazy" alt="${t}">\n        <p class="book-tumb-text">quick view</p>\n        </div>\n        <div class="book-info">\n        <h2 class="book-info-title">${t}</h2>\n        <p class="book-info-autor">${o}</p>\n        </div>\n        </li>`})).join("")))}async function m(e){return await(0,s.getCategory)(e).then((e=>e.map((({list_name:e,book_image:n,title:t,author:o,description:i,_id:s})=>`\n        <li class="outlineli" data-id="${s}">\n        <div class="book-tumb">\n        <img class="book_temp" src="${n}" width="335" heigth="485" loading="lazy" alt="${t=l(t)}">\n        <p class="book-tumb-text">quick view</p>\n        </div>\n        <div class="book-info">\n        <h2 class="book-info-title">${t}</h2>\n        <p class="book-info-autor">${o=l(o)}</p>\n        </div>\n        </li>`)).join("")))}document.querySelector(".modal-content");async function k(n){let t=!1,o="",i="";(0,a.isKeyExists)("UserData")&&(t=!0),!1===t?(o="display: none;",i="display: block;"):(o="display: block;",i="display: none;");const l=await(0,s.getBook)(n).then((({book_image:n,title:t,author:s,description:l,_id:a,buy_links:u})=>`\n    <div class="modal-content-book">\n      <div class="book-modal" data-book-id="${a}">\n        <img class="modal-image-book" src="${n}" alt="Book cover" />\n        <div class="modal-info">\n          <h3 class="modal-title-book">${t}</h3>\n          <p class="modal-author-book">${s}</p>\n          <p class="modal-description-book">${l||"Oopps. No description"}</p>\n        </div>\n      </div>\n    </div>\n    <ul class="shopping-link-list-book">\n      <li class="shopping-link-item-book">\n        <a\n          href="${u[0].url}"\n          target="_blank"\n          rel="noreferrer noopener"\n          class="shopping-link"\n        >\n          <img\n            class="shopping-link-image"\n            src="${e(r)}"\n            width="62px"\n            height="19px"\n            alt="Amazon-link"\n          />\n        </a>\n      </li>\n      <li class="shopping-link-item">\n        <a href="${u[1].url}"\n          target="_blank"\n          rel="noreferrer noopener"\n          class="shopping-link">\n          <img\n            class="shopping-link-image"\n            src="${e(c)}"\n            width="33px"\n            height="32px"\n            alt="Applebook-link"\n          />\n        </a>\n      </li>\n      <li class="shopping-link-item">\n        <a href="${u[4].url}"\n          target="_blank"\n          rel="noreferrer noopener"\n          class="shopping-link">\n          <img\n            class="shopping-link-image"\n            src="${e(d)}"\n            width="38px"\n            height="36px"\n            alt="Shops-link"\n          />\n        </a>\n      </li>\n    </ul>\n    <button class="add-book-button js-btn-add" type="submit" data-id=${a} style="${o}">add to shopping list</button>\n    <span class="message-nolog" style="${i}">If you want to add book, please LogIn</span>\n    <p class="under-remove-btn-text text-hidden">Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>\n  `));return console.log(l),l}i("4TNnu");const b=document.querySelector(".js_side_categories_list"),y=document.querySelector(".title_categories"),v=document.querySelector(".js_books_view");async function h(){y.textContent="",v.innerHTML='\n  <div style="display: flex; flex-direction: column">\n  <div class="loader book">\n  <figure class="page"></figure>\n  <figure class="page"></figure>\n  <figure class="page"></figure>\n</div>\n<h1 class="loader-title">Reading</h1>\n  </div>';const e=await p();v.innerHTML=e}async function f(e){y.textContent="",v.innerHTML='\n  <div style="display: flex; flex-direction: column">\n  <div class="loader book">\n  <figure class="page"></figure>\n  <figure class="page"></figure>\n  <figure class="page"></figure>\n</div>\n<h1 class="loader-title">Reading</h1>\n  </div>';const n=await g(e);v.innerHTML=n}!async function(){const e=await(0,s.getCategoryList)().then((e=>e.map((({list_name:e})=>`\n      <li>\n      <a href="#" class="side-category">${e}</a>\n      </li>`)).join("")));b.insertAdjacentHTML("beforeend",e)}(),h(),b.addEventListener("click",(async function(e){e.preventDefault();let n=e.target.textContent;if("A"!==e.target.tagName)return;"All categories"===n?h():f(n);[...e.currentTarget.children].map((e=>e.classList.remove("selected-category"))),e.target.parentNode.classList.add("selected-category")})),v.addEventListener("click",(async function(e){if(!e.target.classList.contains("load-more-books"))return;let n=e.target.closest(".category-books").firstChild.textContent;await async function(e){const n=[...document.querySelectorAll(".list-books")].filter((n=>n.dataset.category===e)),t=await m(e);n[0].innerHTML=t}(n),e.target.classList.add("no-btn"),[...e.target.previousSibling.children].map((e=>e.classList.remove("hidden")))})),i("dTazW"),i("4S0r6"),i("hele7"),i("hEibw"),i("cTOKP");const w=document.querySelector("#overlay-modal"),_=document.querySelector(".js-modal-close"),L=document.querySelector(".modal-book"),A=document.querySelector(".new-modal");let E="";function $(){L.classList.remove("active"),w.classList.remove("active"),document.body.style.overflow="",_.removeEventListener("click",$),w.removeEventListener("click",$),document.removeEventListener("keydown",x)}function x(e){"Escape"===e.key&&$()}async function S(e){const n=await k(e);A.innerHTML=n}v.addEventListener("click",(async function e(n){try{E=n.target.closest(".outlineli").dataset.id}catch(e){return}if(!E)return;await S(E),S(E);document.querySelector(".js-btn-add"),document.querySelector(".under-remove-btn-text");async function t(){L.classList.add("active"),w.classList.add("active"),document.body.style.overflow="hidden",_.addEventListener("click",$),w.addEventListener("click",$),document.addEventListener("keydown",x),_.removeEventListener("click",e),w.removeEventListener("click",e)}t()}));let F=document.getElementById("scroll-up"),q=document.getElementById("scroll-svg");F.style.display="none",q.style.display="none",window.addEventListener("scroll",(function(){window.scrollY>500?(F.style.display="block",q.style.display="block"):(F.style.display="none",q.style.display="none")})),F.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}));var T=document.querySelector(".header-burger-menu"),H=document.getElementById("modal-mobile");T.addEventListener("click",(function(){H.style.display="block"}));var j=document.getElementById("close-modal-mobile"),C=document.querySelector(".mobile-burger-menu");j.addEventListener("click",(function(){H.style.display="none"})),C.addEventListener("click",(function(e){e.target===C&&(H.style.display="none")}));
//# sourceMappingURL=index.598f9a73.js.map
