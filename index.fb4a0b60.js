var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o("lJLy0"),o("3huUq");var r=o("3huUq"),i=o("gjiCh");o("4TNnu");const c=document.querySelector(".js_side_categories_list"),s=document.querySelector(".title_categories"),a=document.querySelector(".js_books_view");async function l(){s.textContent="",a.innerHTML=(0,i.loader)();const e=await(0,r.markupAllCategories)();a.innerHTML=e}!async function(){const e=await(0,r.markupUpSideCategories)();c.insertAdjacentHTML("beforeend",e)}(),l(),c.addEventListener("click",(async function(e){e.preventDefault();let t=e.target.textContent;if("A"!==e.target.tagName)return;"All categories"===t?l():async function(e){s.textContent="",a.innerHTML=(0,i.loader)();const t=await(0,r.markupCategorieItem)(e);a.innerHTML=t}(t);[...e.currentTarget.children].map((e=>e.classList.remove("selected-category"))),e.target.parentNode.classList.add("selected-category")})),a.addEventListener("click",(async function(e){if(!e.target.classList.contains("load-more-books"))return;let t=e.target.closest(".category-books").firstChild.textContent;await async function(e){const t=[...document.querySelectorAll(".list-books")].filter((t=>t.dataset.category===e)),n=await(0,r.markupCategorieItemMore)(e);t[0].innerHTML=n}(t),e.target.classList.add("no-btn"),[...e.target.previousSibling.children].map((e=>e.classList.remove("hidden")))})),o("dTazW"),o("4S0r6"),o("hele7"),o("hEibw"),o("cTOKP");r=o("3huUq");var d=o("5uEKZ");const u=new(0,o("kThre").default),m=()=>(0,d.load)("UserData").userID;function f(e){e.preventDefault();const t=e.target,n=t.dataset.id;if("remove from the shopping list"===t.textContent)return u.firebaseRemoveBookFromList(m(),n),void(t.textContent="Add to shopping list");u.firebaseAddBookToList(m(),n),u.onAuthStateChanged((function(e){if(e){const o=e.uid;u.firebaseSelectBooksFromList(o).then((function(e){!1!==e&&e.includes(n)&&(t.textContent="remove from the shopping list")})).catch((function(e){console.error("Помилка :",e)}))}}))}const y=e=>{u.onAuthStateChanged((function(t){const n=e.dataset.id;if(t){const o=t.uid;u.firebaseSelectBooksFromList(o).then((function(t){!1!==t&&t.includes(n)&&(e.textContent="remove from the shopping list")})).catch((function(e){console.error("Помилка :",e)}))}}))},v=document.querySelector("#overlay-modal"),p=document.querySelector(".js-modal-close"),g=document.querySelector(".modal-book"),L=document.querySelector(".new-modal");let h="";function k(){g.classList.remove("active"),v.classList.remove("active"),document.body.style.overflow="",p.removeEventListener("click",k),v.removeEventListener("click",k),document.removeEventListener("keydown",w)}function w(e){"Escape"===e.key&&k()}async function b(e){const t=await(0,r.markupModal)(e);L.innerHTML=t;const n=document.querySelector(".add-book-button");y(n),n.addEventListener("click",f)}a.addEventListener("click",(async function e(t){try{h=t.target.closest(".outlineli").dataset.id}catch(e){return}if(!h)return;await b(h),b(h);document.querySelector(".js-btn-add"),document.querySelector(".under-remove-btn-text");async function n(){g.classList.add("active"),v.classList.add("active"),document.body.style.overflow="hidden",p.addEventListener("click",k),v.addEventListener("click",k),document.addEventListener("keydown",w),p.removeEventListener("click",e),v.removeEventListener("click",e)}n()}));let E=document.getElementById("scroll-up"),S=document.getElementById("scroll-svg");E.style.display="none",S.style.display="none",window.addEventListener("scroll",(function(){window.scrollY>500?(E.style.display="block",S.style.display="block"):(E.style.display="none",S.style.display="none")})),E.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),o("4iVKZ"),o("lKKTJ");
//# sourceMappingURL=index.fb4a0b60.js.map