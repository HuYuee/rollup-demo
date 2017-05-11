(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.a = factory());
}(this, (function () { 'use strict';

var foo = 'hello world!  hello huyue';

var index = function () {
  console.log(foo);
};

return index;

})));
