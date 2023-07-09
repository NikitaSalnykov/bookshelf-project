!function(){let e,t,a;function o(e,t,a,o){Object.defineProperty(e,t,{get:a,set:o,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},n={},l=i.parcelRequired7c6;null==l&&((l=function(e){if(e in s)return s[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return s[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},i.parcelRequired7c6=l),l.register("iE7OH",function(e,t){"use strict";o(e.exports,"register",function(){return a},function(e){return a=e}),o(e.exports,"resolve",function(){return r},function(e){return r=e});var a,r,i={};a=function(e){for(var t=Object.keys(e),a=0;a<t.length;a++)i[t[a]]=e[t[a]]},r=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),l.register("aNJCr",function(e,t){o(e.exports,"getBundleURL",function(){return a},function(e){return a=e});"use strict";var a,r={};a=function(e){var t=r[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[e]=t),t}}),l("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.02614c3a.js","ee16w":"sprite.898ff988.svg","7i35a":"empty-desktop-tablet@1x.c92ffbf0.png","hJCae":"empty-desktop-tablet@2x.46ae68fc.png","lDRN9":"empty-mobile@1x.5eaba947.png","2sEqO":"empty-mobile@2x.ce17eff9.png","2Jedz":"amazon-icon1x.985b1de5.png","ehEdb":"amazon-icon2x.b774c146.png","1zLvb":"applebook-icon1x.a9f158e0.png","bk9Lk":"applebook-icon2x.7ba433f7.png","kMOzt":"bookshop-icon1x.95f5821d.png","ku5Dq":"bookshop-icon2x.2b4b4a60.png","8qyiZ":"shopping-list.a95e9426.js","i3zQN":"shopping-list.8149ed25.css","aUUGX":"shopping-list.cfa43001.js"}')),l("xpKCW");var c={};c=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("ee16w");var d={};d=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("7i35a");var u={};u=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("hJCae");var p={};p=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("lDRN9");var m={};m=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("2sEqO");var g={};g=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("2Jedz");var f={};f=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("ehEdb");var _={};_=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("1zLvb");var h={};h=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("bk9Lk");var b={};b=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("kMOzt");var v={};v=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("ku5Dq");var H=l("1VFfL");let E=document.querySelector(".js-shopping-cart"),x=document.querySelector(".js-cart-list"),S=document.getElementById("pagination"),k="storage-data",R=1;function y(){let a=JSON.parse(localStorage.getItem(k));if(a&&0!==a.length){let o=a.length;(function(a){let o=new(r(H))(S,{totalItems:a,itemsPerPage:e,visiblePages:t,centerAlign:!0,page:R});o.on("afterMove",e=>{R=e.page;let t=JSON.parse(localStorage.getItem(k));return w(t,R),R})})(o),w(a,R)}else F()}function F(){let e=`
    <div class="cart-empty">
      <p class="cart-empty__text">
        This page is empty, add some books and proceed to order.
      </p>
      <picture>
        <source
          srcset="
            ${r(d)} 1x,
            ${r(u)} 2x
          "
          media="(min-width: 768px)"
        />
        <img
          srcset="
            ${r(p)} 1x,
            ${r(m)} 2x
            "
          src="${r(p)}"
          alt="Empty cart"
          loading="lazy"
          class="cart-empty__img"
        />
      </picture>
    </div>`;E.innerHTML=e}function w(t,a){let o=(a-1)*e,i=o+e,s=t.slice(o,i),n=s.map(({id:e,book_image:t,title:a,author:o,marketAmazon:i,marketAppleBooks:s,marketBookshop:n,list_name:l})=>`
      <li class="cart__item card js-card" data-book-id="${e}">
        <picture>
          <img
            loading="lazy"
            src="${t||"./images/placeholders/very-small-placeholder.png"}"
            alt="${a}"
            class="card__img"
            width="110"
            height="142"
          />
        </picture>
        <div class="card__content">
          <h3 class="card__title">${a.trim()}</h3>
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
            <p class="card__author">${o.trim()}</p>
            <ul class="card__shops list">
              <li class="shop">
                <a
                  href="${i}"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <img class="shop__image--amazon"
                    loading="lazy"
                    width="28"
                    height="28"
                    srcset="
                      ${r(g)} 1x,
                      ${r(f)} 2x
                    "
                    src="${r(g)}"
                    alt="amazon.com"
                /></a>
              </li>
              <li class="shop">
                <a
                  href="${s}"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <img class="shop__image--apple"
                    loading="lazy"
                    width="28"
                    height="28"
                    srcset="
                      ${r(_)} 1x,
                      ${r(h)} 2x
                    "
                    src="${r(_)}"
                    alt="books.apple.com"
                /></a>
              </li>
              <li class="shop">
                <a
                  href="${n}"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <img class="shop__image--bookshop"
                    loading="lazy"
                    width="28"
                    height="28"
                    srcset="
                      ${r(b)} 1x,
                      ${r(v)} 2x
                    "
                    src="${r(b)}"
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
              <use x="1%" href="${r(c)}#icon-bin"></use>
            </svg>
          </button>
        </div>
      </li>`).join("");x.innerHTML=n}x.addEventListener("click",function(t){if(t.target.classList.contains("js-card__delete")){let a=t.target.closest(".js-card"),o=a.dataset.bookId,r=JSON.parse(localStorage.getItem(k)),i=r.filter(e=>e.id!==o);localStorage.setItem(k,JSON.stringify(i)),i.length||(a.remove(),F());let s=Math.ceil(i.length/e);s>=R||(R=s),a.remove(),y()}}),window.addEventListener("resize",function(){let o=window.innerWidth;o<768?(t=1,e=4,clearTimeout(a),a=setTimeout(function(){y()},200)):o>=768&&(e=3,t=3,clearTimeout(a),a=setTimeout(function(){y()},200))}),document.addEventListener("DOMContentLoaded",function(){let a=window.innerWidth;a<768?(t=1,e=4,y()):a>=768&&(e=3,t=3,y())}),y()}();
//# sourceMappingURL=shopping-list.02614c3a.js.map
