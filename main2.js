"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

// import "@babel/polyfill";
console.log(Array.from([1, 2]));
setTimeout(function () {
  console.log(3);
});
