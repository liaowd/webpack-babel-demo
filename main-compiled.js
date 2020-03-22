import "core-js/modules/es.array.from";
import "core-js/modules/es.string.iterator";
// import "@babel/polyfill"; //不需要引入，usage???有问题？
console.log(Array.from([1, 2])); // 通过配置babel-loader、babel.config.js，编译了箭头函数

setTimeout(function () {
  console.log(3);
});
