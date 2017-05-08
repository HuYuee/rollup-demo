/**
 * rollup-demo v1.0.0
 * rollup技术分享
 * author :
 * homepage : https://github.com/HuYuee/rollup-demo#readme
 * bugs : https://github.com/HuYuee/rollup-demo/issues
 */

(function (exports) {
'use strict';

var xx = function xx() {
    console.log('its test is xx !');
};

exports.xx = xx;

}((this.bar = this.bar || {})));
