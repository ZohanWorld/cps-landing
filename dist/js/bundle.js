!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";r.r(t);r(2),r(3),r(4),r(5),r(6),r(7),r(8)},function(e,t,r){},function(e,t){const r=document.querySelector(".header-navigation__burger"),n=document.querySelector(".aside-menu"),o=document.querySelector(".aside-menu__button--close"),i=document.querySelector("main"),s=document.querySelector("body");r.addEventListener("click",(function(){n.classList.add("hide-aside"),i.classList.add("call-blur"),s.style.overflow="hidden"})),o.addEventListener("click",(function(){n.classList.remove("hide-aside"),i.classList.remove("call-blur"),s.style.overflow="auto"}))},function(e,t){new Swiper(".swiper--brands",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},centeredSlides:!0,slidesPerView:1.1,breakpoints:{320:{slidesPerView:1.5},480:{slidesPerView:2},640:{slidesPerView:3}}});const r=document.querySelector(".slider-menu__links"),n=document.querySelector(".show-more__wrapper"),o=document.querySelector(".slider-menu__show-more"),i=document.querySelector(".slider-menu__more-icon");n.addEventListener("click",(function(){r.classList.toggle("hide-menu"),"Показать все"==o.textContent?(o.textContent="Скрыть",i.style.transform="rotate(180deg)"):(o.textContent="Показать все",i.style.transform="rotate(0deg)")}))},function(e,t){new Swiper(".swiper-repair",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},centeredSlides:!0,slidesPerView:1.1,breakpoints:{320:{slidesPerView:1},480:{slidesPerView:1.5},640:{slidesPerView:2}}});const r=document.querySelector(".repair-list"),n=document.querySelector(".show-more__repair"),o=document.querySelector(".repair__show-more"),i=document.querySelector(".repair__more-icon");n.addEventListener("click",(function(){r.classList.toggle("hide-menu"),"Показать все"==o.textContent?(o.textContent="Скрыть",i.style.transform="rotate(180deg)"):(o.textContent="Показать все",i.style.transform="rotate(0deg)")}))},function(e,t){new Swiper(".swiper-price",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},centeredSlides:!0,slidesPerView:1.1,breakpoints:{320:{slidesPerView:1},480:{slidesPerView:1.5},640:{slidesPerView:2}}})},function(e,t){const r=document.querySelectorAll(".button-repair"),n=document.querySelector(".aside-call"),o=document.querySelector(".aside-call__close-button"),i=document.querySelector("main"),s=document.querySelector("body");o.addEventListener("click",(function(){n.classList.remove("hide-call"),i.classList.remove("call-blur"),s.style.overflow="auto"}));for(let e=0;e<r.length;e++)r[e].addEventListener("click",(function(){n.classList.add("hide-call"),i.classList.add("call-blur"),s.style.overflow="hidden"}))},function(e,t){const r=document.querySelectorAll(".button-checkstatus"),n=document.querySelector(".aside-status"),o=document.querySelector(".aside-status__close-button"),i=document.querySelector("main"),s=document.querySelector("body");o.addEventListener("click",(function(){n.classList.remove("hide-status"),i.classList.remove("status-blur"),s.style.overflow="auto"}));for(let e=0;e<r.length;e++)r[e].addEventListener("click",(function(){n.classList.add("hide-status"),i.classList.add("status-blur"),s.style.overflow="hidden"}))}]);
//# sourceMappingURL=bundle.js.map