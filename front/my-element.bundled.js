function t(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,r=new Array(i);e<i;e++)r[e]=t[e];return r}function e(t){var i=function(t,i){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,i||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}function r(){r=function(){return i};var i={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,i){["method","field"].forEach((function(e){i.forEach((function(i){i.kind===e&&"own"===i.placement&&this.defineClassElement(t,i)}),this)}),this)},initializeClassElements:function(t,i){var e=t.prototype;["method","field"].forEach((function(r){i.forEach((function(i){var s=i.placement;if(i.kind===r&&("static"===s||"prototype"===s)){var n="static"===s?t:e;this.defineClassElement(n,i)}}),this)}),this)},defineClassElement:function(t,i){var e=i.descriptor;if("field"===i.kind){var r=i.initializer;e={enumerable:e.enumerable,writable:e.writable,configurable:e.configurable,value:void 0===r?void 0:r.call(t)}}Object.defineProperty(t,i.key,e)},decorateClass:function(t,i){var e=[],r=[],s={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,s)}),this),t.forEach((function(t){if(!o(t))return e.push(t);var i=this.decorateElement(t,s);e.push(i.element),e.push.apply(e,i.extras),r.push.apply(r,i.finishers)}),this),!i)return{elements:e,finishers:r};var n=this.decorateConstructor(e,i);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(t,i,e){var r=i[t.placement];if(!e&&-1!==r.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");r.push(t.key)},decorateElement:function(t,i){for(var e=[],r=[],s=t.decorators,n=s.length-1;n>=0;n--){var o=i[t.placement];o.splice(o.indexOf(t.key),1);var l=this.fromElementDescriptor(t),h=this.toElementFinisherExtras((0,s[n])(l)||l);t=h.element,this.addElementPlacement(t,i),h.finisher&&r.push(h.finisher);var a=h.extras;if(a){for(var c=0;c<a.length;c++)this.addElementPlacement(a[c],i);e.push.apply(e,a)}}return{element:t,finishers:r,extras:e}},decorateConstructor:function(t,i){for(var e=[],r=i.length-1;r>=0;r--){var s=this.fromClassDescriptor(t),n=this.toClassDescriptor((0,i[r])(s)||s);if(void 0!==n.finisher&&e.push(n.finisher),void 0!==n.elements){t=n.elements;for(var o=0;o<t.length-1;o++)for(var l=o+1;l<t.length;l++)if(t[o].key===t[l].key&&t[o].placement===t[l].placement)throw new TypeError("Duplicated element ("+t[o].key+")")}}return{elements:t,finishers:e}},fromElementDescriptor:function(t){var i={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(i,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(i.initializer=t.initializer),i},toElementDescriptors:function(i){if(void 0!==i)return t(i).map((function(t){var i=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),i}),this)},toElementDescriptor:function(t){var i=String(t.kind);if("method"!==i&&"field"!==i)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+i+'"');var r=e(t.key),s=String(t.placement);if("static"!==s&&"prototype"!==s&&"own"!==s)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+s+'"');var n=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var o={kind:i,key:r,placement:s,descriptor:Object.assign({},n)};return"field"!==i?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=t.initializer),o},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:h(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var i={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(i,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),i},toClassDescriptor:function(t){var i=String(t.kind);if("class"!==i)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+i+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var e=h(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:e}},runClassFinishers:function(t,i){for(var e=0;e<i.length;e++){var r=(0,i[e])(t);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");t=r}}return t},disallowProperty:function(t,i,e){if(void 0!==t[i])throw new TypeError(e+" can't have a ."+i+" property.")}};return i}function s(t){var i,r=e(t.key);"method"===t.kind?i={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?i={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?i={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(i={configurable:!0,writable:!0,enumerable:!0});var s={kind:"field"===t.kind?"field":"method",key:r,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:i};return t.decorators&&(s.decorators=t.decorators),"field"===t.kind&&(s.initializer=t.value),s}function n(t,i){void 0!==t.descriptor.get?i.descriptor.get=t.descriptor.get:i.descriptor.set=t.descriptor.set}function o(t){return t.decorators&&t.decorators.length}function l(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function h(t,i){var e=t[i];if(void 0!==e&&"function"!=typeof e)throw new TypeError("Expected '"+i+"' to be a function");return e}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,c=Symbol();class u{constructor(t,i){if(i!==c)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return a&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const d=new Map,f=t=>(t=>{let i=d.get(t);return void 0===i&&d.set(t,i=new u(t,c)),i})("string"==typeof t?t:t+""),v=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return f(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var p,m,y,b;const w={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},g=(t,i)=>i!==t&&(i==i||t==t),S={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:g};class k extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,e)=>{const r=this.Πp(e,i);void 0!==r&&(this.Πm.set(r,e),t.push(r))})),t}static createProperty(t,i=S){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,e,i);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(r){const s=this[t];this[i]=r,this.requestUpdate(t,s,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||S}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(v(t))}else void 0!==t&&i.push(v(t));return i}static Πp(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,e;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{a?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((i=>{const e=document.createElement("style");e.textContent=i.cssText,t.appendChild(e)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,i,e){this.K(t,e)}Πj(t,i,e=S){var r,s;const n=this.constructor.Πp(t,e);if(void 0!==n&&!0===e.reflect){const o=(null!==(s=null===(r=e.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==s?s:w.toAttribute)(i,e.type);this.Πh=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this.Πh=null}}K(t,i){var e,r,s;const n=this.constructor,o=n.Πm.get(t);if(void 0!==o&&this.Πh!==o){const t=n.getPropertyOptions(o),l=t.converter,h=null!==(s=null!==(r=null===(e=l)||void 0===e?void 0:e.fromAttribute)&&void 0!==r?r:"function"==typeof l?l:null)&&void 0!==s?s:w.fromAttribute;this.Πh=o,this[o]=h(i,t.type),this.Πh=null}}requestUpdate(t,i,e){let r=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===e.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,e))):r=!1),!this.isUpdatePending&&r&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const e=this.L;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(e)):this.Π$()}catch(t){throw i=!1,this.Π$(),t}i&&this.E(e)}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var E,C,A,T;k.finalized=!0,k.elementProperties=new Map,k.elementStyles=[],k.shadowRootOptions={mode:"open"},null===(m=(p=globalThis).reactiveElementPlatformSupport)||void 0===m||m.call(p,{ReactiveElement:k}),(null!==(y=(b=globalThis).reactiveElementVersions)&&void 0!==y?y:b.reactiveElementVersions=[]).push("1.0.0-rc.2");const $=globalThis.trustedTypes,x=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,j=`lit$${(Math.random()+"").slice(9)}$`,O="?"+j,D=`<${O}>`,_=document,M=(t="")=>_.createComment(t),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,N=/>/g,U=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,F=/'/g,q=/"/g,L=/^(?:script|style|textarea)$/i,W=(t=>(i,...e)=>({_$litType$:t,strings:i,values:e}))(1),J=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),H=new WeakMap,K=_.createTreeWalker(_,129,null,!1),Z=(t,i)=>{const e=t.length-1,r=[];let s,n=2===i?"<svg>":"",o=P;for(let i=0;i<e;i++){const e=t[i];let l,h,a=-1,c=0;for(;c<e.length&&(o.lastIndex=c,h=o.exec(e),null!==h);)c=o.lastIndex,o===P?"!--"===h[1]?o=I:void 0!==h[1]?o=N:void 0!==h[2]?(L.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=U):void 0!==h[3]&&(o=U):o===U?">"===h[0]?(o=null!=s?s:P,a=-1):void 0===h[1]?a=-2:(a=o.lastIndex-h[2].length,l=h[1],o=void 0===h[3]?U:'"'===h[3]?q:F):o===q||o===F?o=U:o===I||o===N?o=P:(o=U,s=void 0);const u=o===U&&t[i+1].startsWith("/>")?" ":"";n+=o===P?e+D:a>=0?(r.push(l),e.slice(0,a)+"$lit$"+e.slice(a)+j+u):e+j+(-2===a?(r.push(void 0),i):u)}const l=n+(t[e]||"<?>")+(2===i?"</svg>":"");return[void 0!==x?x.createHTML(l):l,r]};class X{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let s=0,n=0;const o=t.length-1,l=this.parts,[h,a]=Z(t,i);if(this.el=X.createElement(h,e),K.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(r=K.nextNode())&&l.length<o;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const i of r.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(j)){const e=a[n++];if(t.push(i),void 0!==e){const t=r.getAttribute(e.toLowerCase()+"$lit$").split(j),i=/([.?@])?(.*)/.exec(e);l.push({type:1,index:s,name:i[2],strings:t,ctor:"."===i[1]?tt:"?"===i[1]?it:"@"===i[1]?et:Y})}else l.push({type:6,index:s})}for(const i of t)r.removeAttribute(i)}if(L.test(r.tagName)){const t=r.textContent.split(j),i=t.length-1;if(i>0){r.textContent=$?$.emptyScript:"";for(let e=0;e<i;e++)r.append(t[e],M()),K.nextNode(),l.push({type:2,index:++s});r.append(t[i],M())}}}else if(8===r.nodeType)if(r.data===O)l.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(j,t+1));)l.push({type:7,index:s}),t+=j.length-1}s++}}static createElement(t,i){const e=_.createElement("template");return e.innerHTML=t,e}}function G(t,i,e=t,r){var s,n,o,l;if(i===J)return i;let h=void 0!==r?null===(s=e.Σi)||void 0===s?void 0:s[r]:e.Σo;const a=R(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(n=null==h?void 0:h.O)||void 0===n||n.call(h,!1),void 0===a?h=void 0:(h=new a(t),h.T(t,e,r)),void 0!==r?(null!==(o=(l=e).Σi)&&void 0!==o?o:l.Σi=[])[r]=h:e.Σo=h),void 0!==h&&(i=G(t,h.S(t,i.values),h,r)),i}class Q{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i}u(t){var i;const{el:{content:e},parts:r}=this.D,s=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:_).importNode(e,!0);K.currentNode=s;let n=K.nextNode(),o=0,l=0,h=r[0];for(;void 0!==h;){if(o===h.index){let i;2===h.type?i=new V(n,n.nextSibling,this,t):1===h.type?i=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(i=new rt(n,this,t)),this.l.push(i),h=r[++l]}o!==(null==h?void 0:h.index)&&(n=K.nextNode(),o++)}return s}v(t){let i=0;for(const e of this.l)void 0!==e&&(void 0!==e.strings?(e.I(t,e,i),i+=e.strings.length-2):e.I(t[i])),i++}}class V{constructor(t,i,e,r){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=e,this.options=r}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=G(this,t,i),R(t)?t===B||null==t||""===t?(this.H!==B&&this.R(),this.H=B):t!==this.H&&t!==J&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var i;return z(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(_.createTextNode(t)),this.H=t}_(t){var i;const{values:e,_$litType$:r}=t,s="number"==typeof r?this.C(t):(void 0===r.el&&(r.el=X.createElement(r.h,this.options)),r);if((null===(i=this.H)||void 0===i?void 0:i.D)===s)this.H.v(e);else{const t=new Q(s,this),i=t.u(this.options);t.v(e),this.$(i),this.H=t}}C(t){let i=H.get(t.strings);return void 0===i&&H.set(t.strings,i=new X(t)),i}g(t){z(this.H)||(this.H=[],this.R());const i=this.H;let e,r=0;for(const s of t)r===i.length?i.push(e=new V(this.k(M()),this.k(M()),this,this.options)):e=i[r],e.I(s),r++;r<i.length&&(this.R(e&&e.B.nextSibling,r),i.length=r)}R(t=this.A.nextSibling,i){var e;for(null===(e=this.P)||void 0===e||e.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i}}}class Y{constructor(t,i,e,r,s){this.type=1,this.H=B,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=r,this.options=s,e.length>2||""!==e[0]||""!==e[1]?(this.H=Array(e.length-1).fill(B),this.strings=e):this.H=B}get tagName(){return this.element.tagName}I(t,i=this,e,r){const s=this.strings;let n=!1;if(void 0===s)t=G(this,t,i,0),n=!R(t)||t!==this.H&&t!==J,n&&(this.H=t);else{const r=t;let o,l;for(t=s[0],o=0;o<s.length-1;o++)l=G(this,r[e+o],i,o),l===J&&(l=this.H[o]),n||(n=!R(l)||l!==this.H[o]),l===B?t=B:t!==B&&(t+=(null!=l?l:"")+s[o+1]),this.H[o]=l}n&&!r&&this.W(t)}W(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===B?void 0:t}}class it extends Y{constructor(){super(...arguments),this.type=4}W(t){t&&t!==B?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class et extends Y{constructor(){super(...arguments),this.type=5}I(t,i=this){var e;if((t=null!==(e=G(this,t,i,0))&&void 0!==e?e:B)===J)return;const r=this.H,s=t===B&&r!==B||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==B&&(r===B||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var i,e;"function"==typeof this.H?this.H.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this.H.handleEvent(t)}}class rt{constructor(t,i,e){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=e}I(t){G(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var st,nt,ot,lt,ht,at;null===(C=(E=globalThis).litHtmlPlatformSupport)||void 0===C||C.call(E,X,V),(null!==(A=(T=globalThis).litHtmlVersions)&&void 0!==A?A:T.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(st=(at=globalThis).litElementVersions)&&void 0!==st?st:at.litElementVersions=[]).push("3.0.0-rc.2");class ct extends k{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();super.update(t),this.Φt=((t,i,e)=>{var r,s;const n=null!==(r=null==e?void 0:e.renderBefore)&&void 0!==r?r:i;let o=n._$litPart$;if(void 0===o){const t=null!==(s=null==e?void 0:e.renderBefore)&&void 0!==s?s:null;n._$litPart$=o=new V(i.insertBefore(M(),t),t,void 0,e)}return o.I(t),o})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return J}}ct.finalized=!0,ct._$litElement$=!0,null===(ot=(nt=globalThis).litElementHydrateSupport)||void 0===ot||ot.call(nt,{LitElement:ct}),null===(ht=(lt=globalThis).litElementPlatformSupport)||void 0===ht||ht.call(lt,{LitElement:ct});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ut(t,i){return(({finisher:t,descriptor:i})=>(e,r)=>{var s;if(void 0===r){const r=null!==(s=e.originalKey)&&void 0!==s?s:e.key,n=null!=i?{kind:"method",placement:"prototype",key:r,descriptor:i(e.key)}:{...e,key:r};return null!=t&&(n.finisher=function(i){t(i,r)}),n}{const s=e.constructor;void 0!==i&&Object.defineProperty(e,r,i(r)),null==t||t(s,r)}})({descriptor:e=>{const r={get(){var i;return null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t)},enumerable:!0,configurable:!0};if(i){const i="symbol"==typeof e?Symbol():"__"+e;r.get=function(){var e;return void 0===this[i]&&(this[i]=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)),this[i]}}return r}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(e){e.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(e){e.createProperty(i.key,t)}};function ft(t){return(i,e)=>void 0!==e?((t,i,e)=>{i.constructor.createProperty(e,t)})(t,i,e):dt(t,i)}let vt=function(t,i,e,h){var a=r();if(h)for(var c=0;c<h.length;c++)a=h[c](a);var u=i((function(t){a.initializeInstanceElements(t,d.elements)}),e),d=a.decorateClass(function(t){for(var i=[],e=function(t){return"method"===t.kind&&t.key===h.key&&t.placement===h.placement},r=0;r<t.length;r++){var s,h=t[r];if("method"===h.kind&&(s=i.find(e)))if(l(h.descriptor)||l(s.descriptor)){if(o(h)||o(s))throw new ReferenceError("Duplicated methods ("+h.key+") can't be decorated.");s.descriptor=h.descriptor}else{if(o(h)){if(o(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+h.key+").");s.decorators=h.decorators}n(h,s)}else i.push(h)}return i}(u.d.map(s)),t);return a.initializeClassElements(u.F,d.elements),a.runClassFinishers(u.F,d.finishers)}(null,(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[ut("form")],key:"_form",value:void 0},{kind:"field",decorators:[ut("ul")],key:"_list",value:void 0},{kind:"field",decorators:[ft()],key:"subs",value:()=>[]},{kind:"method",key:"render",value:function(){return W`
      <ul>
<slot></slot>
${this.subs.map((t=>W`<li> ${t.name}'s ${t.subscription_type} subscription</li>`))}
      </ul>
      <form>
      <input name="name" required></input>
      <input name="email" type="email" required></input>
      <label for="sub_type">Type</label>
      <select id="sub_type" name="subscription_type" required>
        <option value="free">Free</option>
        <option value="plus" selected>Plus</option>
        <option value="pro">Pro</option>
      </select>
      </form>
      <button @click=${this._onClick} part="button">Add</button>
    `}},{kind:"method",key:"_onClick",value:function(){const t=this.serialize(this._form);if(""===t.name)return;if(""===t.email)return;const i=JSON.stringify(t),e=function(t){let i=null;if(document.cookie&&""!==document.cookie){const e=document.cookie.split(";");for(let r=0;r<e.length;r++){const s=e[r].trim();if(s.substring(0,t.length+1)===t+"="){i=decodeURIComponent(s.substring(t.length+1));break}}}return i}("csrftoken"),r=new Request("/ajax-target",{headers:{"X-CSRFToken":e}});fetch(r,{method:"POST",mode:"same-origin",body:i}).then((i=>{this.subs.push(t),this.update()}))}},{kind:"method",key:"serialize",value:function(t){const i=new FormData(t),e={};for(const[t,r]of i)e[t]=r;return e}}]}}),ct);window.customElements.define("subscribe-matic",vt);export{vt as SubscribeMatic};