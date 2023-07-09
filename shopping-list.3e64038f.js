let e,t,o;function r(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}function i(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},l=a.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},a.parcelRequired7c6=l),l.register("kyEFX",function(e,t){"use strict";r(e.exports,"register",function(){return o},function(e){return o=e}),r(e.exports,"resolve",function(){return i},function(e){return i=e});var o,i,a={};o=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)a[t[o]]=e[t[o]]},i=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),l("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.3e64038f.js","lp5u4":"sprite.898ff988.svg","35kVv":"empty-desktop-tablet@1x.c92ffbf0.png","6fa5k":"empty-desktop-tablet@2x.46ae68fc.png","49jvD":"empty-mobile@1x.5eaba947.png","6THUv":"empty-mobile@2x.ce17eff9.png","4AGaC":"amazon-icon1x.985b1de5.png","9Ah0R":"amazon-icon2x.b774c146.png","8uc1C":"applebook-icon1x.a9f158e0.png","3fItF":"applebook-icon2x.7ba433f7.png","hTaYv":"bookshop-icon1x.95f5821d.png","cdwLe":"bookshop-icon2x.2b4b4a60.png","4FDly":"shopping-list.bac9c321.js","i3zQN":"shopping-list.8149ed25.css","duYCB":"shopping-list.ce034948.js"}')),l("dTazW"),l("4S0r6");var c={};c=new URL(l("kyEFX").resolve("lp5u4"),import.meta.url).toString();var d={};d=new URL(l("kyEFX").resolve("35kVv"),import.meta.url).toString();var p={};p=new URL(l("kyEFX").resolve("6fa5k"),import.meta.url).toString();var u={};u=new URL(l("kyEFX").resolve("49jvD"),import.meta.url).toString();var m={};m=new URL(l("kyEFX").resolve("6THUv"),import.meta.url).toString();var g={};g=new URL(l("kyEFX").resolve("4AGaC"),import.meta.url).toString();var f={};f=new URL(l("kyEFX").resolve("9Ah0R"),import.meta.url).toString();var _={};_=new URL(l("kyEFX").resolve("8uc1C"),import.meta.url).toString();var v={};v=new URL(l("kyEFX").resolve("3fItF"),import.meta.url).toString();var h={};h=new URL(l("kyEFX").resolve("hTaYv"),import.meta.url).toString();var b={};b=new URL(l("kyEFX").resolve("cdwLe"),import.meta.url).toString();var y=l("fb9GJ");const k=document.querySelector(".js-shopping-cart"),S=document.querySelector(".js-cart-list"),w=document.getElementById("pagination"),E="storage-data";let x=1;function H(){let o=JSON.parse(localStorage.getItem(E));if(o&&0!==o.length){let r=o.length;(function(o){let r=new(i(y))(w,{totalItems:o,itemsPerPage:e,visiblePages:t,centerAlign:!0,page:x});r.on("afterMove",e=>{x=e.page;let t=JSON.parse(localStorage.getItem(E));return R(t,x),x})})(r),R(o,x)}else F()}function F(){let e=`
    <div class="cart-empty">
      <p class="cart-empty__text">
        This page is empty, add some books and proceed to order.
      </p>
      <picture>
        <source
          srcset="
            ${i(d)} 1x,
            ${i(p)} 2x
          "
          media="(min-width: 768px)"
        />
        <img
          srcset="
            ${i(u)} 1x,
            ${i(m)} 2x
            "
          src="${i(u)}"
          alt="Empty cart"
          loading="lazy"
          class="cart-empty__img"
        />
      </picture>
    </div>`;k.innerHTML=e}function R(t,o){let r=(o-1)*e,a=r+e,n=t.slice(r,a),s=n.map(({id:e,book_image:t,title:o,author:r,marketAmazon:a,marketAppleBooks:n,marketBookshop:s,list_name:l})=>`
      <li class="cart__item card js-card" data-book-id="${e}">
        <picture>
          <img
            loading="lazy"
            src="${t||"./images/placeholders/very-small-placeholder.png"}"
            alt="${o}"
            class="card__img"
            width="110"
            height="142"
          />
        </picture>
        <div class="card__content">
          <h3 class="card__title">${o.trim()}</h3>
          <p class="card__category">${l.trim()}</p>
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
            <p class="card__author">${r.trim()}</p>
            <ul class="card__shops list">
              <li class="shop">
                <a
                  href="${a}"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <img class="shop__image--amazon"
                    loading="lazy"
                    width="28"
                    height="28"
                    srcset="
                      ${i(g)} 1x,
                      ${i(f)} 2x
                    "
                    src="${i(g)}"
                    alt="amazon.com"
                /></a>
              </li>
              <li class="shop">
                <a
                  href="${n}"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <img class="shop__image--apple"
                    loading="lazy"
                    width="28"
                    height="28"
                    srcset="
                      ${i(_)} 1x,
                      ${i(v)} 2x
                    "
                    src="${i(_)}"
                    alt="books.apple.com"
                /></a>
              </li>
              <li class="shop">
                <a
                  href="${s}"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <img class="shop__image--bookshop"
                    loading="lazy"
                    width="28"
                    height="28"
                    srcset="
                      ${i(h)} 1x,
                      ${i(b)} 2x
                    "
                    src="${i(h)}"
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
              <use x="1%" href="${i(c)}#icon-bin"></use>
            </svg>
          </button>
        </div>
      </li>`).join("");S.innerHTML=s}S.addEventListener("click",function(t){if(t.target.classList.contains("js-card__delete")){let o=t.target.closest(".js-card"),r=o.dataset.bookId,i=JSON.parse(localStorage.getItem(E)),a=i.filter(e=>e.id!==r);localStorage.setItem(E,JSON.stringify(a)),a.length||(o.remove(),F());let n=Math.ceil(a.length/e);n>=x||(x=n),o.remove(),H()}}),window.addEventListener("resize",function(){let r=window.innerWidth;r<768?(t=1,e=4,clearTimeout(o),o=setTimeout(function(){H()},200)):r>=768&&(e=3,t=3,clearTimeout(o),o=setTimeout(function(){H()},200))}),document.addEventListener("DOMContentLoaded",function(){let o=window.innerWidth;o<768?(t=1,e=4,H()):o>=768&&(e=3,t=3,H())}),H();
//# sourceMappingURL=shopping-list.3e64038f.js.map
