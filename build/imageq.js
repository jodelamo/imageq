!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(1)},function(t,e){"use strict";function n(t){return new Promise(function(e,n){var r=window.document.createElement("img"),o=window.document.createElement("canvas"),i=o.getContext("2d");r.src=t,r.onload=function(){i.drawImage(r,0,0),e(i.getImageData(0,0,r.width,r.height))},r.onerror=function(t){n(t)}})}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t,e){return Promise.all([n(t),n(e)]).then(function(t){var e=t[0],n=t[1],r=void 0;if(e.width!==n.width||e.height!==n.height)return!1;for(r=0;r<e.width*e.height;++r)if(e.data[r]!==n.data[r])return!1;return!0})}}]);