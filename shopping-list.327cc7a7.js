!function(){let e,t,o;function a(e,t,o,a){Object.defineProperty(e,t,{get:o,set:a,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},l=i.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){s[e]=t},i.parcelRequired7c6=l),l.register("iE7OH",function(e,t){"use strict";a(e.exports,"register",function(){return o},function(e){return o=e}),a(e.exports,"resolve",function(){return r},function(e){return r=e});var o,r,i={};o=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)i[t[o]]=e[t[o]]},r=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),l.register("aNJCr",function(e,t){a(e.exports,"getBundleURL",function(){return o},function(e){return o=e});"use strict";var o,r={};o=function(e){var t=r[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[e]=t),t}}),l("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.327cc7a7.js","ee16w":"sprite.898ff988.svg","7i35a":"empty-desktop-tablet@1x.c92ffbf0.png","hJCae":"empty-desktop-tablet@2x.46ae68fc.png","lDRN9":"empty-mobile@1x.5eaba947.png","2sEqO":"empty-mobile@2x.ce17eff9.png","2Jedz":"amazon-icon1x.985b1de5.png","ehEdb":"amazon-icon2x.b774c146.png","1zLvb":"applebook-icon1x.a9f158e0.png","bk9Lk":"applebook-icon2x.7ba433f7.png","kMOzt":"bookshop-icon1x.95f5821d.png","ku5Dq":"bookshop-icon2x.2b4b4a60.png","kn2MU":"shopping-list.e79d8ef8.js","i3zQN":"shopping-list.8149ed25.css","hJoSw":"shopping-list.f472a38d.js"}')),l("xpKCW"),l("9VC5X");var c={};c=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("ee16w");var d={};d=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("7i35a");var u={};u=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("hJCae");var p={};p=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("lDRN9");var m={};m=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("2sEqO");var g={};g=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("2Jedz");var f={};f=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("ehEdb");var h={};h=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("1zLvb");var _={};_=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("bk9Lk");var b={};b=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("kMOzt");var v={};v=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("ku5Dq");var H=l("1VFfL");let E=document.querySelector(".js-shopping-cart"),S=document.querySelector(".js-cart-list"),x=document.getElementById("pagination"),k="storage-data",R=1;function w(){let o=JSON.parse(localStorage.getItem(k));if(o&&0!==o.length){let a=o.length;(function(o){let a=new(r(H))(x,{totalItems:o,itemsPerPage:e,visiblePages:t,centerAlign:!0,page:R});a.on("afterMove",e=>{R=e.page;let t=JSON.parse(localStorage.getItem(k));return y(t,R),R})})(a),y(o,R)}else F()}function F(){let e=`
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
    </div>`;E.innerHTML=e}function y(t,o){let a=(o-1)*e,i=a+e,n=t.slice(a,i),s=n.map(({id:e,book_image:t,title:o,author:a,marketAmazon:i,marketAppleBooks:n,marketBookshop:s,list_name:l})=>`
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
            <p class="card__author">${a.trim()}</p>
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
                  href="${n}"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <img class="shop__image--apple"
                    loading="lazy"
                    width="28"
                    height="28"
                    srcset="
                      ${r(h)} 1x,
                      ${r(_)} 2x
                    "
                    src="${r(h)}"
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
      </li>`).join("");S.innerHTML=s}S.addEventListener("click",function(t){if(t.target.classList.contains("js-card__delete")){let o=t.target.closest(".js-card"),a=o.dataset.bookId,r=JSON.parse(localStorage.getItem(k)),i=r.filter(e=>e.id!==a);localStorage.setItem(k,JSON.stringify(i)),i.length||(o.remove(),F());let n=Math.ceil(i.length/e);n>=R||(R=n),o.remove(),w()}}),window.addEventListener("resize",function(){let a=window.innerWidth;a<768?(t=1,e=4,clearTimeout(o),o=setTimeout(function(){w()},200)):a>=768&&(e=3,t=3,clearTimeout(o),o=setTimeout(function(){w()},200))}),document.addEventListener("DOMContentLoaded",function(){let o=window.innerWidth;o<768?(t=1,e=4,w()):o>=768&&(e=3,t=3,w())}),w()}();
//# sourceMappingURL=shopping-list.327cc7a7.js.map
