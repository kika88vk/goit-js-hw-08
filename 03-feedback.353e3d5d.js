var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",r=0/0,i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return s.Date.now()};function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return r;if(m(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=m(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var l=a.test(e);return l||u.test(e)?f(e.slice(2),l?2:8):o.test(e)?r:+e}t=function(e,t,r){var i=!0,o=!0;if("function"!=typeof e)throw TypeError(n);return m(r)&&(i="leading"in r?!!r.leading:i,o="trailing"in r?!!r.trailing:o),function(e,t,r){var i,o,a,u,f,l,c=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function j(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function S(e){var n=e-l,r=e-c;return void 0===l||n>=t||n<0||d&&r>=a}function T(){var e,n,r,i=g();if(S(i))return h(i);f=setTimeout(T,(e=i-l,n=i-c,r=t-e,d?p(r,a-n):r))}function h(e){return(f=void 0,b&&i)?j(e):(i=o=void 0,u)}function O(){var e,n=g(),r=S(n);if(i=arguments,o=this,l=n,r){if(void 0===f)return c=e=l,f=setTimeout(T,t),s?j(e):u;if(d)return f=setTimeout(T,t),j(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=y(t)||0,m(r)&&(s=!!r.leading,a=(d="maxWait"in r)?v(y(r.maxWait)||0,t):a,b="trailing"in r?!!r.trailing:b),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},O.flush=function(){return void 0===f?u:h(g())},O}(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),j=document.querySelector("input"),S=document.querySelector("textarea"),T="feedback-form-state";b.addEventListener("input",(function(e){return e&&e.__esModule?e.default:e})(t)(function(e){h[e.target.name]=e.target.value,localStorage.setItem(T,JSON.stringify(h))},500)),b.addEventListener("submit",function(e){if(e.preventDefault(),""===j.value||""===S.value)return alert("Не заповнені поля!!!");console.log(h),e.currentTarget.reset(),localStorage.removeItem(T)});let h=JSON.parse(localStorage.getItem(T))||{};h&&(j.value=h.email||"",S.value=h.message||"");
//# sourceMappingURL=03-feedback.353e3d5d.js.map