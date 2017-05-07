import {
    y,
    z
} from './tool.js'

var xx = function() {
    console.log('its test is xx !');
}
var yy = function() {
    y();
    console.log('its test is yy !');
}
// var zz = function(){
//     z();
//     console.log('its test is zz !');
// }

// var zz = {
//     y: y,
//     z: z
// }
// window.u = zz;


// y();
export {
    xx,
    zz
}
