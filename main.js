(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{V:()=>M});var t={baseUrl:"https://nomoreparties.co/v1/wff-cohort-7",headers:{authorization:"cd9abd36-5941-411a-af00-2044548d1ec1","Content-Type":"application/json"}},n="".concat(t.baseUrl,"/users/me"),r="".concat(t.baseUrl,"/cards"),o="".concat(r,"/likes"),c=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function u(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",i)}function a(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i)}function i(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}function l(e){e.target.classList.contains("popup")&&a(e.target)}var s,d,p=document.querySelector("#card-template").content;function f(e,t,n,r){var o=p.querySelector(".places__item").cloneNode(!0),c=o.querySelector(".card__image");return c.src=e.link,c.alt=e.name,o.querySelector(".card__title").textContent=e.name,o.querySelector(".card__likes-number").textContent=e.likes.length,o.querySelector(".card__delete-button").addEventListener("click",(function(t){return r(t,e._id)})),o.querySelector(".card__like-button").addEventListener("click",(function(n){return t(n,e._id)})),c.addEventListener("click",n),o}function _(e,t){u(M),d=t,s=e.target.closest(".card")}function m(e,n){var r=e.target,u=r.closest(".card__like-button-container").querySelector(".card__likes-number"),a=function(e){u.textContent=e,r.classList.toggle("card__like-button_is-active")};r.classList.contains("card__like-button_is-active")?function(e){return fetch("".concat(o,"/").concat(e),{method:"DELETE",headers:t.headers}).then((function(e){return c(e)}))}(n).then((function(e){return a(e.likes.length)})).catch((function(e){return console.log(e)})):function(e){return fetch("".concat(o,"/").concat(e),{method:"PUT",headers:t.headers}).then((function(e){return c(e)}))}(n).then((function(e){return a(e.likes.length)})).catch((function(e){return console.log(e)}))}var y=function(e,t,n){var r=e.querySelector(".".concat(t.name,"-input-error"));t.classList.remove(n),r.textContent="",t.setCustomValidity("")},v=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n),t.disabled=!1):(t.classList.add(n),t.disabled=!0)};function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S,b,q,g,E,k,C,L,x=document.querySelector(".places__list"),A=document.querySelector(".profile__title"),w=document.querySelector(".profile__description"),O=document.querySelector(".profile__image"),j=document.querySelector(".profile__edit-button"),B=document.querySelector(".profile__add-button"),P=document.querySelectorAll(".popup"),T=document.querySelector(".popup_type_edit"),D=document.querySelector(".popup_type_edit-avatar"),I=document.querySelector(".popup_type_new-card"),U=document.querySelector(".popup_type_image"),M=document.querySelector(".popup_type_delete"),N=U.querySelector(".popup__image"),V=U.querySelector(".popup__caption"),J=document.querySelector("form[name=edit-profile]"),H=J.querySelector("input[name=name]"),z=J.querySelector("input[name=description]"),$=document.querySelector("form[name=new-place]"),F=$.querySelector("input[name=place-name]"),G=$.querySelector("input[name=link]"),K=document.querySelector("form[name=edit-avatar]"),Q=K.querySelector(".popup__input_type_url"),R=document.querySelector("form[name=delete-card]");function W(e,t){t.textContent=e?"Сохранение...":"Сохранить"}function X(e){var t,n,r,o,c,a,i,l,s=e.querySelector(".popup__form");null!=s&&s.reset(),u(e),e===T&&(H.value=A.textContent,z.value=w.textContent),t=e,r=(n={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error"}).inputSelector,o=n.submitButtonSelector,c=n.inputErrorClass,a=n.inactiveButtonClass,i=Array.from(t.querySelectorAll(r)),l=t.querySelector(o),i.forEach((function(e){e.classList.contains(c)&&y(t,e,c)})),v(i,l,a)}function Y(e){var t=e.target;N.src=t.src,N.alt=t.alt,V.textContent=t.closest(".card").querySelector(".card__title").textContent,u(U)}b=(S={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error"}).formSelector,q=S.inputSelector,g=S.submitButtonSelector,E=S.inputErrorClass,k=S.inactiveButtonClass,C=Array.from(document.querySelectorAll(b)),L=function(e){var t=Array.from(e.querySelectorAll(q)),n=e.querySelector(g);t.forEach((function(r){return r.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?y(e,t,n):function(e,t,n){var r=e.querySelector(".".concat(t.name,"-input-error"));t.classList.add(n),r.textContent=t.validationMessage}(e,t,n)}(e,r,E),v(t,n,k)}))}))},C.forEach((function(e){return L(e)})),j.addEventListener("click",(function(){return X(T)})),O.addEventListener("click",(function(){return X(D)})),B.addEventListener("click",(function(){return X(I)})),J.addEventListener("submit",(function(e){e.preventDefault();var r,o,u=T.querySelector(".popup__button");W(!0,u),(r=H.value,o=z.value,fetch(n,{method:"PATCH",headers:t.headers,body:JSON.stringify({name:r,about:o})}).then((function(e){return c(e)}))).then((function(e){A.textContent=e.name,w.textContent=e.about,W(!1,u),a(T)})).catch((function(e){return console.log(e)}))})),$.addEventListener("submit",(function(e){e.preventDefault();var n,o,u=I.querySelector(".popup__button");W(!0,u),(n=F.value,o=G.value,fetch(r,{method:"POST",headers:t.headers,body:JSON.stringify({name:n,link:o})}).then((function(e){return c(e)}))).then((function(e){x.prepend(f(e,m,Y,_)),W(!1,u),a(I)})).catch((function(e){return console.log(e)}))})),K.addEventListener("submit",(function(e){e.preventDefault();var r,o=D.querySelector(".popup__button");W(!0,o),(r=Q.value,fetch("".concat(n,"/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:r})}).then((function(e){return c(e)}))).then((function(e){O.style.backgroundImage="url('".concat(e.avatar,"')"),W(!1,o),a(D)})).catch((function(e){return console.log(e)}))})),R.addEventListener("submit",(function(e){var n;e.preventDefault(),(n=d,fetch("".concat(r,"/").concat(n),{method:"DELETE",headers:t.headers}).then((function(e){return c(e)}))).then((function(){s.remove(),a(M)})).catch((function(e){return console.log(e)}))})),P.forEach((function(e){return(t=e).querySelector(".popup__close").addEventListener("click",(function(){return a(t)})),void t.addEventListener("click",l);var t})),Promise.all([fetch(n,{headers:t.headers}).then((function(e){return c(e)})),fetch(r,{headers:t.headers}).then((function(e){return c(e)}))]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,u,a=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(a.push(r.value),a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];A.textContent=o.name,w.textContent=o.about,O.style.backgroundImage="url('".concat(o.avatar,"')"),c.forEach((function(e){var t=f(e,m,Y,_);e.owner._id!=o._id&&(t.querySelector(".card__delete-button").style.display="none"),e.likes.forEach((function(e){e._id===o._id&&t.querySelector(".card__like-button").classList.add("card__like-button_is-active")})),function(e,t){t.append(e)}(t,x)}))})).catch((function(e){return console.log(e)}))})();