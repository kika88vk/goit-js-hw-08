!function(){var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i="Expected a function",r=0/0,o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),g=Object.prototype.toString,m=Math.max,p=Math.min,v=function(){return d.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==g.call(t))return r;if(y(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=u.test(e);return i||f.test(e)?l(e.slice(2),i?2:8):a.test(e)?r:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),function(e,t,n){var r,o,a,u,f,l,c=0,s=!1,d=!1,g=!0;if("function"!=typeof e)throw TypeError(i);function S(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function T(e){var n=e-l,i=e-c;return void 0===l||n>=t||n<0||d&&i>=a}function j(){var e,n,i,r=v();if(T(r))return O(r);f=setTimeout(j,(e=r-l,n=r-c,i=t-e,d?p(i,a-n):i))}function O(e){return(f=void 0,g&&r)?S(e):(r=o=void 0,u)}function h(){var e,n=v(),i=T(n);if(r=arguments,o=this,l=n,i){if(void 0===f)return c=e=l,f=setTimeout(j,t),s?S(e):u;if(d)return f=setTimeout(j,t),S(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(b(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},h.flush=function(){return void 0===f?u:O(v())},h}(e,t,{leading:r,maxWait:t,trailing:o})};let S=document.querySelector(".feedback-form"),T=document.querySelector("input"),j=document.querySelector("textarea"),O="feedback-form-state";S.addEventListener("input",((e=n)&&e.__esModule?e.default:e)(function(e){h[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(h))},500)),S.addEventListener("submit",function(e){e.preventDefault();let{elements:{email:t,message:n}}=e.currentTarget;if(""===t.value||""===n.value)return alert("Не заповнені поля!!!");console.log(h),e.currentTarget.reset(),h={}}),function(){let e=JSON.parse(localStorage.getItem(O))||{};e.email&&(T.textContent=e.email),e.message&&(j.textContent=e.message)}();let h=JSON.parse(localStorage.getItem(O))||{}}();
//# sourceMappingURL=03-feedback.c0eace30.js.map
