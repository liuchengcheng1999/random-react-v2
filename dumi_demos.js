(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"9kvl":function(e,t,r){"use strict";var n=r("FfOG");r.d(t,"a",(function(){return n["b"]}));r("bCY9")},F4QJ:function(e,t,r){"use strict";function n(){var e=i(r("q1tI"));return n=function(){return e},e}function o(){var e=r("dEAq");return o=function(){return e},e}function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t=f(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){var t=l(e,"string");return"symbol"===typeof t?t:String(t)}function l(e,t){if("object"!==typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var p=function(e){return e.render()},s=function(e,t){var r=[],i=e.match.params.uuid,u=void 0===e.location.query.wrapper,a=t[i];if(a){var f=c(c({},a.previewerProps),{},{hideActions:(a.previewerProps.hideActions||[]).concat(["EXTERNAL"])});void 0!==e.location.query.capture&&(f.motions=(f.motions||[]).slice(),f.motions.unshift("autoplay"),f.motions.every((function(e){return!e.startsWith("capture")}))&&f.motions.push("capture:[id|=root]")),r=u?[n()["default"].createElement(p,{render:function(){return(0,o().useMotions)(f.motions||[],"undefined"!==typeof window?document.documentElement:null),n()["default"].createElement("div",{},n()["default"].createElement(a.component))}})]:[f,n()["default"].createElement(a.component)]}return r};t["default"]=s}}]);