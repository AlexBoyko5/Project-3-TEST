import"./assets/modal-window-e104ee92.js";import{a as g,i as T,P as w}from"./assets/vendor-fe837a92.js";async function S(){const t="https://books-backend.p.goit.global/books/category-list",e={method:"GET"};return(await g.get(t,{options:e})).data}async function C(t){const e="https://books-backend.p.goit.global/books/category",o=encodeURIComponent(t),n=`${e}?category=${o}`,s={method:"GET",headers:{"Content-Type":"application/json"}};return(await g.get(n,s)).data}async function y(t,e){const o="https://books-backend.p.goit.global/books/top-books",n=encodeURIComponent(t);let s;e?s=`${o}?category=${n}&limit=${e}`:s=`${o}?category=${n}`;const c={method:"GET",headers:{"Content-Type":"application/json"}};return(await g.get(s,c)).data}const k=document.querySelector(".books-container-one-cat"),l=document.querySelector(".books-container-all-cat-block"),I=document.querySelector(".books-container-all-cat-title"),r=document.querySelectorAll("button"),a=window.innerWidth;let i;function $(t){return`<div class="book-item">
  <ul class="book-item-block">
    <li class="book-item-img">
      <img
        src="${t.book_image}"
        alt="${t.description}"
        srcset="${t.book_image}"
        width="335"
        height="485"
        class="book-image"
      />
    </li>
    <li class="book-item-title">${t.title}</li>
    <li class="book-item-author">${t.author}</li>
  </ul>
</div>`}function f(t){return t.map($).join("")}function M(t,e){k.innerHTML="",l.innerHTML="";const n=e.split(" "),s=n.pop(),c=`<h3 class="container-category-one">${n.join(" ")+' <span class="last-word">'+s+"</span>"}</h3>`+f(t);l.innerHTML=c}function b(t){k.innerHTML="",l.innerHTML="";const e='<h2 class="container-title">Best Sellers <span>Book</span></h2>';let o="";t.forEach(n=>{o+=`<h3 class="container-category-all">${n.list_name}</h3>`+f(n.books)+`<button type="button" id="btn-seemore" class="hidden" data-category="${n.list_name}">SEE MORE</button>`}),I.innerHTML=e,l.innerHTML=o}async function A(t){try{const e=await C(t);M(e,t)}catch{u("Sorry, there are no books for these category! ","red","white")}}async function L(t){try{if(a>=375&&a<=767)i=1;else if(a>=768&&a<=1279)i=3;else{i=5;return}let e=await y(t,i);e=e.map(o=>(o.books=o.books.slice(0,i),o)),b(e),x()}catch{u("Sorry, no books! ","red","white")}}function x(){i===1||i===3?H():v()}function H(){for(let t=0;t<r.length;t++)r[t].classList.remove("hidden")}function v(){for(let t=0;t<r.length;t++)r[t].classList.add("hidden")}r.forEach(t=>{t.addEventListener("click",async e=>{const o=e.target.dataset.category;o&&await O(o)})});async function O(t){try{let e;if(a>=375&&a<=767)e=5;else if(a>=768&&a<=1279)e=5;else return;let o=await y(t,e);o=o.map(n=>(n.books=n.books.slice(0,e),n)),b(o)}catch{u("Sorry, no books! ","red","white")}}function u(t,e,o){T.error({position:"topRight",message:t,messageColor:o,messageSize:"16",messageLineHeight:"15",backgroundColor:e,timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}const R=document.querySelector("#category-list");let E;window.onload=function(){const t=document.getElementById("category-list"),e=document.createElement("li");e.textContent="ALL CATEGORIES",e.id="title",t.appendChild(e),S().then(o=>{o.forEach(function(n){const s=document.createElement("p");s.textContent=n.list_name,s.classList.add("p-list"),t.appendChild(s)})}).catch(o=>{console.error("Error fetching data;",o)}),L(E)};R.addEventListener("click",async t=>{if(t.preventDefault(),t.target.tagName==="P"){const e=t.target.textContent;A(e)}else t.target.id==="title"&&L(E)});function B(t,e){if(!localStorage.getItem("shoppingList")){console.error("Список покупок не знайдено в локальному сховищі.");return}const o=JSON.parse(localStorage.getItem("shoppingList"))||[],n=(t-1)*e,s=n+e,c=o.slice(n,s);document.getElementById("shopping-list").innerHTML=c.join("<br>")}const p=3,P=new w(document.getElementById("pagination"),{totalItems:JSON.parse(localStorage.getItem("shoppingList")).length,itemsPerPage:p,visiblePages:5,centerAlign:!0});P.on("beforeMove",function(t){B(t.page,p)});B(1,p);document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("loader"),e=document.getElementById("content");function o(){t.style.display="block",e.style.display="none"}function n(){t.style.display="none",e.style.display="block"}async function s(){o();try{const h=await(await fetch("https://example.com/data")).json();console.log(h)}catch(c){console.error("Error fetching data:",c)}finally{n()}}s()});window.onscroll=function(){_()};function _(){const t=document.getElementById("scrollToTopBtn");document.body.scrollTop>20||document.documentElement.scrollTop>20?t.style.display="block":t.style.display="none"}const d=document.querySelector("#slider");function m(t){localStorage.setItem("theme",t),document.documentElement.className=t}function j(){d.checked?m("theme-light"):m("theme-dark")}d.addEventListener("change",j);function q(){localStorage.getItem("theme")==="theme-dark"?(m("theme-dark"),d.checked=!1):(m("theme-light"),d.checked=!0)}q();
//# sourceMappingURL=commonHelpers.js.map
