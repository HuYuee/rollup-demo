(function (exports) {
'use strict';

var xx = function() {
    console.log('its test is xx !');
};

exports.xx = xx;
exports.zz = zz;

}((this.bar = this.bar || {})));
