(function (exports) {
'use strict';

var x = function(){
    console.log('its tool is x ! ');
};
var y = function(){
    console.log('its tool is y ! ');
};
var z = function(){
    console.log('its tool is z ! ');
};

exports.x = x;
exports.y = y;
exports.z = z;

}((this.bar = this.bar || {})));
