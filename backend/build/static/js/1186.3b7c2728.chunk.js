"use strict";(self.webpackChunkToDoApp=self.webpackChunkToDoApp||[]).push([[1186],{1186:function(e,t,n){n.r(t),n.d(t,{startInputShims:function(){return g}});var r=n(5861),o=n(7757),i=n.n(o),a=n(1811),u=new WeakMap,c=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;u.has(e)!==n&&(n?l(e,t,r):d(e,t))},s=function(e){return e===e.getRootNode().activeElement},l=function(e,t,n){var r=t.parentNode,o=t.cloneNode(!1);o.classList.add("cloned-input"),o.tabIndex=-1,r.appendChild(o),u.set(e,o);var i="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d(".concat(i,"px,").concat(n,"px,0) scale(0)")},d=function(e,t){var n=u.get(e);n&&(u.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},f=function(e,t,n){if(!n||!t)return function(){};var r=function(n){s(t)&&c(e,t,n)},o=function(){return c(e,t,!1)},i=function(){return r(!0)},u=function(){return r(!1)};return(0,a.a)(n,"ionScrollStart",i),(0,a.a)(n,"ionScrollEnd",u),t.addEventListener("blur",o),function(){(0,a.b)(n,"ionScrollStart",i),(0,a.b)(n,"ionScrollEnd",u),t.addEventListener("ionBlur",o)}},p="input, textarea, [no-blur], [contenteditable]",v=function(e,t,n){var r=e.closest("ion-item,[ion-item]")||e;return m(r.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)},m=function(e,t,n,r){var o=e.top,i=e.bottom,a=t.top,u=a+15,c=.75*Math.min(t.bottom,r-n)-i,s=u-o,l=Math.round(c<0?-c:s>0?-s:0),d=Math.min(l,o-a),f=Math.abs(d)/.3;return{scrollAmount:d,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:n,inputSafeY:4-(o-u)}},h=function(e,t,n,r,o){var i,u=function(e){i=(0,a.p)(e)},c=function(u){if(i){var c=(0,a.p)(u);b(6,i,c)||s(t)||(u.stopPropagation(),w(e,t,n,r,o))}};return e.addEventListener("touchstart",u,!0),e.addEventListener("touchend",c,!0),function(){e.removeEventListener("touchstart",u,!0),e.removeEventListener("touchend",c,!0)}},w=function(){var e=(0,r.Z)(i().mark((function e(t,n,o,u,s){var l,d,f,p,m,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o||u){e.next=2;break}return e.abrupt("return");case 2:if(l=v(t,o||u,s),!(o&&Math.abs(l.scrollAmount)<4)){e.next=6;break}return n.focus(),e.abrupt("return");case 6:if(c(t,n,!0,l.inputSafeY),n.focus(),(0,a.r)((function(){return t.click()})),"undefined"===typeof window){e.next=22;break}if(f=function(){var e=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==d&&clearTimeout(d),window.removeEventListener("ionKeyboardDidShow",p),window.removeEventListener("ionKeyboardDidShow",f),!o){e.next=6;break}return e.next=6,o.scrollByPoint(0,l.scrollAmount,l.scrollDuration);case 6:c(t,n,!1,l.inputSafeY),n.focus();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function e(){window.removeEventListener("ionKeyboardDidShow",e),window.addEventListener("ionKeyboardDidShow",f)},!o){e.next=21;break}return e.next=15,o.getScrollElement();case 15:if(m=e.sent,h=m.scrollHeight-m.clientHeight,!(l.scrollAmount>h-m.scrollTop)){e.next=21;break}return"password"===n.type?(l.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",p)):window.addEventListener("ionKeyboardDidShow",f),d=setTimeout(f,1e3),e.abrupt("return");case 21:f();case 22:case"end":return e.stop()}}),e)})));return function(t,n,r,o,i){return e.apply(this,arguments)}}(),b=function(e,t,n){if(t&&n){var r=t.x-n.x,o=t.y-n.y;return r*r+o*o>e*e}return!1},E=function(e,t){if("INPUT"===e.tagName&&(!e.parentElement||"ION-INPUT"!==e.parentElement.tagName)&&(!e.parentElement||!e.parentElement.parentElement||"ION-SEARCHBAR"!==e.parentElement.parentElement.tagName)){var n=e.closest("ion-content");if(null!==n){var r=n.$ionPaddingTimer;r&&clearTimeout(r),t>0?n.style.setProperty("--keyboard-offset","".concat(t,"px")):n.$ionPaddingTimer=setTimeout((function(){n.style.setProperty("--keyboard-offset","0px")}),120)}}},g=function(e){var t=document,n=e.getNumber("keyboardHeight",290),o=e.getBoolean("scrollAssist",!0),u=e.getBoolean("hideCaretOnScroll",!0),c=e.getBoolean("inputBlurring",!0),s=e.getBoolean("scrollPadding",!0),l=Array.from(t.querySelectorAll("ion-input, ion-textarea")),d=new WeakMap,v=new WeakMap,m=function(){var e=(0,r.Z)(i().mark((function e(t){var r,c,s,l,p,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return(0,a.c)(t,e)}));case 2:if(r=t.shadowRoot||t,c=r.querySelector("input")||r.querySelector("textarea"),s=t.closest("ion-content"),l=s?null:t.closest("ion-footer"),c){e.next=8;break}return e.abrupt("return");case 8:s&&u&&!d.has(t)&&(p=f(t,c,s),d.set(t,p)),(s||l)&&o&&!v.has(t)&&(m=h(t,c,s,l,n),v.set(t,m));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();c&&function(){var e=!0,t=!1,n=document,r=function(){t=!0},o=function(){e=!0},i=function(r){if(t)t=!1;else{var o=n.activeElement;if(o&&!o.matches(p)){var i=r.target;i!==o&&(i.matches(p)||i.closest(p)||(e=!1,setTimeout((function(){e||o.blur()}),50)))}}};(0,a.a)(n,"ionScrollStart",r),n.addEventListener("focusin",o,!0),n.addEventListener("touchend",i,!1)}(),s&&function(e){var t=document,n=function(t){E(t.target,e)},r=function(e){E(e.target,0)};t.addEventListener("focusin",n),t.addEventListener("focusout",r)}(n);for(var w=0,b=l;w<b.length;w++){var g=b[w];m(g)}t.addEventListener("ionInputDidLoad",(function(e){m(e.detail)})),t.addEventListener("ionInputDidUnload",(function(e){!function(e){if(u){var t=d.get(e);t&&t(),d.delete(e)}if(o){var n=v.get(e);n&&n(),v.delete(e)}}(e.detail)}))}}}]);
//# sourceMappingURL=1186.3b7c2728.chunk.js.map