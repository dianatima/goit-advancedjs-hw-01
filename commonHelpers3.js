import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l as r}from"./assets/vendor-78be7656.js";const o=document.querySelector(".feedback-form"),l=document.querySelector(".feedback-form input"),c=document.querySelector(".feedback-form textarea"),t="feedback-form-state";o.addEventListener("input",r(n,500));o.addEventListener("submit",s);let a={};m();function n(e){a={...JSON.parse(localStorage.getItem(t)),[e.target.name]:e.target.value},localStorage.setItem(t,JSON.stringify(a))}function m(){const e=JSON.parse(localStorage.getItem(t));e&&(l.value=e.email||"",c.value=e.message||"")}function s(e){e.preventDefault(),e.currentTarget.reset(),console.log(JSON.parse(localStorage.getItem(t))),localStorage.removeItem(t)}
//# sourceMappingURL=commonHelpers3.js.map