(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("L1EO"),n("bzha"),n("mFSj");var a=n("c5HR"),r=n.n(a);const s=document.querySelector(".search-form"),i=s.querySelector('input[type="text"]'),o=document.querySelector(".load"),c=document.querySelector(".gallery");let l=new class{constructor(e){this.query="",this.page=1,this.key=e,this.cards=[]}renderCards(){const e={items:this.cards};c.innerHTML=r()(e)}addCards(){var e,t,n;(e=this.query,t=this.page,n=this.key,fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${e}&page=${t}&per_page=12&key=${n}`)).then(e=>{if(e.ok)return e.json();throw new Error("Error fetching data.")}).then(e=>{this.cards=this.cards.concat(e.hits),this.renderCards()}).catch(e=>console.log(e))}changePropertiesFind(e){this.query=e,this.page=1,this.cards=[]}changePropertiesLoad(){this.page+=1}}("21312315-f1f0be60f3efa7b19271edd39");s.addEventListener("submit",(function(e){e.preventDefault();const t=i.value.trim();if(""===t)return alert("Будь ласка, введіть змістовне значення для пошуку!");s.reset(),l.changePropertiesFind(t),l.addCards()})),o.addEventListener("click",(function(){if(""===l.query)return alert("Будь ласка, введіть змістовне значення для пошуку!");l.changePropertiesLoad(),l.addCards(),window.scrollTo({top:35+6e3*l.page,left:0,behavior:"smooth"})}))},c5HR:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,r){var s=e.lambda,i=e.escapeExpression,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'  <img src="'+i(s(null!=t?o(t,"webformatURL"):t,t))+'" alt="" />\n\n  <div class="stats">\n    <p class="stats-item">\n      <i class="material-icons">thumb_up</i>\n      '+i(s(null!=t?o(t,"likes"):t,t))+'\n    </p>\n    <p class="stats-item">\n      <i class="material-icons">visibility</i>\n      '+i(s(null!=t?o(t,"views"):t,t))+'\n    </p>\n    <p class="stats-item">\n      <i class="material-icons">comment</i>\n      '+i(s(null!=t?o(t,"comments"):t,t))+'\n    </p>\n    <p class="stats-item">\n      <i class="material-icons">cloud_download</i>\n      '+i(s(null!=t?o(t,"downloads"):t,t))+"\n    </p>\n  </div>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var s,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="photo-card">\n'+(null!=(s=i(n,"each").call(null!=t?t:e.nullContext||{},null!=t?i(t,"items"):t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:2,column:2},end:{line:23,column:11}}}))?s:"")+"</div>"},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.a0ff1c8b38c72fd8cdd2.js.map