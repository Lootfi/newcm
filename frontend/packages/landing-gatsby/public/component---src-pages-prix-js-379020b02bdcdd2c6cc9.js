(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"4WGO":function(t){t.exports=JSON.parse('{"data":{"saasClassicJson":{"MONTHLY_PRICING_TABLE":[{"name":"Business Account","description":"For Mediums teams or group who need to build website ","price":"$9.87","priceLabel":"Per month & subscription yearly","buttonLabel":"Register Now","url":"#","trialButtonLabel":"Or Start 14 Days trail","trialURL":"#","listItems":[{"content":"Drag & Drop Builder"},{"content":"1,000s of Templates Ready"},{"content":"Blog Tools"},{"content":"eCommerce Store "},{"content":"30+ Webmaster Tools"}]}],"YEARLY_PRICING_TABLE":[{"name":"Basic Account","description":"For a single client or team who need to build website ","price":"$0","priceLabel":"Only for first month","trialURL":null,"trialButtonLabel":null,"buttonLabel":"Start for free","url":"#","listItems":[{"content":"Drag & Drop Builder"},{"content":"1,000s of Templates Ready"},{"content":"Blog Tools"},{"content":"eCommerce Store "},{"content":"30+ Webmaster Tools"}]},{"name":"Business Account","description":"For Small teams or group who need to build website ","price":"$6.00","priceLabel":"Per month & subscription yearly","trialURL":"#","trialButtonLabel":"Or Start 14 Days trail","buttonLabel":"Register Now","url":"#","listItems":[{"content":"Unlimited secure storage"},{"content":"2,000s of Templates Ready"},{"content":"Blog Tools"},{"content":"24/7 phone support"},{"content":"50+ Webmaster Tools"}]},{"name":"Premium Account","description":"For Large teams or group who need to build website ","price":"$9.99","priceLabel":"Per month & subscription yearly","trialURL":"#","trialButtonLabel":"Or Start 14 Days trail","buttonLabel":"Register Now","url":"#","listItems":[{"content":"Drag & Drop Builder"},{"content":"3,000s of Templates Ready"},{"content":"Advanced branding"},{"content":"Knowledge base support"},{"content":"80+ Webmaster Tools"}]}]}}}')},"8WEX":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return kt}));var i=n("ERkP"),r=n.n(i),o=n("HXws"),s=(n("APMH"),n("kQsd")),a=n("vrFN"),l=n("4WGO"),c=n("dWle"),u=n("Eakc"),d=n("PPo7"),p=n("xqb7"),f={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perTouch:!1,touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",throttle:10,direction:"ltr",peek:0,breakpoints:{},classes:{direction:{ltr:"glide--ltr",rtl:"glide--rtl"},slider:"glide--slider",carousel:"glide--carousel",swipeable:"glide--swipeable",dragging:"glide--dragging",cloneSlide:"glide__slide--clone",activeNav:"glide__bullet--active",activeSlide:"glide__slide--active",disabledArrow:"glide__arrow--disabled"}};function h(t){console.error("[Glide warn]: "+t)}var m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},v=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},y=function t(e,n,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,i)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(i):void 0},x=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e};function w(t){return parseInt(t)}function _(t){return"string"==typeof t}function k(t){var e=void 0===t?"undefined":m(t);return"function"===e||"object"===e&&!!t}function S(t){return"function"==typeof t}function E(t){return void 0===t}function T(t){return t.constructor===Array}function C(t,e,n){var i={};for(var r in e)S(e[r])?i[r]=e[r](t,i,n):h("Extension must be a function");for(var o in i)S(i[o].mount)&&i[o].mount();return i}function O(t,e,n){Object.defineProperty(t,e,n)}function L(t,e){var n=b({},t,e);return e.hasOwnProperty("classes")&&(n.classes=b({},t.classes,e.classes),e.classes.hasOwnProperty("direction")&&(n.classes.direction=b({},t.classes.direction,e.classes.direction))),e.hasOwnProperty("breakpoints")&&(n.breakpoints=b({},t.breakpoints,e.breakpoints)),n}var H=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};g(this,t),this.events=e,this.hop=e.hasOwnProperty}return v(t,[{key:"on",value:function(t,e){if(T(t))for(var n=0;n<t.length;n++)this.on(t[n],e);this.hop.call(this.events,t)||(this.events[t]=[]);var i=this.events[t].push(e)-1;return{remove:function(){delete this.events[t][i]}}}},{key:"emit",value:function(t,e){if(T(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);this.hop.call(this.events,t)&&this.events[t].forEach((function(t){t(e||{})}))}}]),t}(),P=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};g(this,t),this._c={},this._t=[],this._e=new H,this.disabled=!1,this.selector=e,this.settings=L(f,n),this.index=this.settings.startAt}return v(t,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),k(t)?this._c=C(this,t,this._e):h("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return T(t)?this._t=t:h("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.settings=L(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,e){return this._e.on(t,e),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){k(t)?this._o=t:h("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(t){this._i=w(t)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),t}();function N(){return(new Date).getTime()}function A(t,e,n){var i=void 0,r=void 0,o=void 0,s=void 0,a=0;n||(n={});var l=function(){a=!1===n.leading?0:N(),i=null,s=t.apply(r,o),i||(r=o=null)},c=function(){var c=N();a||!1!==n.leading||(a=c);var u=e-(c-a);return r=this,o=arguments,u<=0||u>e?(i&&(clearTimeout(i),i=null),a=c,s=t.apply(r,o),i||(r=o=null)):i||!1===n.trailing||(i=setTimeout(l,u)),s};return c.cancel=function(){clearTimeout(i),a=0,i=r=o=null},c}var W={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function j(t){if(t&&t.parentNode){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}return[]}function I(t){return!!(t&&t instanceof window.HTMLElement)}var B=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};g(this,t),this.listeners=e}return v(t,[{key:"on",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];_(t)&&(t=[t]);for(var r=0;r<t.length;r++)this.listeners[t[r]]=n,e.addEventListener(t[r],this.listeners[t[r]],i)}},{key:"off",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];_(t)&&(t=[t]);for(var i=0;i<t.length;i++)e.removeEventListener(t[i],this.listeners[t[i]],n)}},{key:"destroy",value:function(){delete this.listeners}}]),t}();var R=["ltr","rtl"],z={">":"<","<":">","=":"="};function D(t,e){return{modify:function(t){return e.Direction.is("rtl")?-t:t}}}function M(t,e){return{modify:function(n){return n+e.Gaps.value*t.index}}}function G(t,e){return{modify:function(t){return t+e.Clones.grow/2}}}function q(t,e){return{modify:function(n){if(t.settings.focusAt>=0){var i=e.Peek.value;return k(i)?n-i.before:n-i}return n}}}function F(t,e){return{modify:function(n){var i=e.Gaps.value,r=e.Sizes.width,o=t.settings.focusAt,s=e.Sizes.slideWidth;return"center"===o?n-(r/2-s/2):n-s*o-i*o}}}var Y=!1;try{var J=Object.defineProperty({},"passive",{get:function(){Y=!0}});window.addEventListener("testPassive",null,J),window.removeEventListener("testPassive",null,J)}catch(St){}var X=Y,U=["touchstart","mousedown"],V=["touchmove","mousemove"],$=["touchend","touchcancel","mouseup","mouseleave"],K=["mousedown","mousemove","mouseup","mouseleave"];function Q(t){return k(t)?(e=t,Object.keys(e).sort().reduce((function(t,n){return t[n]=e[n],t[n],t}),{})):(h("Breakpoints option must be an object"),{});var e}var Z={Html:function(t,e){var n={mount:function(){this.root=t.selector,this.track=this.root.querySelector('[data-glide-el="track"]'),this.slides=Array.prototype.slice.call(this.wrapper.children).filter((function(e){return!e.classList.contains(t.settings.classes.cloneSlide)}))}};return O(n,"root",{get:function(){return n._r},set:function(t){_(t)&&(t=document.querySelector(t)),I(t)?n._r=t:h("Root element must be a existing Html node")}}),O(n,"track",{get:function(){return n._t},set:function(t){I(t)?n._t=t:h('Could not find track element. Please use [data-glide-el="track"] attribute.')}}),O(n,"wrapper",{get:function(){return n.track.children[0]}}),n},Translate:function(t,e,n){var i={set:function(n){var i=function(t,e,n){var i=[M,G,q,F].concat(t._t,[D]);return{mutate:function(r){for(var o=0;o<i.length;o++){var s=i[o];S(s)&&S(s().modify)?r=s(t,e,n).modify(r):h("Transformer should be a function that returns an object with `modify()` method")}return r}}}(t,e).mutate(n);e.Html.wrapper.style.transform="translate3d("+-1*i+"px, 0px, 0px)"},remove:function(){e.Html.wrapper.style.transform=""}};return n.on("move",(function(r){var o=e.Gaps.value,s=e.Sizes.length,a=e.Sizes.slideWidth;return t.isType("carousel")&&e.Run.isOffset("<")?(e.Transition.after((function(){n.emit("translate.jump"),i.set(a*(s-1))})),i.set(-a-o*s)):t.isType("carousel")&&e.Run.isOffset(">")?(e.Transition.after((function(){n.emit("translate.jump"),i.set(0)})),i.set(a*s+o*s)):i.set(r.movement)})),n.on("destroy",(function(){i.remove()})),i},Transition:function(t,e,n){var i=!1,r={compose:function(e){var n=t.settings;return i?e+" 0ms "+n.animationTimingFunc:e+" "+this.duration+"ms "+n.animationTimingFunc},set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(t)},remove:function(){e.Html.wrapper.style.transition=""},after:function(t){setTimeout((function(){t()}),this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return O(r,"duration",{get:function(){var n=t.settings;return t.isType("slider")&&e.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",(function(){r.set()})),n.on(["build.before","resize","translate.jump"],(function(){r.disable()})),n.on("run",(function(){r.enable()})),n.on("destroy",(function(){r.remove()})),r},Direction:function(t,e,n){var i={mount:function(){this.value=t.settings.direction},resolve:function(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(z[e]):t},is:function(t){return this.value===t},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return O(i,"value",{get:function(){return i._v},set:function(t){R.indexOf(t)>-1?i._v=t:h("Direction value must be `ltr` or `rtl`")}}),n.on(["destroy","update"],(function(){i.removeClass()})),n.on("update",(function(){i.mount()})),n.on(["build.before","update"],(function(){i.addClass()})),i},Peek:function(t,e,n){var i={mount:function(){this.value=t.settings.peek}};return O(i,"value",{get:function(){return i._v},set:function(t){k(t)?(t.before=w(t.before),t.after=w(t.after)):t=w(t),i._v=t}}),O(i,"reductor",{get:function(){var e=i.value,n=t.settings.perView;return k(e)?e.before/n+e.after/n:2*e/n}}),n.on(["resize","update"],(function(){i.mount()})),i},Sizes:function(t,e,n){var i={setupSlides:function(){for(var t=this.slideWidth+"px",n=e.Html.slides,i=0;i<n.length;i++)n[i].style.width=t},setupWrapper:function(t){e.Html.wrapper.style.width=this.wrapperSize+"px"},remove:function(){for(var t=e.Html.slides,n=0;n<t.length;n++)t[n].style.width="";e.Html.wrapper.style.width=""}};return O(i,"length",{get:function(){return e.Html.slides.length}}),O(i,"width",{get:function(){return e.Html.root.offsetWidth}}),O(i,"wrapperSize",{get:function(){return i.slideWidth*i.length+e.Gaps.grow+e.Clones.grow}}),O(i,"slideWidth",{get:function(){return i.width/t.settings.perView-e.Peek.reductor-e.Gaps.reductor}}),n.on(["build.before","resize","update"],(function(){i.setupSlides(),i.setupWrapper()})),n.on("destroy",(function(){i.remove()})),i},Gaps:function(t,e,n){var i={apply:function(t){for(var n=0,i=t.length;n<i;n++){var r=t[n].style,o=e.Direction.value;r[W[o][0]]=0!==n?this.value/2+"px":"",n!==t.length-1?r[W[o][1]]=this.value/2+"px":r[W[o][1]]=""}},remove:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style;i.marginLeft="",i.marginRight=""}}};return O(i,"value",{get:function(){return w(t.settings.gap)}}),O(i,"grow",{get:function(){return i.value*(e.Sizes.length-1)}}),O(i,"reductor",{get:function(){var e=t.settings.perView;return i.value*(e-1)/e}}),n.on(["build.after","update"],A((function(){i.apply(e.Html.wrapper.children)}),30)),n.on("destroy",(function(){i.remove(e.Html.wrapper.children)})),i},Move:function(t,e,n){var i={mount:function(){this._o=0},make:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=i,n.emit("move",{movement:this.value}),e.Transition.after((function(){n.emit("move.after",{movement:t.value})}))}};return O(i,"offset",{get:function(){return i._o},set:function(t){i._o=E(t)?0:w(t)}}),O(i,"translate",{get:function(){return e.Sizes.slideWidth*t.index}}),O(i,"value",{get:function(){var t=this.offset,n=this.translate;return e.Direction.is("rtl")?n+t:n-t}}),n.on(["build.before","run"],(function(){i.make()})),i},Clones:function(t,e,n){var i={mount:function(){this.items=[],t.isType("carousel")&&(this.items=this.collect())},collect:function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=e.Html.slides,r=t.settings,o=r.perView,s=r.classes,a=+!!t.settings.peek,l=o+a,c=i.slice(0,l),u=i.slice(-l),d=0;d<Math.max(1,Math.floor(o/i.length));d++){for(var p=0;p<c.length;p++){var f=c[p].cloneNode(!0);f.classList.add(s.cloneSlide),n.push(f)}for(var h=0;h<u.length;h++){var m=u[h].cloneNode(!0);m.classList.add(s.cloneSlide),n.unshift(m)}}return n},append:function(){for(var t=this.items,n=e.Html,i=n.wrapper,r=n.slides,o=Math.floor(t.length/2),s=t.slice(0,o).reverse(),a=t.slice(o,t.length),l=e.Sizes.slideWidth+"px",c=0;c<a.length;c++)i.appendChild(a[c]);for(var u=0;u<s.length;u++)i.insertBefore(s[u],r[0]);for(var d=0;d<t.length;d++)t[d].style.width=l},remove:function(){for(var t=this.items,n=0;n<t.length;n++)e.Html.wrapper.removeChild(t[n])}};return O(i,"grow",{get:function(){return(e.Sizes.slideWidth+e.Gaps.value)*i.items.length}}),n.on("update",(function(){i.remove(),i.mount(),i.append()})),n.on("build.before",(function(){t.isType("carousel")&&i.append()})),n.on("destroy",(function(){i.remove()})),i},Resize:function(t,e,n){var i=new B,r={mount:function(){this.bind()},bind:function(){i.on("resize",window,A((function(){n.emit("resize")}),t.settings.throttle))},unbind:function(){i.off("resize",window)}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r},Build:function(t,e,n){var i={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){e.Html.root.classList.add(t.settings.classes[t.settings.type])},activeClass:function(){var n=t.settings.classes,i=e.Html.slides[t.index];i&&(i.classList.add(n.activeSlide),j(i).forEach((function(t){t.classList.remove(n.activeSlide)})))},removeClasses:function(){var n=t.settings.classes;e.Html.root.classList.remove(n[t.settings.type]),e.Html.slides.forEach((function(t){t.classList.remove(n.activeSlide)}))}};return n.on(["destroy","update"],(function(){i.removeClasses()})),n.on(["resize","update"],(function(){i.mount()})),n.on("move.after",(function(){i.activeClass()})),i},Run:function(t,e,n){var i={mount:function(){this._o=!1},make:function(i){var r=this;t.disabled||(t.disable(),this.move=i,n.emit("run.before",this.move),this.calculate(),n.emit("run",this.move),e.Transition.after((function(){r.isStart()&&n.emit("run.start",r.move),r.isEnd()&&n.emit("run.end",r.move),(r.isOffset("<")||r.isOffset(">"))&&(r._o=!1,n.emit("run.offset",r.move)),n.emit("run.after",r.move),t.enable()})))},calculate:function(){var e=this.move,n=this.length,i=e.steps,r=e.direction,o="number"==typeof w(i)&&0!==w(i);switch(r){case">":">"===i?t.index=n:this.isEnd()?t.isType("slider")&&!t.settings.rewind||(this._o=!0,t.index=0):o?t.index+=Math.min(n-t.index,-w(i)):t.index++;break;case"<":"<"===i?t.index=0:this.isStart()?t.isType("slider")&&!t.settings.rewind||(this._o=!0,t.index=n):o?t.index-=Math.min(t.index,w(i)):t.index--;break;case"=":t.index=i;break;default:h("Invalid direction pattern ["+r+i+"] has been used")}},isStart:function(){return 0===t.index},isEnd:function(){return t.index===this.length},isOffset:function(t){return this._o&&this.move.direction===t}};return O(i,"move",{get:function(){return this._m},set:function(t){var e=t.substr(1);this._m={direction:t.substr(0,1),steps:e?w(e)?w(e):e:0}}}),O(i,"length",{get:function(){var n=t.settings,i=e.Html.slides.length;return t.isType("slider")&&"center"!==n.focusAt&&n.bound?i-1-(w(n.perView)-1)+w(n.focusAt):i-1}}),O(i,"offset",{get:function(){return this._o}}),i},Swipe:function(t,e,n){var i=new B,r=0,o=0,s=0,a=!1,l=!!X&&{passive:!0},c={mount:function(){this.bindSwipeStart()},start:function(e){if(!a&&!t.disabled){this.disable();var i=this.touches(e);r=null,o=w(i.pageX),s=w(i.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),n.emit("swipe.start")}},move:function(i){if(!t.disabled){var a=t.settings,l=a.touchAngle,c=a.touchRatio,u=a.classes,d=this.touches(i),p=w(d.pageX)-o,f=w(d.pageY)-s,h=Math.abs(p<<2),m=Math.abs(f<<2),g=Math.sqrt(h+m),v=Math.sqrt(m);if(!(180*(r=Math.asin(v/g))/Math.PI<l))return!1;i.stopPropagation(),e.Move.make(p*parseFloat(c)),e.Html.root.classList.add(u.dragging),n.emit("swipe.move")}},end:function(i){if(!t.disabled){var s=t.settings,a=this.touches(i),l=this.threshold(i),c=a.pageX-o,u=180*r/Math.PI,d=Math.round(c/e.Sizes.slideWidth);this.enable(),c>l&&u<s.touchAngle?(s.perTouch&&(d=Math.min(d,w(s.perTouch))),e.Direction.is("rtl")&&(d=-d),e.Run.make(e.Direction.resolve("<"+d))):c<-l&&u<s.touchAngle?(s.perTouch&&(d=Math.max(d,-w(s.perTouch))),e.Direction.is("rtl")&&(d=-d),e.Run.make(e.Direction.resolve(">"+d))):e.Move.make(),e.Html.root.classList.remove(s.classes.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),n.emit("swipe.end")}},bindSwipeStart:function(){var n=this,r=t.settings;r.swipeThreshold&&i.on(U[0],e.Html.wrapper,(function(t){n.start(t)}),l),r.dragThreshold&&i.on(U[1],e.Html.wrapper,(function(t){n.start(t)}),l)},unbindSwipeStart:function(){i.off(U[0],e.Html.wrapper,l),i.off(U[1],e.Html.wrapper,l)},bindSwipeMove:function(){var n=this;i.on(V,e.Html.wrapper,A((function(t){n.move(t)}),t.settings.throttle),l)},unbindSwipeMove:function(){i.off(V,e.Html.wrapper,l)},bindSwipeEnd:function(){var t=this;i.on($,e.Html.wrapper,(function(e){t.end(e)}))},unbindSwipeEnd:function(){i.off($,e.Html.wrapper)},touches:function(t){return K.indexOf(t.type)>-1?t:t.touches[0]||t.changedTouches[0]},threshold:function(e){var n=t.settings;return K.indexOf(e.type)>-1?n.dragThreshold:n.swipeThreshold},enable:function(){return a=!1,e.Transition.enable(),this},disable:function(){return a=!0,e.Transition.disable(),this}};return n.on("build.after",(function(){e.Html.root.classList.add(t.settings.classes.swipeable)})),n.on("destroy",(function(){c.unbindSwipeStart(),c.unbindSwipeMove(),c.unbindSwipeEnd(),i.destroy()})),c},Images:function(t,e,n){var i=new B,r={mount:function(){this.bind()},bind:function(){i.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function(){i.off("dragstart",e.Html.wrapper)},dragstart:function(t){t.preventDefault()}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r},Anchors:function(t,e,n){var i=new B,r=!1,o=!1,s={mount:function(){this._a=e.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){i.on("click",e.Html.wrapper,this.click)},unbind:function(){i.off("click",e.Html.wrapper)},click:function(t){o&&(t.stopPropagation(),t.preventDefault())},detach:function(){if(o=!0,!r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!1,this.items[t].setAttribute("data-href",this.items[t].getAttribute("href")),this.items[t].removeAttribute("href");r=!0}return this},attach:function(){if(o=!1,r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!0,this.items[t].setAttribute("href",this.items[t].getAttribute("data-href"));r=!1}return this}};return O(s,"items",{get:function(){return s._a}}),n.on("swipe.move",(function(){s.detach()})),n.on("swipe.end",(function(){e.Transition.after((function(){s.attach()}))})),n.on("destroy",(function(){s.attach(),s.unbind(),i.destroy()})),s},Controls:function(t,e,n){var i=new B,r=!!X&&{passive:!0},o={mount:function(){this._n=e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=e.Html.root.querySelectorAll('[data-glide-el^="controls"]'),this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(e){var n=t.settings,i=e[t.index];i&&(i.classList.add(n.classes.activeNav),j(i).forEach((function(t){t.classList.remove(n.classes.activeNav)})))},removeClass:function(e){var n=e[t.index];n&&n.classList.remove(t.settings.classes.activeNav)},addBindings:function(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},bind:function(t){for(var e=0;e<t.length;e++)i.on("click",t[e],this.click),i.on("touchstart",t[e],this.click,r)},unbind:function(t){for(var e=0;e<t.length;e++)i.off(["click","touchstart"],t[e])},click:function(t){t.preventDefault(),e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute("data-glide-dir")))}};return O(o,"items",{get:function(){return o._c}}),n.on(["mount.after","move.after"],(function(){o.setActive()})),n.on("destroy",(function(){o.removeBindings(),o.removeActive(),i.destroy()})),o},Keyboard:function(t,e,n){var i=new B,r={mount:function(){t.settings.keyboard&&this.bind()},bind:function(){i.on("keyup",document,this.press)},unbind:function(){i.off("keyup",document)},press:function(t){39===t.keyCode&&e.Run.make(e.Direction.resolve(">")),37===t.keyCode&&e.Run.make(e.Direction.resolve("<"))}};return n.on(["destroy","update"],(function(){r.unbind()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r},Autoplay:function(t,e,n){var i=new B,r={mount:function(){this.start(),t.settings.hoverpause&&this.bind()},start:function(){var n=this;t.settings.autoplay&&E(this._i)&&(this._i=setInterval((function(){n.stop(),e.Run.make(">"),n.start()}),this.time))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var t=this;i.on("mouseover",e.Html.root,(function(){t.stop()})),i.on("mouseout",e.Html.root,(function(){t.start()}))},unbind:function(){i.off(["mouseover","mouseout"],e.Html.root)}};return O(r,"time",{get:function(){var n=e.Html.slides[t.index].getAttribute("data-glide-autoplay");return w(n||t.settings.autoplay)}}),n.on(["destroy","update"],(function(){r.unbind()})),n.on(["run.before","pause","destroy","swipe.start","update"],(function(){r.stop()})),n.on(["run.after","play","swipe.end"],(function(){r.start()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r},Breakpoints:function(t,e,n){var i=new B,r=t.settings,o=Q(r.breakpoints),s=b({},r),a={match:function(t){if(void 0!==window.matchMedia)for(var e in t)if(t.hasOwnProperty(e)&&window.matchMedia("(max-width: "+e+"px)").matches)return t[e];return s}};return b(r,a.match(o)),i.on("resize",window,A((function(){t.settings=L(r,a.match(o))}),t.settings.throttle)),n.on("update",(function(){o=Q(o),s=b({},r)})),n.on("destroy",(function(){i.off("resize",window)})),a}},tt=function(t){function e(){return g(this,e),x(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),v(e,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return y(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"mount",this).call(this,b({},Z,t))}}]),e}(P),et=(n("Ihd7"),n("j/s1")),nt=n("GkOb"),it=et.d.div.withConfig({displayName:"glidestyle__GlideWrapper",componentId:"sc-1df9bf1-0"})(["\n  ","\n  ","\n  ","\n"],nt.I,nt.r,nt.E),rt=(et.d.li.withConfig({displayName:"glidestyle__GlideSlideWrapper",componentId:"sc-1df9bf1-1"})(["\n  ","\n  ","\n  ","\n  ","\n  ","\n"],nt.E,nt.i,nt.f,nt.h,nt.e),et.d.div.withConfig({displayName:"glidestyle__ButtonWrapper",componentId:"sc-1df9bf1-2"})(["\n  display: inline-block;\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"],nt.k,nt.E,nt.i,nt.f,nt.h,nt.e,nt.C,nt.G,nt.t,nt.D,nt.g)),ot=et.d.div.withConfig({displayName:"glidestyle__ButtonControlWrapper",componentId:"sc-1df9bf1-3"})(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"],nt.k,nt.E,nt.a,nt.s,nt.C,nt.G,nt.t,nt.D,nt.g),st=et.d.div.withConfig({displayName:"glidestyle__BulletControlWrapper",componentId:"sc-1df9bf1-4"})(["\n  ","\n  ","\n  ","\n  ","\n  ","\n"],nt.k,nt.E,nt.a,nt.s,nt.n),at=et.d.button.withConfig({displayName:"glidestyle__BulletButton",componentId:"sc-1df9bf1-5"})(["\n  cursor: pointer;\n  width: 10px;\n  height: 10px;\n  margin: 4px;\n  border: 0;\n  padding: 0;\n  outline: none;\n  border-radius: 50%;\n  background-color: #D6D6D6;\n\n  &:hover,\n  &.glide__bullet--active {\n    background-color: #869791;\n  }\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"],nt.k,nt.E,nt.i,nt.f,nt.h,nt.e,nt.I,nt.r),lt=et.d.button.withConfig({displayName:"glidestyle__DefaultBtn",componentId:"sc-1df9bf1-6"})(["\n  cursor: pointer;\n  margin: 10px 3px;\n"]),ct=it,ut=function(t){var e=t.className,n=t.children,o=t.options,s=t.controls,a=t.prevButton,l=t.nextButton,c=t.prevWrapper,u=t.nextWrapper,d=t.bullets,p=t.numberOfBullets,f=t.buttonWrapperStyle,h=t.bulletWrapperStyle,m=t.bulletButtonStyle,g=t.carouselSelector,v=["glide"];e&&v.push(e);for(var b=[],y=0;y<p;y++)b.push(y);return Object(i.useEffect)((function(){new tt(g?"#"+g:"#glide",Object.assign({},o)).mount()})),r.a.createElement(ct,{className:v.join(" "),id:g||"glide"},r.a.createElement("div",{className:"glide__track","data-glide-el":"track"},r.a.createElement("ul",{className:"glide__slides",style:{display:"flex",alignItems:"center"}},n)),s&&r.a.createElement(ot,Object.assign({className:"glide__controls","data-glide-el":"controls"},f),r.a.createElement(rt,Object.assign({},c,{className:"glide__prev--area","data-glide-dir":"<","aria-label":"prev"}),a?r.a.createElement("h3",{style:{cursor:"pointer"}},a):r.a.createElement(lt,null,"Prev")),r.a.createElement(rt,Object.assign({},u,{className:"glide__next--area","data-glide-dir":">","aria-label":"next"}),l?r.a.createElement("h3",{style:{cursor:"pointer"}},l):r.a.createElement(lt,null,"Next"))),d&&r.a.createElement(st,Object.assign({className:"glide__bullets","data-glide-el":"controls[nav]"},h),r.a.createElement(i.Fragment,null,b.map((function(t){return r.a.createElement(at,Object.assign({key:t,className:"glide__bullet","data-glide-dir":"="+t,"aria-label":"bullet"+(t+1)},m))})))))};ut.defaultProps={controls:!0,bullets:!1};var dt=n("tZdC"),pt=et.d.div.withConfig({displayName:"pricingstyle__PricingTableWrapper",componentId:"sc-1gmnchq-0"})(["\n  .glide__slides {\n    align-items: stretch;\n    .glide__slide {\n      height: auto;\n    }\n  }\n"]),ft=et.d.div.withConfig({displayName:"pricingstyle__PricingTable",componentId:"sc-1gmnchq-1"})(["\n  width: 400px;\n  border: 1px solid #f9fafb;\n  border-radius: 5px;\n  padding: 45px 45px 50px 45px;\n  border-radius: 15px;\n  background-color: #f9fafb;\n  height: 100%;\n  transition: 0.25s ease-in-out;\n  @media (max-width: 767px) {\n    padding: 45px 35px;\n  }\n  &:hover {\n    background-color: #fff;\n    border-color: #f2f4f7;\n  }\n"]),ht=et.d.div.withConfig({displayName:"pricingstyle__PricingHead",componentId:"sc-1gmnchq-2"})(["\n  margin-bottom: 35px;\n"]),mt=et.d.div.withConfig({displayName:"pricingstyle__PricingPrice",componentId:"sc-1gmnchq-3"})(["\n  margin-bottom: 50px;\n"]),gt=et.d.div.withConfig({displayName:"pricingstyle__PricingButton",componentId:"sc-1gmnchq-4"})(["\n  text-align: center;\n  .reusecore__button {\n    border-radius: 4px;\n  }\n  .trial_button {\n    font-size: 15px;\n    font-weight: 500;\n    color: #3b93ff;\n    display: block;\n    margin-top: 25px;\n    transition: 0.15s ease-in-out;\n    &:hover {\n      opacity: 0.8;\n    }\n  }\n"]),vt=et.d.div.withConfig({displayName:"pricingstyle__PricingList",componentId:"sc-1gmnchq-5"})(["\n  margin-bottom: 50px;\n"]),bt=et.d.div.withConfig({displayName:"pricingstyle__ListItem",componentId:"sc-1gmnchq-6"})(["\n  display: flex;\n  margin-bottom: 23px;\n  justify-content: center;\n  &:last-child {\n    margin-bottom: 0;\n  }\n  .price_list_icon {\n    color: #18d379;\n    margin-right: 10px;\n  }\n"]),yt=(et.d.div.withConfig({displayName:"pricingstyle__SwitchWrapper",componentId:"sc-1gmnchq-7"})(["\n  text-align: center;\n  margin-top: 20px;\n  .reusecore__switch {\n    .reusecore__field-label {\n      font-size: 16px;\n      font-weight: 400;\n      color: #5c636c;\n      cursor: pointer;\n    }\n    input[type='checkbox'] {\n      &:checked {\n        + div {\n          width: 40px !important;\n          background-color: ",";\n          > div {\n            left: 17px !important;\n          }\n        }\n      }\n      + div {\n        background-color: #f0f0f0;\n        background-color: #f0f0f0;\n        border: 0;\n        width: 40px;\n        height: 25px;\n        > div {\n          background-color: #fff;\n          box-shadow: 0px 2px 3px 0.24px rgba(31, 64, 104, 0.25);\n          width: 21px;\n          height: 21px;\n          top: 2px;\n          left: 2px;\n        }\n      }\n    }\n  }\n"],Object(dt.a)("colors.primary")),et.d.div.withConfig({displayName:"pricingstyle__PricingButtonWrapper",componentId:"sc-1gmnchq-8"})(["\n  text-align: center;\n  margin-top: 80px;\n  position: relative;\n  @media (max-width: 575px) {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 40px;\n  }\n  &:before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    background: #e7e8eb;\n    display: block;\n    bottom: 0;\n    left: 0;\n  }\n  .reusecore__button {\n    font-size: 18px;\n    font-weight: 500;\n    color: #90949b;\n    background: transparent;\n    height: auto;\n    min-width: 200px;\n    border: none;\n    padding-bottom: 30px;\n    position: relative;\n    transition: 0.15s ease-in-out;\n    @media (max-width: 767px) {\n      min-width: 0;\n      padding: 0 15px 10px 15px;\n      font-size: 14px;\n    }\n    &:hover {\n      color: #ff4362;\n    }\n    &:after {\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 2px;\n      bottom: 0;\n      left: 0;\n      display: block;\n      background: #ff4362;\n      transform: scaleX(0);\n      transform-origin: right center 0;\n      transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;\n    }\n    &.active-item {\n      color: #ff4362;\n      &:after {\n        transform: scaleX(1);\n        transform-origin: left center 0;\n        transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);\n      }\n    }\n    @media (max-width: 575px) {\n      font-size: 14px;\n      height: 44px;\n      width: 120px;\n      padding: 0 5px;\n    }\n  }\n  > a {\n    font-size: 18px;\n    font-weight: 500;\n    color: #3b93ff;\n    padding: 0 40px;\n    @media (max-width: 767px) {\n      padding: 0 15px 10px 15px;\n      font-size: 14px;\n      height: 46px;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n"])),xt=ft,wt=function(t){var e=t.sectionWrapper,n=t.secTitleWrapper,o=t.secHeading,a=t.secText,f=t.nameStyle,h=t.descriptionStyle,m=t.priceStyle,g=t.priceLabelStyle,v=t.buttonFillStyle,b=t.listContentStyle,y=t.wrapper,x=t.rightSide,w=l.data,_=Object(i.useState)({data:w.saasClassicJson.MONTHLY_PRICING_TABLE,active:!0}),k=_[0],S=_[1],E=k.data,T=k.active;return r.a.createElement(c.a,Object.assign({},e,{id:"pricing_section"}),r.a.createElement(s.a,null,r.a.createElement(c.a,n,r.a.createElement(u.a,Object.assign({},a,{content:"PRICING PLAN"})),r.a.createElement(d.a,Object.assign({},o,{content:"Choose your pricing policy which affordable"})),r.a.createElement(yt,null,r.a.createElement(p.a,{title:"Monthly Pricing",className:T?"active-item":"",onClick:function(){return S({data:w.saasClassicJson.MONTHLY_PRICING_TABLE,active:!0})}}),r.a.createElement(p.a,{title:"Annual Pricing",className:!1===T?"active-item":"",onClick:function(){return S({data:w.saasClassicJson.YEARLY_PRICING_TABLE,active:!1})}}),r.a.createElement("a",{href:"#1"},"+ Custom Plan"))),r.a.createElement(pt,null,r.a.createElement(r.a.Fragment,null,E.map((function(t,e){return r.a.createElement(c.a,y,r.a.createElement(xt,{freePlan:t.freePlan,className:"pricing_table"},r.a.createElement(ht,null,r.a.createElement(d.a,Object.assign({content:t.name},f)),r.a.createElement(u.a,Object.assign({content:t.description},h))),r.a.createElement(mt,null,r.a.createElement(u.a,Object.assign({content:t.price},m)),r.a.createElement(u.a,Object.assign({content:t.priceLabel},g))),r.a.createElement(vt,null,t.listItems.map((function(t,e){return r.a.createElement(bt,{key:"pricing-table-list-"+e},r.a.createElement(u.a,Object.assign({content:t.content},b)))}))),r.a.createElement(gt,null,r.a.createElement("a",{href:t.url},r.a.createElement(p.a,Object.assign({title:t.buttonLabel},v))),t.trialButtonLabel?r.a.createElement("a",{className:"trial_button",href:t.trialURL||"#1"},t.trialButtonLabel):"")),r.a.createElement(c.a,x,r.a.createElement("h1",null,"hey")))}))))))};wt.defaultProps={wrapper:{display:"flex"},rightSide:{color:"white"},sectionWrapper:{as:"section",pt:["60px","80px","80px","80px","100px"],pb:"20px"},secTitleWrapper:{mb:["30px","40px"]},secText:{as:"span",display:"block",textAlign:"center",fontSize:"14px",letterSpacing:"0.15em",fontWeight:"700",color:"#ff4362",mb:"12px"},secHeading:{textAlign:"center",fontSize:["20px","24px","36px","36px"],fontWeight:"700",color:"#fff",letterSpacing:"-0.025em",mb:"0",ml:"auto",mr:"auto",lineHeight:"1.12",width:"500px",maxWidth:"100%"},col:{width:[1,.5,.5,1/3],pr:"15px",pl:"15px"},nameStyle:{fontSize:["20px","20px","22px","22px","22px"],fontWeight:"700",color:"#0f2137",letterSpacing:"-0.025em",textAlign:"center",mb:"12px"},descriptionStyle:{fontSize:["15px","16px","16px","16px","16px"],color:"#6e7379",lineHeight:"1.75",textAlign:"center",mb:"0"},priceStyle:{as:"span",display:"block",fontSize:["36px","36px","40px","40px","40px"],color:"#0f2137",textAlign:"center",mb:"5px",letterSpacing:"-0.025em",fontWeight:"500"},priceLabelStyle:{fontSize:["13px","14px","14px","14px","14px"],color:"#6e7379",lineHeight:"1.75",textAlign:"center",mb:"0"},buttonStyle:{type:"button",fontSize:"14px",fontWeight:"600",borderRadius:"4px",pl:"10px",pr:"10px",bg:"#fff",color:"#2aa275",colors:"primaryWithBg",width:"222px",maxWidth:"100%"},buttonFillStyle:{type:"button",fontSize:"15px",fontWeight:"700",color:"white",borderRadius:"4px",pl:"10px",pr:"10px",colors:"primaryWithBg",minWidth:["160px","190px"],maxWidth:"100%",height:"48px"},listContentStyle:{fontSize:["15px","16px","16px","16px","16px"],color:"#6e7379",mb:"0"}};var _t=wt;function kt(){return r.a.createElement(o.a,null,r.a.createElement(a.a,{title:"Prix - ContactMajor"}),r.a.createElement(_t,null))}},APMH:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var i=n("j/s1"),r=i.d.div.withConfig({displayName:"confidentialitystyle__ConfidWrapper",componentId:"k862c2-0"})(["\n  padding-top: 150px;\n  background-color: black;\n  color: white;\n  ul {\n    padding-left: 20px;\n    li {\n      padding: 7px;\n    }\n  }\n"]),o=i.d.section.withConfig({displayName:"confidentialitystyle__FaqWrapper",componentId:"k862c2-1"})(["\n  padding-bottom: 65px;\n  overflow: hidden;\n  @media (max-width: 768px) {\n    padding: 60px 0 15px;\n  }\n  .sectionHeader {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .reusecore__accordion {\n    max-width: 820px;\n    margin: 0 auto;\n    border-radius: 5px;\n\n    .accordion__item {\n      border-top: 0;\n      background-color: #08153f;\n      color: #fff;\n      border-radius: 5px;\n      transition: all 0.3s ease;\n      cursor: pointer;\n      i {\n        opacity: 0.6;\n      }\n\n      .accordion__header {\n        padding: 20px 30px;\n        margin-bottom: 7px;\n      }\n\n      .accordion__body {\n        padding: 5px 30px 20px;\n      }\n    }\n  }\n\n  .faqButton:hover {\n    background: rgb(235, 77, 75);\n    color: black;\n  }\n"])},Ihd7:function(t,e,n){}}]);
//# sourceMappingURL=component---src-pages-prix-js-379020b02bdcdd2c6cc9.js.map