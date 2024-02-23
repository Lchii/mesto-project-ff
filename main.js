(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{V:()=>B});var t={baseUrl:"https://nomoreparties.co/v1/wff-cohort-7",headers:{authorization:"cd9abd36-5941-411a-af00-2044548d1ec1","Content-Type":"application/json"}},n="".concat(t.baseUrl,"/users/me"),r="".concat(t.baseUrl,"/cards"),o="".concat(r,"/likes"),c=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},a=function(e){return fetch("".concat(o,"/").concat(e),{method:"PUT",headers:t.headers}).then(c)},u=function(e){return fetch("".concat(o,"/").concat(e),{method:"DELETE",headers:t.headers}).then(c)};function i(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",s)}function l(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",s)}function s(e){"Escape"===e.key&&l(document.querySelector(".popup_is-opened"))}function d(e){e.target.classList.contains("popup")&&l(e.target)}var p,f,y=document.querySelector("#card-template").content;function m(e,t,n,r,o){var c=y.querySelector(".places__item").cloneNode(!0),a=c.querySelector(".card__image");return a.src=e.link,a.alt=e.name,c.querySelector(".card__title").textContent=e.name,c.querySelector(".card__likes-number").textContent=e.likes.length,e.owner._id!=o&&(c.querySelector(".card__delete-button").style.display="none"),e.likes.forEach((function(e){e._id===o&&c.querySelector(".card__like-button").classList.add("card__like-button_is-active")})),c.querySelector(".card__like-button").addEventListener("click",(function(n){return t(n,e._id)})),c.querySelector(".card__delete-button").addEventListener("click",(function(t){return r(c,e._id)})),a.addEventListener("click",n),c}function _(e,t){i(B),f=t,p=e}function v(e,t){var n=e.target,r=n.closest(".card__like-button-container").querySelector(".card__likes-number");(n.classList.contains("card__like-button_is-active")?u:a)(t).then((function(e){return t=e.likes.length,r.textContent=t,void n.classList.toggle("card__like-button_is-active");var t})).catch((function(e){return console.log(e)}))}var h=function(e,t,n){var r=e.querySelector(".".concat(t.name,"-input-error"));t.classList.remove(n),r.textContent="",t.setCustomValidity("")},S=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n),t.disabled=!1):(t.classList.add(n),t.disabled=!0)};function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var q,g={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error"},E=document.querySelector(".places__list"),k=document.querySelector(".profile__title"),L=document.querySelector(".profile__description"),C=document.querySelector(".profile__image"),A=document.querySelector(".profile__edit-button"),x=document.querySelector(".profile__add-button"),w=document.querySelectorAll(".popup"),O=document.querySelector(".popup_type_edit"),j=document.querySelector(".popup_type_edit-avatar"),P=document.querySelector(".popup_type_new-card"),T=document.querySelector(".popup_type_image"),B=document.querySelector(".popup_type_delete"),D=T.querySelector(".popup__image"),I=T.querySelector(".popup__caption"),U=document.querySelector("form[name=edit-profile]"),M=U.querySelector("input[name=name]"),N=U.querySelector("input[name=description]"),V=document.querySelector("form[name=new-place]"),J=V.querySelector("input[name=place-name]"),H=V.querySelector("input[name=link]"),z=document.querySelector("form[name=edit-avatar]"),$=z.querySelector(".popup__input_type_url"),F=document.querySelector("form[name=delete-card]");function G(e,t){t.textContent=e?"Сохранение...":"Сохранить"}function K(e){!function(e,t){var n=t.inputSelector,r=t.submitButtonSelector,o=t.inputErrorClass,c=t.inactiveButtonClass,a=Array.from(e.querySelectorAll(n)),u=e.querySelector(r);a.forEach((function(t){t.classList.contains(o)&&h(e,t,o)})),e.reset(),S(a,u,c)}(e.querySelector(".popup__form"),g),i(e),e===O&&(M.value=k.textContent,N.value=L.textContent)}function Q(e){var t=e.target;D.src=t.src,D.alt=t.alt,I.textContent=t.alt,i(T)}!function(e){var t=e.formSelector,n=e.inputSelector,r=e.submitButtonSelector,o=e.inputErrorClass,c=e.inactiveButtonClass,a=Array.from(document.querySelectorAll(t));a.forEach((function(e){return function(e){var t=Array.from(e.querySelectorAll(n)),a=e.querySelector(r);t.forEach((function(n){return n.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?h(e,t,n):function(e,t,n){var r=e.querySelector(".".concat(t.name,"-input-error"));t.classList.add(n),r.textContent=t.validationMessage}(e,t,n)}(e,n,o),S(t,a,c)}))}))}(e)}))}(g),A.addEventListener("click",(function(){return K(O)})),C.addEventListener("click",(function(){return K(j)})),x.addEventListener("click",(function(){return K(P)})),U.addEventListener("submit",(function(e){e.preventDefault();var r,o,a=O.querySelector(".popup__button");G(!0,a),(r=M.value,o=N.value,fetch(n,{method:"PATCH",headers:t.headers,body:JSON.stringify({name:r,about:o})}).then(c)).then((function(e){k.textContent=e.name,L.textContent=e.about,l(O)})).catch((function(e){return console.log(e)})).finally((function(){return G(!1,a)}))})),V.addEventListener("submit",(function(e){e.preventDefault();var n,o,a=P.querySelector(".popup__button");G(!0,a),(n=J.value,o=H.value,fetch(r,{method:"POST",headers:t.headers,body:JSON.stringify({name:n,link:o})}).then(c)).then((function(e){E.prepend(m(e,v,Q,_,q)),l(P)})).catch((function(e){return console.log(e)})).finally((function(){return G(!1,a)}))})),z.addEventListener("submit",(function(e){e.preventDefault();var r,o=j.querySelector(".popup__button");G(!0,o),(r=$.value,fetch("".concat(n,"/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:r})}).then(c)).then((function(e){C.style.backgroundImage="url('".concat(e.avatar,"')"),l(j)})).catch((function(e){return console.log(e)})).finally((function(){return G(!1,o)}))})),F.addEventListener("submit",(function(e){var n;e.preventDefault(),(n=f,fetch("".concat(r,"/").concat(n),{method:"DELETE",headers:t.headers}).then(c)).then((function(){p.remove(),l(B)})).catch((function(e){return console.log(e)}))})),w.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(){return l(e)})),e.addEventListener("click",d)})),Promise.all([fetch(n,{headers:t.headers}).then(c),fetch(r,{headers:t.headers}).then(c)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];k.textContent=o.name,L.textContent=o.about,C.style.backgroundImage="url('".concat(o.avatar,"')"),q=o._id,c.forEach((function(e){return t=m(e,v,Q,_,q),void E.append(t);var t}))})).catch((function(e){return console.log(e)}))})();