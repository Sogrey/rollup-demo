(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  var module$1 = {
      name: '小明',
      age: 29
  };

  const fn1 = () => {
    alert('fn1');
  };
  const fn2 = () => {
    alert('fn2');
  };

  console.log(module$1);
  fn1();
  fn2();

})));
