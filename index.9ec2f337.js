!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o("lrjPt"),o("1KhuP");var r=o("1KhuP"),c=o("kvC6y");o("6qd2L");const i=document.querySelector(".js_side_categories_list"),l=document.querySelector(".title_categories"),a=document.querySelector(".js_books_view");async function s(){l.textContent="",a.innerHTML=(0,c.loader)();const e=await(0,r.markupAllCategories)();a.innerHTML=e}!async function(){const e=await(0,r.markupUpSideCategories)();i.insertAdjacentHTML("beforeend",e)}(),s(),i.addEventListener("click",(async function(e){e.preventDefault();let t=e.target.textContent;if("A"!==e.target.tagName)return;"All categories"===t?s():async function(e){l.textContent="",a.innerHTML=(0,c.loader)();const t=await(0,r.markupCategorieItem)(e);a.innerHTML=t}(t);[...e.currentTarget.children].map((e=>e.classList.remove("selected-category"))),e.target.parentNode.classList.add("selected-category")})),a.addEventListener("click",(async function(e){if(!e.target.classList.contains("load-more-books"))return;let t=e.target.closest(".category-books").firstChild.textContent;await async function(e){const t=[...document.querySelectorAll(".list-books")].filter((t=>t.dataset.category===e)),n=await(0,r.markupCategorieItemMore)(e);t[0].innerHTML=n}(t),e.target.classList.add("no-btn"),[...e.target.previousSibling.children].map((e=>e.classList.remove("hidden")))})),o("xpKCW"),o("9VC5X"),o("dDLL9"),o("aIiCx"),o("dNYR7");r=o("1KhuP");const d=document.querySelector("#overlay-modal"),u=document.querySelector(".js-modal-close"),y=document.querySelector(".modal-book"),m=document.querySelector(".new-modal");let v="";function f(){y.classList.remove("active"),d.classList.remove("active"),document.body.style.overflow="",u.removeEventListener("click",f),d.removeEventListener("click",f),document.removeEventListener("keydown",L)}function L(e){"Escape"===e.key&&f()}async function g(e){const t=await(0,r.markupModal)(e);m.innerHTML=t}a.addEventListener("click",(async function e(t){try{v=t.target.closest(".outlineli").dataset.id}catch(e){return}if(!v)return;await g(v),g(v);document.querySelector(".js-btn-add"),document.querySelector(".under-remove-btn-text");async function n(){y.classList.add("active"),d.classList.add("active"),document.body.style.overflow="hidden",u.addEventListener("click",f),d.addEventListener("click",f),document.addEventListener("keydown",L),u.removeEventListener("click",e),d.removeEventListener("click",e)}n()}));let p=document.getElementById("scroll-up"),k=document.getElementById("scroll-svg");p.style.display="none",k.style.display="none",window.addEventListener("scroll",(function(){window.scrollY>500?(p.style.display="block",k.style.display="block"):(p.style.display="none",k.style.display="none")})),p.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}));var b=document.querySelector(".header-burger-menu"),w=document.getElementById("modal-mobile");b.addEventListener("click",(function(){w.style.display="block"}));var E=document.getElementById("close-modal-mobile"),h=document.querySelector(".mobile-burger-menu");E.addEventListener("click",(function(){w.style.display="none"})),h.addEventListener("click",(function(e){e.target===h&&(w.style.display="none")}))}();
//# sourceMappingURL=index.9ec2f337.js.map
