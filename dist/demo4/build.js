'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Module : Sparrow extend enum
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-27 21:46:50
 */

var U_LANGUAGES = "i_languages";
var U_THEME = "u_theme";
var U_LOCALE = "u_locale";
var U_USERCODE = "usercode";
var U_TIMEZONE = "u_timezone";

var enumerables = true;
var enumerablesTest = {
	toString: 1
};
for (var i in enumerablesTest) {
	enumerables = null;
}
if (enumerables) {
	enumerables = ['hasOwnProperty', 'valueOf', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'constructor'];
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};











var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * Module : Sparrow extend
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-27 21:46:50
 */

/**
 * 复制对象属性
 *
 * @param {Object}  目标对象
 * @param {config} 源对象
 */
var extend = function extend(object, config) {
	var args = arguments,
	    options;
	if (args.length > 1) {
		for (var len = 1; len < args.length; len++) {
			options = args[len];
			if (object && options && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
				var i, j, k;
				for (i in options) {
					object[i] = options[i];
				}
				if (enumerables) {
					for (j = enumerables.length; j--;) {
						k = enumerables[j];
						if (options.hasOwnProperty && options.hasOwnProperty(k)) {
							object[k] = options[k];
						}
					}
				}
			}
		}
	}
	return object;
};

if (!Object.assign) {
	Object.assign = extend;
}

/**
 * Module : Sparrow cookies
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-27 21:46:50
 */

var setCookie = function setCookie(sName, sValue, oExpires, sPath, sDomain, bSecure) {
	var sCookie = sName + "=" + encodeURIComponent(sValue);
	if (oExpires) sCookie += "; expires=" + oExpires.toGMTString();
	if (sPath) sCookie += "; path=" + sPath;
	if (sDomain) sCookie += "; domain=" + sDomain;
	if (bSecure) sCookie += "; secure=" + bSecure;
	document.cookie = sCookie;
};

var getCookie = function getCookie(sName) {
	var sRE = "(?:; )?" + sName + "=([^;]*);?";
	var oRE = new RegExp(sRE);

	if (oRE.test(document.cookie)) {
		return decodeURIComponent(RegExp["$1"]);
	} else return null;
};

/**
 * Module : Sparrow util tools
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-27 21:46:50
 */

/**
 * 创建一个带壳的对象,防止外部修改
 * @param {Object} proto
 */
var createShellObject = function createShellObject(proto) {
	var exf = function exf() {};
	exf.prototype = proto;
	return new exf();
};
var execIgnoreError$1 = function execIgnoreError(a, b, c) {
	try {
		a.call(b, c);
	} catch (e) {}
};

var getFunction = function getFunction(target, val) {
	if (!val || typeof val == 'function') return val;
	if (typeof target[val] == 'function') return target[val];else if (typeof window[val] == 'function') return window[val];else if (val.indexOf('.') != -1) {
		var func = getJSObject(target, val);
		if (typeof func == 'function') return func;
		func = getJSObject(window, val);
		if (typeof func == 'function') return func;
	}
	return val;
};
var getJSObject = function getJSObject(target, names) {
	if (!names) {
		return;
	}
	if ((typeof names === 'undefined' ? 'undefined' : _typeof(names)) == 'object') return names;
	var nameArr = names.split('.');
	var obj = target;
	for (var i = 0; i < nameArr.length; i++) {
		obj = obj[nameArr[i]];
		if (!obj) return null;
	}
	return obj;
};
var isDate = function isDate(input) {
	return Object.prototype.toString.call(input) === '[object Date]' || input instanceof Date;
};
var isNumber$1 = function isNumber(obj) {
	//return obj === +obj
	//加了个typeof 判断，因为'431027199110.078573'会解析成number
	return obj - parseFloat(obj) + 1 >= 0;
};
var isArray = Array.isArray || function (val) {
	return Object.prototype.toString.call(val) === '[object Array]';
};
var isEmptyObject = function isEmptyObject(obj) {
	var name;
	for (name in obj) {
		return false;
	}
	return true;
};
var inArray = function inArray(node, arr) {
	if (!arr instanceof Array) {
		throw "arguments is not Array";
	}
	for (var i = 0, k = arr.length; i < k; i++) {
		if (node == arr[i]) {
			return true;
		}
	}
	return false;
};
var isDomElement = function isDomElement(obj) {
	if (window['HTMLElement']) {
		return obj instanceof HTMLElement;
	} else {
		return obj && obj.tagName && obj.nodeType === 1;
	}
};
var each = function each(obj, callback) {
	if (obj.forEach) {
		obj.forEach(function (v, k) {
			callback(k, v);
		});
	} else if (obj instanceof Object) {
		for (var k in obj) {
			callback(k, obj[k]);
		}
	} else {
		return;
	}
};
try {
	NodeList.prototype.forEach = Array.prototype.forEach;
} catch (e) {}

/**
 * 获得字符串的字节长度
 */
String.prototype.lengthb = function () {
	//	var str = this.replace(/[^\x800-\x10000]/g, "***");
	var str = this.replace(/[^\x00-\xff]/g, "**");
	return str.length;
};

/**
 * 将AFindText全部替换为ARepText
 */
String.prototype.replaceAll = function (AFindText, ARepText) {
	//自定义String对象的方法
	var raRegExp = new RegExp(AFindText, "g");
	return this.replace(raRegExp, ARepText);
};

var dateFormat = function dateFormat(str) {
	//如果不是string类型  原型返回
	if (typeof str !== 'string') {
		return str;
	}
	//判断 str 格式如果是 yy-mm-dd
	if (str && str.indexOf('-') > -1) {
		//获取当前是否是 ios版本,>8是因为ios不识别new Date（“2016/11”）格式
		var ua = navigator.userAgent.toLowerCase();
		if (/iphone|ipad|ipod/.test(ua)) {
			//转换成 yy/mm/dd
			str = str.replace(/-/g, "/");
			str = str.replace(/(^\s+)|(\s+$)/g, "");
			if (str.length <= 8) {
				str = str += "/01";
			}
		}
	}

	return str;
};

/**
 * Module : Sparrow browser environment
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-27 21:46:50
 */

var u$1 = {};

extend(u$1, {
	isIE: false,
	isFF: false,
	isOpera: false,
	isChrome: false,
	isSafari: false,
	isWebkit: false,
	isIE8_BEFORE: false,
	isIE8: false,
	isIE8_CORE: false,
	isIE9: false,
	isIE9_CORE: false,
	isIE10: false,
	isIE10_ABOVE: false,
	isIE11: false,
	isEdge: false,
	isIOS: false,
	isIphone: false,
	isIPAD: false,
	isStandard: false,
	version: 0,
	isWin: false,
	isUnix: false,
	isLinux: false,
	isAndroid: false,
	isAndroidPAD: false,
	isAndroidPhone: false,
	isMac: false,
	hasTouch: false,
	isMobile: false
});

(function () {
	var userAgent = navigator.userAgent,
	    rMsie = /(msie\s|trident.*rv:)([\w.]+)/,
	    rFirefox = /(firefox)\/([\w.]+)/,
	    rOpera = /(opera).+version\/([\w.]+)/,
	    rChrome = /(chrome)\/([\w.]+)/,
	    rSafari = /version\/([\w.]+).*(safari)/,
	    version,
	    ua = userAgent.toLowerCase(),
	    s,
	    browserMatch = {
		browser: "",
		version: ''
	},
	    match = rMsie.exec(ua);

	if (match != null) {
		browserMatch = {
			browser: "IE",
			version: match[2] || "0"
		};
	}
	match = rFirefox.exec(ua);
	if (match != null) {
		browserMatch = {
			browser: match[1] || "",
			version: match[2] || "0"
		};
	}
	match = rOpera.exec(ua);
	if (match != null) {
		browserMatch = {
			browser: match[1] || "",
			version: match[2] || "0"
		};
	}
	match = rChrome.exec(ua);
	if (match != null) {
		browserMatch = {
			browser: match[1] || "",
			version: match[2] || "0"
		};
	}
	match = rSafari.exec(ua);
	if (match != null) {
		browserMatch = {
			browser: match[2] || "",
			version: match[1] || "0"
		};
	}

	if (userAgent.indexOf("Edge") > -1) {
		u$1.isEdge = true;
	}
	if (s = ua.match(/opera.([\d.]+)/)) {
		u$1.isOpera = true;
	} else if (browserMatch.browser == "IE" && browserMatch.version == 11) {
		u$1.isIE11 = true;
		u$1.isIE = true;
	} else if (s = ua.match(/chrome\/([\d.]+)/)) {
		u$1.isChrome = true;
		u$1.isStandard = true;
	} else if (s = ua.match(/version\/([\d.]+).*safari/)) {
		u$1.isSafari = true;
		u$1.isStandard = true;
	} else if (s = ua.match(/gecko/)) {
		//add by licza : support XULRunner
		u$1.isFF = true;
		u$1.isStandard = true;
	} else if (s = ua.match(/msie ([\d.]+)/)) {
		u$1.isIE = true;
	} else if (s = ua.match(/firefox\/([\d.]+)/)) {
		u$1.isFF = true;
		u$1.isStandard = true;
	}
	if (ua.match(/webkit\/([\d.]+)/)) {
		u$1.isWebkit = true;
	}
	if (ua.match(/ipad/i)) {
		u$1.isIOS = true;
		u$1.isIPAD = true;
		u$1.isStandard = true;
	}

	if (ua.match(/iphone/i)) {
		u$1.isIOS = true;
		u$1.isIphone = true;
	}

	if (navigator.platform == "Mac68K" || navigator.platform == "MacPPC" || navigator.platform == "Macintosh" || navigator.platform == "MacIntel") {
		//u.isIOS = true;
		u$1.isMac = true;
	}

	if (navigator.platform == "Win32" || navigator.platform == "Windows" || navigator.platform == "Win64") {
		u$1.isWin = true;
	}

	if (navigator.platform == "X11" && !u$1.isWin && !u$1.isMac) {
		u$1.isUnix = true;
	}
	if (String(navigator.platform).indexOf("Linux") > -1) {
		u$1.isLinux = true;
	}

	if (ua.indexOf('Android') > -1 || ua.indexOf('android') > -1 || ua.indexOf('Adr') > -1 || ua.indexOf('adr') > -1) {
		u$1.isAndroid = true;
	}

	u$1.version = version ? browserMatch.version ? browserMatch.version : 0 : 0;
	if (u$1.isAndroid) {
		if (window.screen.width >= 768 && window.screen.width < 1024) {
			u$1.isAndroidPAD = true;
		}
		if (window.screen.width <= 768) {
			u$1.isAndroidPhone = true;
		}
	}
	if (u$1.isIE) {
		var intVersion = parseInt(u$1.version);
		var mode = document.documentMode;
		if (mode == null) {
			if (intVersion == 6 || intVersion == 7) {
				u$1.isIE8_BEFORE = true;
			}
		} else {
			if (mode == 7) {
				u$1.isIE8_BEFORE = true;
			} else if (mode == 8) {
				u$1.isIE8 = true;
			} else if (mode == 9) {
				u$1.isIE9 = true;
				u$1.isSTANDARD = true;
			} else if (mode == 10) {
				u$1.isIE10 = true;
				u$1.isSTANDARD = true;
				u$1.isIE10_ABOVE = true;
			} else {
				u$1.isSTANDARD = true;
			}
			if (intVersion == 8) {
				u$1.isIE8_CORE = true;
			} else if (intVersion == 9) {
				u$1.isIE9_CORE = true;
			} else if (browserMatch.version == 11) {
				u$1.isIE11 = true;
			}
		}
	}
	if ("ontouchend" in document) {
		u$1.hasTouch = true;
	}
	if (u$1.isIphone || u$1.isAndroidPhone) u$1.isMobile = true;
})();

var env$1 = u$1;

/**
 * Module : Sparrow touch event
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-28 14:41:17
 */

var on$1 = function on(element, eventName, child, listener) {
	if (!element) return;
	if (arguments.length < 4) {
		listener = child;
		child = undefined;
	} else {
		var childlistener = function childlistener(e) {
			if (!e) {
				return;
			}
			var tmpchildren = element.querySelectorAll(child);
			tmpchildren.forEach(function (node) {
				if (node == e.target) {
					listener.call(e.target, e);
				}
			});
		};
	}
	//capture = capture || false;

	if (!element["uEvent"]) {
		//在dom上添加记录区
		element["uEvent"] = {};
	}
	//判断是否元素上是否用通过on方法填加进去的事件
	if (!element["uEvent"][eventName]) {
		element["uEvent"][eventName] = [child ? childlistener : listener];
		if (u.event && u.event[eventName] && u.event[eventName].setup) {
			u.event[eventName].setup.call(element);
		}
		element["uEvent"][eventName + 'fn'] = function (e) {
			//火狐下有问题修改判断
			if (!e) e = typeof event != 'undefined' && event ? event : window.event;
			element["uEvent"][eventName].forEach(function (fn) {
				try {
					e.target = e.target || e.srcElement; //兼容IE8
				} catch (ee) {}
				if (fn) fn.call(element, e);
			});
		};
		if (element.addEventListener) {
			// 用于支持DOM的浏览器
			element.addEventListener(eventName, element["uEvent"][eventName + 'fn']);
		} else if (element.attachEvent) {
			// 用于IE浏览器
			element.attachEvent("on" + eventName, element["uEvent"][eventName + 'fn']);
		} else {
			// 用于其它浏览器
			element["on" + eventName] = element["uEvent"][eventName + 'fn'];
		}
	} else {
		//如果有就直接往元素的记录区添加事件
		var lis = child ? childlistener : listener;
		var hasLis = false;
		element["uEvent"][eventName].forEach(function (fn) {
			if (fn == lis) {
				hasLis = true;
			}
		});
		if (!hasLis) {
			element["uEvent"][eventName].push(child ? childlistener : listener);
		}
	}
};

var off$1 = function off(element, eventName, listener) {
	//删除事件数组
	if (listener) {
		if (element && element["uEvent"] && element["uEvent"][eventName]) {
			element["uEvent"][eventName].forEach(function (fn, i) {
				if (fn == listener) {
					element["uEvent"][eventName].splice(i, 1);
				}
			});
		}
		return;
	}
	var eventfn;
	if (element && element["uEvent"] && element["uEvent"][eventName + 'fn']) eventfn = element["uEvent"][eventName + 'fn'];
	if (element.removeEventListener) {
		// 用于支持DOM的浏览器
		element.removeEventListener(eventName, eventfn);
	} else if (element.removeEvent) {
		// 用于IE浏览器
		element.removeEvent("on" + eventName, eventfn);
	} else {
		// 用于其它浏览器
		delete element["on" + eventName];
	}
	if (u.event && u.event[eventName] && u.event[eventName].teardown) {
		u.event[eventName].teardown.call(element);
	}

	if (element && element["uEvent"] && element["uEvent"][eventName]) element["uEvent"][eventName] = undefined;
	if (element && element["uEvent"] && element["uEvent"][eventName + 'fn']) element["uEvent"][eventName + 'fn'] = undefined;
};
var trigger$1 = function trigger(element, eventName) {
	if (element["uEvent"] && element["uEvent"][eventName]) {
		element["uEvent"][eventName + 'fn']();
	}
};

/**
 * 阻止冒泡
 */
var stopEvent = function stopEvent(e) {
	if (typeof e != "undefined") {
		if (e.stopPropagation) e.stopPropagation();else {
			e.cancelBubble = true;
		}
		//阻止默认浏览器动作(W3C)
		if (e && e.preventDefault) e.preventDefault();
		//IE中阻止函数器默认动作的方式
		else window.event.returnValue = false;
	}
};

/**
 * Module : Sparrow touch mobileEvents
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2017-03-16 14:41:17
 */

var u$2 = {};
u$2.event = {};

var touchStartEvent = env$1.hasTouch ? "touchstart" : "mousedown";
var touchStopEvent = env$1.hasTouch ? "touchend" : "mouseup";
var touchMoveEvent = env$1.hasTouch ? "touchmove" : "mousemove";

// tap和taphold
u$2.event.tap = {
    tapholdThreshold: 750,
    emitTapOnTaphold: true,
    touchstartFun: function touchstartFun() {
        trigger(this, 'vmousedown');
    },
    touchendFun: function touchendFun() {
        trigger(this, 'vmouseup');
        trigger(this, 'vclick');
    },
    setup: function setup() {
        var thisObject = this,
            isTaphold = false;

        on(thisObject, "vmousedown", function (event) {
            isTaphold = false;
            if (event.which && event.which !== 1) {
                return false;
            }

            var origTarget = event.target,
                timer;

            function clearTapTimer() {
                clearTimeout(timer);
            }

            function clearTapHandlers() {
                clearTapTimer();

                off(thisObject, 'vclick');
                off(thisObject, 'vmouseup');
                off(document, 'vmousecancel');
            }

            function clickHandler(event) {
                clearTapHandlers();

                // ONLY trigger a 'tap' event if the start target is
                // the same as the stop target.
                if (!isTaphold && origTarget === event.target) {
                    trigger(thisObject, 'tap');
                } else if (isTaphold) {
                    event.preventDefault();
                }
            }
            on(thisObject, 'vmouseup', clearTapTimer);
            on(thisObject, 'vclick', clickHandler);
            on(document, 'vmousecancel', clearTapHandlers);

            timer = setTimeout(function () {
                if (!u$2.event.tap.emitTapOnTaphold) {
                    isTaphold = true;
                }
                trigger(thisObject, "taphold");
                clearTapHandlers();
            }, u$2.event.tap.tapholdThreshold);
        });

        on(thisObject, 'touchstart', u$2.event.tap.touchstartFun);
        on(thisObject, 'touchend', u$2.event.tap.touchendFun);
    },
    teardown: function teardown() {
        off(thisObject, 'vmousedown');
        off(thisObject, 'vclick');
        off(thisObject, 'vmouseup');
        off(document, 'vmousecancel');
    }
};

u$2.event.taphold = u$2.event.tap;

u$2.event.swipe = {

    // More than this horizontal displacement, and we will suppress scrolling.
    scrollSupressionThreshold: 30,

    // More time than this, and it isn't a swipe.
    durationThreshold: 1000,

    // Swipe horizontal displacement must be more than this.
    horizontalDistanceThreshold: 30,

    // Swipe vertical displacement must be less than this.
    verticalDistanceThreshold: 30,

    getLocation: function getLocation(event) {
        var winPageX = window.pageXOffset,
            winPageY = window.pageYOffset,
            x = event.clientX,
            y = event.clientY;

        if (event.pageY === 0 && Math.floor(y) > Math.floor(event.pageY) || event.pageX === 0 && Math.floor(x) > Math.floor(event.pageX)) {

            // iOS4 clientX/clientY have the value that should have been
            // in pageX/pageY. While pageX/page/ have the value 0
            x = x - winPageX;
            y = y - winPageY;
        } else if (y < event.pageY - winPageY || x < event.pageX - winPageX) {

            // Some Android browsers have totally bogus values for clientX/Y
            // when scrolling/zooming a page. Detectable since clientX/clientY
            // should never be smaller than pageX/pageY minus page scroll
            x = event.pageX - winPageX;
            y = event.pageY - winPageY;
        }

        return {
            x: x,
            y: y
        };
    },

    start: function start(event) {
        var data = event.touches ? event.touches[0] : event,
            location = u$2.event.swipe.getLocation(data);
        return {
            time: new Date().getTime(),
            coords: [location.x, location.y],
            origin: event.target
        };
    },

    stop: function stop(event) {
        var data = event.touches ? event.touches[0] : event,
            location = u$2.event.swipe.getLocation(data);
        return {
            time: new Date().getTime(),
            coords: [location.x, location.y]
        };
    },

    handleSwipe: function handleSwipe(start, stop, thisObject, origTarget) {
        if (stop.time - start.time < u$2.event.swipe.durationThreshold && Math.abs(start.coords[0] - stop.coords[0]) > u$2.event.swipe.horizontalDistanceThreshold && Math.abs(start.coords[1] - stop.coords[1]) < u$2.event.swipe.verticalDistanceThreshold) {
            var direction = start.coords[0] > stop.coords[0] ? "swipeleft" : "swiperight";

            trigger(thisObject, "swipe");
            trigger(thisObject, direction);
            return true;
        }
        return false;
    },

    // This serves as a flag to ensure that at most one swipe event event is
    // in work at any given time
    eventInProgress: false,

    setup: function setup() {
        var events,
            thisObject = this,
            context = {};

        // Retrieve the events data for this element and add the swipe context
        events = thisObject["mobile-events"];
        if (!events) {
            events = {
                length: 0
            };
            thisObject["mobile-events"] = events;
        }
        events.length++;
        events.swipe = context;

        context.start = function (event) {

            // Bail if we're already working on a swipe event
            if (u$2.event.swipe.eventInProgress) {
                return;
            }
            u$2.event.swipe.eventInProgress = true;

            var stop,
                start = u$2.event.swipe.start(event),
                origTarget = event.target,
                emitted = false;

            context.move = function (event) {
                // if ( !start || event.isDefaultPrevented() ) {
                if (!start) {
                    return;
                }

                stop = u$2.event.swipe.stop(event);
                if (!emitted) {
                    emitted = u$2.event.swipe.handleSwipe(start, stop, thisObject, origTarget);
                    if (emitted) {

                        // Reset the context to make way for the next swipe event
                        u$2.event.swipe.eventInProgress = false;
                    }
                }
                // prevent scrolling
                if (Math.abs(start.coords[0] - stop.coords[0]) > u$2.event.swipe.scrollSupressionThreshold) {
                    event.preventDefault();
                }
            };

            context.stop = function () {
                emitted = true;

                // Reset the context to make way for the next swipe event
                u$2.event.swipe.eventInProgress = false;
                off(document, touchMoveEvent, context.move);
                context.move = null;
            };

            on(document, touchMoveEvent, context.move);
            on(document, touchStopEvent, context.stop);
        };
        on(thisObject, touchStartEvent, context.start);
    },

    teardown: function teardown() {
        var events, context;

        events = thisObject["mobile-events"];
        if (events) {
            context = events.swipe;
            delete events.swipe;
            events.length--;
            if (events.length === 0) {
                thisObject["mobile-events"] = null;
            }
        }

        if (context) {
            if (context.start) {
                off(thisObject, touchStartEvent, context.start);
            }
            if (context.move) {
                off(document, touchMoveEvent, context.move);
            }
            if (context.stop) {
                off(document, touchStopEvent, context.stop);
            }
        }
    }
};

u$2.event.swipeleft = u$2.event.swipe;

u$2.event.swiperight = u$2.event.swipe;

var event$1 = u$2.event;

/**
 * Module : Sparrow dom
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-16 13:59:17
 */
/**
 * 元素增加指定样式
 * @param value
 * @returns {*}
 */
var addClass = function addClass(element, value) {
	if (element) {
		if (typeof element.classList === 'undefined') {
			if (u._addClass) {
				u._addClass(element, value);
			} else {
				$(element).addClass(value);
			}
		} else {
			element.classList.add(value);
		}
	}

	return this;
};
/**
 * 删除元素上指定样式
 * @param {Object} element
 * @param {Object} value
 */
var removeClass = function removeClass(element, value) {
	if (element) {
		if (typeof element.classList === 'undefined') {
			if (u._removeClass) {
				u._removeClass(element, value);
			} else {
				$(element).removeClass(value);
			}
		} else {
			element.classList.remove(value);
		}
	}
	return this;
};
/**
 * 元素上是否存在该类
 * @param {Object} element
 * @param {Object} value
 */
var hasClass = function hasClass(element, value) {
	if (!element) return false;
	if (element.nodeName && (element.nodeName === '#text' || element.nodeName === '#comment')) return false;
	if (typeof element.classList === 'undefined') {
		if (u._hasClass) {
			return u._hasClass(element, value);
		} else {
			return $(element).hasClass(value);
		}

		return false;
	} else {
		return element.classList.contains(value);
	}
};
/**
 * 选择元素类切换
 * @param {Object} element
 * @param {Object} value
 */
var toggleClass = function toggleClass(element, value) {
	if (typeof element.classList === 'undefined') {
		return u._toggleClass(element, value);
	} else {
		return element.classList.toggle(value);
	}
};

/**
 * 向上查找指定类元素
 * @param {Object} element
 * @param {Object} selector
 */
var closest = function closest(element, selector) {
	var tmp = element;
	while (tmp != null && !hasClass(tmp, selector) && tmp != document.body) {
		tmp = tmp.parentNode;
	}
	if (tmp == document.body) return null;
	return tmp;
};

/**
 * 元素CSS操作
 * @param {Object} element
 * @param {Object} csstext
 * @param {Object} val
 */
var css = function css(element, csstext, val) {
	//TO DO : 实现u.相关方法
	if (csstext instanceof Object) {
		for (var k in csstext) {
			var tmpcss = csstext[k];
			if (["width", "height", "top", "bottom", "left", "right"].indexOf(k) > -1 && isNumber(tmpcss)) {
				tmpcss = tmpcss + "px";
			}
			element.style[k] = tmpcss;
		}
	} else {
		if (arguments.length > 2) {
			element.style[csstext] = val;
		} else {
			return getStyle(element, csstext);
		}
	}
};

var wrap = function wrap(element, parent) {
	var p = makeDOM(parent);
	element.parentNode.insertBefore(p, element);
	p.appendChild(element);
};
var getStyle = function getStyle(element, key) {
	//不要在循环里用
	var allCSS;
	if (window.getComputedStyle) {
		allCSS = window.getComputedStyle(element);
	} else {
		allCSS = element.currentStyle;
	}
	if (allCSS[key] !== undefined) {
		return allCSS[key];
	} else {
		return "";
	}
};
var globalZIndex;
/**
 * 统一zindex值, 不同控件每次显示时都取最大的zindex，防止显示错乱
 */
var getZIndex = function getZIndex() {
	if (!globalZIndex) {
		globalZIndex = 2000;
	}
	return globalZIndex++;
};
var makeDOM = function makeDOM(htmlString) {
	var tempDiv = document.createElement("div");
	tempDiv.innerHTML = htmlString;
	var _dom = tempDiv.children[0];
	return _dom;
};
/**
 * element
 */
var makeModal$1 = function makeModal(element, parEle) {
	var overlayDiv = document.createElement('div');
	$(overlayDiv).addClass('u-overlay');
	overlayDiv.style.zIndex = getZIndex();
	// 如果有父元素则插入到父元素上，没有则添加到body上
	if (parEle && parEle != document.body) {
		addClass(overlayDiv, 'hasPar');
		parEle.appendChild(overlayDiv);
	} else {
		document.body.appendChild(overlayDiv);
	}
	$('.u-overlay').css('display', "none");
	$('.u-overlay:eq(0)').css('display', "block");

	element.style.zIndex = getZIndex();
	on$1(overlayDiv, 'click', function (e) {
		stopEvent(e);
	});
	return overlayDiv;
};

var getOffset = function getOffset(Node, offset) {
	if (!offset) {
		offset = {};
		offset.top = 0;
		offset.left = 0;
	}
	if (Node == document.body) {
		return offset;
	}
	offset.top += Node.offsetTop;
	offset.left += Node.offsetLeft;
	if (Node.offsetParent) return getOffset(Node.offsetParent, offset);else return offset;
};
var getScroll = function getScroll(Node, offset) {
	if (!offset) {
		offset = {};
		offset.top = 0;
		offset.left = 0;
	}
	if (Node == document.body) {
		offset.top += Node.scrollTop || document.documentElement.scrollTop;
		offset.left += Node.scrollLeft || document.documentElement.scrollLeft;
		return offset;
	}
	if (Node.tagName != 'INPUT') {
		offset.top += Node.scrollTop;
		offset.left += Node.scrollLeft;
	}

	if (Node.parentNode) return getScroll(Node.parentNode, offset);else return offset;
};
var showPanelByEle = function showPanelByEle(obj) {
	var ele = obj.ele,
	    panel = obj.panel,
	    position = obj.position,

	// off = u.getOffset(ele),scroll = u.getScroll(ele),
	// offLeft = off.left,offTop = off.top,
	// scrollLeft = scroll.left,scrollTop = scroll.top,
	// eleWidth = ele.offsetWidth,eleHeight = ele.offsetHeight,
	// panelWidth = panel.offsetWidth,panelHeight = panel.offsetHeight,
	bodyWidth = document.body.clientWidth,
	    bodyHeight = document.body.clientHeight,
	    position = position || 'top',

	// left = offLeft - scrollLeft,top = offTop - scrollTop,
	eleRect = obj.ele.getBoundingClientRect(),
	    panelRect = obj.panel.getBoundingClientRect(),
	    eleWidth = eleRect.width || 0,
	    eleHeight = eleRect.height || 0,
	    left = eleRect.left || 0,
	    top = eleRect.top || 0,
	    panelWidth = panelRect.width || 0,
	    panelHeight = panelRect.height || 0,
	    docWidth = document.documentElement.clientWidth,
	    docHeight = document.documentElement.clientHeight;

	// 基准点为Ele的左上角
	// 后续根据需要完善
	if (position == 'left') {
		left = left - panelWidth;
		top = top + (eleHeight - panelHeight) / 2;
	} else if (position == 'right') {
		left = left + eleWidth;
		top = top + (eleHeight - panelHeight) / 2;
	} else if (position == 'top' || position == 'topCenter') {
		left = left + (eleWidth - panelWidth) / 2;
		top = top - panelHeight;
	} else if (position == 'bottom' || position == 'bottomCenter') {
		left = left + (eleWidth - panelWidth) / 2;
		top = top + eleHeight;
	} else if (position == 'bottomLeft') {
		left = left;
		top = top + eleHeight;
	}

	if (left + panelWidth > docWidth) left = docWidth - panelWidth - 10;
	if (left < 0) left = 0;

	if (top + panelHeight > docHeight) {
		top = docHeight - panelHeight - 10;
	}

	if (top < 0) top = 0;
	panel.style.left = left + 'px';
	panel.style.top = top + 'px';
};

var getElementLeft = function getElementLeft(element) {
	var actualLeft = element.offsetLeft;
	var current = element.offsetParent;
	while (current !== null) {
		actualLeft += current.offsetLeft;
		current = current.offsetParent;
	}
	if (document.compatMode == "BackCompat") {
		var elementScrollLeft = document.body.scrollLeft;
	} else {
		var elementScrollLeft = document.documentElement.scrollLeft;
	}
	return actualLeft - elementScrollLeft;
};
var getElementTop = function getElementTop(element) {
	var actualTop = element.offsetTop;
	var current = element.offsetParent;
	while (current !== null) {
		actualTop += current.offsetTop;
		current = current.offsetParent;
	}
	if (document.compatMode == "BackCompat") {
		var elementScrollTop = document.body.scrollTop;
	} else {
		var elementScrollTop = document.documentElement.scrollTop;
	}
	return actualTop - elementScrollTop;
};

/**
 * Module : Sparrow class
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-28 08:45:39
 */

var Class = function Class(o) {
	if (!(this instanceof Class) && isFunction(o)) {
		return classify(o);
	}
};

// Create a new Class.
//
//  var SuperPig = Class.create({
//    Extends: Animal,
//    Implements: Flyable,
//    initialize: function() {
//      SuperPig.superclass.initialize.apply(this, arguments)
//    },
//    Statics: {
//      COLOR: 'red'
//    }
// })
//
Class.create = function (parent, properties) {
	if (!isFunction(parent)) {
		properties = parent;
		parent = null;
	}

	properties || (properties = {});
	parent || (parent = properties.Extends || Class);
	properties.Extends = parent;

	// The created class constructor
	function SubClass() {
		var ret;
		// Call the parent constructor.
		parent.apply(this, arguments);

		// Only call initialize in self constructor.
		if (this.constructor === SubClass && this.initialize) {
			ret = this.initialize.apply(this, arguments);
		}
		return ret ? ret : this;
	}

	// Inherit class (static) properties from parent.
	if (parent !== Class) {
		mix(SubClass, parent, parent.StaticsWhiteList);
	}

	// Add instance properties to the subclass.
	implement.call(SubClass, properties);

	// Make subclass extendable.
	return classify(SubClass);
};

function implement(properties) {
	var key, value;

	for (key in properties) {
		value = properties[key];

		if (Class.Mutators.hasOwnProperty(key)) {
			Class.Mutators[key].call(this, value);
		} else {
			this.prototype[key] = value;
		}
	}
}

// Create a sub Class based on `Class`.
Class.extend = function (properties) {
	properties || (properties = {});
	properties.Extends = this;

	return Class.create(properties);
};

function classify(cls) {
	cls.extend = Class.extend;
	cls.implement = implement;
	return cls;
}

// Mutators define special properties.
Class.Mutators = {

	'Extends': function Extends(parent) {
		var existed = this.prototype;
		var proto = createProto(parent.prototype);

		// Keep existed properties.
		mix(proto, existed);

		// Enforce the constructor to be what we expect.
		proto.constructor = this;

		// Set the prototype chain to inherit from `parent`.
		this.prototype = proto;

		// Set a convenience property in case the parent's prototype is
		// needed later.
		this.superclass = parent.prototype;
	},

	'Implements': function Implements(items) {
		isArray$1(items) || (items = [items]);
		var proto = this.prototype,
		    item;

		while (item = items.shift()) {
			mix(proto, item.prototype || item);
		}
	},

	'Statics': function Statics(staticProperties) {
		mix(this, staticProperties);
	}
};

// Shared empty constructor function to aid in prototype-chain creation.
function Ctor() {}

// See: http://jsperf.com/object-create-vs-new-ctor
var createProto = Object.__proto__ ? function (proto) {
	return {
		__proto__: proto
	};
} : function (proto) {
	Ctor.prototype = proto;
	return new Ctor();
};

// Helpers
// ------------

function mix(r, s, wl) {
	// Copy "all" properties including inherited ones.
	for (var p in s) {
		if (s.hasOwnProperty(p)) {
			if (wl && indexOf(wl, p) === -1) continue;

			// 在 iPhone 1 代等设备的 Safari 中，prototype 也会被枚举出来，需排除
			if (p !== 'prototype') {
				r[p] = s[p];
			}
		}
	}
}

var toString$1 = Object.prototype.toString;

var isArray$1 = Array.isArray || function (val) {
	return toString$1.call(val) === '[object Array]';
};

var isFunction = function isFunction(val) {
	return toString$1.call(val) === '[object Function]';
};

var indexOf = function indexOf(arr, item) {
	if (Array.prototype.indexOf && arr.indexOf) {
		return arr.indexOf(item);
	} else {
		for (var i = 0, len = arr.length; i < len; i++) {
			if (arr[i] === item) {
				return i;
			}
		}
		return -1;
	}
};

/**
 * Module : Sparrow core context
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-28 13:52:19
 */
var environment = {};
/**
 * client attributes
 */
var clientAttributes = {};

var sessionAttributes = {};

var fn = {};
var maskerMeta = {
	'float': {
		precision: 2
	},
	'datetime': {
		format: 'YYYY-MM-DD HH:mm:ss',
		metaType: 'DateTimeFormatMeta',
		speratorSymbol: '-'
	},
	'time': {
		format: 'HH:mm'
	},
	'date': {
		format: 'YYYY-MM-DD'
	},
	'currency': {
		precision: 2,
		curSymbol: '￥'
	},
	'percent': {},
	'phoneNumber': {}
};
/**
 * 获取环境信息
 * @return {environment}
 */
fn.getEnvironment = function () {
	return createShellObject(environment);
};

/**
 * 获取客户端参数对象
 * @return {clientAttributes}
 */
fn.getClientAttributes = function () {
	var exf = function exf() {};
	return createShellObject(clientAttributes);
};

fn.setContextPath = function (contextPath) {
	return environment[IWEB_CONTEXT_PATH] = contextPath;
};
fn.getContextPath = function (contextPath) {
	return environment[IWEB_CONTEXT_PATH];
};
/**
 * 设置客户端参数对象
 * @param {Object} k 对象名称
 * @param {Object} v 对象值(建议使用简单类型)
 */
fn.setClientAttribute = function (k, v) {
	clientAttributes[k] = v;
};
/**
 * 获取会话级参数对象
 * @return {clientAttributes}
 */
fn.getSessionAttributes = function () {
	var exf = function exf() {};
	return createShellObject(sessionAttributes);
};

/**
 * 设置会话级参数对象
 * @param {Object} k 对象名称
 * @param {Object} v 对象值(建议使用简单类型)
 */
fn.setSessionAttribute = function (k, v) {
	sessionAttributes[k] = v;
	setCookie("ISES_" + k, v);
};

/**
 * 移除客户端参数
 * @param {Object} k 对象名称
 */
fn.removeClientAttribute = function (k) {
	clientAttributes[k] = null;
	execIgnoreError(function () {
		delete clientAttributes[k];
	});
};

/**
 * 获取地区信息编码
 */
fn.getLocale = function () {
	return this.getEnvironment().locale;
};

/**
 * 获取多语信息
 */
fn.getLanguages = function () {
	return this.getEnvironment().languages;
};
/**
 * 收集环境信息(包括客户端参数)
 * @return {Object}
 */
fn.collectEnvironment = function () {
	var _env = this.getEnvironment();
	var _ses = this.getSessionAttributes();

	for (var i in clientAttributes) {
		_ses[i] = clientAttributes[i];
	}
	_env.clientAttributes = _ses;
	return _env;
};

/**
 * 设置数据格式信息
 * @param {String} type
 * @param {Object} meta
 */
fn.setMaskerMeta = function (type, meta) {
	if (typeof type == 'function') {
		getMetaFunc = type;
	} else {
		if (!maskerMeta[type]) maskerMeta[type] = meta;else {
			if ((typeof meta === 'undefined' ? 'undefined' : _typeof(meta)) != 'object') maskerMeta[type] = meta;else for (var key in meta) {
				maskerMeta[type][key] = meta[key];
			}
		}
	}
};
fn.getMaskerMeta = function (type) {
	if (typeof getMetaFunc == 'function') {
		var meta = getMetaFunc.call(this);
		return meta[type];
	} else return extend({}, maskerMeta[type]);
};
environment.languages = getCookie(U_LANGUAGES) ? getCookie(U_LANGUAGES).split(',') : navigator.language ? navigator.language : 'zh-CN';
if (environment.languages == 'zh-cn') environment.languages = 'zh-CN';
if (environment.languages == 'en-us') environment.languages = 'en-US';

environment.theme = getCookie(U_THEME);
environment.locale = getCookie(U_LOCALE);
//environment.timezoneOffset = (new Date()).getTimezoneOffset()
environment.usercode = getCookie(U_USERCODE);
//init session attribute
document.cookie.replace(/ISES_(\w*)=([^;]*);?/ig, function (a, b, c) {
	sessionAttributes[b] = c;
});

var Core = function Core() {};
Core.prototype = fn;

var core = new Core();

/**
 * Module : Sparrow ajax
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-28 19:06:36
 */

var XmlHttp = {
	get: "get",
	post: "post",
	reqCount: 4,
	createXhr: function createXhr() {
		var xmlhttp = null;
		/*if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }*/
		if (env$1.isIE8) {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); //IE低版本创建XMLHTTP
		} else if (env$1.isIE) {
			xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); //IE高版本创建XMLHTTP
		} else if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		}
		return xmlhttp;
	},
	ajax: function ajax(_json) {
		var url = _json["url"];
		var callback = _json["success"];
		var async = _json["async"] == undefined ? true : _json["async"];
		var error = _json["error"];
		var params = _json["data"] || {};
		var method = (_json["type"] == undefined ? XmlHttp.post : _json["type"]).toLowerCase();
		var gzipFlag = params.compressType;
		url = XmlHttp.serializeUrl(url);
		params = XmlHttp.serializeParams(params);
		if (method == XmlHttp.get && params != null) {
			url += "&" + params;
			params = null; //如果是get请求,保证最终会执行send(null)
		}

		var xmlhttp = XmlHttp.createXhr();
		//xmlhttp.open(method, url+ escape(new Date()), async);
		xmlhttp.open(method, url, async);

		if (method == XmlHttp.post) {
			xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
		}

		var execount = 0;
		// 异步
		if (async) {
			// readyState 从 1~4发生4次变化
			xmlhttp.onreadystatechange = function () {
				execount++;
				// 等待readyState状态不再变化之后,再执行回调函数
				//if (execount == XmlHttp.reqCount) {// 火狐下存在问题，修改判断方式
				if (xmlhttp.readyState == XmlHttp.reqCount) {
					XmlHttp.execBack(xmlhttp, callback, error);
				}
			};
			// send方法要在在回调函数之后执行
			xmlhttp.send(params);
		} else {
			// 同步 readyState 直接变为 4
			// 并且 send 方法要在回调函数之前执行
			xmlhttp.send(params);
			XmlHttp.execBack(xmlhttp, callback, error);
		}
	},
	execBack: function execBack(xmlhttp, callback, error) {
		//if (xmlhttp.readyState == 4
		if (xmlhttp.status == 200 || xmlhttp.status == 304 || xmlhttp.readyState == 4) {
			callback(xmlhttp.responseText, xmlhttp.status, xmlhttp);
		} else {
			if (error) {
				error(xmlhttp.responseText, xmlhttp.status, xmlhttp);
			} else {
				var errorMsg = "no error callback function!";
				if (xmlhttp.responseText) {
					errorMsg = xmlhttp.responseText;
				}
				alert(errorMsg);
				// throw errorMsg;
			}
		}
	},
	serializeUrl: function serializeUrl(url) {
		var cache = "cache=" + Math.random();
		if (url.indexOf("?") > 0) {
			url += "&" + cache;
		} else {
			url += "?" + cache;
		}
		return url;
	},
	serializeParams: function serializeParams(params) {
		var ud = undefined;
		if (ud == params || params == null || params == "") {
			return null;
		}
		if (params.constructor == Object) {
			var result = "";
			for (var p in params) {
				result += p + "=" + encodeURIComponent(params[p]) + "&";
			}
			return result.substring(0, result.length - 1);
		}
		return params;
	}
};

var ajax = XmlHttp.ajax;

/**
 * Module : Sparrow data formater tools
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-28 15:39:01
 */
function NumberFormater(precision) {
    this.precision = precision;
}

NumberFormater.prototype.update = function (precision) {
    this.precision = precision;
};

NumberFormater.prototype.format = function (value) {
    if (!isNumber$1(value)) return "";

    // 以0开头的数字将其前面的0去掉
    while ((value + "").charAt(0) == "0" && value.length > 1 && (value + "").indexOf('0.') != 0) {
        value = value.substring(1);
    }
    var result = value;
    if (isNumber$1(this.precision)) {
        if (window.BigNumber) {
            // 已经引入BigNumber
            result = new BigNumber(value).toFixed(this.precision);
        } else {
            var digit = parseFloat(value);
            // 解决toFixed四舍五入问题，如1.345
            result = (Math.round(digit * Math.pow(10, this.precision)) / Math.pow(10, this.precision)).toFixed(this.precision);
        }
        if (result == "NaN") return "";
    }

    return result;
};

function DateFormater(pattern) {
    this.pattern = pattern;
}

DateFormater.prototype.update = function (pattern) {
    this.pattern = pattern;
};

DateFormater.prototype.format = function (value) {
    return moment(value).format(this.pattern);
};

/**
 * Module : Sparrow abstract formater class
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-28 19:35:26
 */

function AbstractMasker() {}

AbstractMasker.prototype.format = function (obj) {
	if (obj == null) return null;

	var fObj = this.formatArgument(obj);
	return this.innerFormat(fObj);
};

/**
 * 统一被格式化对象结构
 *
 * @param obj
 * @return
 */
AbstractMasker.prototype.formatArgument = function (obj) {};

/**
 * 格式化
 *
 * @param obj
 * @return
 */
AbstractMasker.prototype.innerFormat = function (obj) {};

/**
 * 拆分算法格式化虚基类
 */
AbstractSplitMasker.prototype = new AbstractMasker();

function AbstractSplitMasker() {}
AbstractSplitMasker.prototype.elements = new Array();
AbstractSplitMasker.prototype.format = function (obj) {
	if (obj == null) return null;

	var fObj = this.formatArgument(obj);
	return this.innerFormat(fObj);
};

/**
 * 统一被格式化对象结构
 *
 * @param obj
 * @return
 */
AbstractSplitMasker.prototype.formatArgument = function (obj) {
	return obj;
};

/**
 * 格式化
 *
 * @param obj
 * @return
 */
AbstractSplitMasker.prototype.innerFormat = function (obj) {
	if (obj == null || obj == "") return new FormatResult(obj);
	this.doSplit();
	var result = "";
	//dingrf 去掉concat合并数组的方式，换用多维数组来实现 提高效率
	result = this.getElementsValue(this.elements, obj);

	return new FormatResult(result);
};

/**
 * 合并多维数组中的elementValue
 * @param {} element
 * @param {} obj
 * @return {}
 */
AbstractSplitMasker.prototype.getElementsValue = function (element, obj) {
	var result = "";
	if (element instanceof Array) {
		for (var i = 0; i < element.length; i++) {
			result = result + this.getElementsValue(element[i], obj);
		}
	} else {
		if (element.getValue) result = element.getValue(obj);
	}
	return result;
};

AbstractSplitMasker.prototype.getExpress = function () {};

AbstractSplitMasker.prototype.doSplit = function () {
	var express = this.getExpress();
	if (this.elements == null || this.elements.length == 0) this.elements = this.doQuotation(express, this.getSeperators(), this.getReplaceds(), 0);
};

/**
 * 处理引号
 *
 * @param express
 * @param seperators
 * @param replaced
 * @param curSeperator
 * @param obj
 * @param result
 */
AbstractSplitMasker.prototype.doQuotation = function (express, seperators, replaced, curSeperator) {
	if (express.length == 0) return null;
	var elements = new Array();
	var pattern = new RegExp('".*?"', "g");
	var fromIndex = 0;
	var result;
	do {
		result = pattern.exec(express);
		if (result != null) {
			var i = result.index;
			var j = pattern.lastIndex;
			if (i != j) {
				if (fromIndex < i) {
					var childElements = this.doSeperator(express.substring(fromIndex, i), seperators, replaced, curSeperator);
					if (childElements != null && childElements.length > 0) {
						//						elements = elements.concat(childElements);
						elements.push(childElements);
					}
				}
			}
			elements.push(new StringElement(express.substring(i + 1, j - 1)));
			fromIndex = j;
		}
	} while (result != null);

	if (fromIndex < express.length) {
		var childElements = this.doSeperator(express.substring(fromIndex, express.length), seperators, replaced, curSeperator);
		if (childElements != null && childElements.length > 0)
			//			elements = elements.concat(childElements);
			elements.push(childElements);
	}
	return elements;
};

/**
 * 处理其它分隔符
 *
 * @param express
 * @param seperators
 * @param replaced
 * @param curSeperator
 * @param obj
 * @param result
 */
AbstractSplitMasker.prototype.doSeperator = function (express, seperators, replaced, curSeperator) {
	if (curSeperator >= seperators.length) {
		var elements = new Array();
		elements.push(this.getVarElement(express));
		return elements;
	}

	if (express.length == 0) return null;
	var fromIndex = 0;
	var elements = new Array();
	var pattern = new RegExp(seperators[curSeperator], "g");
	var result;
	do {
		result = pattern.exec(express);
		if (result != null) {
			var i = result.index;
			var j = pattern.lastIndex;
			if (i != j) {
				if (fromIndex < i) {
					var childElements = this.doSeperator(express.substring(fromIndex, i), seperators, replaced, curSeperator + 1);
					if (childElements != null && childElements.length > 0)
						//						elements = elements.concat(childElements);
						elements.push(childElements);
				}

				if (replaced[curSeperator] != null) {
					elements.push(new StringElement(replaced[curSeperator]));
				} else {
					elements.push(new StringElement(express.substring(i, j)));
				}
				fromIndex = j;
			}
		}
	} while (result != null);

	if (fromIndex < express.length) {
		var childElements = this.doSeperator(express.substring(fromIndex, express.length), seperators, replaced, curSeperator + 1);
		if (childElements != null && childElements.length > 0)
			//			elements = elements.concat(childElements);
			elements.push(childElements);
	}
	return elements;
};

/**
 * 地址格式
 */
AddressMasker.prototype = new AbstractSplitMasker();

function AddressMasker(formatMeta) {
	this.update(formatMeta);
}

AddressMasker.prototype.update = function (formatMeta) {
	this.formatMeta = extend({}, AddressMasker.DefaultFormatMeta, formatMeta);
};

AddressMasker.prototype.getExpress = function () {
	return this.formatMeta.express;
};

AddressMasker.prototype.getReplaceds = function () {
	return [this.formatMeta.separator];
};

AddressMasker.prototype.getSeperators = function () {
	return ["(\\s)+?"];
};

AddressMasker.prototype.getVarElement = function (express) {
	var ex = {};

	if (express == "C") ex.getValue = function (obj) {
		return obj.country;
	};

	if (express == "S") ex.getValue = function (obj) {
		return obj.state;
	};

	if (express == "T") ex.getValue = function (obj) {
		return obj.city;
	};

	if (express == "D") ex.getValue = function (obj) {
		return obj.section;
	};

	if (express == "R") ex.getValue = function (obj) {
		return obj.road;
	};

	if (express == "P") ex.getValue = function (obj) {
		return obj.postcode;
	};

	if (_typeof(ex.getValue) == undefined) return new StringElement(express);else return ex;
};

AddressMasker.prototype.formatArgument = function (obj) {
	return obj;
};

/**
 * <b> 数字格式化  </b>
 *
 * <p> 格式化数字
 *
 * </p>
 *
 * Create at 2009-3-20 上午08:50:32
 *
 * @author bq
 * @since V6.0
 */
NumberMasker.prototype = new AbstractMasker();
NumberMasker.prototype.formatMeta = null;

/**
 *构造方法
 */
function NumberMasker(formatMeta) {
	this.update(formatMeta);
}

NumberMasker.prototype.update = function (formatMeta) {
	this.formatMeta = extend({}, NumberMasker.DefaultFormatMeta, formatMeta);
};

/**
 *格式化对象
 */
NumberMasker.prototype.innerFormat = function (obj) {
	var dValue, express, seperatorIndex, strValue;
	dValue = obj.value;
	if (dValue > 0) {
		express = this.formatMeta.positiveFormat;
		strValue = dValue + '';
	} else if (dValue < 0) {
		express = this.formatMeta.negativeFormat;
		strValue = (dValue + '').substr(1, (dValue + '').length - 1);
	} else {
		express = this.formatMeta.positiveFormat;
		strValue = dValue + '';
	}
	seperatorIndex = strValue.indexOf('.');
	strValue = this.setTheSeperator(strValue, seperatorIndex);
	strValue = this.setTheMark(strValue, seperatorIndex);
	var color = null;
	if (dValue < 0 && this.formatMeta.isNegRed) {
		color = "FF0000";
	}
	return new FormatResult(express.replaceAll('n', strValue), color);
};
/**
 *设置标记
 */
NumberMasker.prototype.setTheMark = function (str, seperatorIndex) {
	var endIndex, first, index;
	if (!this.formatMeta.isMarkEnable) return str;
	if (seperatorIndex <= 0) seperatorIndex = str.length;
	first = str.charCodeAt(0);
	endIndex = 0;
	if (first == 45) endIndex = 1;
	index = seperatorIndex - 3;
	while (index > endIndex) {
		str = str.substr(0, index - 0) + this.formatMeta.markSymbol + str.substr(index, str.length - index);
		index = index - 3;
	}
	return str;
};
NumberMasker.prototype.setTheSeperator = function (str, seperatorIndex) {
	var ca;
	if (seperatorIndex > 0) {
		ca = NumberMasker.toCharArray(str);
		//ca[seperatorIndex] = NumberMasker.toCharArray(this.formatMeta.pointSymbol)[0];
		ca[seperatorIndex] = this.formatMeta.pointSymbol;
		str = ca.join('');
	}
	return str;
};
/**
 * 将字符串转换成char数组
 * @param {} str
 * @return {}
 */
NumberMasker.toCharArray = function (str) {
	var str = str.split("");
	var charArray = new Array();
	for (var i = 0; i < str.length; i++) {
		charArray.push(str[i]);
	}
	return charArray;
};

/**
 *默认构造方法
 */
NumberMasker.prototype.formatArgument = function (obj) {
	var numberObj = {};
	numberObj.value = obj;
	return numberObj;
};

/**
 * 货币格式
 */
CurrencyMasker.prototype = new NumberMasker();
CurrencyMasker.prototype.formatMeta = null;

function CurrencyMasker(formatMeta) {
	this.update(formatMeta);
}

CurrencyMasker.prototype.update = function (formatMeta) {
	this.formatMeta = extend({}, CurrencyMasker.DefaultFormatMeta, formatMeta);
};

/**
 * 重载格式方法
 * @param {} obj
 * @return {}
 */
CurrencyMasker.prototype.innerFormat = function (obj) {
	if (!obj.value) {
		return { value: "" };
	}
	var fo = new NumberMasker(this.formatMeta).innerFormat(obj);
	fo.value = this.formatMeta.curSymbol + fo.value; //fo.value.replace("$", this.formatMeta.curSymbol);
	return fo;
};

PercentMasker.prototype = new NumberMasker();

function PercentMasker(formatMeta) {
	this.update(formatMeta);
}

PercentMasker.prototype.update = function (formatMeta) {
	this.formatMeta = extend({}, NumberMasker.DefaultFormatMeta, formatMeta);
};

PercentMasker.prototype.formatArgument = function (obj) {
	return obj;
};

PercentMasker.prototype.innerFormat = function (value) {
	var val = "";
	if (value != "") {
		var obj = new NumberMasker(this.formatMeta).innerFormat({ value: value }).value;
		// 获取obj保留几位小数位,obj小数位-2为显示小数位
		var objStr = String(obj);
		var objPrecision = objStr.length - objStr.indexOf(".") - 1;
		var showPrecision = objPrecision - 2;
		if (showPrecision < 0) {
			showPrecision = 0;
		}
		val = parseFloat(obj) * 100;
		val = (val * Math.pow(10, showPrecision) / Math.pow(10, showPrecision)).toFixed(showPrecision);
		val = val + "%";
	}
	return {
		value: val
	};
};



/**
 * 格式解析后形成的单个格式单元
 * 适用于基于拆分算法的AbstractSplitFormat，表示拆分后的变量单元
 */
StringElement.prototype = new Object();

function StringElement(value) {
	this.value = value;
}
StringElement.prototype.value = "";

StringElement.prototype.getValue = function (obj) {
	return this.value;
};
/**
 *格式结果
 */
FormatResult.prototype = new Object();
/**
 *默认构造方法
 */
function FormatResult(value, color) {
	this.value = value;
	this.color = color;
}

/**
 * 电话
 * @param {[type]} formatMeta [description]
 */
function PhoneNumberMasker(formatMeta) {
	this.update(formatMeta);
}

PhoneNumberMasker.prototype = new NumberMasker();
PhoneNumberMasker.prototype.formatMeta = null;

PhoneNumberMasker.prototype.update = function (formatMeta) {
	this.formatMeta = extend({}, PhoneNumberMasker.DefaultFormatMeta, formatMeta);
};

PhoneNumberMasker.prototype.formatArgument = function (obj) {
	var numberObj = {};
	numberObj.value = obj;
	return numberObj;
};

PhoneNumberMasker.prototype.innerFormat = function (obj) {
	if (!obj) {
		return;
	}
	return obj;
};

NumberMasker.DefaultFormatMeta = {
	isNegRed: true,
	isMarkEnable: true,
	markSymbol: ",",
	pointSymbol: ".",
	positiveFormat: "n",
	negativeFormat: "-n"
};

CurrencyMasker.DefaultFormatMeta = extend({}, NumberMasker.DefaultFormatMeta, {
	//curSymbol: "",
	positiveFormat: "n",
	negativeFormat: "-n"
});

AddressMasker.defaultFormatMeta = {
	express: "C S T R P",
	separator: " "
};

PhoneNumberMasker.defaultFormatMeta = {};

/**
* Module : Sparrow i18n
* Author : Kvkens(yueming@yonyou.com)
* Date	  : 2016-07-29 10:16:54
*/
//import {uuii18n} from '?';//缺失故修改为default值
// 从datatable/src/compatiable/u/JsExtension.js抽取
window.getCurrentJsPath = function () {
	var doc = document,
	    a = {},
	    expose = +new Date(),
	    rExtractUri = /((?:http|https|file):\/\/.*?\/[^:]+)(?::\d+)?:\d+/,
	    isLtIE8 = ('' + doc.querySelector).indexOf('[native code]') === -1;
	// FF,Chrome
	if (doc.currentScript) {
		return doc.currentScript.src;
	}

	var stack;
	try {
		a.b();
	} catch (e) {
		stack = e.stack || e.fileName || e.sourceURL || e.stacktrace;
	}
	// IE10
	if (stack) {
		var absPath = rExtractUri.exec(stack)[1];
		if (absPath) {
			return absPath;
		}
	}

	// IE5-9
	for (var scripts = doc.scripts, i = scripts.length - 1, script; script = scripts[i--];) {
		if (script.className !== expose && script.readyState === 'interactive') {
			script.className = expose;
			// if less than ie 8, must get abs path by getAttribute(src, 4)
			return isLtIE8 ? script.getAttribute('src', 4) : script.src;
		}
	}
};

if (window.i18n) {
	window.u = window.u || {};
	var scriptPath = getCurrentJsPath(),
	    _temp = scriptPath.substr(0, scriptPath.lastIndexOf('/')),
	    __FOLDER__ = _temp.substr(0, _temp.lastIndexOf('/')),
	    resGetPath = u.i18nPath || __FOLDER__ + '/locales/__lng__/__ns__.json';
	i18n.init({
		postAsync: false,
		getAsync: false,
		fallbackLng: false,
		ns: { namespaces: ['uui-trans'] },
		lng: getCookie(U_LOCALE) || 'zh',
		resGetPath: resGetPath
	});
}

var trans = function trans(key, dftValue) {
	return window.i18n ? i18n.t('uui-trans:' + key) : dftValue;
};

/**
 * Module : Sparrow date util
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-06 13:37:20
 */

var u$3 = {};
u$3.date = {

    /**
     * 多语言处理
     */
    //TODO 后续放到多语文件中
    _dateLocale: {
        'zh-CN': {
            months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
            monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
            weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
            weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
            weekdaysMin: '日_一_二_三_四_五_六'.split('_')
        },
        'en-US': {
            months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
            monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
            weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thurday_Friday_Saturday'.split('_'),
            weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
            weekdaysMin: 'S_M_T_W_T_F_S'.split('_')
        }
    },
    _jsonLocale: {
        months: trans('date.months', "一月\n二月\n三月\n四月\n五月\n六月\n七月\n八月\n九月\n十月\n十一月\n十二月").split('\n'),
        monthsShort: trans('date.monthsShort', "1月\n2月\n3月\n4月\n5月\n6月\n7月\n8月\n9月\n10月\n11月\n12月").split('\n'),
        weekdays: trans('date.weekdays', "星期日\n星期一\n星期二\n星期三\n星期四\n星期五\n星期六").split('\n'),
        weekdaysShort: trans('date.weekdaysShort', "周日\n周一\n周二\n周三\n周四\n周五\n周六").split('\n'),
        weekdaysMin: trans('date.weekdaysMin', "日\n一\n二\n三\n四\n五\n六").split('\n'),
        defaultMonth: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
    },

    _formattingTokens: /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYY|YY|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,

    leftZeroFill: function leftZeroFill(number, targetLength, forceSign) {
        var output = '' + Math.abs(number),
            sign = number >= 0;
        while (output.length < targetLength) {
            output = '0' + output;
        }
        return (sign ? forceSign ? '+' : '' : '-') + output;
    },

    _formats: {
        //year
        YY: function YY(date) {
            return u$3.date.leftZeroFill(date.getFullYear() % 100, 2);
        },
        YYYY: function YYYY(date) {
            return date.getFullYear();
        },
        //month
        M: function M(date) {
            return date.getMonth() + 1;
        },
        MM: function MM(date) {
            var m = u$3.date._formats.M(date);
            return u$3.date.leftZeroFill(m, 2);
        },
        MMM: function MMM(date, language) {
            var m = date.getMonth();
            // return u.date._dateLocale[language].monthsShort[m];
            return u$3.date._jsonLocale.monthsShort[m];
        },
        MMMM: function MMMM(date, language) {
            var m = date.getMonth();
            // return u.date._dateLocale[language].months[m];
            return u$3.date._jsonLocale.months[m];
        },
        //date
        D: function D(date) {
            return date.getDate();
        },
        DD: function DD(date) {
            var d = u$3.date._formats.D(date);
            return u$3.date.leftZeroFill(d, 2);
        },
        // weekday
        d: function d(date) {
            return date.getDay();
        },
        dd: function dd(date, language) {
            var d = u$3.date._formats.d(date);
            // return u.date._dateLocale[language].weekdaysMin[d];
            return u$3.date._jsonLocale.weekdaysMin[d];
        },
        ddd: function ddd(date, language) {
            var d = u$3.date._formats.d(date);
            // return u.date._dateLocale[language].weekdaysShort[d];
            return u$3.date._jsonLocale.weekdaysShort[d];
        },
        dddd: function dddd(date, language) {
            var d = u$3.date._formats.d(date);
            // return u.date._dateLocale[language].weekdays[d];
            return u$3.date._jsonLocale.weekdays[d];
        },
        // am pm
        a: function a(date) {
            if (date.getHours() > 12) {
                return 'pm';
            } else {
                return 'am';
            }
        },
        //hour
        h: function h(date) {
            var h = date.getHours();
            h = h > 12 ? h - 12 : h;
            return h;
        },
        hh: function hh(date) {
            var h = u$3.date._formats.h(date);
            return u$3.date.leftZeroFill(h, 2);
        },
        H: function H(date) {
            return date.getHours();
        },
        HH: function HH(date) {
            return u$3.date.leftZeroFill(date.getHours(), 2);
        },
        // minutes
        m: function m(date) {
            return date.getMinutes();
        },
        mm: function mm(date) {
            return u$3.date.leftZeroFill(date.getMinutes(), 2);
        },
        //seconds
        s: function s(date) {
            return date.getSeconds();
        },
        ss: function ss(date) {
            return u$3.date.leftZeroFill(date.getSeconds(), 2);
        }
    },

    /**
     * 日期格式化
     * @param date
     * @param formatString
     */
    format: function format(date, formatString, language) {
        if (!date && date != 0) return ''; // renturn date 改为 return '',因：setFormat初始会赋值为undefined,造成二次选择报错
        var array = formatString.match(u$3.date._formattingTokens),
            i,
            length,
            output = '';
        var _date = u$3.date.getDateObj(date);
        if (!_date) return date;
        language = language || core.getLanguages();
        for (i = 0, length = array.length; i < length; i++) {
            if (u$3.date._formats[array[i]]) {
                output += u$3.date._formats[array[i]](_date, language);
            } else {
                output += array[i];
            }
        }
        return output;
    },
    strToDateByTimezone: function strToDateByTimezone(str, timezone) {
        var dateObj = u$3.date.getDateObj(str);
        var localTime = dateObj.getTime();
        var localOffset = dateObj.getTimezoneOffset() * 60000;
        var utc = localTime + localOffset; //得到国际标准时间
        utc = utc + 3600000 * parseFloat(timezone);
        return utc;
    },

    /**
     * 根据当前时区日期对象获取指定时区日期对象
     * @param  {Date} date     当前时区日期对象
     * @param  {number} timezone 指定时区
     * @return {Date}          转化后的日期对象
     */
    getDateByTimeZonec2z: function getDateByTimeZonec2z(date, timezone) {
        var dateObj = u$3.date.getDateObj(date);
        var localTime = dateObj.getTime();
        var localOffset = dateObj.getTimezoneOffset() * 60000;
        var utc = localTime + localOffset;
        var calctime = utc + 3600000 * parseFloat(timezone);
        return new Date(calctime);
    },
    /**
     * 根据指定时区日期对象获取当前时区日期对象
     * @param  {Date} date     指定时区日期对象
     * @param  {number} timezone 指定时区
     * @return {Date}          转化后的日期对象
     */
    getDateByTimeZonez2c: function getDateByTimeZonez2c(date, timezone) {
        var dateObj = u$3.date.getDateObj(date);
        var localTime = dateObj.getTime();
        var localOffset = dateObj.getTimezoneOffset() * 60000;
        var utc = localTime - 3600000 * parseFloat(timezone) - localOffset;
        return new Date(utc);
    },

    _addOrSubtract: function _addOrSubtract(date, period, value, isAdding) {
        var times = date.getTime(),
            d = date.getDate(),
            m = date.getMonth(),
            _date = u$3.date.getDateObj(date);
        if (period === 'ms') {
            times = times + value * isAdding;
            _date.setTime(times);
        } else if (period == 's') {
            times = times + value * 1000 * isAdding;
            _date.setTime(times);
        } else if (period == 'm') {
            times = times + value * 60000 * isAdding;
            _date.setTime(times);
        } else if (period == 'h') {
            times = times + value * 3600000 * isAdding;
            _date.setTime(times);
        } else if (period == 'd') {
            d = d + value * isAdding;
            _date.setDate(d);
        } else if (period == 'w') {
            d = d + value * 7 * isAdding;
            _date.setDate(d);
        } else if (period == 'M') {
            m = m + value * isAdding;
            _date.setMonth(m);
        } else if (period == 'y') {
            m = m + value * 12 * isAdding;
            _date.setMonth(m);
        }
        return _date;
    },

    add: function add(date, period, value) {
        return u$3.date._addOrSubtract(date, period, value, 1);
    },
    sub: function sub(date, period, value) {
        return u$3.date._addOrSubtract(date, period, value, -1);
    },
    getDateObj: function getDateObj(value, obj) {
        var timezone;
        if (obj) {
            timezone = obj.timezone;
        }
        if (!value && value != 0 || typeof value == 'undefined') return value;
        var dateFlag = false;
        var _date = new Date(dateFormat(value));
        if (isNaN(_date)) {
            // IE的话对"2016-2-13 12:13:22"进行处理
            var index1, index2, index3, s1, s2, s3, s4;
            if (value.indexOf) {
                index1 = value.indexOf('-');
                index2 = value.indexOf(':');
                index3 = value.indexOf(' ');
                if (index1 > 0 || index2 > 0 || index3 > 0) {
                    _date = new Date();
                    if (index3 > 0) {
                        s3 = value.split(' ');
                        s1 = s3[0].split('-');
                        s2 = s3[1].split(':');
                        s4 = s3[2];
                    } else if (index1 > 0) {
                        s1 = value.split('-');
                    } else if (index2 > 0) {
                        s2 = value.split(':');
                    }
                    if (s1 && s1.length > 0) {
                        _date.setYear(s1[0]);
                        _date.setMonth(parseInt(s1[1] - 1));
                        _date.setDate(s1[2] ? s1[2] : 0);
                        _date.setMonth(parseInt(s1[1] - 1));
                        _date.setDate(s1[2] ? s1[2] : 0);
                        dateFlag = true;
                    }
                    if (s2 && s2.length > 0) {
                        //解决ie和firefox等时间pm直接变am问题
                        if (s4 == "pm") {
                            s2[0] = s2[0] - -12;
                        }
                        _date.setHours(s2[0] ? s2[0] : 0);
                        _date.setMinutes(s2[1] ? s2[1] : 0);
                        _date.setSeconds(s2[2] ? s2[2] : 0);
                        dateFlag = true;
                    }
                } else {
                    _date = new Date(parseInt(value));
                    if (isNaN(_date)) {
                        // throw new TypeError('invalid Date parameter');
                    } else {
                        dateFlag = true;
                    }
                }
            }
        } else {
            dateFlag = true;
        }
        if (dateFlag) {
            if (timezone) {
                _date = u$3.date.getDateByTimeZonec2z(_date, timezone);
            }
            return _date;
        } else return null;
    }

};

var date = u$3.date;

/**
 * Module : Sparrow data display formater
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-28 15:39:01
 */
var floatRender = function floatRender(value, precision) {
	var trueValue = value;
	if (typeof value === 'undefined' || value === null) return value;
	//value 为 ko对象
	if (typeof value === 'function') trueValue = value();
	var maskerMeta = core.getMaskerMeta('float') || {};
	if (typeof precision === 'number') maskerMeta.precision = precision;
	var formater = new NumberFormater(maskerMeta.precision);
	var masker = new NumberMasker(maskerMeta);
	return masker.format(formater.format(trueValue)).value;
};

var integerRender = function integerRender(value) {
	var trueValue = value;
	if (typeof value === 'undefined' || value === null) return value;
	//value 为 ko对象
	if (typeof value === 'function') trueValue = value();
	return trueValue;
};

var _dateRender = function _dateRender(value, format, type) {
	var trueValue = value;
	if (typeof value === 'undefined' || value === null) return value;
	//value 为 ko对象
	if (typeof value === 'function') trueValue = value();
	var maskerMeta = core.getMaskerMeta(type) || {};
	if (typeof format != 'undefined') maskerMeta.format = format;
	var maskerValue = date.format(trueValue, maskerMeta.format);
	return maskerValue;
};

var dateRender = function dateRender(value, format) {
	return _dateRender(value, format, 'date');
};

var dateTimeRender = function dateTimeRender(value, format) {
	return _dateRender(value, format, 'datetime');
};

var timeRender = function timeRender(value, format) {
	return _dateRender(value, format, 'time');
};

var percentRender = function percentRender(value) {
	var trueValue = value;
	if (typeof value === 'undefined' || value === null) return value;
	//value 为 ko对象
	if (typeof value === 'function') trueValue = value();
	var maskerMeta = core.getMaskerMeta('percent') || {};
	var masker = new PercentMasker(maskerMeta);
	var maskerValue = masker.format(trueValue);
	return maskerValue && maskerValue.value ? maskerValue.value : '';
};

var dateToUTCString = function dateToUTCString(date$$1) {
	if (!date$$1) return '';
	if (date$$1.indexOf("-") > -1) date$$1 = date$$1.replace(/\-/g, "/");
	var utcString = Date.parse(date$$1);
	if (isNaN(utcString)) return "";
	return utcString;
};

/**
 * Module : Sparrow hotKeys
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-28 20:25:39
 */

var hotkeys = {};
hotkeys.special_keys = {
    27: 'esc', 9: 'tab', 32: 'space', 13: 'enter', 8: 'backspace', 145: 'scroll', 20: 'capslock',
    144: 'numlock', 19: 'pause', 45: 'insert', 36: 'home', 46: 'del', 35: 'end', 33: 'pageup',
    34: 'pagedown', 37: 'left', 38: 'up', 39: 'right', 40: 'down', 112: 'f1', 113: 'f2', 114: 'f3',
    115: 'f4', 116: 'f5', 117: 'f6', 118: 'f7', 119: 'f8', 120: 'f9', 121: 'f10', 122: 'f11', 123: 'f12'
};

hotkeys.shift_nums = {
    "`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&",
    "8": "*", "9": "(", "0": ")", "-": "_", "=": "+", ";": ":", "'": "\"", ",": "<",
    ".": ">", "/": "?", "\\": "|"
};

hotkeys.add = function (combi, options, callback) {
    if (isFunction(options)) {
        callback = options;
        options = {};
    }
    var opt = {},
        defaults = { type: 'keydown', propagate: false, disableInInput: false, target: document.body, checkParent: true },
        that = this;
    opt = extend(opt, defaults, options || {});
    combi = combi.toLowerCase();

    // inspect if keystroke matches
    var inspector = function inspector(event) {
        //event = $.event.fix(event); // jQuery event normalization.
        var element = this; //event.target;
        // @ TextNode -> nodeType == 3
        element = element.nodeType == 3 ? element.parentNode : element;

        if (opt['disableInInput']) {
            // Disable shortcut keys in Input, Textarea fields
            var target = element; //$(element);
            if (target.tagName == "INPUT" || target.tagName == "TEXTAREA") {
                return;
            }
        }
        var code = event.which,
            type = event.type,
            character = String.fromCharCode(code).toLowerCase(),
            special = that.special_keys[code],
            shift = event.shiftKey,
            ctrl = event.ctrlKey,
            alt = event.altKey,
            propagate = true,
            // default behaivour
        mapPoint = null;

        // in opera + safari, the event.target is unpredictable.
        // for example: 'keydown' might be associated with HtmlBodyElement
        // or the element where you last clicked with your mouse.
        if (opt.checkParent) {
            //              while (!that.all[element] && element.parentNode){
            while (!element['hotkeys'] && element.parentNode) {
                element = element.parentNode;
            }
        }

        //          var cbMap = that.all[element].events[type].callbackMap;
        var cbMap = element['hotkeys'].events[type].callbackMap;
        if (!shift && !ctrl && !alt) {
            // No Modifiers
            mapPoint = cbMap[special] || cbMap[character];
        }
        // deals with combinaitons (alt|ctrl|shift+anything)
        else {
                var modif = '';
                if (alt) modif += 'alt+';
                if (ctrl) modif += 'ctrl+';
                if (shift) modif += 'shift+';
                // modifiers + special keys or modifiers + characters or modifiers + shift characters
                mapPoint = cbMap[modif + special] || cbMap[modif + character] || cbMap[modif + that.shift_nums[character]];
            }
        if (mapPoint) {
            mapPoint.cb(event);
            if (!mapPoint.propagate) {
                event.stopPropagation();
                event.preventDefault();
                return false;
            }
        }
    };
    // first hook for this element
    var data = opt.target['hotkeys'];
    if (!data) {
        opt.target['hotkeys'] = data = { events: {} };
    }
    //      if (!hotkeys.all[opt.target]){
    //          hotkeys.all[opt.target] = {events:{}};
    //      }
    if (!data.events[opt.type]) {
        data.events[opt.type] = { callbackMap: {} };
        on(opt.target, opt.type, inspector);
        //$.event.add(opt.target, opt.type, inspector);
    }
    //      if (!hotkeys.all[opt.target].events[opt.type]){
    //          hotkeys.all[opt.target].events[opt.type] = {callbackMap: {}}
    //          $.event.add(opt.target, opt.type, inspector);
    //      }
    data.events[opt.type].callbackMap[combi] = { cb: callback, propagate: opt.propagate };
    //      hotkeys.all[opt.target].events[opt.type].callbackMap[combi] =  {cb: callback, propagate:opt.propagate};
    return hotkeys;
};
hotkeys.remove = function (exp, opt) {
    opt = opt || {};
    target = opt.target || document.body;
    type = opt.type || 'keydown';
    exp = exp.toLowerCase();

    delete target['hotkeys'].events[type].callbackMap[exp];
};

hotkeys.scan = function (element, target) {
    element = element || document.body;
    element.querySelectorAll('[u-enter]').forEach(function (el) {
        var enterValue = el.getAttribute('u-enter');
        if (!enterValue) return;
        if (enterValue.substring(0, 1) == '#') hotkeys.add('enter', { target: this }, function () {
            var _el = element.querySelector(enterValue);
            if (_el) {
                _el.focus();
            }
        });else {
            target = target || window;
            var func = h(target, enterValue);
            hotkeys.add('enter', { target: this }, function () {
                func.call(this);
            });
        }
    });
    element.querySelectorAll('[u-hotkey]').forEach(function (el) {
        var hotkey = el.getAttribute('u-hotkey');
        if (!hotkey) return;
        hotkeys.add(hotkey, function () {
            el.click();
        });
    });
};

var hotkeys = hotkeys;

/**
 * Module : Sparrow ripple
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-29 08:42:13
 */

var URipple = function URipple(element) {
  if (env$1.isIE8 || env$1.isMobile || env$1.isAndroidPAD || env$1.isIPAD) return;
  this._element = element;

  // Initialize instance.
  this.init();
};
//window['URipple'] = URipple;

URipple.prototype._down = function (event) {
  if (env$1.isIE8 || env$1.isMobile || env$1.isAndroidPAD || env$1.isIPAD) return;
  if (!this._rippleElement.style.width && !this._rippleElement.style.height) {
    var rect = this._element.getBoundingClientRect();
    this.rippleSize_ = Math.sqrt(rect.width * rect.width + rect.height * rect.height) * 2 + 2;
    if (this.rippleSize_ > 0) {
      this._rippleElement.style.width = this.rippleSize_ + 'px';
      this._rippleElement.style.height = this.rippleSize_ + 'px';
    }
  }

  addClass(this._rippleElement, 'is-visible');

  if (event.type === 'mousedown' && this._ignoringMouseDown) {
    this._ignoringMouseDown = false;
  } else {
    if (event.type === 'touchstart') {
      this._ignoringMouseDown = true;
    }
    var frameCount = this.getFrameCount();
    if (frameCount > 0) {
      return;
    }
    this.setFrameCount(1);
    var t = event.currentTarget || event.target || event.srcElement;
    var bound = t.getBoundingClientRect();
    var x;
    var y;
    // Check if we are handling a keyboard click.
    if (event.clientX === 0 && event.clientY === 0) {
      x = Math.round(bound.width / 2);
      y = Math.round(bound.height / 2);
    } else {
      var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
      var clientY = event.clientY ? event.clientY : event.touches[0].clientY;
      x = Math.round(clientX - bound.left);
      y = Math.round(clientY - bound.top);
    }
    this.setRippleXY(x, y);
    this.setRippleStyles(true);
    if (window.requestAnimationFrame) window.requestAnimationFrame(this.animFrameHandler.bind(this));
  }
};

/**
 * Handle mouse / finger up on element.
 *
 * @param {Event} event The event that fired.
 * @private
 */
URipple.prototype._up = function (event) {
  if (env$1.isIE8 || env$1.isMobile || env$1.isAndroidPAD || env$1.isIPAD) return;
  var self = this;
  // Don't fire for the artificial "mouseup" generated by a double-click.
  if (event && event.detail !== 2) {
    removeClass(this._rippleElement, 'is-visible');
  }
  // Allow a repaint to occur before removing this class, so the animation
  // shows for tap events, which seem to trigger a mouseup too soon after
  // mousedown.
  window.setTimeout(function () {
    removeClass(self._rippleElement, 'is-visible');
  }, 0);
};

/**
     * Getter for frameCount_.
     * @return {number} the frame count.
     */
URipple.prototype.getFrameCount = function () {
  if (env$1.isIE8 || env$1.isMobile || env$1.isAndroidPAD || env$1.isIPAD) return;
  return this.frameCount_;
};
/**
     * Setter for frameCount_.
     * @param {number} fC the frame count.
     */
URipple.prototype.setFrameCount = function (fC) {
  if (env$1.isIE8 || env$1.isMobile || env$1.isAndroidPAD || env$1.isIPAD) return;
  this.frameCount_ = fC;
};

/**
     * Getter for _rippleElement.
     * @return {Element} the ripple element.
     */
URipple.prototype.getRippleElement = function () {
  if (env$1.isIE8 || env$1.isMobile || env$1.isAndroidPAD || env$1.isIPAD) return;
  return this._rippleElement;
};

/**
 * Sets the ripple X and Y coordinates.
 * @param  {number} newX the new X coordinate
 * @param  {number} newY the new Y coordinate
 */
URipple.prototype.setRippleXY = function (newX, newY) {
  if (env$1.isIE8 || env$1.isMobile || env$1.isAndroidPAD || env$1.isIPAD) return;
  this.x_ = newX;
  this.y_ = newY;
};

/**
 * Sets the ripple styles.
 * @param  {boolean} start whether or not this is the start frame.
 */
URipple.prototype.setRippleStyles = function (start) {
  if (env$1.isIE8 || env$1.isMobile || env$1.isAndroidPAD || env$1.isIPAD) return;
  if (this._rippleElement !== null) {
    var transformString;
    var scale;
    var size;
    var offset = 'translate(' + this.x_ + 'px, ' + this.y_ + 'px)';

    if (start) {
      scale = 'scale(0.0001, 0.0001)';
      size = '1px';
    } else {
      scale = '';
      size = this.rippleSize_ + 'px';
    }

    transformString = 'translate(-50%, -50%) ' + offset + scale;

    this._rippleElement.style.webkitTransform = transformString;
    this._rippleElement.style.msTransform = transformString;
    this._rippleElement.style.transform = transformString;

    if (start) {
      removeClass(this._rippleElement, 'is-animating');
    } else {
      addClass(this._rippleElement, 'is-animating');
    }
  }
};

/**
   * Handles an animation frame.
   */
URipple.prototype.animFrameHandler = function () {
  if (env$1.isIE8 || env$1.isMobile || env$1.isAndroidPAD || env$1.isIPAD) return;
  if (this.frameCount_-- > 0) {
    window.requestAnimationFrame(this.animFrameHandler.bind(this));
  } else {
    this.setRippleStyles(false);
  }
};

/**
 * Initialize element.
 */
URipple.prototype.init = function () {
  if (env$1.isIE8 || env$1.isMobile || env$1.isAndroidPAD || env$1.isIPAD) return;
  var self = this;
  if (this._element) {
    this._rippleElement = this._element.querySelector('.u-ripple');
    if (!this._rippleElement) {
      this._rippleElement = document.createElement('span');
      addClass(this._rippleElement, 'u-ripple');
      this._element.appendChild(this._rippleElement);
      this._element.style.overflow = 'hidden';
      this._element.style.position = 'relative';
    }
    this.frameCount_ = 0;
    this.rippleSize_ = 0;
    this.x_ = 0;
    this.y_ = 0;

    // Touch start produces a compat mouse down event, which would cause a
    // second ripples. To avoid that, we use this property to ignore the first
    // mouse down after a touch start.
    this._ignoringMouseDown = false;
    on$1(this._element, 'mousedown', function (e) {
      self._down(e);
    });
    on$1(this._element, 'touchstart', function (e) {
      self._down(e);
    });

    on$1(this._element, 'mouseup', function (e) {
      self._up(e);
    });
    on$1(this._element, 'mouseleave', function (e) {
      self._up(e);
    });
    on$1(this._element, 'touchend', function (e) {
      self._up(e);
    });
    on$1(this._element, 'blur', function (e) {
      self._up(e);
    });
  }
};

var Ripple = URipple;

/**
* Module : Sparrow rsa utils
* Author : Kvkens(yueming@yonyou.com)
* Date	  : 2016-07-29 09:14:38
*/
/*
 * RSAUtils.encryptedString({exponent: 'xxxxx', modulus: 'xxxxx', text: 'xxxxx'})
 * RSAUtils.decryptedString({exponent: 'xxxxx', modulus: 'xxxxx', text: 'xxxxx'})
 */

var RSAUtils = {};
var biRadixBits = 16;
var bitsPerDigit = biRadixBits;
var biRadix = 1 << 16; // = 2^16 = 65536
var biHalfRadix = biRadix >>> 1;
var biRadixSquared = biRadix * biRadix;
var maxDigitVal = biRadix - 1;
//maxDigits:
//Change this to accommodate your largest number size. Use setMaxDigits()
//to change it!
//
//In general, if you're working with numbers of size N bits, you'll need 2*N
//bits of storage. Each digit holds 16 bits. So, a 1024-bit key will need
//
//1024 * 2 / 16 = 128 digits of storage.
//
var maxDigits;
var ZERO_ARRAY;
var bigZero;
var bigOne;

var BigInt = function BigInt(flag) {
    if (typeof flag == "boolean" && flag == true) {
        this.digits = null;
    } else {
        this.digits = ZERO_ARRAY.slice(0);
    }
    this.isNeg = false;
};

RSAUtils.setMaxDigits = function (value) {
    maxDigits = value;
    ZERO_ARRAY = new Array(maxDigits);
    for (var iza = 0; iza < ZERO_ARRAY.length; iza++) {
        ZERO_ARRAY[iza] = 0;
    }bigZero = new BigInt();
    bigOne = new BigInt();
    bigOne.digits[0] = 1;
};
RSAUtils.setMaxDigits(20);

//The maximum number of digits in base 10 you can convert to an
//integer without JavaScript throwing up on you.
var dpl10 = 15;

RSAUtils.biFromNumber = function (i) {
    var result = new BigInt();
    result.isNeg = i < 0;
    i = Math.abs(i);
    var j = 0;
    while (i > 0) {
        result.digits[j++] = i & maxDigitVal;
        i = Math.floor(i / biRadix);
    }
    return result;
};

//lr10 = 10 ^ dpl10
var lr10 = RSAUtils.biFromNumber(1000000000000000);

RSAUtils.biFromDecimal = function (s) {
    var isNeg = s.charAt(0) == '-';
    var i = isNeg ? 1 : 0;
    var result;
    // Skip leading zeros.
    while (i < s.length && s.charAt(i) == '0') {
        ++i;
    }if (i == s.length) {
        result = new BigInt();
    } else {
        var digitCount = s.length - i;
        var fgl = digitCount % dpl10;
        if (fgl == 0) fgl = dpl10;
        result = RSAUtils.biFromNumber(Number(s.substr(i, fgl)));
        i += fgl;
        while (i < s.length) {
            result = RSAUtils.biAdd(RSAUtils.biMultiply(result, lr10), RSAUtils.biFromNumber(Number(s.substr(i, dpl10))));
            i += dpl10;
        }
        result.isNeg = isNeg;
    }
    return result;
};

RSAUtils.biCopy = function (bi) {
    var result = new BigInt(true);
    result.digits = bi.digits.slice(0);
    result.isNeg = bi.isNeg;
    return result;
};

RSAUtils.reverseStr = function (s) {
    var result = "";
    for (var i = s.length - 1; i > -1; --i) {
        result += s.charAt(i);
    }
    return result;
};

var hexatrigesimalToChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

RSAUtils.biToString = function (x, radix) {
    // 2 <= radix <= 36
    var b = new BigInt();
    b.digits[0] = radix;
    var qr = RSAUtils.biDivideModulo(x, b);
    var result = hexatrigesimalToChar[qr[1].digits[0]];
    while (RSAUtils.biCompare(qr[0], bigZero) == 1) {
        qr = RSAUtils.biDivideModulo(qr[0], b);
        digit = qr[1].digits[0];
        result += hexatrigesimalToChar[qr[1].digits[0]];
    }
    return (x.isNeg ? "-" : "") + RSAUtils.reverseStr(result);
};

RSAUtils.biToDecimal = function (x) {
    var b = new BigInt();
    b.digits[0] = 10;
    var qr = RSAUtils.biDivideModulo(x, b);
    var result = String(qr[1].digits[0]);
    while (RSAUtils.biCompare(qr[0], bigZero) == 1) {
        qr = RSAUtils.biDivideModulo(qr[0], b);
        result += String(qr[1].digits[0]);
    }
    return (x.isNeg ? "-" : "") + RSAUtils.reverseStr(result);
};

var hexToChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

RSAUtils.digitToHex = function (n) {
    var mask = 0xf;
    var result = "";
    for (var i = 0; i < 4; ++i) {
        result += hexToChar[n & mask];
        n >>>= 4;
    }
    return RSAUtils.reverseStr(result);
};

RSAUtils.biToHex = function (x) {
    var result = "";
    var n = RSAUtils.biHighIndex(x);
    for (var i = RSAUtils.biHighIndex(x); i > -1; --i) {
        result += RSAUtils.digitToHex(x.digits[i]);
    }
    return result;
};

RSAUtils.charToHex = function (c) {
    var ZERO = 48;
    var NINE = ZERO + 9;
    var littleA = 97;
    var littleZ = littleA + 25;
    var bigA = 65;
    var bigZ = 65 + 25;
    var result;

    if (c >= ZERO && c <= NINE) {
        result = c - ZERO;
    } else if (c >= bigA && c <= bigZ) {
        result = 10 + c - bigA;
    } else if (c >= littleA && c <= littleZ) {
        result = 10 + c - littleA;
    } else {
        result = 0;
    }
    return result;
};

RSAUtils.hexToDigit = function (s) {
    var result = 0;
    var sl = Math.min(s.length, 4);
    for (var i = 0; i < sl; ++i) {
        result <<= 4;
        result |= RSAUtils.charToHex(s.charCodeAt(i));
    }
    return result;
};

RSAUtils.biFromHex = function (s) {
    var result = new BigInt();
    var sl = s.length;
    for (var i = sl, j = 0; i > 0; i -= 4, ++j) {
        result.digits[j] = RSAUtils.hexToDigit(s.substr(Math.max(i - 4, 0), Math.min(i, 4)));
    }
    return result;
};

RSAUtils.biFromString = function (s, radix) {
    var isNeg = s.charAt(0) == '-';
    var istop = isNeg ? 1 : 0;
    var result = new BigInt();
    var place = new BigInt();
    place.digits[0] = 1; // radix^0
    for (var i = s.length - 1; i >= istop; i--) {
        var c = s.charCodeAt(i);
        var digit = RSAUtils.charToHex(c);
        var biDigit = RSAUtils.biMultiplyDigit(place, digit);
        result = RSAUtils.biAdd(result, biDigit);
        place = RSAUtils.biMultiplyDigit(place, radix);
    }
    result.isNeg = isNeg;
    return result;
};

RSAUtils.biDump = function (b) {
    return (b.isNeg ? "-" : "") + b.digits.join(" ");
};

RSAUtils.biAdd = function (x, y) {
    var result;

    if (x.isNeg != y.isNeg) {
        y.isNeg = !y.isNeg;
        result = RSAUtils.biSubtract(x, y);
        y.isNeg = !y.isNeg;
    } else {
        result = new BigInt();
        var c = 0;
        var n;
        for (var i = 0; i < x.digits.length; ++i) {
            n = x.digits[i] + y.digits[i] + c;
            result.digits[i] = n % biRadix;
            c = Number(n >= biRadix);
        }
        result.isNeg = x.isNeg;
    }
    return result;
};

RSAUtils.biSubtract = function (x, y) {
    var result;
    if (x.isNeg != y.isNeg) {
        y.isNeg = !y.isNeg;
        result = RSAUtils.biAdd(x, y);
        y.isNeg = !y.isNeg;
    } else {
        result = new BigInt();
        var n, c;
        c = 0;
        for (var i = 0; i < x.digits.length; ++i) {
            n = x.digits[i] - y.digits[i] + c;
            result.digits[i] = n % biRadix;
            // Stupid non-conforming modulus operation.
            if (result.digits[i] < 0) result.digits[i] += biRadix;
            c = 0 - Number(n < 0);
        }
        // Fix up the negative sign, if any.
        if (c == -1) {
            c = 0;
            for (var i = 0; i < x.digits.length; ++i) {
                n = 0 - result.digits[i] + c;
                result.digits[i] = n % biRadix;
                // Stupid non-conforming modulus operation.
                if (result.digits[i] < 0) result.digits[i] += biRadix;
                c = 0 - Number(n < 0);
            }
            // Result is opposite sign of arguments.
            result.isNeg = !x.isNeg;
        } else {
            // Result is same sign.
            result.isNeg = x.isNeg;
        }
    }
    return result;
};

RSAUtils.biHighIndex = function (x) {
    var result = x.digits.length - 1;
    while (result > 0 && x.digits[result] == 0) {
        --result;
    }return result;
};

RSAUtils.biNumBits = function (x) {
    var n = RSAUtils.biHighIndex(x);
    var d = x.digits[n];
    var m = (n + 1) * bitsPerDigit;
    var result;
    for (result = m; result > m - bitsPerDigit; --result) {
        if ((d & 0x8000) != 0) break;
        d <<= 1;
    }
    return result;
};

RSAUtils.biMultiply = function (x, y) {
    var result = new BigInt();
    var c;
    var n = RSAUtils.biHighIndex(x);
    var t = RSAUtils.biHighIndex(y);
    var u, uv, k;

    for (var i = 0; i <= t; ++i) {
        c = 0;
        k = i;
        for (var j = 0; j <= n; ++j, ++k) {
            uv = result.digits[k] + x.digits[j] * y.digits[i] + c;
            result.digits[k] = uv & maxDigitVal;
            c = uv >>> biRadixBits;
            //c = Math.floor(uv / biRadix);
        }
        result.digits[i + n + 1] = c;
    }
    // Someone give me a logical xor, please.
    result.isNeg = x.isNeg != y.isNeg;
    return result;
};

RSAUtils.biMultiplyDigit = function (x, y) {
    var n, c, uv;

    var result = new BigInt();
    n = RSAUtils.biHighIndex(x);
    c = 0;
    for (var j = 0; j <= n; ++j) {
        uv = result.digits[j] + x.digits[j] * y + c;
        result.digits[j] = uv & maxDigitVal;
        c = uv >>> biRadixBits;
        //c = Math.floor(uv / biRadix);
    }
    result.digits[1 + n] = c;
    return result;
};

RSAUtils.arrayCopy = function (src, srcStart, dest, destStart, n) {
    var m = Math.min(srcStart + n, src.length);
    for (var i = srcStart, j = destStart; i < m; ++i, ++j) {
        dest[j] = src[i];
    }
};

var highBitMasks = [0x0000, 0x8000, 0xC000, 0xE000, 0xF000, 0xF800, 0xFC00, 0xFE00, 0xFF00, 0xFF80, 0xFFC0, 0xFFE0, 0xFFF0, 0xFFF8, 0xFFFC, 0xFFFE, 0xFFFF];

RSAUtils.biShiftLeft = function (x, n) {
    var digitCount = Math.floor(n / bitsPerDigit);
    var result = new BigInt();
    RSAUtils.arrayCopy(x.digits, 0, result.digits, digitCount, result.digits.length - digitCount);
    var bits = n % bitsPerDigit;
    var rightBits = bitsPerDigit - bits;
    for (var i = result.digits.length - 1, i1 = i - 1; i > 0; --i, --i1) {
        result.digits[i] = result.digits[i] << bits & maxDigitVal | (result.digits[i1] & highBitMasks[bits]) >>> rightBits;
    }
    result.digits[0] = result.digits[i] << bits & maxDigitVal;
    result.isNeg = x.isNeg;
    return result;
};

var lowBitMasks = [0x0000, 0x0001, 0x0003, 0x0007, 0x000F, 0x001F, 0x003F, 0x007F, 0x00FF, 0x01FF, 0x03FF, 0x07FF, 0x0FFF, 0x1FFF, 0x3FFF, 0x7FFF, 0xFFFF];

RSAUtils.biShiftRight = function (x, n) {
    var digitCount = Math.floor(n / bitsPerDigit);
    var result = new BigInt();
    RSAUtils.arrayCopy(x.digits, digitCount, result.digits, 0, x.digits.length - digitCount);
    var bits = n % bitsPerDigit;
    var leftBits = bitsPerDigit - bits;
    for (var i = 0, i1 = i + 1; i < result.digits.length - 1; ++i, ++i1) {
        result.digits[i] = result.digits[i] >>> bits | (result.digits[i1] & lowBitMasks[bits]) << leftBits;
    }
    result.digits[result.digits.length - 1] >>>= bits;
    result.isNeg = x.isNeg;
    return result;
};

RSAUtils.biMultiplyByRadixPower = function (x, n) {
    var result = new BigInt();
    RSAUtils.arrayCopy(x.digits, 0, result.digits, n, result.digits.length - n);
    return result;
};

RSAUtils.biDivideByRadixPower = function (x, n) {
    var result = new BigInt();
    RSAUtils.arrayCopy(x.digits, n, result.digits, 0, result.digits.length - n);
    return result;
};

RSAUtils.biModuloByRadixPower = function (x, n) {
    var result = new BigInt();
    RSAUtils.arrayCopy(x.digits, 0, result.digits, 0, n);
    return result;
};

RSAUtils.biCompare = function (x, y) {
    if (x.isNeg != y.isNeg) {
        return 1 - 2 * Number(x.isNeg);
    }
    for (var i = x.digits.length - 1; i >= 0; --i) {
        if (x.digits[i] != y.digits[i]) {
            if (x.isNeg) {
                return 1 - 2 * Number(x.digits[i] > y.digits[i]);
            } else {
                return 1 - 2 * Number(x.digits[i] < y.digits[i]);
            }
        }
    }
    return 0;
};

RSAUtils.biDivideModulo = function (x, y) {
    var nb = RSAUtils.biNumBits(x);
    var tb = RSAUtils.biNumBits(y);
    var origYIsNeg = y.isNeg;
    var q, r;
    if (nb < tb) {
        // |x| < |y|
        if (x.isNeg) {
            q = RSAUtils.biCopy(bigOne);
            q.isNeg = !y.isNeg;
            x.isNeg = false;
            y.isNeg = false;
            r = biSubtract(y, x);
            // Restore signs, 'cause they're references.
            x.isNeg = true;
            y.isNeg = origYIsNeg;
        } else {
            q = new BigInt();
            r = RSAUtils.biCopy(x);
        }
        return [q, r];
    }

    q = new BigInt();
    r = x;

    // Normalize Y.
    var t = Math.ceil(tb / bitsPerDigit) - 1;
    var lambda = 0;
    while (y.digits[t] < biHalfRadix) {
        y = RSAUtils.biShiftLeft(y, 1);
        ++lambda;
        ++tb;
        t = Math.ceil(tb / bitsPerDigit) - 1;
    }
    // Shift r over to keep the quotient constant. We'll shift the
    // remainder back at the end.
    r = RSAUtils.biShiftLeft(r, lambda);
    nb += lambda; // Update the bit count for x.
    var n = Math.ceil(nb / bitsPerDigit) - 1;

    var b = RSAUtils.biMultiplyByRadixPower(y, n - t);
    while (RSAUtils.biCompare(r, b) != -1) {
        ++q.digits[n - t];
        r = RSAUtils.biSubtract(r, b);
    }
    for (var i = n; i > t; --i) {
        var ri = i >= r.digits.length ? 0 : r.digits[i];
        var ri1 = i - 1 >= r.digits.length ? 0 : r.digits[i - 1];
        var ri2 = i - 2 >= r.digits.length ? 0 : r.digits[i - 2];
        var yt = t >= y.digits.length ? 0 : y.digits[t];
        var yt1 = t - 1 >= y.digits.length ? 0 : y.digits[t - 1];
        if (ri == yt) {
            q.digits[i - t - 1] = maxDigitVal;
        } else {
            q.digits[i - t - 1] = Math.floor((ri * biRadix + ri1) / yt);
        }

        var c1 = q.digits[i - t - 1] * (yt * biRadix + yt1);
        var c2 = ri * biRadixSquared + (ri1 * biRadix + ri2);
        while (c1 > c2) {
            --q.digits[i - t - 1];
            c1 = q.digits[i - t - 1] * (yt * biRadix | yt1);
            c2 = ri * biRadix * biRadix + (ri1 * biRadix + ri2);
        }

        b = RSAUtils.biMultiplyByRadixPower(y, i - t - 1);
        r = RSAUtils.biSubtract(r, RSAUtils.biMultiplyDigit(b, q.digits[i - t - 1]));
        if (r.isNeg) {
            r = RSAUtils.biAdd(r, b);
            --q.digits[i - t - 1];
        }
    }
    r = RSAUtils.biShiftRight(r, lambda);
    // Fiddle with the signs and stuff to make sure that 0 <= r < y.
    q.isNeg = x.isNeg != origYIsNeg;
    if (x.isNeg) {
        if (origYIsNeg) {
            q = RSAUtils.biAdd(q, bigOne);
        } else {
            q = RSAUtils.biSubtract(q, bigOne);
        }
        y = RSAUtils.biShiftRight(y, lambda);
        r = RSAUtils.biSubtract(y, r);
    }
    // Check for the unbelievably stupid degenerate case of r == -0.
    if (r.digits[0] == 0 && RSAUtils.biHighIndex(r) == 0) r.isNeg = false;

    return [q, r];
};

RSAUtils.biDivide = function (x, y) {
    return RSAUtils.biDivideModulo(x, y)[0];
};

RSAUtils.biModulo = function (x, y) {
    return RSAUtils.biDivideModulo(x, y)[1];
};

RSAUtils.biMultiplyMod = function (x, y, m) {
    return RSAUtils.biModulo(RSAUtils.biMultiply(x, y), m);
};

RSAUtils.biPow = function (x, y) {
    var result = bigOne;
    var a = x;
    while (true) {
        if ((y & 1) != 0) result = RSAUtils.biMultiply(result, a);
        y >>= 1;
        if (y == 0) break;
        a = RSAUtils.biMultiply(a, a);
    }
    return result;
};

RSAUtils.biPowMod = function (x, y, m) {
    var result = bigOne;
    var a = x;
    var k = y;
    while (true) {
        if ((k.digits[0] & 1) != 0) result = RSAUtils.biMultiplyMod(result, a, m);
        k = RSAUtils.biShiftRight(k, 1);
        if (k.digits[0] == 0 && RSAUtils.biHighIndex(k) == 0) break;
        a = RSAUtils.biMultiplyMod(a, a, m);
    }
    return result;
};

var BarrettMu = function BarrettMu(m) {
    this.modulus = RSAUtils.biCopy(m);
    this.k = RSAUtils.biHighIndex(this.modulus) + 1;
    var b2k = new BigInt();
    b2k.digits[2 * this.k] = 1; // b2k = b^(2k)
    this.mu = RSAUtils.biDivide(b2k, this.modulus);
    this.bkplus1 = new BigInt();
    this.bkplus1.digits[this.k + 1] = 1; // bkplus1 = b^(k+1)
    this.modulo = BarrettMu_modulo;
    this.multiplyMod = BarrettMu_multiplyMod;
    this.powMod = BarrettMu_powMod;
};

function BarrettMu_modulo(x) {
    var $dmath = RSAUtils;
    var q1 = $dmath.biDivideByRadixPower(x, this.k - 1);
    var q2 = $dmath.biMultiply(q1, this.mu);
    var q3 = $dmath.biDivideByRadixPower(q2, this.k + 1);
    var r1 = $dmath.biModuloByRadixPower(x, this.k + 1);
    var r2term = $dmath.biMultiply(q3, this.modulus);
    var r2 = $dmath.biModuloByRadixPower(r2term, this.k + 1);
    var r = $dmath.biSubtract(r1, r2);
    if (r.isNeg) {
        r = $dmath.biAdd(r, this.bkplus1);
    }
    var rgtem = $dmath.biCompare(r, this.modulus) >= 0;
    while (rgtem) {
        r = $dmath.biSubtract(r, this.modulus);
        rgtem = $dmath.biCompare(r, this.modulus) >= 0;
    }
    return r;
}

function BarrettMu_multiplyMod(x, y) {
    /*
     x = this.modulo(x);
     y = this.modulo(y);
     */
    var xy = RSAUtils.biMultiply(x, y);
    return this.modulo(xy);
}

function BarrettMu_powMod(x, y) {
    var result = new BigInt();
    result.digits[0] = 1;
    var a = x;
    var k = y;
    while (true) {
        if ((k.digits[0] & 1) != 0) result = this.multiplyMod(result, a);
        k = RSAUtils.biShiftRight(k, 1);
        if (k.digits[0] == 0 && RSAUtils.biHighIndex(k) == 0) break;
        a = this.multiplyMod(a, a);
    }
    return result;
}

var RSAKeyPair = function RSAKeyPair(encryptionExponent, decryptionExponent, modulus) {
    var $dmath = RSAUtils;
    this.e = $dmath.biFromHex(encryptionExponent);
    this.d = $dmath.biFromHex(decryptionExponent);
    this.m = $dmath.biFromHex(modulus);
    // We can do two bytes per digit, so
    // chunkSize = 2 * (number of digits in modulus - 1).
    // Since biHighIndex returns the high index, not the number of digits, 1 has
    // already been subtracted.
    this.chunkSize = 2 * $dmath.biHighIndex(this.m);
    this.radix = 16;
    this.barrett = new BarrettMu(this.m);
};

RSAUtils.getKeyPair = function (encryptionExponent, decryptionExponent, modulus) {
    return new RSAKeyPair(encryptionExponent, decryptionExponent, modulus);
};

var twoDigit = function twoDigit(n) {
    return (n < 10 ? "0" : "") + String(n);
};

// Altered by Rob Saunders (rob@robsaunders.net). New routine pads the
// string after it has been converted to an array. This fixes an
// incompatibility with Flash MX's ActionScript.
RSAUtils._encryptedString = function (key, s) {
    var a = [];
    var sl = s.length;
    var i = 0;
    while (i < sl) {
        a[i] = s.charCodeAt(i);
        i++;
    }

    while (a.length % key.chunkSize != 0) {
        a[i++] = 0;
    }

    var al = a.length;
    var result = "";
    var j, k, block;
    for (i = 0; i < al; i += key.chunkSize) {
        block = new BigInt();
        j = 0;
        for (k = i; k < i + key.chunkSize; ++j) {
            block.digits[j] = a[k++];
            block.digits[j] += a[k++] << 8;
        }
        var crypt = key.barrett.powMod(block, key.e);
        var text = key.radix == 16 ? RSAUtils.biToHex(crypt) : RSAUtils.biToString(crypt, key.radix);
        result += text + " ";
    }
    return result.substring(0, result.length - 1); // Remove last space.
};

RSAUtils._decryptedString = function (key, s) {
    var blocks = s.split(" ");
    var result = "";
    var i, j, block;
    for (i = 0; i < blocks.length; ++i) {
        var bi;
        if (key.radix == 16) {
            bi = RSAUtils.biFromHex(blocks[i]);
        } else {
            bi = RSAUtils.biFromString(blocks[i], key.radix);
        }
        block = key.barrett.powMod(bi, key.d);
        for (j = 0; j <= RSAUtils.biHighIndex(block); ++j) {
            result += String.fromCharCode(block.digits[j] & 255, block.digits[j] >> 8);
        }
    }
    // Remove trailing null, if any.
    if (result.charCodeAt(result.length - 1) == 0) {
        result = result.substring(0, result.length - 1);
    }
    return result;
};

RSAUtils.setMaxDigits(130);

RSAUtils.encryptedString = function (options) {
    var text = options.text;
    if (options.exponent && options.modulus) {
        var key = RSAUtils.getKeyPair(options.exponent, '', options.modulus);
        text = RSAUtils._encryptedString(key, options.text);
    }
    return text;
};

RSAUtils.decryptedString = function (options) {
    var text = options.text;
    if (options.exponent && options.modulus) {
        var key = RSAUtils.getKeyPair('', options.exponent, options.modulus);
        text = RSAUtils._decryptedString(key, options.text);
    }
    return text;
};

/**
 * Module : Sparrow entry index
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-04 09:48:36
 */

//公开接口、属性对外暴露
var api = {
	ajax: ajax,
	extend: extend,
	setCookie: setCookie,
	getCookie: getCookie,
	createShellObject: createShellObject,
	execIgnoreError: execIgnoreError$1,
	getFunction: getFunction,
	getJSObject: getJSObject,
	isDate: isDate,
	isNumber: isNumber$1,
	isArray: isArray,
	isEmptyObject: isEmptyObject,
	inArray: inArray,
	isDomElement: isDomElement,
	each: each,
	on: on$1,
	off: off$1,
	trigger: trigger$1,
	stopEvent: stopEvent,
	event: event$1,
	addClass: addClass,
	removeClass: removeClass,
	hasClass: hasClass,
	toggleClass: toggleClass,
	closest: closest,
	css: css,
	wrap: wrap,
	getStyle: getStyle,
	getZIndex: getZIndex,
	makeDOM: makeDOM,
	makeModal: makeModal$1,
	getOffset: getOffset,
	getScroll: getScroll,
	showPanelByEle: showPanelByEle,
	Class: Class,
	core: core,
	floatRender: floatRender,
	integerRender: integerRender,
	dateRender: dateRender,
	dateTimeRender: dateTimeRender,
	timeRender: timeRender,
	percentRender: percentRender,
	dateToUTCString: dateToUTCString,
	date: date,
	NumberFormater: NumberFormater,
	DateFormater: DateFormater,
	AddressMasker: AddressMasker,
	NumberMasker: NumberMasker,
	CurrencyMasker: CurrencyMasker,
	PercentMasker: PercentMasker,
	hotkeys: hotkeys,
	Ripple: Ripple,
	RSAUtils: RSAUtils,
	BigInt: BigInt,
	BarrettMu: BarrettMu,
	twoDigit: twoDigit,
	trans: trans
};
extend(api, env$1);
// export api;
//export default api;
extend(api, window.u || {});

window.u = api;
window.iweb = {};
window.iweb.browser = window.u;
window.sparrow = window.u;

/**
 * Module : compox compMgr
 * Author : huyue(huyueb@yonyou.com)
 * Date	  : 2016-07-28 18:41:06
 * Update : 2017-01-18 09:26:00
 */

function _findRegisteredClass(name, optReplace) {
    for (var i = 0; i < CompMgr.registeredControls.length; i++) {
        if (CompMgr.registeredControls[i].className === name) {
            if (typeof optReplace !== 'undefined') {
                CompMgr.registeredControls[i] = optReplace;
            }
            return CompMgr.registeredControls[i];
        }
    }
    return false;
}

function _getUpgradedListOfElement(element) {
    var dataUpgraded = element.getAttribute('data-upgraded');
    // Use `['']` as default value to conform the `,name,name...` style.
    return dataUpgraded === null ? [''] : dataUpgraded.split(',');
}

function _isElementUpgraded(element, jsClass) {
    var upgradedList = _getUpgradedListOfElement(element);
    return upgradedList.indexOf(jsClass) != -1;
}

function _upgradeElement(element, optJsClass) {
    if (!((typeof element === 'undefined' ? 'undefined' : _typeof(element)) === 'object' && element instanceof Element)) {
        throw new Error('Invalid argument provided to upgrade MDL element.');
    }
    var upgradedList = _getUpgradedListOfElement(element);
    var classesToUpgrade = [];
    if (!optJsClass) {
        var className = element.className;
        for (var i = 0; i < CompMgr.registeredControls.length; i++) {
            var component = CompMgr.registeredControls[i];
            if (className.indexOf(component.cssClass) > -1 && classesToUpgrade.indexOf(component) === -1 && !_isElementUpgraded(element, component.className)) {
                classesToUpgrade.push(component);
            }
        }
    } else if (!_isElementUpgraded(element, optJsClass)) {
        classesToUpgrade.push(_findRegisteredClass(optJsClass));
    }

    // Upgrade the element for each classes.
    for (var i = 0, n = classesToUpgrade.length, registeredClass; i < n; i++) {
        registeredClass = classesToUpgrade[i];
        if (registeredClass) {
            if (element[registeredClass.className]) {
                continue;
            }
            // Mark element as upgraded.
            upgradedList.push(registeredClass.className);
            element.setAttribute('data-upgraded', upgradedList.join(','));
            var instance = new registeredClass.classConstructor(element);
            CompMgr.createdControls.push(instance);
            // Call any callbacks the user has registered with this component type.
            for (var j = 0, m = registeredClass.callbacks.length; j < m; j++) {
                registeredClass.callbacks[j](element);
            }
            element[registeredClass.className] = instance;
        } else {
            throw new Error('Unable to find a registered component for the given class.');
        }
    }
}

function _upgradeDomInternal(optJsClass, optCssClass, ele) {
    if (typeof optJsClass === 'undefined' && typeof optCssClass === 'undefined') {
        for (var i = 0; i < CompMgr.registeredControls.length; i++) {
            _upgradeDomInternal(CompMgr.registeredControls[i].className, registeredControls[i].cssClass, ele);
        }
    } else {
        var jsClass = optJsClass;
        if (!optCssClass) {
            var registeredClass = _findRegisteredClass(jsClass);
            if (registeredClass) {
                optCssClass = registeredClass.cssClass;
            }
        }
        var elements;
        if (ele) {
            elements = hasClass(ele, optCssClass) ? [ele] : ele.querySelectorAll('.' + optCssClass);
        } else {
            elements = document.querySelectorAll('.' + optCssClass);
        }
        for (var n = 0; n < elements.length; n++) {
            _upgradeElement(elements[n], jsClass);
        }
    }
}

var CompMgr = {
    plugs: {},
    //用来存储控件的名称对应列表
    dataAdapters: {},
    /** 注册的控件*/
    registeredControls: [],
    createdControls: [],
    /**
     *
     * @param options  {el:'#content', model:{}}
     */
    apply: function apply(options) {
        if (options) {
            var _el = options.el || document.body;
            var model = options.model;
        }
        if (typeof _el == 'string') {
            _el = document.body.querySelector(_el);
        }
        if (_el == null || (typeof _el === 'undefined' ? 'undefined' : _typeof(_el)) != 'object') _el = document.body;
        var comps = _el.querySelectorAll('[u-meta]');
        comps.forEach(function (element) {
            if (element['comp']) return;
            var options = JSON.parse(element.getAttribute('u-meta'));
            if (options && options['type']) {
                //var comp = CompMgr._createComp({el:element,options:options,model:model});
                var comp = CompMgr.createDataAdapter({
                    el: element,
                    options: options,
                    model: model
                });
                if (comp) {
                    element['adpt'] = comp;
                    element['u-meta'] = comp;
                }
            }
        });
    },
    addPlug: function addPlug(config) {
        var plug = config['plug'],
            name = config['name'];
        this.plugs || (this.plugs = {});
        if (this.plugs[name]) {
            throw new Error('plug has exist:' + name);
        }
        plug.compType = name;
        this.plugs[name] = plug;
    },
    addDataAdapter: function addDataAdapter(config) {
        var adapter = config['adapter'],
            name = config['name'];
        //dataType = config['dataType'] || ''
        //var key = dataType ? name + '.' + dataType : name;
        this.dataAdapters || (dataAdapters = {});
        if (this.dataAdapters[name]) {
            throw new Error('dataAdapter has exist:' + name);
        }
        this.dataAdapters[name] = adapter;
    },
    getDataAdapter: function getDataAdapter(name) {
        if (!name) return;
        this.dataAdapters || (dataAdapters = {});
        //var key = dataType ? name + '.' + dataType : name;
        return this.dataAdapters[name];
    },
    /**
     * 创建dataAdapter,通过识别控件的type，来找到它对应的adapter
     * @param  {[type]} options [description]
     * @return {[type]}         [description]
     */
    createDataAdapter: function createDataAdapter(options) {
        var opt = options['options'];
        var type = opt['type'],
            id = opt['id'];
        var adpt = this.dataAdapters[type];
        if (!adpt) return null;
        var comp = new adpt(options);
        comp.type = type;
        comp.id = id;
        return comp;
    },
    _createComp: function _createComp(options) {
        var opt = options['options'];
        var type = opt['type'];
        var plug = this.plugs[type];
        if (!plug) return null;
        var comp = new plug(options);
        comp.type = type;
        return comp;
    },
    /**
     * 注册UI控件
     */
    regComp: function regComp(config) {
        var newConfig = {
            classConstructor: config.comp,
            className: config.compAsString || config['compAsString'],
            cssClass: config.css || config['css'],
            callbacks: [],
            dependencies: config.dependencies || []
        };
        config.comp.prototype.compType = config.compAsString;
        for (var i = 0; i < this.registeredControls.length; i++) {
            var item = this.registeredControls[i];
            //registeredControls.forEach(function(item) {
            if (item.cssClass === newConfig.cssClass) {
                throw new Error('The provided cssClass has already been registered: ' + item.cssClass);
            }
            if (item.className === newConfig.className) {
                throw new Error('The provided className has already been registered');
            }
        }
        this.registeredControls.push(newConfig);
    },
    updateComp: function updateComp(ele) {
        this._reorderComps();
        for (var n = 0; n < this.registeredControls.length; n++) {
            _upgradeDomInternal(this.registeredControls[n].className, null, ele);
        }
    },
    // 后续遍历registeredControls，重新排列
    _reorderComps: function _reorderComps() {
        var tmpArray = [];
        var dictory = {};

        for (var n = 0; n < this.registeredControls.length; n++) {
            dictory[this.registeredControls[n].className] = this.registeredControls[n];
        }
        for (var n = 0; n < this.registeredControls.length; n++) {
            traverse(this.registeredControls[n]);
        }

        this.registeredControls = tmpArray;

        function traverse(control) {
            if (inArray(control, tmpArray)) return;
            if (control.dependencies.length > 0) {
                for (var i = 0, len = control.dependencies.length; i < len; i++) {
                    var childControl = dictory[control.dependencies[i]];
                    traverse(childControl);
                }
            }
            tmpArray.push(control);
        }
    }
};

var compMgr = CompMgr;

/**
 * Module : compox createApp
 * Author : huyue(huyueb@yonyou.com)
 * Date   : 2017-01-17 10:13:10
 */
var App$1 = function App() {
    classCallCheck(this, App);

    // init
    this.init = init;
    this.dataTables = {};
};

var init = function init(viewModel, element, doApplyBindings) {
    var self = this;
    element = element || document.body;
    if (!isArray(element)) {
        element = [element];
    }
    this.elements = element;
    this.comps = [];
    each(this.elements, function (i, element) {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }
        if (element) {
            element.querySelectorAll('[u-meta]').forEach(function (ele) {
                var options = JSON.parse(ele.getAttribute('u-meta'));
                options['type'] = options['type'] || 'string';
                if (options && options['type']) {
                    if (self.adjustFunc) self.adjustFunc.call(self, options);
                    var comp = compMgr.createDataAdapter({ el: ele, options: options, model: viewModel, app: self });
                    ele['u-meta'] = comp;
                    self.comps.push(comp);
                }
            });
        }

        if (hotkeys) hotkeys.scan(element);
        if (typeof doApplyBindings == 'undefined' || doApplyBindings == true) ko.applyBindings(viewModel, element);
        compMgr.updateComp(element);
    });

    _getDataTables(this, viewModel);
};

var _getDataTables = function _getDataTables(app, viewModel) {
    for (var key in viewModel) {
        if (viewModel[key] && viewModel[key] instanceof u.DataTable) {
            viewModel[key].id = key;
            viewModel[key].parent = viewModel;
            app.addDataTable(viewModel[key]);
        }
    }
};

var createApp = function createApp() {
    var app = new App$1();
    if (arguments.length > 0) {
        var arg = arguments[0];
        app.init(arg.model, arg.el);
    }
    return app;
};

window.App = App$1;

//公开接口、属性对外暴露
var api$1 = {
	createApp: createApp,
	compMgr: compMgr
};
if (document.readyState && document.readyState === 'complete') {
	compMgr.updateComp();
} else {
	on$1(window, 'load', function () {
		compMgr.updateComp();
	});
}
// export api;
//export default api;
extend(api$1, window.u || {});

window.u = api$1;
window.iweb = {};
window.iweb.browser = window.u;

/**
 * Module : compox-util setAdjustMetaFunc
 * Author : huyue(huyueb@yonyou.com)
 * Date	  : 2017-01-18 09:34:01
 */

var setAdjustMetaFunc = function setAdjustMetaFunc(adjustFunc) {
  this.adjustFunc = adjustFunc;
};

/**
 * Module : compox-util dataTable
 * Author : huyue(huyueb@yonyou.com)
 * Date	  : 2017-01-18 09:34:01
 */

var addDataTable = function addDataTable(dataTable) {
    this.dataTables[dataTable.id] = dataTable;
    return this;
};
var getDataTable = function getDataTable(id) {
    return this.dataTables[id];
};

var getDataTables = function getDataTables() {
    return this.dataTables;
};

/**
 * Module : compox-util comp
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2017-01-18 09:34:01
 */
var createComp = function createComp(ele, viewModel) {
    var options = JSON.parse(ele.getAttribute('u-meta'));
    if (options && options['type']) {
        var comp = compMgr.createDataAdapter({
            el: ele,
            options: options,
            model: viewModel,
            app: this
        });
        ele['u-meta'] = comp;
        this.comps.push(comp);
    }
    return comp;
};

var getComp = function getComp(compId) {
    var comps = this.getComps();
    for (var i = 0; i < comps.length; i++) {
        var comp = comps[i];
        if (comp.id == compId) {
            return comp;
        }
    }
    return null;
};

var getCompsByDataTable = function getCompsByDataTable(dataTableId, element) {
    var comps = this.getComps(element),
        targetComps = [];
    for (var i = 0; i < comps.length; i++) {
        if (comps[i].dataModel && comps[i].dataModel['id'] == dataTableId || comps[i].dataTable && comps[i].dataTable['id'] == dataTableId) targetComps.push(comps[i]);
    }
    return targetComps;
};

/**
 * 根据类型获取控件
 * @param {String} type
 * @param {object} element
 */
var getCompsByType = function getCompsByType(type, element) {
    var comps = this.getComps(element),
        targetComps = [];
    for (var i = 0; i < comps.length; i++) {
        var comp = comps[i];
        if (comp && comp.type == type) targetComps.push(comp);
    }
    return targetComps;
};

/**
 * 获取某区域中的所有控件
 * @param {object} element
 */
var getComps = function getComps(element) {
    if (element) {
        return this.getCompsByElement(element);
    } else {
        return this.comps;
    }
};

/**
 * 将comp显示到顶端（此方法只支持body上存在滚动条的情况）
 * @param {object} comp对象
 */
var showComp = function showComp(comp) {
    var ele = comp.element,
        off = getOffset(ele),
        scroll = getScroll(ele),
        top = off.top - scroll.top,
        bodyHeight = document.body.clientHeight,
        nowTop = document.body.scrollTop;
    if (top > bodyHeight || top < 0) {
        document.body.scrollTop = nowTop + top;
    }
};

/**
 * Module : compox-util validate
 * Author : huyue(huyueb@yonyou.com)
 * Date   : 2017-01-18 09:34:01
 */

/**
 * 控件数据校验
 * @param {Object} element
 */
var compsValidate = function compsValidate(element, retUnpass) {
    var comps = this.getComps(element),
        passed = true,
        unpassed = [];
    for (var i = 0; i < comps.length; i++) {
        if (comps[i].doValidate) {
            var result = comps[i].doValidate({ trueValue: true, showMsg: true });
            result = (typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object' ? result['passed'] : result;
            passed = result && passed;
            if (!result) unpassed.push(comps[i]);
        }
    }
    if (retUnpass) return unpassed;
    return passed;
};

var compsValidateMultiParam = function compsValidateMultiParam(options) {
    var element = options.element,
        comps = this.getComps(element),
        passed = true,
        showMsg = options.showMsg,
        notPassedArr = new Array();
    for (var i = 0; i < comps.length; i++) {
        if (comps[i].doValidate) {
            var result = comps[i].doValidate({ trueValue: true, showMsg: showMsg });
            // 如果passed为true,result.passed为false说明第一次出现错误校验
            if (passed && !result.passed) {
                var off = getOffset(comps[i].element);
                //滚动到第一次出现错误的地方
                window.scrollTo(0, off.top - 80);
                if (env$1.isIPAD) {
                    // ipad上面云表单提交校验的时候没有滚动到对应位置
                    window.top.scrollTo(0, off.top - 80);
                }
            }
            passed = result.passed && passed;
            if (!result.passed) {
                notPassedArr.push(result);
            }
        }
    }
    return { passed: passed,
        notPassedArr: notPassedArr };
};

/**
 * Module : compox-util cache
 * Author : huyue(huyueb@yonyou.com)
 * Date   : 2017-01-18 09:34:01
 */

var setUserCache = function setUserCache(key, value) {
    var userCode = this.getEnvironment().usercode;
    if (!userCode) return;
    localStorage.setItem(userCode + key, value);
};

var getUserCache = function getUserCache(key) {
    var userCode = this.getEnvironment().usercode;
    if (!userCode) return;
    return localStorage.getItem(userCode + key);
};

var removeUserCache = function removeUserCache(key) {
    var userCode = this.getEnvironment().usercode;
    if (!userCode) return;
    localStorage.removeItem(userCode + key);
};

var setCache = function setCache(key, value) {
    localStorage.setItem(key, value);
};

var getCache = function getCache(key) {
    return localStorage.getItem(key);
};

var removeCache = function removeCache(key) {
    localStorage.removeItem(key);
};

var setSessionCache = function setSessionCache(key, value) {
    sessionStorage.setItem(key, value);
};

var getSessionCache = function getSessionCache(key) {
    return sessionStorage.getItem(key);
};

var removeSessionCache = function removeSessionCache(key) {
    sessionStorage.removeItem(key);
};

/**
 * Module : compox-util iwebCore
 * Author : huyue(huyueb@yonyou.com)
 * Date	  : 2017-01-18 09:34:01
 */

var getEnvironment = function getEnvironment() {
    return u.core.collectEnvironment();
};

var setClientAttribute = function setClientAttribute(k, v) {
    u.core.setClientAttribute(k, v);
};

var getClientAttribute = function getClientAttribute(k) {
    return u.core.getClientAttributes()[k];
};

/**
 * Module : compox-util ajax
 * Author : huyue(huyueb@yonyou.com)
 * Date   : 2017-01-18 09:34:01
 */

var ajax$1 = function ajax$$1(params) {
    params = _wrapAjax.call(this, params);
    ajax(params);
};

/**
 * 对ajax的请求的数据进行处理
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
var _wrapAjax = function _wrapAjax(params) {
    var self = this;
    this.serverEventObj = this.serverEvent();
    var orignSuccess = params.success;
    var orignError = params.error;
    var deferred = params.deferred;
    if (!deferred || !deferred.resolve) {
        deferred = {
            resolve: function resolve() {}, reject: function reject() {}
        };
    }
    params.success = function (data, state, xhr) {
        if (typeof data === 'string') data = JSON.parse(data);
        if (self.serverEventObj.processXHRError(self, data, state, xhr)) {
            orignSuccess.call(null, data);
            _successFunc(data, deferred);
        } else {
            deferred.reject();
        }
    };
    params.error = function (data, state, xhr) {
        if (typeof data === 'string') data = JSON.parse(data);
        if (self.serverEventObj.processXHRError(self, data, state, xhr)) {
            orignError.call(null, data);
            _successFunc(data, deferred);
        } else {
            deferred.reject();
        }
    };
    if (params.data) params.data.environment = ko.utils.stringifyJson(u.core.collectEnvironment());else params.data = { environment: ko.utils.stringifyJson(u.core.collectEnvironment()) };
    return params;
};

var _successFunc = function _successFunc(data, deferred) {
    deferred.resolve();
};

/**
 * Module : compox-util serverEvent
 * Author : huyue(huyueb@yonyou.com)
 * Date	  : 2017-01-18 09:34:01
 */

var serverEvent = function serverEvent() {
  return new ServerEvent(this);
};

/**
 * Module : compox-util util
 * Author : huyue(huyueb@yonyou.com)
 * Date   : 2017-01-18 09:34:01
 */

var setEnable = function setEnable(enable) {
    each(this.elements, function (i, element) {
        if (element) {
            element.querySelectorAll('[u-meta]').each(function () {
                if (this['u-meta']) {
                    var comp = this['u-meta'];
                    if (comp.setEnable) comp.setEnable(enable);
                }
            });
        }
    });
};

/**
 * Module : compox-util webpack entry app index
 * Author : huyue(huyueb@yonyou.com)
 * Date	  : 2017-01-18 09:34:01
 */

//相关依赖导入
// import {App} from 'compox/src/index';

// setAdjustMetaFunc
App.prototype.setAdjustMetaFunc = setAdjustMetaFunc;
// dataTable
App.prototype.addDataTable = addDataTable;
App.prototype.getDataTable = getDataTable;
App.prototype.getDataTables = getDataTables;
// comp
App.prototype.createComp = createComp;
App.prototype.getComp = getComp;
App.prototype.getCompsByDataTable = getCompsByDataTable;
App.prototype.getCompsByType = getCompsByType;
App.prototype.getComps = getComps;
App.prototype.showComp = showComp;
// validate
App.prototype.compsValidate = compsValidate;
App.prototype.compsValidateMultiParam = compsValidateMultiParam;
// cache
App.prototype.setUserCache = setUserCache;
App.prototype.getUserCache = getUserCache;
App.prototype.removeUserCache = removeUserCache;
App.prototype.setCache = setCache;
App.prototype.getCache = getCache;
App.prototype.removeCache = removeCache;
App.prototype.setSessionCache = setSessionCache;
App.prototype.getSessionCache = getSessionCache;
App.prototype.removeSessionCache = removeSessionCache;
// iwebCode
App.prototype.getEnvironment = getEnvironment;
App.prototype.setClientAttribute = setClientAttribute;
App.prototype.getClientAttribute = getClientAttribute;
// ajax
App.prototype.ajax = ajax$1;
// serverEvent
App.prototype.serverEvent = serverEvent;
// util
App.prototype.setEnable = setEnable;

/**
 * Module : Sparrow base component
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-28 18:45:08
 */

var BaseComponent = Class.create({
    initialize: function initialize(element) {
        if (isDomElement(element)) {
            this.element = element;
            this.options = {};
        } else {
            this.element = element['el'];
            this.options = element;
        }
        this.element = typeof this.element === 'string' ? document.querySelector(this.element) : this.element;

        this.compType = this.compType || this.constructor.compType;
        this.element[this.compType] = this;
        this.element['init'] = true;
        this.init();
    },
    /**
     * 绑定事件
     * @param {String} name
     * @param {Function} callback
     */
    on: function on$$1(name, callback) {
        name = name.toLowerCase();
        this._events || (this._events = {});
        var events = this._events[name] || (this._events[name] = []);
        events.push({
            callback: callback
        });
        return this;
    },
    /**
     * 触发事件
     * @param {String} name
     */
    trigger: function trigger$$1(name) {
        name = name.toLowerCase();
        if (!this._events || !this._events[name]) return this;
        var args = Array.prototype.slice.call(arguments, 1);
        var events = this._events[name];
        for (var i = 0, count = events.length; i < count; i++) {
            events[i].callback.apply(this, args);
        }
        return this;
    },
    /**
     * 初始化
     */
    init: function init() {},
    /**
     * 渲染控件
     */
    render: function render() {},
    /**
     * 销毁控件
     */
    destroy: function destroy() {
        delete this.element['comp'];
        this.element.innerHTML = '';
    },
    /**
     * 增加dom事件
     * @param {String} name
     * @param {Function} callback
     */
    addDomEvent: function addDomEvent(name, callback) {
        on$1(this.element, name, callback);
        return this;
    },
    /**
     * 移除dom事件
     * @param {String} name
     */
    removeDomEvent: function removeDomEvent(name, callback) {
        off$1(this.element, name, callback);
        return this;
    },
    setEnable: function setEnable(enable) {
        return this;
    },
    /**
     * 判断是否为DOM事件
     */
    isDomEvent: function isDomEvent(eventName) {
        if (this.element['on' + eventName] === undefined) return false;else return true;
    },
    createDateAdapter: function createDateAdapter(options) {
        var opt = options['options'],
            model = options['model'];
        if (u.compMgr) {
            var Adapter = u.compMgr.getDataAdapter(this.compType, opt['dataType']);
            if (Adapter) {
                this.dataAdapter = new Adapter(this, options);
            }
        }
    },
    Statics: {
        compName: '',
        EVENT_VALUE_CHANGE: 'valueChange',
        getName: function getName() {
            return this.compName;
        }
    }
});

var BaseComponent = BaseComponent;
window.u = window.u || {};
window.u.BaseComponent = BaseComponent;

if (u.compMgr) {
    if (document.readyState && document.readyState === 'complete') {
        u.compMgr.updateComp();
    } else {
        on$1(window, 'load', function () {
            //扫描并生成控件
            u.compMgr.updateComp();
        });
    }
}

/**
 * Module : neoui-autocompete
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-02 15:14:43
 */

var Autocomplete = u.BaseComponent.extend({
    defaults: {
        inputClass: "ac_input",
        resultsClass: "ac_results",
        lineSeparator: "\n",
        cellSeparator: "|",
        minChars: 1,
        delay: 400,
        matchCase: 0,
        matchSubset: 1,
        matchContains: 0,
        cacheLength: 1,
        mustMatch: 0,
        extraParams: {},
        loadingClass: "ac_loading",
        selectFirst: false,
        selectOnly: false,
        maxItemsToShow: -1,
        autoFill: false,
        width: 0,
        source: null,
        select: null,
        multiSelect: false
    },
    init: function init() {
        var self = this;
        this.options = extend({}, this.defaults, this.options);
        this.requestIndex = 0;
        this.pending = 0;
        if (this.options.inputClass) {
            addClass(this.element, this.options.inputClass);
        }
        this._results = document.querySelector('#autocompdiv');
        if (!this._results) {
            this._results = makeDOM('<div id="autocompdiv"></div>');
            document.body.appendChild(this._results);
        }
        this._results.style.display = 'none';
        this._results.style.position = 'absolute';
        addClass(this._results, this.options.resultsClass);
        if (this.options.width) {
            this._results.style.width = this.options.width;
        }
        this.timeout = null;
        this.prev = "";
        this.active = -1;
        this.cache = {};
        this.keyb = false;
        this.hasFocus = false;
        this.lastKeyPressCode = null;
        this._initSource();
        on$1(this.element, 'keydown', function (e) {
            self.lastKeyPressCode = e.keyCode;
            switch (e.keyCode) {
                case 38:
                    // up
                    stopEvent(e);
                    self.moveSelect(-1);
                    break;
                case 40:
                    // down
                    stopEvent(e);
                    self.moveSelect(1);
                    break;
                case 9: // tab
                case 13:
                    // return
                    if (self.selectCurrent()) {
                        // make sure to blur off the current field
                        // self.element.blur();
                        stopEvent(e);
                    }
                    break;
                default:
                    self.active = -1;
                    if (self.timeout) clearTimeout(self.timeout);
                    self.timeout = setTimeout(function () {
                        self.onChange();
                    }, self.options.delay);
                    break;
            }
        });
        on$1(this.element, 'focus', function () {
            self.hasFocus = true;
        });
        on$1(this.element, 'blur', function () {
            self.hasFocus = false;
            self.hideResults();
        });
        this.hideResultsNow();
    },
    flushCache: function flushCache() {
        this.cache = {};
        this.cache.data = {};
        this.cache.length = 0;
    },
    _initSource: function _initSource() {
        var array,
            url,
            self = this;
        if (isArray(this.options.source)) {
            array = this.options.source;
            this.source = function (request, response) {
                //				response( $.ui.autocomplete.filter( array, request.term ) );
                response(self.filterData(request.term, array));
            };
        } else if (typeof this.options.source === "string") {
            url = this.options.source;
            this.source = function (request, response) {
                if (self.xhr) {
                    self.xhr.abort();
                }
                self.xhr = ajax({
                    url: url,
                    data: request,
                    dataType: "json",
                    success: function success(data) {
                        response(data);
                    },
                    error: function error() {
                        response([]);
                    }
                });
            };
        } else {
            this.source = this.options.source;
        }
    },
    _response: function _response() {
        var self = this;
        var index = ++this.requestIndex;

        return function (content) {
            if (index === self.requestIndex) {
                self.__response(content);
            }

            self.pending--;
            if (!self.pending) {}
        };
    },
    __response: function __response(content) {
        if (content) this.receiveData2(content);
        this.showResults();
    },
    onChange: function onChange() {
        // ignore if the following keys are pressed: [del] [shift] [capslock]
        if (this.lastKeyPressCode == 46 || this.lastKeyPressCode > 8 && this.lastKeyPressCode < 32) return this._results.style.disply = 'none';
        if (!this.element.value) return;
        var vs = this.element.value.split(','),
            v = vs[vs.length - 1].trim();
        if (v == this.prev) return;
        this.prev = v;
        if (v.length >= this.options.minChars) {
            addClass(this.element, this.options.loadingClass);
            this.pending++;
            this.source({
                term: v
            }, this._response());
        } else {
            removeClass(this.element, this.options.loadingClass);
            this._results.style.display = 'none';
        }
    },
    moveSelect: function moveSelect(step) {
        var lis = this._results.querySelectorAll('li');
        if (!lis) return;

        this.active += step;

        if (this.active < 0) {
            this.active = 0;
        } else if (this.active >= lis.length) {
            this.active = lis.length - 1;
        }
        lis.forEach(function (li) {
            removeClass(li, 'ac_over');
        });
        addClass(lis[this.active], 'ac_over');
    },
    selectCurrent: function selectCurrent() {
        var li = this._results.querySelector('li.ac_over'); //$("li.ac_over", this.$results[0])[0];
        if (!li) {
            var _li = this._results.querySelectorAll('li'); //$("li", this.$results[0]);
            if (this.options.selectOnly) {
                if (_li.length == 1) li = _li[0];
            } else if (this.options.selectFirst) {
                li = _li[0];
            }
        }
        if (li) {
            this.selectItem(li);
            return true;
        } else {
            return false;
        }
    },
    selectItem: function selectItem(li) {
        var self = this;
        if (!li) {
            li = document.createElement("li");
            li.selectValue = "";
        }
        var v = li.selectValue ? li.selectValue : li.innerHTML;
        this.lastSelected = v;
        this.prev = v;
        this._results.innerHTML = '';
        if (this.options.multiSelect) {

            if ((this.element.value + ',').indexOf(v + ',') != -1) return;
            var vs = this.element.value.split(',');
            var lastValue = this.element.value.substring(0, this.element.value.lastIndexOf(','));

            this.element.value = (lastValue ? lastValue + ', ' : lastValue) + v + ', ';
        } else {
            this.element.value = v;
        }

        this.hideResultsNow();

        this.element.focus();

        if (this.options.select) setTimeout(function () {
            self.options.select(li._item, self);
        }, 1);
    },
    createSelection: function createSelection(start, end) {
        // get a reference to the input element
        var field = this.element;
        if (field.createTextRange) {
            var selRange = field.createTextRange();
            selRange.collapse(true);
            selRange.moveStart("character", start);
            selRange.moveEnd("character", end);
            selRange.select();
        } else if (field.setSelectionRange) {
            field.setSelectionRange(start, end);
        } else {
            if (field.selectionStart) {
                field.selectionStart = start;
                field.selectionEnd = end;
            }
        }
        field.focus();
    },
    // fills in the input box w/the first match (assumed to be the best match)
    autoFill: function autoFill(sValue) {
        // if the last user key pressed was backspace, don't autofill
        if (this.lastKeyPressCode != 8) {
            // fill in the value (keep the case the user has typed)
            this.element.value = this.element.value + sValue.substring(this.prev.length);
            // select the portion of the value not typed by the user (so the next character will erase)
            this.createSelection(this.prev.length, sValue.length);
        }
    },
    showResults: function showResults() {
        // get the position of the input field right now (in case the DOM is shifted)
        var pos = findPos(this.element);
        // either use the specified width, or autocalculate based on form element
        var iWidth = this.options.width > 0 ? this.options.width : this.element.offsetWidth;
        // reposition
        if ('100%' === this.options.width) {
            this._results.style.top = pos.y + this.element.offsetHeight + "px";
            this._results.style.left = pos.x + "px";
            this._results.style.display = 'block';
        } else {
            this._results.style.width = parseInt(iWidth) + "px";
            this._results.style.top = pos.y + this.element.offsetHeight + "px";
            this._results.style.left = pos.x + "px";
            this._results.style.display = 'block';
        }
    },
    hideResults: function hideResults() {
        var self = this;
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            self.hideResultsNow();
        }, 200);
    },
    hideResultsNow: function hideResultsNow() {
        if (this.timeout) clearTimeout(this.timeout);
        removeClass(this.element, this.options.loadingClass);
        //if (this.$results.is(":visible")) {
        this._results.style.display = 'none';
        //}
        if (this.options.mustMatch) {
            var v = this.element.value;
            if (v != this.lastSelected) {
                this.selectItem(null);
            }
        }
    },
    receiveData: function receiveData(q, data) {
        if (data) {
            removeClass(this.element, this.options.loadingClass);
            this._results.innerHTML = '';

            if (!this.hasFocus || data.length == 0) return this.hideResultsNow();

            this._results.appendChild(this.dataToDom(data));
            // autofill in the complete box w/the first match as long as the user hasn't entered in more data
            if (this.options.autoFill && this.element.value.toLowerCase() == q.toLowerCase()) this.autoFill(data[0][0]);
            this.showResults();
        } else {
            this.hideResultsNow();
        }
    },
    filterData: function filterData(v, items) {
        if (!v) return items;
        var _items = [];
        for (var i = 0, count = items.length; i < count; i++) {
            var label = items[i].label;
            if (label.indexOf(v) > -1) _items.push(items[i]);
        }
        return _items;
    },
    receiveData2: function receiveData2(items) {
        if (items) {
            removeClass(this.element, this.options.loadingClass);
            this._results.innerHTML = '';

            // if the field no longer has focus or if there are no matches, do not display the drop down
            if (!this.hasFocus || items.length == 0) return this.hideResultsNow();

            this._results.appendChild(this.dataToDom2(items));
            this.showResults();
        } else {
            this.hideResultsNow();
        }
    },
    dataToDom2: function dataToDom2(items) {
        var ul = document.createElement("ul");
        var num = items.length;
        var me = this;
        var showMoreMenu = false;

        // limited results to a max number
        if (this.options.maxItemsToShow > 0 && this.options.maxItemsToShow < num) {
            num = this.options.maxItemsToShow;
            if (this.options.moreMenuClick) {
                showMoreMenu = true;
            }
        }

        for (var i = 0; i < num; i++) {
            var item = items[i];
            if (!item) continue;
            var li = document.createElement("li");
            if (this.options.formatItem) li.innerHTML = this.options.formatItem(item, i, num);else li.innerHTML = item.label;
            li.selectValue = item.label;
            li._item = item;
            ul.appendChild(li);
            on$1(li, 'mouseenter', function () {
                var _li = ul.querySelector('li.ac_over');
                if (_li) removeClass(_li, 'ac_over');
                addClass(this, "ac_over");
                me.active = indexOf$1(ul.querySelectorAll('li'), this);
            });
            on$1(li, 'mouseleave', function () {
                removeClass(this, "ac_over");
            });
            on$1(li, 'mousedown', function (e) {
                stopEvent(e);
                me.selectItem(this);
            });
        }
        if (showMoreMenu) {
            var li = document.createElement("li");
            li.innerHTML = '更多';
            ul.appendChild(li);
            on$1(li, 'mouseenter', function () {
                var _li = ul.querySelector('li.ac_over');
                if (_li) removeClass(_li, 'ac_over');
                addClass(this, "ac_over");
            });
            on$1(li, 'mouseleave', function () {
                removeClass(this, "ac_over");
            });
            on$1(li, 'mousedown', function (e) {
                stopEvent(e);
                me.options.moreMenuClick.call(me);
            });
        }
        return ul;
    },
    parseData: function parseData() {
        if (!data) return null;
        var parsed = [];
        var rows = data.split(this.options.lineSeparator);
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            if (row) {
                parsed[parsed.length] = row.split(this.options.cellSeparator);
            }
        }
        return parsed;
    },
    dataToDom: function dataToDom(data) {
        var ul = document.createElement("ul");
        var num = data.length;
        var self = this;
        var showMoreMenu = false;

        // limited results to a max number
        if (this.options.maxItemsToShow > 0 && this.options.maxItemsToShow < num) {
            num = this.options.maxItemsToShow;
            if (this.options.moreMenuClick) {
                showMoreMenu = true;
            }
        }

        for (var i = 0; i < num; i++) {
            var row = data[i];
            if (!row) continue;
            var li = document.createElement("li");
            if (this.options.formatItem) {
                li.innerHTML = this.options.formatItem(row, i, num);
                li.selectValue = row[0];
            } else {
                li.innerHTML = row[0];
                li.selectValue = row[0];
            }
            var extra = null;
            if (row.length > 1) {
                extra = [];
                for (var j = 1; j < row.length; j++) {
                    extra[extra.length] = row[j];
                }
            }
            li.extra = extra;
            ul.appendChild(li);
            on$1(li, 'mouseenter', function () {
                var _li = ul.querySelector('li.ac_over');
                if (_li) removeClass(_li, 'ac_over');
                addClass(this, "ac_over");
                self.active = indexOf$1(ul.querySelectorAll('li'), this);
            });
            on$1(li, 'mouseleave', function () {
                removeClass(this, "ac_over");
            });
            on$1(li, 'mousedown', function () {
                stopEvent(e);
                self.selectItem(this);
            });
        }
        if (showMoreMenu) {
            var li = document.createElement("li");
            li.innerHTML = '更多';
            ul.appendChild(li);
            on$1(li, 'mouseenter', function () {
                var _li = ul.querySelector('li.ac_over');
                if (_li) removeClass(_li, 'ac_over');
                addClass(this, "ac_over");
            });
            on$1(li, 'mouseleave', function () {
                removeClass(this, "ac_over");
            });
            on$1(li, 'mousedown', function (e) {
                stopEvent(e);
                self.options.moreMenuClick.call(self);
            });
        }
        return ul;
    },
    requestData: function requestData() {
        var self = this;
        if (!this.options.matchCase) q = q.toLowerCase();
        var data = this.options.cacheLength ? this.loadFromCache(q) : null;
        // recieve the cached data
        if (data) {
            this.receiveData(q, data);
            // if an AJAX url has been supplied, try loading the data now
        } else if (typeof this.options.url == "string" && this.options.url.length > 0) {
            ajax({
                url: this.makeUrl(q),
                success: function success(data) {
                    data = self.parseData(data);
                    self.addToCache(q, data);
                    self.receiveData(q, data);
                }
            });
            // if there's been no data found, remove the loading class
        } else {
            removeClass(this.element, this.options.loadingClass);
        }
    },
    makeUrl: function makeUrl(q) {
        var url = this.options.url + "?q=" + encodeURI(q);
        for (var i in this.options.extraParams) {
            url += "&" + i + "=" + encodeURI(this.options.extraParams[i]);
        }
        return url;
    },
    loadFromCache: function loadFromCache() {
        if (!q) return null;
        if (this.cache.data[q]) return this.cache.data[q];
        if (this.options.matchSubset) {
            for (var i = q.length - 1; i >= this.options.minChars; i--) {
                var qs = q.substr(0, i);
                var c = this.cache.data[qs];
                if (c) {
                    var csub = [];
                    for (var j = 0; j < c.length; j++) {
                        var x = c[j];
                        var x0 = x[0];
                        if (this.matchSubset(x0, q)) {
                            csub[csub.length] = x;
                        }
                    }
                    return csub;
                }
            }
        }
        return null;
    },
    matchSubset: function matchSubset(s, sub) {
        if (!this.options.matchCase) s = s.toLowerCase();
        var i = s.indexOf(sub);
        if (i == -1) return false;
        return i == 0 || this.options.matchContains;
    },
    addToCache: function addToCache(q, data) {
        if (!data || !q || !this.options.cacheLength) return;
        if (!this.cache.length || this.cache.length > this.options.cacheLength) {
            this.flushCache();
            this.cache.length++;
        } else if (!this.cache[q]) {
            this.cache.length++;
        }
        this.cache.data[q] = data;
    }
});

function findPos(obj) {
    var curleft = obj.offsetLeft || 0;
    var curtop = obj.offsetTop || 0;
    while (obj = obj.offsetParent) {
        curleft += obj.offsetLeft;
        curtop += obj.offsetTop;
    }
    return {
        x: curleft,
        y: curtop
    };
}

function indexOf$1(element, e) {
    for (var i = 0; i < element.length; i++) {
        if (element[i] == e) return i;
    }
    return -1;
}

if (u.compMgr) u.compMgr.regComp({
    comp: Autocomplete,
    compAsString: 'u.Autocomplete',
    css: 'u-autocomplete'
});

/**
 * Module : neoui-button
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-02 13:01:05
 */

var Button = u.BaseComponent.extend({
    init: function init() {
        try {
            var rippleContainer = document.createElement('span');
            addClass(rippleContainer, 'u-button-container');
            this._rippleElement = document.createElement('span');
            addClass(this._rippleElement, 'u-ripple');
            if (env$1.isIE8) addClass(this._rippleElement, 'oldIE');
            rippleContainer.appendChild(this._rippleElement);
            on$1(this._rippleElement, 'mouseup', this.element.blur);
            this.element.appendChild(rippleContainer);
        } catch (e) {}

        // 增加disabled效果
        var disableAttr = this.element.getAttribute('disabled');
        if (disableAttr != null && disableAttr != '') {
            this.element.className += " disable";
        }

        on$1(this.element, 'mouseup', this.element.blur);
        on$1(this.element, 'mouseleave', this.element.blur);
        this.ripple = new Ripple(this.element);
    }

});

if (u.compMgr) u.compMgr.regComp({
    comp: Button,
    compAsString: 'u.Button',
    css: 'u-button'
});

/**
 * Module : neoui-cascader
 * Author : huyueb(huyueb@yonyou.com)
 * Date	  : 2017-05-19 13:19:10
 */
var Cascader = u.BaseComponent.extend({
    // 入口方法
    init: function init() {
        var self = this,
            data = self.options['data'],
            id = '';
        this._data = data;
        this.order = [];
        if (hasClass(this.element, 'trigger-hover')) {
            this.options['trigger_type'] = 'mouseenter';
        }
        if (!this.options['id']) {
            this.options['id'] = new Date().getTime() + '' + parseInt(Math.random() * 10 + 1, 10);
        }
        id = this.options['id'];

        $(this.element).append('<div id="' + id + '-input" class="cascader-input" style="width:100%;height:100%;"><input/></div><div id="' + id + '" class="cascader-show"></div>');
        this.focusFunc();
        $(this.element).children('.cascader-input').children('input').attr('readonly', 'readonly').end().off('mouseenter').on('mouseenter', function () {
            var $this = $(this);
            if ($this.children('input').val()) {
                $this.append('<i class="icon uf uf-close-bold"></i>');
            }
            $this.off('mouseleave').on('mouseleave', function () {
                $this.children('i').remove();
            }).children('i').on('click', function () {
                var $this_ = $(this);
                $this_.siblings('input').val('').attr('tovalue', '').end().parent().next().html('').end().end().remove();
            });
        });
    },
    triggerChange: function triggerChange(value) {
        this.trigger('change', {
            value: value
        });
    },
    setData: function setData(data) {
        var self = this;
        self._data = data;
    },

    setValue: function setValue(value) {
        var self = this,
            arr = [],
            names = '';
        //如果value存在的话，就通过split分割
        if (value) {
            arr = value.split(',');
        }

        if (arr && arr.length > 0) {
            names = self.transName(arr, self._data);
            if (names.length > 1) {
                names = names.substring(0, names.length - 1);
                $(this.element).children('.cascader-input').children('input').val(names).attr('tovalue', value);
            }
        } else {
            $(this.element).children('.cascader-input').children('input').val('').attr('tovalue', '');
        }
    },
    //通过设置的value值能去data中查找到对应的name值
    transName: function transName(arr, data) {
        var names = '',
            self = this,
            flag = -1;
        for (var j = 0; j < data.length; j++) {
            if (data[j].value == arr[0]) {
                flag = j;
                names += data[j].name + '/';
            }
        }
        if (arr.length > 1) {
            data = data[flag].children;
            arr.shift();

            names += self.transName(arr, data);
        }
        return names;
    },

    //还原之前节点的位置
    transHtml: function transHtml(arr, data, index) {
        var html = "",
            self = this,
            index = index || 0,
            flag = -1;

        html += "<ul col = " + index + " >";

        for (var j = 0; j < data.length; j++) {
            if (data[j].value == arr[0]) {
                flag = j;
            }

            if (data[j].children) {
                html += "<li class='" + (flag === j ? 'active' : '') + "' row = " + j + "  value=" + data[j].value + ">" + data[j].name + "<i class='icon uf uf-arrow-right'></i></li>";
            } else {
                html += "<li class='" + (flag === j ? 'active' : '') + "' row = " + j + " value=" + data[j].value + ">" + data[j].name + "</li>";
            }
        }
        html += "</ul>";
        if (arr.length > 1) {
            data = data[flag].children;
            arr.shift();

            html += self.transHtml(arr, data, ++index);
        }

        return html;
    },
    //根据传入的data来动态的生成级联组件的列表
    formData: function formData(data, index, arg) {
        var self = this,
            data = data || self._data,
            html = "",
            index = index || 0,
            //来记录是第几个ul，方便进行查找和删除
        arr = [],
            trigger_type = self.options['trigger_type'] || 'click';
        //判断输入框中是否有数据
        if (!arg) {
            //当输入框中没有数据，就认为是第一次
            if ($('#' + self.options['id'] + '>ul').length) {
                $('#' + self.options['id'] + '>ul[col="' + index + '"]~').remove();
                index = $('#' + self.options['id'] + '>ul').length;
            }

            html += "<ul col = " + index + " >";

            for (var i = 0; i < data.length; i++) {
                if (data[i].children) {
                    html += "<li row = " + i + "  value=" + data[i].value + ">" + data[i].name + "<i class='icon uf uf-arrow-right'></i></li>";
                } else {
                    html += "<li row = " + i + " value=" + data[i].value + ">" + data[i].name + "</li>";
                }
            }
            html += "</ul>";
            if ($('#' + self.options['id'] + '>ul').length) {

                $('#' + self.options['id']).append(html);
            } else {
                $('#' + self.options['id']).append(html);
            }
            index++;
        } else {
            //当输入框中有数据的时候，就根据输入框的数据，来显示出相应的列表
            arr = arg.split(',');
            html = self.transHtml(arr, data);
            if ($('#' + self.options['id'] + '>ul').length) {

                $('#' + self.options['id']).append(html);
            } else {
                $('#' + self.options['id']).append(html);
            }
            index++;
        }

        if (trigger_type == "mouseenter") {
            //当触发方式是mouseenter的时候，需要额外定义点击事件。点击则将选中的数据写入input输入框
            $('#' + self.options['id'] + '>ul>li').off('click').on('click', function (e) {
                var $this = $(this),
                    $content = $('#' + self.options['id']),
                    col = $this.parent().attr('col'),
                    text = "",
                    //最后选中之后的input输入框中的文字,如："浙江,杭州"
                value = ""; //最后选中之后的原始序列,如："01,11"
                $.each($content.find('li.active'), function (key, val) {
                    var $val = $(val);
                    if (key < col - -1) {
                        text += val.innerText + '/';
                        value += $val.attr('value') + ',';
                    }
                });
                text = text.substring(0, text.length - 1);
                value = value.substring(0, value.length - 1);

                $content.prev().children('input').val(text).attr('tovalue', value).end().end().html('');

                //触发adapter层的change事件
                self.triggerChange(value);
            });
        }

        //为级联组件的列表的每个li绑定事件
        $('#' + self.options['id'] + '>ul>li').off(trigger_type).on(trigger_type, function (e) {
            var $this = $(this),
                col = $this.parent().attr('col'),
                row = $this.attr('row'),
                data = self._data,
                $content = $('#' + self.options['id']),
                text = "",
                //最后选中之后的input输入框中的文字,如："浙江,杭州"
            value = ""; //最后选中之后的原始序列,如："01,11"

            $this.siblings().removeClass('active');
            $this.addClass('active');

            //把超过col+1的ul砍掉，之后的就不显示了
            self.order.length = col - -1;
            self.order[col] = row;

            for (var i = 0; i < self.order.length; i++) {
                //判断此条数据是否还有子数据
                if (data[self.order[i]].children) {
                    data = data[self.order[i]].children;
                } else {

                    if (trigger_type != 'mouseenter') {
                        //当此条数据没有子数据时，并且是click方式触发，就将之前选择的数据展示到input框中
                        $.each($content.find('li.active'), function (key, val) {
                            var $val = $(val);
                            if (key < col - -1) {
                                text += val.innerText + '/';
                                value += $val.attr('value') + ',';
                            }
                        });
                        text = text.substring(0, text.length - 1);
                        value = value.substring(0, value.length - 1);

                        $content.prev().children('input').val(text).attr('tovalue', value).end().end().html('');
                        //触发adapter层的change事件
                        self.triggerChange(value);
                    } else {
                        //当此条数据没有子数据时，如果是mouseenter触发，就只是将该条列表后面的内容删掉
                        $this.parent().nextAll().remove();
                    }
                    return;
                }
            }
            if (data) {
                self.formData(data, col);
            }
        });
        //当点击级联组件的之外的区域时，删除级联组件的显示
        var callback = function (e) {
            if (e.target === this._input || self._inputFocus == true) return;
            if (closest(e.target, 'cascader-show') === self._ul || closest(e.target, 'u-cascader')) return;
            off$1(document, 'click', callback);
            $('#' + self.options['id']).html('');
        }.bind(this);
        this.callback = callback;
        on$1(document, 'click', callback);
    },
    //当input输入框有点击事件的时候就生成级联组件的列表
    focusFunc: function focusFunc() {
        var self = this;
        var caret = $(this.element).find('input')[0];
        on$1(caret, 'click', function (e) {
            var $this = $(this);
            if (!$('#' + self.options['id']).html()) {
                self.formData('', '', $this.attr('tovalue'));
            }
            if (e.stopPropagation) {
                e.stopPropagation();
            } else {
                e.cancelBubble = true;
            }
        });
    }
});

if (u.compMgr) u.compMgr.regComp({
    comp: Cascader,
    compAsString: 'u.Cascader',
    css: 'u-cascader'
});

/**
 * Module : neoui-checkbox
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-02 13:55:07
 */
var Checkbox = u.BaseComponent.extend({
    _Constant: {
        TINY_TIMEOUT: 0.001
    },

    _CssClasses: {
        INPUT: 'u-checkbox-input',
        BOX_OUTLINE: 'u-checkbox-outline',
        FOCUS_HELPER: 'u-checkbox-focus-helper',
        TICK_OUTLINE: 'u-checkbox-tick-outline',
        IS_FOCUSED: 'is-focused',
        IS_DISABLED: 'is-disabled',
        IS_CHECKED: 'is-checked',
        IS_UPGRADED: 'is-upgraded'
    },
    init: function init() {
        this._inputElement = this.element.querySelector('input');

        var boxOutline = document.createElement('span');
        addClass(boxOutline, this._CssClasses.BOX_OUTLINE);

        var tickContainer = document.createElement('span');
        addClass(tickContainer, this._CssClasses.FOCUS_HELPER);

        var tickOutline = document.createElement('span');
        addClass(tickOutline, this._CssClasses.TICK_OUTLINE);

        boxOutline.appendChild(tickOutline);
        this.element.appendChild(tickContainer);
        this.element.appendChild(boxOutline);

        //if (this.element.classList.contains(this._CssClasses.RIPPLE_EFFECT)) {
        //  addClass(this.element,this._CssClasses.RIPPLE_IGNORE_EVENTS);
        this.rippleContainerElement_ = document.createElement('span');
        //this.rippleContainerElement_.classList.add(this._CssClasses.RIPPLE_CONTAINER);
        //this.rippleContainerElement_.classList.add(this._CssClasses.RIPPLE_EFFECT);
        //this.rippleContainerElement_.classList.add(this._CssClasses.RIPPLE_CENTER);
        this.boundRippleMouseUp = this._onMouseUp.bind(this);
        this.rippleContainerElement_.addEventListener('mouseup', this.boundRippleMouseUp);

        //var ripple = document.createElement('span');
        //ripple.classList.add(this._CssClasses.RIPPLE);

        //this.rippleContainerElement_.appendChild(ripple);
        this.element.appendChild(this.rippleContainerElement_);
        new URipple(this.rippleContainerElement_);

        //}
        this.boundInputOnChange = this._onChange.bind(this);
        this.boundInputOnFocus = this._onFocus.bind(this);
        this.boundInputOnBlur = this._onBlur.bind(this);
        this.boundElementMouseUp = this._onMouseUp.bind(this);
        //this._inputElement.addEventListener('change', this.boundInputOnChange);
        //this._inputElement.addEventListener('focus', this.boundInputOnFocus);
        //this._inputElement.addEventListener('blur', this.boundInputOnBlur);
        //this.element.addEventListener('mouseup', this.boundElementMouseUp);
        if (!hasClass(this.element, 'only-style')) {
            on$1(this.element, 'click', function (e) {
                if (e.target.nodeName != 'INPUT') {
                    if (!this._inputElement.disabled) {
                        this.toggle();
                        stopEvent(e);
                    }
                }
            }.bind(this));
        }

        this._updateClasses();
        addClass(this.element, this._CssClasses.IS_UPGRADED);
    },

    _onChange: function _onChange(event) {
        this._updateClasses();
        this.trigger('change', {
            isChecked: this._inputElement.checked
        });
    },

    _onFocus: function _onFocus() {
        addClass(this.element, this._CssClasses.IS_FOCUSED);
    },

    _onBlur: function _onBlur() {
        removeClass(this.element, this._CssClasses.IS_FOCUSED);
    },

    _onMouseUp: function _onMouseUp(event) {
        this._blur();
    },

    /**
     * Handle class updates.
     *
     * @private
     */
    _updateClasses: function _updateClasses() {
        this.checkDisabled();
        this.checkToggleState();
    },

    /**
     * Add blur.
     *
     * @private
     */
    _blur: function _blur() {
        // TODO: figure out why there's a focus event being fired after our blur,
        // so that we can avoid this hack.
        window.setTimeout(function () {
            this._inputElement.blur();
        }.bind(this), /** @type {number} */this._Constant.TINY_TIMEOUT);
    },

    // Public methods.

    /**
     * Check the inputs toggle state and update display.
     *
     * @public
     */
    checkToggleState: function checkToggleState() {
        if (this._inputElement.checked) {
            addClass(this.element, this._CssClasses.IS_CHECKED);
        } else {
            removeClass(this.element, this._CssClasses.IS_CHECKED);
        }
    },

    /**
     * Check the inputs disabled state and update display.
     *
     * @public
     */
    checkDisabled: function checkDisabled() {
        if (this._inputElement.disabled) {
            addClass(this.element, this._CssClasses.IS_DISABLED);
        } else {
            removeClass(this.element, this._CssClasses.IS_DISABLED);
        }
    },

    isChecked: function isChecked() {
        //return hasClass(this.element,this._CssClasses.IS_CHECKED);
        return this._inputElement.checked;
    },

    toggle: function toggle() {
        //return;
        if (this.isChecked()) {
            this.uncheck();
        } else {
            this.check();
        }
    },

    /**
     * Disable checkbox.
     *
     * @public
     */
    disable: function disable() {
        this._inputElement.disabled = true;
        this._updateClasses();
    },

    /**
     * Enable checkbox.
     *
     * @public
     */
    enable: function enable() {
        this._inputElement.disabled = false;
        this._updateClasses();
    },

    // 点击时查看是否有beforeEdit（从checkboxAdapter那里传来）方法，根据beforeEdit方法判断是否触发check或者uncheck
    beforeToggle: function beforeToggle() {
        if (typeof this.beforeEdit === 'function') {
            return this.beforeEdit();
        } else {
            return true;
        }
    },
    /**
     * Check checkbox.
     *
     * @public
     */
    check: function check() {
        if (this.beforeToggle()) {
            this._inputElement.checked = true;
            this._updateClasses();
            this.boundInputOnChange();
        }
    },

    /**
     * Uncheck checkbox.
     *
     * @public
     */
    uncheck: function uncheck() {
        if (this.beforeToggle()) {
            this._inputElement.checked = false;
            this._updateClasses();
            this.boundInputOnChange();
        }
    }

});

if (u.compMgr) u.compMgr.regComp({
    comp: Checkbox,
    compAsString: 'u.Checkbox',
    css: 'u-checkbox'
});

/**
 * Module : neoui-combo
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-02 14:22:46
 */

var Text = u.BaseComponent.extend({
    _Constant: {
        NO_MAX_ROWS: -1,
        MAX_ROWS_ATTRIBUTE: 'maxrows'
    },

    _CssClasses: {
        LABEL: 'u-label',
        INPUT: 'u-input',
        IS_DIRTY: 'is-dirty',
        IS_FOCUSED: 'is-focused',
        IS_DISABLED: 'is-disabled',
        IS_INVALID: 'is-invalid',
        IS_UPGRADED: 'is-upgraded'
    },

    init: function init() {
        var oThis = this;
        this.maxRows = this._Constant.NO_MAX_ROWS;
        this.label_ = this.element.querySelector('.' + this._CssClasses.LABEL);
        this._input = this.element.querySelector('input');

        if (this._input) {
            if (this._input.hasAttribute(
            /** @type {string} */
            this._Constant.MAX_ROWS_ATTRIBUTE)) {
                this.maxRows = parseInt(this._input.getAttribute(
                /** @type {string} */
                this._Constant.MAX_ROWS_ATTRIBUTE), 10);
                if (isNaN(this.maxRows)) {
                    this.maxRows = this._Constant.NO_MAX_ROWS;
                }
            }

            this.boundUpdateClassesHandler = this._updateClasses.bind(this);
            this.boundFocusHandler = this._focus.bind(this);
            this.boundBlurHandler = this._blur.bind(this);
            this.boundResetHandler = this._reset.bind(this);
            this._input.addEventListener('input', this.boundUpdateClassesHandler);
            if (env$1.isIE8) {
                this._input.addEventListener('propertychange', function () {
                    oThis._updateClasses();
                });
            }
            this._input.addEventListener('focus', this.boundFocusHandler);
            if (env$1.isIE8 || env$1.isIE9) {
                if (this.label_) {
                    this.label_.addEventListener('click', function () {
                        this._input.focus();
                    }.bind(this));
                }
            }

            this._input.addEventListener('blur', this.boundBlurHandler);
            this._input.addEventListener('reset', this.boundResetHandler);

            if (this.maxRows !== this._Constant.NO_MAX_ROWS) {
                // TODO: This should handle pasting multi line text.
                // Currently doesn't.
                this.boundKeyDownHandler = this._down.bind(this);
                this._input.addEventListener('keydown', this.boundKeyDownHandler);
            }
            var invalid = hasClass(this.element, this._CssClasses.IS_INVALID);
            this._updateClasses();
            addClass(this.element, this._CssClasses.IS_UPGRADED);
            if (invalid) {
                addClass(this.element, this._CssClasses.IS_INVALID);
            }
        }
    },

    /**
     * Handle input being entered.
     *
     * @param {Event} event The event that fired.
     * @private
     */
    _down: function _down(event) {
        var currentRowCount = event.target.value.split('\n').length;
        if (event.keyCode === 13) {
            if (currentRowCount >= this.maxRows) {
                event.preventDefault();
            }
        }
    },
    /**
     * Handle focus.
     *
     * @param {Event} event The event that fired.
     * @private
     */
    _focus: function _focus(event) {
        addClass(this.element, this._CssClasses.IS_FOCUSED);
    },
    /**
     * Handle lost focus.
     *
     * @param {Event} event The event that fired.
     * @private
     */
    _blur: function _blur(event) {
        removeClass(this.element, this._CssClasses.IS_FOCUSED);
        this.trigger('u.text.blur');
    },
    /**
     * Handle reset event from out side.
     *
     * @param {Event} event The event that fired.
     * @private
     */
    _reset: function _reset(event) {
        this._updateClasses();
    },
    /**
     * Handle class updates.
     *
     * @private
     */
    _updateClasses: function _updateClasses() {
        this.checkDisabled();
        this.checkValidity();
        this.checkDirty();
    },

    // Public methods.

    /**
     * Check the disabled state and update field accordingly.
     *
     * @public
     */
    checkDisabled: function checkDisabled() {
        if (this._input.disabled) {
            addClass(this.element, this._CssClasses.IS_DISABLED);
        } else {
            removeClass(this.element, this._CssClasses.IS_DISABLED);
        }
    },
    /**
     * Check the validity state and update field accordingly.
     *
     * @public
     */
    checkValidity: function checkValidity() {
        if (this._input.validity) {
            if (this._input.validity.valid) {
                removeClass(this.element, this._CssClasses.IS_INVALID);
            } else {
                addClass(this.element, this._CssClasses.IS_INVALID);
            }
        }
    },
    /**
     * Check the dirty state and update field accordingly.
     *
     * @public
     */
    checkDirty: function checkDirty() {
        if (this._input.value && this._input.value.length > 0) {
            addClass(this.element, this._CssClasses.IS_DIRTY);
        } else {
            removeClass(this.element, this._CssClasses.IS_DIRTY);
        }
    },
    /**
     * Disable text field.
     *
     * @public
     */
    disable: function disable() {
        this._input.disabled = true;
        this._updateClasses();
    },
    /**
     * Enable text field.
     *
     * @public
     */
    enable: function enable() {
        this._input.disabled = false;
        this._updateClasses();
    },
    /**
     * Update text field value.
     *
     * @param {string} value The value to which to set the control (optional).
     * @public
     */
    change: function change(value) {
        this._input.value = value === 0 ? value : value || '';
        this._updateClasses();
    }

});

//if (compMgr)
//    compMgr.addPlug({
//        name:'text',
//        plug: Text
//    })

if (u.compMgr) u.compMgr.regComp({
    comp: Text,
    compAsString: 'u.Text',
    css: 'u-text'
});

/**
 * Module : neoui-combo
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-06 13:19:10
 */

var Combo = u.BaseComponent.extend({
    init: function init() {
        this.name = '';
        this.mutilSelect = this.options['mutilSelect'] || false;
        if (hasClass(this.element, 'mutil-select')) {
            this.mutilSelect = true;
        }

        this.onlySelect = this.options['onlySelect'] || false;
        if (this.mutilSelect) this.onlySelect = true;

        this.comboDatas = [];
        var i,
            option,
            datas = [],
            self = this;
        //addClass(this.element, 'u-text')
        new Text(this.element);
        var options = this.element.getElementsByTagName('option');
        for (i = 0; i < options.length; i++) {
            option = options[i];
            datas.push({
                value: option.value,
                name: option.text
            });
        }

        this._input = this.element.querySelector("input");
        this.setComboData(datas);

        if (this.mutilSelect) {
            this.nowWidth = 0;
            this.showNowWidth = 0;
            this.multiNoneArr = [];
            this.fullWidth = this._input.offsetWidth;
        }

        if (this.onlySelect || env$1.isMobile) {
            setTimeout(function () {
                self._input.setAttribute('readonly', 'readonly');
            }, 1000);
        } else {
            on$1(this._input, 'blur', function (e) {
                var v = this.value;
                if (!v) return;
                /*校验数值是否存在于datasource的name中*/
                for (var i = 0; i < self.comboDatas.length; i++) {
                    if (v == self.comboDatas[i].name) {
                        v = self.comboDatas[i].value;
                        break;
                    }
                }
                self.setValue(v);
            });
        }
        this._combo_name_par = this.element.querySelector(".u-combo-name-par");
        on$1(this._input, 'focus', function (e) {
            self._inputFocus = true;
            self.show(e);
            stopEvent(e);
        });
        on$1(this._input, 'blur', function (e) {
            self._inputFocus = false;
        });

        this.isAutoTip = this.options['isAutoTip'] || false; //是否支持自动提示
        //if (hasClass(this.element, 'is-auto-tip')){
        //    this.isAutoTip = true;
        //}
        on$1(this._input, 'keydown', function (e) {
            var keyCode = e.keyCode;

            if (self.isAutoTip) {
                switch (keyCode) {
                    case 38:
                        // up
                        u.stopEvent(e);
                        break;
                    case 40:
                        // down
                        u.stopEvent(e);
                        break;
                    case 9: // tab
                    case 13:
                        // return
                        // make sure to blur off the current field
                        // self.element.blur();
                        u.stopEvent(e);
                        break;
                    default:
                        if (self.timeout) clearTimeout(self.timeout);
                        self.timeout = setTimeout(function () {
                            self.onChange();
                        }, 400);
                        break;
                }
            } else {
                // 回车
                if (keyCode == 13) this.blur();
            }
        });
        /*  this.iconBtn = this.element.querySelector("[data-role='combo-button']");
          if (this.iconBtn){
              on(this.iconBtn, 'click', function(e){
                  self._input.focus();
                  stopEvent(e);
              })
          }
         */
        //下拉框图表点击收起打开
        this.iconBtn = this.element.querySelector("[data-role='combo-button']");
        var comonTarge = true;
        if (this.iconBtn) {
            on$1(this.iconBtn, 'click', function (e) {
                self._input.focus();
                if (comonTarge) {
                    $(self._input).parent().parent().find(".u-combo-ul").addClass("is-visible");
                    comonTarge = false;
                } else {
                    $(self._input).parent().parent().find(".u-combo-ul").removeClass("is-visible");
                    comonTarge = true;
                }
            });
        }
    },

    //输入框内容发生变化时修改提示词.
    onChange: function onChange() {
        var v = this._input.value;
        if (!v) v = '';
        var filterData = [];
        for (var i = 0, len = this.initialComboData.length; i < len; i++) {
            if (this.initialComboData[i].name.indexOf(v) >= 0 || this.initialComboData[i].value.indexOf(v) >= 0) {
                filterData.push(this.initialComboData[i]);
            }
        }
        this.setComboData(filterData);
        this.show();
    },

    show: function show(evt) {

        var self = this,
            width = this._input.offsetWidth;
        if (this.options.showFix) {
            document.body.appendChild(this._ul);
            this._ul.style.position = 'fixed';
            showPanelByEle({
                ele: this._input,
                panel: this._ul,
                position: "bottomLeft"
            });
        } else {
            // this.element.parentNode.appendChild(this._ul);
            // var left = this.element.offsetLeft,
            // inputHeight = this.element.offsetHeight,
            // top = this.element.offsetTop + inputHeight;
            // this._ul.style.left = left + 'px';
            // this._ul.style.top = top + 'px';
            var bodyWidth = document.body.clientWidth,
                bodyHeight = document.body.clientHeight,
                panelWidth = this._ul.offsetWidth,
                panelHeight = this._ul.offsetHeight;
            this.element.appendChild(this._ul);
            this.element.style.position = 'relative';
            this.left = this._input.offsetLeft;
            var inputHeight = this._input.offsetHeight;
            this.top = this._input.offsetTop + inputHeight;
            if (this.left + panelWidth > bodyWidth) {
                this.left = bodyWidth - panelWidth;
            }

            if (this.top + panelHeight > bodyHeight) {
                this.top = bodyHeight - panelHeight;
            }

            this._ul.style.left = this.left + 'px';
            this._ul.style.top = this.top + 'px';
        }
        this._ul.style.width = width + 'px';
        $(this._ul).addClass('is-animating');
        this._ul.style.zIndex = getZIndex();
        $(this._ul).addClass('is-visible');

        var callback = function (e) {
            if (e === evt || e.target === this._input || self._inputFocus == true) return;
            if (this.mutilSelect && (closest(e.target, 'u-combo-ul') === self._ul || closest(e.target, 'u-combo-name-par') || closest(e.target, 'u-combo-name'))) return;
            off$1(document, 'click', callback);
            // document.removeEventListener('click', callback);
            this.hide();
        }.bind(this);
        this.callback = callback;
        on$1(document, 'click', callback);
        on$1(document.body, 'touchend', callback);
        // document.addEventListener('click', callback);
    },

    hide: function hide() {
        off$1(document, 'click', this.callback);
        removeClass(this._ul, 'is-visible');
        this._ul.style.zIndex = -1;
        var name = this._input.value;
        if (this.mutilSelect) name = this.name;
        this.trigger('select', {
            value: this.value,
            name: name
        });
    },

    /**
     * 设置下拉数据
     * @param datas  数据项
     * @param options  指定name value对应字段 可以为空
     */
    setComboData: function setComboData(datas, options) {
        var i,
            li,
            self = this;

        //统一指定datas格式为[{name:"",value:""}].
        if (!options) this.comboDatas = datas;else {
            this.comboDatas = [];
            for (var i = 0; i < datas.length; i++) {
                this.comboDatas.push({
                    name: datas[i][options.name],
                    value: datas[i][options.value]
                });
            }
        }

        //将初始数据保留一份,以便input输入内容改变时自动提示的数据从全部数据里头筛选.
        if (!(this.initialComboData && this.initialComboData.length)) {
            this.initialComboData = this.comboDatas;
        }
        // isAutoTip 可以输入的情况下不清空内容，后续要清空内容需要重点考虑。
        // this.value = '';
        // this._input.value = '';

        //若没有下拉的ul,新生成一个ul结构.
        if (!this._ul) {
            this._ul = makeDOM('<ul class="u-combo-ul"></ul>');
        }
        this._ul.innerHTML = '';
        //TODO 增加filter
        for (i = 0; i < this.comboDatas.length; i++) {
            li = makeDOM('<li class="u-combo-li">' + this.comboDatas[i].name + '</li>'); //document.createElement('li');
            li._index = i;
            on$1(li, 'click', function () {
                self.selectItem(this._index);
            });
            var rippleContainer = document.createElement('span');
            addClass(rippleContainer, 'u-ripple-container');
            var _rippleElement = document.createElement('span');
            addClass(_rippleElement, 'u-ripple');

            rippleContainer.appendChild(_rippleElement);
            li.appendChild(rippleContainer);
            new URipple(li);
            this._ul.appendChild(li);
        }
    },

    selectItem: function selectItem(index) {
        var self = this;
        self._inputFocus = false;
        if (this.mutilSelect) {
            var val = this.comboDatas[index].value;
            var name = this.comboDatas[index].name;
            var index = (this.value + ',').indexOf(val + ',');
            var l = val.length + 1;
            var flag;
            if (this.fullWidth == 0) {
                this.fullWidth = this._input.offsetWidth;
                if (this.fullWidth < 0 || this.fullWidth == 0) {
                    this.fullWidth = parseInt($(this._input).width()) + parseInt($(this._input).css('border-left-width')) * 2 + parseInt($(this._input).css('padding-left')) * 2 + 'px';
                }
                if (this.fullWidth > 0) {
                    if (this._combo_name_par) {
                        this._combo_name_par.style.maxWidth = this.fullWidth + 'px';
                    }
                }
            }

            if (index != -1) {
                // 已经选中
                this.value = this.value.substring(0, index) + this.value.substring(index + l);
                flag = '-';
            } else {
                this.value = !this.value ? val + ',' : this.value + val + ',';
                flag = '+';
            }

            if (flag == '+') {
                this.name += name + ',';
                var nameDiv = makeDOM('<div class="u-combo-name" key="' + val + '">' + name + /*<a href="javascript:void(0)" class="remove">x</a>*/'</div>');
                var parNameDiv = makeDOM('<div class="u-combo-name-par" style="position:absolute;max-width:' + this.fullWidth + 'px;"></div>');

                /*var _a = nameDiv.querySelector('a');
                on(_a, 'click', function(){
                    var values = self.value.split(',');
                    values.splice(values.indexOf(val),1);
                    self.value = values.join(',');
                    self._combo_name_par.removeChild(nameDiv);
                    self._updateItemSelect();
                    self.trigger('select', {value: self.value, name: name});
                });*/
                if (!this._combo_name_par) {
                    this._input.parentNode.insertBefore(parNameDiv, this._input);
                    this._combo_name_par = parNameDiv;
                    on$1(this._combo_name_par, 'click', function (e) {
                        trigger$1(self._input, 'focus');
                    });
                }
                this._combo_name_par.appendChild(nameDiv);
                this._combo_name_par.title = this.name;
                var nWidth = nameDiv.offsetWidth + 20;
                this.nowWidth += nWidth;
                this.showNowWidth += nWidth;
                if (this.nowWidth > this.fullWidth && this.fullWidth > 0) {
                    addClass(this._combo_name_par, 'u-combo-overwidth');
                }
                if (this.showNowWidth > this.fullWidth && this.fullWidth > 0) {
                    this.showNowWidth -= nWidth;
                    nameDiv.style.display = 'none';
                    this.multiNoneArr.push(nameDiv);
                }
            } else {
                this.name = this.name.replace(name + ',', '');
                if (this._combo_name_par) {
                    var comboDiv = this._combo_name_par.querySelector('[key="' + val + '"]');
                    if (comboDiv) {
                        var fflag = true;
                        if (comboDiv.style.display == 'none') {
                            fflag = false;
                            comboDiv.style.display = '';
                        }
                        var nWidth = comboDiv.offsetWidth + 20;
                        this._combo_name_par.removeChild(comboDiv);
                        this.nowWidth -= nWidth;
                        if (fflag) {
                            this.showNowWidth -= nWidth;
                        } else {
                            // 从数组中删除
                            for (var k = 0; k < this.multiNoneArr.length; k++) {
                                if (this.multiNoneArr[k] == comboDiv) {
                                    this.multiNoneArr.splice(k, 1);
                                    break;
                                }
                            }
                        }
                        if (!(this.nowWidth > this.fullWidth && this.fullWidth > 0)) {
                            removeClass(this._combo_name_par, 'u-combo-overwidth');
                        }
                        if (this.showNowWidth < this.fullWidth && this.fullWidth > 0) {
                            var nowShowNowWidth = this.showNowWidth;
                            var j = -1;
                            for (var i = 0; i < this.multiNoneArr.length; i++) {
                                var nowDiv = this.multiNoneArr[i];
                                nowDiv.style.display = '';
                                var nowForWidth = nowDiv.offsetWidth + 20;
                                nowShowNowWidth += nowForWidth;
                                if (nowShowNowWidth > this.fullWidth) {
                                    nowDiv.style.display = 'none';
                                    break;
                                } else {
                                    j++;
                                    this.showNowWidth += nowForWidth;
                                }
                            }

                            this.multiNoneArr.splice(0, j + 1);
                        }
                    }
                }
            }

            this._updateItemSelect();
        } else {
            this.value = this.comboDatas[index].value;
            this._input.value = this.comboDatas[index].name;
            this._updateItemSelect();
        }
    },

    _updateItemSelect: function _updateItemSelect() {
        var lis = this._ul.querySelectorAll('.u-combo-li'),
            val = this.value;
        if (this.mutilSelect) {
            var values = this.value.split(',');
            for (var i = 0; i < lis.length; i++) {
                if (values.indexOf(this.comboDatas[i].value) > -1) {
                    addClass(lis[i], 'is-selected');
                } else {
                    removeClass(lis[i], 'is-selected');
                }
            }
            /*根据多选区域div的高度调整input的高度*/
            /*实际上input的高度并不需要调整*/
            /*var h = this._combo_name_par.offsetHeight;
            if(h < 25){
                h = 25;
                this._input.style.height = h + 'px';
            }*/
        } else {
            for (var i = 0; i < lis.length; i++) {
                if (val != '' && val != null && typeof val != 'undefined' && val == this.comboDatas[i].value) {
                    addClass(lis[i], 'is-selected');
                } else {
                    removeClass(lis[i], 'is-selected');
                }
            }
        }
    },

    /**
     *设置值
     * @param value
     */
    setValue: function setValue(value) {
        var self = this;
        this.name = '';
        value = value + '';
        value = value || '';

        var values = value.split(',');
        if (this.mutilSelect === true) {
            if (self._combo_name_par) {
                self._combo_name_par.innerHTML = '';
                $(self._combo_name_par).removeClass('u-combo-overwidth');
            }
            this.value = '';
        }
        if (!value) {
            this._input.value = '';
            this.value = '';
            this._updateItemSelect();
        }
        var matched = false;
        this.nowWidth = 0;
        this.showNowWidth = 0;
        this.multiNoneArr = [];
        this.comboDatas.forEach(function (item, index) {
            if (this.mutilSelect === true) {
                if (values.indexOf(item.value) != -1) {
                    this.selectItem(index);
                }
            } else {
                if (item.value + '' === value) {
                    this.selectItem(index);
                    matched = true;
                    return;
                }
            }
        }.bind(this));
        if (!this.onlySelect && !matched) {
            this.value = value;
            this._input.value = value;
            var name = this._input.value;
            if (this.mutilSelect) name = this.name;
            this.trigger('select', {
                value: this.value,
                name: name
            });
        }
    },

    emptyValue: function emptyValue() {
        this.value = '';
        this._input.value = '';
    },
    /**
     * 设置显示名
     * @param name
     */
    setName: function setName(name) {
        this.comboDatas.forEach(function (item, index) {
            if (item.name === name) {
                this.selectItem(index);
                return;
            }
        }.bind(this));
    }
});

if (u.compMgr) u.compMgr.regComp({
    comp: Combo,
    compAsString: 'u.Combo',
    css: 'u-combo'
});

/**
 * Module : neoui-collapse
 * Author :  yaoxinc(yaoxinc@yonyou.com)
 * Date   : 2016/11/30
 *
 */

/* COLLAPSIBLE PLUGIN DEFINITION
 *
 */

function Collapse(element, options) {

    this.$element = $(element); //数值是下面的class等，且只执行一次
    this.options = $.extend({}, {
        toggle: true
    }, options); //数值是Oject{toggle:collapse}
    this.options.toggle && this.toggle(); //undefined
}

Collapse.prototype = {
    constructor: Collapse,
    dimension: function dimension() {
        /*  console.log(this.$element)*/
        var hasWidth = this.$element.hasClass('width'); //false
        return hasWidth ? 'width' : 'height'; //返回height
    },
    show: function show() {
        var dimension = this.dimension(),
            //数值是height
        scroll = $.camelCase(['scroll', dimension].join('-')),
            //数值scrollHeight
        actives = this.$parent && this.$parent.find('.in'),
            //数值undefined
        hasData;

        if (actives && actives.length) {
            hasData = actives.data('collapse');
            actives.collapse('hide');
            hasData || actives.data('collapse', null);
        }
        this.$element[dimension](0); //数值是下面的class等
        this.transition('addClass', 'show', 'shown');
        this.$element[dimension](this.$element[0][scroll]);
    },
    transition: function transition(method, startEvent, completeEvent) {
        //'addClass', 'show', 'shown'
        var that = this,
            complete = function complete() {
            if (startEvent == 'show') that.reset();
            that.$element.trigger(completeEvent);
        };
        this.$element.trigger(startEvent)[method]('in');

        $.support.transition && this.$element.hasClass('collapse') ? this.$element.one($.support.transition.end, complete) : complete();
    },
    reset: function reset(size) {
        var dimension = this.dimension(); //数值一直是height
        this.$element.removeClass('collapse')[dimension](size || 'auto')[0].offsetWidth; //1200
        this.$element.addClass('collapse');
    },
    hide: function hide() {
        var dimension = this.dimension();
        this.reset(this.$element[dimension]());
        this.transition('removeClass', 'hide', 'hidden');
        this.$element[dimension](0);
    },

    toggle: function toggle() {
        this[this.$element.hasClass('in') ? 'hide' : 'show']();
    }

};

var showCollapse = u.BaseComponent.extend({

    /* COLLAPSIBLE DATA-API
     * ==================== */
    init: function init() {
        off$1(this.element, 'click');
        on$1(this.element, 'click', function (e) {
            var $this = $(this);

            var href;
            var target = (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') || $this.attr('u-data-toggle') || e.preventDefault(); //strip for ie7

            var option = $(target).data('collapse') ? 'toggle' : $this.data();
            var $this_down = $(target);

            var data = $this_down.data('collapse'),
                options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

            if (!data) {
                $this_down.data('collapse', data = new Collapse(target, options));
            }
            if (typeof option == 'string') {
                data[option]();
            }
        });
    }

});

if (u.compMgr) u.compMgr.regComp({
    comp: showCollapse,
    compAsString: 'u.collapse.updown',
    css: 'u-collapse-updown'
});

/**
 * Module : neoui-combobox
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-02 18:42:07
 */

var Combobox = u.BaseComponent.extend({
    DEFAULTS: {
        dataSource: {},
        mutil: false,
        enable: true,
        single: true,
        onSelect: function onSelect() {}
    },
    init: function init() {
        var self = this;
        var element = this.element;
        this.options = extend({}, this.DEFAULTS, this.options);
        this.items = [];
        //this.oLis = [];
        this.mutilPks = [];
        this.oDiv = null;
        Object.defineProperty(element, 'value', {
            get: function get() {

                return this.trueValue;
            },
            set: function set(pk) {

                var items = self.items;
                //var oLis = self.oLis;
                var oLis = self.oDiv.childNodes;

                if (self.options.single == "true" || self.options.single == true) {

                    for (var i = 0, length = items.length; i < length; i++) {

                        var ipk = items[i].pk;
                        if (ipk == pk) {
                            this.innerHTML = items[i].name;
                            this.trueValue = pk;
                            break;
                        } else {

                            this.trueValue = '';
                            this.innerHTML = '';
                        }
                    }
                } else if (self.options.mutil == "true" || self.options.mutil == true) {

                    if (!env$1.isArray(pk)) {
                        if (typeof pk == "string" && pk !== "") {
                            pk = pk.split(',');
                            self.mutilPks = pk;
                        } else {
                            return;
                        }
                    }

                    if (self.mutilPks.length == 0) {
                        self.mutilPks = pk;
                    }

                    this.innerHTML = '';
                    var valueArr = [];

                    for (var j = 0; j < pk.length; j++) {

                        for (var i = 0, length = oLis.length; i < length; i++) {
                            var ipk = oLis[i].item.pk;
                            if (pk[j] == ipk) {

                                valueArr.push(pk[j]);

                                oLis[i].style.display = 'none';
                                var activeSelect = document.createElement("Div");
                                activeSelect.className = "mutil-select-div";
                                var selectName = "<i class='itemName'>" + items[i].name + "</i>";
                                var imageFont = "<i class='uf uf-removesymbol'></i>";
                                activeSelect.insertAdjacentHTML("beforeEnd", imageFont + selectName);
                                this.appendChild(activeSelect);

                                //activeSelect.append(imageFont);
                                //	activeSelect.append(selectName);

                                on$1(activeSelect.querySelector(".uf-removesymbol"), 'mousedown', function () {

                                    //var $this = $(this);
                                    //var lis = self.oLis;
                                    //var lis = $(self.oDiv).find('li');
                                    var lis = self.oDiv.childNodes;
                                    for (var j = 0, len = lis.length; j < len; j++) {
                                        if (lis[j].item.name == this.nextSibling.innerHTML) {
                                            lis[j].style.display = 'block';

                                            for (var h = 0; h < self.mutilPks.length; h++) {
                                                if (self.mutilPks[h] == lis[j].item.pk) {
                                                    self.mutilPks.splice(h, 1);
                                                    h--;
                                                }
                                            }

                                            for (var b = 0; b < valueArr.length; b++) {
                                                if (valueArr[b] == lis[j].item.pk) {
                                                    valueArr.splice(b, 1);
                                                    b--;
                                                }
                                            }
                                        }
                                    }

                                    activeSelect.removeChild(this.parentNode);
                                    element.trueValue = '';
                                    element.trueValue = valueArr.toString();
                                    trigger$1(element, 'mutilSelect', valueArr.toString());
                                });

                                //	var selectName = $("<i class='itemName'>" + items[i].name + "</i>");

                                //	var activeSelect = $("<div class='mutil-select-div'></div>")

                            }
                        }
                    }

                    this.trueValue = valueArr.toString();
                }
            }
        });
        //禁用下拉框
        if (this.options.readonly === "readonly") return;

        if (this.options.single == "true" || this.options.single == true) {
            this.singleSelect();
        }

        if (this.options.mutil == "true" || this.options.mutil == true) {
            this.mutilSelect();
        }

        this.clickEvent();

        this.blurEvent();

        this.comboFilter();

        this.comboFilterClean();
    }
});

Combobox.fn = Combobox.prototype;

Combobox.fn.createDom = function () {

    var data = this.options.dataSource;
    if (env$1.isEmptyObject(data)) {
        throw new Error("dataSource为空！");
    }

    var oDiv = document.createElement("div");
    oDiv.className = 'select-list-div';
    //this.oDiv
    this.oDiv = oDiv;
    //新增搜索框

    var searchDiv = document.createElement("div");
    searchDiv.className = 'select-search';
    var searchInput = document.createElement("input");
    searchDiv.appendChild(searchInput);
    oDiv.appendChild(searchDiv);
    //禁用搜索框
    if (this.options.readchange) {
        searchDiv.style.display = "none";
    }
    var oUl = document.createElement("ul");

    oUl.className = 'select-list-ul';

    for (var i = 0; i < data.length; i++) {
        var item = {
            pk: data[i].pk,
            name: data[i].name
        };
        this.items.push(item);
        var oLi = document.createElement("li");

        oLi.item = item;
        oLi.innerHTML = data[i]['name'];

        //this.oLis.push(oLi);

        oUl.appendChild(oLi);
    }

    oDiv.appendChild(oUl);
    oDiv.style.display = 'none';
    document.body.appendChild(oDiv);
};

Combobox.fn.focusEvent = function () {
    var self = this;
    on$1(this.element, 'click', function (e) {
        if (self.options.readchange == true) return;
        var returnValue = self.show();

        if (returnValue === 1) return;
        // self.show();

        self.floatLayer();

        self.floatLayerEvent();

        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    });
};

//下拉图标的点击事件
Combobox.fn.clickEvent = function () {
    var self = this;
    //var caret = this.$element.next('.input-group-addon')[0] || this.$element.next(':button')[0];
    var caret = this.element.nextSibling;
    on$1(caret, 'click', function (e) {
        self.show();
        self.floatLayer();
        self.floatLayerEvent();
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    });
};

//tab键切换 下拉隐藏
Combobox.fn.blurEvent = function () {
    var self = this;

    on$1(this.element, 'keyup', function (e) {
        var key = e.which || e.keyCode;
        if (key == 9) self.show();
    });
    on$1(this.element, 'keydown', function (e) {
        var key = e.which || e.keyCode;
        if (key == 9) self.hide();
    });
};

Combobox.fn.floatLayer = function () {

    if (!document.querySelector(".select-floatDiv")) {

        var oDivTwo = document.createElement("div");
        oDivTwo.className = 'select-floatDiv';
        document.body.appendChild(oDivTwo);
    }
};

Combobox.fn.floatLayerEvent = function () {
    var self = this;
    on$1(document.querySelector(".select-floatDiv"), "click", function (e) {

        self.hide();
        this.parentNode.removeChild(this);

        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    });
};

Combobox.fn.show = function () {

    //var oLis = this.oLis;
    var oLis = this.oDiv.querySelector("ul").childNodes;
    var vote = 0;
    for (var i = 0, length = oLis.length; i < length; i++) {

        if (oLis[i].style.display == 'none') {
            vote++;
        }
    }

    if (vote === length) return 1;

    var left = this.element.offsetLeft;
    var top = this.element.offsetTop;

    var selectHeight = this.options.dataSource.length * 30 + 10 + 10;

    var differ = top + getStyle(this.element, "height") + selectHeight - (window.outerHeight + window.scrollY);
    var oDiv = this.oDiv;

    if (differ > 0) {

        oDiv.style.left = left + 'px';
        oDiv.style.top = top - selectHeight + 'px';
    } else {

        oDiv.style.left = left + 'px';
        oDiv.style.top = top + getStyle(this.element, "height") + 'px';
    }

    oDiv.style.display = 'block';
};

Combobox.fn.hide = function () {
    this.oDiv.style.display = 'none';
};

Combobox.fn.singleDivValue = function () {
    var self = this;
    //var oLis = this.oLis;
    var oLis = this.oDiv.querySelector("ul").childNodes;
    for (var i = 0; i < oLis.length; i++) {

        on$1(oLis[i], "click", function () {

            var item = this.item;
            self.element.value = item.pk;

            self.oDiv.style.display = 'none';

            self.options.onSelect(item);

            trigger$1(self.element, 'change');
        });
    }
};

Combobox.fn.mutilDivValue = function () {
    var self = this;
    //var oLis = this.oLis;
    var oLis = this.oDiv.querySelector("ul").childNodes;
    for (var i = 0; i < oLis.length; i++) {
        on$1(oLis[i], "click", function () {

            var pk = this.item.pk;
            var mutilpks = self.mutilPks;
            var mutilLenth = mutilpks.length;

            if (mutilLenth > 0) {

                for (var k = 0; k < mutilLenth; k++) {

                    if (pk == mutilpks[k]) {

                        mutilpks.splice(k, 1);
                        k--;
                    }
                }
            }

            mutilpks.push(pk);

            self.element.value = mutilpks;
            trigger$1(self.element, 'mutilSelect', mutilpks.toString());
            // element.trigger('mutilSelect',mutilpks.toString())

            self.oDiv.style.display = 'none';
            this.style.display = 'none';
            trigger$1(self.element, 'change');
        });
    }
};

Combobox.fn.singleSelect = function () {

    this.createDom();
    this.focusEvent();
    this.singleDivValue();
};

Combobox.fn.mutilSelect = function () {

    this.createDom();
    this.mutilDivValue();
    this.focusEvent();
};
//过滤下拉选项
Combobox.fn.comboFilter = function () {
    var self = this;
    on$1(this.oDiv, "keyup", function () {

        var content = this.querySelector('.select-search input').value;

        var oLis = this.oDiv.querySelector("ul").childNodes;
        for (var i = 0; i < oLis.length; i++) {
            if (oLis[i].item.name.indexOf(content) != -1) {
                oLis[i].style.display = 'block';
            } else {
                oLis[i].style.display = 'none';
            }
        }
    });
};

//过滤的后续处理
Combobox.fn.comboFilterClean = function () {
    var self = this;
    on$1(self.element, "click", function () {
        // $(this.$element).on('click',function(){
        // $(self.oDiv).find('.select-search input').val('')
        self.oDiv.querySelector('.select-search input').value = "";
        var oLis = this.oDiv.querySelector("ul").childNodes;
        if (self.options.single == "true" || self.options.single == true) {
            for (var i = 0; i < oLis.length; i++) {
                oLis[i].style.display = 'block';
            }
        } else if (self.options.mutil == "true" || self.options.mutil == true) {
            var selectLisIndex = [];
            var selectLisSpan = this.querySelector('.mutil-select-div .itemName');

            for (var i = 0; i < selectLisSpan.length; i++) {
                for (var k = 0; k < oLis.length; k++) {
                    if (selectLisSpan[i].innerHTML == oLis[k].item.name) {
                        //oLis[k].style.display = 'none';
                        selectLisIndex.push(k);
                    }
                }
            }

            for (var l = 0; l < oLis.length; l++) {
                oLis[l].style.display = 'block';
                for (var j = 0; j < selectLisIndex.length; j++) {
                    if (l == selectLisIndex[j]) oLis[l].style.display = 'none';
                }
            }
        }
    });
};
// var Plugin = function(option) {

// var $this = $(this);
// var data = $this.data('s.select');
// var options = typeof option == 'object' && option

// if (!data) $this.data('s.select', (new Combobox(this, options)))

// }

//动态设置li值
// $.fn.setComboData = function(dataSourse) {
// var $this = $(this).data('s.select');
// if(!$this)return;
// var data = dataSourse;
// if (!$.isArray(data) || data.length == 0) return;

// $this.items.length = 0;

// var Olis = $($this.oDiv).find('li');


// if(data.length < Olis.length){

// for(var k=data.length;k<Olis.length;k++){
// $(Olis[k]).remove();
// }

// }else if(data.length > Olis.length){
// var liTemplate = Olis[0]
// var oUl = $($this.oDiv).find('ul')
// for(var j=0;j<(data.length-Olis.length);j++){
// $(liTemplate).clone(true).appendTo(oUl)
// }
// }

// Olis = $($this.oDiv).find('li');

// for (var i = 0; i < data.length; i++) {
// var item = {
// pk: data[i].pk,
// name: data[i].name
// }
// $this.items.push(item)
// Olis[i].item = item;
// Olis[i].innerHTML = data[i]['name']
// }

// }

// $.fn.Combobox = Plugin;
if (u.compMgr) u.compMgr.regComp({
    comp: Combobox,
    compAsString: 'u.Combobox',
    css: 'u-combobox'
});

/**
 * Module : neoui-datatable
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-02 15:23:19
 */

var Table = u.BaseComponent.extend({
    _CssClasses: {

        SELECTABLE: 'selectable',
        SELECT_ELEMENT: 'u-table-select',
        IS_SELECTED: 'is-selected',
        IS_UPGRADED: 'is-upgraded'
    },

    init: function init() {
        var self = this;
        this.element_ = this.element;
        if (this.element_) {
            var firstHeader = this.element_.querySelector('th');
            var bodyRows = Array.prototype.slice.call(this.element_.querySelectorAll('tbody tr'));
            var footRows = Array.prototype.slice.call(this.element_.querySelectorAll('tfoot tr'));
            var rows = bodyRows.concat(footRows);
        }
    },
    _selectRow: function _selectRow(checkbox, row, opt_rows) {
        if (row) {
            return function () {
                if (checkbox.checked) {
                    row.classList.add(this._CssClasses.IS_SELECTED);
                } else {
                    row.classList.remove(this._CssClasses.IS_SELECTED);
                }
            }.bind(this);
        }

        if (opt_rows) {
            return function () {
                var i;
                var el;
                if (checkbox.checked) {
                    for (i = 0; i < opt_rows.length; i++) {
                        el = opt_rows[i].querySelector('td').querySelector('.u-checkbox');
                        // el['MaterialCheckbox'].check();
                        opt_rows[i].classList.add(this._CssClasses.IS_SELECTED);
                    }
                } else {
                    for (i = 0; i < opt_rows.length; i++) {
                        el = opt_rows[i].querySelector('td').querySelector('.u-checkbox');
                        //el['MaterialCheckbox'].uncheck();
                        opt_rows[i].classList.remove(this._CssClasses.IS_SELECTED);
                    }
                }
            }.bind(this);
        }
    },
    _createCheckbox: function _createCheckbox(row, opt_rows) {
        var label = document.createElement('label');
        var labelClasses = ['u-checkbox', this._CssClasses.SELECT_ELEMENT];
        label.className = labelClasses.join(' ');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('u-checkbox-input');

        if (row) {
            checkbox.checked = row.classList.contains(this._CssClasses.IS_SELECTED);
            checkbox.addEventListener('change', this._selectRow(checkbox, row));
        } else if (opt_rows) {
            checkbox.addEventListener('change', this._selectRow(checkbox, null, opt_rows));
        }

        label.appendChild(checkbox);
        new Checkbox(label);
        return label;
    }

});

if (u.compMgr) u.compMgr.regComp({
    comp: Table,
    compAsString: 'u.Table',
    css: 'u-table'
});

/**
 * Module : neoui-dialog
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-02 15:29:55
 */

/**
 * 消息提示框
 * @param options
 */

var messageDialogTemplate = '<div class="u-msg-dialog-top" id="{id}_top">' + '<div class="u-msg-dialog" style="{width}{height}{top}">' + '<div class="u-msg-dialog-content">' + '<div class="u-msg-title">' + '<h4>{title}</h4>' + '</div>' + '<div class="u-msg-content"></div>' + '{footer}' + '</div></div>';

var messageDialogF = function messageDialogF(options) {

    if (typeof options === 'string') {
        options = {
            content: options
        };
    }
    var defaultOptions = {
        id: '',
        msg: '',
        template: messageDialogTemplate,
        width: '',
        height: '',
        top: '',
        hasFooter: true,
        // title: '提示',
        // btnText: '确定',
        title: trans('dialog.title', '提示'),
        btnText: trans('dialog.okText', '确定'),
        closeFun: function closeFun() {}

    };
    options = extend(defaultOptions, options);
    this.id = options['id'];
    this.hasFooter = options['hasFooter'];
    this.content = options['msg'];
    this.title = options['title'];
    this.template = options['template'];
    this.width = options['width'];
    this.height = options['height'];
    this.top = options['top'];
    this.bthText = options['btnText'];
    this.lazyShow = options['lazyShow'];
    this.closeFun = options['closeFun'];
    this.create();

    var msgDom = this.templateDom.querySelector('.u-msg-dialog');
    if (this.height) {
        this.resizeFun = function () {
            var cDom = msgDom.querySelector('.u-msg-content');
            if (!cDom) return;
            cDom.style.height = '';
            var wholeHeight = msgDom.offsetHeight;
            var contentHeight = msgDom.scrollHeight;
            // if(contentHeight > wholeHeight && cDom)
            cDom.style.height = wholeHeight - (56 + 46) + 'px';
        }.bind(this);

        this.resizeFun();
        on$1(window, 'resize', this.resizeFun);
    }
};

messageDialogF.prototype.create = function () {
    var self = this,
        closeStr = '';
    if (this.hasFooter) {
        var footerStr = '<div class="u-msg-footer only-one-btn"><button class="u-msg-ok u-button u-button-primary raised">' + this.bthText + '</button></div>' + '</div>';
    }
    var templateStr = this.template.replace('{id}', this.id).replace('{id}', this.id);
    templateStr = templateStr.replace('{width}', this.width ? 'width:' + this.width + ';' : '');
    templateStr = templateStr.replace('{height}', this.height ? 'height:' + this.height + ';' : '');
    templateStr = templateStr.replace('{top}', this.top ? 'top:' + this.top + ';' : '');
    templateStr = templateStr.replace('{title}', this.title);
    templateStr = templateStr.replace('{footer}', footerStr);
    var htmlReg = /^(\s*)?<[a-zA-Z]+/ig;
    var selectReg = /^(\.|#)/;
    if (htmlReg.test(this.content)) {
        this.contentDom = makeDOM(this.content);
        this.contentDomParent = this.contentDom.parentNode;
        this.contentDom.style.display = 'block';
    } else if (selectReg.test(this.content)) {
        this.contentDom = document.querySelector(this.content);
        this.contentDomParent = this.contentDom.parentNode;
        this.contentDom.style.display = 'block';
    } else {
        this.contentDom = makeDOM('<p>' + this.content + '</p>');
    }
    this.templateDom = makeDOM(templateStr);

    this.templateDom.querySelector('.u-msg-content').appendChild(this.contentDom);
    this.overlayDiv = makeModal$1(this.templateDom);

    this.okDiv = this.templateDom.querySelector('.u-msg-ok');
    on$1(this.okDiv, 'click', function () {
        self.close();
    });

    if (this.lazyShow) {
        this.templateDom.style.display = 'none';
        this.overlayDiv.style.display = 'none';
    }
    document.body.appendChild(this.templateDom);
    disable_mouseWheel();
    this.isClosed = false;
};

messageDialogF.prototype.close = function () {
    this.closeFun && this.closeFun.call(this);
    if (this.contentDom) {
        this.contentDom.style.display = 'none';
        this.contentDomParent && this.contentDomParent.appendChild(this.contentDom);
    }
    document.body.removeChild(this.templateDom);
    document.body.removeChild(this.overlayDiv);
    this.isClosed = true;
    enable_mouseWheel();
};

var messageDialog = function messageDialog(options) {
    return new messageDialogF(options);
};

/**
 * Module : confirmDialog
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-29 10:21:33
 */
var confirmDialogTemplate = '<div class="u-msg-dialog-top" id="{id}_top">' + '<div class="u-msg-dialog" style="{width}{height}{top}">' + '<div class="u-msg-dialog-content">' + '<div class="u-msg-title">' + '<h4>{title}</h4>' + '</div>' + '<div class="u-msg-content">' + '</div>' + '{footer}' + '</div></div>';

var confirmDialogF = function confirmDialogF(options) {
    if (typeof options === 'string') {
        options = {
            content: options
        };
    }
    var defaultOptions = {
        id: '',
        msg: '',
        template: confirmDialogTemplate,
        width: '',
        height: '',
        top: '',
        hasFooter: true,
        onOk: function onOk() {},
        onCancel: function onCancel() {},
        okText: trans('dialog.okText', '确定'),
        cancelText: trans('dialog.cancelText', '取消')
    };

    options = extend(defaultOptions, options);
    this.id = options['id'];
    this.hasFooter = options['hasFooter'];
    this.content = options['msg'];
    this.template = options['template'];
    this.width = options['width'];
    this.height = options['height'];
    this.height = options['top'];
    this.title = options['title'];
    this.titleIcon = options['titleIcon'];
    this.lazyShow = options['lazyShow'];
    this.onOk = options['onOk'];
    this.onCancel = options['onCancel'];
    this.okText = options['okText'];
    this.cancelText = options['cancelText'];
    this.create();

    var msgDom = this.templateDom.querySelector('.u-msg-dialog');

    if (this.height) {
        this.resizeFun = function () {
            var cDom = msgDom.querySelector('.u-msg-content');
            if (!cDom) return;
            cDom.style.height = '';
            var wholeHeight = msgDom.offsetHeight;
            var contentHeight = msgDom.scrollHeight;
            // if(contentHeight > wholeHeight && cDom)
            cDom.style.height = wholeHeight - (56 + 46) + 'px';
        }.bind(this);

        this.resizeFun();
        on$1(window, 'resize', this.resizeFun);
    }
};

confirmDialogF.prototype.create = function () {
    var footerStr = '',
        oThis = this;
    if (this.hasFooter) {
        var footerStr = '<div class="u-msg-footer"><button class="u-msg-ok u-button u-button-primary raised">{okText}</button><button class="u-msg-cancel u-button u-grey">{cancelText}</button></div>' + '</div>';
    }
    var templateStr = this.template.replace('{id}', this.id).replace('{id}', this.id);
    templateStr = templateStr.replace('{title}', this.title);
    templateStr = templateStr.replace('{width}', this.width ? 'width:' + this.width + ';' : '');
    templateStr = templateStr.replace('{height}', this.height ? 'height:' + this.height + ';' : '');
    templateStr = templateStr.replace('{top}', this.top ? 'top:' + this.top + ';' : '');
    templateStr = templateStr.replace('{footer}', footerStr);
    templateStr = templateStr.replace('{okText}', this.okText);
    templateStr = templateStr.replace('{cancelText}', this.cancelText);
    var htmlReg = /^(\s*)?<[a-zA-Z]+/ig;
    var selectReg = /^(\.|#)/;
    if (htmlReg.test(this.content)) {
        this.contentDom = makeDOM(this.content);
        this.contentDomParent = this.contentDom.parentNode;
        this.contentDom.style.display = 'block';
    } else if (selectReg.test(this.content)) {
        this.contentDom = document.querySelector(this.content);
        this.contentDomParent = this.contentDom.parentNode;
        this.contentDom.style.display = 'block';
    } else {
        this.contentDom = makeDOM('<p>' + this.content + '</p>');
    }
    /*头部只用图标 <a><i class="uf uf-"></i></a>*/
    // this.titleIconDom = makeDOM('<a><i class="' + this.titleIcon + '"></i></a>');
    this.templateDom = makeDOM(templateStr);

    // this.templateDom.querySelector('.u-msg-title').appendChild(this.titleIconDom);
    this.templateDom.querySelector('.u-msg-content').appendChild(this.contentDom);
    this.overlayDiv = makeModal$1(this.templateDom);

    if (this.lazyShow) {
        this.templateDom.style.display = 'none';
        this.overlayDiv.style.display = 'none';
    }

    if (this.hasFooter) {
        var okBtn = this.templateDom.querySelector('.u-msg-ok');
        var cancelBtn = this.templateDom.querySelector('.u-msg-cancel');
        var closeBtn = new Button({
            el: okBtn
        });
        new Button({
            el: cancelBtn
        });
        on$1(okBtn, 'click', function () {
            if (oThis.onOk() !== false) {
                oThis.close();
            }
        });
        on$1(cancelBtn, 'click', function () {
            if (oThis.onCancel() !== false) {
                oThis.close();
            }
        });
    }

    document.body.appendChild(this.templateDom);
    disable_mouseWheel();
    this.isClosed = false;
};

confirmDialogF.prototype.close = function () {
    document.body.removeChild(this.templateDom);
    document.body.removeChild(this.overlayDiv);
    this.isClosed = true;
    enable_mouseWheel();
};

var confirmDialog = function confirmDialog(options) {
    return new confirmDialogF(options);
};
/**
 * 禁用鼠标滚轮事件
 * @return {[type]} [description]
 */
var disable_mouseWheel = function disable_mouseWheel() {
    document.body.style.paddingRight = '17px';
    document.body.style.overflow = 'hidden';
};
/**
 * 开启鼠标滚轮事件
 * @return {[type]} [description]
 */
var enable_mouseWheel = function enable_mouseWheel() {
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
};

/**
 * dialog.js
 */

var dialogTemplate = '<div class="u-msg-dialog-top" id="{id}_top">' + '<div class="u-msg-dialog" id="{id}" style="{width}{height}">' + '{close}' + '<div class="u-msg-dialog-content"></div>' + '</div></div>';

var dialogMode = function dialogMode(options) {
    // 传入字符串的情况直接将字符串作为内容显示
    if (typeof options === 'string') {
        options = {
            content: options
        };
    }
    var defaultOptions = {
        id: '',
        content: '',
        hasCloseMenu: true,
        template: dialogTemplate,
        width: '',
        height: '',
        is_drag: false
    };

    options = extend(defaultOptions, options);
    this.id = options['id'];
    this.hasCloseMenu = options['hasCloseMenu'];
    this.content = options['content'];
    this.template = options['template'];
    this.width = options['width'];
    this.height = options['height'];
    this.lazyShow = options['lazyShow'];
    this.closeFun = options['closeFun'];
    this.is_drag = options['is_drag'];
    this.create();
    if (this.is_drag) {
        this.drag();
    }

    var msgDom = this.templateDom.querySelector('.u-msg-dialog');

    if (this.height) {
        this.resizeFun = function () {
            var cDom = msgDom.querySelector('.u-msg-content');
            if (!cDom) return;
            cDom.style.height = '';
            var wholeHeight = msgDom.offsetHeight;
            var contentHeight = msgDom.scrollHeight;
            // if(contentHeight > wholeHeight && cDom)
            cDom.style.height = wholeHeight - (56 + 46) + 'px';
        }.bind(this);

        this.resizeFun();
        on$1(window, 'resize', this.resizeFun);
    }
};

dialogMode.prototype.create = function () {
    var closeStr = '',
        oThis = this;
    if (this.hasCloseMenu) {
        var closeStr = '<div class="u-msg-close"> <span aria-hidden="true">&times;</span></div>';
    }
    var templateStr = this.template.replace('{id}', this.id).replace('{id}', this.id);
    templateStr = templateStr.replace('{close}', closeStr);
    templateStr = templateStr.replace('{width}', this.width ? 'width:' + this.width + ';' : '');
    templateStr = templateStr.replace('{height}', this.height ? 'height:' + this.height + ';' : '');

    var htmlReg = /^(\s*)?<[a-zA-Z]+/ig;
    var selectReg = /^(\.|#)/;
    if (htmlReg.test(this.content)) {
        this.contentDom = makeDOM(this.content);
        this.contentDomParent = this.contentDom.parentNode;
        this.contentDom.style.display = 'block';
    } else if (selectReg.test(this.content)) {
        this.contentDom = document.querySelector(this.content);
        this.contentDomParent = this.contentDom.parentNode;
        this.contentDom.style.display = 'block';
    } else {
        this.contentDom = makeDOM('<div><div class="u-msg-content"><p>' + this.content + '</p></div></div>');
    }
    this.templateDom = makeDOM(templateStr);

    this.templateDom.querySelector('.u-msg-dialog-content').appendChild(this.contentDom);
    this.overlayDiv = makeModal$1(this.templateDom);
    if (this.hasCloseMenu) {
        this.closeDiv = this.templateDom.querySelector('.u-msg-close');
        on$1(this.closeDiv, 'click', function () {
            oThis.close();
        });
    }
    if (this.lazyShow) {
        this.templateDom.style.display = 'none';
        this.overlayDiv.style.display = 'none';
    }
    document.body.appendChild(this.templateDom);
    disable_mouseWheel();
    this.isClosed = false;
};
dialogMode.prototype.drag = function () {
    var oThis = this,
        $this = $(oThis.content).closest('.u-msg-dialog'),
        _move = false,
        //移动标记
    _x,
        _y; //鼠标离控件左上角的相对位置
    $this.mousedown(function (e) {
        var offset = $this.offset(),
            m_left = e.pageX,
            m_top = e.pageY,
            d_left = offset.left,
            d_top = offset.top;
        _move = true;
        _x = e.pageX - parseInt($this.css("left"));
        _y = e.pageY - parseInt($this.css("top"));
    });
    $this.mousemove(function (e) {
        if (_move) {
            var x = e.pageX - _x; //移动时根据鼠标位置计算控件左上角的绝对位置
            var y = e.pageY - _y;
            $this.css({
                top: y,
                left: x
            }); //控件新位置
        }
    }).mouseup(function () {
        _move = false;
    });
};

dialogMode.prototype.show = function () {
    if (this.isClosed) {
        this.create();
    }
    this.templateDom.style.display = 'block';
    this.overlayDiv.style.display = 'block';
    disable_mouseWheel();
};

dialogMode.prototype.hide = function () {
    this.templateDom.style.display = 'none';
    this.overlayDiv.style.display = 'none';
    enable_mouseWheel();
};

dialogMode.prototype.close = function () {
    this.closeFun && this.closeFun.call(this);
    if (this.contentDom) {
        this.contentDom.style.display = 'none';
        this.contentDomParent && this.contentDomParent.appendChild(this.contentDom);
    }
    document.body.removeChild(this.templateDom);
    try {
        document.body.removeChild(this.overlayDiv);
    } catch (e) {}

    this.isClosed = true;
    enable_mouseWheel();
};

var dialog = function dialog(options) {
    return new dialogMode(options);
};

/**
 * 对话框向导
 * @param options:  {dialogs: [{content:".J-goods-pro-add-1-dialog",hasCloseMenu:false},
                               {content:".J-goods-pro-add-2-dialog",hasCloseMenu:false},
                            ]
                    }
 */
var dialogWizard = function dialogWizard(options) {
    var dialogs = [],
        curIndex = 0;
    options.dialogs = options.dialogs || [], len = options.dialogs.length;
    if (len == 0) {
        throw new Error('未加入对话框');
    }
    for (var i = 0; i < len; i++) {
        dialogs.push(dialog(extend(options.dialogs[i], {
            lazyShow: true
        })));
    }
    var wizard = function wizard() {};
    wizard.prototype.show = function () {
        dialogs[curIndex].show();
        disable_mouseWheel();
    };
    wizard.prototype.next = function () {
        dialogs[curIndex].hide();
        dialogs[++curIndex].show();
    };
    wizard.prototype.prev = function () {
        dialogs[curIndex].hide();
        dialogs[--curIndex].show();
    };
    wizard.prototype.close = function () {
        for (var i = 0; i < len; i++) {
            dialogs[i].close();
        }
        enable_mouseWheel();
    };
    return new wizard();
};

/**
 * Module : iframeDialog
 * Author : wh(wanghaoo@yonyou.com)
 * Date	  : 2016-09-8 9:33
 */
var iframeDialogTemplate = '<div class="u-msg-dialog u-iframe-dialog" style="{width}{height}{top}">' + '{close}' + '<div class="u-msg-title">' + '<h4>{title}</h4>' + '</div>' + '<div class="u-msg-content">' + '<iframe src="{url}" width = "99%" height ="100%"></iframe>' + '</div>' + '{footer}';

// '<div class="u-msg-title">' +
// '<h4>{title}</h4>' +
// '</div>' +
// '<div class="u-msg-content">' +

// '</div>' +
// '<div class="u-msg-footer"><button class="u-msg-ok u-button primary raised">{okText}</button><button class="u-msg-cancel u-button">{cancelText}</button></div>' +
// '</div>';

var iframeDialogF = function iframeDialogF(options) {

    var defaultOptions = {
        hasCloseMenu: true,
        hasFooter: false,
        url: '',
        width: '',
        height: '',
        title: '标题',
        top: '10%',
        onClose: function onClose() {},
        onCancel: function onCancel() {},
        onOk: function onOk() {}
    };

    options = extend(defaultOptions, options);
    this.id = options['id'];
    this.template = iframeDialogTemplate;
    this.hasCloseMenu = options['hasCloseMenu'];
    this.hasFooter = options['hasFooter'];
    this.url = options['url'];
    this.top = options['top'];
    this.title = options['title'];
    this.width = options['width'];
    this.height = options['height'];
    this.onClose = options['onClose'];
    this.onOk = options['onOk'];
    this.onCancel = options['onCancel'];
    //是否有url，没有url直接跳出
    if (!this.url) {
        return;
    }

    this.create();

    this.resizeFun = function () {
        // var cDom = this.contentDom.querySelector('.u-msg-content');
        // cDom.style.height = '';
        // var wholeHeight = this.templateDom.offsetHeight;
        // var contentHeight = this.contentDom.offsetHeight;
        // if(contentHeight > wholeHeight && cDom)
        // 	cDom.style.height = wholeHeight - (56 + 46) + 'px';

        var wholeHeight = this.templateDom.offsetHeight;
        var cDom = this.templateDom.querySelector('.u-msg-content');
        if (this.hasFooter) {
            cDom.style.height = wholeHeight - (56 + 52) + 'px';
        } else {
            cDom.style.height = wholeHeight - 52 + 'px';
        }
    }.bind(this);

    this.resizeFun();
    on$1(window, 'resize', this.resizeFun);
};

iframeDialogF.prototype.create = function () {
    var closeStr = '',
        footerStr = '';
    var oThis = this;
    if (this.hasCloseMenu) {
        var closeStr = '<div class="u-msg-close"> <span aria-hidden="true">&times;</span></div>';
    }
    if (this.hasFooter) {
        var footerStr = '<div class="u-msg-footer"><button class="u-msg-ok u-button u-button-primary raised">确定</button><button class="u-msg-cancel u-button">取消</button></div>' + '</div>';
    }
    var templateStr = this.template.replace('{close}', closeStr);
    templateStr = templateStr.replace('{url}', this.url);
    templateStr = templateStr.replace('{title}', this.title);
    templateStr = templateStr.replace('{footer}', footerStr);
    templateStr = templateStr.replace('{width}', this.width ? 'width:' + this.width + ';' : '');
    templateStr = templateStr.replace('{height}', this.height ? 'height:' + this.height + ';' : '');
    templateStr = templateStr.replace('{top}', this.top ? 'top:' + this.top + ';' : '');

    this.templateDom = makeDOM(templateStr);
    this.overlayDiv = makeModal$1(this.templateDom);

    if (this.hasCloseMenu) {
        this.closeDiv = this.templateDom.querySelector('.u-msg-close');
        on$1(this.closeDiv, 'click', function () {
            if (oThis.onClose() !== false) {
                oThis.close();
            }
        });
    }

    if (this.hasFooter) {
        var okBtn = this.templateDom.querySelector('.u-msg-ok');
        var cancelBtn = this.templateDom.querySelector('.u-msg-cancel');
        var closeBtn = new Button({
            el: okBtn
        });
        new Button({
            el: cancelBtn
        });
        on$1(okBtn, 'click', function () {
            if (oThis.onOk() !== false) {
                oThis.close();
            }
        });
        on$1(cancelBtn, 'click', function () {
            if (oThis.onCancel() !== false) {
                oThis.close();
            }
        });
    }

    document.body.appendChild(this.templateDom);
    this.isClosed = false;
};

iframeDialogF.prototype.close = function () {

    document.body.removeChild(this.templateDom);
    document.body.removeChild(this.overlayDiv);
    this.isClosed = true;
};

var iframeDialog = function iframeDialog(options) {
    return new iframeDialogF(options);
};

/**
 * Module : neoui-layout-md
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-02 15:42:33
 */

var MDLayout = u.BaseComponent.extend({
    _CssClasses: {
        MASTER: 'u-mdlayout-master',
        DETAIL: 'u-mdlayout-detail',
        PAGE: 'u-mdlayout-page',
        PAGE_HEADER: 'u-mdlayout-page-header',
        PAGE_SECTION: 'u-mdlayout-page-section',
        PAGE_FOOTER: 'u-mdlayout-page-footer'
    },
    init: function init() {
        //this.browser = _getBrowserInfo();
        var me = this;
        this.minWidth = 600;
        //this.options = $.extend({}, MDLayout.DEFAULTS, options)
        //this.$element.css('position','relative').css('width','100%').css('height','100%').css('overflow','hidden')
        this._master = this.element.querySelector('.' + this._CssClasses.MASTER);
        this._detail = this.element.querySelector('.' + this._CssClasses.DETAIL);

        //this.$master.css('float','left').css('height','100%')
        //this.$detail.css('height','100%').css('overflow','hidden').css('position','relative');
        if (this.master) this.masterWidth = this._master.offsetWidth;else this.masterWidth = 0;
        this.detailWidth = this._detail.offsetWidth;
        if (this._master) this.mPages = this._master.querySelectorAll('.' + this._CssClasses.PAGE);
        this.dPages = this._detail.querySelectorAll('.' + this._CssClasses.PAGE);
        this.mPageMap = {};
        this.dPageMap = {};
        if (this._master) this.initPages(this.mPages, 'master');
        this.initPages(this.dPages, 'detail');

        this.mHistory = [];
        this.dHistory = [];
        this.isNarrow = null;
        this.response();
        // on(window, 'resize', function(){
        // 	me.response();
        // })

        setInterval(function () {
            me.response();
        }, 100);
    },

    initPages: function initPages(pages, type) {
        var pageMap, pWidth;
        if (type === 'master') {
            pageMap = this.mPageMap;
            pWidth = this.masterWidth;
        } else {
            pageMap = this.dPageMap;
            pWidth = this.detailWidth;
        }
        for (var i = 0; i < pages.length; i++) {
            var pid = pages[i].getAttribute('id');
            if (!pid) throw new Error('u-mdlayout-page mast have id attribute');
            pageMap[pid] = pages[i];
            if (i === 0) {
                if (type === 'master') this.current_m_pageId = pid;else this.current_d_pageId = pid;
                addClass(pages[i], 'current');
                //pages[i].style.transform = 'translate3d('+ pWidth +'px,0,0)';
                pages[i].style.transform = 'translate3d(0,0,0)';
            } else {
                pages[i].style.transform = 'translate3d(' + pWidth + 'px,0,0)';
            }
            if (env$1.isIE8 || env$1.isIE9) {
                addClass(pages[i], 'let-ie9');
            }
        }
    },

    //	MDLayout.DEFAULTS = {
    //		minWidth: 600,
    ////		masterFloat: false,
    //		afterNarrow:function(){},
    //		afterUnNarrow:function(){},
    //		afterMasterGo:function(pageId){},
    //		afterMasterBack:function(pageId){},
    //		afterDetailGo:function(pageId){},
    //		afterDetailBack:function(pageId){}
    //	}

    response: function response() {
        var totalWidth = this.element.offsetWidth;
        if (totalWidth < this.minWidth) {
            if (this.isNarrow == null || this.isNarrow == false) this.isNarrow = true;
            this.hideMaster();
        } else {
            if (this.isNarrow == null || this.isNarrow == true) this.isNarrow = false;
            this.showMaster();
        }
        this.calcWidth();
    },

    calcWidth: function calcWidth() {
        if (!(env$1.isIE8 || env$1.isIE9)) {
            this.detailWidth = this._detail.offsetWidth;
            if (this._master) this.masterWidth = this._master.offsetWidth;else this.masterWidth = 0;
            //TODO this.mHistory中的panel应该置为-值
            for (var i = 0; i < this.dPages.length; i++) {
                var pid = this.dPages[i].getAttribute('id');
                if (pid !== this.current_d_pageId) {
                    this.dPages[i].style.transform = 'translate3d(' + this.detailWidth + 'px,0,0)';
                }
            }
            //this.$detail.find('[data-role="page"]').css('transform','translate3d('+ this.detailWidth +'px,0,0)')
            //this.$detail.find('#' + this.current_d_pageId).css('transform','translate3d(0,0,0)')
        }
    },

    mGo: function mGo(pageId) {
        if (this.current_m_pageId == pageId) return;
        this.mHistory.push(this.current_m_pageId);
        _hidePage(this.mPageMap[this.current_m_pageId], this, '-' + this.masterWidth);
        this.current_m_pageId = pageId;
        _showPage(this.mPageMap[this.current_m_pageId], this);
    },

    mBack: function mBack() {
        if (this.mHistory.length == 0) return;
        _hidePage(this.mPageMap[this.current_m_pageId], this, this.masterWidth);
        this.current_m_pageId = this.mHistory.pop();
        _showPage(this.mPageMap[this.current_m_pageId], this);
    },

    dGo: function dGo(pageId) {
        if (this.current_d_pageId == pageId) return;
        this.dHistory.push(this.current_d_pageId);
        _hidePage(this.dPageMap[this.current_d_pageId], this, '-' + this.detailWidth);
        this.current_d_pageId = pageId;
        _showPage(this.dPageMap[this.current_d_pageId], this);
    },

    dBack: function dBack() {
        if (this.dHistory.length == 0) return;
        _hidePage(this.dPageMap[this.current_d_pageId], this, this.detailWidth);
        this.current_d_pageId = this.dHistory.pop();
        _showPage(this.dPageMap[this.current_d_pageId], this);
    },

    showMaster: function showMaster() {
        if (this._master) {
            if (env$1.isIE8 || env$1.isIE9) this._master.style.display = 'none'; //IE下暂时不显示此区域
            else {
                    this._master.style.transform = 'translate3d(0,0,0)';
                }
            if (!this.isNarrow) this._master.style.position = 'relative';
        }
    },

    hideMaster: function hideMaster() {
        if (this._master) {
            if (this._master.offsetLeft < 0 || this._master.style.display == 'none') return;
            if (env$1.isIE8 || env$1.isIE9) this._master.style.display = 'none';else {
                this._master.style.transform = 'translate3d(-' + this.masterWidth + 'px,0,0)';
            }
            this._master.style.position = 'absolute';
            this._master.style.zIndex = 5;
            this.calcWidth();
        }
    }
});

/**
 * masterFloat属性只有在宽屏下起作用，为true时，master层浮动于detail层之上
 *
 */
//	MDLayout.fn.setMasterFloat = function(float){
//		this.masterFloat = float;
//
//	}

//function _getBrowserInfo(){
//	var browser = {};
//	var ua = navigator.userAgent.toLowerCase();
//	var s;
//	(s = ua.match(/rv:([\d.]+)\) like gecko/)) ? browser.ie = parseInt(s[1]) :
//			(s = ua.match(/msie ([\d.]+)/)) ? browser.ie = s[1] :
//					(s = ua.match(/firefox\/([\d.]+)/)) ? browser.firefox = s[1] :
//							(s = ua.match(/chrome\/([\d.]+)/)) ? browser.chrome = s[1] :
//									(s = ua.match(/opera.([\d.]+)/)) ? browser.opera = s[1] :
//											(s = ua.match(/version\/([\d.]+).*safari/)) ? browser.safari = s[1] : 0;
//	return browser;
//}

function _showPage(el, me) {
    addClass(el, 'current');
    if (!(env$1.isIE8 || env$1.isIE9)) el.style.transform = 'translate3d(0,0,0)';
}

function _hidePage(el, me, width) {
    removeClass(el, 'current');
    if (!(env$1.isIE8 || env$1.isIE9)) el.style.transform = 'translate3d(' + width + 'px,0,0)';
}

if (u.compMgr) u.compMgr.regComp({
    comp: MDLayout,
    compAsString: 'u.MDLayout',
    css: 'u-mdlayout'
});

/**
 * Module : neoui-layout-nav
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-02 15:56:32
 */

var NavLayout = u.BaseComponent.extend({
    _Constant: {
        MAX_WIDTH: '(max-width: 1024px)',
        TAB_SCROLL_PIXELS: 100,

        MENU_ICON: 'menu',
        CHEVRON_LEFT: 'chevron_left',
        CHEVRON_RIGHT: 'chevron_right'
    },
    /**
     * Modes.
     *
     * @enum {number}
     * @private
     */
    _Mode: {
        STANDARD: 0,
        SEAMED: 1,
        WATERFALL: 2,
        SCROLL: 3
    },
    /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */
    _CssClasses: {
        CONTAINER: 'u-navlayout-container',
        HEADER: 'u-navlayout-header',
        DRAWER: 'u-navlayout-drawer',
        CONTENT: 'u-navlayout-content',
        DRAWER_BTN: 'u-navlayout-drawer-button',

        ICON: 'fa',

        //JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',
        //RIPPLE_CONTAINER: 'mdl-layout__tab-ripple-container',
        //RIPPLE: 'mdl-ripple',
        //RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',

        HEADER_SEAMED: 'seamed',
        HEADER_WATERFALL: 'waterfall',
        HEADER_SCROLL: 'scroll',

        FIXED_HEADER: 'fixed',
        OBFUSCATOR: 'u-navlayout-obfuscator',

        TAB_BAR: 'u-navlayout-tab-bar',
        TAB_CONTAINER: 'u-navlayout-tab-bar-container',
        TAB: 'u-navlayout-tab',
        TAB_BAR_BUTTON: 'u-navlayout-tab-bar-button',
        TAB_BAR_LEFT_BUTTON: 'u-navlayout-tab-bar-left-button',
        TAB_BAR_RIGHT_BUTTON: 'u-navlayout-tab-bar-right-button',
        PANEL: 'u-navlayout-tab-panel',

        HAS_DRAWER: 'has-drawer',
        HAS_TABS: 'has-tabs',
        HAS_SCROLLING_HEADER: 'has-scrolling-header',
        CASTING_SHADOW: 'is-casting-shadow',
        IS_COMPACT: 'is-compact',
        IS_SMALL_SCREEN: 'is-small-screen',
        IS_DRAWER_OPEN: 'is-visible',
        IS_ACTIVE: 'is-active',
        IS_UPGRADED: 'is-upgraded',
        IS_ANIMATING: 'is-animating',

        ON_LARGE_SCREEN: 'u-navlayout-large-screen-only',
        ON_SMALL_SCREEN: 'u-navlayout-small-screen-only',

        NAV: 'u-nav',
        NAV_LINK: 'u-nav-link',
        NAV_LINK_CURRENT: 'u-nav-link-current',
        NAV_LINK_OPEN: 'u-nav-link-open',
        NAV_SUB: 'u-nav-sub'
    },
    init: function init() {
        var container = document.createElement('div');
        addClass(container, this._CssClasses.CONTAINER);
        this.element.parentElement.insertBefore(container, this.element);
        this.element.parentElement.removeChild(this.element);
        container.appendChild(this.element);

        var directChildren = this.element.childNodes;
        var numChildren = directChildren.length;
        for (var c = 0; c < numChildren; c++) {
            var child = directChildren[c];
            if (hasClass(child, this._CssClasses.HEADER)) {
                this._header = child;
            }

            if (hasClass(child, this._CssClasses.DRAWER)) {
                this._drawer = child;
            }

            if (hasClass(child, this._CssClasses.CONTENT)) {
                this._content = child;
                var layoutHeight = this.element.offsetHeight;
                var headerHeight = typeof this._header === 'undefined' ? 0 : this._header.offsetHeight;
                this._content.style.height = layoutHeight - headerHeight + 'px';
                var self = this;
                on$1(window, 'resize', function () {
                    var layoutHeight = self.element.offsetHeight;
                    var headerHeight = typeof self._header === 'undefined' ? 0 : self._header.offsetHeight;
                    self._content.style.height = layoutHeight - headerHeight + 'px';
                });
            }
        }

        if (this._header) {
            this._tabBar = this._header.querySelector('.' + this._CssClasses.TAB_BAR);
        }

        var mode = this._Mode.STANDARD;

        if (this._header) {
            if (hasClass(this._header, this._CssClasses.HEADER_SEAMED)) {
                mode = this._Mode.SEAMED;
                //} else if (hasClass(this._header,this._CssClasses.HEADER_SEAMED)) {
                //    mode = this._Mode.WATERFALL;
                //    on(this._header,'transitionend', this._headerTransitionEndHandler.bind(this));
                //    // this._header.addEventListener('transitionend', this._headerTransitionEndHandler.bind(this));
                //    on(this._header,'click', this._headerClickHandler.bind(this));
                //    // this._header.addEventListener('click', this._headerClickHandler.bind(this));
            } else if (hasClass(this._header, this._CssClasses.HEADER_SCROLL)) {
                mode = this._Mode.SCROLL;
                addClass(container, this._CssClasses.HAS_SCROLLING_HEADER);
            }

            if (mode === this._Mode.STANDARD) {
                addClass(this._header, this._CssClasses.CASTING_SHADOW);
                if (this._tabBar) {
                    addClass(this._tabBar, this._CssClasses.CASTING_SHADOW);
                }
            } else if (mode === this._Mode.SEAMED || mode === this._Mode.SCROLL) {
                removeClass(this._header, this._CssClasses.CASTING_SHADOW);
                if (this._tabBar) {
                    removeClass(this._tabBar, this._CssClasses.CASTING_SHADOW);
                }
            } else if (mode === this._Mode.WATERFALL) {
                // Add and remove shadows depending on scroll position.
                // Also add/remove auxiliary class for styling of the compact version of
                // the header.
                on$1(this._content, 'scroll', this._contentScrollHandler.bind(this));
                this._contentScrollHandler();
            }
        }

        // Add drawer toggling button to our layout, if we have an openable drawer.
        if (this._drawer) {
            var drawerButton = this.element.querySelector('.' + this._CssClasses.DRAWER_BTN);
            if (!drawerButton) {
                drawerButton = document.createElement('div');
                addClass(drawerButton, this._CssClasses.DRAWER_BTN);

                var drawerButtonIcon = document.createElement('i');
                drawerButtonIcon.className = 'uf uf-reorderoption';
                //drawerButtonIcon.textContent = this._Constant.MENU_ICON;
                drawerButton.appendChild(drawerButtonIcon);
            }

            if (hasClass(this._drawer, this._CssClasses.ON_LARGE_SCREEN)) {
                //If drawer has ON_LARGE_SCREEN class then add it to the drawer toggle button as well.
                addClass(drawerButton, this._CssClasses.ON_LARGE_SCREEN);
            } else if (hasClass(this._drawer, this._CssClasses.ON_SMALL_SCREEN)) {
                //If drawer has ON_SMALL_SCREEN class then add it to the drawer toggle button as well.
                addClass(drawerButton, this._CssClasses.ON_SMALL_SCREEN);
            }
            on$1(drawerButton, 'click', this._drawerToggleHandler.bind(this));

            // Add a class if the layout has a drawer, for altering the left padding.
            // Adds the HAS_DRAWER to the elements since this._header may or may
            // not be present.
            addClass(this.element, this._CssClasses.HAS_DRAWER);

            // If we have a fixed header, add the button to the header rather than
            // the layout.
            if (hasClass(this.element, this._CssClasses.FIXED_HEADER) && this._header) {
                this._header.insertBefore(drawerButton, this._header.firstChild);
            } else {
                this.element.insertBefore(drawerButton, this._content);
            }
            this.drawerButton = drawerButton;

            var obfuscator = document.createElement('div');
            addClass(obfuscator, this._CssClasses.OBFUSCATOR);
            this.element.appendChild(obfuscator);
            on$1(obfuscator, 'click', this._drawerToggleHandler.bind(this));
            this._obfuscator = obfuscator;

            var leftnavs = this.element.querySelectorAll('.' + this._CssClasses.NAV);
            for (var i = 0; i < leftnavs.length; i++) {
                on$1(leftnavs[i], 'click', this._navlinkClickHander.bind(this));

                var items = leftnavs[i].querySelectorAll('.' + this._CssClasses.NAV_LINK);
                for (var i = 0; i < items.length; i++) {
                    new Ripple(items[i]);
                }
            }
        }

        // Keep an eye on screen size, and add/remove auxiliary class for styling
        // of small screens.


        if (env$1.isIE8 || env$1.isIE9) {
            on$1(window, 'resize', this._screenSizeHandler.bind(this));
        } else {
            this._screenSizeMediaQuery = window.matchMedia(
            /** @type {string} */
            this._Constant.MAX_WIDTH);
            this._screenSizeMediaQuery.addListener(this._screenSizeHandler.bind(this));
        }

        this._screenSizeHandler();

        // Initialize tabs, if any.
        if (this._header && this._tabBar) {
            addClass(this.element, this._CssClasses.HAS_TABS);

            var tabContainer = document.createElement('div');
            addClass(tabContainer, this._CssClasses.TAB_CONTAINER);
            this._header.insertBefore(tabContainer, this._tabBar);
            this._header.removeChild(this._tabBar);

            var leftButton = document.createElement('div');
            addClass(leftButton, this._CssClasses.TAB_BAR_BUTTON);
            addClass(leftButton, this._CssClasses.TAB_BAR_LEFT_BUTTON);
            var leftButtonIcon = document.createElement('i');
            addClass(leftButtonIcon, this._CssClasses.ICON);
            leftButtonIcon.textContent = this._Constant.CHEVRON_LEFT;
            leftButton.appendChild(leftButtonIcon);
            on$1(leftButton, 'click', function () {
                this._tabBar.scrollLeft -= this._Constant.TAB_SCROLL_PIXELS;
            }.bind(this));

            var rightButton = document.createElement('div');
            addClass(rightButton, this._CssClasses.TAB_BAR_BUTTON);
            addClass(rightButton, this._CssClasses.TAB_BAR_RIGHT_BUTTON);
            var rightButtonIcon = document.createElement('i');
            addClass(rightButtonIcon, this._CssClasses.ICON);
            rightButtonIcon.textContent = this._Constant.CHEVRON_RIGHT;
            rightButton.appendChild(rightButtonIcon);
            on$1(rightButton, 'click', function () {
                this._tabBar.scrollLeft += this._Constant.TAB_SCROLL_PIXELS;
            }.bind(this));

            tabContainer.appendChild(leftButton);
            tabContainer.appendChild(this._tabBar);
            tabContainer.appendChild(rightButton);

            // Add and remove buttons depending on scroll position.
            var tabScrollHandler = function () {
                if (this._tabBar.scrollLeft > 0) {
                    addClass(leftButton, this._CssClasses.IS_ACTIVE);
                } else {
                    removeClass(leftButton, this._CssClasses.IS_ACTIVE);
                }

                if (this._tabBar.scrollLeft < this._tabBar.scrollWidth - this._tabBar.offsetWidth) {
                    addClass(rightButton, this._CssClasses.IS_ACTIVE);
                } else {
                    removeClass(rightButton, this._CssClasses.IS_ACTIVE);
                }
            }.bind(this);

            on$1(this._tabBar, 'scroll', tabScrollHandler);
            tabScrollHandler();

            if (hasClass(this._tabBar, this._CssClasses.JS_RIPPLE_EFFECT)) {
                addClass(this._tabBar, this._CssClasses.RIPPLE_IGNORE_EVENTS);
            }

            // Select element tabs, document panels
            var tabs = this._tabBar.querySelectorAll('.' + this._CssClasses.TAB);
            var panels = this._content.querySelectorAll('.' + this._CssClasses.PANEL);

            // Create new tabs for each tab element
            for (var i = 0; i < tabs.length; i++) {
                new UNavLayoutTab(tabs[i], tabs, panels, this);
            }
        }

        addClass(this.element, this._CssClasses.IS_UPGRADED);
    },

    /**
     * Handles scrolling on the content.
     *
     * @private
     */
    _contentScrollHandler: function _contentScrollHandler() {
        if (hasClass(this._header, this._CssClasses.IS_ANIMATING)) {
            return;
        }

        if (this._content.scrollTop > 0 && !hasClass(this._header, this._CssClasses.IS_COMPACT)) {
            addClass(this._header, this._CssClasses.CASTING_SHADOW).addClass(this._header, this._CssClasses.IS_COMPACT).addClass(this._header, this._CssClasses.IS_ANIMATING);
        } else if (this._content.scrollTop <= 0 && hasClass(this._header, this._CssClasses.IS_COMPACT)) {
            removeClass(this._header, this._CssClasses.CASTING_SHADOW).removeClass(this._header, this._CssClasses.IS_COMPACT).addClass(this._header, this._CssClasses.IS_ANIMATING);
        }
    },

    /**
     * Handles changes in screen size.
     *
     * @private
     */
    _screenSizeHandler: function _screenSizeHandler() {
        if (env$1.isIE8 || env$1.isIE9) {
            this._screenSizeMediaQuery = {};
            var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if (w > 1024) this._screenSizeMediaQuery.matches = false;else this._screenSizeMediaQuery.matches = true;
        }
        if (this._screenSizeMediaQuery.matches) {
            addClass(this.element, this._CssClasses.IS_SMALL_SCREEN);
        } else {
            removeClass(this.element, this._CssClasses.IS_SMALL_SCREEN);
            // Collapse drawer (if any) when moving to a large screen size.
            if (this._drawer) {
                removeClass(this._drawer, this._CssClasses.IS_DRAWER_OPEN);
                removeClass(this._obfuscator, this._CssClasses.IS_DRAWER_OPEN);
            }
        }
    },
    /**
     * Handles toggling of the drawer.
     *
     * @private
     */
    _drawerToggleHandler: function _drawerToggleHandler() {
        toggleClass(this._drawer, this._CssClasses.IS_DRAWER_OPEN);
        toggleClass(this._obfuscator, this._CssClasses.IS_DRAWER_OPEN);
    },
    /**
     * Handles (un)setting the `is-animating` class
     *
     * @private
     */
    _headerTransitionEndHandler: function _headerTransitionEndHandler() {
        removeClass(this._header, this._CssClasses.IS_ANIMATING);
    },
    /**
     * Handles expanding the header on click
     *
     * @private
     */
    _headerClickHandler: function _headerClickHandler() {
        if (hasClass(this._header, this._CssClasses.IS_COMPACT)) {
            removeClass(this._header, this._CssClasses.IS_COMPACT);
            addClass(this._header, this._CssClasses.IS_ANIMATING);
        }
    },
    /**
     * Reset tab state, dropping active classes
     *
     * @private
     */
    _resetTabState: function _resetTabState(tabBar) {
        for (var k = 0; k < tabBar.length; k++) {
            removeClass(tabBar[k], this._CssClasses.IS_ACTIVE);
        }
    },
    /**
     * Reset panel state, droping active classes
     *
     * @private
     */
    _resetPanelState: function _resetPanelState(panels) {
        for (var j = 0; j < panels.length; j++) {
            removeClass(panels[j], this._CssClasses.IS_ACTIVE);
        }
    },
    _navlinkClickHander: function _navlinkClickHander(e) {
        //var _target = e.currentTarget || e.target || e.srcElement;
        var curlink = this.element.querySelector('.' + this._CssClasses.NAV_LINK_CURRENT);
        curlink && removeClass(curlink, this._CssClasses.NAV_LINK_CURRENT);
        // if (curlink && isIE8){
        // 	var sub = curlink.parentNode.querySelector('.'+this._CssClasses.NAV_SUB);
        // 	if (sub){
        // 		sub.style.maxHeight = '0';
        // 	}
        // }

        var item = closest(e.target, this._CssClasses.NAV_LINK);

        if (item) {
            addClass(item, this._CssClasses.NAV_LINK_CURRENT);
            var sub = item.parentNode.querySelector('.' + this._CssClasses.NAV_SUB),
                open = hasClass(item, this._CssClasses.NAV_LINK_OPEN);
            if (sub && open) {
                removeClass(item, this._CssClasses.NAV_LINK_OPEN);
                if (env$1.isIE8) sub.style.maxHeight = 0;
            }
            if (sub && !open) {
                addClass(item, this._CssClasses.NAV_LINK_OPEN);
                if (env$1.isIE8) sub.style.maxHeight = '999px';
            }
            // sub && open && removeClass(item, this._CssClasses.NAV_LINK_OPEN);
            // sub && !open && addClass(item, this._CssClasses.NAV_LINK_OPEN);
        }
    }
});

/**
 * Constructor for an individual tab.
 *
 * @constructor
 * @param {HTMLElement} tab The HTML element for the tab.
 * @param {!Array<HTMLElement>} tabs Array with HTML elements for all tabs.
 * @param {!Array<HTMLElement>} panels Array with HTML elements for all panels.
 * @param {UNavLayout} layout The UNavLayout object that owns the tab.
 */
function UNavLayoutTab(tab, tabs, panels, layout) {

    /**
     * Auxiliary method to programmatically select a tab in the UI.
     */
    function selectTab() {
        var href = tab.href.split('#')[1];
        var panel = layout._content.querySelector('#' + href);
        layout._resetTabState(tabs);
        layout._resetPanelState(panels);
        addClass(tab, layout._CssClasses.IS_ACTIVE);
        addClass(panel, layout._CssClasses.IS_ACTIVE);
    }

    //if (layout.tabBar_.classList.contains(layout._CssClasses.JS_RIPPLE_EFFECT)) {
    var rippleContainer = document.createElement('span');
    addClass(rippleContainer, 'u-ripple');
    //rippleContainer.classList.add(layout._CssClasses.JS_RIPPLE_EFFECT);
    //var ripple = document.createElement('span');
    //ripple.classList.add(layout._CssClasses.RIPPLE);
    //rippleContainer.appendChild(ripple);
    tab.appendChild(rippleContainer);
    new URipple(tab);
    //}
    on$1(tab, 'click', function (e) {
        if (tab.getAttribute('href').charAt(0) === '#') {
            e.preventDefault();
            selectTab();
        }
    });

    tab.show = selectTab;

    on$1(tab, 'click', function (e) {
        e.preventDefault();
        var href = tab.href.split('#')[1];
        var panel = layout._content.querySelector('#' + href);
        layout._resetTabState(tabs);
        layout._resetPanelState(panels);
        addClass(tab, layout._CssClasses.IS_ACTIVE);
        addClass(panel, layout._CssClasses.IS_ACTIVE);
    });
}
var NavLayoutTab = UNavLayoutTab;
if (u.compMgr) u.compMgr.regComp({
    comp: NavLayout,
    compAsString: 'u.NavLayout',
    css: 'u-navlayout'
});

/**
 * Module : neoui-loader
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-02 19:02:09
 */
/*
 *加载loading
 */
var loadTemplate = "<div class='u-loader-container'><div class='u-loader'>{centerContent}</div>{loadDesc}</div>"; //{centerContent}为加载条中间内容
/**
 * @param  {Object} options
 * @return {[type]}
 */
var showLoader = function showLoader(options) {
	// hasback:是否含有遮罩层，centerContent加载图标中的内容，parEle加载图标的父元素,hasDesc加载条说明
	var hasback, centerContent, template, parEle, templateDom, loadDesc;
	options = options || {};
	hasback = options["hasback"];
	centerContent = options["centerContent"] || '';
	// hasDesc=options["hasDesc"];
	template = loadTemplate.replace('{centerContent}', centerContent);
	loadDesc = options["hasDesc"] ? "<div class='u-loader-desc'>页面加载中，请稍候。。。</div>" : " ";

	template = template.replace("{loadDesc}", loadDesc);

	templateDom = makeDOM(template);
	parEle = options["parEle"] || document.body;
	if (hasback) {
		var overlayDiv = makeModal$1(templateDom, parEle);
	}
	addClass(overlayDiv, 'u-loader-back');
	if (parEle == document.body) {
		templateDom.style.position = 'fixed';
	}
	parEle.appendChild(templateDom);
	$('.u-loader-container').css('display', "none");
	$('.u-loader-container:eq(0)').css('display', "block");
};
var hideLoader = function hideLoader(options) {
	var cssStr, hasback;
	options = options || {};
	if (options && options.cssStr) {
		cssStr = options.cssStr;
	} else {
		cssStr = '.u-loader-container';
	}

	// hasback = options["hasback"];
	// if(hasback){
	// 默认删除最高层的
	// 清除遮罩层时，不需判断是否有hasback属性，为了兼容之前的用法
	try {
		var overlayDivs = document.querySelectorAll('.u-overlay.u-loader-back');
		var l = overlayDivs.length;
		var div = overlayDivs[l - 1];
		div.parentNode.removeChild(div);
	} catch (e) {}

	// }

	try {
		var divs = document.querySelectorAll(cssStr);
		var l = divs.length;
		var div = divs[l - 1];
		div.parentNode.removeChild(div);
	} catch (e) {}
	// for(var i = 0; i < divs.length; i++) {
	// 	divs[i].parentNode.removeChild(divs[i]);
	// }
};

/**
 * Module : neoui-loading
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-02 19:11:45
 */
var Loading = u.BaseComponent.extend({
    _Constant: {
        U_LOADING_LAYER_COUNT: 4
    },

    _CssClasses: {
        U_LOADING_LAYER: 'u-loading-layer',
        U_LOADING_CIRCLE_CLIPPER: 'u-loading-circle-clipper',
        U_LOADING_CIRCLE: 'u-loading-circle',
        U_LOADING_GAP_PATCH: 'u-loading-gap-patch',
        U_LOADING_LEFT: 'u-loading-left',
        U_LOADING_RIGHT: 'u-loading-right'
    },

    init: function init() {
        if (env$1.isIE8 || env$1.isIE9) {
            var img = document.createElement('div');
            img.className = "loadingImg";
            this.element.appendChild(img);
        } else {
            for (var i = 1; i <= this._Constant.U_LOADING_LAYER_COUNT; i++) {
                this.createLayer(i);
            }
        }
        addClass(this.element, 'is-upgraded');
    },

    createLayer: function createLayer(index) {
        var layer = document.createElement('div');
        addClass(layer, this._CssClasses.U_LOADING_LAYER);
        addClass(layer, this._CssClasses.U_LOADING_LAYER + '-' + index);

        var leftClipper = document.createElement('div');
        addClass(leftClipper, this._CssClasses.U_LOADING_CIRCLE_CLIPPER);
        addClass(leftClipper, this._CssClasses.U_LOADING_LEFT);

        var gapPatch = document.createElement('div');
        addClass(gapPatch, this._CssClasses.U_LOADING_GAP_PATCH);

        var rightClipper = document.createElement('div');
        addClass(rightClipper, this._CssClasses.U_LOADING_CIRCLE_CLIPPER);
        addClass(rightClipper, this._CssClasses.U_LOADING_RIGHT);

        var circleOwners = [leftClipper, gapPatch, rightClipper];

        for (var i = 0; i < circleOwners.length; i++) {
            var circle = document.createElement('div');
            addClass(circle, this._CssClasses.U_LOADING_CIRCLE);
            circleOwners[i].appendChild(circle);
        }

        layer.appendChild(leftClipper);
        layer.appendChild(gapPatch);
        layer.appendChild(rightClipper);

        this.element.appendChild(layer);
    },

    stop: function stop() {
        removeClass(this.element, 'is-active');
    },

    start: function start() {
        addClass(this.element, 'is-active');
    }

});

if (u.compMgr) u.compMgr.regComp({
    comp: Loading,
    compAsString: 'u.Loading',
    css: 'u-loading'
});

var showLoading = function showLoading(op) {
    var htmlStr = '<div class="alert alert-waiting"><i class="uf uf-spinnerofdots"></i></div>';
    document.body.appendChild(makeDOM(htmlStr));
    htmlStr = '<div class="alert-backdrop" role="waiting-backdrop"></div>';
    document.body.appendChild(makeDOM(htmlStr));
};

var hideLoading = function hideLoading() {
    var divs = document.querySelectorAll('.alert-waiting,.alert-backdrop');
    for (var i = 0; i < divs.length; i++) {
        document.body.removeChild(divs[i]);
    }
};
// if(document.readyState && document.readyState === 'complete') {
// 	compMgr.updateComp();
// } else {
// 	on(window, 'load', function() {
// 		//扫描并生成控件
// 		compMgr.updateComp();
// 	});
// }
//兼容性保留
var showWaiting = showLoading;
var removeWaiting = hideLoading;

/**
 * Module : neoui-menu
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-02 19:22:32
 */
var Menu = u.BaseComponent.extend({
    _Keycodes: {
        ENTER: 13,
        ESCAPE: 27,
        SPACE: 32,
        UP_ARROW: 38,
        DOWN_ARROW: 40
    },
    _CssClasses: {

        BOTTOM_LEFT: 'u-menu-bottom-left', // This is the default.
        BOTTOM_RIGHT: 'u-menu-bottom-right',
        TOP_LEFT: 'u-menu-top-left',
        TOP_RIGHT: 'u-menu-top-right',
        UNALIGNED: 'u-menu-unaligned'
    },

    init: function init() {

        // Create container for the menu.
        var container = document.createElement('div');
        addClass(container, 'u-menu-container');
        this.element.parentElement.insertBefore(container, this.element);
        this.element.parentElement.removeChild(this.element);
        container.appendChild(this.element);
        this._container = container;

        // Create outline for the menu (shadow and background).
        var outline = document.createElement('div');
        addClass(outline, 'u-menu-outline');
        this._outline = outline;
        container.insertBefore(outline, this.element);

        // Find the "for" element and bind events to it.
        var forElId = this.element.getAttribute('for') || this.element.getAttribute('data-u-for');
        var forEl = null;
        if (forElId) {
            forEl = document.getElementById(forElId);
            if (forEl) {
                this.for_element = forEl;
                var El = this.element;
                if (this.for_element.getAttribute('data-event') == 'hover') {
                    on$1(forEl, 'mouseover', this._handleForHover.bind(this));
                    on$1(El, 'mouseover', this._handleForElHover.bind(this));
                    on$1(forEl.parentElement, 'mouseout', this._handleForMouseout.bind(this));
                    on$1(El, 'mouseout', this._handleForElMouseout.bind(this));
                } else {
                    on$1(forEl, 'click', this._handleForClick.bind(this));
                }

                on$1(forEl, 'keydown', this._handleForKeyboardEvent.bind(this));
            }
        }

        var items = this.element.querySelectorAll('.u-menu-item');
        this._boundItemKeydown = this._handleItemKeyboardEvent.bind(this);
        this._boundItemClick = this._handleItemClick.bind(this);
        for (var i = 0; i < items.length; i++) {
            // Add a listener to each menu item.
            on$1(items[i], 'click', this._boundItemClick);
            // Add a tab index to each menu item.
            items[i].tabIndex = '-1';
            // Add a keyboard listener to each menu item.
            on$1(items[i], 'keydown', this._boundItemKeydown);
        }

        for (i = 0; i < items.length; i++) {
            var item = items[i];

            var rippleContainer = document.createElement('span');
            addClass(rippleContainer, 'u-ripple');
            item.appendChild(rippleContainer);
            new URipple(item);
        }
        //}

        // Copy alignment classes to the container, so the outline can use them.
        if (hasClass(this.element, 'u-menu-bottom-left')) {
            addClass(this._outline, 'u-menu-bottom-left');
        }
        if (hasClass(this.element, 'u-menu-bottom-right')) {
            addClass(this._outline, 'u-menu-bottom-right');
        }
        if (hasClass(this.element, 'u-menu-top-left')) {
            addClass(this._outline, 'u-menu-top-left');
        }
        if (hasClass(this.element, 'u-menu-top-right')) {
            addClass(this._outline, 'u-menu-top-right');
        }
        if (hasClass(this.element, 'u-menu-unaligned')) {
            addClass(this._outline, 'u-menu-unaligned');
        }

        addClass(container, 'is-upgraded');
    },
    _handleForElHover: function _handleForElHover(evt) {
        this.hoverFlag = false;
    },
    _handleForElMouseout: function _handleForElMouseout(evt) {
        var self = this;
        this.hoverFlag = true;
        window.setTimeout(function () {
            if (self.hoverFlag) {
                self.toggle(evt, 'out');
            }
        }, 100);
    },
    _handleForMouseout: function _handleForMouseout(evt) {
        var self = this;
        this.hoverFlag = true;
        window.setTimeout(function () {
            if (self.hoverFlag) {
                self.toggle(evt, 'out');
            }
        }, 100);
    },
    _handleForHover: function _handleForHover(evt) {

        if (this.element && this.for_element) {
            this.hoverFlag = false;
            var rect = this.for_element.getBoundingClientRect();
            var forRect = this.for_element.parentElement.getBoundingClientRect();

            if (hasClass(this.element, 'u-menu-unaligned')) {
                // Do not position the menu automatically. Requires the developer to
                // manually specify position.
            } else if (hasClass(this.element, 'u-menu-bottom-right')) {
                // Position below the "for" element, aligned to its right.
                this._container.style.left = this.for_element.offsetLeft + this.for_element.offsetWidth - this.element.offsetWidth + 'px';
                // this._container.style.right = (forRect.right - rect.right) + 'px';
                this._container.style.top = this.for_element.offsetTop + this.for_element.offsetHeight + 'px';
            } else if (hasClass(this.element, 'u-menu-top-left')) {
                // Position above the "for" element, aligned to its left.
                this._container.style.left = this.for_element.offsetLeft + 'px';
                this._container.style.bottom = forRect.bottom - rect.top + 'px';
            } else if (hasClass(this.element, 'u-menu-top-right')) {
                // Position above the "for" element, aligned to its right.
                this._container.style.right = forRect.right - rect.right + 'px';
                this._container.style.bottom = forRect.bottom - rect.top + 'px';
            } else {
                // Default: position below the "for" element, aligned to its left.
                this._container.style.left = this.for_element.offsetLeft + 'px';
                this._container.style.top = this.for_element.offsetTop + this.for_element.offsetHeight + 'px';
            }
        }

        this.toggle(evt, 'over');
    },

    _handleForClick: function _handleForClick(evt) {
        if (this.element && this.for_element) {
            var rect = this.for_element.getBoundingClientRect();
            var forRect = this.for_element.parentElement.getBoundingClientRect();

            if (hasClass(this.element, 'u-menu-unaligned')) {
                // Do not position the menu automatically. Requires the developer to
                // manually specify position.
            } else if (hasClass(this.element, 'u-menu-bottom-right')) {
                // Position below the "for" element, aligned to its right.
                this._container.style.left = this.for_element.offsetLeft + this.for_element.offsetWidth - this.element.offsetWidth + 'px';
                // this._container.style.right = (forRect.right - rect.right) + 'px';
                this._container.style.top = this.for_element.offsetTop + this.for_element.offsetHeight + 2 + 'px';
            } else if (hasClass(this.element, 'u-menu-top-left')) {
                // Position above the "for" element, aligned to its left.
                this._container.style.left = this.for_element.offsetLeft + 'px';
                this._container.style.bottom = forRect.bottom - rect.top + 4 + 'px';
            } else if (hasClass(this.element, 'u-menu-top-right')) {
                // Position above the "for" element, aligned to its right.
                this._container.style.right = forRect.right - rect.right + 'px';
                this._container.style.bottom = forRect.bottom - rect.top + 4 + 'px';
            } else {
                // Default: position below the "for" element, aligned to its left.
                this._container.style.left = this.for_element.offsetLeft + 'px';
                this._container.style.top = this.for_element.offsetTop + this.for_element.offsetHeight + 2 + 'px';
            }
        }

        this.toggle(evt);
    },
    /**
     * Handles a keyboard event on the "for" element.
     *
     * @param {Event} evt The event that fired.
     * @private
     */
    _handleForKeyboardEvent: function _handleForKeyboardEvent(evt) {
        if (this.element && this._container && this.for_element) {
            var items = this.element.querySelectorAll('.u-menu-item:not([disabled])');

            if (items && items.length > 0 && hasClass(this._container, 'is-visible')) {
                if (evt.keyCode === this._Keycodes.UP_ARROW) {
                    stopEvent(evt);
                    // evt.preventDefault();
                    items[items.length - 1].focus();
                } else if (evt.keyCode === this._Keycodes.DOWN_ARROW) {
                    stopEvent(evt);
                    // evt.preventDefault();
                    items[0].focus();
                }
            }
        }
    },
    /**
     * Handles a keyboard event on an item.
     *
     * @param {Event} evt The event that fired.
     * @private
     */
    _handleItemKeyboardEvent: function _handleItemKeyboardEvent(evt) {
        if (this.element && this._container) {
            var items = this.element.querySelectorAll('.u-menu-item:not([disabled])');

            if (items && items.length > 0 && hasClass(this._container, 'is-visible')) {
                var currentIndex = Array.prototype.slice.call(items).indexOf(evt.target);

                if (evt.keyCode === this._Keycodes.UP_ARROW) {
                    stopEvent(evt);
                    // evt.preventDefault();
                    if (currentIndex > 0) {
                        items[currentIndex - 1].focus();
                    } else {
                        items[items.length - 1].focus();
                    }
                } else if (evt.keyCode === this._Keycodes.DOWN_ARROW) {
                    stopEvent(evt);
                    // evt.preventDefault();
                    if (items.length > currentIndex + 1) {
                        items[currentIndex + 1].focus();
                    } else {
                        items[0].focus();
                    }
                } else if (evt.keyCode === this._Keycodes.SPACE || evt.keyCode === this._Keycodes.ENTER) {
                    stopEvent(evt);
                    // evt.preventDefault();
                    // Send mousedown and mouseup to trigger ripple.
                    var e = new MouseEvent('mousedown');
                    evt.target.dispatchEvent(e);
                    e = new MouseEvent('mouseup');
                    evt.target.dispatchEvent(e);
                    // Send click.
                    evt.target.click();
                } else if (evt.keyCode === this._Keycodes.ESCAPE) {
                    stopEvent(evt);
                    // evt.preventDefault();
                    this.hide();
                }
            }
        }
    },
    /**
     * Handles a click event on an item.
     *
     * @param {Event} evt The event that fired.
     * @private
     */
    _handleItemClick: function _handleItemClick(evt) {
        if (evt.target.hasAttribute('disabled')) {
            stopEvent(evt);
            // evt.stopPropagation();
        } else {
            // Wait some time before closing menu, so the user can see the ripple.
            this._closing = true;
            window.setTimeout(function (evt) {
                this.hide();
                this._closing = false;
            }.bind(this), 150);
        }
    },
    /**
     * Calculates the initial clip (for opening the menu) or final clip (for closing
     * it), and applies it. This allows us to animate from or to the correct point,
     * that is, the point it's aligned to in the "for" element.
     *
     * @param {number} height Height of the clip rectangle
     * @param {number} width Width of the clip rectangle
     * @private
     */
    _applyClip: function _applyClip(height, width) {
        if (hasClass(this.element, 'u-menu-unaligned')) {
            // Do not clip.
            this.element.style.clip = '';
        } else if (hasClass(this.element, 'u-menu-bottom-right')) {
            // Clip to the top right corner of the menu.
            this.element.style.clip = 'rect(0 ' + width + 'px ' + '0 ' + width + 'px)';
        } else if (hasClass(this.element, 'u-menu-top-left')) {
            // Clip to the bottom left corner of the menu.
            this.element.style.clip = 'rect(' + height + 'px 0 ' + height + 'px 0)';
        } else if (hasClass(this.element, 'u-menu-top-right')) {
            // Clip to the bottom right corner of the menu.
            this.element.style.clip = 'rect(' + height + 'px ' + width + 'px ' + height + 'px ' + width + 'px)';
        } else {
            // Default: do not clip (same as clipping to the top left corner).
            this.element.style.clip = 'rect(' + 0 + 'px ' + 0 + 'px ' + 0 + 'px ' + 0 + 'px)';
        }
    },
    /**
     * Adds an event listener to clean up after the animation ends.
     *
     * @private
     */
    _addAnimationEndListener: function _addAnimationEndListener() {
        var cleanup = function () {
            off$1(this.element, 'transitionend', cleanup);
            // this.element.removeEventListener('transitionend', cleanup);
            off$1(this.element, 'webkitTransitionEnd', cleanup);
            // this.element.removeEventListener('webkitTransitionEnd', cleanup);
            removeClass(this.element, 'is-animating');
        }.bind(this);

        // Remove animation class once the transition is done.
        on$1(this.element, 'transitionend', cleanup);
        // this.element.addEventListener('transitionend', cleanup);
        on$1(this.element, 'webkitTransitionEnd', cleanup);
        // this.element.addEventListener('webkitTransitionEnd', cleanup);
    },
    /**
     * Displays the menu.
     *
     * @public
     */
    show: function show(evt) {
        if (this.element && this._container && this._outline) {
            // Measure the inner element.
            var height = this.element.getBoundingClientRect().height;
            var width = this.element.getBoundingClientRect().width;

            if (!width) {
                var left = this.element.getBoundingClientRect().left;
                var right = this.element.getBoundingClientRect().right;
                width = right - left;
            }

            if (!height) {
                var top = this.element.getBoundingClientRect().top;
                var bottom = this.element.getBoundingClientRect().bottom;
                height = bottom - top;
            }

            // Apply the inner element's size to the container and outline.
            var choseBtnBottomRight = $(this.element.parentElement.previousElementSibling).next().find(".u-menu-bottom-right").hasClass("u-menu-bottom-right");
            var choseBtnBottomTop = $(this.element.parentElement.previousElementSibling).next().find(".u-menu-top-right").hasClass("u-menu-top-right");

            if (choseBtnBottomRight || choseBtnBottomTop) {
                $(this.element.parentElement.previousElementSibling).next().find(".u-menu-outline").css("left", "-1px");
            }
            this._container.style.width = width + 'px';
            this._container.style.height = height + 'px';
            this._outline.style.width = width + 'px';
            this._outline.style.height = height + 'px';

            var transitionDuration = 0.24;

            // Calculate transition delays for individual menu items, so that they fade
            // in one at a time.
            var items = this.element.querySelectorAll('.u-menu-item');
            for (var i = 0; i < items.length; i++) {
                var itemDelay = null;
                if (hasClass(this.element, 'u-menu-top-left') || hasClass(this.element, 'u-menu-top-right')) {
                    itemDelay = (height - items[i].offsetTop - items[i].offsetHeight) / height * transitionDuration + 's';
                } else {
                    itemDelay = items[i].offsetTop / height * transitionDuration + 's';
                }
                items[i].style.transitionDelay = itemDelay;
            }

            // Apply the initial clip to the text before we start animating.
            this._applyClip(height, width);

            // Wait for the next frame, turn on animation, and apply the final clip.
            // Also make it visible. This triggers the transitions.
            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(function () {
                    addClass(this.element, 'is-animating');
                    this.element.style.clip = 'rect(0 ' + (width + 1) + 'px ' + height + 'px 0)';
                    addClass(this._container, 'is-visible');
                }.bind(this));
            } else {
                addClass(this.element, 'is-animating');
                this.element.style.clip = 'rect(0 ' + (width + 1) + 'px ' + height + 'px 0)';
                addClass(this._container, 'is-visible');
            }

            // Clean up after the animation is complete.
            this._addAnimationEndListener();

            // Add a click listener to the document, to close the menu.
            var firstFlag = true;
            var callback = function (e) {
                if (env$1.isIE8) {
                    if (firstFlag) {
                        firstFlag = false;
                        return;
                    }
                }
                if (e !== evt && !this._closing && e.target.parentNode !== this.element) {
                    off$1(document, 'click', callback);
                    // document.removeEventListener('click', callback);
                    this.hide();
                }
            }.bind(this);
            on$1(document, 'click', callback);
            // document.addEventListener('click', callback);
        }
    },

    /**
     * Hides the menu.
     *
     * @public
     */
    hide: function hide() {
        if (this.element && this._container && this._outline) {
            var items = this.element.querySelectorAll('.u-menu-item');

            // Remove all transition delays; menu items fade out concurrently.
            for (var i = 0; i < items.length; i++) {
                items[i].style.transitionDelay = null;
            }

            // Measure the inner element.
            var rect = this.element.getBoundingClientRect();
            var height = rect.height;
            var width = rect.width;

            if (!width) {
                var left = rect.left;
                var right = rect.right;
                width = right - left;
            }

            if (!height) {
                var top = rect.top;
                var bottom = rect.bottom;
                height = bottom - top;
            }

            // Turn on animation, and apply the final clip. Also make invisible.
            // This triggers the transitions.
            addClass(this.element, 'is-animating');
            this._applyClip(height, width);
            removeClass(this._container, 'is-visible');

            // Clean up after the animation is complete.
            this._addAnimationEndListener();
        }
    },
    /**
     * Displays or hides the menu, depending on current state.
     *
     * @public
     */
    toggle: function toggle(evt, tab) {

        if (typeof tab == 'undefined') {
            if (hasClass(this._container, 'is-visible')) {} else {
                this.show(evt);
            }
        } else {
            if (tab == 'over') {
                this.show(evt);
            } else {
                this.hide();
            }
        }
    }
});

if (u.compMgr) u.compMgr.regComp({
    comp: Menu,
    compAsString: 'u.Menu',
    css: 'u-menu'
});

/**
 * Module : neoui-message
 * Author : Kvkens(yueming@yonyou.com)
 * Date      : 2016-08-02 19:40:59
 */

var messageTemplate = '<div class="u-message"><span class="u-msg-close uf uf-close"></span>{msg}</div>';

var showMessage = function showMessage(options) {
    var msg, position, width, height, showSeconds, msgType, template;
    //新增深色
    var darkType;
    if (typeof options === 'string') {
        options = {
            msg: options
        };
    }
    msg = options['msg'] || "";
    position = options['position'] || "bottom"; //center. top-left, top-center, top-right, bottom-left, bottom-center, bottom-right,
    //TODO 后面改规则：没设宽高时，自适应
    width = options['width'] || "";
    // height = options['height'] || "100px";
    msgType = options['msgType'] || 'info';
    //默认为当用户输入的时间，当用户输入的时间为false并且msgType=='info'时，默认显示时间为2s
    showSeconds = parseInt(options['showSeconds']) || (msgType == 'info' ? 2 : 0);

    darkType = options['darkType'] || "";

    template = options['template'] || messageTemplate;

    template = template.replace('{msg}', msg);
    var msgDom = makeDOM(template);
    addClass(msgDom, 'u-mes' + msgType);

    if (!darkType == "") {
        addClass(msgDom, darkType);
    }

    msgDom.style.width = width;
    // msgDom.style.height = height;
    // msgDom.style.lineHeight = height;
    if (position == 'bottom' || position == 'top' || position == 'center') {
        //msgDom.style.bottom = '10px';
        addClass(msgDom, 'u-mes-' + position);
    }

    if (position == 'topleft' || position == 'bottomleft') {
        if (width == "") {
            msgDom.style.right = '2.4rem';
            addClass(msgDom, 'u-mes-' + position);
        } else {
            addClass(msgDom, 'u-mes-' + position);
        }
    }
    if (position == 'topright' || position == 'bottomright') {
        if (width == "") {
            msgDom.style.left = '2.4rem';
            addClass(msgDom, 'u-mes-' + position);
        } else {
            addClass(msgDom, 'u-mes-' + position);
        }
    }
    var closeBtn = msgDom.querySelector('.u-msg-close');
    //new Button({el:closeBtn});
    var closeFun = function closeFun() {
        removeClass(msgDom, "active");
        setTimeout(function () {
            try {
                document.body.removeChild(msgDom);
            } catch (e) {}
        }, 500);
    };
    on$1(closeBtn, 'click', closeFun);
    document.body.appendChild(msgDom);

    if (showSeconds > 0) {
        setTimeout(function () {
            closeFun();
        }, showSeconds * 1000);
    }

    setTimeout(function () {
        addClass(msgDom, "active");
    }, showSeconds * 1);
};

var showMessageDialog = showMessage;

/**
 * Module : neoui-multilang
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-02 20:19:37
 */

var Multilang = u.BaseComponent.extend({
    init: function init() {
        var self = this;
        var element = this.element;
        this.options = extend({}, this.DEFAULTS, this.options);
        this.field = this.options.field || 'name';
        this.multinfo(this.options.multinfo);
        this.addData(this.options.multidata);
    }
});
Multilang.fn = Multilang.prototype;
Multilang.fn.addData = function (val) {
    var target = this.element,
        tmparray,
        target_div = target.parentNode;
    if (val === null || typeof val === 'undefined') {
        tmparray = [];
    } else if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) == "object") {
        tmparray = val;
    } else {
        tmparray = val.split(",");
    }
    target_div.value = tmparray;
    each(tmparray, function (i, node) {
        target_div.querySelectorAll(".m_context")[i].innerHTML = node;
    });
};
Multilang.fn.multinfo = function (sort) {

    var target = this.element,
        self = this,
        tmplabel = "",
        close_menu = false;
    if (isArray(sort)) {

        wrap(target, "<div class='multilang_body'><input class='lang_value' contenteditable='true'><span class='uf uf-caretdown lang_icon'><span class='m_icon'></span></span>");
        css(target, "display", "none");

        each(sort, function (i, node) {
            if (i) {
                tmplabel += "<label attr='" + self.field + (i + 1) + "'><span class='m_context'></span><span class='m_icon'>" + node + "</span></label>";
            } else {
                tmplabel += "<label attr='" + self.field + "'><span class='m_context'></span><span class='m_icon'>" + node + "</span></label>";
            }
        });
        var target_div = target.parentNode;

        target_div.insertAdjacentHTML("beforeEnd", "<div class='multilang_menu '>" + tmplabel + "</div>");
        var tmpIconv = target_div.querySelector(".lang_icon"),
            target_menu = target_div.querySelector(".multilang_menu"),
            target_labels = target_menu.querySelectorAll('label'),
            tmpvaluebox = target_div.querySelector(".lang_value");
        on$1(tmpIconv, "click", function () {
            var target_icon = this;
            target_div.querySelector(".lang_value").focus();
            if (css(target_menu, "display") == "block") {
                css(target_menu, "display", "none");
            } else {
                css(target_menu, "display", "block");
            }
        });
        on$1(target_menu, "mouseenter", function () {
            close_menu = false;
        });
        on$1(target_menu, "mouseleave", function () {
            close_menu = true;
        });

        on$1(tmpvaluebox, "blur", function (e) {
            var target_input = $(this),
                target_div = target_input.parents(".multilang_body"),
                target = e.target,
                tmpkey = target.className.split(" ")[2],
                tmptext = target.value;

            if (hasClass(target, "ready_change")) {
                self.changeData(target_div[0], tmpkey, tmptext);
            }
            // if(close_menu) {
            // 	css(target_menu, "display", "none")
            // }
        });

        target_labels.forEach(function (ele) {
            on$1(ele, "click", function () {
                var target_label = this,
                    tempField = target_label.getAttribute("attr"),
                    tmptext = target_label.querySelector(".m_context").innerHTML,
                    tmpicon = target_label.querySelector(".m_icon").cloneNode(true);

                tmpvaluebox.setAttribute("class", "ready_change lang_value " + tempField);
                tmpvaluebox.value = tmptext;
                tmpvaluebox.focus();
                var tmpicom = target_div.querySelector(".lang_icon"),
                    oldicon = target_div.querySelector(".m_icon");
                removeClass(tmpicom, "uf-caretdown");
                tmpicom.replaceChild(tmpicon, oldicon);
            });
        });
    } else {
        console.error('Not object');
    }
};
Multilang.fn.changeData = function (target_div, field, text) {
    var tmpdata = target_div.value,
        tmplabel = target_div.querySelector("label[attr='" + field + "']"),
        tmpcontext = tmplabel.querySelector(".m_context");
    tmpcontext.innerHTML = text;
    tmpcontext.value = text;
    each(target_div.querySelectorAll(".m_context"), function (i, node) {
        tmpdata[i] = node.innerHTML;
    });

    this.trigger('change.u.multilang', {
        newValue: text,
        field: field
    });
};
Multilang.fn.getData = function () {
    var target = $(multilang.target).next(".multilang_body")[0],
        multilang_data = target.value;

    return multilang_data;
};

Multilang.fn.setDataValue = function (field, value) {
    var target_div = this.element.closest('.multilang_body'),
        tmplabel = target_div.querySelector("label[attr='" + field + "']"),
        tmpcontext = tmplabel.querySelector(".m_context");
    tmpcontext.innerHTML = value;
    tmpcontext.value = value;

    var tmpdata = [];
    each(this.element.closest('.multilang_body').querySelectorAll(".m_context"), function (i, node) {
        tmpdata[i] = node.innerHTML;
    });
    this.element.closest('.multilang_body').value = tmpdata;
};

if (u.compMgr) u.compMgr.regComp({
    comp: Multilang,
    compAsString: 'u.Multilang',
    css: 'u-multilang'
});

/**
 * Module : neoui-navmenu
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-03 08:45:49
 */

var NavMenu = u.BaseComponent.extend({
    _Constant: {},
    _CssClasses: {
        NAV: 'u-navmenu',
        NAV_LINK: 'u-navmenu-link',
        NAV_LINK_CURRENT: 'u-navmenu-link-current',
        NAV_LINK_OPEN: 'u-navmenu-link-open',
        NAV_SUB: 'u-navmenu-sub'
    },
    init: function init() {

        if (hasClass(this.element, 'u-navmenu-horizontal')) {
            on$1(this.element, 'click', this._horNavlinkClickHander.bind(this));
        } else {
            on$1(this.element, 'click', this._navlinkClickHander.bind(this));
        }

        var items = this.element.querySelectorAll('.' + this._CssClasses.NAV_LINK);
        for (var i = 0; i < items.length; i++) {
            new Ripple(items[i]);
        }
    },
    _horNavlinkClickHander: function _horNavlinkClickHander(e) {
        var item = closest(e.target, this._CssClasses.NAV_LINK);

        if (item) {
            var curlink = this.element.querySelector('.' + this._CssClasses.NAV_LINK_CURRENT);
            curlink && removeClass(curlink, this._CssClasses.NAV_LINK_CURRENT);
            addClass(item, this._CssClasses.NAV_LINK_CURRENT);
        }
    },
    _navlinkClickHander: function _navlinkClickHander(e) {
        //var _target = e.currentTarget || e.target || e.srcElement;
        var curlink = this.element.querySelector('.' + this._CssClasses.NAV_LINK_CURRENT);
        curlink && removeClass(curlink, this._CssClasses.NAV_LINK_CURRENT);
        // if (curlink && isIE8){
        // 	var sub = curlink.parentNode.querySelector('.'+this._CssClasses.NAV_SUB);
        // 	if (sub){
        // 		sub.style.maxHeight = '0';
        // 	}
        // }

        var item = closest(e.target, this._CssClasses.NAV_LINK);

        if (item) {
            addClass(item, this._CssClasses.NAV_LINK_CURRENT);
            var sub = item.parentNode.querySelector('.' + this._CssClasses.NAV_SUB),
                open = hasClass(item, this._CssClasses.NAV_LINK_OPEN);
            if (sub && open) {
                removeClass(item, this._CssClasses.NAV_LINK_OPEN);
                if (env.isIE8) sub.style.maxHeight = 0;
            }
            if (sub && !open) {
                addClass(item, this._CssClasses.NAV_LINK_OPEN);
                if (env.isIE8) sub.style.maxHeight = '999px';
            }
            // sub && open && removeClass(item, this._CssClasses.NAV_LINK_OPEN);
            // sub && !open && addClass(item, this._CssClasses.NAV_LINK_OPEN);
        }
    }
});

if (u.compMgr) u.compMgr.regComp({
    comp: NavMenu,
    compAsString: 'u.NavMenu',
    css: 'u-navmenu'
});

/**
 * Module : neoui-pagination
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-03 08:45:49
 */

var pagination = u.BaseComponent.extend({});

var PageProxy = function PageProxy(options, page) {
    this.isCurrent = function () {
        return page == options.currentPage;
    };
    this.isFirst = function () {
        return page == 1;
    };
    this.isLast = function () {
        return page == options.totalPages;
    };
    this.isPrev = function () {
        return page == options.currentPage - 1;
    };
    this.isNext = function () {
        return page == options.currentPage + 1;
    };
    this.isLeftOuter = function () {
        return page <= options.outerWindow;
    };
    this.isRightOuter = function () {
        return options.totalPages - page < options.outerWindow;
    };
    this.isInsideWindow = function () {
        if (options.currentPage < options.innerWindow + 1) {
            return page <= options.innerWindow * 2 + 1;
        } else if (options.currentPage > options.totalPages - options.innerWindow) {
            return options.totalPages - page <= options.innerWindow * 2;
        } else {
            return Math.abs(options.currentPage - page) <= options.innerWindow;
        }
    };
    this.number = function () {
        return page;
    };
    this.pageSize = function () {
        return options.pageSize;
    };
};

var View = {
    firstPage: function firstPage(pagin, options, currentPageProxy) {
        return '<li role="first"' + (currentPageProxy.isFirst() ? 'class="disabled"' : '') + '><a >' + options.first + '</a></li>';
    },
    prevPage: function prevPage(pagin, options, currentPageProxy) {
        return '<li role="prev"' + (currentPageProxy.isFirst() ? 'class="disabled"' : '') + '><a  rel="prev">' + options.prev + '</a></li>';
    },
    nextPage: function nextPage(pagin, options, currentPageProxy) {
        return '<li role="next"' + (currentPageProxy.isLast() ? 'class="disabled"' : '') + '><a  rel="next">' + options.next + '</a></li>';
    },
    lastPage: function lastPage(pagin, options, currentPageProxy) {

        return '<li role="last"' + (currentPageProxy.isLast() ? 'class="disabled"' : '') + '><a >' + options.last + '</a></li>';
    },
    gap: function gap(pagin, options) {
        return '<li role="gap" class="disabled"><a >' + options.gap + '</a></li>';
    },
    page: function page(pagin, options, pageProxy) {
        return '<li role="page"' + (pageProxy.isCurrent() ? 'class="active"' : '') + '><a ' + (pageProxy.isNext() ? ' rel="next"' : '') + (pageProxy.isPrev() ? 'rel="prev"' : '') + '>' + pageProxy.number() + '</a></li>';
    }
};

//pagination.prototype.compType = 'pagination';
pagination.prototype.init = function (element, options) {
    var self = this;
    var element = this.element;
    this.$element = element;
    this.options = extend({}, this.DEFAULTS, this.options);
    this.$ul = this.$element; //.find("ul");
    this.render();
};

pagination.prototype.DEFAULTS = {
    currentPage: 1,
    totalPages: 1,
    pageSize: 10,
    pageList: [5, 10, 20, 50, 100],
    innerWindow: 2,
    outerWindow: 0,
    first: '&laquo;',
    prev: '<i class="uf uf-anglepointingtoleft"></i>',
    next: '<i class="uf uf-anglearrowpointingtoright"></i>',
    last: '&raquo;',
    gap: '···',
    //totalText: '合计:',
    totalText: trans('pagination.totalText', '共'),
    listText: trans('pagination.listText', '条'),
    showText: trans('pagination.showText', '显示'),
    pageText: trans('pagination.pageText', '页'),
    toText: trans('pagination.toText', '到'),
    okText: trans('public.ok', '确定'),
    truncate: false,
    showState: true,
    showTotal: true, //初始默认显示总条数 “共xxx条”
    showColumn: true, //初始默认显示每页条数 “显示xx条”
    showJump: true, //初始默认显示跳转信息 “到xx页 确定”,
    showBtnOk: true, //初始默认显示确定按钮
    page: function page(_page) {
        return true;
    }
};

pagination.prototype.update = function (options) {
    this.$ul.innerHTML = "";
    this.options = extend({}, this.options, options);
    this.render();
};
pagination.prototype.render = function () {
    var a = new Date().valueOf();

    var options = this.options;

    if (!options.totalPages) {
        this.$element.style.display = "none";
        return;
    } else {
        this.$element.style.display = "block";
    }

    var htmlArr = [];
    var currentPageProxy = new PageProxy(options, options.currentPage);

    //update pagination by pengyic@yonyou.com
    //预设显示页码数
    var windows = 2;
    var total = options.totalPages - 0;
    var current = options.currentPage - 0;
    //预设显示页码数截断修正
    var fix = 0;
    var pageProxy;
    if (current - 2 <= windows + 1) {
        for (var i = 1; i <= current; i++) {
            pageProxy = new PageProxy(options, i);
            htmlArr.push(View.page(this, options, pageProxy));
        }

        fix = windows - (current - 1) < 0 ? 0 : windows - (current - 1);

        if (total - current - fix <= windows + 1) {
            for (var i = current + 1; i <= total; i++) {
                pageProxy = new PageProxy(options, i);
                htmlArr.push(View.page(this, options, pageProxy));
            }
        } else {
            for (var i = current + 1; i <= current + windows + fix; i++) {
                pageProxy = new PageProxy(options, i);
                htmlArr.push(View.page(this, options, pageProxy));
            }
            //添加分割'...'
            htmlArr.push(View.gap(this, options));

            pageProxy = new PageProxy(options, total);
            htmlArr.push(View.page(this, options, pageProxy));
        }
    } else {
        if (total - current <= windows + 1) {
            fix = windows - (total - current) < 0 ? 0 : windows - (total - current);

            for (var i = current - windows - fix; i <= total; i++) {
                pageProxy = new PageProxy(options, i);
                htmlArr.push(View.page(this, options, pageProxy));
            }
            if (i >= 2) {
                //添加分割'...'
                htmlArr.unshift(View.gap(this, options));
                pageProxy = new PageProxy(options, 1);
                htmlArr.unshift(View.page(this, options, pageProxy));
            }
        } else {
            for (var i = current - windows; i <= current + windows; i++) {
                pageProxy = new PageProxy(options, i);
                htmlArr.push(View.page(this, options, pageProxy));
            }
            //添加分割'...'
            htmlArr.push(View.gap(this, options));

            pageProxy = new PageProxy(options, total);
            htmlArr.push(View.page(this, options, pageProxy));

            //添加分割'...'
            htmlArr.unshift(View.gap(this, options));
            pageProxy = new PageProxy(options, 1);
            htmlArr.unshift(View.page(this, options, pageProxy));
        }
    }
    htmlArr.unshift(View.prevPage(this, options, currentPageProxy));
    htmlArr.push(View.nextPage(this, options, currentPageProxy));

    if (options.totalCount === undefined || options.totalCount <= 0) {
        options.totalCount = 0;
    }
    if (options.showState) {
        // 处理pageOption字符串
        var pageOption = '';
        options.pageList.forEach(function (item) {
            if (options.pageSize - 0 == item) {
                pageOption += '<option selected>' + item + '</option>';
            } else {
                pageOption += '<option>' + item + '</option>';
            }
        });
        var htmlTmp = '';
        //分别得到分页条后“共xxx条”、“显示xx条”、“到xx页 确定”三个html片段
        if (options.showTotal) {
            htmlTmp += '<div class="pagination-state">' + options.totalText + '&nbsp;' + options.totalCount + '&nbsp;' + options.listText + '</div>';
        }
        if (options.showColumn) {

            if (hasClass(this.$ul, 'pagination-sm')) {
                htmlTmp += '<div class="pagination-state">' + options.showText + '<select  class="page_z page_z_sm">' + pageOption + '</select>' + options.listText + '</div>';
            } else if (hasClass(this.$ul, 'pagination-lg')) {
                htmlTmp += '<div class="pagination-state">' + options.showText + '<select  class="page_z page_z_lg">' + pageOption + '</select>' + options.listText + '</div>';
            } else {
                htmlTmp += '<div class="pagination-state">' + options.showText + '<select  class="page_z">' + pageOption + '</select>' + options.listText + '</div>';
            }
        }
        if (options.showJump) {
            if (options.showBtnOk) {
                if (hasClass(this.$ul, 'pagination-sm')) {
                    htmlTmp += '<div class="pagination-state"><span>' + options.toText + '</span><input class="page_j text-center page_j_sm padding-left-0" value=' + options.currentPage + '><span>' + options.pageText + '</span><input class="pagination-jump pagination-jump-sm" type="button" value="' + options.okText + '"/></div>';
                } else if (hasClass(this.$ul, 'pagination-lg')) {
                    htmlTmp += '<div class="pagination-state"><span>' + options.toText + '</span><input class="page_j text-center page_j_lg padding-left-0" value=' + options.currentPage + '><span>' + options.pageText + '</span><input class="pagination-jump pagination-jump-lg" type="button" value="' + options.okText + '"/></div>';
                } else {
                    htmlTmp += '<div class="pagination-state"><span>' + options.toText + '</span><input class="page_j text-center padding-left-0" value=' + options.currentPage + '><span>' + options.pageText + '</span><input class="pagination-jump" type="button" value="' + options.okText + '"/></div>';
                }
            } else {
                if (hasClass(this.$ul, 'pagination-sm')) {
                    htmlTmp += '<div class="pagination-state"><span>' + options.toText + '</span><input class="page_j text-center padding-left-0" value=' + options.currentPage + '><span>' + options.pageText + '</span></div>';
                } else if (hasClass(this.$ul, 'pagination-lg')) {
                    htmlTmp += '<div class="pagination-state"><span>' + options.toText + '</span><input class="page_j text-center padding-left-0" value=' + options.currentPage + '><span>' + options.pageText + '</span></div>';
                } else {
                    htmlTmp += '<div class="pagination-state"><span>' + options.toText + '</span><input class="page_j text-center padding-left-0" value=' + options.currentPage + '><span>' + options.pageText + '</span></div>';
                }
            }
        }
        htmlArr.push(htmlTmp);
    }

    //在将htmlArr插入到页面之前，对htmlArr进行处理
    this.$ul.innerHTML = "";
    this.$ul.insertAdjacentHTML('beforeEnd', htmlArr.join(''));

    var me = this;
    //对分页控件中的确定按钮和输入页码按回车键添加的统一调用方法
    function paginationAddEventListen() {
        var jp, pz;
        jp = me.$ul.querySelector(".page_j").value || options.currentPage;
        pz = me.$ul.querySelector(".page_z").value || options.pageSize;
        if (isNaN(jp)) return;
        //if (pz != options.pageSize){
        //  me.$element.trigger('sizeChange', [pz, jp - 1])
        //}else{
        //  me.$element.trigger('pageChange', jp - 1)
        //}
        me.page(jp, options.totalPages, pz);
        //me.$element.trigger('pageChange', jp - 1)
        //me.$element.trigger('sizeChange', pz)
        return false;
    }

    on$1(this.$ul.querySelector(".pagination-jump"), "click", function () {
        paginationAddEventListen();
    });

    on$1(this.$ul.querySelector(".page_j"), "keydown", function (event) {
        if (event.keyCode == '13') {
            paginationAddEventListen();
        }
    });

    on$1(this.$ul.querySelector('[role="first"] a'), 'click', function () {
        if (options.currentPage <= 1) return;
        me.firstPage();
        //me.$element.trigger('pageChange', 0)
        return false;
    });
    on$1(this.$ul.querySelector('[role="prev"] a'), 'click', function () {
        if (options.currentPage <= 1) return;
        me.prevPage();
        //me.$element.trigger('pageChange', options.currentPage - 1)
        return false;
    });
    on$1(this.$ul.querySelector('[role="next"] a'), 'click', function () {
        if (parseInt(options.currentPage) + 1 > options.totalPages) return;
        me.nextPage();
        //me.$element.trigger('pageChange', parseInt(options.currentPage) + 1)
        return false;
    });
    on$1(this.$ul.querySelector('[role="last"] a'), 'click', function () {
        if (options.currentPage == options.totalPages) return;
        me.lastPage();
        //me.$element.trigger('pageChange', options.totalPages - 1)
        return false;
    });
    each(this.$ul.querySelectorAll('[role="page"] a'), function (i, node) {
        on$1(node, 'click', function () {
            var pz = me.$element.querySelector(".page_z") && $(this).val() || options.pageSize;
            me.page(parseInt(this.innerHTML), options.totalPages, pz);
            //me.$element.trigger('pageChange', parseInt($(this).html()) - 1)

            return false;
        });
    });
    on$1(this.$ul.querySelector('.page_z'), 'change', function () {
        var pz = me.$element.querySelector(".page_z") && $(this).val() || options.pageSize;
        me.trigger('sizeChange', pz);
    });
};

pagination.prototype.page = function (pageIndex, totalPages, pageSize) {

    var options = this.options;

    if (totalPages === undefined) {
        totalPages = options.totalPages;
    }
    if (pageSize === undefined) {
        pageSize = options.pageSize;
    }
    var oldPageSize = options.pageSize;
    // if (pageIndex > 0 && pageIndex <= totalPages) {
    // 	if (options.page(pageIndex)) {

    // 		this.$ul.innerHTML="";
    // 		options.pageSize = pageSize;
    // 		options.currentPage = pageIndex;
    // 		options.totalPages = totalPages;
    // 		this.render();

    // 	}
    // }else{
    // 	return false;
    // }

    if (options.page(pageIndex)) {
        if (pageIndex <= 0) {
            pageIndex = 1;
        }

        if (pageIndex > totalPages) {
            pageIndex = totalPages;
        }
        this.$ul.innerHTML = "";
        options.pageSize = pageSize;
        options.currentPage = pageIndex;
        options.totalPages = totalPages;
        this.render();
    }
    var temppageIndex = pageIndex - 1 < 0 ? 0 : pageIndex - 1;
    if (pageSize != oldPageSize) {
        this.trigger('sizeChange', [pageSize, temppageIndex]);
    } else {
        this.trigger('pageChange', temppageIndex);
    }

    //this.$element.trigger('pageChange', pageIndex)

    return false;
};

pagination.prototype.firstPage = function () {
    return this.page(1);
};

pagination.prototype.lastPage = function () {
    return this.page(this.options.totalPages);
};

pagination.prototype.nextPage = function () {
    return this.page(parseInt(this.options.currentPage) + 1);
};

pagination.prototype.prevPage = function () {
    return this.page(this.options.currentPage - 1);
};

pagination.prototype.disableChangeSize = function () {
    this.$element.querySelector('.page_z').setAttribute('readonly', true);
};

pagination.prototype.enableChangeSize = function () {
    this.$element.querySelector('.page_z').removeAttribute('readonly');
};

// var old = $.fn.pagination;

// $.fn.pagination = Plugin
// $.fn.pagination.Constructor = Pagination

if (u.compMgr) u.compMgr.regComp({
    comp: pagination,
    compAsString: 'u.pagination',
    css: 'u-pagination'
});

/**
 * Module : neoui-progress
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-03 10:46:37
 */

var Progress = u.BaseComponent.extend({
	_Constant: {},
	_CssClasses: {
		INDETERMINATE_CLASS: 'u-progress__indeterminate'
	},
	setProgress: function setProgress(p) {

		if (hasClass(this.element, this._CssClasses.INDETERMINATE_CLASS)) {
			return;
		}

		this.progressbar_.style.width = p + '%';
		return this;
	},
	/**
  * 设置竖向进度条的进度
  * @param p 要设置的进度
  * @returns {u.Progress}
     */
	setProgressHeight: function setProgressHeight(p) {

		if (hasClass(this.element, this._CssClasses.INDETERMINATE_CLASS)) {
			return;
		}

		this.progressbar_.style.height = p + '%';
		this.progressbar_.style.width = '100%';
		return this;
	},
	/**
  * 设置进度条中的html内容
  * @param p 要设置的html内容
  * @returns {u.Progress}
  */
	setProgressHTML: function setProgressHTML(html) {

		if (hasClass(this.element, this._CssClasses.INDETERMINATE_CLASS)) {
			return;
		}

		this.progressbar_.innerHTML = html;
		return this;
	},
	setBuffer: function setBuffer(p) {
		this.bufferbar_.style.width = p + '%';
		this.auxbar_.style.width = 100 - p + '%';
		return this;
	},

	init: function init() {
		var el = document.createElement('div');
		el.className = 'progressbar bar bar1';
		this.element.appendChild(el);
		this.progressbar_ = el;

		el = document.createElement('div');
		el.className = 'bufferbar bar bar2';
		this.element.appendChild(el);
		this.bufferbar_ = el;

		el = document.createElement('div');
		el.className = 'auxbar bar bar3';
		this.element.appendChild(el);
		this.auxbar_ = el;

		this.progressbar_.style.width = '0%';
		this.bufferbar_.style.width = '100%';
		this.auxbar_.style.width = '0%';

		addClass(this.element, 'is-upgraded');

		if (env$1.isIE8 || env$1.isIE9) {

			if (hasClass(this.element, this._CssClasses.INDETERMINATE_CLASS)) {
				var p = 0;
				var oThis = this;
				setInterval(function () {
					p += 5;
					p = p % 100;
					oThis.progressbar_.style.width = p + '%';
				}, 100);
			}
		}
	}

});

if (u.compMgr) u.compMgr.regComp({
	comp: Progress,
	compAsString: 'u.Progress',
	css: 'u-progress'
});

/**
 * Module : neoui-radio
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-03 11:16:00
 */

var Radio = u.BaseComponent.extend({
    Constant_: {
        TINY_TIMEOUT: 0.001
    },

    _CssClasses: {
        IS_FOCUSED: 'is-focused',
        IS_DISABLED: 'is-disabled',
        IS_CHECKED: 'is-checked',
        IS_UPGRADED: 'is-upgraded',
        JS_RADIO: 'u-radio',
        RADIO_BTN: 'u-radio-button',
        RADIO_OUTER_CIRCLE: 'u-radio-outer-circle',
        RADIO_INNER_CIRCLE: 'u-radio-inner-circle'
    },

    init: function init() {
        this._btnElement = this.element.querySelector('input');

        this._boundChangeHandler = this._onChange.bind(this);
        this._boundFocusHandler = this._onChange.bind(this);
        this._boundBlurHandler = this._onBlur.bind(this);
        this._boundMouseUpHandler = this._onMouseup.bind(this);

        var outerCircle = document.createElement('span');
        addClass(outerCircle, this._CssClasses.RADIO_OUTER_CIRCLE);

        var innerCircle = document.createElement('span');
        addClass(innerCircle, this._CssClasses.RADIO_INNER_CIRCLE);

        this.element.appendChild(outerCircle);
        this.element.appendChild(innerCircle);

        var rippleContainer;
        //if (this.element.classList.contains( this._CssClasses.RIPPLE_EFFECT)) {
        //  addClass(this.element,this._CssClasses.RIPPLE_IGNORE_EVENTS);
        rippleContainer = document.createElement('span');
        //rippleContainer.classList.add(this._CssClasses.RIPPLE_CONTAINER);
        //rippleContainer.classList.add(this._CssClasses.RIPPLE_EFFECT);
        //rippleContainer.classList.add(this._CssClasses.RIPPLE_CENTER);
        rippleContainer.addEventListener('mouseup', this._boundMouseUpHandler);

        //var ripple = document.createElement('span');
        //ripple.classList.add(this._CssClasses.RIPPLE);

        //rippleContainer.appendChild(ripple);
        this.element.appendChild(rippleContainer);
        new URipple(rippleContainer);
        //}

        this._btnElement.addEventListener('change', this._boundChangeHandler);
        this._btnElement.addEventListener('focus', this._boundFocusHandler);
        this._btnElement.addEventListener('blur', this._boundBlurHandler);
        this.element.addEventListener('mouseup', this._boundMouseUpHandler);

        this._updateClasses();
        addClass(this.element, this._CssClasses.IS_UPGRADED);
    },

    _onChange: function _onChange(event) {
        // Since other radio buttons don't get change events, we need to look for
        // them to update their classes.
        var radios = document.querySelectorAll('.' + this._CssClasses.JS_RADIO);
        for (var i = 0; i < radios.length; i++) {
            var button = radios[i].querySelector('.' + this._CssClasses.RADIO_BTN);
            // Different name == different group, so no point updating those.
            if (button.getAttribute('name') === this._btnElement.getAttribute('name')) {
                if (radios[i]['u.Radio']) {
                    radios[i]['u.Radio']._updateClasses();
                }
            }
        }
        this.trigger('change', {
            isChecked: this._btnElement.checked
        });
    },

    /**
     * Handle focus.
     *
     * @param {Event} event The event that fired.
     * @private
     */
    _onFocus: function _onFocus(event) {
        addClass(this.element, this._CssClasses.IS_FOCUSED);
    },

    /**
     * Handle lost focus.
     *
     * @param {Event} event The event that fired.
     * @private
     */
    _onBlur: function _onBlur(event) {
        removeClass(this.element, this._CssClasses.IS_FOCUSED);
    },

    /**
     * Handle mouseup.
     *
     * @param {Event} event The event that fired.
     * @private
     */
    _onMouseup: function _onMouseup(event) {
        this._blur();
    },

    /**
     * Update classes.
     *
     * @private
     */
    _updateClasses: function _updateClasses() {
        this.checkDisabled();
        this.checkToggleState();
    },

    /**
     * Add blur.
     *
     * @private
     */
    _blur: function _blur() {

        // TODO: figure out why there's a focus event being fired after our blur,
        // so that we can avoid this hack.
        window.setTimeout(function () {
            this._btnElement.blur();
        }.bind(this), /** @type {number} */this.Constant_.TINY_TIMEOUT);
    },

    // Public methods.

    /**
     * Check the components disabled state.
     *
     * @public
     */
    checkDisabled: function checkDisabled() {
        if (this._btnElement.disabled) {
            addClass(this.element, this._CssClasses.IS_DISABLED);
        } else {
            removeClass(this.element, this._CssClasses.IS_DISABLED);
        }
    },

    /**
     * Check the components toggled state.
     *
     * @public
     */
    checkToggleState: function checkToggleState() {
        if (this._btnElement.checked) {
            addClass(this.element, this._CssClasses.IS_CHECKED);
        } else {
            removeClass(this.element, this._CssClasses.IS_CHECKED);
        }
    },

    /**
     * Disable radio.
     *
     * @public
     */
    disable: function disable() {
        this._btnElement.disabled = true;
        this._updateClasses();
    },

    /**
     * Enable radio.
     *
     * @public
     */
    enable: function enable() {
        this._btnElement.disabled = false;
        this._updateClasses();
    },

    /**
     * Check radio.
     *
     * @public
     */
    check: function check() {
        this._btnElement.checked = true;
        this._updateClasses();
    },

    uncheck: function uncheck() {
        this._btnElement.checked = false;
        this._updateClasses();
    }

});

if (u.compMgr) u.compMgr.regComp({
    comp: Radio,
    compAsString: 'u.Radio',
    css: 'u-radio'
});

/**
 * Module : neoui-refer
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-03 11:29:40
 */
var Refer = function Refer(options) {
    this.options = extend({}, Refer.DEFAULTS, options);
    var contentId = this.options['contentId'];
    // if (isEmptyObject(contentId))
    //     throw new Error('contentId is null');
    this.params = this.options['params'];
    this.create();
    this.loaded = false;
};

Refer.DEFAULTS = {
    isPOPMode: true,
    searchInput: null,
    contentId: 'referWrap',
    okId: 'okBtn', //暂时没用
    cancelId: 'cancelBtn', //暂时没用
    width: null,
    height: null,
    title: '参照',
    setVal: function setVal() {},
    onOk: function onOk() {},
    onCancel: function onCancel() {}
};

Refer.fn = Refer.prototype;

Refer.fn.create = function () {
    var self = this;
    self.setVal = this.options.setVal;
    self.searchInput = this.options.searchInput;

    var prefixID = this.options.contentId.replace(/[^\w\s]/gi, '\\$&');
    if (!this.options.isPOPMode) {
        //TODO 后续支持非弹窗模式

        //if ($('#' + this.options.contentId).length === 0) {
        //    $('body').append($('<div>').attr('id', this.options.contentId));
        //}
        //this.$contentEle = $('#' + prefixID)
        //this.$okBtn = $('#' + prefixID + this.options.okId)
        //this.$cancelBtn = $('#' + prefixID + this.options.cancelId)
    } else {
        var dialog$$1 = document.querySelector('#' + prefixID);
        self.isDefaultDialog = true;
        if (dialog$$1 == null) {
            //var d = document.createElement('DIV')
            //d.innerHTML = '<div class="modal" id="' + prefixID + '"><div class="modal-dialog"><div class="modal-content">' + '<div class="modal-header"><h4 class="modal-title">Modal title</h4></div>' + '<div class="modal-body"></div><div class="modal-footer">' + '<button   type="button" class="btn btn-primary okBtn">确定</button>' + '<button  type="button" class="btn btn-default cancelBtn" data-dismiss="modal">取消</button></div></div></div></div>'
            dialog$$1 = makeDOM('	<div style="display:none;height:100%" id="' + prefixID + '">' + '<div class="u-msg-title"><h4 class="title">单据名称</h4></div>' + '<div class="u-msg-content">' + '<div class="content"></div>' + '</div>' + '<div class="u-msg-footer">' + '<button class="u-msg-ok u-button">' + trans('public.confirm', '确定') + '<span class="u-button-container"><span class="u-ripple"></span></span></button>' + '<button class="u-msg-cancel u-button">' + trans('public.cancel', '取消') + '<span class="u-button-container"><span class="u-ripple"></span></span></button>' + '</div>' + '</div>');
            document.body.appendChild(dialog$$1);
            //dialog = document.body.querySelector('#' + prefixID);
        }
        //this.$contentEle = dialog.find('.modal-body');
        this.titleDiv = dialog$$1.querySelector('.title');
        this.contentDiv = dialog$$1.querySelector('.content');
        this.okBtn = dialog$$1.querySelector('.u-msg-ok');
        this.cancelBtn = dialog$$1.querySelector('.u-msg-cancel');
        this.dialog = dialog$$1;
        //if (this.options.width)
        //    dialog.find('.modal-content').css('width', this.options.width)
        //if (this.options.height)
        //    this.$contentEle.css('height', this.options.height)
        //this.dialog.find('.modal-title').html(this.options.title)
        this.titleDiv.innerHTML = this.options.title;
    }
    on$1(this.okBtn, 'click', function () {
        self.submit();
    });

    on$1(this.cancelBtn, 'click', function () {
        self.cancel();
    });
};

Refer.fn.submit = function () {
    var data = this.submitData();
    this.options.onOk(data);
    Plugin$1.destroy(this);
};

Refer.fn.cancel = function () {
    this.options.onCancel();
    Plugin$1.destroy(this);
};

Refer.fn.open = function () {
    var self = this;
    if (self.isDefaultDialog) {
        var opt = { id: this.options.contentId, content: '#' + this.options.contentId, hasCloseMenu: true };
        if (this.options.height) opt.height = this.options.height;
        if (this.options.width) opt.width = this.options.width;
        self.modalDialog = dialog(opt);
        //self.dialog.modal('show')
    }
    if (this.options['module']) {
        self.contentDiv.innerHTML = this.options['module'].template;
        this.options['module'].init ? this.options['module'].init(self) : '';
    } else if (require) {
        require([this.options.pageUrl], function (module) {
            self.contentDiv.innerHTML = module.template;
            module.init ? module.init(self) : '';
            self.loaded = true;
        });
    }
};

/**
 * 参照页面中需注册此方法
 */
Refer.fn.registerSubmitFunc = function (func) {
    this.submitData = func;
};

Refer.fn.submitData = function () {};

var Plugin$1 = function Plugin(options) {
    var r = new Refer(options);

    Plugin.addRefer(r);
    r.open();
    return r;
};

Refer.fn.destroy = function () {
    if (this.dialog) {
        if (this.isDefaultDialog) {
            //this.dialog.modal('hide');
            //	            this.dialog.modal('removeBackdrop');
            this.modalDialog.close();
        }
        //this.dialog.parent().remove();
        this.dialog.parentElement.removeChild(this.dialog);
    }
    delete this.options;
};

/**
 * 参照实列
 */
Plugin$1.instances = {};

Plugin$1.openRefer = function (options) {
    var r = new Refer(options);
    Plugin$1.addRefer(r);
    r.open();
};

Plugin$1.getRefer = function (id) {
    return Plugin$1.instances[id];
};

Plugin$1.addRefer = function (refer) {
    Plugin$1.instances[refer.options.id] = refer;
};

Plugin$1.destroy = function (refer) {
    var r = Plugin$1.instances[refer.options.id];
    delete Plugin$1.instances[refer.options.id];
    r.destroy();
};

var refer = Plugin$1;

/**
 * Module : neoui-slidePanel
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-03 13:18:48
 */

var slidePanelTemplate = ['<div class="slidePanel slidePanel-right  slidePanel-show slidePanel-dragging" style="transform:translate3d(100%,0,0);">', '<div class="slidePanel-content site-sidebar-content"></div>', '<div class="slidePanel-handler"></div>', '</div>'];

var slidePanel = function slidePanel(options) {
	var url = options['url'],
	    width = options['width'] || '700px',
	    callback = options['callback'] || function () {},
	    slideDom = makeDOM(slidePanelTemplate.join('')),
	    overlayDiv = makeModal(slideDom);
	slideDom.style.width = width;
	overlayDiv.style.opacity = 0;
	document.body.appendChild(slideDom);
	//overlayDiv.style.opacity = 0.5;
	ajax({
		type: 'get',
		url: url,
		success: function success(data) {
			var content = slideDom.querySelector('.slidePanel-content');
			content.innerHTML = data;
			callback();
			setTimeout(function () {
				slideDom.style.transform = 'translate3d(0,0,0)';
				overlayDiv.style.opacity = 0.5;
			}, 1);
		}
	});

	on$1(overlayDiv, 'click', function () {
		on$1(slideDom, 'transitionend', function () {
			document.body.removeChild(slideDom);
			document.body.removeChild(overlayDiv);
		});
		on$1(slideDom, 'webkitTransitionEnd', function () {
			document.body.removeChild(slideDom);
			document.body.removeChild(overlayDiv);
		});
		slideDom.style.transform = 'translate3d(100%,0,0)';
		overlayDiv.style.opacity = 0;
		if (env$1.isIE8) {
			document.body.removeChild(slideDom);
			document.body.removeChild(overlayDiv);
		}
	});

	return {
		close: function close() {
			overlayDiv.click();
		}
	};
};

/**
 * Module : neoui-switch
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-03 13:39:55
 */

var Switch = u.BaseComponent.extend({
	_Constant: {
		TINY_TIMEOUT: 0.001
	},

	_CssClasses: {
		INPUT: 'u-switch-input',
		TRACK: 'u-switch-track',
		THUMB: 'u-switch-thumb',
		FOCUS_HELPER: 'u-switch-focus-helper',
		IS_FOCUSED: 'is-focused',
		IS_DISABLED: 'is-disabled',
		IS_CHECKED: 'is-checked'
	},

	init: function init() {
		this._inputElement = this.element.querySelector('.' + this._CssClasses.INPUT);

		var track = document.createElement('div');
		addClass(track, this._CssClasses.TRACK);

		var thumb = document.createElement('div');
		addClass(thumb, this._CssClasses.THUMB);
		/*swith按钮点击时，会闪一下，注释以下代码，取消此效果*/
		/*var focusHelper = document.createElement('span');
  addClass(focusHelper, this._CssClasses.FOCUS_HELPER);
  	thumb.appendChild(focusHelper);*/

		this.element.appendChild(track);
		this.element.appendChild(thumb);

		this.boundMouseUpHandler = this._onMouseUp.bind(this);

		//if (this.element.classList.contains(this._CssClasses.RIPPLE_EFFECT)) {
		//  addClass(this.element,this._CssClasses.RIPPLE_IGNORE_EVENTS);
		this._rippleContainerElement = document.createElement('span');
		//this._rippleContainerElement.classList.add(this._CssClasses.RIPPLE_CONTAINER);
		//this._rippleContainerElement.classList.add(this._CssClasses.RIPPLE_EFFECT);
		//this._rippleContainerElement.classList.add(this._CssClasses.RIPPLE_CENTER);
		this._rippleContainerElement.addEventListener('mouseup', this.boundMouseUpHandler);

		//var ripple = document.createElement('span');
		//ripple.classList.add(this._CssClasses.RIPPLE);

		//this._rippleContainerElement.appendChild(ripple);
		this.element.appendChild(this._rippleContainerElement);
		new URipple(this._rippleContainerElement);
		//}

		this.boundChangeHandler = this._onChange.bind(this);
		this.boundFocusHandler = this._onFocus.bind(this);
		this.boundBlurHandler = this._onBlur.bind(this);

		this._inputElement.addEventListener('change', this.boundChangeHandler);
		this._inputElement.addEventListener('focus', this.boundFocusHandler);
		this._inputElement.addEventListener('blur', this.boundBlurHandler);
		this.element.addEventListener('mouseup', this.boundMouseUpHandler);

		this._updateClasses();
		addClass(this.element, 'is-upgraded');
	},

	_onChange: function _onChange(event) {
		this._updateClasses();
		this.trigger('change', {
			isChecked: this._inputElement.checked
		});
	},

	_onFocus: function _onFocus(event) {
		addClass(this.element, this._CssClasses.IS_FOCUSED);
	},

	_onBlur: function _onBlur(event) {
		removeClass(this.element, this._CssClasses.IS_FOCUSED);
	},

	_onMouseUp: function _onMouseUp(event) {
		this._blur();
	},

	_updateClasses: function _updateClasses() {
		this.checkDisabled();
		this.checkToggleState();
	},

	_blur: function _blur() {
		// TODO: figure out why there's a focus event being fired after our blur,
		// so that we can avoid this hack.
		window.setTimeout(function () {
			this._inputElement.blur();
		}.bind(this), /** @type {number} */this._Constant.TINY_TIMEOUT);
	},

	// Public methods.

	checkDisabled: function checkDisabled() {
		if (this._inputElement.disabled) {
			addClass(this.element, this._CssClasses.IS_DISABLED);
		} else {
			removeClass(this.element, this._CssClasses.IS_DISABLED);
		}
	},

	checkToggleState: function checkToggleState() {
		if (this._inputElement.checked) {
			addClass(this.element, this._CssClasses.IS_CHECKED);
		} else {
			removeClass(this.element, this._CssClasses.IS_CHECKED);
		}
	},

	isChecked: function isChecked() {
		//return hasClass(this.element,this._CssClasses.IS_CHECKED);
		return this._inputElement.checked;
	},

	toggle: function toggle() {
		//return;
		if (this.isChecked()) {
			this.uncheck();
		} else {
			this.check();
		}
	},

	disable: function disable() {
		this._inputElement.disabled = true;
		this._updateClasses();
	},

	enable: function enable() {
		this._inputElement.disabled = false;
		this._updateClasses();
	},

	check: function check() {
		this._inputElement.checked = true;
		this._updateClasses();
	},

	uncheck: function uncheck() {
		this._inputElement.checked = false;
		this._updateClasses();
	}

});
if (u.compMgr) u.compMgr.regComp({
	comp: Switch,
	compAsString: 'u.Switch',
	css: 'u-switch'
});

/**
 * Module : neoui-tabs
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-03 14:12:27
 */

var Tabs = u.BaseComponent.extend({
    _Constant: {},
    _CssClasses: {
        TAB_CLASS: 'u-tabs__tab',
        PANEL_CLASS: 'u-tabs__panel',
        ACTIVE_CLASS: 'is-active',
        UPGRADED_CLASS: 'is-upgraded',

        U_JS_RIPPLE_EFFECT: 'u-js-ripple-effect',
        U_RIPPLE_CONTAINER: 'u-tabs__ripple-container',
        U_RIPPLE: 'u-ripple',
        U_JS_RIPPLE_EFFECT_IGNORE_EVENTS: 'u-js-ripple-effect--ignore-events'
    },

    /**
     * Handle clicks to a tabs component
     *
     * @private
     */
    initTabs_: function initTabs_() {
        addClass(this.element, this._CssClasses.U_JS_RIPPLE_EFFECT_IGNORE_EVENTS);

        // Select element tabs, document panels
        this.tabs_ = this.element.querySelectorAll('.' + this._CssClasses.TAB_CLASS);
        this.panels_ = this.element.querySelectorAll('.' + this._CssClasses.PANEL_CLASS);

        // Create new tabs for each tab element
        for (var i = 0; i < this.tabs_.length; i++) {
            new Tab(this.tabs_[i], this);
        }
        addClass(this.element, this._CssClasses.UPGRADED_CLASS);
    },

    /**
     * Reset tab state, dropping active classes
     *
     * @private
     */
    resetTabState_: function resetTabState_() {
        for (var k = 0; k < this.tabs_.length; k++) {
            removeClass(this.tabs_[k], this._CssClasses.ACTIVE_CLASS);
        }
    },

    /**
     * Reset panel state, droping active classes
     *
     * @private
     */
    resetPanelState_: function resetPanelState_() {
        for (var j = 0; j < this.panels_.length; j++) {
            removeClass(this.panels_[j], this._CssClasses.ACTIVE_CLASS);
        }
    },
    show: function show(itemId) {
        var panel = this.element.querySelector('#' + itemId);
        var tab = this.element.querySelector("[href='#" + itemId + "']");
        this.resetTabState_();
        this.resetPanelState_();
        addClass(tab, this._CssClasses.ACTIVE_CLASS);
        addClass(panel, this._CssClasses.ACTIVE_CLASS);
    },
    getIndex: function getIndex(tab) {
        var tabs = this.tabs_;
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i] == tab) return i;
        }
        return -1;
    },

    /**
     * Initialize element.
     */
    init: function init() {
        if (this.element) {
            this.initTabs_();
        }
    }
});

/**
 * Constructor for an individual tab.
 *
 * @constructor
 * @param {Element} tab The HTML element for the tab.
 * @param {Tabs} ctx The Tabs object that owns the tab.
 */
function Tab(tab, ctx) {
    if (tab) {
        var rippleContainer = document.createElement('span');
        addClass(rippleContainer, ctx._CssClasses.U_RIPPLE_CONTAINER);
        addClass(rippleContainer, ctx._CssClasses.U_JS_RIPPLE_EFFECT);
        var ripple = document.createElement('span');
        addClass(ripple, ctx._CssClasses.U_RIPPLE);
        rippleContainer.appendChild(ripple);
        tab.appendChild(rippleContainer);

        tab.ripple = new Ripple(tab);

        tab.addEventListener('click', function (e) {
            stopEvent(e);
            // e.preventDefault();
            var href = tab.href.split('#')[1];
            var panel = ctx.element.querySelector('#' + href);
            ctx.resetTabState_();
            ctx.resetPanelState_();
            addClass(tab, ctx._CssClasses.ACTIVE_CLASS);
            addClass(panel, ctx._CssClasses.ACTIVE_CLASS);
            var index = ctx.getIndex(tab);
            ctx.trigger('tabchange', {
                tabDom: tab,
                index: index
            });
        });
    }
}

if (u.compMgr) u.compMgr.regComp({
    comp: Tabs,
    compAsString: 'u.Tabs',
    css: 'u-tabs'
});

/**
 * Module : neoui-tooltip
 * Author : Kvkens(yueming@yonyou.com)
 * Date   : 2016-08-06 13:26:06
 */
var Tooltip = function Tooltip(element, options) {
	this.init(element, options);
	//this.show()
};

Tooltip.prototype = {
	defaults: {
		animation: true,
		placement: 'top',
		//selector: false,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow" ></div><div class="tooltip-inner"></div></div>',
		trigger: 'hover focus',
		title: '',
		delay: 0,
		html: false,
		container: false,
		viewport: {
			selector: 'body',
			padding: 0
		},
		showFix: false
	},
	init: function init(element, options) {
		var oThis = this;
		this.options = extend({}, this.defaults, options);
		this._viewport = this.options.viewport && document.querySelector(this.options.viewport.selector || this.options.viewport);
		//tip模板对应的dom
		this.tipDom = makeDOM(this.options.template);
		addClass(this.tipDom, this.options.placement);
		if (this.options.colorLevel) {
			addClass(this.tipDom, this.options.colorLevel);
		}
		this.arrrow = this.tipDom.querySelector('.tooltip-arrow');

		//判断如果是批量插入tooltip的
		if (element && element.length) {
			$(element).each(function () {
				this.element = $(this)[0];
				var triggers = oThis.options.trigger.split(' ');
				for (var i = triggers.length; i--;) {
					var trigger$$1 = triggers[i];
					if (trigger$$1 == 'click') {
						on$1(this.element, 'click', this.toggle.bind(oThis, this.element));
					} else if (trigger$$1 != 'manual') {
						var eventIn = trigger$$1 == 'hover' ? 'mouseenter' : 'focusin';
						var eventOut = trigger$$1 == 'hover' ? 'mouseleave' : 'focusout';
						on$1(this.element, eventIn, oThis.enter.bind(oThis, this.element));
						on$1(this.element, eventOut, oThis.leave.bind(oThis, this.element));
					}
				}
				oThis.options.title = oThis.options.title || this.element.getAttribute('title');
				this.element.removeAttribute('title');
				if (oThis.options.delay && typeof oThis.options.delay == 'number') {
					oThis.options.delay = {
						show: oThis.options.delay,
						hide: oThis.options.delay
					};
				}
			});
		} else {
			this.element = element;
			var triggers = this.options.trigger.split(' ');

			for (var i = triggers.length; i--;) {
				var trigger$$1 = triggers[i];
				if (trigger$$1 == 'click') {
					on$1(this.element, 'click', this.toggle.bind(this));
				} else if (trigger$$1 != 'manual') {
					var eventIn = trigger$$1 == 'hover' ? 'mouseenter' : 'focusin';
					var eventOut = trigger$$1 == 'hover' ? 'mouseleave' : 'focusout';
					on$1(this.element, eventIn, oThis.enter.bind(this));
					on$1(this.element, eventOut, oThis.leave.bind(this));
				}
			}
			this.options.title = this.options.title || this.element.getAttribute('title');
			this.element.removeAttribute('title');
			if (this.options.delay && typeof this.options.delay == 'number') {
				this.options.delay = {
					show: this.options.delay,
					hide: this.options.delay
				};
			}
			// tip容器,默认为当前元素的parent
			this.container = this.options.container ? document.querySelector(this.options.container) : this.element.parentNode;
		}
	},
	enter: function enter(element) {
		if (arguments.length > 1) {
			//将tooltip中的element指定为其进入的当前element
			this.element = element;
			// tip容器,默认为当前元素的parent
			this.container = this.options.container ? document.querySelector(this.options.container) : element.parentNode;
		}
		var self = this;
		clearTimeout(this.timeout);
		this.hoverState = 'in';
		if (!this.options.delay || !this.options.delay.show) return this.show();

		this.timeout = setTimeout(function () {
			if (self.hoverState == 'in') self.show();
		}, this.options.delay.show);
	},
	leave: function leave() {
		var self = this;
		clearTimeout(this.timeout);
		self.hoverState = 'out';
		if (!self.options.delay || !self.options.delay.hide) return self.hide();
		self.timeout = setTimeout(function () {
			if (self.hoverState == 'out') self.hide();
		}, self.options.delay.hide);
	},
	show: function show() {
		var self = this;
		this.tipDom.querySelector('.tooltip-inner').innerHTML = this.options.title;
		this.tipDom.style.zIndex = getZIndex();

		if (this.options.showFix) {
			document.body.appendChild(this.tipDom);
			this.tipDom.style.position = 'fixed';
			showPanelByEle({
				ele: this.element,
				panel: this.tipDom,
				position: "top"
			});
			// fix情况下滚动时隐藏
			on$1(document, 'scroll', function () {
				self.hide();
			});
		} else {
			this.container.appendChild(this.tipDom);
			var inputLeft = this.element.offsetLeft;
			var inputTop = this.element.offsetTop;
			var inputWidth = this.element.offsetWidth;
			var inputHeight = this.element.offsetHeight;
			var topWidth = this.tipDom.offsetWidth;
			var topHeight = this.tipDom.offsetHeight;
			var tipDomleft, tipDomTop;

			if (this.options.placement == 'top') {
				// 上部提示

				this.left = this.element.offsetLeft + inputWidth / 2;
				this.top = this.element.offsetTop - topHeight;
				// 水平居中
				tipDomleft = this.left - this.tipDom.clientWidth / 2 + 'px';
				tipDomTop = this.top + 'px';
			} else if (this.options.placement == 'bottom') {
				// 下边提示
				this.left = this.element.offsetLeft + inputWidth / 2;
				this.top = this.element.offsetTop + topHeight;
				// 水平居中
				tipDomleft = this.left - this.tipDom.clientWidth / 2 + 'px';
				tipDomTop = this.top + 'px';
			} else if (this.options.placement == 'left') {
				// 左边提示
				this.left = this.element.offsetLeft;
				this.top = this.element.offsetTop + topHeight / 2;
				tipDomleft = this.left - this.tipDom.clientWidth + 'px';

				tipDomTop = this.top - this.tipDom.clientHeight / 2 + 'px';
			} else {
				// 右边提示

				this.left = this.element.offsetLeft + inputWidth;
				this.top = this.element.offsetTop + topHeight / 2;
				tipDomleft = this.left + 'px';
				tipDomTop = this.top - this.tipDom.clientHeight / 2 + 'px';
			}

			this.tipDom.style.left = tipDomleft;
			this.tipDom.style.top = tipDomTop;
		}

		addClass(this.tipDom, 'active');

		// var placement = this.options.placement;
		// var pos = this.getPosition()
		// var actualWidth = this.tipDom.offsetWidth
		// var actualHeight = this.tipDom.offsetHeight
		// var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

		// this.applyPlacement(calculatedOffset, placement)
	},
	hide: function hide() {
		if (this.options.showFix) {
			if (document.body.contains(this.tipDom)) {
				removeClass(this.tipDom, 'active');
				document.body.removeChild(this.tipDom);
			}
		} else {
			if (this.container.contains(this.tipDom)) {
				removeClass(this.tipDom, 'active');
				this.container.removeChild(this.tipDom);
			}
		}
	},
	applyPlacement: function applyPlacement(offset, placement) {
		var width = this.tipDom.offsetWidth;
		var height = this.tipDom.offsetHeight;

		// manually read margins because getBoundingClientRect includes difference
		var marginTop = parseInt(this.tipDom.style.marginTop, 10);
		var marginLeft = parseInt(this.tipDom.style.marginTop, 10);

		// we must check for NaN for ie 8/9
		if (isNaN(marginTop)) marginTop = 0;
		if (isNaN(marginLeft)) marginLeft = 0;

		offset.top = offset.top + marginTop;
		offset.left = offset.left + marginLeft;

		// $.fn.offset doesn't round pixel values
		// so we use setOffset directly with our own function B-0
		this.tipDom.style.left = offset.left + 'px';
		this.tipDom.style.top = offset.top + 'px';

		addClass(this.tipDom, 'active');

		// check to see if placing tip in new offset caused the tip to resize itself
		var actualWidth = this.tipDom.offsetWidth;
		var actualHeight = this.tipDom.offsetHeight;

		if (placement == 'top' && actualHeight != height) {
			offset.top = offset.top + height - actualHeight;
		}
		var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);

		if (delta.left) offset.left += delta.left;else offset.top += delta.top;

		var isVertical = /top|bottom/.test(placement);
		var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
		var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight';

		//$tip.offset(offset)
		this.tipDom.style.left = offset.left + 'px';
		this.tipDom.style.top = offset.top - 4 + 'px';

		// this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
	},
	getCalculatedOffset: function getCalculatedOffset(placement, pos, actualWidth, actualHeight) {
		return placement == 'bottom' ? {
			top: pos.top + pos.height,
			left: pos.left + pos.width / 2 - actualWidth / 2
		} : placement == 'top' ? {
			top: pos.top - actualHeight,
			left: pos.left + pos.width / 2 - actualWidth / 2
		} : placement == 'left' ? {
			top: pos.top + pos.height / 2 - actualHeight / 2,
			left: pos.left - actualWidth
		} :
		/* placement == 'right' */
		{
			top: pos.top + pos.height / 2 - actualHeight / 2,
			left: pos.left + pos.width
		};
	},
	getPosition: function getPosition(el) {
		el = el || this.element;
		var isBody = el.tagName == 'BODY';
		var elRect = el.getBoundingClientRect();
		if (elRect.width == null) {
			// width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
			elRect = extend({}, elRect, {
				width: elRect.right - elRect.left,
				height: elRect.bottom - elRect.top
			});
		}
		var elOffset = isBody ? {
			top: 0,
			left: 0
		} : {
			top: el.offsetTop,
			left: el.offsetLeft
		};
		var scroll = {
			scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : el.scrollTop
		};
		var outerDims = isBody ? {
			width: window.innerWidth || document.body.clientWidth,
			height: window.innerHeight || document.body.clientHeight
		} : null;
		//return extend({}, elRect, scroll, outerDims, elOffset)
		return extend({}, elRect, scroll, outerDims);
	},
	getViewportAdjustedDelta: function getViewportAdjustedDelta(placement, pos, actualWidth, actualHeight) {
		var delta = {
			top: 0,
			left: 0
		};
		if (!this._viewport) return delta;

		var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
		var viewportDimensions = this.getPosition(this._viewport);

		if (/right|left/.test(placement)) {
			var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
			var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
			if (topEdgeOffset < viewportDimensions.top) {
				// top overflow
				delta.top = viewportDimensions.top - topEdgeOffset;
			} else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
				// bottom overflow
				delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
			}
		} else {
			var leftEdgeOffset = pos.left - viewportPadding;
			var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
			if (leftEdgeOffset < viewportDimensions.left) {
				// left overflow
				delta.left = viewportDimensions.left - leftEdgeOffset;
			} else if (rightEdgeOffset > viewportDimensions.width) {
				// right overflow
				delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
			}
		}

		return delta;
	},
	replaceArrow: function replaceArrow(delta, dimension, isHorizontal) {
		if (isHorizontal) {
			this.arrow.style.left = 50 * (1 - delta / dimension) + '%';
			this.arrow.style.top = '';
		} else {
			this.arrow.style.top = 50 * (1 - delta / dimension) + '%';
			this.arrow.style.left = '';
		}
	},
	destory: function destory() {},
	setTitle: function setTitle(title) {
		this.options.title = title;
	}

};

/**
 * Module : neoui-validate
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-06 14:03:15
 */
var Validate = u.BaseComponent.extend({

    init: function init() {
        var self = this;
        this.$element = this.element;
        this.$form = this.form;
        this.referDom = this.$element;
        if (this.referDom.tagName !== 'INPUT' && this.referDom.tagName !== "TEXTAREA") {
            this.referDom = this.$element.querySelector('input');
            // 如果referDom的父元素不是this.$element说明时单选框、复选框。则referDom还为$element
            if (!this.referDom || this.referDom.parentNode !== this.$element) {
                this.referDom = this.$element;
            }
        }
        this.options = extend({}, this.DEFAULTS, this.options, JSON.parse(this.element.getAttribute('uvalidate')));
        this.required = false;
        this.timeout = null;
        this.tipAliveTime = this.options['tipAliveTime'] === undefined ? 3000 : this.options['tipAliveTime'];
        //所有属性优先级 ：  options参数  > attr属性  > 默认值
        this.required = this.options['required'] ? this.options['required'] : false;
        this.validType = this.options['validType'] ? this.options['validType'] : null;
        //校验模式  blur  submit
        this.validMode = this.options['validMode'] ? this.options['validMode'] : Validate.DEFAULTS.validMode;
        //空提示
        this.nullMsg = this.options['nullMsg'] ? this.options['nullMsg'] : Validate.NULLMSG[this.validType];
        // input输入提示
        this.inputMsg = Validate.INPUTMSG;
        //是否必填
        if (this.required && !this.nullMsg) this.nullMsg = Validate.NULLMSG['required'];
        //错误必填
        this.errorMsg = this.options['errorMsg'] ? this.options['errorMsg'] : Validate.ERRORMSG[this.validType];
        //正则校验
        this.regExp = this.options['reg'] ? this.options['reg'] : Validate.REG[this.validType];
        try {
            if (typeof this.regExp == 'string') this.regExp = eval(this.regExp);
        } catch (e) {}

        this.notipFlag = this.options['notipFlag']; // 错误信息提示方式是否为tip，默认为false
        this.hasSuccess = this.options['hasSuccess']; //是否含有正确提示

        this.showFix = this.options['showFix'];

        //提示div的id 为空时使用tooltop来提示
        this.tipId = this.options['tipId'] ? this.options['tipId'] : null;
        //校验成功提示信息的div
        this.successId = this.options['successId'] ? this.options['successId'] : null;

        // 要求显示成功提示，并没有成功提示dom的id时，则创建成功提示dom
        if (this.hasSuccess && !this.successId) {
            this.successId = makeDOM('<span class="u-form-control-success uf uf-correct" ></span>');
            // 因为参照获取的是第一个span，因此添加到最后
            // if (this.referDom.nextSibling) {
            //     this.referDom.parentNode.insertBefore(this.successId, this.referDom.nextSibling);
            // } else {
            this.referDom.parentNode.appendChild(this.successId);
            // }
        }
        //不是默认的tip提示方式并且tipId没有定义时创建默认tipid
        if (this.notipFlag && !this.tipId) {
            this.tipId = makeDOM('<span class="u-form-control-info uf uf-exc-c-o "></span>');
            this.referDom.parentNode.appendChild(this.tipId);
            // 因为参照获取的是第一个span，因此添加到最后
            // if (this.referDom.nextSibling) {
            //     this.referDom.parentNode.insertBefore(this.tipId, this.referDom.nextSibling);
            // } else {
            this.referDom.parentNode.appendChild(this.tipId);
            // }
        }
        //提示框位置
        this.placement = this.options['placement'] ? this.options['placement'] : Validate.DEFAULTS.placement;
        //
        this.minLength = this.options['minLength'] > 0 ? this.options['minLength'] : null;
        this.maxLength = this.options['maxLength'] > 0 ? this.options['maxLength'] : null;
        this.min = this.options['min'] !== undefined ? this.options['min'] : null;
        this.max = this.options['max'] !== undefined ? this.options['max'] : null;
        this.minNotEq = this.options['minNotEq'] !== undefined ? this.options['minNotEq'] : null;
        this.maxNotEq = this.options['maxNotEq'] !== undefined ? this.options['maxNotEq'] : null;
        this.min = isNumber$1(this.min) ? this.min : null;
        this.max = isNumber$1(this.max) ? this.max : null;
        this.minNotEq = isNumber$1(this.minNotEq) ? this.minNotEq : null;
        this.maxNotEq = isNumber$1(this.maxNotEq) ? this.maxNotEq : null;
        this.create();
    }
});

Validate.fn = Validate.prototype;
//Validate.tipTemplate = '<div class="tooltip" role="tooltip"><div class="tooltip-arrow tooltip-arrow-c"></div><div class="tooltip-arrow"></div><div class="tooltip-inner" style="color:#ed7103;border:1px solid #ed7103;background-color:#fff7f0;"></div></div>'

Validate.DEFAULTS = {
    validMode: 'blur',
    placement: "top"
};

Validate.NULLMSG = {
    "required": trans('validate.required', "不能为空！"),
    "integer": trans('validate.integer', "请填写整数！"),
    "float": trans('validate.float', "请填写数字！"),
    "zipCode": trans('validate.zipCode', "请填写邮政编码！"),
    "phone": trans('validate.phone', "请填写手机号码！"),
    "landline": trans('validate.landline', "请填写座机号码！"),
    "email": trans('validate.email', "请填写邮箱地址！"),
    "url": trans('validate.url', "请填写网址！"),
    "datetime": trans('validate.datetime', "请填写日期！"),
    "phoneNumber": trans('validate.phoneNumber', "请填写正确号码！")

};

Validate.ERRORMSG = {
    "integer": trans('validate.error_integer', "整数格式不对！"),
    "float": trans('validate.error_float', "数字格式不对！"),
    "zipCode": trans('validate.error_zipCode', "邮政编码格式不对！"),
    "phone": trans('validate.error_phone', "手机号码格式不对！"),
    "landline": trans('validate.error_landline', "座机号码格式不对！"),
    "email": trans('validate.error_email', "邮箱地址格式不对！"),
    "idcard": trans('validate.error_email', "身份证格式不对！"),
    "url": trans('validate.error_url', "网址格式不对！"),
    "datetime": trans('validate.error_datetime', "日期格式不对！"),
    "phoneNumber": trans('validate.error_phoneNumber', "号码格式不对！")
};

Validate.INPUTMSG = {
    "minLength": trans('validate.input_minlength', "输入长度不能小于"),
    "maxLength": trans('validate.input_maxlength', "输入长度不能大于"),
    "unit": trans('validate.input_unit', "位"),
    "maxValue": trans('validate.input_maxvalue', "输入值不能大于"),
    "minValue": trans('validate.input_minvalue', "输入值不能小于"),
    "equalMax": trans('validate.input_equalMax', "输入值不能大于或等于"),
    "equalMin": trans('validate.input_equalMin', "输入值不能小于或等于")

};

Validate.REG = {
    "integer": /^-?\d+$/,
    "float": /^-?\d+(\.\d+)?$/,
    "zipCode": /^[0-9]{6}$/,
    // "phone": /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/,
    "phone": /^1[3|4|5|7|8]\d{9}$/,
    "idcard": /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
    "landline": /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/,
    "email": /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    "url": /^(\w+:\/\/)?\w+(\.\w+)+.*$/,
    "datetime": /^(?:19|20)[0-9][0-9]-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1])) (?:(?:[0-2][0-3])|(?:[0-1][0-9])):[0-5][0-9]:[0-5][0-9]$/,
    "PhoneNumber": /^\d+$/
};

Validate.fn.create = function () {
    if ($(this.element).attr('hasValidate')) {
        return;
    }
    var self = this;
    on$1(this.element, 'blur', function (e) {
        if (self.validMode == 'blur') {
            self.passed = self.doValid();
        }
    });
    on$1(this.element, 'focus', function (e) {
        //隐藏错误信息
        self.hideMsg();
    });
    on$1(this.element, 'change', function (e) {
        //隐藏错误信息
        self.hideMsg();
    });
    on$1(this.element, 'keydown', function (e) {
        var event = window.event || e;
        if (self["validType"] == "float") {
            var tmp = self.element.value;
            if (event.shiftKey) {
                event.returnValue = false;
                return false;
            } else if (event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46) {
                // tab键 左箭头 右箭头 delete键
                return true;
            } else if (event.ctrlKey && (event.keyCode == 67 || event.keyCode == 86)) {
                //复制粘贴
                return true;
            } else if (!(event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105 || inArray(event.keyCode, [8, 110, 190, 189, 109]) > -1)) {
                event.returnValue = false;
                return false;
            } else if ((!tmp || tmp.indexOf(".") > -1) && (event.keyCode == 190 || event.keyCode == 110)) {
                event.returnValue = false;
                return false;
            }

            if (tmp && (tmp + '').split('.')[0].length >= 25) {
                return false;
            }
        }
        if (self["validType"] == "integer") {
            var tmp = self.element.value;

            if (event.shiftKey) {
                event.returnValue = false;
                return false;
            } else if (event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46) {
                // tab键 左箭头 右箭头 delete键
                return true;
            } else if (event.ctrlKey && (event.keyCode == 67 || event.keyCode == 86)) {
                //复制粘贴
                return true;
            } else if (!(event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105 || inArray(event.keyCode, [8, 109, 189]) > -1)) {
                event.returnValue = false;
                return false;
            }

            if (tmp && (tmp + '').split('.')[0].length >= 25) {
                return false;
            }
        }
    });

    $(this.element).attr('hasValidate', true);
};

Validate.fn.updateOptions = function (options) {};

Validate.fn.doValid = function (options) {
    var self = this;
    var pValue;
    this.showMsgFlag = true;
    if (options) {
        pValue = options.pValue;
        this.showMsgFlag = options.showMsg;
    }
    this.needClean = false;
    //只读的也需要校验，所以注释
    // if (this.element && this.element.getAttribute("readonly")) return {passed:true}
    var value = null;
    if (typeof pValue != 'undefined') value = pValue;else if (this.element)
        // value = this.element.value
        value = this.element.value ? this.element.value : this.referDom.value;

    if (this.isEmpty(value) && this.required) {
        this.showMsg(this.nullMsg);
        return {
            passed: false,
            Msg: this.nullMsg
        };
    } else if (this.isEmpty(value) && !this.required) {
        return {
            passed: true
        };
    }
    if (this.regExp) {
        var reg = new RegExp(this.regExp);
        if (typeof value == 'number') value = value + "";else if (typeof value == 'boolean') return {
            passed: true
        };
        var r = value.match(reg);
        if (r === null || r === false) {
            this.showMsg(this.errorMsg);
            this.needClean = true;
            return {
                passed: false,
                Msg: this.errorMsg
            };
        }
    }
    if (this.minLength) {
        if (value.lengthb() < this.minLength) {
            var Msg = this.inputMsg.minLength + this.minLength + this.inputMsg.unit;
            this.showMsg(Msg);
            return {
                passed: false,
                Msg: Msg
            };
        }
    }
    if (this.maxLength) {
        if (value.lengthb() > this.maxLength) {
            var Msg = this.inputMsg.maxLength + this.maxLength + this.inputMsg.unit;
            this.showMsg(Msg);
            return {
                passed: false,
                Msg: Msg
            };
        }
    }
    if (this.max != undefined && this.max != null) {
        if (parseFloat(value) > this.max) {
            var Msg = this.inputMsg.maxValue + this.max;
            this.showMsg(Msg);
            return {
                passed: false,
                Msg: Msg
            };
        }
    }
    if (this.min != undefined && this.min != null) {
        if (parseFloat(value) < this.min) {
            var Msg = this.inputMsg.minValue + this.min;
            this.showMsg(Msg);
            return {
                passed: false,
                Msg: Msg
            };
        }
    }
    if (this.maxNotEq != undefined && this.maxNotEq != null) {
        if (parseFloat(value) >= this.maxNotEq) {
            var Msg = this.inputMsg.equalMax + this.maxNotEq;
            this.showMsg(Msg);
            return {
                passed: false,
                Msg: Msg
            };
        }
    }
    if (this.minNotEq != undefined && this.minNotEq != null) {
        if (parseFloat(value) <= this.minNotEq) {
            var Msg = this.inputMsg.equalMin + this.minNotEq;
            this.showMsg(Msg);
            return {
                passed: false,
                Msg: Msg
            };
        }
    }
    //succes时，将成功信息显示
    if (this.successId) {
        // addClass(this.element.parentNode,'u-has-success');
        var successDiv = this.successId;
        var successleft = this.referDom.offsetLeft + this.referDom.offsetWidth + 5;
        var successtop = this.referDom.offsetTop + 10;
        if (typeof successDiv === 'string') successDiv = document.getElementById(successDiv);
        successDiv.style.display = 'inline-block';
        successDiv.style.top = successtop + 'px';
        successDiv.style.left = successleft + 'px';
        clearTimeout(this.successtimeout);
        this.successtimeout = setTimeout(function () {
            // self.tooltip.hide();
            successDiv.style.display = 'none';
        }, this.tipAliveTime);
    }
    return {
        passed: true
    };
};

Validate.fn.check = Validate.fn.doValid;

//	Validate.fn.getValue = function() {
//		var inputval
//		if (this.$element.is(":radio")) {
//			inputval = this.$form.find(":radio[name='" + this.$element.attr("name") + "']:checked").val();
//		} else if (this.$element.is(":checkbox")) {
//			inputval = "";
//			this.$form.find(":checkbox[name='" + obj.attr("name") + "']:checked").each(function() {
//				inputval += $(this).val() + ',';
//			})
//		} else if (this.$element.is('div')) {
//			inputval = this.$element[0].trueValue;
//		} else {
//			inputval = this.$element.val();
//		}
//		inputval = $.trim(inputval);
//		return this.isEmpty(inputval) ? "" : inputval;
//	}

Validate.fn.some = Array.prototype.some ? Array.prototype.some : function () {
    var flag;
    for (var i = 0; i < this.length; i++) {
        if (typeof arguments[0] == "function") {
            flag = arguments[0](this[i]);
            if (flag) break;
        }
    }
    return flag;
};

Validate.fn.getValue = function () {
    var inputval = '';
    //checkbox、radio为u-meta绑定时
    var bool = this.some.call(this.$element.querySelectorAll('[type="checkbox"],[type="radio"]'), function (ele) {
        return ele.type == "checkbox" || ele.type == "radio";
    });
    if (this.$element.childNodes.length > 0 && bool) {
        var eleArr = this.$element.querySelectorAll('[type="checkbox"],[type="radio"]');
        var ele = eleArr[0];
        if (ele.type == "checkbox") {
            this.$element.querySelectorAll(":checkbox[name='" + $(ele).attr("name") + "']:checked").each(function () {
                inputval += $(this).val() + ',';
            });
        } else if (ele.type == "radio") {
            inputval = this.$element.querySelectorAll(":radio[name='" + $(ele).attr("name") + "']:checked").value;
        }
    } else if (this.$element.is(":radio")) {
        //valid-type 绑定
        inputval = this.$element.parent().querySelectorAll(":radio[name='" + this.$element.attr("name") + "']:checked").val();
    } else if (this.$element.is(":checkbox")) {
        inputval = "";
        this.$element.parent().find(":checkbox[name='" + this.$element.attr("name") + "']:checked").each(function () {
            inputval += $(this).val() + ',';
        });
    } else if (this.$element.find('input').length > 0) {
        inputval = this.$element.find('input').val();
    } else {
        inputval = this.$element.val();
    }
    inputval = inputval.trim;
    return this.isEmpty(inputval) ? "" : inputval;
};

Validate.fn.isEmpty = function (val) {
    return val === "" || val === undefined || val === null; //|| val === $.trim(this.$element.attr("tip"));
};

Validate.fn.showMsg = function (msg) {

    if (this.showMsgFlag == false || this.showMsgFlag == 'false') {
        return;
    }
    //因为grid中自定义的editType使用的是document.body,只处理校验不现实提示信息
    if (this.element == document.body) {
        return;
    }
    var self = this;
    if (this.tipId) {
        this.referDom.style.borderColor = 'rgb(241,90,74)';
        var tipdiv = this.tipId;
        if (typeof tipdiv === 'string') {
            tipdiv = document.getElementById(tipdiv);
        }
        tipdiv.innerHTML = msg;
        //如果notipFlag为true说明，可能是平台创建的，需要添加left、top值
        if (this.notipFlag) {
            var left = this.referDom.offsetLeft;
            var top = this.referDom.offsetTop + this.referDom.offsetHeight + 4;
            tipdiv.style.left = left + 'px';
            tipdiv.style.top = top + 'px';
        }

        tipdiv.style.display = 'block';
        // addClass(tipdiv.parentNode,'u-has-error');
        // $('#' + this.tipId).html(msg).show()
    } else {
        var tipOptions = {
            "title": msg,
            "trigger": "manual",
            "selector": "validtip",
            "placement": this.placement,
            "showFix": this.showFix
        };

        if (this.options.tipTemplate) tipOptions.template = this.options.tipTemplate;

        //月凯修改
        // if (!this.tooltip)
        this.referDom = this.$element;
        if (this.referDom.tagName !== 'INPUT' && this.referDom.tagName !== "TEXTAREA") {
            this.referDom = this.$element.querySelector('input');
            // 如果referDom的父元素不是this.$element说明时单选框、复选框。则referDom还为$element
            if (!this.referDom || this.referDom.parentNode !== this.$element) {
                this.referDom = this.$element;
            }
        }
        if (this.tooltip) {
            this.tooltip.hide();
        }

        this.tooltip = new Tooltip(this.referDom, tipOptions);
        this.tooltip.setTitle(msg);
        this.tooltip.show();
    }
    if (this.tipAliveTime !== -1) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            // self.tooltip.hide();
            self.hideMsg();
        }, this.tipAliveTime);
    }
};
Validate.fn.hideMsg = function () {
    //隐藏成功信息
    // if(this.successId||this.tipId){
    // 	document.getElementById(this.successId).style.display='none';
    // 	document.getElementById(this.tipId).style.display='none';
    // }

    // removeClass(this.element.parentNode,'u-has-error');
    // removeClass(this.element.parentNode,'u-has-success');

    if (this.tipId) {
        var tipdiv = this.tipId;
        if (typeof tipdiv === 'string') {
            tipdiv = document.getElementById(tipdiv);
        }
        tipdiv.style.display = 'none';
        this.referDom.style.borderColor = '';
        // removeClass(tipdiv.parentNode,'u-has-error');
    } else {
        if (this.tooltip) this.tooltip.hide();
    }
};

/**
 * 只有单一元素时使用
 */
Validate.fn._needClean = function () {
    return true; //this.validates[0].needClean
};

var validate = function validate(element) {
    var self = this,
        options,
        childEle;
    if (typeof element === 'string') {
        element = document.querySelector(element);
    }
    //element本身需要校验
    if (element.attributes["uvalidate"]) {
        options = element.attributes["uvalidate"] ? JSON.parse(element.attributes["uvalidate"].value) : {};
        options = extend({
            el: element
        }, options);
        element['Validate'] = new Validate(options);
    }

    //element是个父元素，校验子元素
    childEle = element.querySelectorAll('[uvalidate]');
    each(childEle, function (i, child) {
        if (!child['Validate']) {
            //如果该元素上没有校验
            options = child.attributes["validate"] ? JSON.parse(child.attributes["validate"].value) : {};
            options = extend({
                el: child
            }, options);
            child['Validate'] = new Validate(options);
        }
    });
};

// 对某个dom容器内的元素进行校验
var doValidate = function doValidate(element) {
    var passed = true,
        childEle,
        result;
    if (typeof element === 'string') {
        element = document.querySelector(element);
    }
    childEle = element.querySelectorAll('input');
    each(childEle, function (i, child) {
        if (child['Validate'] && child['Validate'].check) {
            result = child['Validate'].check({
                trueValue: true,
                showMsg: true
            });
            if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object') passed = result['passed'] && passed;else passed = result && passed;
        }
    });
    return passed;
};

if (u.compMgr) u.compMgr.regComp({
    comp: Validate,
    compAsString: 'u.Validate',
    css: 'u-validate'
});

var DateTimePicker$1 = u.BaseComponent.extend({});

DateTimePicker$1.fn = DateTimePicker$1.prototype;

DateTimePicker$1.fn.init = function () {

    var self = this,
        _fmt,
        _defaultFmt,
        cusFormat;
    this.enable = true;
    this._element = this.element;
    //this.type = 'datetime';
    //if (hasClass(this.element,'u-datepicker')){
    //    this.type = 'date';
    //}
    //addClass(this._element,'u-text')
    //this._element.style.display = "inline-table"; // 存在右侧图标，因此修改display
    //new UText(this._element);
    this._input = this._element.querySelector("input");
    if (this.options.placeholder) this._input.placeholder = this.options.placeholder;

    // if(env.isMobile){
    //     // setTimeout(function(){
    //     //     self._input.setAttribute('readonly','readonly');
    //     // },1000);
    // }

    setTimeout(function () {
        if (self._input) {
            self._input.setAttribute('readonly', 'readonly');
        }
    }, 1000);

    on$1(this._input, 'focus', function (e) {
        // 用来关闭键盘
        /*if(env.isMobile)
            this.blur();*/
        self._inputFocus = true;
        if (self.isShow !== true) {
            self.show(e);
        }
        stopEvent(e);
    });

    on$1(this._input, 'blur', function (e) {
        self._inputFocus = false;
    });
    this._span = this._element.querySelector("span");
    if (this._span) {
        on$1(this._span, 'click', function (e) {
            // if (self.isShow !== true){
            //     self.show(e);
            // }
            self._input.focus();
            //stopEvent(e);
        });
    }

    if (hasClass(this._element, 'time')) {
        this.type = 'datetime';
        _defaultFmt = 'YYYY-MM-DD hh:mm:ss';
    } else {
        this.type = 'date';
        _defaultFmt = 'YYYY-MM-DD';
    }
    _fmt = this._element.getAttribute("format");

    if (typeof getFormatFun == 'function') {
        cusFormat = getFormatFun();
    }
    this.format = _fmt || this.options['format'] || cusFormat || _defaultFmt;
    this.timezone = this.options['timezone'] || getCookie(U_TIMEZONE);
    this.isShow = false;
};

/**
 * 轮播动画效果
 * @private
 */
DateTimePicker$1.fn._carousel = function (newPage, direction) {
    if (direction == 'left') {
        addClass(newPage, 'right-page');
    } else {
        addClass(newPage, 'left-page');
    }
    this._dateContent.appendChild(newPage);
    if (env$1.isIE8 || env$1.isIE9 || env$1.isFF || true) {
        // 动画存在问题，禁用动画
        // this._dateContent.removeChild(this.contentPage);
        var pages = this._dateContent.querySelectorAll('.u-date-content-page');
        for (var i = 0; i < pages.length; i++) {
            this._dateContent.removeChild(pages[i]);
        }
        this.contentPage = newPage;
        this._dateContent.appendChild(newPage);
        if (direction == 'left') {
            removeClass(newPage, 'right-page');
        } else {
            removeClass(newPage, 'left-page');
        }
    } else {

        var cleanup = function () {
            newPage.removeEventListener('transitionend', cleanup);
            newPage.removeEventListener('webkitTransitionEnd', cleanup);
            // this._dateContent.removeChild(this.contentPage);
            var pages = this._dateContent.querySelectorAll('.u-date-content-page');
            for (var i = 0; i < pages.length; i++) {
                this._dateContent.removeChild(pages[i]);
            }
            this.contentPage = newPage;
            this._dateContent.appendChild(newPage);
        }.bind(this);

        newPage.addEventListener('transitionend', cleanup);
        newPage.addEventListener('webkitTransitionEnd', cleanup);
        if (window.requestAnimationFrame) window.requestAnimationFrame(function () {
            if (direction == 'left') {
                addClass(this.contentPage, 'left-page');
                removeClass(newPage, 'right-page');
            } else {
                addClass(this.contentPage, 'right-page');
                removeClass(newPage, 'left-page');
            }
        }.bind(this));
    }
};

/**
 * 淡入动画效果
 * @private
 */
DateTimePicker$1.fn._zoomIn = function (newPage) {
    if (!this.contentPage) {
        this._dateContent.appendChild(newPage);
        this.contentPage = newPage;
        return;
    }
    addClass(newPage, 'zoom-in');
    this._dateContent.appendChild(newPage);
    if (env$1.isIE8 || env$1.isIE9 || env$1.isFF) {
        var pages = this._dateContent.querySelectorAll('.u-date-content-page');
        for (var i = 0; i < pages.length; i++) {
            this._dateContent.removeChild(pages[i]);
        }
        // this._dateContent.removeChild(this.contentPage);
        this.contentPage = newPage;
        this._dateContent.appendChild(newPage);
        removeClass(newPage, 'zoom-in');
    } else {
        var cleanup = function () {
            newPage.removeEventListener('transitionend', cleanup);
            newPage.removeEventListener('webkitTransitionEnd', cleanup);
            // this._dateContent.removeChild(this.contentPage);
            var pages = this._dateContent.querySelectorAll('.u-date-content-page');
            for (var i = 0; i < pages.length; i++) {
                this._dateContent.removeChild(pages[i]);
            }
            this.contentPage = newPage;
            this._dateContent.appendChild(newPage);
        }.bind(this);
        if (this.contentPage) {
            newPage.addEventListener('transitionend', cleanup);
            newPage.addEventListener('webkitTransitionEnd', cleanup);
        }
        if (window.requestAnimationFrame) window.requestAnimationFrame(function () {
            addClass(this.contentPage, 'is-hidden');
            removeClass(newPage, 'zoom-in');
        }.bind(this));
    }
};

/**
 *填充年份选择面板
 * @private
 */
DateTimePicker$1.fn._fillYear = function (type) {
    var year,
        template,
        yearPage,
        titleDiv,
        yearDiv,
        _year,
        i,
        cell,
        language,
        year,
        month,
        date$$1,
        time,
        self = this;
    template = ['<div class="u-date-content-page">', '<div class="u-date-content-title">',
    /*'<div class="u-date-content-title-year"></div>-',
    '<div class="u-date-content-title-month"></div>-',
    '<div class="u-date-content-title-date"></div>',
    '<div class="u-date-content-title-time"></div>',*/
    '</div>', '<div class="u-date-content-panel"></div>', '</div>'].join("");
    type = type || 'current';
    _year = this.pickerDate.getFullYear();
    if ('current' === type) {
        this.startYear = _year - _year % 10 - 1;
    } else if (type === 'preivous') {
        this.startYear = this.startYear - 10;
    } else {
        this.startYear = this.startYear + 10;
    }
    yearPage = makeDOM(template);
    // titleDiv = yearPage.querySelector('.u-date-content-title');
    // titleDiv.innerHTML = (this.startYear - 1) + '-' + (this.startYear + 11);
    language = core.getLanguages();
    year = date._formats['YYYY'](this.pickerDate);
    month = date._formats['MM'](this.pickerDate, language);
    date$$1 = date._formats['DD'](this.pickerDate, language);
    time = date._formats['HH'](this.pickerDate, language) + ':' + date._formats['mm'](this.pickerDate, language) + ':' + date._formats['ss'](this.pickerDate, language);

    this._yearTitle = yearPage.querySelector('.u-date-content-title');
    this._yearTitle.innerHTML = year;
    /*this._headerYear = yearPage.querySelector('.u-date-content-title-year');
    this._headerYear.innerHTML = year;
    this._headerMonth = yearPage.querySelector('.u-date-content-title-month');
    this._headerMonth.innerHTML = month;
    this._headerDate = yearPage.querySelector('.u-date-content-title-date');
    this._headerDate.innerHTML = date;
    this._headerTime = yearPage.querySelector('.u-date-content-title-time');
    this._headerTime.innerHTML = time;*/
    if (this.type == 'date') {
        this._headerTime.style.display = 'none';
    }

    /*on(this._headerYear, 'click', function(e){
        self._fillYear();
        stopEvent(e)
    });
     on(this._headerMonth, 'click', function(e){
        self._fillMonth();
        stopEvent(e)
    });
     on(this._headerTime, 'click', function(e){
        self._fillTime();
        stopEvent(e)
    });*/

    yearDiv = yearPage.querySelector('.u-date-content-panel');
    for (var i = 0; i < 12; i++) {

        cell = makeDOM('<div class="u-date-content-year-cell">' + (this.startYear + i) + '</div>');
        new URipple(cell);
        if (this.startYear + i == _year) {
            addClass(cell, 'current');
        }
        if (this.beginYear) {
            if (this.startYear + i < this.beginYear) {
                addClass(cell, 'u-disabled');
            }
        }
        if (this.overYear) {
            if (this.startYear + i > this.overYear) {
                addClass(cell, 'u-disabled');
            }
        }

        cell._value = this.startYear + i;
        yearDiv.appendChild(cell);
    }
    on$1(yearDiv, 'click', function (e) {
        if (hasClass(e.target, 'u-disabled')) return;
        var _y = e.target._value;
        this.pickerDate.setYear(_y);
        this._updateDate();
        this._fillMonth();
    }.bind(this));

    if (type === 'current') {
        this._zoomIn(yearPage);
    } else if (type === 'next') {
        this._carousel(yearPage, 'left');
    } else if (type === 'preivous') {
        this._carousel(yearPage, 'right');
    }
    this.currentPanel = 'year';
};

/**
 * 填充月份选择面板
 * @private
 */
DateTimePicker$1.fn._fillMonth = function () {
    var template,
        monthPage,
        _month,
        cells,
        i,
        language,
        year,
        month,
        date$$1,
        time,
        self = this;
    template = ['<div class="u-date-content-page">', '<div class="u-date-content-title">',
    /*'<div class="u-date-content-title-year"></div>-',
    '<div class="u-date-content-title-month"></div>-',
    '<div class="u-date-content-title-date"></div>',
    '<div class="u-date-content-title-time"></div>',*/
    '</div>', '<div class="u-date-content-panel">', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[0] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[1] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[2] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[3] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[4] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[5] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[6] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[7] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[8] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[9] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[10] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[11] + '</div>', '</div>', '</div>'].join("");

    monthPage = makeDOM(template);
    language = core.getLanguages();
    year = date._formats['YYYY'](this.pickerDate);
    month = date._formats['MM'](this.pickerDate, language);
    date$$1 = date._formats['DD'](this.pickerDate, language);
    time = date._formats['HH'](this.pickerDate, language) + ':' + date._formats['mm'](this.pickerDate, language) + ':' + date._formats['ss'](this.pickerDate, language);

    this._monthTitle = monthPage.querySelector('.u-date-content-title');
    this._monthTitle.innerHTML = date._formats['MMM'](this.pickerDate, language);
    /*this._headerYear = monthPage.querySelector('.u-date-content-title-year');
    this._headerYear.innerHTML = year;
    this._headerMonth = monthPage.querySelector('.u-date-content-title-month');
    this._headerMonth.innerHTML = month;
    this._headerDate = monthPage.querySelector('.u-date-content-title-date');
    this._headerDate.innerHTML = date;
    this._headerTime = monthPage.querySelector('.u-date-content-title-time');
    this._headerTime.innerHTML = time;*/
    if (this.type == 'date') {
        this._headerTime.style.display = 'none';
    }

    /*on(this._headerYear, 'click', function(e){
        self._fillYear();
        stopEvent(e)
    });
     on(this._headerMonth, 'click', function(e){
        self._fillMonth();
        stopEvent(e)
    });
     on(this._headerTime, 'click', function(e){
        self._fillTime();
        stopEvent(e)
    });*/

    cells = monthPage.querySelectorAll('.u-date-content-year-cell');
    for (var i = 0; i < cells.length; i++) {
        if (_month - 1 == i) {
            addClass(cells[i], 'current');
        }
        if (this.beginYear) {
            if (this.pickerDate.getFullYear() == this.beginYear && i < this.beginMonth) {
                addClass(cells[i], 'u-disabled');
            }
            if (this.pickerDate.getFullYear() < this.beginYear) {
                addClass(cells[i], 'u-disabled');
            }
        }
        if (this.overYear) {
            if (this.pickerDate.getFullYear() == this.overYear && i > this.overMonth) {
                addClass(cells[i], 'u-disabled');
            }
            if (this.pickerDate.getFullYear() > this.overYear) {
                addClass(cells[i], 'u-disabled');
            }
        }

        cells[i]._value = i;
        new URipple(cells[i]);
    }
    on$1(monthPage, 'click', function (e) {
        if (hasClass(e.target, 'u-disabled')) return;
        if (hasClass(e.target, 'u-date-content-title')) return;
        var _m = e.target._value;
        this.pickerDate.setMonth(_m);
        this._updateDate();
        this._fillDate();
    }.bind(this));
    this._zoomIn(monthPage);
    this.currentPanel = 'month';
};

DateTimePicker$1.fn._getPickerStartDate = function (date$$1) {
    var d = new Date(dateFormat(date$$1));
    d.setDate(1);
    var day = d.getDay();
    d = date.sub(d, 'd', day);
    return d;
};

DateTimePicker$1.fn._getPickerEndDate = function (date$$1) {
    var d = new Date(dateFormat(date$$1));
    d.setDate(1);
    d.setDate(0);
    d.setMonth(d.getMonth() + 1);
    var day = d.getDay();
    d = date.add(d, 'd', 6 - day);
    return d;
};

/**
 * 渲染日历
 * @param type : previous  current  next
 * @private
 */
DateTimePicker$1.fn._fillDate = function (type) {
    // if (env.isMobile){
    //     this._dateMobileScroll()
    //     return
    // }
    var year,
        month,
        day,
        date$$1,
        time,
        template,
        datePage,
        titleDiv,
        dateDiv,
        weekSpans,
        language,
        tempDate,
        i,
        cell,
        self = this;
    self.timeOpen = false;
    type = type || 'current';
    if ('current' === type) {
        tempDate = this.pickerDate;
    } else if (type === 'preivous') {
        tempDate = date.sub(this.startDate, 'd', 1);
        // 默认显示每个月的1号
        tempDate = date.getDateObj(tempDate.setDate(1));
    } else {
        tempDate = date.add(this.endDate, 'd', 1);
        // 默认显示每个月的1号
        tempDate = date.getDateObj(tempDate.setDate(1));
    }
    this.startDate = this._getPickerStartDate(tempDate);
    this.endDate = this._getPickerEndDate(tempDate);

    language = core.getLanguages();
    year = date._formats['YYYY'](tempDate);
    month = date._formats['MM'](tempDate, language);
    date$$1 = date._formats['DD'](tempDate, language);
    time = date._formats['HH'](tempDate, language) + ':' + date._formats['mm'](tempDate, language) + ':' + date._formats['ss'](tempDate, language);
    template = ['<div class="u-date-content-page">', '<div class="u-date-content-title">', '<div class="u-date-content-title-year"></div>-', '<div class="u-date-content-title-month"></div>-', '<div class="u-date-content-title-date"></div>', '<div class="u-date-content-title-time"></div>', '</div>', '<div class="u-date-week"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>', '<div class="u-date-content-panel"></div>', '</div>'].join("");
    datePage = makeDOM(template);
    this._headerYear = datePage.querySelector('.u-date-content-title-year');
    this._headerYear.innerHTML = year;
    this._headerMonth = datePage.querySelector('.u-date-content-title-month');
    this._headerMonth.innerHTML = month;
    this._headerDate = datePage.querySelector('.u-date-content-title-date');
    this._headerDate.innerHTML = date$$1;
    this._headerTime = datePage.querySelector('.u-date-content-title-time');
    this._headerTime.innerHTML = time;
    if (this.type == 'date') {
        this._headerTime.style.display = 'none';
    }

    on$1(this._headerYear, 'click', function (e) {
        self._fillYear();
        stopEvent(e);
    });

    on$1(this._headerMonth, 'click', function (e) {
        self._fillMonth();
        stopEvent(e);
    });

    on$1(this._headerTime, 'click', function (e) {
        self._fillTime();
        stopEvent(e);
    });

    weekSpans = datePage.querySelectorAll('.u-date-week span');

    for (var i = 0; i < 7; i++) {
        weekSpans[i].innerHTML = date._jsonLocale.weekdaysMin[i];
    }
    dateDiv = datePage.querySelector('.u-date-content-panel');
    tempDate = this.startDate;

    while (tempDate <= this.endDate) {
        var tempDateMonth = tempDate.getMonth(),
            tempDateYear = tempDate.getFullYear(),
            tempDateDate = tempDate.getDate();
        cell = makeDOM('<div class="u-date-cell" unselectable="on" onselectstart="return false;">' + tempDateDate + '</div>');
        if (tempDateYear == this.pickerDate.getFullYear() && tempDateMonth == this.pickerDate.getMonth() && tempDateDate == this.pickerDate.getDate()) {
            addClass(cell, 'current');
        }

        if (this.beginYear) {
            if (tempDateYear < this.beginYear || tempDateYear == this.beginYear && tempDateMonth < this.beginMonth || tempDateYear == this.beginYear && tempDateMonth == this.beginMonth && tempDateDate < this.beginDate) {
                addClass(cell, 'u-disabled');
                removeClass(cell, 'current');
            }
        }
        if (this.overYear) {
            if (tempDateYear > this.overYear || tempDateYear == this.overYear && tempDateMonth > this.overMonth || tempDateYear == this.overYear && tempDateMonth == this.overMonth && tempDateDate > this.overDate) {
                addClass(cell, 'u-disabled');
                removeClass(cell, 'current');
            }
        }

        cell._value = tempDateDate;
        cell._month = tempDateMonth;
        cell._year = tempDateYear;
        new URipple(cell);
        dateDiv.appendChild(cell);
        tempDate = date.add(tempDate, 'd', 1);
    }
    on$1(dateDiv, 'click', function (e) {
        if (hasClass(e.target, 'u-disabled')) return;
        var _d = e.target._value;
        if (!_d) return;
        this.pickerDate.setFullYear(e.target._year);
        this.pickerDate.setMonth(e.target._month);
        this.pickerDate.setDate(_d);
        this.pickerDate.setMonth(e.target._month);
        this.pickerDate.setDate(_d);
        if (this.pickerDate) {
            this.resetDataObj(this.pickerDate);
        }

        var _cell = e.target.parentNode.querySelector('.u-date-cell.current');
        if (_cell) {
            removeClass(_cell, 'current');
            if (env$1.isIE8 || env$1.isIE9) _cell.style.backgroundColor = "#fff";
        }
        addClass(e.target, 'current');
        if (env$1.isIE8 || env$1.isIE9) e.target.style.backgroundColor = '#3f51b5';
        this._updateDate();
        if (this.type === 'date') {
            this.onOk();
        }
    }.bind(this));
    if (type === 'current') {
        this._zoomIn(datePage);
    } else if (type === 'next') {
        this._carousel(datePage, 'left');
    } else if (type === 'preivous') {
        this._carousel(datePage, 'right');
    }
    this.currentPanel = 'date';
};

/**
 * 填充时间选择面板
 * @private
 */
DateTimePicker$1.fn._fillTime = function (type) {
    // if (env.isMobile) {
    //     this._timeMobileScroll()
    //     return;
    // }
    if (this.timeOpen) return;
    this.timeOpen = true;
    var year, month, day, date$$1, time, template, timePage, titleDiv, dateDiv, weekSpans, language, tempDate, i, cell, timetemplate;
    var self = this;
    type = type || 'current';
    if ('current' === type) {
        tempDate = this.pickerDate;
    } else if (type === 'preivous') {
        tempDate = date.sub(this.startDate, 'd', 1);
    } else {
        tempDate = date.add(this.endDate, 'd', 1);
    }
    this.startDate = this._getPickerStartDate(tempDate);
    this.endDate = this._getPickerEndDate(tempDate);

    language = core.getLanguages();
    year = date._formats['YYYY'](tempDate);
    month = date._formats['MM'](tempDate, language);
    date$$1 = date._formats['DD'](tempDate, language);
    time = date._formats['HH'](tempDate, language) + ':' + date._formats['mm'](tempDate, language) + ':' + date._formats['ss'](tempDate, language);

    template = ['<div class="u-date-content-page">', '<div class="u-date-content-title">', '<div class="u-date-content-title-year"></div>-', '<div class="u-date-content-title-month"></div>-', '<div class="u-date-content-title-date"></div>', '<div class="u-date-content-title-time"></div>', '</div>', '<div class="u-date-content-panel"></div>', '</div>'].join("");
    timePage = makeDOM(template);
    //    titleDiv = timePage.querySelector('.u-date-content-title');
    //    titleDiv.innerHTML = year + ' ' + month + ' ' +day ;
    this._headerYear = timePage.querySelector('.u-date-content-title-year');
    this._headerYear.innerHTML = year;
    this._headerMonth = timePage.querySelector('.u-date-content-title-month');
    this._headerMonth.innerHTML = month;
    this._headerDate = timePage.querySelector('.u-date-content-title-date');
    this._headerDate.innerHTML = date$$1;
    this._headerTime = timePage.querySelector('.u-date-content-title-time');
    this._headerTime.innerHTML = time;

    this.editTimeShow = false;

    function editTime(obj) {
        var inputTemplate = "<div><input class='editTime' value='' maxlength='8' /></div>";
        obj._headerTime.innerHTML = inputTemplate;

        var editTime = timePage.querySelector('.editTime');
        obj.editTimeShow = true;
        editTime.focus();
        on$1(editTime, 'keydown', function (e) {
            var code = e.keyCode;
            var value = this.value;
            if (!(code >= 48 && code <= 57 || code >= 96 && code <= 105 || code == 37 || code == 102 || code == 39 || code == 8 || code == 46 || code == 110 || code == 190)) {
                stopEvent(e);
            }
            var length = value.length;
            if (length && code != 8) {
                if (length == 2 || length == 5) {
                    value = value += ':';
                }
            }

            this.value = value;
        });

        on$1(editTime, 'keyup', function (e) {
            var value = this.value,
                length = value.length,
                valueArray = [];
            if (length == 8 && value[0] <= 2 && value[0] >= 0 && value[1] <= 3 && value[1] >= 0 && value[3] <= 5 && value[3] >= 0 && value[6] <= 5 && value[6] >= 0) {
                valueArray = value.split(':');
                obj.pickerDate.setHours(valueArray[0]);
                obj.pickerDate.setMinutes(valueArray[1]);
                obj.pickerDate.setSeconds(valueArray[2]);
            }
        });
    }

    if (this.type == 'date') {
        this._headerTime.style.display = 'none';
    }

    on$1(this._headerYear, 'click', function (e) {
        self._fillYear();
        stopEvent(e);
    });

    on$1(this._headerMonth, 'click', function (e) {
        self._fillMonth();
        stopEvent(e);
    });

    on$1(this._headerTime, 'click', function (e) {
        if (self.currentView == 'hours' && !self.editTimeShow) {
            editTime(self);
        } else {
            self.editTimeShow = false;
        }
        self._fillTime();
        self.timeOpen = true;
        stopEvent(e);
    });

    dateDiv = timePage.querySelector('.u-date-content-panel');
    // tempDate = this.startDate;
    // while(tempDate <= this.endDate){
    // cell = makeDOM('<div class="u-date-cell">'+ udate._formats['HH'](tempDate,language) +'</div>');
    // if (tempDate.getFullYear() == this.pickerDate.getFullYear() && tempDate.getMonth() == this.pickerDate.getMonth()
    // && tempDate.getDate() == this.pickerDate.getDate()){
    // addClass(cell, 'current');
    // }
    // cell._value = tempDate.getDate();
    // new URipple(cell);
    // dateDiv.appendChild(cell);
    // tempDate = udate.add(tempDate, 'd', 1);
    // }
    if (env$1.isIE8) {
        // IE8/IE9保持原来，非IE8/IE9使用clockpicker
        timetemplate = ['<div class="u_time_box">', '<div class="u_time_cell">',
        //'<div class="add_hour_cell"><i class="add_hour_cell icon-angle-up"></i></div>',
        '<div class="show_hour_cell">' + date._formats['HH'](tempDate) + '</div>',
        //'<div class="subtract_hour_cell"><i class="subtract_hour_cell icon-angle-down"></i></div>',
        '</div>', '<div class="u_time_cell">',
        //'<div class="add_min_cell"><i class="add_min_cell icon-angle-up"></i></div>',
        '<div class="show_min_cell">' + date._formats['mm'](tempDate) + '</div>',
        //'<div class="subtract_min_cell"><i class="subtract_min_cell icon-angle-down"></i></div>',
        '</div>', '<div class="u_time_cell">',
        //'<div class="add_sec_cell"><i class="add_sec_cell icon-angle-up"></i></div>',
        '<div class="show_sec_cell">' + date._formats['ss'](tempDate) + '</div>',
        //'<div class="subtract_sec_cell"><i class="subtract_sec_cell icon-angle-down"></i></div>',
        '</div>', '</div>'].join("");
        cell = makeDOM(timetemplate);
        dateDiv.appendChild(cell);
        on$1(dateDiv, 'click', function (e) {
            var _arrary = e.target.getAttribute("class").split("_");
            if (_arrary[0] == "add") {
                if (_arrary[1] == "hour") {
                    var tmph = Number(date._formats['HH'](this.pickerDate));
                    if (tmph < 23) {
                        tmph++;
                    } else {
                        tmph = 0;
                    }

                    this.pickerDate.setHours(tmph);
                    dateDiv.querySelector(".show_hour_cell").innerHTML = tmph;
                } else if (_arrary[1] == "min") {
                    var tmpm = Number(date._formats['mm'](this.pickerDate));
                    if (tmpm < 59) {
                        tmpm++;
                    } else {
                        tmpm = 0;
                    }
                    this.pickerDate.setMinutes(tmpm);
                } else if (_arrary[1] == "sec") {
                    var tmps = Number(date._formats['ss'](this.pickerDate));
                    if (tmps < 59) {
                        tmps++;
                    } else {
                        tmps = 0;
                    }
                    this.pickerDate.setSeconds(tmps);
                }
            } else if (_arrary[0] == "subtract") {
                if (_arrary[1] == "hour") {
                    var tmph = Number(date._formats['HH'](this.pickerDate));
                    if (tmph > 0) {
                        tmph--;
                    } else {
                        tmph = 23;
                    }
                    this.pickerDate.setHours(tmph);
                } else if (_arrary[1] == "min") {
                    var tmpm = Number(date._formats['mm'](this.pickerDate));
                    if (tmpm > 0) {
                        tmpm--;
                    } else {
                        tmpm = 59;
                    }
                    this.pickerDate.setMinutes(tmpm);
                } else if (_arrary[1] == "sec") {
                    var tmps = Number(date._formats['ss'](this.pickerDate));
                    if (tmps > 0) {
                        tmps--;
                    } else {
                        tmps = 59;
                    }
                    this.pickerDate.setSeconds(tmps);
                }
            } else if (_arrary[0] == "show") {
                var tmptarget = e.target;
                var tmpinput = makeDOM("<input type='text' class='u-input'>");
                if (tmptarget.querySelector('.u-input')) return;
                this._updateDate();
                tmpinput.value = tmptarget.innerHTML;
                tmptarget.innerHTML = "";
                tmptarget.appendChild(tmpinput);
                if (_arrary[1] == "hour") {
                    var vali = new Validate(tmpinput, {
                        validType: "integer",
                        minLength: 0,
                        maxLength: 2,
                        min: 0,
                        max: 23
                    });
                    on$1(tmpinput, 'blur', function () {
                        if (vali.passed) {
                            self.pickerDate.setHours(tmpinput.value);
                            self._updateDate();
                        }
                    });
                } else if (_arrary[1] == "min") {
                    var vali = new Validate(tmpinput, {
                        validType: "integer",
                        minLength: 0,
                        maxLength: 2,
                        min: 0,
                        max: 59
                    });
                    on$1(tmpinput, 'blur', function () {
                        if (vali.passed) {
                            self.pickerDate.setMinutes(tmpinput.value);
                            self._updateDate();
                        }
                    });
                } else if (_arrary[1] == "sec") {
                    var vali = new Validate(tmpinput, {
                        validType: "integer",
                        minLength: 0,
                        maxLength: 2,
                        min: 0,
                        max: 59
                    });
                    on$1(tmpinput, 'blur', function () {
                        if (vali.passed) {
                            self.pickerDate.setSeconds(tmpinput.value);
                            self._updateDate();
                        }
                    });
                }

                tmpinput.focus();
                return;
            } else {
                return false;
            }

            this._updateDate();
        }.bind(this));
    } else {
        timetemplate = '<div class="u-combo-ul clockpicker-popover is-visible" style="width:100%;padding:0px;">';
        //        timetemplate += '<div class="popover-title"><span class="clockpicker-span-hours">02</span> : <span class="clockpicker-span-minutes text-primary">01</span><span class="clockpicker-span-am-pm"></span></div>';
        timetemplate += '<div class="popover-content">';
        timetemplate += '  <div class="clockpicker-plate data-clockpicker-plate">';
        timetemplate += '      <div class="clockpicker-canvas">';
        timetemplate += '          <svg class="clockpicker-svg">';
        timetemplate += '              <g transform="translate(100,100)">';
        timetemplate += '                  <circle class="clockpicker-canvas-bg clockpicker-canvas-bg-trans" r="13" cx="8.362277061412277" cy="-79.56175162946187"></circle>';
        timetemplate += '                  <circle class="clockpicker-canvas-fg" r="3.5" cx="8.362277061412277" cy="-79.56175162946187"></circle>';
        timetemplate += '                  <line x1="0" y1="0" x2="8.362277061412277" y2="-79.56175162946187"></line>';
        timetemplate += '                  <circle class="clockpicker-canvas-bearing" cx="0" cy="0" r="2"></circle>';
        timetemplate += '              </g>';
        timetemplate += '          </svg>';
        timetemplate += '      </div>';
        timetemplate += '      <div class="clockpicker-dial clockpicker-hours" style="visibility: visible;">';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-1" >00</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-2" >1</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-3" >2</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-4" >3</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-5" >4</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-6" >5</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-7" >6</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-8" >7</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-9" >8</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-10" >9</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-11" >10</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-12" >11</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-13" >12</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-14" >13</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-15" >14</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-16" >15</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-17" >16</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-18" >17</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-19" >18</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-20" >19</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-21" >20</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-22" >21</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-23" >22</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-24" >23</div>';
        timetemplate += '      </div>';
        timetemplate += '      <div class="clockpicker-dial clockpicker-minutes" style="visibility: hidden;">';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-25" >00</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-26" >05</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-27" >10</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-28" >15</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-29" >20</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-30" >25</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-31" >30</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-32" >35</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-33" >40</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-34" >45</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-35" >50</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-36" >55</div>';
        timetemplate += '      </div>';

        timetemplate += '      <div class="clockpicker-dial clockpicker-seconds" style="visibility: hidden;">';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-25" >00</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-26" >05</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-27" >10</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-28" >15</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-29" >20</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-30" >25</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-31" >30</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-32" >35</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-33" >40</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-34" >45</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-35" >50</div>';
        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-36" >55</div>';
        timetemplate += '      </div>';

        timetemplate += '  </div><span class="clockpicker-am-pm-block"></span></div>';
        timetemplate += '  </div>';
        cell = makeDOM(timetemplate);
        this.cell = cell;
        dateDiv.appendChild(cell);

        this.hand = cell.querySelector('line');
        this.bg = cell.querySelector('.clockpicker-canvas-bg');
        this.fg = cell.querySelector('.clockpicker-canvas-fg');
        this.titleHourSpan = cell.querySelector('.clockpicker-span-hours');
        this.titleMinSpan = cell.querySelector('.clockpicker-span-minutes');
        this.titleSecSpan = cell.querySelector('.clockpicker-span-seconds');
        this.hourDiv = cell.querySelector('.clockpicker-hours');
        this.minDiv = cell.querySelector('.clockpicker-minutes');
        this.secDiv = cell.querySelector('.clockpicker-seconds');
        this.currentView = 'hours';
        this.hours = date._formats['HH'](tempDate);
        this.min = date._formats['mm'](tempDate);
        this.sec = date._formats['ss'](tempDate);
        //this.titleHourSpan.innerHTML = this.hours;
        //this.titleMinSpan.innerHTML = this.min;


        on$1(this.hourDiv, 'click', function (e) {
            var target = e.target;
            if (hasClass(target, 'clockpicker-tick')) {
                this.hours = target.innerHTML;
                this.hours = this.hours > 9 || this.hours == 0 ? '' + this.hours : '0' + this.hours;
                // this.titleHourSpan.innerHTML = this.hours;
                self.pickerDate.setHours(this.hours);
                var language = core.getLanguages();
                var time = date._formats['HH'](this.pickerDate, language) + ':' + date._formats['mm'](this.pickerDate, language) + ':' + date._formats['ss'](this.pickerDate, language);
                this._headerTime.innerHTML = time;
                this.hourDiv.style.visibility = 'hidden';
                this.minDiv.style.visibility = 'visible';
                this.currentView = 'min';
                this.setHand();
            }
        }.bind(this));

        on$1(this.minDiv, 'click', function (e) {
            var target = e.target;
            if (hasClass(target, 'clockpicker-tick')) {
                this.min = target.innerHTML;
                // this.min = this.min > 9 || this.min  == 00? '' + this.min:'0' + this.min;
                // this.titleMinSpan.innerHTML = this.min;
                self.pickerDate.setMinutes(this.min);
                var language = core.getLanguages();
                var time = date._formats['HH'](this.pickerDate, language) + ':' + date._formats['mm'](this.pickerDate, language) + ':' + date._formats['ss'](this.pickerDate, language);
                this._headerTime.innerHTML = time;
                this.minDiv.style.visibility = 'hidden';
                this.secDiv.style.visibility = 'visible';
                this.currentView = 'sec';
                this.setHand();
            }
        }.bind(this));

        on$1(this.secDiv, 'click', function (e) {
            var target = e.target;
            if (hasClass(target, 'clockpicker-tick')) {
                this.sec = target.innerHTML;
                // this.min = this.min > 9 || this.min  == 00? '' + this.min:'0' + this.min;
                // this.titleMinSpan.innerHTML = this.min;
                self.pickerDate.setSeconds(this.sec);
                var language = core.getLanguages();
                var time = date._formats['HH'](this.pickerDate, language) + ':' + date._formats['mm'](this.pickerDate, language) + ':' + date._formats['ss'](this.pickerDate, language);
                this._headerTime.innerHTML = time;
                this.secDiv.style.visibility = 'hidden';
                this.hourDiv.style.visibility = 'visible';
                this.currentView = 'hours';
                this.setHand();
            }
        }.bind(this));
    }

    this._zoomIn(timePage);
    if (!env$1.isIE8) this.setHand();
    this.currentPanel = 'time';
    dateDiv.onselectstart = new Function("return false");

    var value = timePage.querySelector('.u-date-content-title-time').innerHTML;
    var inputTemplate = '<div><input value=' + value + ' /></div>';
};

DateTimePicker$1.fn.setHand = function () {
    var dialRadius = 100,
        innerRadius = 54,
        outerRadius = 80;
    var view = this.currentView,
        value = this[view],
        isHours = view === 'hours',
        unit = Math.PI / (isHours ? 6 : 30),
        radian = value * unit,
        radius = isHours && value > 0 && value < 13 ? innerRadius : outerRadius,
        x = Math.sin(radian) * radius,
        y = -Math.cos(radian) * radius;
    this.setHandFun(x, y);
};

DateTimePicker$1.fn.setHandFun = function (x, y, roundBy5, dragging) {
    var dialRadius = 100,
        innerRadius = 54,
        outerRadius = 80;

    var radian = Math.atan2(x, -y),
        isHours = this.currentView === 'hours',
        unit = Math.PI / (isHours ? 6 : 30),
        z = Math.sqrt(x * x + y * y),
        options = this.options,
        inner = isHours && z < (outerRadius + innerRadius) / 2,
        radius = inner ? innerRadius : outerRadius,
        value;

    if (this.twelvehour) {
        radius = outerRadius;
    }

    // Radian should in range [0, 2PI]
    if (radian < 0) {
        radian = Math.PI * 2 + radian;
    }

    // Get the round value
    value = Math.round(radian / unit);

    // Get the round radian
    radian = value * unit;

    // Correct the hours or minutes
    if (options.twelvehour) {
        if (isHours) {
            if (value === 0) {
                value = 12;
            }
        } else {
            if (roundBy5) {
                value *= 5;
            }
            if (value === 60) {
                value = 0;
            }
        }
    } else {
        if (isHours) {
            if (value === 12) {
                value = 0;
            }
            value = inner ? value === 0 ? 12 : value : value === 0 ? 0 : value + 12;
        } else {
            if (roundBy5) {
                value *= 5;
            }
            if (value === 60) {
                value = 0;
            }
        }
    }

    // Set clock hand and others' position
    var w = this._panel.offsetWidth;
    var u = w / 294;
    var cx = Math.sin(radian) * radius * u,
        cy = -Math.cos(radian) * radius * u;
    var iu = 100 * u;
    this.cell.querySelector('g').setAttribute('transform', 'translate(' + iu + ',' + iu + ')');
    this.hand.setAttribute('x2', cx);
    this.hand.setAttribute('y2', cy);
    this.bg.setAttribute('cx', cx);
    this.bg.setAttribute('cy', cy);
    this.fg.setAttribute('cx', cx);
    this.fg.setAttribute('cy', cy);
};

/**
 * 重新渲染面板
 * @private
 */
DateTimePicker$1.fn._updateDate = function () {
    var year, month, week, date$$1, time, hour, minute, seconds, language;

    language = core.getLanguages();
    year = date._formats['YYYY'](this.pickerDate);
    // week = udate._formats['ddd'](this.pickerDate, language);
    month = date._formats['MM'](this.pickerDate, language);
    time = date._formats['HH'](this.pickerDate, language) + ':' + date._formats['mm'](this.pickerDate, language) + ':' + date._formats['ss'](this.pickerDate, language);

    //TODO 多语
    // date = udate._formats['D'](this.pickerDate) + '日';
    date$$1 = date._formats['DD'](this.pickerDate, language);
    if (this._headerYear) {
        this._headerYear.innerHTML = '';
        this._headerYear.innerHTML = year;
    }
    // this._headerWeak.innerHTML = '';
    // this._headerWeak.innerHTML = week;
    if (this._headerMonth) {
        this._headerMonth.innerHTML = '';
        this._headerMonth.innerHTML = month;
    }
    if (this._headerDate) {
        this._headerDate.innerHTML = '';
        this._headerDate.innerHTML = date$$1;
    }
    if (this._headerTime) {
        this._headerTime.innerHTML = '';
        this._headerTime.innerHTML = time;
    }
    if (this.currentPanel == 'time') {
        if (env$1.isIE8) {
            this._panel.querySelector(".show_hour_cell").innerHTML = date._formats['HH'](this.pickerDate, language);
            this._panel.querySelector(".show_min_cell").innerHTML = date._formats['mm'](this.pickerDate, language);
            this._panel.querySelector(".show_sec_cell").innerHTML = date._formats['ss'](this.pickerDate, language);
        }
    }
};

DateTimePicker$1.fn._response = function () {
    return;
    var bodyHeight = document.body.offsetHeight; //395
    var _height = 430;
    if (this.type === 'date' && !env$1.isMobile) _height = 395;
    if (bodyHeight > _height) {
        this._panel.style.height = _height;
    }
    //if (bodyHeight > 500){
    //    this._panel.style.height =  '500px';
    //}
    //this._dateContent.style.height =panelHeight - 158 + 'px';   // 106 52
};

var dateTimePickerTemplateArr = ['<div class="u-date-panel">', '<div class="u-date-body">', '<div class="u-date-content"></div>', '</div>', '<div class="u-date-nav">', '<button type="button" class="u-button u-date-ok right primary">', trans('public.confirm', '确定'), '</button>', '<button type="button" class="u-button u-date-cancel right">', trans('public.cancel', '取消'), '</button>', '<button type="button" class="u-button u-date-clean">', trans('public.clear', '清空'), '</button>', '</div>', '</div>'];

/******************************
 *  Public method
 ******************************/

DateTimePicker$1.fn.show = function (evt) {
    if (!this.enable) {
        return;
    }
    var inputValue = this._input.value;
    if (typeof this.timezone != 'undefined' && this.timezone != null && this.timezone != '') {
        // inputValue = udate.strToDateByTimezone(inputValue, this.timezone);
        if (inputValue) {
            this.date = new Date(inputValue);
        } else {
            this.date = date.getDateByTimeZonec2z(new Date(), this.timezone, this.type);
        }
    } else {
        this.setDate(inputValue);
    }

    var self = this;
    if (!this._panel) {
        this._panel = makeDOM(dateTimePickerTemplateArr.join(""));
        /*if(env.isMobile){
            removeClass(this._panel,'u-date-panel')
            addClass(this._panel,'u-date-panel-mobile');
        }*/
        this._dateNav = this._panel.querySelector('.u-date-nav');
        // if (this.type === 'date' && !env.isMobile){
        //    this._dateNav.style.display = 'none';
        // }
        // 如果是日期类型，取消显示确认和取消按钮
        if (this.type === 'date' && !env$1.isMobile) {
            this._dateOk = this._panel.querySelector('.u-date-ok');
            this._dateCancel = this._panel.querySelector('.u-date-cancel');
            this._dateOk.style.display = 'none';
            this._dateCancel.style.display = 'none';
        }

        this._dateContent = this._panel.querySelector('.u-date-content');
        if (this.type == 'datetime') {
            /*if(env.isMobile){
                this._dateContent.style.height = '226/16*2rem';
            }
            else{
                this._dateContent.style.height = '226px';
            }*/
        }
        this.btnOk = this._panel.querySelector('.u-date-ok');
        this.btnCancel = this._panel.querySelector('.u-date-cancel');
        this.btnClean = this._panel.querySelector('.u-date-clean');
        var rippleContainer = document.createElement('span');
        addClass(rippleContainer, 'u-ripple');
        this.btnOk.appendChild(rippleContainer);
        var rippleContainer = document.createElement('span');
        addClass(rippleContainer, 'u-ripple');
        this.btnCancel.appendChild(rippleContainer);
        var rippleContainer = document.createElement('span');
        addClass(rippleContainer, 'u-ripple');
        this.btnClean.appendChild(rippleContainer);
        new URipple(this.btnOk);
        new URipple(this.btnCancel);
        new URipple(this.btnClean);
        on$1(this.btnOk, 'click', function (e) {
            this.onOk();
            stopEvent(e);
        }.bind(this));
        on$1(this.btnCancel, 'click', function (e) {
            self.onCancel();
            stopEvent(e);
        });
        on$1(this.btnClean, 'click', function (e) {
            self.pickerDate = null;
            self.onOk();
            stopEvent(e);
        });

        // this.preBtn = makeDOM('<button class="u-date-pre-button u-button flat floating mini">&lt;</button>');
        // this.nextBtn = makeDOM('<button class="u-date-next-button u-button flat floating mini">&gt;</button>');
        this.preBtn = makeDOM('<button class="u-date-pre-button u-button mini">&lt;</button>');
        this.nextBtn = makeDOM('<button class="u-date-next-button u-button mini">&gt;</button>');
        // new u.Button(this.nextBtn);

        on$1(this.preBtn, 'click', function (e) {
            if (self.currentPanel == 'date') {
                self._fillDate('preivous');
            } else if (self.currentPanel == 'year') {
                self._fillYear('preivous');
            }
            stopEvent(e);
        });
        on$1(this.nextBtn, 'click', function (e) {
            if (self.currentPanel == 'date') {
                self._fillDate('next');
            } else if (self.currentPanel == 'year') {
                self._fillYear('next');
            }
            stopEvent(e);
        });
        // if(!env.isMobile){
        this._dateContent.appendChild(this.preBtn);
        this._dateContent.appendChild(this.nextBtn);
        // }

    }
    this.pickerDate = this.date || new Date();
    this._updateDate();
    this._fillDate();
    this._response();
    on$1(window, 'resize', function () {
        self._response();
    });
    /*if(env.isMobile){
        this.overlayDiv = makeModal(this._panel);
        on(this.overlayDiv, 'click', function(){
            self.onCancel();
        })
    }*/
    addClass(this._panel, 'is-visible');
    if (!env$1.isMobile) {
        if (this.options.showFix) {
            document.body.appendChild(this._panel);
            this._panel.style.position = 'fixed';
            showPanelByEle({
                ele: this._input,
                panel: this._panel,
                position: "bottomLeft"
            });
        } else {
            var bodyWidth = document.body.clientWidth,
                bodyHeight = document.body.clientHeight,
                panelWidth = this._panel.offsetWidth,
                panelHeight = this._panel.offsetHeight;
            //调整left和top
            // this._element.parentNode.appendChild(this._panel);
            this._element.appendChild(this._panel);
            this._element.style.position = 'relative';
            // this.left = this.element.offsetLeft;
            //
            this.left = this._input.offsetLeft;
            var inputHeight = this._input.offsetHeight;
            // this.top = this.element.offsetTop + inputHeight;
            this.top = this._input.offsetTop + inputHeight;

            var abLeft = getElementLeft(this._input),
                abTop = getElementTop(this._input);

            if (abLeft + panelWidth > bodyWidth) {
                if (abLeft - bodyWidth > 0) {
                    this.left = -panelWidth;
                } else {
                    this.left = bodyWidth - panelWidth - abLeft;
                }
            }

            if (abTop + panelHeight > bodyHeight) {
                if (abTop - bodyHeight > 0) {
                    this.top = -panelHeight;
                } else {
                    this.top = bodyHeight - panelHeight - abTop;
                }
            }

            this._panel.style.left = this.left + 'px';
            this._panel.style.top = this.top + 'px';
        }

        this._panel.style.marginLeft = '0px';
        var callback = function callback(e) {
            if (e !== evt && e.target !== self._input && !hasClass(e.target, 'u-date-content-year-cell') && !hasClass(e.target, 'u-date-content-year-cell') && closest(e.target, 'u-date-panel') !== self._panel && self._inputFocus != true) {
                off$1(document, 'click', callback);
                self.onCancel();
            }
        };
        on$1(document, 'click', callback);

        //tab事件
        on$1(self._input, 'keydown', function (e) {
            var keyCode = e.keyCode;
            if (keyCode == 9) {
                self.onCancel();
            }
        });
    }

    this.isShow = true;
};

/**
 * 确定事件
 */
DateTimePicker$1.fn.onOk = function () {
    if (typeof this.options.beforeValueChangeFun == 'function') {
        if (!this.options.beforeValueChangeFun.call(this, this.pickerDate)) {
            return;
        }
    }
    if (this.pickerDate && this.pickerDate.setMilliseconds) this.pickerDate.setMilliseconds(0);
    var flag = true;
    if (this.beginDateObj) {
        if (this.pickerDate && this.pickerDate.getTime() < this.beginDateObj.getTime()) flag = false;
    }
    if (this.overDateObj) {
        if (this.pickerDate && this.pickerDate.getTime() > this.overDateObj.getTime()) flag = false;
    }
    if (flag) {
        if (typeof this.timezone != 'undefined' && this.timezone != null && this.timezone != '') {
            this.setDate(date.getDateByTimeZonez2c(this.pickerDate, this.timezone));
        } else {
            this.setDate(this.pickerDate);
        }
    }
    this.isShow = false;
    this.timeOpen = false;
    removeClass(this._panel, 'is-visible');
    try {
        document.body.removeChild(this.overlayDiv);
    } catch (e) {}
    if (flag) {
        var v = this.pickerDate;
        if (typeof this.timezone != 'undefined' && this.timezone != null && this.timezone != '') {
            v = date.getDateByTimeZonez2c(this.pickerDate, this.timezone);
        }
        this.trigger('select', {
            value: v
        });
        this.trigger('validate');
        if (u.isIE || u.isEdge) {
            this.element.querySelector('input').blur();
        }
    }
};

DateTimePicker$1.fn.hide = function () {
    this.isShow = false;
    this.timeOpen = false;
    removeClass(this._panel, 'is-visible');
};

/**
 * 确定事件
 */
DateTimePicker$1.fn.onCancel = function () {
    this.isShow = false;
    this.timeOpen = false;
    removeClass(this._panel, 'is-visible');
    try {
        document.body.removeChild(this.overlayDiv);
    } catch (e) {}
    this.trigger('validate');
};

DateTimePicker$1.fn.setDate = function (value) {
    if (!value) {
        this.date = null;
        this._input.value = '';
        return;
    }
    var obj = {};
    obj.timezone = this.timezone;
    var _date = date.getDateObj(value, obj);
    if (_date) {
        if (_date.setMilliseconds) _date.setMilliseconds(0);
        if (_date) {
            this.resetDataObj(_date);
        }
        if (this.beginDateObj) {
            if (this.beginDateObj) {
                this.resetDataObj(this.beginDateObj);
            }
            if (_date.getTime() < this.beginDateObj.getTime()) return;
        }
        if (this.overDateObj) {
            if (this.overDateObj) {
                this.resetDataObj(this.overDateObj);
            }
            if (_date.getTime() > this.overDateObj.getTime()) return;
        }
        this.date = _date;
        this._input.value = date.format(this.date, this.format);
    }
};
/**
 *设置format
 * @param format
 */
DateTimePicker$1.fn.setFormat = function (format) {
    this.format = format;
    this._input.value = date.format(this.date, this.format);
};

DateTimePicker$1.fn.setStartDate = function (startDate, type) {
    if (startDate) {
        var obj = {};
        obj.timezone = this.timezone;
        this.beginDateObj = date.getDateObj(startDate, obj);
        if (this.beginDateObj) {
            this.resetDataObj(this.beginDateObj);
            if (this.beginDateObj.setMilliseconds) this.beginDateObj.setMilliseconds(0);
        }
        /*if(type){
            switch (type) {
                case 'YYYY-MM':
                this.beginDateObj = udate.add(this.beginDateObj, 'M', 1);
                    break;
                case 'YYYY-MM-DD':
                this.beginDateObj = udate.add(this.beginDateObj, 'd', 1);
                    break;
            }
        }*/

        this.beginYear = this.beginDateObj.getFullYear();
        this.beginMonth = this.beginDateObj.getMonth();
        this.beginDate = this.beginDateObj.getDate();
    } else {
        this.beginDateObj = null;
        this.beginYear = null;
        this.beginMonth = null;
        this.beginDate = null;
    }
};

DateTimePicker$1.fn.setEndDate = function (endDate) {
    if (endDate) {
        var obj = {};
        obj.timezone = this.timezone;
        this.overDateObj = date.getDateObj(endDate, obj);
        if (this.overDateObj) {
            this.resetDataObj(this.overDateObj);
            if (this.overDateObj.setMilliseconds) this.overDateObj.setMilliseconds(0);
        }
        this.overYear = this.overDateObj.getFullYear();
        this.overMonth = this.overDateObj.getMonth();
        this.overDate = this.overDateObj.getDate();
    } else {
        this.overDateObj = null;
        this.overYear = null;
        this.overMonth = null;
        this.overDate = null;
    }
};

DateTimePicker$1.fn.setEnable = function (enable) {
    if (enable === true || enable === 'true') {
        this.enable = true;
    } else {
        this.enable = false;
    }
};

DateTimePicker$1.fn.resetDataObj = function (dataObj) {
    if (this.format.indexOf('h') < 0 && this.format.indexOf('H') < 0) {
        dataObj.setHours(0);
    }
    if (this.format.indexOf('m') < 0) {
        dataObj.setMinutes(0);
    }
    if (this.format.indexOf('s') < 0) {
        dataObj.setSeconds(0);
        dataObj.setMilliseconds(0);
    }
};

if (!env$1.isMobile) {
    if (u.compMgr) u.compMgr.regComp({
        comp: DateTimePicker$1,
        compAsString: 'u.DateTimePicker',
        css: 'u-datepicker'
    });
}

var MobDateTimePicker = u.BaseComponent.extend({});

MobDateTimePicker.fn = MobDateTimePicker.prototype;

MobDateTimePicker.fn.init = function () {
    var self = this,
        _fmt,
        _defaultFmt;

    var self = this,
        adapterType,
        format;
    this._element = this.element;
    this._input = this._element.querySelector("input");
    if (hasClass(this._element, 'time')) {
        this.type = 'datetime';
        _defaultFmt = 'YYYY-MM-DD hh:mm:ss';
    } else {
        this.type = 'date';
        _defaultFmt = 'YYYY-MM-DD';
    }
    _fmt = this._element.getAttribute("format");
    this.format = _fmt || this.options['format'] || _defaultFmt;
    this.isShow = false;
    this.op = {};
    var mobileDateFormat = "",
        mobileTimeFormat = "",
        dateOrder = "",
        timeOrder = "";
    if (env$1.isMobile) {
        switch (format) {
            case "YYYY-MM-DD":
                mobileDateFormat = "yy-mm-dd";
                dateOrder = mobileDateFormat.replace(/-/g, '');
                break;
            case "YYYY-MM-DD HH:mm":
                mobileDateFormat = "yy-mm-dd";
                mobileTimeFormat = "HH:ii";
                dateOrder = mobileDateFormat.replace(/-/g, '');
                timeOrder = mobileTimeFormat.replace(/\:/g, '');
                break;
            case "YYYY-MM":
                mobileDateFormat = "yy-mm";
                dateOrder = mobileDateFormat.replace(/-/g, '');
                break;
            default:
                mobileDateFormat = "yy-mm-dd";
                mobileTimeFormat = "HH:ii:ss";
                dateOrder = mobileDateFormat.replace(/-/g, '');
                timeOrder = mobileTimeFormat.replace(/\:/g, '');
        }

        this.op = {
            theme: "android-holo-light",
            mode: "scroller",
            lang: "zh",
            endYear: '9999',
            cancelText: null,
            dateFormat: mobileDateFormat,
            timeWheels: timeOrder,
            dateWheels: dateOrder,
            timeFormat: mobileTimeFormat,
            onSelect: function onSelect(val) {
                if (typeof self.options.beforeValueChangeFun == 'function') {
                    if (!self.options.beforeValueChangeFun.call(this, this.pickerDate)) {
                        return;
                    }
                }
                self.setValue(val);
            }
        };
        this._span = this.element.querySelector("span");
        this.element = this.element.querySelector("input");
        this.element.setAttribute('readonly', 'readonly');
        if (this._span) {
            on$1(this._span, 'click', function (e) {
                self.element.focus();
                stopEvent(e);
            });
        }
        if (this.adapterType == 'date') {
            $(this.element).mobiscroll().date(this.op);
        } else {
            $(this.element).mobiscroll().datetime(this.op);
        }
    } else {
        this.comp = new DateTimePicker({
            el: this.element,
            format: this.maskerMeta.format,
            showFix: this.options.showFix,
            beforeValueChangeFun: this.beforeValueChangeFun
        });
    }

    this.element['u.DateTimePicker'] = this.comp;

    if (!env$1.isMobile) {
        this.comp.on('select', function (event) {
            self.setValue(event.value);
        });
    }

    if (!env$1.isMobile) {
        // 校验
        this.comp.on('validate', function (event) {
            self.doValidate();
        });
    }
};

MobDateTimePicker.fn.setValue = function (value) {
    if (!value) {
        this.date = null;
        this._input.value = '';
        return;
    }

    var _date = date.getDateObj(value);
    if (_date) {
        if (_date) {
            this.resetDataObj(_date);
        }
        if (this.beginDateObj) {
            if (this.beginDateObj) {
                this.resetDataObj(this.beginDateObj);
            }
            if (_date.getTime() < this.beginDateObj.getTime()) return;
        }
        if (this.overDateObj) {
            if (this.overDateObj) {
                this.resetDataObj(this.overDateObj);
            }
            if (_date.getTime() > this.overDateObj.getTime()) return;
        }
        this.date = _date;
        this._input.value = date.format(this.date, this.format);
    }
    this.trigger('valueChange', {
        value: value
    });
};

MobDateTimePicker.fn.resetDataObj = function (dataObj) {
    if (this.format.indexOf('h') < 0 && this.format.indexOf('H') < 0) {
        dataObj.setHours(0);
    }
    if (this.format.indexOf('m') < 0) {
        dataObj.setMinutes(0);
    }
    if (this.format.indexOf('s') < 0) {
        dataObj.setSeconds(0);
        dataObj.setMilliseconds(0);
    }
};

if (env$1.isMobile) {
    if (u.compMgr) u.compMgr.regComp({
        comp: MobDateTimePicker,
        compAsString: 'u.DateTimePicker',
        css: 'u-datepicker'
    });
}

var Time = u.BaseComponent.extend({
    DEFAULTS: {},
    init: function init() {
        var self = this;
        var element = this.element;
        this.options = extend({}, this.DEFAULTS, this.options);
        this.panelDiv = null;
        this.input = this.element.querySelector("input");
        addClass(this.element, 'u-text');

        on$1(this.input, 'blur', function (e) {
            self._inputFocus = false;
            this.setValue(this.input.value);
        }.bind(this));

        // 添加focus事件
        this.focusEvent();
        // 添加右侧图标click事件
        this.clickEvent();
    }
});

Time.fn = Time.prototype;

Time.fn.createPanel = function () {
    if (this.panelDiv) return;
    var oThis = this;
    this.panelDiv = makeDOM('<div class="u-date-panel" style="padding:0px;"></div>');
    this.panelContentDiv = makeDOM('<div class="u-time-content"></div>');
    this.panelDiv.appendChild(this.panelContentDiv);
    this.panelHourDiv = makeDOM('<div class="u-time-cell"></div>');
    this.panelContentDiv.appendChild(this.panelHourDiv);
    this.panelHourInput = makeDOM('<input class="u-time-input">');
    this.panelHourDiv.appendChild(this.panelHourInput);
    this.panelMinDiv = makeDOM('<div class="u-time-cell"></div>');
    this.panelContentDiv.appendChild(this.panelMinDiv);
    this.panelMinInput = makeDOM('<input class="u-time-input">');
    this.panelMinDiv.appendChild(this.panelMinInput);
    this.panelSecDiv = makeDOM('<div class="u-time-cell"></div>');
    this.panelContentDiv.appendChild(this.panelSecDiv);
    this.panelSecInput = makeDOM('<input class="u-time-input">');
    this.panelSecDiv.appendChild(this.panelSecInput);
    this.panelNavDiv = makeDOM('<div class="u-time-nav"></div>');
    this.panelDiv.appendChild(this.panelNavDiv);
    this.panelOKButton = makeDOM('<button class="u-button" style="float:right;">OK</button>');
    this.panelNavDiv.appendChild(this.panelOKButton);
    on$1(this.panelOKButton, 'click', function () {
        var v = oThis.panelHourInput.value + ':' + oThis.panelMinInput.value + ':' + oThis.panelSecInput.value;
        oThis.setValue(v);
        oThis.hide();
    });
    this.panelCancelButton = makeDOM('<button class="u-button" style="float:right;">Cancel</button>');
    this.panelNavDiv.appendChild(this.panelCancelButton);
    on$1(this.panelCancelButton, 'click', function () {
        oThis.hide();
    });

    var d = new Date();
    this.panelHourInput.value = d.getHours() > 9 ? '' + d.getHours() : '0' + d.getHours();
    this.panelMinInput.value = d.getMinutes() > 9 ? '' + d.getMinutes() : '0' + d.getMinutes();
    this.panelSecInput.value = d.getSeconds() > 9 ? '' + d.getSeconds() : '0' + d.getSeconds();
};

Time.fn.setValue = function (value) {
    var hour = '',
        min = '',
        sec = '';
    value = value ? value : '';
    if (value == this.input.value) return;
    if (value && value.indexOf(':') > -1) {
        var vA = value.split(":");
        var hour = vA[0];
        hour = hour % 24;
        hour = hour > 9 ? '' + hour : '0' + hour;
        var min = vA[1];
        min = min % 60;
        min = min > 9 ? '' + min : '0' + min;
        var sec = vA[2];
        sec = sec % 60;
        sec = sec > 9 ? '' + sec : '0' + sec;

        value = hour + ':' + min + ':' + sec;
    }
    this.input.value = value;
    this.createPanel();

    this.panelHourInput.value = hour;
    this.panelMinInput.value = min;
    this.panelSecInput.value = sec;
    this.trigger('valueChange', {
        value: value
    });
};

Time.fn.focusEvent = function () {
    var self = this;
    on$1(this.input, 'focus', function (e) {
        self._inputFocus = true;
        self.show(e);
        stopEvent(e);
    });
};

//下拉图标的点击事件
Time.fn.clickEvent = function () {
    var self = this;
    var caret = this.element.nextSibling;
    on$1(caret, 'click', function (e) {
        self.input.focus();
        stopEvent(e);
    });
};

Time.fn.show = function (evt) {

    var inputValue = this.input.value;
    this.setValue(inputValue);

    var oThis = this;
    this.createPanel();

    /*因为元素可能变化位置，所以显示的时候需要重新计算*/
    this.width = this.element.offsetWidth;
    if (this.width < 300) this.width = 300;

    this.panelDiv.style.width = this.width + 'px';
    this.panelDiv.style.maxWidth = this.width + 'px';
    if (this.options.showFix) {
        document.body.appendChild(this.panelDiv);
        this.panelDiv.style.position = 'fixed';
        showPanelByEle({
            ele: this.input,
            panel: this.panelDiv,
            position: "bottomLeft"
        });
    } else {
        // this.element.parentNode.appendChild(this.panelDiv);
        // //调整left和top
        // this.left = this.element.offsetLeft;
        // var inputHeight = this.element.offsetHeight;
        // this.top = this.element.offsetTop + inputHeight;
        // this.panelDiv.style.left = this.left + 'px';
        // this.panelDiv.style.top = this.top + 'px';

        var bodyWidth = document.body.clientWidth,
            bodyHeight = document.body.clientHeight,
            panelWidth = this.panelDiv.offsetWidth,
            panelHeight = this.panelDiv.offsetHeight;

        this.element.appendChild(this.panelDiv);
        this.element.style.position = 'relative';
        this.left = this.input.offsetLeft;
        var inputHeight = this.input.offsetHeight;
        this.top = this.input.offsetTop + inputHeight;

        if (this.left + panelWidth > bodyWidth) {
            this.left = bodyWidth - panelWidth;
        }

        if (this.top + panelHeight > bodyHeight) {
            this.top = bodyHeight - panelHeight;
        }

        this.panelDiv.style.left = this.left + 'px';
        this.panelDiv.style.top = this.top + 'px';
    }

    this.panelDiv.style.zIndex = getZIndex();
    addClass(this.panelDiv, 'is-visible');

    var callback = function (e) {
        if (e !== evt && e.target !== this.input && !oThis.clickPanel(e.target) && oThis._inputFocus != true) {
            off$1(document, 'click', callback);
            // document.removeEventListener('click', callback);
            this.hide();
        }
    }.bind(this);
    on$1(document, 'click', callback);
    // document.addEventListener('click', callback);
};

Time.fn.clickPanel = function (dom) {
    while (dom) {
        if (dom == this.panelDiv) {
            return true;
        } else {
            dom = dom.parentNode;
        }
    }
    return false;
};

Time.fn.hide = function () {
    removeClass(this.panelDiv, 'is-visible');
    this.panelDiv.style.zIndex = -1;
};

if (u.compMgr) {
    u.compMgr.regComp({
        comp: Time,
        compAsString: 'u.Time',
        css: 'u-time'
    });
    if (env$1.isIE8) {
        u.compMgr.regComp({
            comp: Time,
            compAsString: 'u.ClockPicker',
            css: 'u-clockpicker'
        });
    }
}

/**
 * Module : neoui-clockpicker
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2016-08-11 15:17:07
 */

var ClockPicker = u.BaseComponent.extend({
    DEFAULTS: {},
    init: function init() {
        var self = this;
        var element = this.element;
        this.options = extend({}, this.DEFAULTS, this.options);
        this.format = this.options['format'] || core.getMaskerMeta('time').format;
        this.panelDiv = null;
        this.input = this.element.querySelector("input");
        if (env$1.isMobile) {
            this.input.setAttribute('readonly', 'readonly');
        }
        addClass(this.element, 'u-text');

        this.template = '<div class="u-clock-ul popover clockpicker-popover" style="padding:0px;">';
        this.template += '<div class="popover-title"><button class="u-button u-date-clean u-clock-clean" >';
        this.template += trans('public.clear', "清空");
        this.template += '</button><span class="clockpicker-span-hours">02</span> : <span class="clockpicker-span-minutes text-primary">01</span><span class="clockpicker-span-am-pm"></span></div>';
        this.template += '<div class="popover-content">';
        this.template += '	<div class="clockpicker-plate">';
        this.template += '		<div class="clockpicker-canvas">';
        this.template += '			<svg class="clockpicker-svg">';
        this.template += '				<g transform="translate(100,100)">';
        this.template += '					<circle class="clockpicker-canvas-bg clockpicker-canvas-bg-trans" r="13" cx="8.362277061412277" cy="-79.56175162946187"></circle>';
        this.template += '					<circle class="clockpicker-canvas-fg" r="3.5" cx="8.362277061412277" cy="-79.56175162946187"></circle>';
        this.template += '					<line x1="0" y1="0" x2="8.362277061412277" y2="-79.56175162946187"></line>';
        this.template += '					<circle class="clockpicker-canvas-bearing" cx="0" cy="0" r="2"></circle>';
        this.template += '				</g>';
        this.template += '			</svg>';
        this.template += '		</div>';
        this.template += '		<div class="clockpicker-dial clockpicker-hours" style="visibility: visible;">';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-1" >00</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-2" >1</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-3" >2</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-4" >3</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-5" >4</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-6" >5</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-7" >6</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-8" >7</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-9" >8</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-10" >9</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-11" >10</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-12" >11</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-13" >12</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-14" >13</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-15" >14</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-16" >15</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-17" >16</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-18" >17</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-19" >18</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-20" >19</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-21" >20</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-22" >21</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-23" >22</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-24" >23</div>';
        this.template += '		</div>';
        this.template += '		<div class="clockpicker-dial clockpicker-minutes" style="visibility: hidden;">';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-25" >00</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-26" >05</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-27" >10</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-28" >15</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-29" >20</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-30" >25</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-31" >30</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-32" >35</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-33" >40</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-34" >45</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-35" >50</div>';
        this.template += '			<div class="clockpicker-tick clockpicker-tick-36" >55</div>';
        this.template += '		</div>';
        this.template += '	</div><span class="clockpicker-am-pm-block"></span></div>';
        this.template += '	</div>';
        on$1(this.input, 'blur', function (e) {
            self._inputFocus = false;
            this.setValue(this.input.value);
        }.bind(this));

        var d = new Date();
        this.defaultHour = d.getHours() > 9 ? '' + d.getHours() : '0' + d.getHours();
        this.defaultMin = d.getMinutes() > 9 ? '' + d.getMinutes() : '0' + d.getMinutes();
        this.defaultSec = d.getSeconds() > 9 ? '' + d.getSeconds() : '0' + d.getSeconds();

        this.hours = this.defaultHour;
        this.min = this.defaultMin;
        this.sec = this.defaultSec;
        // 添加focus事件
        this.focusEvent();
        // 添加右侧图标click事件
        this.clickEvent();
    },

    _zoomIn: function _zoomIn(newPage) {

        addClass(newPage, 'zoom-in');

        var cleanup = function () {
            off$1(newPage, 'transitionend', cleanup);
            off$1(newPage, 'webkitTransitionEnd', cleanup);
            // this.panelContentDiv.removeChild(this.contentPage);
            this.contentPage = newPage;
        }.bind(this);
        if (this.contentPage) {
            on$1(newPage, 'transitionend', cleanup);
            on$1(newPage, 'webkitTransitionEnd', cleanup);
        }
        setTimeout(function () {
            newPage.style.visibility = 'visible';
            removeClass(newPage, 'zoom-in');
        }, 150);
    },

    createPanel: function createPanel() {
        if (this.panelDiv) return;
        var oThis = this;
        this.panelDiv = makeDOM(this.template);

        this.hand = this.panelDiv.querySelector('line');
        this.bg = this.panelDiv.querySelector('.clockpicker-canvas-bg');
        this.fg = this.panelDiv.querySelector('.clockpicker-canvas-fg');
        this.titleHourSpan = this.panelDiv.querySelector('.clockpicker-span-hours');
        this.titleMinSpan = this.panelDiv.querySelector('.clockpicker-span-minutes');
        this.hourDiv = this.panelDiv.querySelector('.clockpicker-hours');
        this.minDiv = this.panelDiv.querySelector('.clockpicker-minutes');
        this.btnClean = this.panelDiv.querySelector('.u-date-clean');
        if (!env$1.isMobile) this.btnClean.style.display = 'none';
        this.currentView = 'hours';
        on$1(this.hourDiv, 'click', function (e) {
            var target = e.target;
            if (hasClass(target, 'clockpicker-tick')) {
                this.hours = target.innerHTML;
                this.hours = this.hours > 9 || this.hours == 0 ? '' + this.hours : '0' + this.hours;
                this.titleHourSpan.innerHTML = this.hours;
                this.hourDiv.style.visibility = 'hidden';
                // this.minDiv.style.visibility = 'visible';
                this._zoomIn(this.minDiv);
                this.currentView = 'min';
                this.setHand();
            }
        }.bind(this));

        on$1(this.minDiv, 'click', function (e) {
            var target = e.target;
            if (hasClass(target, 'clockpicker-tick')) {
                this.min = target.innerHTML;
                // this.min = this.min > 9 || this.min == 00? '' + this.min:'0' + this.min;
                this.titleMinSpan.innerHTML = this.min;
                this.minDiv.style.visibility = 'hidden';
                this.hourDiv.style.visibility = 'visible';
                this.currentView = 'hours';
                var v = this.hours + ':' + this.min + ':' + this.sec;
                this.setValue(v);
                this.hide();
            }
        }.bind(this));

        on$1(this.btnClean, 'click', function (e) {
            this.setValue("");
            this.hide();
        }.bind(this));
    },

    setHand: function setHand() {
        var dialRadius = 100,
            innerRadius = 54,
            outerRadius = 80;
        var view = this.currentView,
            value = this[view],
            isHours = view === 'hours',
            unit = Math.PI / (isHours ? 6 : 30),
            radian = value * unit,
            radius = isHours && value > 0 && value < 13 ? innerRadius : outerRadius,
            x = Math.sin(radian) * radius,
            y = -Math.cos(radian) * radius;
        this.setHandFun(x, y);
    },

    setHandFun: function setHandFun(x, y, roundBy5, dragging) {
        var dialRadius = 100,
            innerRadius = 54,
            outerRadius = 80;

        var radian = Math.atan2(x, -y),
            isHours = this.currentView === 'hours',
            unit = Math.PI / (isHours ? 6 : 30),
            z = Math.sqrt(x * x + y * y),
            options = this.options,
            inner = isHours && z < (outerRadius + innerRadius) / 2,
            radius = inner ? innerRadius : outerRadius,
            value;

        if (this.twelvehour) {
            radius = outerRadius;
        }

        // Radian should in range [0, 2PI]
        if (radian < 0) {
            radian = Math.PI * 2 + radian;
        }

        // Get the round value
        value = Math.round(radian / unit);

        // Get the round radian
        radian = value * unit;

        // Correct the hours or minutes
        if (options.twelvehour) {
            if (isHours) {
                if (value === 0) {
                    value = 12;
                }
            } else {
                if (roundBy5) {
                    value *= 5;
                }
                if (value === 60) {
                    value = 0;
                }
            }
        } else {
            if (isHours) {
                if (value === 12) {
                    value = 0;
                }
                value = inner ? value === 0 ? 12 : value : value === 0 ? 0 : value + 12;
            } else {
                if (roundBy5) {
                    value *= 5;
                }
                if (value === 60) {
                    value = 0;
                }
            }
        }

        // Set clock hand and others' position
        var w = this.panelDiv.querySelector('.clockpicker-plate').offsetWidth;
        var u = w / 200;
        var cx = Math.sin(radian) * radius * u,
            cy = -Math.cos(radian) * radius * u;
        var iu = 100 * u;
        this.panelDiv.querySelector('g').setAttribute('transform', 'translate(' + iu + ',' + iu + ')');

        this.hand.setAttribute('x2', cx);
        this.hand.setAttribute('y2', cy);
        this.bg.setAttribute('cx', cx);
        this.bg.setAttribute('cy', cy);
        this.fg.setAttribute('cx', cx);
        this.fg.setAttribute('cy', cy);
    },

    setValue: function setValue(value) {
        value = value ? value : '';
        var oldShowValue;
        if (value == '') {
            if (this.input.value != '') {
                this.input.value = '';
                this.trigger('valueChange', {
                    value: ''
                });
            }
            return;
        }

        if (value && value.indexOf(':') > -1) {
            var vA = value.split(":");
            var hour = vA[0];
            hour = hour % 24;
            this.hours = hour > 9 ? '' + hour : '0' + hour;
            var min = vA[1];
            min = min % 60;
            this.min = min > 9 ? '' + min : '0' + min;
            var sec = vA[2] || 0;
            sec = sec % 60;
            this.sec = sec > 9 ? '' + sec : '0' + sec;

            value = this.hours + ':' + this.min + ':' + this.sec;
        } else {
            this.hours = this.defaultHour;
            this.min = this.defaultMin;
            this.sec = this.defaultSec;
        }
        var _date = new Date();
        _date.setHours(this.hours);
        _date.setMinutes(this.min);
        _date.setSeconds(this.sec);
        var showValue = date.format(_date, this.format);
        oldShowValue = this.input.value;
        this.input.value = showValue;
        if (oldShowValue != showValue) {
            this.trigger('valueChange', {
                value: value
            });
        }
    },

    focusEvent: function focusEvent() {
        var self = this;
        on$1(this.input, 'focus', function (e) {
            self._inputFocus = true;
            self.show(e);
            if (e.stopPropagation) {
                e.stopPropagation();
            } else {
                e.cancelBubble = true;
            }
        });
    },

    //下拉图标的点击事件
    clickEvent: function clickEvent() {
        var self = this;
        var caret = this.element.nextSibling;
        on$1(caret, 'click', function (e) {
            self._inputFocus = true;
            self.show(e);
            if (e.stopPropagation) {
                e.stopPropagation();
            } else {
                e.cancelBubble = true;
            }
        });
    },

    show: function show(evt) {

        var inputValue = this.input.value;
        this.setValue(inputValue);

        var self = this;
        this.createPanel();
        this.minDiv.style.visibility = 'hidden';
        this.hourDiv.style.visibility = 'visible';
        this.currentView = 'hours';
        this.titleHourSpan.innerHTML = this.hours;
        this.titleMinSpan.innerHTML = this.min;

        /*因为元素可能变化位置，所以显示的时候需要重新计算*/
        if (env$1.isMobile) {
            this.panelDiv.style.position = 'fixed';
            this.panelDiv.style.top = '20%';
            var screenW = document.body.clientWidth;
            var l = (screenW - 226) / 2;
            this.panelDiv.style.left = l + 'px';
            this.overlayDiv = makeModal$1(this.panelDiv);
            on$1(this.overlayDiv, 'click', function () {
                self.hide();
            });
        } else {
            if (this.options.showFix) {
                document.body.appendChild(this.panelDiv);
                this.panelDiv.style.position = 'fixed';
                showPanelByEle({
                    ele: this.input,
                    panel: this.panelDiv,
                    position: "bottomLeft"
                });
            } else {

                var bodyWidth = document.body.clientWidth,
                    bodyHeight = document.body.clientHeight,
                    panelWidth = this.panelDiv.offsetWidth,
                    panelHeight = this.panelDiv.offsetHeight;

                this.element.appendChild(this.panelDiv);
                this.element.style.position = 'relative';
                this.left = this.input.offsetLeft;
                var inputHeight = this.input.offsetHeight;
                this.top = this.input.offsetTop + inputHeight;

                if (this.left + panelWidth > bodyWidth) {
                    this.left = bodyWidth - panelWidth;
                }

                if (this.top + panelHeight > bodyHeight) {
                    this.top = bodyHeight - panelHeight;
                }

                this.panelDiv.style.left = this.left + 'px';
                this.panelDiv.style.top = this.top + 'px';
            }
        }

        this.panelDiv.style.zIndex = getZIndex();
        addClass(this.panelDiv, 'is-visible');

        this.setHand();

        var callback = function (e) {
            if (e !== evt && e.target !== this.input && !self.clickPanel(e.target) && self._inputFocus != true) {
                off$1(document, 'click', callback);
                this.hide();
            }
        }.bind(this);
        on$1(document, 'click', callback);

        //tab事件
        on$1(self.input, 'keydown', function (e) {
            var keyCode = e.keyCode;
            if (keyCode == 9) {
                self.hide();
            }
        });
    },

    clickPanel: function clickPanel(dom) {
        while (dom) {
            if (dom == this.panelDiv) {
                return true;
            } else {
                dom = dom.parentNode;
            }
        }
        return false;
    },

    hide: function hide() {
        removeClass(this.panelDiv, 'is-visible');
        this.panelDiv.style.zIndex = -1;
        if (this.overlayDiv) {
            try {
                document.body.removeChild(this.overlayDiv);
            } catch (e) {}
        }
    }
});
if (!env$1.isIE8) {
    if (u.compMgr) u.compMgr.regComp({
        comp: ClockPicker,
        compAsString: 'u.ClockPicker',
        css: 'u-clockpicker'
    });
}

/**
 * Module : neoui-month
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2016-08-11 15:17:07
 */
var Month = u.BaseComponent.extend({
    DEFAULTS: {},
    init: function init() {
        var self = this;
        var element = this.element;
        this.options = extend({}, this.DEFAULTS, this.options);
        this.panelDiv = null;
        this.input = this.element.querySelector("input");

        var d = new Date();
        this.month = d.getMonth() + 1;
        this.defaultMonth = this.month;

        on$1(this.input, 'blur', function (e) {
            self._inputFocus = false;
            this.setValue(this.input.value);
        }.bind(this));

        // 添加focus事件
        this.focusEvent();
        // 添加右侧图标click事件
        this.clickEvent();
        // 添加keydown事件
        this.keydownEvent();
    },

    createPanel: function createPanel() {
        if (this.panelDiv) {
            this._fillMonth();
            return;
        }
        var oThis = this;
        this.panelDiv = makeDOM('<div class="u-date-panel" style="margin:0px;"></div>');
        this.panelContentDiv = makeDOM('<div class="u-date-content"></div>');
        this.panelDiv.appendChild(this.panelContentDiv);

        this.preBtn = makeDOM('<button class="u-date-pre-button u-button flat floating mini" style="display:none;">&lt;</button>');
        this.nextBtn = makeDOM('<button class="u-date-next-button u-button flat floating mini" style="display:none;">&gt;</button>');

        on$1(this.preBtn, 'click', function (e) {
            oThis.startYear -= 10;
            oThis._fillYear();
        });
        on$1(this.nextBtn, 'click', function (e) {
            oThis.startYear += 10;
            oThis._fillYear();
        });
        this.panelContentDiv.appendChild(this.preBtn);
        this.panelContentDiv.appendChild(this.nextBtn);
        this._fillMonth();
    },

    /**
     * 填充月份选择面板
     * @private
     */
    _fillMonth: function _fillMonth() {
        var oldPanel, template, monthPage, _month, cells, i;
        oldPanel = this.panelContentDiv.querySelector('.u-date-content-page');
        if (oldPanel) this.panelContentDiv.removeChild(oldPanel);
        _month = this.month;
        var _defaultMonth = _month + '月';
        var monthIndex = date._jsonLocale.defaultMonth.indexOf(_defaultMonth);
        template = ['<div class="u-date-content-page">', '<div class="u-date-content-title">' + date._jsonLocale.monthsShort[monthIndex] + '</div>', '<div class="u-date-content-panel">', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[0] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[1] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[2] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[3] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[4] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[5] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[6] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[7] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[8] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[9] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[10] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[11] + '</div>', '</div>', '</div>'].join("");

        monthPage = makeDOM(template);
        cells = monthPage.querySelectorAll('.u-date-content-year-cell');
        for (i = 0; i < cells.length; i++) {
            if (_month == i + 1) {
                addClass(cells[i], 'current');
            }
            cells[i]._value = i + 1;
            new URipple(cells[i]);
        }
        on$1(monthPage, 'click', function (e) {
            var _m = e.target._value;
            this.month = _m;
            monthPage.querySelector('.u-date-content-title').innerHTML = _m + '月';
            this.setValue(_m);
            this.hide();
        }.bind(this));

        this.preBtn.style.display = 'none';
        this.nextBtn.style.display = 'none';
        this.panelContentDiv.appendChild(monthPage);
        this.currentPanel = 'month';
    },

    setValue: function setValue(value) {
        value = value ? value : '';
        this.value = value;
        if (parseInt(this.value) > 0 && parseInt(this.value) < 13) {
            this.month = value;
            this.input.value = this.month;
            this.trigger('valueChange', {
                value: value
            });
        } else {
            this.month = this.defaultMonth;
            this.input.value = '';
        }
    },

    focusEvent: function focusEvent() {
        var self = this;
        on$1(this.input, 'focus', function (e) {
            self._inputFocus = true;
            self.show(e);

            if (e.stopPropagation) {
                e.stopPropagation();
            } else {
                e.cancelBubble = true;
            }
        });
    },
    keydownEvent: function keydownEvent() {
        var self = this;
        on$1(self.input, "keydown", function (e) {
            var code = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
            if (!(code >= 48 && code <= 57 || code == 37 || code == 39 || code == 8 || code == 46)) {
                //阻止默认浏览器动作(W3C)
                if (e && e.preventDefault) e.preventDefault();
                //IE中阻止函数器默认动作的方式
                else window.event.returnValue = false;
                return false;
            }
        });
    },

    //下拉图标的点击事件
    clickEvent: function clickEvent() {
        var self = this;
        var caret = this.element.nextSibling;
        on$1(caret, 'click', function (e) {
            self.input.focus();
            stopEvent(e);
        });
    },

    show: function show(evt) {
        var oThis = this;
        this.createPanel();

        this.width = this.element.offsetWidth;
        if (this.width < 300) this.width = 300;
        if (this.options.showFix) {
            document.body.appendChild(this.panelDiv);
            this.panelDiv.style.position = 'fixed';
            showPanelByEle({
                ele: this.input,
                panel: this.panelDiv,
                position: "bottomLeft"
            });
        } else {
            var bodyWidth = document.body.clientWidth,
                bodyHeight = document.body.clientHeight,
                panelWidth = this.panelDiv.offsetWidth,
                panelHeight = this.panelDiv.offsetHeight;

            this.element.appendChild(this.panelDiv);
            this.element.style.position = 'relative';
            this.left = this.input.offsetLeft;
            var inputHeight = this.input.offsetHeight;
            this.top = this.input.offsetTop + inputHeight;

            if (this.left + panelWidth > bodyWidth) {
                this.left = bodyWidth - panelWidth;
            }

            if (this.top + panelHeight > bodyHeight) {
                this.top = bodyHeight - panelHeight;
            }

            this.panelDiv.style.left = this.left + 'px';
            this.panelDiv.style.top = this.top + 'px';
        }

        this.panelDiv.style.width = 152 + 'px';
        this.panelDiv.style.zIndex = getZIndex();
        addClass(this.panelDiv, 'is-visible');

        var callback = function (e) {
            if (e !== evt && e.target !== this.input && !oThis.clickPanel(e.target) && oThis._inputFocus != true) {
                off$1(document, 'click', callback);
                // document.removeEventListener('click', callback);
                this.hide();
            }
        }.bind(this);
        on$1(document, 'click', callback);
    },

    clickPanel: function clickPanel(dom) {
        while (dom) {
            if (dom == this.panelDiv) {
                return true;
            } else {
                dom = dom.parentNode;
            }
        }
        return false;
    },

    hide: function hide() {
        removeClass(this.panelDiv, 'is-visible');
        this.panelDiv.style.zIndex = -1;
    }
});
if (u.compMgr) u.compMgr.regComp({
    comp: Month,
    compAsString: 'u.Month',
    css: 'u-month'
});

/**
 * Module : neoui-year
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2016-08-11 15:17:07
 */

var Year = u.BaseComponent.extend({
    DEFAULTS: {},
    init: function init() {
        var self = this;
        var element = this.element;
        this.options = extend({}, this.DEFAULTS, this.options);
        this.panelDiv = null;
        this.input = this.element.querySelector("input");

        var d = new Date();
        this.year = d.getFullYear();
        this.defaultYear = this.year;
        this.startYear = this.year - this.year % 10 - 1;

        on$1(this.input, 'blur', function (e) {
            self._inputFocus = false;
            self.setValue(self.input.value);
        });

        // 添加focus事件
        this.focusEvent();
        // 添加右侧图标click事件
        this.clickEvent();
        // 添加keydown事件
        this.keydownEvent();
    },

    createPanel: function createPanel() {
        if (this.panelDiv) {
            this._fillYear();
            return;
        }
        var oThis = this;
        this.panelDiv = makeDOM('<div class="u-date-panel" style="margin:0px;"></div>');
        this.panelContentDiv = makeDOM('<div class="u-date-content"></div>');
        this.panelDiv.appendChild(this.panelContentDiv);

        this.preBtn = makeDOM('<button class="u-date-pre-button u-button mini">&lt;</button>');
        this.nextBtn = makeDOM('<button class="u-date-next-button u-button mini">&gt;</button>');

        on$1(this.preBtn, 'click', function (e) {
            oThis.startYear -= 10;
            oThis._fillYear();
        });
        on$1(this.nextBtn, 'click', function (e) {
            oThis.startYear += 10;
            oThis._fillYear();
        });
        this.panelContentDiv.appendChild(this.preBtn);
        this.panelContentDiv.appendChild(this.nextBtn);
        this._fillYear();
    },

    /**
     *填充年份选择面板
     * @private
     */
    _fillYear: function _fillYear(type) {
        var oldPanel, year, template, yearPage, titleDiv, yearDiv, i, cell;
        oldPanel = this.panelContentDiv.querySelector('.u-date-content-page');
        if (oldPanel) this.panelContentDiv.removeChild(oldPanel);
        template = ['<div class="u-date-content-page">', '<div class="u-date-content-title"></div>', '<div class="u-date-content-panel"></div>', '</div>'].join("");
        yearPage = makeDOM(template);
        titleDiv = yearPage.querySelector('.u-date-content-title');
        titleDiv.innerHTML = this.startYear + '-' + (this.startYear + 11);
        yearDiv = yearPage.querySelector('.u-date-content-panel');
        for (i = 0; i < 12; i++) {
            cell = makeDOM('<div class="u-date-content-year-cell">' + (this.startYear + i) + '</div>');
            new URipple(cell);
            if (this.startYear + i == this.year) {
                addClass(cell, 'current');
            }
            cell._value = this.startYear + i;
            yearDiv.appendChild(cell);
        }
        on$1(yearDiv, 'click', function (e) {
            var _y = e.target._value;
            this.year = _y;
            this.setValue(_y);
            this.hide();
            stopEvent(e);
        }.bind(this));

        this.preBtn.style.display = 'block';
        this.nextBtn.style.display = 'block';
        this.panelContentDiv.appendChild(yearPage);

        this.currentPanel = 'year';
    },

    setValue: function setValue(value) {
        value = value ? value : '';
        this.value = value;
        if (value) {
            this.year = value;
        } else {
            this.year = this.defaultYear;
        }
        this.startYear = this.year - this.year % 10 - 1;
        this.input.value = value;
        this.trigger('valueChange', {
            value: value
        });
    },

    focusEvent: function focusEvent() {
        var self = this;
        on$1(this.input, 'focus', function (e) {
            self._inputFocus = true;
            self.show(e);
            stopEvent(e);
        });
    },
    keydownEvent: function keydownEvent() {
        var self = this;
        on$1(self.input, "keydown", function (e) {
            var code = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
            if (!(code >= 48 && code <= 57 || code == 37 || code == 39 || code == 8 || code == 46)) {
                //阻止默认浏览器动作(W3C)
                if (e && e.preventDefault) e.preventDefault();
                //IE中阻止函数器默认动作的方式
                else window.event.returnValue = false;
                return false;
            }
        });
    },
    //下拉图标的点击事件
    clickEvent: function clickEvent() {
        var self = this;
        var caret = this.element.nextSibling;
        on$1(caret, 'click', function (e) {
            self.input.focus();
            stopEvent(e);
        });
    },

    show: function show(evt) {
        var oThis = this;
        this.createPanel();

        this.width = this.element.offsetWidth;
        if (this.width < 300) this.width = 300;

        this.panelDiv.style.width = 152 + 'px';
        if (this.options.showFix) {
            document.body.appendChild(this.panelDiv);
            this.panelDiv.style.position = 'fixed';
            showPanelByEle({
                ele: this.input,
                panel: this.panelDiv,
                position: "bottomLeft"
            });
        } else {
            var bodyWidth = document.body.clientWidth,
                bodyHeight = document.body.clientHeight,
                panelWidth = this.panelDiv.offsetWidth,
                panelHeight = this.panelDiv.offsetHeight;

            this.element.appendChild(this.panelDiv);
            this.element.style.position = 'relative';
            this.left = this.input.offsetLeft;
            var inputHeight = this.input.offsetHeight;
            this.top = this.input.offsetTop + inputHeight;

            if (this.left + panelWidth > bodyWidth) {
                this.left = bodyWidth - panelWidth;
            }

            if (this.top + panelHeight > bodyHeight) {
                this.top = bodyHeight - panelHeight;
            }

            this.panelDiv.style.left = this.left + 'px';
            this.panelDiv.style.top = this.top + 'px';
        }
        this.panelDiv.style.zIndex = getZIndex();
        addClass(this.panelDiv, 'is-visible');

        var callback = function (e) {
            if (e !== evt && e.target !== this.input && !oThis.clickPanel(e.target) && oThis._inputFocus != true) {
                off$1(document, 'click', callback);
                // document.removeEventListener('click', callback);
                this.hide();
            }
        }.bind(this);
        on$1(document, 'click', callback);
        // document.addEventListener('click', callback);
    },

    clickPanel: function clickPanel(dom) {
        while (dom) {
            if (dom == this.panelDiv) {
                return true;
            } else {
                dom = dom.parentNode;
            }
        }
        return false;
    },
    hide: function hide() {
        removeClass(this.panelDiv, 'is-visible');
        this.panelDiv.style.zIndex = -1;
    }
});

if (u.compMgr) u.compMgr.regComp({
    comp: Year,
    compAsString: 'u.Year',
    css: 'u-year'
});

/**
 * Module : neoui-year
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-11 15:17:07
 */

var YearMonth = u.BaseComponent.extend({
    DEFAULTS: {},
    init: function init() {
        var _fmt, _defaultFmt;
        var self = this;
        var element = this.element;
        this.options = extend({}, this.DEFAULTS, this.options);
        this.panelDiv = null;
        this.input = this.element.querySelector("input");

        _defaultFmt = "YYYY-M";
        _fmt = this.element.getAttribute("format");
        this.format = _fmt || this.options['format'] || _defaultFmt;

        var d = new Date();
        this.year = d.getFullYear();
        this.startYear = this.year - this.year % 10 - 1;
        this.month = d.getMonth() + 1;

        on$1(this.input, 'blur', function (e) {
            self._inputFocus = false;
            self.setValue(self.input.value);
        });

        // 添加focus事件
        this.focusEvent();
        // 添加右侧图标click事件
        this.clickEvent();
    },

    createPanel: function createPanel() {
        if (this.panelDiv) {
            this._fillYear();
            return;
        }
        var oThis = this;
        this.panelDiv = makeDOM('<div class="u-date-panel" style="margin:0px;"></div>');
        this.panelContentDiv = makeDOM('<div class="u-date-content"></div>');
        this.panelDiv.appendChild(this.panelContentDiv);

        // this.preBtn = makeDOM('<button class="u-date-pre-button u-button flat floating mini" style="display:none;">&lt;</button>');
        // this.nextBtn = makeDOM('<button class="u-date-next-button u-button flat floating mini" style="display:none;">&gt;</button>');
        this.preBtn = makeDOM('<button class="u-date-pre-button u-button mini">&lt;</button>');
        this.nextBtn = makeDOM('<button class="u-date-next-button u-button mini">&gt;</button>');

        on$1(this.preBtn, 'click', function (e) {
            oThis.startYear -= 10;
            oThis._fillYear();
        });
        on$1(this.nextBtn, 'click', function (e) {
            oThis.startYear += 10;
            oThis._fillYear();
        });
        this.panelContentDiv.appendChild(this.preBtn);
        this.panelContentDiv.appendChild(this.nextBtn);
        this._fillYear();
    },

    /**
     *填充年份选择面板
     * @private
     */
    _fillYear: function _fillYear(type) {
        var oldPanel, year, template, yearPage, titleDiv, yearDiv, i, cell;
        oldPanel = this.panelContentDiv.querySelector('.u-date-content-page');
        if (oldPanel) this.panelContentDiv.removeChild(oldPanel);
        template = ['<div class="u-date-content-page">', '<div class="u-date-content-title"></div>', '<div class="u-date-content-panel"></div>', '</div>'].join("");
        yearPage = makeDOM(template);
        titleDiv = yearPage.querySelector('.u-date-content-title');
        titleDiv.innerHTML = this.startYear + '-' + (this.startYear + 11);
        yearDiv = yearPage.querySelector('.u-date-content-panel');
        for (i = 0; i < 12; i++) {
            cell = makeDOM('<div class="u-date-content-year-cell">' + (this.startYear + i) + '</div>');
            new URipple(cell);
            if (this.startYear + i == this.year) {
                addClass(cell, 'current');
            }
            cell._value = this.startYear + i;
            yearDiv.appendChild(cell);
        }
        var oThis = this;
        on$1(yearDiv, 'click', function (e) {
            var _y = e.target._value;
            oThis.year = _y;
            oThis._fillMonth();
            stopEvent(e);
        });

        this.preBtn.style.display = 'block';
        this.nextBtn.style.display = 'block';
        // this._zoomIn(yearPage);
        this.panelContentDiv.appendChild(yearPage);
        this.contentPage = yearPage;
        this.currentPanel = 'year';
    },

    /**
     * 填充月份选择面板
     * @private
     */
    _fillMonth: function _fillMonth() {
        var oldPanel, template, monthPage, _month, cells, i;
        oldPanel = this.panelContentDiv.querySelector('.u-date-content-page');
        if (oldPanel) this.panelContentDiv.removeChild(oldPanel);
        _month = this.month;
        var _defaultMonth = _month + '月';
        var monthIndex = date._jsonLocale.defaultMonth.indexOf(_defaultMonth);
        template = ['<div class="u-date-content-page">', '<div class="u-date-content-title">' + date._jsonLocale.monthsShort[monthIndex] + '</div>', '<div class="u-date-content-panel">', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[0] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[1] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[2] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[3] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[4] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[5] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[6] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[7] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[8] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[9] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[10] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[11] + '</div>', '</div>', '</div>'].join("");

        monthPage = makeDOM(template);
        cells = monthPage.querySelectorAll('.u-date-content-year-cell');
        for (i = 0; i < cells.length; i++) {
            if (_month == i + 1) {
                addClass(cells[i], 'current');
            }
            cells[i]._value = i + 1;
            new URipple(cells[i]);
        }
        var oThis = this;
        on$1(monthPage, 'click', function (e) {
            var _m = e.target._value;
            if (_m) {
                oThis.month = _m;
            }
            monthPage.querySelector('.u-date-content-title').innerHTML = _m + '月';
            oThis.setValue(oThis.year + '-' + oThis.month);
            oThis.hide();
        });

        this.preBtn.style.display = 'none';
        this.nextBtn.style.display = 'none';
        this._zoomIn(monthPage);
        this.currentPanel = 'month';
    },

    /**
     * 淡入动画效果
     * @private
     */
    _zoomIn: function _zoomIn(newPage) {
        if (!this.contentPage) {
            this.panelContentDiv.appendChild(newPage);
            this.contentPage = newPage;
            return;
        }
        addClass(newPage, 'zoom-in');
        this.panelContentDiv.appendChild(newPage);
        if (env$1.isIE8) {
            this.contentPage = newPage;
        } else {
            var cleanup = function () {
                newPage.removeEventListener('transitionend', cleanup);
                newPage.removeEventListener('webkitTransitionEnd', cleanup);
                // this.panelContentDiv.removeChild(this.contentPage);
                this.contentPage = newPage;
            }.bind(this);
            if (this.contentPage) {
                newPage.addEventListener('transitionend', cleanup);
                newPage.addEventListener('webkitTransitionEnd', cleanup);
            }
            //ie9 requestAnimationFrame兼容问题
            if (requestAnimationFrame) {
                requestAnimationFrame(function () {
                    addClass(this.contentPage, 'is-hidden');
                    removeClass(newPage, 'zoom-in');
                }.bind(this));
            }
        }
    },

    setValue: function setValue(value) {
        value = value ? value : '';
        if (value && value.indexOf('-') > -1) {
            var vA = value.split("-");
            this.year = vA[0];
            var month = vA[1];
            this.month = month % 12;
            if (this.month == 0) this.month = 12;

            value = this.year + '-' + this.month;
        }
        this.value = value;
        // this.input.value = value;
        this.input.value = date.format(this.value, this.format);
        this.trigger('valueChange', {
            value: value
        });
    },

    focusEvent: function focusEvent() {
        var self = this;
        on$1(this.input, 'focus', function (e) {
            self._inputFocus = true;
            self.show(e);
            stopEvent(e);
        });
    },

    //下拉图标的点击事件
    clickEvent: function clickEvent() {
        var self = this;
        var caret = this.element.nextSibling;
        on$1(caret, 'click', function (e) {
            self.input.focus();
            stopEvent(e);
        });
    },

    show: function show(evt) {
        var oThis = this;
        if (this.value && this.value.indexOf('-') > -1) {
            var vA = this.value.split("-");
            this.year = vA[0];
            var month = vA[1];
            this.month = month % 12;
            if (this.month == 0) this.month = 12;
        }
        this.createPanel();
        /*因为元素可能变化位置，所以显示的时候需要重新计算*/
        this.width = this.element.offsetWidth;
        if (this.width < 300) this.width = 300;

        this.panelDiv.style.width = this.width + 'px';

        if (this.options.showFix) {
            document.body.appendChild(this.panelDiv);
            this.panelDiv.style.position = 'fixed';
            showPanelByEle({
                ele: this.input,
                panel: this.panelDiv,
                position: "bottomLeft"
            });
        } else {
            //    this.element.parentNode.appendChild(this.panelDiv);
            // //调整left和top
            //    this.left = this.element.offsetLeft;
            //    var inputHeight = this.element.offsetHeight;
            //    this.top = this.element.offsetTop + inputHeight;
            //    this.panelDiv.style.left = this.left + 'px';
            //    this.panelDiv.style.top = this.top + 'px';

            var bodyWidth = document.body.clientWidth,
                bodyHeight = document.body.clientHeight,
                panelWidth = this.panelDiv.offsetWidth,
                panelHeight = this.panelDiv.offsetHeight;

            this.element.appendChild(this.panelDiv);
            this.element.style.position = 'relative';
            this.left = this.input.offsetLeft;
            var inputHeight = this.input.offsetHeight;
            this.top = this.input.offsetTop + inputHeight;

            if (this.left + panelWidth > bodyWidth) {
                this.left = bodyWidth - panelWidth;
            }

            if (this.top + panelHeight > bodyHeight) {
                this.top = bodyHeight - panelHeight;
            }

            this.panelDiv.style.left = this.left + 'px';
            this.panelDiv.style.top = this.top + 'px';
        }

        this.panelDiv.style.zIndex = getZIndex();
        addClass(this.panelDiv, 'is-visible');
        var oThis = this;
        var callback = function callback(e) {
            if (e !== evt && e.target !== oThis.input && !oThis.clickPanel(e.target) && oThis._inputFocus != true) {
                // document.removeEventListener('click', callback);
                off$1(document, 'click', callback);
                oThis.hide();
            }
        };
        on$1(document, 'click', callback);
        // document.addEventListener('click', callback);
    },

    clickPanel: function clickPanel(dom) {
        while (dom) {
            if (dom == this.panelDiv) {
                return true;
            } else {
                dom = dom.parentNode;
            }
        }
        return false;
    },

    hide: function hide() {
        removeClass(this.panelDiv, 'is-visible');
        this.panelDiv.style.zIndex = -1;
    }
});

if (u.compMgr) u.compMgr.regComp({
    comp: YearMonth,
    compAsString: 'u.YearMonth',
    css: 'u-yearmonth'
});

/**
 * Module : neoui-year
 * Author : wanghao(wanghaoo@yonyou.com)
 * Date   : 2016-11-09
 */

var MonthDate = u.BaseComponent.extend({
    DEFAULTS: {},
    init: function init() {
        var self = this;
        var element = this.element;
        this.options = extend({}, this.DEFAULTS, this.options);
        this.panelDiv = null;
        this.input = this.element.querySelector("input");

        var d = new Date();
        this.year = d.getFullYear();
        this.month = d.getMonth() + 1;
        this.date = d.getDate();

        on$1(this.input, 'blur', function (e) {
            self._inputFocus = false;
            self.setValue(self.input.value);
        });

        // 添加focus事件
        this.focusEvent();
        // 添加右侧图标click事件
        this.clickEvent();
    },

    createPanel: function createPanel() {
        if (this.panelDiv) {
            this._fillMonth();
            return;
        }
        var oThis = this;
        this.panelDiv = makeDOM('<div class="u-date-panel" style="margin:0px;"></div>');
        this.panelContentDiv = makeDOM('<div class="u-date-content"></div>');
        this.panelDiv.appendChild(this.panelContentDiv);
        this._fillMonth();
    },

    // 判断是否为闰年,如果闰年返回29天，否则为28天
    _isLeapYear: function _isLeapYear() {
        if (this.year % 4 == 0 && this.year % 100 != 0 || this.year % 400 == 0) {
            return 29;
        } else {
            return 28;
        }
    },

    _getMonthDay: function _getMonthDay() {
        var monthTypeOneArray = [1, 3, 5, 7, 8, 10, 12];
        if (this.month == 2) {
            return this._isLeapYear();
        }
        if (monthTypeOneArray.indexOf(this.month)) {
            return 31;
        } else {
            return 30;
        }
    },
    /**
     * 填充月份选择面板
     * @private
     */
    _fillMonth: function _fillMonth() {
        var oldPanel, template, monthPage, _month, cells, i;
        _month = this.month;
        var _defaultMonth = _month + '月';
        var monthIndex = date._jsonLocale.defaultMonth.indexOf(_defaultMonth);
        template = ['<div class="u-date-content-page">', '<div class="u-date-content-title">' + date._jsonLocale.monthsShort[monthIndex] + '</div>', '<div class="u-date-content-panel">', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[0] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[1] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[2] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[3] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[4] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[5] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[6] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[7] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[8] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[9] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[10] + '</div>', '<div class="u-date-content-year-cell">' + date._jsonLocale.monthsShort[11] + '</div>', '</div>', '</div>'].join("");

        monthPage = makeDOM(template);
        cells = monthPage.querySelectorAll('.u-date-content-year-cell');
        for (i = 0; i < cells.length; i++) {
            if (_month == i + 1) {
                addClass(cells[i], 'current');
            }
            cells[i]._value = i + 1;
            new URipple(cells[i]);
        }
        var oThis = this;
        on$1(monthPage, 'click', function (e) {
            var _m = e.target._value;
            if (_m) {
                oThis.month = _m;
                monthPage.querySelector('.u-date-content-title').innerHTML = _m + '月';
            }

            oThis._fillDate();
            stopEvent(e);
        });

        this._zoomIn(monthPage);
        this.currentPanel = 'month';
    },

    /**
     * 渲染日历
     * @param type : previous  current  next
     * @private
     */
    _fillDate: function _fillDate(type) {

        var year,
            month,
            oldPanel,
            day,
            date$$1,
            time,
            template,
            datePage,
            titleDiv,
            dateDiv,
            weekSpans,
            language,
            tempDate,
            i,
            cell,
            self = this;
        type = type || 'current';
        var oThis = this;

        oldPanel = this.panelContentDiv.querySelector('.u-date-content-page');
        if (oldPanel) this.panelContentDiv.removeChild(oldPanel);
        language = core.getLanguages();
        template = ['<div class="u-date-content-page">', '<div class="u-date-content-title">', this.date + trans('public.day', '日'), '</div>', '<div class="u-date-week"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>', '<div class="u-date-content-panel"></div>', '</div>'].join("");
        datePage = makeDOM(template);
        weekSpans = datePage.querySelectorAll('.u-date-week span');

        for (var i = 0; i < 7; i++) {
            weekSpans[i].innerHTML = date._jsonLocale.weekdaysMin[i];
        }
        dateDiv = datePage.querySelector('.u-date-content-panel');
        // tempDate = this.startDate;
        tempDate = new Date(this.year + '-' + this.month + '-01');
        var countdate = 1;
        var monthdate = this._getMonthDay();
        var otherdate = tempDate.getDay(); //当前月1号前面需要空白的个数
        // var sumdate = monthdate + otherdate;
        for (var j = 0; j < otherdate; j++) {
            cell = makeDOM('<div class="u-date-cell" unselectable="on" onselectstart="return false;"></div>');
            new URipple(cell);
            dateDiv.appendChild(cell);
        }
        // 这块儿时间需要根据月份具体
        while (countdate <= monthdate) {
            cell = makeDOM('<div class="u-date-cell" unselectable="on" onselectstart="return false;">' + countdate + '</div>');
            if (countdate == this.date) {
                addClass(cell, 'current');
            }
            cell._value = countdate;
            cell._month = this.month;
            cell._year = this.year;
            new URipple(cell);
            dateDiv.appendChild(cell);
            countdate++;
        }
        on$1(dateDiv, 'click', function (e) {
            if (hasClass(e.target, 'u-disabled')) return;
            var _d = e.target._value;
            if (!_d) return;
            var _cell = e.target.parentNode.querySelector('.u-date-cell.current');
            if (_cell) {
                removeClass(_cell, 'current');
                if (env$1.isIE8 || env$1.isIE9) _cell.style.backgroundColor = "#fff";
            }
            addClass(e.target, 'current');
            if (env$1.isIE8 || env$1.isIE9) e.target.style.backgroundColor = '#3f51b5';

            var currentdateDiv = oThis.panelContentDiv.querySelector('.u-date-content-title');
            currentdateDiv.innerHTML = _d + '日';
            oThis.setValue(e.target._month + '-' + _d);
            oThis.hide();
        }.bind(this));
        this._zoomIn(datePage);
        this.currentPanel = 'date';
    },
    /**
     * 淡入动画效果
     * @private
     */
    _zoomIn: function _zoomIn(newPage) {
        if (!this.contentPage) {
            this.panelContentDiv.appendChild(newPage);
            this.contentPage = newPage;
            return;
        }
        addClass(newPage, 'zoom-in');
        this.panelContentDiv.appendChild(newPage);
        if (env$1.isIE8) {
            this.contentPage = newPage;
        } else {
            var cleanup = function () {
                newPage.removeEventListener('transitionend', cleanup);
                newPage.removeEventListener('webkitTransitionEnd', cleanup);
                // this.panelContentDiv.removeChild(this.contentPage);
                this.contentPage = newPage;
            }.bind(this);
            if (this.contentPage) {
                newPage.addEventListener('transitionend', cleanup);
                newPage.addEventListener('webkitTransitionEnd', cleanup);
            }
            window.requestAnimationFrame(function () {
                addClass(this.contentPage, 'is-hidden');
                removeClass(newPage, 'zoom-in');
            }.bind(this));
        }
    },

    setValue: function setValue(value) {
        var inputValue = '';
        value = value ? value : '';

        //如果原有值和新值不同则重新赋值
        if (this.value !== value) {
            if (value && value.indexOf('-') > -1) {
                var vA = value.split("-");
                var month = vA[0];
                this.month = month % 12;
                if (this.month == 0) this.month = 12;
                this.date = vA[1];
                inputValue = this.month + '-' + this.date;
            }
            this.value = value;
            this.input.value = inputValue;
            this.trigger('valueChange', {
                value: value
            });
        }
    },

    focusEvent: function focusEvent() {
        var self = this;
        on$1(this.input, 'focus', function (e) {
            self._inputFocus = true;
            self.show(e);
            stopEvent(e);
        });
    },

    //下拉图标的点击事件
    clickEvent: function clickEvent() {
        var self = this;
        var caret = this.element.nextSibling;
        on$1(caret, 'click', function (e) {
            self.input.focus();
            stopEvent(e);
        });
    },

    show: function show(evt) {
        var oThis = this;
        if (this.value && this.value.indexOf('-') > -1) {
            var vA = this.value.split("-");
            var month = vA[0];
            this.month = month % 12;
            if (this.month == 0) this.month = 12;
            this.date = vA[1];
            if (this.date > 31) {
                this.date = 1;
            }
        }
        this.createPanel();
        if (this.options.showFix) {
            document.body.appendChild(this.panelDiv);
            this.panelDiv.style.position = 'fixed';
            showPanelByEle({
                ele: this.input,
                panel: this.panelDiv,
                position: "bottomLeft"
            });
        } else {

            var bodyWidth = document.body.clientWidth,
                bodyHeight = document.body.clientHeight,
                panelWidth = this.panelDiv.offsetWidth,
                panelHeight = this.panelDiv.offsetHeight;

            this.element.appendChild(this.panelDiv);
            this.element.style.position = 'relative';
            this.left = this.input.offsetLeft;
            var inputHeight = this.input.offsetHeight;
            this.top = this.input.offsetTop + inputHeight;

            if (this.left + panelWidth > bodyWidth) {
                this.left = bodyWidth - panelWidth;
            }

            if (this.top + panelHeight > bodyHeight) {
                this.top = bodyHeight - panelHeight;
            }

            this.panelDiv.style.left = this.left + 'px';
            this.panelDiv.style.top = this.top + 'px';
        }

        this.panelDiv.style.zIndex = getZIndex();
        addClass(this.panelDiv, 'is-visible');
        var oThis = this;
        var callback = function callback(e) {
            if (e !== evt && e.target !== oThis.input && !oThis.clickPanel(e.target) && oThis._inputFocus != true) {
                // document.removeEventListener('click', callback);
                off$1(document, 'click', callback);
                oThis.hide();
            }
        };
        on$1(document, 'click', callback);
        // document.addEventListener('click', callback);
    },

    clickPanel: function clickPanel(dom) {
        while (dom) {
            if (dom == this.panelDiv) {
                return true;
            } else {
                dom = dom.parentNode;
            }
        }
        return false;
    },

    hide: function hide() {
        removeClass(this.panelDiv, 'is-visible');
        this.panelDiv.style.zIndex = -1;
    }
});

if (u.compMgr) u.compMgr.regComp({
    comp: MonthDate,
    compAsString: 'u.MonthDate',
    css: 'u-monthdate'
});

/**
 * Module : Neoui webpack entry index
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-10 16:19:39
 */

//Sparrow import
//Neoui import
var ex = {
	BaseComponent: BaseComponent,
	Autocomplete: Autocomplete,
	Button: Button,
	Cascader: Cascader,
	Checkbox: Checkbox,
	Combo: Combo,
	showCollapse: showCollapse,
	Combobox: Combobox,
	Table: Table,
	messageDialog: messageDialog,
	confirmDialog: confirmDialog,
	dialogMode: dialogMode,
	dialog: dialog,
	dialogWizard: dialogWizard,
	iframeDialog: iframeDialog,
	Loading: Loading,
	showLoading: showLoading,
	hideLoading: hideLoading,
	showWaiting: showWaiting,
	removeWaiting: removeWaiting,
	MDLayout: MDLayout,
	NavLayout: NavLayout,
	NavLayoutTab: NavLayoutTab,
	showLoader: showLoader,
	hideLoader: hideLoader,
	Menu: Menu,
	showMessageDialog: showMessageDialog,
	showMessage: showMessage,
	Multilang: Multilang,
	NavMenu: NavMenu,
	pagination: pagination,
	Progress: Progress,
	Radio: Radio,
	refer: refer,
	slidePanel: slidePanel,
	Switch: Switch,
	Tabs: Tabs,
	Text: Text,
	Tooltip: Tooltip,
	Validate: Validate,
	validate: validate,
	doValidate: doValidate,
	DateTimePicker: DateTimePicker$1,
	MobDateTimePicker: MobDateTimePicker,
	Time: Time,
	ClockPicker: ClockPicker,
	Month: Month,
	Year: Year,
	YearMonth: YearMonth,
	MonthDate: MonthDate,
	compMgr: compMgr

	//	ajax: ajax,
	//	extend : extend,
	//	setCookie: setCookie,
	//	getCookie: getCookie,
	//	createShellObject: createShellObject,
	//	execIgnoreError: execIgnoreError,
	//	getFunction: getFunction,
	//	getJSObject: getJSObject,
	//	isDate: isDate,
	//	isNumber: isNumber,
	//	isArray: isArray,
	//	isEmptyObject: isEmptyObject,
	//	inArray: inArray,
	//	isDomElement: isDomElement,
	//	each: each,
	//	on: on,
	//	off: off,
	//	trigger: trigger,
	//	stopEvent: stopEvent,
	//	event: event,
	//	addClass: addClass,
	//	removeClass: removeClass,
	//	hasClass: hasClass,
	//	toggleClass: toggleClass,
	//	closest: closest,
	//	css: css,
	//	wrap: wrap,
	//	getStyle: getStyle,
	//	getZIndex: getZIndex,
	//	makeDOM: makeDOM,
	//	makeModal: makeModal,
	//	getOffset: getOffset,
	//	getScroll: getScroll,
	//	showPanelByEle: showPanelByEle,
	//	Class: Class,
	//	core: core,
	//	compMgr: compMgr,
	//	BaseComponent: BaseComponent,
	//	floatRender: floatRender,
	//	integerRender: integerRender,
	//	dateRender: dateRender,
	//	dateTimeRender: dateTimeRender,
	//	timeRender: timeRender,
	//	percentRender: percentRender,
	//	dateToUTCString: dateToUTCString,
	//	date: date,
	//	NumberFormater: NumberFormater,
	//	DateFormater: DateFormater,
	//	AddressMasker: AddressMasker,
	//	NumberMasker: NumberMasker,
	//	CurrencyMasker: CurrencyMasker,
	//	PercentMasker: PercentMasker,
	//	hotkeys: hotkeys,
	//	Ripple: Ripple,
	//	RSAUtils: RSAUtils,
	//	BigInt: BigInt,
	//	BarrettMu: BarrettMu,
	//	twoDigit: twoDigit,
	//	trans: trans

};
//extend(ex,env);

extend(ex, window.u || {});
window.u = ex;

/**
 * Module : kero DataTable copyRow
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2016-08-01 14:34:01
 */

/**
 * 在指定index位置插入单条数据行
 * @memberof DataTable
 * @param  {number} index 数据行插入之后的位置
 * @param  {object} row   数据行信息
 * @example
 * var row = {
 *    field1:'value1'
 * }
 * datatable.copyRow(1,row)
 */
var copyRow = function copyRow(index, row) {
    this.copyRows(index, [row]);
};

/**
 * 在指定index位置插入多条数据行
 * @memberof DataTable
 * @param  {number} index 数据行插入之后的位置
 * @param  {array} rows   存储数据行信息的数组
 * @example
 * var row1 = {
 *    field1:'value1'
 * }
 * var row2 = {
 *    field1:'value1'
 * }
 * datatable.copyRow(1,[row1,row2])
 */
var copyRows = function copyRows(index, rows) {
    for (var i = 0; i < rows.length; i++) {
        var newRow = new Row({
            parent: this
        });
        if (rows[i]) {
            newRow.setData(rows[i].getData());
        }
        this.insertRows(index === undefined ? this.rows().length : index, [newRow]);
    }
};

var copyRowFunObj = {
    copyRow: copyRow,
    copyRows: copyRows
};

/**
 * Module : kero DataTable data
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2016-07-30 14:34:01
 */

/**
 * 设置数据信息
 * @memberof DataTable
 * @param {object} data    需要设置的数据信息，必须包含rows或者pages属性
 * @param {array} [data.rows]    数据信息中的行信息数组
 * @param {array} [data.pages]    数据信息中的page对象数组
 * @param {number} [data.pageIndex=DataTable对象当前的页码]    数据信息中的当前页码
 * @param {number} [data.pageSize=DataTable对象当前的每页显示条数]    数据信息中的每页显示条数
 * @param {number} [data.totalPages=DataTable对象当前的总页数]    数据信息中的总页数
 * @param {number} [data.totalRow=如果存在rows则为rows的长度，否则为DataTable对象当前的总条数]    数据信息中的总条数
 * @param {number} [data.select]    数据信息中的选中行行号
 * @param {number} [data.focus]    数据信息中的focus行行号
 * @param {object} options 设置数据时的配置参数
 * @param {boolean} options.unSelect=false 是否默认选中第一行，如果为true则不选中第一行，否则选中第一行
 * @example
 * // 不包含分页的情况
 * var data = {
 *    pageIndex:0,
 *    pageSize:5,
 *    totalPages:5,
 *    totalRow:22,
 *    rows:[{
 *      id:'r41201', // 如果需要添加
 *      status:'nrm', // 如果需要添加
 *      data:{
 *          field1:'value1',
 *          field2:'value2'
 *        }
 *    },{
 *      id:'r41202',
 *      status:'nrm',
 *      data:{
 *          field1:'value11',
 *          field2:'value21'
 *        }
 *    },...],
 *    select:[0]
 * }
 * // 包含分页的情况
 * var data = {
 *    pageIndex:0,
 *    pageSize:5,
 *    totalPages:5,
 *    totalRow:22,
 *    pages:[{
 *      index: 0,
 *      select: [],
 *      current: -1,
 *      rows:[{
 *        id:'r41201', // 如果需要添加
 *        status:'nrm', // 如果需要添加
 *        data:{
 *          field1:'value1',
 *          field2:'value2'
 *        }
 *      },{
 *        id:'r41202',
 *        status:'nrm',
 *        data:{
 *          field1:'value11',
 *          field2:'value21'
 *        }
 *      },...]
 *    },...],
 * }
 * var op = {
 *     unSelect:true
 * }
 * datatable.setData(data,op)
 */
var setData = function setData(data, options) {
    if (data.pageIndex || data.pageIndex === 0) {
        var newIndex = data.pageIndex;
    } else {
        var newIndex = this.pageIndex();
    }
    if (data.pageSize || data.pageSize === 0) {
        var newSize = data.pageSize;
    } else {
        var newSize = this.pageSize();
    }
    if (data.totalPages || data.totalPages === 0) {
        var newTotalPages = data.totalPages;
    } else {
        var newTotalPages = this.totalPages();
    }
    if (data.totalRow || data.totalRow === 0) {
        var newTotalRow = data.totalRow;
    } else {
        if (data.rows) var newTotalRow = data.rows.length;else var newTotalRow = this.totalRow();
    }
    var select,
        focus,
        unSelect = options ? options.unSelect : false;

    this.pageIndex(newIndex);
    this.pageSize(newSize);

    this.pageCache = data.pageCache || this.pageCache;
    if (this.pageCache === true) {
        this.updatePages(data.pages);
        if (newIndex != this.pageIndex()) {
            this.setCurrentPage(newIndex, true);
            this.totalPages(newTotalPages);
            this.totalRow(newTotalRow + this.newCount);
            return;
        } else {
            // 首先删除数据，然后将当前页数据插入
            this.removeAllRows();
            select = this.getPage(newIndex).selectedIndices;
            focus = this.getPage(newIndex).focus;
            var rows = this.setRows(this.getPage(newIndex).rows, options);
            this.getPage(newIndex).rows = rows;
        }
        // 后台传入totalPages及totalRow才进行更新
        if (data.totalPages) {
            this.totalPages(data.totalPages);
        }
        if (data.totalRow || data.totalRow === 0) {
            this.totalRow(data.totalRow + this.newCount);
        }
    } else {
        select = data.select || (!unSelect ? [0] : []);
        focus = data.focus !== undefined ? data.focus : data.current;
        this.setRows(data.rows, options);
        this.totalPages(newTotalPages);
        this.totalRow(newTotalRow);
    }

    this.updateSelectedIndices();

    if (select && select.length > 0 && this.rows().length > 0) this.setRowsSelect(select);
    if (focus !== undefined && this.getRow(focus)) this.setRowFocus(focus);
};

/**
 * 设置对应行对应字段的值
 * @memberof DataTable
 * @param {string} fieldName 需要设置的字段
 * @param {string} value     需要设置的值
 * @param {u.row} [row=当前行] 需要设置的u.row对象，
 * @param {*} [ctx]        自定义属性，在valuechange监听传入对象中可通过ctx获取此处设置
 * @example
 * datatable.setValue('filed1','value1') //设置当前行字段值
 * var row = datatable.getRow(1)
 * datatable.setValue('filed1','value1',row) //设置在指定行字段值
 * datatable.setValue('filed1','value1',row,'ctx') //设置在指定行字段值，同时传入自定义数据
 */
var setValue = function setValue(fieldName, value, row, ctx) {
    if (arguments.length === 1) {
        value = fieldName;
        fieldName = '$data';
    }

    row = row ? row : this.getCurrentRow();
    if (row) row.setValue(fieldName, value, ctx);
};

/**
 * 重置所有行的数据至nrm状态时的数据
 */
var resetAllValue = function resetAllValue() {
    var rows = new Array();
    rows = rows.concat(this.rows());
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        this.resetValueByRow(row);
    }
};

/**
 * 根据row对象重置数据至nrm状态时的数据
 * @param {u.row} row 需要重置数据的row对象
 */
var resetValueByRow = function resetValueByRow(row) {
    if (row.status == Row.STATUS.NEW) {
        this.setRowsDelete(row);
    } else if (row.status == Row.STATUS.FALSE_DELETE) {
        row.status = Row.STATUS.NORMAL;
        var rows = [row];
        this.trigger(DataTable.ON_INSERT, {
            index: 0,
            rows: rows
        });
    } else if (row.status == Row.STATUS.UPDATE) {
        row.status = Row.STATUS.NORMAL;
        row.resetValue();
    }
};
var dataFunObj = {
    setData: setData,
    setValue: setValue,
    resetAllValue: resetAllValue,
    resetValueByRow: resetValueByRow
};

/**
 * Module : kero DataTable enable
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-08 09:59:01
 */

/**
 * 判断DataTable或指定字段是否可修改
 * @memberof DataTable
 * @param  {string}  [fieldName] 需要进行判断的字段值
 * @return {boolean}  DataTable/指定字段是否可修改
 * @example
 * datatable.isEnable() //获取datatable是否可修改
 * datatable.isEnable('field1') //获取字段field1是否可修改
 */
var isEnable = function isEnable(fieldName) {
    var fieldEnable = this.getMeta(fieldName, 'enable');
    if (typeof fieldEnable == 'undefined' || fieldEnable == null) fieldEnable = true;
    return fieldEnable && this.enable;
};

/**
 * 设置DataTable是否可修改
 * @memberof DataTable
 * @param {boolean} enable true表示可修改，否则表示不可修改
 * @example
 * datatable.setEnable(true)
 */
var setEnable$1 = function setEnable(enable) {
    if (this.enable == enable) return;
    //当传入的参数不为false时，默认enable为true
    if (enable === false) {
        enable = false;
    } else {
        enable = true;
    }
    this.enable = enable;
    this.enableChange(-this.enableChange());
    this.trigger(DataTable.ON_ENABLE_CHANGE, {
        enable: this.enable
    });
};

var enableFunObj = {
    isEnable: isEnable,
    setEnable: setEnable$1
};

/**
 * Module : kero DataTable getCurrent
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-08 09:59:01
 */

/**
 * 获取DataTable对象的当前行
 * @memberof DataTable
 * @return {null|u.Row} DataTable对象的当前行
 * @example
 * datatable.getCurrentRow()
 */
var getCurrentRow = function getCurrentRow() {
    if (this.focusIndex() != -1) return this.getFocusRow();
    var index = this.getSelectedIndex();
    if (index == -1) return null;else return this.getRow(index);
};
/**
 * 获取DataTable对象的当前行对应的index
 * @memberof DataTable
 * @return {number} DataTable对象的当前行对应的index
 * @example
 * datatable.getCurrentIndex()
 */
var getCurrentIndex = function getCurrentIndex() {
    if (this.focusIndex() != -1) return this.focusIndex();
    var index = this.getSelectedIndex();
    if (index == -1) return -1;else return index;
};

var getCurrentFunObj = {
    getCurrentRow: getCurrentRow,
    getCurrentIndex: getCurrentIndex
};

/**
 * Module : kero DataTable getData
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-07-30 14:34:01
 */

/**
 * 获取DataTable的数据信息
 * @memberof DataTable
 * @return {array} 数据信息对应的数组，每项对应一条数据
 * @example
 * datatable.getData()
 */
var getData = function getData() {
    var datas = [],
        rows = this.rows();
    for (var i = 0; i < rows.length; i++) {
        datas.push(rows[i].getData());
    }
    return datas;
};

// 将page转为row对象格式
var page2data = function page2data(page, pageIndex) {
    var data = {};
    data.focus = page.focus;
    data.index = pageIndex;
    data.select = page.selectedIndices;
    return data;
};

/**
 * 按照特定规则获取数据
 * @memberof DataTable
 * @param  {string} rule
 * DataTable.SUBMIT.current('current') ：当前选中行
 * DataTable.SUBMIT.focus('focus') ：当前focus行
 * DataTable.SUBMIT.all('all') ：所有行
 * DataTable.SUBMIT.select('select') ：当前页选中行
 * DataTable.SUBMIT.change('change') ：发生改变的行
 * DataTable.SUBMIT.empty('empty') ：不获取数据，返回空数组
 * DataTable.SUBMIT.allSelect('allSelect') ：所有页选中行
 * DataTable.SUBMIT.allPages('allPages') ：所有页的数据
 * @return {array}      按照规则获取到的数据信息
 * @example
 * datatable.getDataByRule(‘all’)
 */

var getDataByRule = function getDataByRule(rule) {
    var returnData = {},
        datas = null,
        rows;
    returnData.meta = this.meta;
    returnData.params = this.params;
    rule = rule || DataTable.SUBMIT.current;
    // 存在多页及不存在多页分开处理
    if (this.pageCache) {
        var pages = this.getPages();
        if (rule == DataTable.SUBMIT.current || rule == DataTable.SUBMIT.focus) {
            datas = [];
            var pageIndex = this.pageIndex();
            var currPage = pages[pageIndex];
            if (currPage) {
                var currIndex = this.focusIndex();
                if (rule == DataTable.SUBMIT.current) {
                    if (currIndex == -1) currIndex = this.getSelectedIndex();
                }
                var data = page2data(currPage, pageIndex);
                data.rows = [];
                for (var i = 0, count = currPage.rows.length; i < count; i++) {
                    var row = currPage.rows[i].getData();
                    if (i != currIndex) row.data = {};
                    data.rows.push(row);
                }
                datas.push(data);
            }
        } else if (rule == DataTable.SUBMIT.all || rule == DataTable.SUBMIT.allPages) {
            datas = [];
            for (var i = 0; i < pages.length; i++) {
                var currPage = pages[i];
                var data = page2data(currPage, i);
                data.rows = [];
                for (var i = 0; i < currPage.rows.length; i++) {
                    data.rows.push(currPage.rows[i].getData());
                }
                datas.push(data);
            }
        } else if (rule == DataTable.SUBMIT.select) {
            datas = [];
            var pageIndex = this.pageIndex();
            var currPage = pages[pageIndex];
            if (currPage) {
                var data = page2data(currPage, pageIndex);
                data.rows = [];
                for (var i = 0, count = currPage.rows.length; i < count; i++) {
                    var row = currPage.rows[i].getData();
                    if (data.select.indexOf(i) < 0) row.data = {};
                    data.rows.push(row);
                }
                datas.push(data);
            }
        } else if (rule == DataTable.SUBMIT.allSelect) {
            datas = [];
            for (var i = 0; i < pages.length; i++) {
                var currPage = pages[i];
                var data = page2data(currPage, i);
                data.rows = [];
                for (var j = 0, count = currPage.rows.length; j < count; j++) {
                    var row = currPage.rows[j].getData();
                    if (data.select.indexOf(j) < 0) row.data = {};
                    data.rows.push(row);
                }
                datas.push(data);
            }
        } else if (rule == DataTable.SUBMIT.change) {
            datas = [];
            for (var i = 0; i < pages.length; i++) {
                var currPage = pages[i];
                var data = page2data(currPage, i);
                data.rows = [];
                for (var j = 0, count = currPage.rows.length; j < count; j++) {
                    var row = currPage.rows[j].getData();
                    if (row.status == Row.STATUS.NORMAL) {
                        row.data = {};
                    }
                    data.rows.push(row);
                }
                datas.push(data);
            }
        } else if (rule === DataTable.SUBMIT.empty) {
            datas = [];
        }
        if (pages.length < 1 || !pages[this.pageIndex()]) {
            datas = [{
                index: this.pageIndex(),
                select: [],
                focus: -1,
                rows: []
            }];
        }
        returnData.pages = datas;
    } else {
        if (rule == DataTable.SUBMIT.current) {
            datas = [];
            var currIndex = this.focusIndex();
            if (currIndex == -1) currIndex = this.getSelectedIndex();
            rows = this.rows();
            for (var i = 0, count = rows.length; i < count; i++) {
                if (i == currIndex) datas.push(rows[i].getData());else datas.push(rows[i].getEmptyData());
            }
        } else if (rule == DataTable.SUBMIT.focus) {
            datas = [];
            rows = this.rows();
            for (var i = 0, count = rows.length; i < count; i++) {
                if (i == this.focusIndex()) datas.push(rows[i].getData());else datas.push(rows[i].getEmptyData());
            }
        } else if (rule == DataTable.SUBMIT.all) {
            datas = this.getData();
        } else if (rule == DataTable.SUBMIT.select) {
            datas = this.getSelectedDatas(true);
        } else if (rule == DataTable.SUBMIT.change) {
            datas = this.getChangedDatas();
        } else if (rule === DataTable.SUBMIT.empty) {
            datas = [];
        }

        returnData.rows = datas;
        returnData.select = this.getSelectedIndexs();
        returnData.focus = this.getFocusIndex();
    }

    returnData.pageSize = this.pageSize();
    returnData.pageIndex = this.pageIndex();
    returnData.isChanged = this.isChanged();
    returnData.master = this.master;
    returnData.pageCache = this.pageCache;
    return returnData;
};

/**
 * 根据索引获取指定行数据信息
 * @memberof DataTable
 * @param  {number} index 需要获取的数据信息的索引
 * @return {object}      获取到的指定行数据信息
 * @example
 * datatable.getRow(1)
 */
var getRow = function getRow(index) {
    //return this.rows()[index]   //modify by licza.   improve performance
    return this.rows.peek()[index];
};

// 获取子表的数据行
var getChildRow = function getChildRow(obj) {
    var fullField = obj.fullField,
        index = obj.index,
        row = null;
    if (parseInt(index) > -1) {
        if ((index + '').indexOf('.') > 0) {
            var fieldArr = fullField.split('.');
            var indexArr = index.split('.');
            var nowDataTable = this;
            var nowRow = null;
            for (var i = 0; i < indexArr.length; i++) {
                nowRow = nowDataTable.getRow(indexArr[i]);
                if (i < indexArr.length - 1) {
                    if (nowRow) {
                        nowDataTable = nowRow.getValue(fieldArr[i]);
                    } else {
                        nowRow = null;
                        break;
                    }
                }
            }
            row = nowRow;
        } else {
            row = this.getRow(index);
        }
    }
    return row;
};

/**
 * 根据rowid获取Row对象
 * @memberof DataTable
 * @param {string} rowid 需要获取的Row对应的rowid
 * @returns {Row}
 * @example
 * datatable.getRowByRowId('rowid')
 */
var getRowByRowId = function getRowByRowId(rowid) {
    var rows = this.rows.peek();
    for (var i = 0, count = rows.length; i < count; i++) {
        if (rows[i].rowId == rowid) return rows[i];
    }
    return null;
};

/**
 * 获取Row对象对应的索引
 * @memberof DataTable
 * @param {u.Row} 需要获取索引的row对象
 * @returns {*}
 * @example
 * var row = datatable.getRow(1)
 * datatable.getRowIndex(row) // 1
 */
var getRowIndex = function getRowIndex(row) {
    var rows = this.rows.peek();
    for (var i = 0, count = rows.length; i < count; i++) {
        if (rows[i].rowId === row.rowId) return i;
    }
    return -1;
};

/**
 * 根据字段及字段值获取所有数据行
 * @memberof DataTable
 * @param  {string} field 需要获取行的对应字段
 * @param  {string} value 需要获取行的对应字段值
 * @return {array}      根据字段及字段值获取的所有数据行
 * @example
 * datatable.getRowsByField('field1','value1')
 */
var getRowsByField = function getRowsByField(field, value) {
    var rows = this.rows.peek();
    var returnRows = new Array();
    for (var i = 0, count = rows.length; i < count; i++) {
        if (rows[i].getValue(field) === value) returnRows.push(rows[i]);
    }
    return returnRows;
};

/**
 * 根据字段及字段值获取第一条数据行
 * @memberof DataTable
 * @param  {string} field 需要获取行的对应字段
 * @param  {string} value 需要获取行的对应字段值
 * @return {u.Row}      根据字段及字段值获取第一条数据行
 * @example
 * datatable.getRowByField('field1','value1')
 */
var getRowByField = function getRowByField(field, value) {
    var rows = this.rows.peek();
    for (var i = 0, count = rows.length; i < count; i++) {
        if (rows[i].getValue(field) === value) return rows[i];
    }
    return null;
};

/**
 * 获取当前页的所有数据行
 * @memberof DataTable
 * @return {array} 获取到的数据行
 * @example
 * datatable.getAllRows()
 */
var getAllRows = function getAllRows() {
    return this.rows.peek();
};

/**
 * 获取所有页的所有数据行
 * @memberof DataTable
 * @return {array} 获取到的数据行
 * @example
 * datatable.getAllPageRows()
 */
var getAllPageRows = function getAllPageRows() {
    var datas = [],
        rows;
    for (var i = 0; i < this.totalPages(); i++) {
        rows = [];
        if (i == this.pageIndex()) {
            rows = this.getData();
        } else {
            var page = this.cachedPages[i];
            if (page) {
                rows = page.getData();
            }
        }
        for (var j = 0; j < rows.length; j++) {
            datas.push(rows[j]);
        }
    }
    return datas;
};

/**
 * 获取发生变化的数据信息
 * @memberof DataTable
 * @param  {boolean} withEmptyRow=false 未发生变化的数据是否使用空行代替，true表示以空行代替未发生变化行，false相反
 * @return {array}            发生变化的数据信息
 * @example
 * datatable.getChangedDatas()
 */
var getChangedDatas = function getChangedDatas(withEmptyRow) {
    var datas = [],
        rows = this.rows();
    for (var i = 0, count = rows.length; i < count; i++) {
        if (rows[i] && rows[i].status != Row.STATUS.NORMAL) {
            datas.push(rows[i].getData());
        } else if (withEmptyRow == true) {
            datas.push(rows[i].getEmptyData());
        }
    }
    return datas;
};

/**
 * 获取发生改变的Row对象
 * @memberof DataTable
 * @return {array} 发生改变的Row对象
 * @example
 * datatable.getChangedRows()
 */
var getChangedRows = function getChangedRows() {
    var changedRows = [],
        rows = this.rows.peek();
    for (var i = 0, count = rows.length; i < count; i++) {
        if (rows[i] && rows[i].status != Row.STATUS.NORMAL) {
            changedRows.push(rows[i]);
        }
    }
    return changedRows;
};

var getDeleteRows = function getDeleteRows() {
    var deleteRows = [],
        rows = this.rows.peek();
    for (var i = 0, count = rows.length; i < count; i++) {
        if (rows[i] && rows[i].status == Row.STATUS.FALSE_DELETE) {
            deleteRows.push(rows[i]);
        }
    }
    return deleteRows;
};

/**
 * 根据字段获取对应Row对象的字段值
 * @memberof DataTable
 * @param  {string} fieldName 需要获取的值对应的字段
 * @param  {u.Row} [row=默认为当前行]     对应的数据行
 * @return {string}     获取到的字段值
 * @example
 * datatable.getValue('field1')
 * var row = datatable.getRow(1)
 * datatable.getValue('field1',row)
 */
var getValue = function getValue(fieldName, row) {
    row = row || this.getCurrentRow();
    if (row) return row.getValue(fieldName);else return '';
};

/**
 * 根据行号获取行索引
 * @memberof DataTable
 * @param {String} rowId
 * @example
 * datatable.getIndexByRowId('rowid')
 */
var getIndexByRowId = function getIndexByRowId(rowId) {
    var rows = this.rows();
    for (var i = 0, count = rows.length; i < count; i++) {
        if (rows[i].rowId == rowId) return i;
    }
    return -1;
};

/**
 * 获取所有行数据信息
 * @memberof DataTable
 * @return {array} 所有行数据信息
 * @example
 * datatable.getAllDatas()
 */
var getAllDatas = function getAllDatas() {
    var rows = this.getAllRows();
    var datas = [];
    for (var i = 0, count = rows.length; i < count; i++) {
        if (rows[i]) datas.push(rows[i].getData());
    }return datas;
};

/**
 * 根据索引获取rowid
 * @memberof DataTable
 * @param  {array} indices 需要获取rowid的索引值
 * @return {array}         获取到的rowid
 * @example
 * datatable.getRowIdsByIndices([1,2,5])
 */
var getRowIdsByIndices = function getRowIdsByIndices(indices) {
    var rowIds = [];
    for (var i = 0; i < indices.length; i++) {
        if (this.getRow(indices[i])) rowIds.push(this.getRow(indices[i]).rowId);
    }
    return rowIds;
};
/**
 * 根据索引获取row
 * @memberof DataTable
 * @param  {array} indices 需要获取rowid的索引值
 * @return {array}         获取到的row
 * @example
 * datatable.getRowIdsByIndices([1,2,5])
 */
var getRowsByIndices = function getRowsByIndices(indices) {
    var rows = [];
    for (var i = 0; i < indices.length; i++) {
        rows.push(this.getRow(indices[i]));
    }
    return rows;
};

var getDataFunObj = {
    getData: getData,
    getDataByRule: getDataByRule,
    getRow: getRow,
    getChildRow: getChildRow,
    getRowByRowId: getRowByRowId,
    getRowIndex: getRowIndex,
    getRowsByField: getRowsByField,
    getRowByField: getRowByField,
    getAllRows: getAllRows,
    getAllPageRows: getAllPageRows,
    getChangedDatas: getChangedDatas,
    getChangedRows: getChangedRows,
    getDeleteRows: getDeleteRows,
    getValue: getValue,
    getIndexByRowId: getIndexByRowId,
    getAllDatas: getAllDatas,
    getRowIdsByIndices: getRowIdsByIndices,
    getRowsByIndices: getRowsByIndices
};

/**
 * Module : kero dataTable getFocus
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-08 09:59:01
 */

/**
 * 获取焦点行
 * @memberof DataTable
 * @return {u.Row} 焦点行
 * @example
 * datatable.getFocusRow()
 */
var getFocusRow = function getFocusRow() {
    if (this.focusIndex() != -1) return this.getRow(this.focusIndex());else return null;
};

/**
 * 获取焦点行索引
 * @memberof DataTable
 * @return {number} 焦点行索引
 * @example
 * datatable.getFocusIndex()
 */
var getFocusIndex = function getFocusIndex() {
    return this.focusIndex();
};

var getFocusFunObj = {
    getFocusRow: getFocusRow,
    getFocusIndex: getFocusIndex
};

/**
 * Module : kero dataTable getMete
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2016-07-30 14:34:01
 */

/**
 * 获取meta信息
 * @memberof DataTable
 * @param  {string} [fieldName] 需要获取的字段
 * @param  {string} [key]       需要获取的字段指定meta信息
 * @return {object}           meta信息
 * @example
 * datatable.getMeta() // 获取所有meta信息
 * datatable.getMeta('field1') // 获取field1所有meta信息
 * datatable.getMeta('field1','type') // 获取field1的key信息
 */
var getMeta = function getMeta(fieldName, key) {
    if (arguments.length === 0) return this.meta;else if (arguments.length === 1) return this.meta[fieldName];

    if (this.meta[fieldName] && typeof this.meta[fieldName][key] !== 'undefined') {
        return this.meta[fieldName][key];
    } else {
        return null;
    }
};

/**
 * 获取当前行的meta信息，如果不存在当前行则获取DataTable的meta信息
 * @memberof DataTable
 * @param  {string} [fieldName] 需要获取的字段
 * @param  {string} [key]       需要获取的字段指定meta信息
 * @return {object}           meta信息
 * @example
 * datatable.getRowMeta() // 获取当前行所有meta信息
 * datatable.getRowMeta('field1') // 获取当前行field1所有meta信息
 * datatable.getRowMeta('field1','type') // 获取当前行field1的key信息
 */
var getRowMeta = function getRowMeta(fieldName, key) {
    var row = this.getCurrentRow();
    if (row) return row.getMeta(fieldName, key);else return this.getMeta(fieldName, key);
};

var getMetaFunObj = {
    getMeta: getMeta,
    getRowMeta: getRowMeta
};

/**
 * Module : kero dataTable getPage
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2016-08-01 14:34:01
 */

/**
 * 获取指定索引的Page对象
 * @memberof DataTable
 * @param  {number} pageIndex 需要获取的page对应的索引
 * @return {Page|-1}           获取到的Page对象，不存在则返回-1
 * @example
 * datatable.getPage(1)
 */
var getPage = function getPage(pageIndex) {
    if (this.pageCache) {
        return this.cachedPages[pageIndex];
    }
    return -1;
};

/**
 * 获取所有的Page对象
 * @memberof DataTable
 * @return {array} 所有的Page对象
 * @example
 * datatable.getPages()
 */
var getPages = function getPages() {
    if (this.pageCache) {
        return this.cachedPages;
    }
    return [];
};

var getPageFunObj = {
    getPage: getPage,
    getPages: getPages
};

/**
 * Module : kero dataTable getParam
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2016-07-30 14:34:01
 */

/**
 * 获取Param参数值
 * @memberof DataTable
 * @param  {string} key Param对应的key
 * @return {*}     Param参数值
 * @example
 * datatable.getParam('param1')
 */
var getParam = function getParam(key) {
  return this.params[key];
};

var getParamFunObj = {
  getParam: getParam
};

/**
 * Module : kero dataTable getSelect
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-01 14:34:01
 */

/**
 * 获取选中行索引，多选时，只返回第一个行索引
 * @memberof DataTable
 * @return {number} 选中行索引
 * @example
 * datatable.getSelectedIndex()
 */
var getSelectedIndex = function getSelectedIndex() {
    var selectedIndices = this.selectedIndices();
    if (selectedIndices == null || selectedIndices.length == 0) return -1;
    return selectedIndices[0];
};

/**
 * 获取选中的所有行索引数组
 * @memberof DataTable
 * @return {array} 所有行索引数组
 * @example
 * datatable.getSelectedIndices()
 */
var getSelectedIndices = function getSelectedIndices() {
    var selectedIndices = this.selectedIndices();
    if (selectedIndices == null || selectedIndices.length == 0) return [];
    return selectedIndices;
};

// 兼容保留，不要用
var getSelectedIndexs = function getSelectedIndexs() {
    return this.getSelectedIndices();
};

/**
 * 获取选中行的数据信息
 * @memberof DataTable
 * @param  {boolean} [withEmptyRow=false] 未选中的数据是否使用空行代替，true表示以空行代替未选中行，false相反
 * @return {array}            发生变化的数据信息
 * @example
 * datatable.getSelectedDatas()
 * datatable.getSelectedDatas(true)
 */
var getSelectedDatas = function getSelectedDatas(withEmptyRow) {
    var selectedIndices = this.selectedIndices();
    var datas = [];
    var sIndices = [];
    for (var i = 0, count = selectedIndices.length; i < count; i++) {
        sIndices.push(selectedIndices[i]);
    }
    var rows = this.rows();
    for (var i = 0, count = rows.length; i < count; i++) {
        if (sIndices.indexOf(i) != -1) datas.push(rows[i].getData());else if (withEmptyRow == true) datas.push(rows[i].getEmptyData());
    }
    return datas;
};

/**
 * 获取选中的Row对象
 * @memberof DataTable
 * @return {array} 选中的Row对象
 * @example
 * datatable.getSelectedRows()
 */
var getSelectedRows = function getSelectedRows() {
    var selectedIndices = this.selectedIndices();
    var selectRows = [];
    var rows = this.rows.peek();
    var sIndices = [];
    for (var i = 0, count = selectedIndices.length; i < count; i++) {
        sIndices.push(selectedIndices[i]);
    }
    for (var i = 0, count = rows.length; i < count; i++) {
        if (sIndices.indexOf(i) != -1) selectRows.push(rows[i]);
    }
    return selectRows;
};

var getSelectFunObj = {
    getSelectedIndex: getSelectedIndex,
    getSelectedIndices: getSelectedIndices,
    getSelectedIndexs: getSelectedIndexs,
    getSelectedDatas: getSelectedDatas,
    getSelectedRows: getSelectedRows
};

/**
 * Module : kero dataTable getSimpleData
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2016-08-01 14:34:01
 */

/**
 * 获取数据信息，只获取字段名与字段值
 * @memberof DataTable
 * @param  {object} [options] [description]
 * @param  {string} [options.type=all]    获取数据的规则
 * all：所有数据
 * current：当前行数据
 * focus：焦点行数据
 * select：选中行数据
 * change：发生改变的数据
 * @param  {array} [options.fields]    需要获取数据的字段名数组
 * @return {array}        获取到的数据信息
 * @example
 * datatable.getSimpleData() // 获取所有数据信息
 * datatable.getSimpleData({type:'current'}) // 获取当前行数据信息
 * datatable.getSimpleData({type:'current','fields':['filed1','field3']}) // 获取当前行field1和filed3数据信息
 */
var getSimpleData = function getSimpleData(options) {
    options = options || {};
    var rows,
        _rowData = [],
        type = options['type'] || 'all',
        fields = options['fields'] || null;

    if (type === 'current') {
        var currRow = this.getCurrentRow();
        rows = currRow == null ? [] : [currRow];
    } else if (type === 'focus') {
        var focusRow = this.getFocusRow();
        rows = focusRow == null ? [] : [focusRow];
    } else {
        if (this.pageCache) {
            var pages = this.getPages();
            rows = [];
            for (var i = 0; i < pages.length; i++) {
                var page = pages[i];
                if (type === 'all') {
                    rows = rows.concat(page.rows.peek());
                } else if (type === 'select') {
                    rows = rows.concat(page.getSelectRows());
                } else if (type === 'change') {
                    rows = rows.concat(page.getSelectRows());
                }
            }
        } else {
            if (type === 'all') {
                rows = this.rows.peek();
            } else if (type === 'select') {
                rows = this.getSelectedRows();
            } else if (type === 'change') {
                rows = this.getChangedRows();
            }
        }
    }

    for (var i = 0; i < rows.length; i++) {
        _rowData.push(rows[i].getSimpleData({
            fields: fields
        }));
    }
    if (_rowData.length == 0) {
        _rowData = this.setSimpleDataReal; //云采提的#需求
    }
    return _rowData;
};

var getSimpleDataFunObj = {
    getSimpleData: getSimpleData
};

/**
 * Module : kero dataTable mete
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2016-07-30 14:34:01
 */

/**
 * 设置meta信息
 * @memberof DataTable
 * @param {string} fieldName 需要设置meta信息的字段名
 * @param {string} key       meta信息的key
 * @param {string} value     meta信息的值
 * @example
 * datatable.setMeta('filed1','type','string')
 */
var setMeta = function setMeta(fieldName, key, value) {
    if (!this.meta[fieldName]) return;
    var oldValue = this.meta[fieldName][key];
    var currRow = this.getCurrentRow();
    this.meta[fieldName][key] = value;
    if (this.metaChange[fieldName + '.' + key]) this.metaChange[fieldName + '.' + key](-this.metaChange[fieldName + '.' + key]());
    if (key == 'enable') this.enableChange(-this.enableChange());
    this.trigger(DataTable.ON_META_CHANGE, {
        eventType: 'dataTableEvent',
        dataTable: this.id,
        field: fieldName,
        meta: key,
        oldValue: oldValue,
        newValue: value
    });
    if (currRow && !currRow.getMeta(fieldName, key, false)) {
        this.trigger(fieldName + '.' + key + '.' + DataTable.ON_CURRENT_META_CHANGE, {
            eventType: 'dataTableEvent',
            dataTable: this.id,
            oldValue: oldValue,
            newValue: value
        });
    }
};

/**
 * 更新meta信息
 * @memberof DataTable
 * @param  {object} meta 需要更新的meta信息
 * @example
 * var metaObj = {supplier: {meta: {precision:'3', default: '0239900x', display:'显示名称'}}}
 * datatable.updateMeta(metaObj)
 */
var updateMeta = function updateMeta(meta) {
    if (!meta) {
        return;
    }
    for (var fieldKey in meta) {
        for (var propKey in meta[fieldKey]) {
            var oldValue = this.meta[fieldKey][propKey];
            var newValue = meta[fieldKey][propKey];
            if (propKey === 'default') {
                if (!this.meta[fieldKey]['default']) {
                    this.meta[fieldKey]['default'] = {};
                }
                this.meta[fieldKey]['default'].value = meta[fieldKey][propKey];
            } else if (propKey === 'display') {
                if (!this.meta[fieldKey]['default']) {
                    this.meta[fieldKey]['default'] = {};
                }
                this.meta[fieldKey]['default'].display = meta[fieldKey][propKey];
            } else {
                this.meta[fieldKey][propKey] = meta[fieldKey][propKey];
            }
            if (this.metaChange[fieldKey + '.' + propKey]) this.metaChange[fieldKey + '.' + propKey](-this.metaChange[fieldKey + '.' + propKey]());

            this.trigger(DataTable.ON_META_CHANGE, {
                eventType: 'dataTableEvent',
                dataTable: this.id,
                field: fieldKey,
                meta: propKey,
                oldValue: oldValue,
                newValue: newValue
            });
        }
    }
};

// 字段不存在时创建字段，fieldName为需要创建的字段
// options.meta为对应的meta信息
var createField = function createField(fieldName, options) {
    //字段不主动定义，则不创建
    if (this.root.strict == true) return;
    //有子表的情况不创建字段
    if (fieldName.indexOf('.') != -1) {
        var fNames = fieldName.split('.');
        var _name = fNames[0];
        for (var i = 0, count = fNames.length; i < count; i++) {
            if (this.meta[_name] && this.meta[_name]['type'] === 'child') return;
            if (i + 1 < count) _name = _name + '.' + fNames[i + 1];
        }
    }
    if (!this.meta[fieldName]) {
        this.meta[fieldName] = {};
    }
    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
        if (options['meta']) {
            for (var key in options['meta']) {
                //if (!this.meta[fieldName][key]){
                this.meta[fieldName]['meta'][key] = options['meta'][key];
                //}
            }
        } else {
            for (var key in options) {
                //if (!this.meta[fieldName][key]){
                this.meta[fieldName][key] = options[key];
                //}
            }
        }
    }
    // 在顶层dataTable上定义field信息
    if (this.root !== this) {
        var nsArr = this.ns.split('.');
        var _fieldMeta = this.root.meta;
        for (var i = 0; i < nsArr.length; i++) {
            _fieldMeta[nsArr[i]] = _fieldMeta[nsArr[i]] || {};
            _fieldMeta[nsArr[i]]['type'] = _fieldMeta[nsArr[i]]['type'] || 'child';
            _fieldMeta[nsArr[i]]['meta'] = _fieldMeta[nsArr[i]]['meta'] || {};
            _fieldMeta = _fieldMeta[nsArr[i]]['meta'];
        }
        if (!_fieldMeta[fieldName]) {
            _fieldMeta[fieldName] = {};
        }
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            for (var key in options) {
                if (!_fieldMeta[fieldName][key]) {
                    _fieldMeta[fieldName][key] = options[key];
                }
            }
        }
    }
};

var metaFunObj = {
    setMeta: setMeta,
    updateMeta: updateMeta,
    createField: createField
};

/**
 * Module : kero dataTable page
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2016-08-01 14:34:01
 */

// 设置当前页
var setCurrentPage = function setCurrentPage(pageIndex, notCacheCurrentPage) {
    var nowTotalRow = this.totalRow();
    if (pageIndex != this.pageIndex() && notCacheCurrentPage != true) this.cacheCurrentPage();
    this.pageIndex(pageIndex);
    var cachedPage = this.cachedPages[this.pageIndex()];
    if (cachedPage) {
        // 取当前页的选中行重设选中行
        var selectedIndices = cachedPage.selectedIndices;
        this.removeAllRows();
        this.setRows(cachedPage.rows);
        this.setRowsSelect(selectedIndices);
    }
    this.totalRow(nowTotalRow);
};

// 更新分页信息，通过fire调用，不对外提供
var updatePages = function updatePages(pages) {
    var pageSize = this.pageSize(),
        pageIndex = 0,
        page,
        r,
        row;
    var page, index, i, rows, focus, selectIndices, status, j, row, originRow;
    for (i = 0; i < pages.length; i++) {
        index = pages[i].index;
        rows = pages[i].rows;
        focus = pages[i].current;
        selectIndices = pages[i].select;
        status = pages[i].status;
        if (status === 'del') {
            this.cachedPages[index] = null;
            continue;
        }
        if (!this.cachedPages[index]) {
            page = new Page({
                parent: this
            });
            page.rows = rows;
            for (var j = 0; j < page.rows.length; j++) {
                page.rows[j].rowId = page.rows[j].id;
                delete page.rows[j].id;
            }
            this.cachedPages[index] = page;
            page.selectedIndices = selectIndices;
            page.focus = focus;
        } else {
            page = this.cachedPages[index];
            page.selectedIndices = selectIndices;
            page.focus = focus;
            for (var j = 0; j < rows.length; j++) {
                r = rows[j];
                if (!r.id) r.id = Row.getRandomRowId();
                if (r.status == Row.STATUS.DELETE) {

                    var row = page.getRowByRowId(r.id);
                    if (row) {
                        // 针对后台不传回总行数的情况下更新总行数
                        var oldTotalRow = this.totalRow();
                        var newTotalRow = oldTotalRow - 1;
                        this.totalRow(newTotalRow);
                        if (row.status == Row.STATUS.NEW) {
                            this.newCount -= 1;
                            if (this.newCount < 0) this.newCount = 0;
                        }
                    }
                    this.removeRowByRowId(r.id);
                    page.removeRowByRowId(r.id);
                } else {
                    row = page.getRowByRowId(r.id);
                    if (row) {
                        page.updateRow(row, r);
                        // if(row.status == Row.STATUS.NEW){
                        //     // 针对后台不传回总行数的情况下更新总行数
                        //     var oldTotalRow = this.totalRow();
                        //     var newTotalRow = oldTotalRow + 1;
                        //     this.totalRow(newTotalRow);
                        // }
                        if (row.status == Row.STATUS.NEW && r.status != Row.STATUS.NEW) {
                            this.newCount -= 1;
                            if (this.newCount < 0) this.newCount = 0;
                        }
                        row.setStatus(Row.STATUS.NORMAL);
                        if (r.status == Row.STATUS.NEW) {
                            row.setStatus(Row.STATUS.NEW);
                        }
                    } else {
                        r.rowId = r.id;
                        delete r.id;
                        page.rows.push(r);
                        if (r.status != Row.STATUS.NEW) {
                            row.setStatus(Row.STATUS.NORMAL);
                        } else {
                            this.newCount += 1;
                        }
                        // 针对后台不传回总行数的情况下更新总行数
                        var oldTotalRow = this.totalRow();
                        var newTotalRow = oldTotalRow + 1;
                        this.totalRow(newTotalRow);
                    }
                }
            }
        }
    }
};

// 前端分页方法，不建议使用，建议在后端进行分页
var setPages = function setPages(allRows) {
    var pageSize = this.pageSize(),
        pageIndex = 0,
        page;
    this.cachedPages = [];
    for (var i = 0; i < allRows.length; i++) {
        pageIndex = Math.floor(i / pageSize);
        if (!this.cachedPages[pageIndex]) {
            page = new Page({
                parent: this
            });
            this.cachedPages[pageIndex] = page;
        }
        page.rows.push(allRows[i]);
    }
    if (this.pageIndex() > -1) this.setCurrentPage(this.pageIndex());
    this.totalRow(allRows.length);
    this.totalPages(pageIndex + 1);
};

// 判断是否存在索引对应的Page
var hasPage = function hasPage(pageIndex) {
    return this.pageCache && this.cachedPages[pageIndex] ? true : false;
};

// 清空cachedPages
var clearCache = function clearCache() {
    this.cachedPages = [];
};

// 更新当前分页的page对象
var cacheCurrentPage = function cacheCurrentPage() {
    if (this.pageCache && this.pageIndex() > -1) {
        var page = new Page({
            parent: this
        });
        page.focus = this.getFocusIndex();
        page.selectedIndices = this.selectedIndices().slice();
        var rows = this.rows.peek();
        for (var i = 0; i < rows.length; i++) {
            var r = rows[i].getData();
            r.rowId = r.id;
            delete r.id;
            page.rows.push(r);
        }
        this.cachedPages[this.pageIndex()] = page;
    }
};

//根据datatable的选中行更新每页的选中行
var updatePagesSelect = function updatePagesSelect() {
    var selectRows = this.getSelectedRows();
    var pages = this.getPages();
    for (var i = 0; i < pages.length; i++) {
        var rows = pages[i].rows;
        var selectedIndices = [];
        for (var j = 0; j < selectRows.length; j++) {
            var nowSelectRow = selectRows[j];
            for (var k = 0; k < rows.length; k++) {
                var row = rows[k];
                if (nowSelectRow == row) {
                    selectedIndices.push(k);
                    break;
                }
            }
        }
        pages[i].selectedIndices = selectedIndices;
    }
};

//根据datatable的rows更新当前页的rows
var updatePageRows = function updatePageRows() {
    if (this.pageCache) {
        var pageIndex = this.pageIndex();
        var page = this.getPages()[pageIndex];
        if (page) {
            page.rows = this.rows();
        }
    }
};

//根据datatable的选中行更新page的选中行
var updatePageSelect = function updatePageSelect() {
    if (this.pageCache) {
        var pageIndex = this.pageIndex();
        var page = this.getPages()[pageIndex];
        if (page) {
            var selectedIndices = this.selectedIndices().slice();
            page.selectedIndices = selectedIndices;
        }
    }
};

//根据datatable的focus更新page的focus
var updatePageFocus = function updatePageFocus() {
    if (this.pageCache) {
        var pageIndex = this.pageIndex();
        var page = this.getPages()[pageIndex];
        if (page) {
            page.focus = this.getFocusIndex();
        }
    }
};

// 根据datatable更新page对象
var updatePageAll = function updatePageAll() {
    this.updatePageRows();
    this.updatePageSelect();
    this.updatePageFocus();
};

var pageFunObj = {
    setCurrentPage: setCurrentPage,
    updatePages: updatePages,
    setPages: setPages,
    hasPage: hasPage,
    clearCache: clearCache,
    cacheCurrentPage: cacheCurrentPage,
    updatePagesSelect: updatePagesSelect,
    updatePageRows: updatePageRows,
    updatePageSelect: updatePageSelect,
    updatePageFocus: updatePageFocus,
    updatePageAll: updatePageAll
};

/**
 * Module : kero dataTable param
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2016-07-30 14:34:01
 */

/**
 * 增加Param参数
 * @memberof DataTable
 * @param {string} key   需要增加的key值
 * @param {*} value 需要增加的具体指
 * @example
 * datatable.addParam('precision','3')
 */
var addParam = function addParam(key, value) {
    this.params[key] = value;
};

/**
 * 增加多个Param参数
 * @memberof DataTable
 * @param {object} params 需要增加的Param对象
 * @example
 * var paramsObj = {
 *  'precision':'3',
 *  'default':'1.234'
 * }
 * datatable.addParams(paramsObj)
 */
var addParams = function addParams(params) {
    for (var key in params) {
        this.params[key] = params[key];
    }
};

var paramFunObj = {
    addParam: addParam,
    addParams: addParams
};

/**
 * Module : kero dataTable ref
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-01 14:34:01
 */

/**
 * 为选中行绑定监听，当选中行发生改变时触发对应方法
 * @memberof DataTable
 * @param {string} fieldName 绑定的字段名
 * @example
 * datatable.refSelectedRows().subscribe(function(){})
 */
var refSelectedRows = function refSelectedRows() {
    return ko.pureComputed({
        read: function read() {
            var ins = this.selectedIndices() || [];
            var rs = this.rows();
            var selectedRows = [];
            for (var i = 0; i < ins.length; i++) {
                selectedRows.push(rs[i]);
            }
            return selectedRows;
        },
        owner: this
    });
};

/**
 * 为某个字段绑定监听，当字段发生改变时触发对应方法
 * @memberof DataTable
 * @param {string} fieldName 绑定的字段名
 * @example
 * datatable.ref('field1').subscribe(function(){})
 */
var ref = function ref(fieldName) {
    this.createField(fieldName);
    if (!this.valueChange[fieldName]) this.valueChange[fieldName] = ko.observable(1);
    return ko.pureComputed({
        read: function read() {
            this.valueChange[fieldName]();
            this.currentRowChange();
            var row = this.getCurrentRow();
            if (row) {
                return row.getChildValue(fieldName);
            } else return '';
        },
        write: function write(value) {
            var row = this.getCurrentRow();
            if (row) row.setChildValue(fieldName, value);
        },
        owner: this
    });
};

/**
 * 绑定字段属性，当字段属性发生改变时触发对应方法
 * @memberof DataTable
 * @param {string} fieldName 绑定的字段名
 * @param {string} key 绑定的属性key
 * @example
 * datatable.refMeta('field1','type').subscribe(function(){})
 */
var refMeta = function refMeta(fieldName, key) {
    if (!this.metaChange[fieldName + '.' + key]) this.metaChange[fieldName + '.' + key] = ko.observable(1);
    return ko.pureComputed({
        read: function read() {
            this.metaChange[fieldName + '.' + key]();
            this.currentRowChange();
            return this.getMeta(fieldName, key);
        },
        write: function write(value) {
            this.setMeta(fieldName, key, value);
        },
        owner: this
    });
};

/**
 * 绑定当前行的字段属性，当字段属性发生改变时触发对应方法
 * @memberof DataTable
 * @param {string} fieldName 绑定的字段名
 * @param {string} key 绑定的属性key
 * @example
 * datatable.refRowMeta('field1','type').subscribe(function(){})
 */
var refRowMeta = function refRowMeta(fieldName, key) {
    if (!this.metaChange[fieldName + '.' + key]) this.metaChange[fieldName + '.' + key] = ko.observable(1);
    return ko.pureComputed({
        read: function read() {
            this.metaChange[fieldName + '.' + key]();
            this.currentRowChange();
            var row = this.getCurrentRow();
            if (row) return row.getMeta(fieldName, key);else return this.getMeta(fieldName, key);
        },
        write: function write(value) {
            var row = this.getCurrentRow();
            if (row) row.setMeta(fieldName, value);
        },
        owner: this
    });
};

/**
 * 绑定字段是否可修改属性，当字段可修改属性发生改变时触发对应方法
 * @memberof DataTable
 * @param {string} fieldName 绑定的字段名
 * @example
 * datatable.refEnable('field1').subscribe(function(){})
 */
var refEnable = function refEnable(fieldName) {
    return ko.pureComputed({
        //enable优先级： dataTable.enable >  row上的enable >  field中的enable定义
        read: function read() {
            this.enableChange();
            if (!fieldName) return this.enable;
            var fieldEnable = this.getRowMeta(fieldName, 'enable');
            if (typeof fieldEnable == 'undefined' || fieldEnable == null) fieldEnable = true;
            return fieldEnable && this.enable;
        },
        owner: this
    });
};

var refFunObj = {
    refSelectedRows: refSelectedRows,
    ref: ref,
    refMeta: refMeta,
    refRowMeta: refRowMeta,
    refEnable: refEnable
};

/**
 * Module : kero dataTable util
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-08 09:59:01
 */
// 判断DataTable对象是否发生了改变
var isChanged = function isChanged() {
    var rows = this.getAllRows();
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].status != Row.STATUS.NORMAL) return true;
    }
    return false;
};

// 将Row对象转为索引数组或者将Row对象数组转为索引数组
var _formatToIndicesArray = function _formatToIndicesArray(dataTableObj, indices) {
    if (typeof indices == 'string' || typeof indices == 'number') {
        indices = [indices];
    } else if (indices instanceof Row) {
        indices = [dataTableObj.getIndexByRowId(indices.rowId)];
    } else if (isArray(indices) && indices.length > 0 && indices[0] instanceof Row) {
        for (var i = 0; i < indices.length; i++) {
            indices[i] = dataTableObj.getIndexByRowId(indices[i].rowId);
        }
    }
    return indices;
};

var utilFunObj = {
    isChanged: isChanged,
    _formatToIndicesArray: _formatToIndicesArray

};

/**
 * Module : kero dataTable removeRow
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-01 14:34:01
 */
/**
 * 根据rowId删除指定行
 * @memberof DataTable
 * @param  {string} rowId 需要删除行的rowId
 * @example
 * datatable.removeRowByRowId('rowid1')
 */
var removeRowByRowId = function removeRowByRowId(rowId) {
    var index = this.getIndexByRowId(rowId);
    if (index != -1) this.removeRow(index);
};

/**
 *根据索引删除指定行
 * @memberof DataTable
 * @param  {number} index 需要删除行的索引
 * @example
 * datatable.removeRow(1)
 */
var removeRow = function removeRow(index) {
    if (index instanceof Row) {
        index = this.getIndexByRowId(index.rowId);
    }
    this.removeRows([index]);
};

/**
 * 删除所有行
 * @memberof DataTable
 * @example
 * datatable.removeAllRows();
 */
var removeAllRows = function removeAllRows() {
    this.rows([]);
    this.selectedIndices([]);
    this.focusIndex(-1);
    this.trigger(DataTable.ON_DELETE_ALL);
    this.updateCurrIndex();
};

/**
 * 根据索引数据删除多条数据行
 * @memberof DataTable
 * @param  {array} indices 需要删除的数据行对应数组，数组中既可以是索引也可以是row对象
 * @example
 * datatable.removeRows([1,2])
 * datatable.removeRows([row1,row2])
 */
var removeRows = function removeRows(indices) {
    this.setRowsDelete(indices);
};

/**
 * 清空datatable的所有数据以及分页数据以及index
 * @memberof DataTable
 * @example
 * datatable.clear()
 */
var clear = function clear() {
    this.removeAllRows();
    this.cachedPages = [];
    this.totalPages(1);
    this.pageIndex(0);
    this.focusIndex(-1);
    this.selectedIndices([]);
};

var removeRowFunObj = {
    removeRowByRowId: removeRowByRowId,
    removeRow: removeRow,
    removeAllRows: removeAllRows,
    removeRows: removeRows,
    clear: clear
};

/**
 * Module : kero dataTable row
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2016-08-01 14:34:01
 */
// 添加数据，建议使用setData或者setSimpleData
var setRows = function setRows(rows, options) {
    var insertRows = [],
        _id;
    for (var i = 0; i < rows.length; i++) {
        var r = rows[i];
        _id = r.rowId || r.id;
        if (!_id) _id = Row.getRandomRowId();
        if (r.status == Row.STATUS.DELETE) {
            this.removeRowByRowId(_id);
        } else {
            var row = this.getRowByRowId(_id);
            if (row) {
                row.updateRow(r);
                if (!isEmptyObject(r.data)) {
                    this.trigger(DataTable.ON_UPDATE, {
                        index: i,
                        rows: [row]
                    });
                    if (row == this.getCurrentRow()) {
                        this.currentRowChange(-this.currentRowChange());
                        row.currentRowChange(-row.currentRowChange());
                        this.trigger(DataTable.ON_CURRENT_UPDATE, {
                            index: i,
                            rows: [row]
                        });
                    } else {
                        row.currentRowChange(-row.currentRowChange());
                    }
                }
            } else {
                row = new Row({
                    parent: this,
                    id: _id
                });
                row.setData(rows[i], null, options);
                insertRows.push(row);
            }
            // 如果r对象中存在状态则更新状态为返回的状态
            if (r.status) {
                row.setStatus(r.status);
            }
        }
    }
    if (insertRows.length > 0) this.addRows(insertRows);
    return insertRows;
};

/**
 * 在最后位置添加一条数据行
 * @memberof DataTable
 * @param {u.Row} row 数据行
 * @example
 * var row1 = new Row({parent: datatable})
 * row1.setData({
 *  data:{
 *    field1: 'value1',
 *    field2: 'value2'
 *  }
 * })
 * datatable.addRow(row1)
 */
var addRow = function addRow(row) {
    this.insertRow(this.rows().length, row);
    this.resetDelRowEnd();
};

var resetDelRowEnd = function resetDelRowEnd() {
    for (var i = this.rows().length - 1; i > -1; i--) {
        var row = this.rows()[i];
        if (row.status == Row.STATUS.DELETE || row.status == Row.STATUS.FALSE_DELETE) {
            this.rows().splice(i, 1);
            this.rows().push(row);
        }
    }
};

/**
 * 在最后位置添加多条数据行
 * @memberof DataTable
 * @param {array} rows  数据行数组
 * @example
 * var row1 = new Row({parent: datatable})
 * row1.setData({
 *  data:{
 *    field1: 'value1',
 *    field2: 'value2'
 *  }
 * })
 * var row2 = new Row({parent: datatable})
 * row2.setData({
 *  data:{
 *    field1: 'value11',
 *    field2: 'value22'
 *  }
 * })
 * datatable.addRows([row1,row2])
 */
var addRows = function addRows(rows) {
    this.insertRows(this.rows().length, rows);
    this.resetDelRowEnd();
};

/**
 * 在指定索引位置添加一条数据行
 * @memberof DataTable
 * @param  {number} index 指定索引
 * @param  {u.Row} row   数据行
 * @example
 * var row1 = new Row({parent: datatable})
 * row1.setData({
 *  data:{
 *    field1: 'value1',
 *    field2: 'value2'
 *  }
 * })
 * datatable.insertRow(1,row1)
 */
var insertRow = function insertRow(index, row) {
    if (!row) {
        row = new Row({
            parent: this
        });
    }
    this.insertRows(index, [row]);
};

/**
 * 在指定索引位置添加多条数据行
 * @memberof DataTable
 * @param  {number} index 指定索引
 * @param  {array} rows  数据行数组
 * var row1 = new Row({parent: datatable})
 * row1.setData({
 *  data:{
 *    field1: 'value1',
 *    field2: 'value2'
 *  }
 * })
 * var row2 = new Row({parent: datatable})
 * row2.setData({
 *  data:{
 *    field1: 'value11',
 *    field2: 'value22'
 *  }
 * })
 * datatable.insertRows(1,[row1,row2])
 */
var insertRows = function insertRows(index, rows) {
    var args = [index, 0];
    for (var i = 0; i < rows.length; i++) {
        args.push(rows[i]);
    }
    this.rows.splice.apply(this.rows, args);

    this.updateSelectedIndices(index, '+', rows.length);
    this.updateFocusIndex(index, '+', rows.length);
    this.updatePageAll();
    this.trigger(DataTable.ON_INSERT, {
        index: index,
        rows: rows
    });
    if (this.ns) {
        if (this.root.valueChange[this.ns]) this.root.valueChange[this.ns](-this.root.valueChange[this.ns]());
    }
};

/**
 * 创建空行
 * @memberof DataTable
 * @return {u.Row} 空行对象
 * @example
 * datatable.createEmptyRow();
 * datatable.createEmptyRow({unSelect:true})
 */
var createEmptyRow = function createEmptyRow(options) {
    var r = new Row({
        parent: this
    });
    this.addRow(r);
    var unSelect = options ? options.unSelect : false;
    if (!unSelect) {
        if (!this.getCurrentRow()) this.setRowSelect(r);
    }
    return r;
};

var rowFunObj = {
    setRows: setRows,
    addRow: addRow,
    addRows: addRows,
    insertRow: insertRow,
    insertRows: insertRows,
    createEmptyRow: createEmptyRow,
    resetDelRowEnd: resetDelRowEnd
};

/***
 * Module : kero dataTable rowCurrent
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-08 09:59:01
 */

// 更新当前行对应索引
var updateCurrIndex = function updateCurrIndex() {
    var currentIndex = this.focusIndex() != -1 ? this.focusIndex() : this.getSelectedIndex();
    if (this._oldCurrentIndex != currentIndex) {
        this._oldCurrentIndex = currentIndex;
        this.trigger(DataTable.ON_CURRENT_ROW_CHANGE);
        this.currentRowChange(-this.currentRowChange());
        if (this.ns) {
            if (this.root.valueChange[this.ns]) this.root.valueChange[this.ns](-this.root.valueChange[this.ns]());
        }
    }
};

var rowCurrentFunObj = {
    updateCurrIndex: updateCurrIndex
};

/**
 * Module : kero dataTable rowDelete
 * Desc: 不建议使用此库方法
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-01 14:34:01
 */
/***
 * 根据索引删除数据行
 * @param {number} index 需要删除数据行的索引
 */
var setRowDelete = function setRowDelete(index) {
    if (index instanceof Row) {
        index = this.getIndexByRowId(index.rowId);
    }
    this.setRowsDelete([index]);
};

/***
 * 删除所有数据行
 */
var setAllRowsDelete = function setAllRowsDelete() {
    var indices = new Array(this.rows().length);
    for (var i = 0; i < indices.length; i++) {
        indices[i] = i;
    }
    this.setRowsDelete(indices);
};

/***
 * 根据索引数组删除数据行
 * @param {Array} indices 需要删除数据行的索引数组
 */
var setRowsDelete = function setRowsDelete(indices) {
    indices = utilFunObj._formatToIndicesArray(this, indices);
    indices = indices.sort(function (a, b) {
        return b - a;
    });
    var rowIds = this.getRowIdsByIndices(indices);
    var rows = this.getRowsByIndices(indices);
    var ros = this.rows();
    for (var i = 0; i < indices.length; i++) {
        var row = this.getRow(indices[i]);
        if (row.status == Row.STATUS.NEW || this.forceDel) {
            ros.splice(indices[i], 1);
        } else {
            row.setStatus(Row.STATUS.FALSE_DELETE);
            var temprows = ros.splice(indices[i], 1);
            ros.push(temprows[0]);
        }
        this.updateSelectedIndices(indices[i], '-');
        this.updateFocusIndex(indices[i], '-');
    }
    this.rows(ros);
    this.updateCurrIndex();
    this.trigger(DataTable.ON_DELETE, {
        falseDelete: true,
        indices: indices,
        rowIds: rowIds,
        rows: rows
    });
};

var rowDeleteFunObj = {
    setRowDelete: setRowDelete,
    setAllRowsDelete: setAllRowsDelete,
    setRowsDelete: setRowsDelete
};

/**
 * Module : kero dataTable rowSelect
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-01 14:34:01
 */
/**
 * 设置所有行选中
 * @memberof DataTable
 * @example
 * datatable.setAllRowsSelect()
 */
var setAllRowsSelect = function setAllRowsSelect() {
    var indices = new Array(this.rows().length);
    for (var i = 0; i < indices.length; i++) {
        indices[i] = i;
    }
    this.setRowsSelect(indices);
    this.allSelected(true);
    this.trigger(DataTable.ON_ROW_ALLSELECT, {});
};

/**
 * 根据索引设置选中行，清空之前已选中的所有行
 * @memberof DataTable
 * @param {number} index 需要选中行的索引
 * @example
 * datatable.setRowSelect(1)
 */
var setRowSelect = function setRowSelect(index) {
    if (index instanceof Row) {
        index = this.getIndexByRowId(index.rowId);
    }
    this.setRowsSelect([index]);
    this.setRowFocus(this.getSelectedIndex());
};

/**
 * 根据索引数组设置选中行，清空之前已选中的所有行
 * @memberof DataTable
 * @param {array} indices 需要选中行的索引数组
 * @example
 * datatable.setRowsSelect([1,2])
 */
var setRowsSelect = function setRowsSelect(indices) {
    indices = indices || -1;
    if (indices == -1) {
        this.setAllRowsUnSelect({
            quiet: true
        });
        return;
    }
    indices = utilFunObj._formatToIndicesArray(this, indices);
    var sIns = this.selectedIndices();
    if (isArray(indices) && isArray(sIns) && indices.join() == sIns.join()) {
        // 避免与控件循环触发
        return;
    }

    if (isArray(indices)) {
        var rowNum = this.rows().length;
        for (var i = 0; i < indices.length; i++) {
            if (indices[i] < 0 || indices[i] >= rowNum) indices.splice(i, 1);
        }
    }

    this.setAllRowsUnSelect({
        quiet: true
    });
    try {
        this.selectedIndices(indices);
    } catch (e) {}
    this.updatePageSelect();
    var rowIds = this.getRowIdsByIndices(indices);
    this.currentRowChange(-this.currentRowChange());
    this.trigger(DataTable.ON_ROW_SELECT, {
        indices: indices,
        rowIds: rowIds
    });
    this.updateCurrIndex();
};

/**
 * 根据索引添加选中行，不会清空之前已选中的行
 * @memberof DataTable
 * @param {number} index 需要选中行的索引
 * @example
 * datatable.addRowSelect(1)
 */
var addRowSelect = function addRowSelect(index) {
    if (index instanceof Row) {
        index = this.getIndexByRowId(index.rowId);
    }
    this.addRowsSelect([index]);
};

/**
 * 根据索引数组添加选中行，不会清空之前已选中的行
 * @memberof DataTable
 * @param {array} indices 需要选中行的索引数组
 * @example
 * datatabel.addRowsSelect([1,2])
 */
var addRowsSelect = function addRowsSelect(indices) {
    indices = utilFunObj._formatToIndicesArray(this, indices);
    var selectedIndices = this.selectedIndices().slice();
    var needTrigger = false;
    for (var i = 0; i < indices.length; i++) {
        var ind = indices[i],
            toAdd = true;
        for (var j = 0; j < selectedIndices.length; j++) {
            if (selectedIndices[j] == ind) {
                toAdd = false;
            }
        }
        //indices[i]存在并且大于-1
        if (toAdd && indices[i] > -1) {
            needTrigger = true;
            selectedIndices.push(indices[i]);
        }
    }
    this.selectedIndices(selectedIndices);
    this.updatePageSelect();
    var rowIds = this.getRowIdsByIndices(selectedIndices);
    if (needTrigger) {
        this.trigger(DataTable.ON_ROW_SELECT, {
            indices: selectedIndices,
            rowIds: rowIds
        });
    }
    this.updateCurrIndex();
};

/**
 * 全部取消选中
 * @memberof DataTable
 * @param {object} [options] 可选参数
 * @param {boolean} [options.quiet] 如果为true则不触发事件，否则触发事件
 * @example
 * datatable.setAllRowsUnSelect() // 全部取消选中
 * datatable.setAllRowsUnSelect({quiet:true}) // 全部取消选中,不触发事件
 */
var setAllRowsUnSelect = function setAllRowsUnSelect(options) {
    this.selectedIndices([]);
    this.updatePageSelect();
    if (!(options && options.quiet)) {
        this.trigger(DataTable.ON_ROW_ALLUNSELECT);
    }
    this.updateCurrIndex();
    this.allSelected(false);
};

/**
 * 根据索引取消选中
 * @memberof DataTable
 * @param {number} index 需要取消选中的行索引
 * @example
 * datatable.setRowUnSelect(1)
 */
var setRowUnSelect = function setRowUnSelect(index) {
    if (index instanceof Row) {
        index = this.getIndexByRowId(index.rowId);
    }
    this.setRowsUnSelect([index]);
};

/**
 * 根据索引数组取消选中
 * @memberof DataTable
 * @param {array} indices 需要取消选中的行索引数组
 * @example
 * datatable.setRowsUnSelect([1,2])
 */
var setRowsUnSelect = function setRowsUnSelect(indices) {
    indices = utilFunObj._formatToIndicesArray(this, indices);
    var selectedIndices = this.selectedIndices().slice();

    // 避免与控件循环触发
    if (selectedIndices.indexOf(indices[0]) == -1) return;

    for (var i = 0; i < indices.length; i++) {
        var index = indices[i];
        var pos = selectedIndices.indexOf(index);
        if (pos != -1) selectedIndices.splice(pos, 1);
    }
    this.selectedIndices(selectedIndices);
    this.updatePageSelect();
    var rowIds = this.getRowIdsByIndices(indices);
    this.trigger(DataTable.ON_ROW_UNSELECT, {
        indices: indices,
        rowIds: rowIds
    });
    this.updateCurrIndex();
    this.allSelected(false);
};

/**
 * 当全部选中时取消选中，否则全部选中
 * @memberof DataTable
 */
var toggleAllSelect = function toggleAllSelect() {
    if (this.allSelected()) {
        this.setAllRowsUnSelect();
    } else {
        this.setAllRowsSelect();
    }
};

/***
 * 数据行发生改变时更新focusindex
 * @memberof DataTable
 * @param  {number} index 发生改变的数据行位置
 * @param  {string} type  +表示新增行，-表示减少行
 * @param  {number} num     新增/减少的行数
 */
var updateSelectedIndices = function updateSelectedIndices(index, type, num) {
    if (!isNumber$1(num)) {
        num = 1;
    }
    var selectedIndices = this.selectedIndices().slice();
    if (selectedIndices == null || selectedIndices.length == 0) return;
    for (var i = 0, count = selectedIndices.length; i < count; i++) {
        if (type == '+') {
            if (selectedIndices[i] >= index) selectedIndices[i] = parseInt(selectedIndices[i]) + num;
        } else if (type == '-') {
            if (selectedIndices[i] >= index && selectedIndices[i] <= index + num - 1) {
                selectedIndices.splice(i, 1);
            } else if (selectedIndices[i] > index + num - 1) selectedIndices[i] = selectedIndices[i] - num;
        }
    }
    this.selectedIndices(selectedIndices);
    this.updatePageSelect();
};
var rowSelectFunObj = {
    setAllRowsSelect: setAllRowsSelect,
    setRowSelect: setRowSelect,
    setRowsSelect: setRowsSelect,
    addRowSelect: addRowSelect,
    addRowsSelect: addRowsSelect,
    setAllRowsUnSelect: setAllRowsUnSelect,
    setRowUnSelect: setRowUnSelect,
    setRowsUnSelect: setRowsUnSelect,
    toggleAllSelect: toggleAllSelect,
    updateSelectedIndices: updateSelectedIndices
};

/**
 * Module : kero dataTable rowFocus
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-08 09:59:01
 */
/**
 * 设置焦点行
 * @memberof DataTable
 * @param {number|u.Row} index 行对象或者行index
 * @param {boolean} [quiet] 如果为true则不触发事件，否则触发事件
 * @param {boolean} [force] 如果为true当index行与已focus的行相等时，仍然触发事件，否则不触发事件
 * @example
 * datatable.setRowFocus(1) // 设置第二行为焦点行
 * datatable.setRowFocus(1,true) // 设置第二行为焦点行，不触发事件
 * datatable.setRowFocus(1,false,true) // 设置第二行为焦点行，如果当前焦点行为第二行，仍旧触发事件
 */
var setRowFocus = function setRowFocus(index, quiet, force) {
    var rowId = null;
    if (index instanceof Row) {
        index = this.getIndexByRowId(index.rowId);
        rowId = index.rowId;
    }
    if (index === -1 || index === this.focusIndex() && !force) {
        return;
    }
    this.focusIndex(index);
    if (quiet) {
        return;
    }
    this.currentRowChange(-this.currentRowChange());
    if (!rowId) {
        rowId = this.getRow(index).rowId;
    }
    this.trigger(DataTable.ON_ROW_FOCUS, {
        index: index,
        rowId: rowId
    });
    this.updateCurrIndex();
};

/**
 * 焦点行反选
 * @memberof DataTable
 * @example
 * datatable.setRowUnFocus()
 */
var setRowUnFocus = function setRowUnFocus() {
    this.currentRowChange(-this.currentRowChange());
    var indx = this.focusIndex(),
        rowId = null;
    if (indx !== -1) {
        rowId = this.getRow(indx).rowId;
    }
    this.trigger(DataTable.ON_ROW_UNFOCUS, {
        index: indx,
        rowId: rowId
    });
    this.focusIndex(-1);
    this.updateCurrIndex();
};

/***
 * 数据行发生改变时更新focusindex
 * @memberof DataTable
 * @param  {number} opIndex 发生改变的数据行位置
 * @param  {string} opType  +表示新增行，-表示减少行
 * @param  {number} num     新增/减少的行数
 *
 */
var updateFocusIndex = function updateFocusIndex(opIndex, opType, num) {
    if (!isNumber$1(num)) {
        num = 1;
    }
    if (opIndex <= this.focusIndex() && this.focusIndex() != -1) {
        if (opType === '+') {
            this.focusIndex(this.focusIndex() + num);
        } else if (opType === '-') {
            if (this.focusIndex() >= opIndex && this.focusIndex() <= opIndex + num - 1) {
                this.focusIndex(-1);
            } else if (this.focusIndex() > opIndex + num - 1) {
                this.focusIndex(this.focusIndex() - num);
            }
        }
    }
};

var rowFocusFunObj = {
    setRowFocus: setRowFocus,
    setRowUnFocus: setRowUnFocus,
    updateFocusIndex: updateFocusIndex
};

/**
 * Module : kero dataTable simpleData
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2016-08-01 14:34:01
 */
/**
 * 设置数据, 只设置字段值
 * @memberof DataTable
 * @param {array} data 数据信息
 * @param {boject} [options] 可配置参数
 * @param {boject} [options.unSelect=false] 是否默认选中第一行，如果为true则不选中第一行，否则选中第一行
 * @example
 * var data = [{
 *   filed1:'value1',
 *   field2:'value2'
 * },{
 *   filed1:'value11',
 *   field2:'value21'
 * }]
 * datatable.setSimpleData(data)
 * datatable.setSimpleData(data,{unSelect:true})
 */
var setSimpleData = function setSimpleData(data, options) {
    this.removeAllRows();
    this.cachedPages = [];
    this.focusIndex(-1);
    this.selectedIndices([]);

    this.setSimpleDataReal = [];
    if (!data) {
        this.setSimpleDataReal = data;
        // throw new Error("dataTable.setSimpleData param can't be null!");
        return;
    }

    var rows = [];
    if (!isArray(data)) data = [data];
    for (var i = 0; i < data.length; i++) {
        var _data = data[i];
        /* 判断data中的字段在datatable中是否存在，如果不存在则创建 */
        // for(var f in _data){
        //     this.createField(f)
        // }
        if (_typeof(data[i]) !== 'object') _data = { $data: data[i] };
        rows.push({
            status: Row.STATUS.NORMAL,
            data: _data
        });
    }
    var _data = {
        rows: rows
    };
    if (options) {
        if (typeof options.fieldFlag == 'undefined') {
            options.fieldFlag = true;
        }
    }
    this.setData(_data, options);
};

/**
 * 追加数据, 只设置字段值
 * @memberof DataTable
 * @param {array} data 数据信息
 * @param {string} [status=nrm] 追加数据信息的状态，参照Row对象的状态介绍
 * @param {boject} [options] 可配置参数
 * @param {boject} [options.unSelect=false] 是否默认选中第一行，如果为true则不选中第一行，否则选中第一行
 * @example
 * var data = [{
 *   filed1:'value1',
 *   field2:'value2'
 * },{
 *   filed1:'value11',
 *   field2:'value21'
 * }]
 * datatable.addSimpleData(data,Row.STATUS.NEW)
 * datatable.addSimpleData(data, null, {unSelect:true})
 */
var addSimpleData = function addSimpleData(data, status, options) {
    if (!data) {
        throw new Error("dataTable.addSimpleData param can't be null!");
    }
    if (!isArray(data)) data = [data];
    for (var i = 0; i < data.length; i++) {
        var r = this.createEmptyRow(options);
        r.setSimpleData(data[i], status);
    }
};

var simpleDataFunObj = {
    setSimpleData: setSimpleData,
    addSimpleData: addSimpleData
};

/**
 * Module : kero DataTable events
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-07-30 14:34:01
 */

/**
 * 为DataTable对象添加监听
 * @memberof DataTable
 * @param  {string|array|object}   name     针对不同用法分别对应监听名称、监听名称对应的数组、监听名称及对应的回调组成的对象
 * @param  {function} [callback] 监听对应的回调函数
 * @param  {boolean}   [one]      是否只执行一次监听，为true则表示只执行一次回调函数，否则每次触发监听都是执行回调函数
 * @return {DataTable}            当前的DataTable对象
 * @example
 * datatable.on(u.DataTable.ON_ROW_FOCUS, function() {}) // 普通
 * datatable.on([u.DataTable.ON_INSERT, u.DataTable.ON_DELETE], function() {}) // 数组
 * datatable.on({u.DataTable.ON_INSERT: function() {}, u.DataTable.ON_DELETE: function() {}}) // map
 */
var on$2 = function on(name, _callback, one) {
    var self = this,
        origCb = _callback;
    if (Object.prototype.toString.call(name) == '[object Array]') {
        // 数组
        for (var i in name) {
            this.on(name[i], _callback);
        }
        return this;
    } else if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) == 'object') {
        // map
        for (var key in name) {
            this.on(key, name[key]);
        }
        return this;
    }
    if (one) {
        _callback = function callback() {
            self.off(name, _callback);
            origCb.apply(this, arguments);
        };
    }
    name = name.toLowerCase();
    this._events || (this._events = {});
    var events = this._events[name] || (this._events[name] = []);
    events.push({
        callback: _callback
    });
    return this;
};

/**
 * 为DataTable对象取消监听
 * @memberof DataTable
 * @param  {string|array|object}   name     针对不同用法分别对应监听名称、监听名称对应的数组、监听名称及对应的回调组成的对象
 * @param  {function} [callback] 监听对应的回调函数
 * @return {DataTable}            当前的DataTable对象
 * @example
 * datatable.off(u.DataTable.ON_ROW_FOCUS, function() {}) // 普通
 * datatable.off([u.DataTable.ON_INSERT, u.DataTable.ON_DELETE], function() {}) // 数组
 * datatable.off({u.DataTable.ON_INSERT: function() {}, u.DataTable.ON_DELETE: function() {}}) // map
 */
var off$2 = function off(name, callback) {
    name = name.toLowerCase();
    if (!this._events) return this;
    if (Object.prototype.toString.call(name) == '[object Array]') {
        // 数组
        for (var i in name) {
            this.off(name[i], callback);
        }
        return this;
    } else if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) == 'object') {
        // map
        for (var key in name) {
            this.off(key, name[key]);
        }
        return this;
    }
    var cbs = this._events[name];
    if (!cbs) return this;
    if (!callback) {
        // 解绑所有事件
        cbs = null;
    } else {
        for (var i = cbs.length - 1; i >= 0; i--) {
            if (cbs[i] == callback) {
                cbs.splice(i, 1);
            }
        }
    }
    this._events[name] = cbs;
    return this;
};

/**
 * 为DataTable对象添加只执行一次的监听
 * @memberof DataTable
 * @param  {string|array|object}   name     针对不同用法分别对应监听名称、监听名称对应的数组、监听名称及对应的回调组成的对象
 * @param  {function} [callback] 监听对应的回调函数
 * @example
 * datatable.one(u.DataTable.ON_ROW_FOCUS, function() {}) // 普通
 * datatable.one([u.DataTable.ON_INSERT, u.DataTable.ON_DELETE], function() {}) // 数组
 * datatable.one({u.DataTable.ON_INSERT: function() {}, u.DataTable.ON_DELETE: function() {}}) // map
 */
var one = function one(name, callback) {
    this.on(name, callback, 1);
};

/**
 * 触发DataTable对象绑定的事件监听
 * @memberof DataTable
 * @param  {string} name 需要触发的事件监听对应的名称
 * @return {DataTable}            当前的DataTable对象
 * @example
 * datatable.trigger('valuechange')
 */
var trigger$2 = function trigger(name) {
    name = name.toLowerCase();
    if (!this._events || !this._events[name]) return this;
    var args = Array.prototype.slice.call(arguments, 1);
    var events = this._events[name];
    for (var i = 0, count = events.length; i < count; i++) {
        events[i].callback.apply(this, args);
    }
    return this;
};

// 带返回值的trigger，可以获取回调函数的返回值
var triggerReturn = function triggerReturn(name) {
    name = name.toLowerCase();
    if (!this._events || !this._events[name]) return this;
    var args = Array.prototype.slice.call(arguments, 1);
    var events = this._events[name];
    var flag = true;
    for (var i = 0, count = events.length; i < count; i++) {
        flag = flag && events[i].callback.apply(this, args);
    }
    return flag;
};

// 获取监听名称对应的回调函数
var getEvent = function getEvent(name) {
    name = name.toLowerCase();
    this._events || (this._events = {});
    return this._events[name];
};

var eventsFunObj = {
    on: on$2,
    off: off$2,
    one: one,
    trigger: trigger$2,
    triggerReturn: triggerReturn,
    getEvent: getEvent
};

/**
 * Module : Kero webpack entry dataTable index
 * Author : liuyk(liuyuekai@yonyou.com)
 * Date   : 2016-08-09 15:24:46
 */

/**
 * DataTable
 * @namespace
 * @description 前端数据模型对象
 */

var DataTable$1 = function DataTable(options) {
    classCallCheck(this, DataTable);

    options = options || {};
    /**
     * DataTable对应的唯一标识
     * @type {string}
     */
    this.id = options['id'];
    /**
     * 在设置数据时是否自动创建对应字段，如果为true则不自动创建，如果为false则自动创建缺失的字段
     * @type {boolean}
     * @default false
     */
    this.strict = options['strict'] || false;
    /**
     * DataTable的所有字段属性信息
     * @type {object}
     */
    this.meta = DataTable.createMetaItems(options['meta']);
    /**
     * DataTable的是否支持编辑功能
     * @type {boolean}
     * @default true
     */
    this.enable = options['enable'] || DataTable.DEFAULTS.enable;
    /**
     * DataTable支持翻页功能时每页显示数据条数
     * @type {number}
     * @default 20
     */
    this.pageSize = ko.observable(options['pageSize'] || DataTable.DEFAULTS.pageSize);
    /**
     * DataTable支持翻页功能时当前页码
     * @type {number}
     * @default 0
     */
    this.pageIndex = ko.observable(options['pageIndex'] || DataTable.DEFAULTS.pageIndex);
    /**
     * DataTable支持翻页功能时总页数
     * @type {number}
     * @default 0
     */
    this.totalPages = ko.observable(options['totalPages'] || DataTable.DEFAULTS.totalPages);
    // 存储所有行对象
    this.totalRow = ko.observable();
    /**
     * DataTable的是否支持前端缓存，支持前端缓存则前端会存储所有页的数据信息，否则只保存当前页的数据信息。如果使用前端缓存则需要使用框架封装的fire方法来与后台进行交互
     * @type {boolean}
     * @default false
     */
    this.pageCache = options['pageCache'] === undefined ? DataTable.DEFAULTS.pageCache : options['pageCache'];
    /**
     * DataTable删除数据时是否强制删除，如果设置为true则不再考虑数据的状态，执行删除时则删除此条数据。如果设置为false则需要考虑数据的状态，如果状态为new则删除此条数据否则将状态修改为fdel
     * @type {boolean}
     * @default false
     */
    this.forceDel = options['forceDel'] === undefined ? DataTable.DEFAULTS.forceDel : options['forceDel'];
    // 存储所有row对象
    this.rows = ko.observableArray([]);
    // 存储所有的选中行的index
    this.selectedIndices = ko.observableArray([]);
    // 原有的当前行，用于判断当前行是否发生变化
    this._oldCurrentIndex = -1;
    // 当前focus行
    this.focusIndex = ko.observable(-1);
    // 存储所有页对象
    this.cachedPages = [];
    // 存储meta改变信息
    this.metaChange = {};
    // 存储valuecahnge改变信息
    this.valueChange = {}; //ko.observable(1);
    // 监听当前行改变
    this.currentRowChange = ko.observable(1);
    // 监听是否可修改属性的改变
    this.enableChange = ko.observable(1);
    /**
     * 使用者自定义的属性合集，框架内部不会针对此属性进行特殊处理，仅用于设置及获取
     * @type {object}
     */
    this.params = options['params'] || {};
    /**
     * 使用者自定义的属性，框架内部不会针对此属性进行特殊处理，仅用于设置及获取。
     * @type {string}
     */
    this.master = options['master'] || '';
    // 监听是否全部选中
    this.allSelected = ko.observable(false);
    /**
     * 通过getSimpleData获取数据时，日期字段是否转化为long型，如果为true时不进行转化，为false时转化为long型
     * @type {boolean}
     * @default false
     */
    this.dateNoConvert = options['dateNoConvert'] || false;
    // 对于子表通过root字段存储根datatable对象
    if (options['root']) {
        this.root = options['root'];
    } else {
        this.root = this;
    }
    // 记录子表的路径
    if (options['ns']) {
        this.ns = options['ns'];
    } else {
        this.ns = '';
    }
    // 前端分页情况下记录前端新增的数据
    this.newCount = 0;
};

var DataTableProto = DataTable$1.prototype;
Object.assign(DataTableProto, copyRowFunObj);
Object.assign(DataTableProto, dataFunObj);
Object.assign(DataTableProto, enableFunObj);
Object.assign(DataTableProto, getCurrentFunObj);
Object.assign(DataTableProto, getDataFunObj);
Object.assign(DataTableProto, getFocusFunObj);
Object.assign(DataTableProto, getMetaFunObj);
Object.assign(DataTableProto, getPageFunObj);
Object.assign(DataTableProto, getParamFunObj);
Object.assign(DataTableProto, getSelectFunObj);
Object.assign(DataTableProto, getSimpleDataFunObj);
Object.assign(DataTableProto, pageFunObj);
Object.assign(DataTableProto, metaFunObj);
Object.assign(DataTableProto, refFunObj);
Object.assign(DataTableProto, paramFunObj);
Object.assign(DataTableProto, rowFunObj);
Object.assign(DataTableProto, removeRowFunObj);
Object.assign(DataTableProto, rowCurrentFunObj);
Object.assign(DataTableProto, simpleDataFunObj);
Object.assign(DataTableProto, rowFocusFunObj);
Object.assign(DataTableProto, eventsFunObj);
Object.assign(DataTableProto, utilFunObj);
Object.assign(DataTableProto, rowSelectFunObj);
Object.assign(DataTableProto, rowDeleteFunObj);

DataTable$1.DEFAULTS = {
    pageSize: 20,
    pageIndex: 0,
    totalPages: 0,
    pageCache: false,
    enable: true,
    forceDel: false
};

DataTable$1.META_DEFAULTS = {
    enable: true,
    required: false,
    descs: {}
};

//事件类型
DataTable$1.ON_ROW_SELECT = 'select';
DataTable$1.ON_ROW_UNSELECT = 'unSelect';
DataTable$1.ON_ROW_ALLSELECT = 'allSelect';
DataTable$1.ON_ROW_ALLUNSELECT = 'allUnselect';
DataTable$1.ON_VALUE_CHANGE = 'valueChange';
DataTable$1.ON_BEFORE_VALUE_CHANGE = 'beforeValueChange';
DataTable$1.ON_CURRENT_VALUE_CHANGE = 'currentValueChange'; //当前行变化
//  DataTable.ON_AFTER_VALUE_CHANGE = 'afterValueChange'
//  DataTable.ON_ADD_ROW = 'addRow'
DataTable$1.ON_INSERT = 'insert';
DataTable$1.ON_UPDATE = 'update';
DataTable$1.ON_CURRENT_UPDATE = 'currentUpdate';
DataTable$1.ON_DELETE = 'delete';
DataTable$1.ON_DELETE_ALL = 'deleteAll';
DataTable$1.ON_ROW_FOCUS = 'focus';
DataTable$1.ON_ROW_UNFOCUS = 'unFocus';
DataTable$1.ON_LOAD = 'load';
DataTable$1.ON_ENABLE_CHANGE = 'enableChange';
DataTable$1.ON_META_CHANGE = 'metaChange';
DataTable$1.ON_ROW_META_CHANGE = 'rowMetaChange';
DataTable$1.ON_CURRENT_META_CHANGE = 'currentMetaChange';
DataTable$1.ON_CURRENT_ROW_CHANGE = 'currentRowChange';

DataTable$1.SUBMIT = {
    current: 'current',
    focus: 'focus',
    all: 'all',
    select: 'select',
    change: 'change',
    empty: 'empty',
    allSelect: 'allSelect',
    allPages: 'allPages'
};

DataTable$1.createMetaItems = function (metas) {
    var newMetas = {};
    for (var key in metas) {
        var meta = metas[key];
        if (typeof meta == 'string') meta = {};
        newMetas[key] = extend({}, DataTable$1.META_DEFAULTS, meta);
    }
    return newMetas;
};

/**
 * Module : kero dataTable page data
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-08 09:59:01
 */

/**
 * 根据行序号设置字段值
 * @memberof Page
 * @param {number} rowIndex  行序号
 * @param {string} fieldName 字段名称
 * @param {string} value     字段值
 * @example
 * page.setRowValue(1,'field1','value1')
 */
var setRowValue = function setRowValue(rowIndex, fieldName, value) {
    var row = this.rows[rowIndex];
    if (row) {
        row.data[fieldName]['value'] = value;
        if (row.status != Row.STATUS.NEW) row.setStatus(Row.STATUS.UPDATE);
    }
};

// 通过row对象更新row对象，不建议次方法
var updateRow = function updateRow(originRow, newRow) {
    // originRow.status = originRow.status
    //this.rowId = data.rowId
    if (!newRow.data) return;
    for (var key in newRow.data) {
        if (originRow.data[key]) {
            var valueObj = newRow.data[key];
            if (typeof valueObj == 'string' || typeof valueObj == 'number' || valueObj === null) originRow.data[key]['value'] = valueObj;
            //this.setValue(key, this.formatValue(key, valueObj))
            else {
                    //					this.setValue(key, valueObj.value)

                    if (valueObj.error) {
                        if (u.showMessageDialog) u.showMessageDialog({
                            title: "警告",
                            msg: valueObj.error,
                            backdrop: true
                        });else alert(valueObj.error);
                    } else {
                        //this.setValue(key, this.formatValue(key, valueObj.value), null)
                        originRow.data[key]['value'] = valueObj.value;
                        for (var k in valueObj.meta) {
                            originRow.data[key]['meta'] = originRow.data[key]['meta'] || {};
                            originRow.data[key]['meta'][k] = valueObj.meta[k];
                        }
                    }
                }
        }
    }
};

var pageDataFunObj = {
    setRowValue: setRowValue,
    updateRow: updateRow
};

/**
 * Module : kero dataTable page getData
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-08 09:59:01
 */

/**
 * 获取Page的数据信息
 * @memberof Page
 * @return {array} 数据信息对应的数组，每项对应一条数据
 * @example
 * page.getData()
 */
var getData$1 = function getData() {
    var datas = [],
        row,
        meta;
    meta = this.parent.getMeta();
    for (var i = 0; i < this.rows.length; i++) {
        row = this.rows[i];
        datas.push({
            'id': row.rowId,
            'status': row.status,
            data: row.data
        });
    }
    return datas;
};

/**
 * 获取Page的选中行数据信息
 * @memberof Page
 * @return {array} 数据信息对应的数组，每项对应一条数据
 * @example
 * page.getSelectDatas()
 */
var getSelectDatas = function getSelectDatas() {
    var datas = [],
        row;
    for (var i = 0; i < this.rows.length; i++) {
        row = this.rows[i];
        datas.push({
            'id': row.rowId,
            'status': row.status,
            data: row.data
        });
    }
    for (var i = 0; i < this.selectedIndices.length; i++) {
        row = this.rows[this.selectedIndices[i]];
        datas.push({
            'id': row.rowId,
            'status': row.status,
            data: row.data
        });
    }
    return datas;
};

/**
 * 获取Page的选中Row对象
 * @memberof Page
 * @return {array} Row对象对应的数组，每项对应一条数据
 * @example
 * page.getSelectRows()
 */
var getSelectRows = function getSelectRows() {
    var rows = [];
    for (var i = 0; i < this.selectedIndices.length; i++) {
        rows.push(this.rows[this.selectedIndices[i]]);
    }
    return rows;
};

/**
 * 获取发生改变的Row对象
 * @memberof DataTable
 * @return {array} 发生改变的Row对象
 * @example
 * datatable.getChangedRows()
 */
var getChangedRows$1 = function getChangedRows() {
    var changedRows = [],
        rows = this.rows.peek();
    for (var i = 0, count = rows.length; i < count; i++) {
        if (rows[i] && rows[i].status != Row.STATUS.NORMAL) {
            changedRows.push(rows[i]);
        }
    }
    return changedRows;
};
/**
 * 根据rowid获取Row对象
 * @memberof Page
 * @param {string} rowid 需要获取的Row对应的rowid
 * @returns {Row} Row对象
 * @example
 * page.getRowByRowId('rowid')
 */
var getRowByRowId$1 = function getRowByRowId(rowid) {
    for (var i = 0, count = this.rows.length; i < count; i++) {
        if (this.rows[i].rowId == rowid) return this.rows[i];
    }
    return null;
};

/**
 * 根据行索引获取对应行的字段值
 * @memberof Page
 * @param {number} rowIndex 行索引
 * @param {string} fieldName 字段名
 * @returns {sting} 字段值
 * @example
 * page.getRowValue(1,'field1')
 */
var getRowValue = function getRowValue(rowIndex, fieldName) {
    var row = this.rows[rowIndex];
    if (row) {
        return row.data[fieldName]['value'];
    }
    return null;
};

var pageGetDataFunObj = {
    getData: getData$1,
    getSelectDatas: getSelectDatas,
    getSelectRows: getSelectRows,
    getChangedRows: getChangedRows$1,
    getRowByRowId: getRowByRowId$1,
    getRowValue: getRowValue
};

/**
 * Module : kero dataTable page getMeta
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-08 09:59:01
 */

/**
 * 获取指定行的meta信息
 * @param  {number} rowIndex  行索引
 * @param  {string} fieldName 需要获取的字段
 * @param  {string} key       需要获取的字段指定meta信息
 * @return {object}           meta信息
 * @example
 * page.getRowMeta(1,'field1','type')
 */
var getRowMeta$1 = function getRowMeta(rowIndex, fieldName, metaName) {
    var row = this.rows[rowIndex];
    if (row) {
        var meta = row[fieldName].meta;
        if (!meta) return null;else return meta[metaName];
    }
    return null;
};

var rowGetMetaFunObj = {
    getRowMeta: getRowMeta$1
};

/**
 * Module : kero dataTable page meta
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-08 09:59:01
 */

/**
 * 设置指定行的meta信息
 * @param  {number} rowIndex  行索引
 * @param  {string} fieldName 字段名
 * @param  {string} metaName       meta名称
 * @param  {string} value meta值
 * @return {object}           meta信息
 * @example
 * page.setRowMeta(1,'field1','type','string')
 */
var setRowMeta = function setRowMeta(rowIndex, fieldName, metaName, value) {
    var row = this.rows[rowIndex];
    if (row) {
        var meta = row[fieldName].meta;
        if (!meta) meta = row[fieldName].meta = {};
        meta[metaName] = value;
        if (row.status != Row.STATUS.NEW) row.setStatus(Row.STATUS.UPDATE);
    }
};

var pageMetaFunObj = {
    setRowMeta: setRowMeta
};

/**
 * Module : kero dataTable page removeRow
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-08 09:59:01
 */

/**
 * 根据rowid删除行
 * @param  {string} rowid 需要删除行的rowid
 * @example
 * page.removeRowByRowId('rowid1')
 */
var removeRowByRowId$1 = function removeRowByRowId(rowid) {
    for (var i = 0, count = this.rows.length; i < count; i++) {
        if (this.rows[i].rowId == rowid) {
            this.rows.splice(i, 1);
            count--;
            this.updateSelectedIndices(i, '-');
            this.updateFocusIndex(i, '-');
        }
    }
};

// 新增/删除行之后更新选中行的index
var updateSelectedIndices$1 = function updateSelectedIndices(index, type, num) {
    if (!isNumber$1(num)) {
        num = 1;
    }
    var selectedIndices = this.selectedIndices.slice();
    if (selectedIndices == null || selectedIndices.length == 0) return;
    for (var i = 0, count = selectedIndices.length; i < count; i++) {
        if (type == '+') {
            if (selectedIndices[i] >= index) selectedIndices[i] = parseInt(selectedIndices[i]) + num;
        } else if (type == '-') {
            if (selectedIndices[i] >= index && selectedIndices[i] <= index + num - 1) {
                selectedIndices.splice(i, 1);
            } else if (selectedIndices[i] > index + num - 1) selectedIndices[i] = selectedIndices[i] - num;
        }
    }
    this.selectedIndices = selectedIndices;
};

//新增/删除行之后更新焦点行
var updateFocusIndex$1 = function updateFocusIndex(opIndex, opType, num) {
    if (!isNumber$1(num)) {
        num = 1;
    }
    if (opIndex <= this.focus && this.focus != -1) {
        if (opType === '+') {
            this.focus = this.focus + num;
        } else if (opType === '-') {
            if (this.focus >= opIndex && this.focus <= opIndex + num - 1) {
                this.focus = this.focus - 1;
            } else if (this.focus > opIndex + num - 1) {
                this.focus = this.focus - num;
            }
        }
    }
};

var pageRemoveRowFunObj = {
    removeRowByRowId: removeRowByRowId$1,
    updateSelectedIndices: updateSelectedIndices$1,
    updateFocusIndex: updateFocusIndex$1
};

/**
 * Module : Kero webpack entry Page index
 * Author : liuyk(liuyuekai@yonyou.com)
 * Date	  : 2016-08-09 15:24:46
 */

/**
 * Page
 * @namespace
 * @description 分页对象
 */

var Page$1 = function Page(options) {
  classCallCheck(this, Page);

  // 当前焦点行
  this.focus = options['focus'] || null;
  // 选中行
  this.selectedIndices = options['selectedIndices'] || null;
  // 所有数据行
  this.rows = options['rows'] || [];
  // DataTable对象
  this.parent = options['parent'] || null;
};

var PageProto = Page$1.prototype;
Object.assign(PageProto, pageDataFunObj);
Object.assign(PageProto, pageGetDataFunObj);
Object.assign(PageProto, rowGetMetaFunObj);
Object.assign(PageProto, pageMetaFunObj);
Object.assign(PageProto, pageRemoveRowFunObj);

/**
 * Module : Kero webpack entry events index
 * Author : liuyk(liuyuekai@yonyou.com)
 * Date   : 2016-08-09 15:24:46
 */

//相关依赖导入
var Events = function Events() {
    classCallCheck(this, Events);
};

var EventsProto = Events.prototype;
Object.assign(EventsProto, eventsFunObj);

/**
 * Module : kero dataTable row util
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-08 13:54:01
 */
var eq = function eq(a, b) {
    if ((a === null || a === undefined || a === '') && (b === null || b === undefined || b === '')) return true;
    //判断输入的值是否相等，a,b是字符串直接比较这两个值即可，没必要判断是否是数据，判断是否是数据使用parseFloat转换有时精度不准（431027199110.078573）
    //if (isNumber(a) && isNumber(b) && parseFloat(a) == parseFloat(b)) return true;
    if (a + '' === b + '' || a === b) return true;
    if (isNumber$1(a) && isNumber$1(b) && parseFloat(a) - parseFloat(b) < 0.0000005 && parseFloat(a) - parseFloat(b) > -0.0000005) return true;
    return false;
};

// 格式化时间
var _formatDate = function _formatDate(value) {
    if (!value) return value;
    var date = new Date();
    date.setTime(value);
    //如果不能转为Date 直接返回原值
    if (isNaN(date)) {
        return value;
    }
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    if (parseInt(month) < 10) month = "0" + month;
    var day = date.getDate();
    if (parseInt(day) < 10) day = "0" + day;
    var hours = date.getHours();
    if (parseInt(hours) < 10) hours = "0" + hours;
    var minutes = date.getMinutes();
    if (parseInt(minutes) < 10) minutes = "0" + minutes;
    var seconds = date.getSeconds();
    if (parseInt(seconds) < 10) seconds = "0" + seconds;
    var mill = date.getMilliseconds();
    var formatString = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds; //+ "." + mill;
    return formatString;
};

// 格式化日期为UTCString
var _dateToUTCString = function _dateToUTCString(date) {
    if (!date && date != 0) return '';
    if (typeof date === 'number') return date;
    if (date.indexOf("-") > -1) date = date.replace(/\-/g, "/");
    var utcString = Date.parse(date);
    if (isNaN(utcString)) return "";
    return utcString;
};

// 触发数值改变事件
var _triggerChange = function _triggerChange(rowObj, fieldName, oldValue, ctx) {
    _getField(rowObj, fieldName).changed = true;
    if (rowObj.status != Row.STATUS.NEW) rowObj.setStatus(Row.STATUS.UPDATE);
    if (rowObj.valueChange[fieldName]) rowObj.valueChange[fieldName](-rowObj.valueChange[fieldName]());
    if (rowObj.parent.getCurrentRow() == rowObj && rowObj.parent.valueChange[fieldName]) {
        rowObj.parent.valueChange[fieldName](-rowObj.parent.valueChange[fieldName]());
    }
    if (rowObj.parent.ns) {
        var fName = rowObj.parent.ns + '.' + fieldName;
        if (rowObj.parent.root.valueChange[fName]) rowObj.parent.root.valueChange[fName](-rowObj.parent.root.valueChange[fName]());
    }

    var event = {
        eventType: 'dataTableEvent',
        dataTable: rowObj.parent.id,
        rowId: rowObj.rowId,
        field: fieldName,
        oldValue: oldValue,
        newValue: rowObj.getValue(fieldName),
        ctx: ctx || "",
        rowObj: rowObj
    };
    rowObj.parent.trigger(DataTable.ON_VALUE_CHANGE, event);
    rowObj.parent.trigger(fieldName + "." + DataTable.ON_VALUE_CHANGE, event);
    if (rowObj == rowObj.parent.getCurrentRow()) rowObj.parent.trigger(fieldName + "." + DataTable.ON_CURRENT_VALUE_CHANGE, event);

    // 对于多级字表需要触发顶层div的valuechange事件
    if (rowObj.parent.ns) {
        event.fullField = fName;
        event.ns = rowObj.parent.ns;
        rowObj.parent.root.trigger(DataTable.ON_VALUE_CHANGE, event);
        rowObj.parent.root.trigger(fName + "." + DataTable.ON_VALUE_CHANGE, event);
    }
};

/***
 * 格式化数据值
 * @private
 * @param {Object} field
 * @param {Object} value
 */
var formatValue = function formatValue(field, value) {
    var type = this.parent.getMeta(field, 'type');
    if (!type) return value;
    if (type == 'date' || type == 'datetime') {
        return _formatDate(value);
    }
    return value;
};

// 查找字段
var _findField = function _findField(rowObj, fieldName) {
    var rat = rowObj.data[fieldName];
    if (!rat) {
        var fnames = fieldName.split('.'); //多级field
        if (fnames.length > 1) {
            var tempField = rowObj.data;
            for (var i = 0; i < fnames.length; i++) {
                tempField = tempField[fnames[i]];
                if (tempField.value instanceof DataTable) {
                    var row = tempField.value.getCurrentRow();
                    if (!row) {
                        row = tempField.value.rows()[0];
                    }
                    if (row) tempField = row.data;
                }
                if (!tempField) {
                    break;
                }
            }
            rat = tempField;
        }
    }
    return rat || null;
};

var _getField = function _getField(rowObj, fieldName) {
    var rat = _findField(rowObj, fieldName);
    if (!rat) {
        var msg = 'field:' + fieldName + ' not exist in dataTable:' + rowObj.parent.root.id + '!';
        throw new Error(msg);
    }
    return rat;
};

var rowUtilFunObj = {
    formatValue: formatValue,
    eq: eq,
    _triggerChange: _triggerChange,
    _getField: _getField,
    _dateToUTCString: _dateToUTCString
};

/**
 * Module : kero dataTable row getData
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-08 13:54:01
 */
/**
 * 设置对应字段的值
 * @memberof Row
 * @param {string} fieldName 需要设置的字段
 * @param {string} value     需要设置的值
 * @param {*} [ctx]        自定义属性，在valuechange监听传入对象中可通过ctx获取此处设置
 * @example
 * row.setValue('filed1','value1') // 设置字段值
 * row.setValue('filed1','value1','ctx') //设置字段值，同时传入自定义数据
 */
var setValue$1 = function setValue(fieldName, value, ctx, options) {

    if (arguments.length === 1) {
        value = fieldName;
        fieldName = '$data';
    }
    var oldValue = this.getValue(fieldName);
    if (typeof oldValue == 'undefined' || oldValue === null) oldValue = '';
    if (rowUtilFunObj.eq(oldValue, value)) return;
    var event = {
        eventType: 'dataTableEvent',
        dataTable: this.parent.id,
        rowId: this.rowId,
        field: fieldName,
        oldValue: oldValue,
        newValue: value,
        ctx: ctx || ""
    };
    var flag = this.parent.triggerReturn(DataTable.ON_BEFORE_VALUE_CHANGE, event);
    if (!flag) {
        rowUtilFunObj._triggerChange(this, fieldName, oldValue, ctx);
        return;
    }
    rowUtilFunObj._getField(this, fieldName)['value'] = value;
    rowUtilFunObj._triggerChange(this, fieldName, oldValue, ctx);
};

// 设置字表值，fieldName通过.分隔
var setChildValue = function setChildValue(fieldName, value) {
    var nameArr = fieldName.split('.');
    var _name = nameArr[0];
    var _field = this.data[_name]; //_field保存当前_name对应的数据
    for (var i = 0, count = nameArr.length; i < count; i++) {
        //最后一级
        if (i == count - 1) {
            if (_field['value'] instanceof u.DataTable) {
                //暂不处理
            } else {
                this.setValue(fieldName, value);
            }
        } else {
            if (_field && _field['value'] instanceof u.DataTable) {
                var row = _field['value'].getCurrentRow();
                if (row) row.setChildValue(fieldName.replace(_name + '.', ''), value);
            } else {
                _name = nameArr[i + 1];
                _field = _field[_name]; //多层嵌套时_field取子项对应的数据
            }
        }
    }
};

// 通过rowid设置字表数据信息
var setChildSimpleDataByRowId = function setChildSimpleDataByRowId(rowId, data) {
    var rowIdArr = rowId.split('.');
    var rowIdLength = rowIdArr.length;
    if (rowIdLength > 1) {
        var _childField = rowIdArr[0]; //子表字段
        var _childObj = this.data[_childField]; // 子表字段存放的obj
        if (_childObj && _childObj['value'] instanceof u.DataTable) {
            var rowId = rowIdArr[1];
            var row = null;
            if (rowId) row = _childObj['value'].getRowByRowId(rowId);
            if (row) {
                if (rowIdArr.length == 2) {
                    row.setSimpleData(data);
                } else {
                    row.setChildSimpleDataByRowId(fieldName.replace(_childField + '.' + rowId + '.', ''), data);
                }
            }
        }
    }
};

/***
 * 设置数据的核心方法
 * @param {u.Row} rowObj     Row对象
 * @param {object} sourceData 源对象
 * @param {object} targetData 目标对象
 * @param {boolean} subscribe  是否触发监听，true表示触发监听
 * @param {string} parentKey  datatable的id
 * @param {object} options    设置数据信息是的配置参数
 * @param {boolean} options.fieldFlag   未设置的meta是否进行存储，如果为true则未设置的meta也进行存储
 */
var _setData = function _setData(rowObj, sourceData, targetData, subscribe, parentKey, options) {
    for (var key in sourceData) {

        // 判断是否要放到dataTable中
        if (options && !options.fieldFlag) {
            if (!rowObj.parent.getMeta(key)) {
                continue;
            }
        }
        var _parentKey = parentKey || null;
        //if (targetData[key]) {
        targetData[key] = targetData[key] || {};
        var valueObj = sourceData[key];

        // if (typeof valueObj != 'object'){
        //     if(typeof options == 'object'){
        //         if(options.fieldFlag) {
        //             rowObj.parent.createField(key);
        //         }
        //     }
        // }

        //if (typeof this.parent.meta[key] === 'undefined') continue;
        if (valueObj == null || (typeof valueObj === 'undefined' ? 'undefined' : _typeof(valueObj)) != 'object') {
            // 子表的话只有valueObj为datatable的时候才赋值
            if (!targetData[key].isChild) {
                targetData[key]['value'] = rowObj.formatValue(key, valueObj);
            }
            if (subscribe === true && oldValue !== targetData[key]['value']) {
                rowUtilFunObj._triggerChange(rowObj, key, oldValue);
            }
        } else {
            if (valueObj.error) {
                if (u.showMessageDialog) u.showMessageDialog({
                    title: "警告",
                    msg: valueObj.error,
                    backdrop: true
                });else alert(valueObj.error);
            } else if (valueObj.value || valueObj.value === null || valueObj.meta || valueObj.value === '' || valueObj.value === '0' || valueObj.value === 0) {
                var oldValue = targetData[key]['value'];
                targetData[key]['value'] = rowObj.formatValue(key, valueObj.value);
                if (subscribe === true && oldValue !== targetData[key]['value']) {
                    rowUtilFunObj._triggerChange(rowObj, key, oldValue);
                }
                for (var k in valueObj.meta) {
                    rowObj.setMeta(key, k, valueObj.meta[k]);
                }
            } else if (isArray(valueObj)) {
                targetData[key].isChild = true;
                //ns 是多级数据时的空间名： 最顶层的dataTable没有ns。  f1.f2.f3
                var _key = _parentKey == null ? key : _parentKey + '.' + key;
                var ns = rowObj.parent.ns === '' ? key : rowObj.parent.ns + '.' + _key;
                if (rowObj.parent.meta[_key]) {
                    var meta = rowObj.parent.meta[_key]['meta'];
                    targetData[key].value = new u.DataTable({
                        root: rowObj.parent.root,
                        ns: ns,
                        meta: meta
                    });
                    targetData[key].value.setSimpleData(valueObj);
                }
            } else {
                _parentKey = _parentKey == null ? key : _parentKey + '.' + key;
                _setData(rowObj, valueObj, targetData[key], null, _parentKey, options);
            }
        }
        //}
    }
};

/**
 * 设置row的数据信息
 * @memberof Row
 * @param {object} data      需要设置的配置信息
 * @param {boolean} [subscribe] 是否触发监听，true表示触发监听
 * @param {object} [options]   设置数据信息是的配置参数
 * @param {boolean} [options.fieldFlag]   未设置的meta是否进行存储，如果为true则未设置的meta也进行存储
 * @example
 * var data = {
 *    data:{
 *      filed1:'value1',
 *      field2:'value2'
 *    }
 * }
 * row.setData(data)
 * row.setData(data,false)
 * row.setData(data),false,{fieldFlag:true})
 */
var setData$1 = function setData(data, subscribe, options) {
    var sourceData = data.data,
        targetData = this.data;
    if (this.parent.root.strict != true) {
        _setData(this, sourceData, targetData, subscribe, null, options);
        this.setStatus(data.status);
        return;
    }

    // strict 为true 时 ，定义dataTable的时候必须定义所有字段信息才能设置数据。
    var meta = this.parent.meta;
    for (var key in meta) {
        var oldValue = newValue = null;
        //子数据
        if (meta[key]['type'] && meta[key]['type'] === 'child') {
            targetData[key].isChild = true;
            //ns 是多级数据时的空间名： 最顶层的dataTable没有ns。  f1.f2.f3
            var ns = this.parent.ns === '' ? key : this.parent.ns + '.' + key;
            var meta = this.parent.meta[key]['meta'];
            targetData[key].value = new u.DataTable({
                root: this.parent.root,
                ns: ns,
                meta: meta
            });
            if (_typeof(sourceData[key]) === 'object') targetData[key].value.setSimpleData(sourceData[key]);
        }
        //存在多级关系
        else if (key.indexOf('.') != -1) {
                var keys = key.split('.');
                var _fieldValue = sourceData;
                var _targetField = targetData;
                for (var i = 0; i < keys.length; i++) {
                    _fieldValue = _fieldValue || {};
                    _fieldValue = _fieldValue[keys[i]];
                    _targetField = _targetField[keys[i]];
                }
                oldValue = _targetField['value'];
                _targetField['value'] = this.formatValue(key, _fieldValue);
                newValue = _targetField['value'];
            }
            // 通过 setSimpleData 设置的数据
            else if (sourceData[key] == null || _typeof(sourceData[key]) != 'object') {
                    oldValue = targetData[key]['value'];
                    targetData[key]['value'] = this.formatValue(key, sourceData[key]);
                    newValue = targetData[key]['value'];
                } else {
                    var valueObj = sourceData[key];
                    if (valueObj.error) {
                        if (u.showMessageDialog) u.showMessageDialog({
                            title: "警告",
                            msg: valueObj.error,
                            backdrop: true
                        });else alert(valueObj.error);
                    } else if (valueObj.value || valueObj.value === null || valueObj.meta) {
                        oldValue = targetData[key]['value'];
                        targetData[key]['value'] = this.formatValue(key, valueObj.value);
                        newValue = targetData[key]['value'];
                        for (var k in valueObj.meta) {
                            this.setMeta(key, k, valueObj.meta[k]);
                        }
                    }
                }
        if (subscribe === true && oldValue !== newValue) {
            rowUtilFunObj._triggerChange(this, key, oldValue);
        }
    }
};

// 效果同setData
var updateRow$1 = function updateRow(row) {
    this.setData(row);
};

/**
 * 设置row的status属性
 * @memberof Row
 * @param {string} status      需要设置的status
 * @example
 * row.setStatus(Row.STATUS.NORMAL)
 */
var setStatus = function setStatus(status) {
    this.status = status;
    if (status == Row.STATUS.NORMAL) {
        // 保存baseValue，用于重置
        var data = this.data;
        for (var field in data) {
            var value = data[field].value;
            data[field].baseValue = value;
        }
    }
};

/**
 * 重置数据至nrm状态时的数据
 * @example
 * row.resetValue()
 */
var resetValue = function resetValue() {
    var data = this.data;
    for (var field in data) {
        var value = data[field].baseValue;
        this.setValue(field, value);
    }
};

var rowDataFunObj = {
    setValue: setValue$1,
    setChildValue: setChildValue,
    setChildSimpleDataByRowId: setChildSimpleDataByRowId,
    setData: setData$1,
    updateRow: updateRow$1,
    setStatus: setStatus,
    resetValue: resetValue
};

/**
 * Module : kero dataTable row getData
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-08 13:54:01
 */
/**
 * 获取row中某一字段的值
 * @memberof Row
 * @param  {string} fieldName 字段名
 * @return {string}           字段值
 * @example
 * row.getValue('field1')
 */
var getValue$1 = function getValue(fieldName) {
    return rowUtilFunObj._getField(this, fieldName)['value'];
};

//获取子表值 ，如果fieldName对应了一个子表，返回该子表的行数组
var getChildValue = function getChildValue(fieldName) {
    var nameArr = fieldName.split('.');
    var _name = nameArr[0];
    for (var i = 0, count = nameArr.length; i < count; i++) {
        var _value = this.getValue(_name);
        //最后一级
        if (i == count - 1) {
            if (_value instanceof u.DataTable) {
                return _value.rows.peek();
            } else {
                return _value;
            }
        } else {
            if (_value instanceof u.DataTable) {
                _value = _value.getCurrentRow();
                if (!_value) return '';else return _value.getChildValue(fieldName.replace(_name + '.', ''));
            } else {
                _name = _name + '.' + nameArr[i + 1];
            }
        }
    }
    return '';
};

/**
 * 获取数据信息
 * @memberof Row
 * @return {object} 格式如下：{'id': this.rowId, 'status': this.status, data: data}
 * @example
 * row.getData()
 */
var getData$2 = function getData() {
    var data = ko.toJS(this.data);
    var meta = this.parent.getMeta();
    for (var key in meta) {
        if (meta[key] && meta[key].type) {
            if (meta[key].type == 'date' || meta[key].type == 'datetime') {
                if (key.indexOf('.') > 0) {
                    //大于0说明是多级json
                    var keys = key.split('.');
                    var _keyValue = data;
                    for (var i = 0, count = keys.length; i < count; i++) {
                        _keyValue = _keyValue[keys[i]];
                    }
                    _keyValue.value = rowUtilFunObj._dateToUTCString(_keyValue.value);
                } else {
                    data[key].value = rowUtilFunObj._dateToUTCString(data[key].value);
                }
            } else if (meta[key].type == 'child') {
                var chiddt = this.getValue(key),
                    rs = chiddt.rows(),
                    cds = [];
                for (var i = 0; i < rs.length; i++) {
                    cds.push(rs[i].getData());
                }
                data[key].value = JSON.stringify(cds);
            }
        }
    }
    return {
        'id': this.rowId,
        'status': this.status,
        data: data
    };
};

// 获取空数据
var getEmptyData = function getEmptyData() {
    return {
        'id': this.rowId,
        'status': this.status,
        data: {}
    };
};

var rowGetDataFunObj = {
    getValue: getValue$1,
    getChildValue: getChildValue,
    getData: getData$2,
    getEmptyData: getEmptyData
};

/**
 * Module : kero dataTable row getMeta
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-08 13:54:01
 */

/**
 * 获取字段的属性
 * @memberof Row
 * @param  {string} fieldName   字段名
 * @param  {string} key         属性名
 * @param  {boolean} [fetchParent=false] 未定义时是否去DataTable对象查找，为true则未定义时去DataTable对象查找
 * @return {string}             属性值
 * @example
 * row.getMeta('field1','type')
 * row.getMeta('field1','type',true)
 */
var getMeta$1 = function getMeta(fieldName, key, fetchParent) {
    if (arguments.length == 0) {
        var mt = {};
        for (var k in this.data) {
            mt[k] = this.data[k].meta ? this.data[k].meta : {};
        }
        return mt;
    }
    var meta = rowUtilFunObj._getField(this, fieldName).meta;
    if (meta && meta[key] !== undefined && meta[key] !== null && meta[key] !== '') return meta[key];else if (typeof fetchParent == 'undefined' || fetchParent != false) return this.parent.getMeta(fieldName, key);
    return undefined;
};

var rowGetMetaFunObj$1 = {
    getMeta: getMeta$1
};

/**
 * Module : kero dataTable row getSimpleData
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-08 13:54:01
 */
// 获取数据的核心方法
var _getSimpleData = function _getSimpleData(rowObj, data) {
    var _data = {};
    var meta = rowObj.parent.getMeta() || {};
    for (var key in data) {
        if (key === 'meta' || isEmptyObject(data[key])) {
            continue;
        } else if (data[key].isChild) {
            _data[key] = data[key].value ? data[key].value.getSimpleData() : {};
        } else if (key === '$data') {
            //处理一维数组： [1,2,3]
            _data = data[key].value;
        } else if (typeof data[key].value !== 'undefined') {
            //如果类型为boolean，无论值为false、true都应该等于他本身
            if (meta[key] && meta[key].type === 'boolean') {
                _data[key] = data[key].value ? true : false; //默认值可能是null
            } else {
                _data[key] = data[key].value;
            }
            if (meta[key] && meta[key].type) {
                var obj = {
                    meta: meta,
                    data: data,
                    key: key
                };
                _data[key] = rowObj.formatValueFun(obj, rowObj.parent.dateNoConvert);
            }
        } else if (!data[key].value) {
            _data[key] = data[key].value;
        } else {
            _data[key] = _getSimpleData(rowObj, data[key]);
        }
    }
    return _data;
};

// 对于日期获取值时进行转换
var formatValueFun = function formatValueFun(obj, isDateNoConvert) {
    var meta = obj.meta,
        data = obj.data,
        key = obj.key;
    if (!isDateNoConvert && (meta[key].type == 'date' || meta[key].type == 'datetime')) {
        return rowUtilFunObj._dateToUTCString(data[key].value);
    }
    return data[key].value;
};

/**
 * 获取数据信息
 * @memberof Row
 * @param  {object} [options] 获取数据信息时的配置参数
 * @param  {array} [options.fields] 获取数据信息时是否制定字段值
 * @return {object}         数据信息
 * @example
 * row.getSimpleData()
 * row.getSimpleData({fields:['field1','field2']})
 */
var getSimpleData$1 = function getSimpleData(options) {
    options = options || {};
    var fields = options['fields'] || null;
    var meta = this.parent.getMeta();
    var data = this.data;
    var _data = _getSimpleData(this, data); //{};
    var _fieldsData = {};
    if (fields) {
        for (var key in _data) {
            if (fields.indexOf(key) != -1) {
                _fieldsData[key] = _data[key];
            }
        }
        return _fieldsData;
    }
    return _data;
};

var rowGetSimpleDataFunObj = {
    formatValueFun: formatValueFun,
    getSimpleData: getSimpleData$1
};

/***
 * Module : kero dataTable row init
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-08 13:54:01
 */

// row的初始化方法
var init$1 = function init() {
    var meta = this.parent.meta;

    for (var key in meta) {
        var targetData;
        if (key.indexOf('.') > 0) {
            var keys = key.split('.');
            targetData = this.data[keys[0]] = this.data[keys[0]] || {};
            for (var i = 1; i < keys.length; i++) {
                targetData[keys[i]] = targetData[keys[i]] || {};
                targetData = targetData[keys[i]];
            }
        } else {
            this.data[key] = this.data[key] || {};
            targetData = this.data[key];
        }
        targetData.value = null;
        //this.data[key] = {}
        //处理子表
        if (meta[key]['type'] && meta[key]['type'] === 'child') {
            targetData.isChild = true;
            //ns 是多级数据时的空间名： 最顶层的dataTable没有ns。  f1.f2.f3
            var ns = this.parent.ns === '' ? key : this.parent.ns + '.' + key;
            targetData.value = new u.DataTable({
                root: this.parent.root,
                ns: ns,
                meta: meta[key]['meta']
            });
        }
        //添加默认值
        else if (meta[key]['default']) {
                var defaults$$1 = meta[key]['default'];
                if ((typeof defaults$$1 === 'undefined' ? 'undefined' : _typeof(defaults$$1)) === 'object') {
                    for (var k in defaults$$1) {
                        if (k == 'value') {
                            if (typeof defaults$$1[k] === 'function') targetData.value = this.formatValue(key, defaults$$1[k]());else targetData.value = this.formatValue(key, defaults$$1[k]);
                        } else {
                            targetData.meta = targetData.meta || {};
                            targetData.meta[k] = defaults$$1[k];
                        }
                    }
                } else {
                    if (typeof defaults$$1 === 'function') targetData.value = this.formatValue(key, defaults$$1());else targetData.value = this.formatValue(key, defaults$$1);
                }
            }
    }
};

var rowInitFunObj = {
    init: init$1
};

/**
 * Module : kero dataTable row meta
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-08 13:54:01
 */
/**
 * 设置meta信息
 * @memberof Row
 * @param {string} fieldName 需要设置meta信息的字段名
 * @param {string} key       meta信息的key
 * @param {string} value     meta信息的值
 * @example
 * row.setMeta('filed1','type','string')
 */
var setMeta$1 = function setMeta(fieldName, key, value) {
    var meta = rowUtilFunObj._getField(this, fieldName).meta;
    if (!meta) meta = rowUtilFunObj._getField(this, fieldName).meta = {};
    var oldValue = meta[key];
    if (rowUtilFunObj.eq(oldValue, value)) return;
    meta[key] = value;
    //this.metaChange(- this.metaChange())
    if (this.metaChange[fieldName + '.' + key]) {
        this.metaChange[fieldName + '.' + key](-this.metaChange[fieldName + '.' + key]());
    }

    if (key == 'enable') this.parent.enableChange(-this.parent.enableChange());
    if (this.parent.getCurrentRow() == this) {
        if (this.parent.metaChange[fieldName + '.' + key]) this.parent.metaChange[fieldName + '.' + key](-this.parent.metaChange[fieldName + '.' + key]());
        this.parent.trigger(fieldName + '.' + key + '.' + DataTable.ON_CURRENT_META_CHANGE, {
            eventType: 'dataTableEvent',
            dataTable: this.parent.id,
            oldValue: oldValue,
            newValue: value
        });
        //this.parent.metaChange(- this.parent.metaChange())
    }
    this.parent.trigger(DataTable.ON_ROW_META_CHANGE, {
        eventType: 'dataTableEvent',
        dataTable: this.parent.id,
        field: fieldName,
        meta: key,
        oldValue: oldValue,
        newValue: value,
        row: this
    });

    this.parent.trigger(fieldName + '.' + key + '.' + DataTable.ON_ROW_META_CHANGE, {
        eventType: 'dataTableEvent',
        dataTable: this.parent.id,
        field: fieldName,
        meta: key,
        oldValue: oldValue,
        newValue: value,
        row: this
    });
};

var rowMetaFunObj = {
    setMeta: setMeta$1
};

/**
 * Module : kero dataTable row ref
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-08 13:54:01
 */
/**
 * 为某个字段绑定监听，当字段发生改变时触发对应方法
 * @memberof Row
 * @param {string} fieldName 绑定的字段名
 * @example
 * row.ref('field1').subscribe(function(){})
 */
var ref$1 = function ref(fieldName) {
    this.parent.createField(fieldName);
    if (!this.valueChange[fieldName]) this.valueChange[fieldName] = ko.observable(1);
    return ko.pureComputed({
        read: function read() {
            this.valueChange[fieldName]();
            this.currentRowChange();
            return this.getChildValue(fieldName);
            //var value = this._getField(fieldName)['value'];
            //return value;
        },
        write: function write(value) {
            this.setChildValue(fieldName, value);
            //this.setValue(fieldName, value)
        },
        owner: this
    });
};

/**
 * 绑定字段属性，当字段属性发生改变时触发对应方法
 * @memberof Row
 * @param {string} fieldName 绑定的字段名
 * @param {string} key 绑定的属性key
 * @example
 * row.refMeta('field1','type').subscribe(function(){})
 */
var refMeta$1 = function refMeta(fieldName, key) {
    if (!this.metaChange[fieldName + '.' + key]) this.metaChange[fieldName + '.' + key] = ko.observable(1);
    return ko.pureComputed({
        read: function read() {
            this.metaChange[fieldName + '.' + key]();
            return this.getMeta(fieldName, key);
        },
        write: function write(value) {
            this.setMeta(fieldName, key, value);
        },
        owner: this
    });
};

/**
 * 为某个字段绑定监听，当字段发生改变时触发对应方法，针对下拉字段根据key转化为对应的value
 * @memberof Row
 * @param {string} fieldName 绑定的字段名
 * @param {string} datasource 下拉数据源变量名
 * @example
 * row.refCombo('field1','source1').subscribe(function(){})
 */
var refCombo = function refCombo(fieldName, datasource) {
    if (!this.valueChange[fieldName]) this.valueChange[fieldName] = ko.observable(1);
    return ko.pureComputed({
        read: function read() {
            this.valueChange[fieldName]();
            this.currentRowChange();
            var ds = getJSObject(this.parent.parent, datasource);
            if (rowUtilFunObj._getField(this, fieldName)['value'] === undefined || rowUtilFunObj._getField(this, fieldName)['value'] === "") return "";
            var v = rowUtilFunObj._getField(this, fieldName)['value'];
            var valArr = typeof v === 'string' ? v.split(',') : [v];

            var nameArr = [];

            for (var i = 0, length = ds.length; i < length; i++) {
                for (var j = 0; j < valArr.length; j++) {
                    var value = ds[i]['pk'] || ds[i]['value'] || '';
                    if (value == valArr[j]) {
                        nameArr.push(ds[i].name);
                    }
                }
            }

            return nameArr.toString();
        },
        write: function write(value) {

            this.setValue(fieldName, value);
        },
        owner: this
    });
};

/**
 * 为某个字段绑定监听，当字段发生改变时触发对应方法，针对日期字段进行格式化
 * @memberof Row
 * @param {string} fieldName 绑定的字段名
 * @param {string} format 格式化规则
 * @example
 * row.refDate('field1','YYYY-MM-DD').subscribe(function(){})
 */
var refDate = function refDate(fieldName, format) {
    if (!this.valueChange[fieldName]) this.valueChange[fieldName] = ko.observable(1);
    return ko.pureComputed({
        read: function read() {
            this.valueChange[fieldName]();
            this.currentRowChange();
            if (!rowUtilFunObj._getField(this, fieldName)['value']) return "";
            var valArr = rowUtilFunObj._getField(this, fieldName)['value'];
            if (!valArr) return "";
            valArr = date.format(valArr, format); //moment(valArr).format(format)
            return valArr;
        },
        write: function write(value) {

            this.setValue(fieldName, value);
        },
        owner: this
    });
};

// 针对boolean类型进行转化，项目个性化代码，刘云燕提交
var refEnum = function refEnum(fieldName) {
    this.parent.createField(fieldName);
    if (!this.valueChange[fieldName]) this.valueChange[fieldName] = ko.observable(1);
    return ko.pureComputed({
        read: function read() {
            this.valueChange[fieldName]();
            this.currentRowChange();
            if (!rowUtilFunObj._getField(this, fieldName)['value']) return "";
            var valArr = rowUtilFunObj._getField(this, fieldName)['value'];
            if (!valArr) return "";
            if (valArr == "N") valArr = "否";else if (valArr == "Y") valArr = "是";
            return valArr;
        },
        write: function write(value) {

            this.setValue(fieldName, value);
        },
        owner: this
    });
};

var rowRefFunObj = {
    ref: ref$1,
    refMeta: refMeta$1,
    refCombo: refCombo,
    refDate: refDate,
    refEnum: refEnum
};

/**
 * Module : kero dataTable row rowSelect
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-08 13:54:01
 */

/**
 * 切换数据行的选中状态
 * @memberof Row
 * @param  {boolean} [type] 执行选中操作时，如果为single则取消其他行的选中状态，否则只修改当前行的选中状态
 * @example
 * row.toggleSelect()
 * row.toggleSelect('single')
 * row.toggleSelect('multi')
 */
var toggleSelect = function toggleSelect(type) {
    var index = this.parent.getRowIndex(this);
    var selectindices = this.parent.getSelectedIndices();
    if (selectindices.indexOf(index) != -1) {
        this.parent.setRowUnSelect(index);
    } else {
        if (type === 'single') this.parent.setRowSelect(index);else this.parent.addRowSelect(index);
    }
};

var singleSelect = function singleSelect() {
    this.toggleSelect('single');
};

var multiSelect = function multiSelect() {
    this.toggleSelect('multi');
};

var rowRowSelectFunObj = {
    toggleSelect: toggleSelect,
    singleSelect: singleSelect,
    multiSelect: multiSelect
};

/**
 * Module : kero dataTable row simpleData
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-08-08 13:54:01
 */

/**
 * 设置数据, 只设置字段值
 * @memberof Row
 * @param {object} data 数据信息
 * @param {boject} [status=nrm] 数据行状态
 * @example
 * var data = {
 *   filed1:'value1',
 *   field2:'value2'
 * }
 * datatable.setSimpleData(data)
 * datatable.setSimpleData(data,'upd')
 */
var setSimpleData$1 = function setSimpleData(data, status) {
  var allData = {};
  allData.data = data;
  allData.status = status || 'nrm';
  this.setData(allData, true);
  this.currentRowChange(-this.currentRowChange());
};

var rowSimpleDataFunObj = {
  setSimpleData: setSimpleData$1
};

/**
 * Module : Kero webpack entry row index
 * Author : liuyk(liuyuekai@yonyou.com)
 * Date   : 2016-08-09 15:24:46
 */

/**
 * Row
 * @namespace
 * @description 前端数据模型行对象
 */

var Row$1 = function (_Events) {
    inherits(Row, _Events);

    function Row(options) {
        classCallCheck(this, Row);

        var _this = possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).call(this));

        var self = _this;
        /**
         * 当前行的唯一标识
         * @type {string}
         */
        _this.rowId = options['id'] || Row.getRandomRowId();
        /**
         * 当前行的状态
         * Row.STATUS.NORMAL('nrm') ：前后端都存在并且保持一致
         * Row.STATUS.UPDATE('upd') ：前后端都存在并且前端进行了修改
         * Row.STATUS.NEW('new') ：后端不存在，前端存在的数据
         * Row.STATUS.DELETE('del') ：后端请求返回的状态，前端判断为此状态则将数据删除
         * Row.STATUS.FALSE_DELETE('fdel') ：后端存在，前端不存在的数据
         * @type {string}
         * @default Row.STATUS.NEW
         */
        _this.status = Row.STATUS.NEW;
        /**
         * 当前行对应的DataTable对象
         * @type {u.DataTable}
         */
        _this.parent = options['parent'];
        // 当前行的数据信息
        _this.data = {};
        // 存储meta改变信息
        _this.metaChange = {}; //ko.observable(1)
        // 存储valuecahnge改变信息
        _this.valueChange = {};
        // 监听当前行改变
        _this.currentRowChange = ko.observable(1);
        // 监听当前行是否选中
        _this.selected = ko.pureComputed({
            read: function read() {
                var index = this.parent.getRowIndex(this);
                var selectindices = this.parent.getSelectedIndices();
                return selectindices.indexOf(index) != -1;
            },
            owner: _this

        });
        // 监听当前行是否为focus
        _this.focused = ko.pureComputed({
            read: function read() {
                var index = this.parent.getRowIndex(this);
                var focusIndex = this.parent.getFocusIndex();
                return focusIndex == index;
            },
            owner: _this

        });
        _this.init();
        return _this;
    }

    return Row;
}(Events);

var RowProto = Row$1.prototype;
Object.assign(RowProto, rowDataFunObj);
Object.assign(RowProto, rowGetDataFunObj);
Object.assign(RowProto, rowGetMetaFunObj$1);
Object.assign(RowProto, rowGetSimpleDataFunObj);
Object.assign(RowProto, rowInitFunObj);
Object.assign(RowProto, rowMetaFunObj);
Object.assign(RowProto, rowRefFunObj);
Object.assign(RowProto, rowRowSelectFunObj);
Object.assign(RowProto, rowSimpleDataFunObj);
Object.assign(RowProto, rowUtilFunObj);

Row$1.STATUS = {
    NORMAL: 'nrm',
    UPDATE: 'upd',
    NEW: 'new',
    DELETE: 'del',
    FALSE_DELETE: 'fdel'
};

/*
 * 生成随机行id
 * @private
 */
Row$1.getRandomRowId = function () {
    var _id = setTimeout(function () {});
    return _id + '';
};

/**
 * Module : Kero webpack entry index
 * Author : liuyk(liuyuekai@yonyou.com)
 * Date	  : 2016-08-08 15:24:46
 */

window.DataTable = DataTable$1;

window.Page = Page$1;

window.Row = Row$1;

window.u = window.u || {};
u = window.u;
u.DataTable = DataTable$1;
u.Row = Row$1;

/**
 * Module : Kero Value Mixin
 * Author : Kvkens(yueming@yonyou.com)
 * Date   : 2016-08-08 15:58:49
 */

var ValueMixin = {
    init: function init() {
        var self = this;

        // 如果存在行对象则处理数据都针对此行进行处理
        if (parseInt(this.options.rowIndex) > -1) {
            if ((this.options.rowIndex + '').indexOf('.') > 0) {
                // 主子表的情况
                var childObj = this.getChildVariable();
                var lastRow = childObj.lastRow;
                var lastField = childObj.lastField;

                this.dataModel.on(DataTable.ON_VALUE_CHANGE, function (opt) {
                    var id = opt.rowId;
                    var field = opt.field;
                    var value = opt.newValue;
                    var obj = {
                        fullField: self.options.field,
                        index: self.options.rowIndex
                    };
                    var selfRow = self.dataModel.getChildRow(obj);
                    var row = opt.rowObj;
                    if (selfRow == row && field == lastField) {
                        self.modelValueChange(value);
                    }
                });

                this.dataModel.on(DataTable.ON_INSERT, function (opt) {
                    var obj = {
                        fullField: self.options.field,
                        index: self.options.rowIndex
                    };
                    var rowObj = self.dataModel.getChildRow(obj);
                    if (rowObj) {
                        self.modelValueChange(rowObj.getValue(lastField));
                    }
                });

                if (lastRow) {
                    this.modelValueChange(lastRow.getValue(lastField));
                }
            } else {

                this.dataModel.on(DataTable.ON_VALUE_CHANGE, function (opt) {
                    var id = opt.rowId;
                    var field = opt.field;
                    var value = opt.newValue;
                    var row = opt.rowObj;
                    var rowIndex = self.dataModel.getRowIndex(row);
                    if (rowIndex == self.options.rowIndex && field == self.field) {
                        self.modelValueChange(value);
                    }
                });

                this.dataModel.on(DataTable.ON_INSERT, function (opt) {
                    var rowObj = self.dataModel.getRow(self.options.rowIndex);
                    if (rowObj) {
                        self.modelValueChange(rowObj.getValue(self.field));
                    }
                });

                var rowObj = this.dataModel.getRow(this.options.rowIndex);
                if (rowObj) {
                    this.modelValueChange(rowObj.getValue(this.field));
                }
            }
        } else {
            this.dataModel.ref(this.field).subscribe(function (value) {
                self.modelValueChange(value);
            });
            this.modelValueChange(this.dataModel.getValue(this.field));
        }
    },
    methods: {
        /**
         * 获取与子表相关的变量
         * @param {Object} value
         */
        getChildVariable: function getChildVariable() {
            var indexArr = this.options.rowIndex.split('.');
            var lastIndex = indexArr[indexArr.length - 1];
            var fieldArr = this.options.field.split('.');
            var lastField = fieldArr[fieldArr.length - 1];
            var lastDataTable = this.dataModel;
            var lastRow = null;

            for (var i = 0; i < fieldArr.length; i++) {
                lastRow = lastDataTable.getRow(indexArr[i]);
                if (!lastRow) break;
                if (i < fieldArr.length - 1) {
                    lastDataTable = lastRow.getValue(fieldArr[i]);
                }
            }
            return {
                lastField: lastField,
                lastIndex: lastIndex,
                lastDataTable: lastDataTable,
                lastRow: lastRow
            };
        },
        /**
         * 模型数据改变
         * @param {Object} value
         */
        modelValueChange: function modelValueChange(value) {
            if (this.slice) return;
            if (value === null || typeof value == "undefined") value = "";
            this.trueValue = this.formater ? this.formater.format(value) : value;
            //this.element.trueValue = this.trueValue;
            this.showValue = this.masker ? this.masker.format(this.trueValue).value : this.trueValue;
            this.setShowValue(this.showValue);

            //this.trueValue = value;
            //this.showValue = value;
            //this.setShowValue(this.showValue);
        },

        ///**
        // * 设置模型值
        // * @param {Object} value
        // */
        //setModelValue: function (value) {
        //    if (!this.dataModel) return;
        //    this.dataModel.setValue(this.field, value)
        //},
        /**
         * 设置控件值
         * @param {Object} value
         */
        setValue: function setValue(value) {
            value = this.beforeSetValue(value);
            this.trueValue = this.formater ? this.formater.format(value) : value;
            this.showValue = this.masker ? this.masker.format(this.trueValue).value : this.trueValue;
            this.setShowValue(this.showValue);
            this.slice = true;
            if (parseInt(this.options.rowIndex) > -1) {
                if ((this.options.rowIndex + '').indexOf('.') > 0) {
                    var childObj = this.getChildVariable();
                    var lastRow = childObj.lastRow;
                    var lastField = childObj.lastField;
                    if (lastRow) lastRow.setValue(lastField, this.trueValue);
                } else {
                    var rowObj = this.dataModel.getRow(this.options.rowIndex);
                    if (rowObj) rowObj.setValue(this.field, this.trueValue);
                }
            } else {
                this.dataModel.setValue(this.field, this.trueValue);
            }
            this.slice = false;
        },
        beforeSetValue: function beforeSetValue(value) {
            return value;
        },
        /**
         * 取控件的值
         */
        getValue: function getValue() {
            return this.trueValue;
        },
        setShowValue: function setShowValue(showValue) {
            this.showValue = showValue;
            this.element.value = showValue;
            this.element.title = showValue;
        },
        getShowValue: function getShowValue() {
            return this.showValue;
        },
        setModelValue: function setModelValue(value) {
            if (!this.dataModel) return;
            if (parseInt(this.options.rowIndex) > -1) {
                if ((this.options.rowIndex + '').indexOf('.') > 0) {
                    var childObj = this.getChildVariable();
                    var lastRow = childObj.lastRow;
                    var lastField = childObj.lastField;
                    if (lastRow) lastRow.setValue(lastField, this.trueValue);
                } else {
                    var rowObj = this.dataModel.getRow(this.options.rowIndex);
                    if (rowObj) rowObj.setValue(this.field, value);
                }
            } else {
                this.dataModel.setValue(this.field, value);
            }
        }
    }
};

/**
 * Module : Kero Enable Mixin
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-08 16:32:54
 */
var EnableMixin = {
    init: function init() {
        var self = this;
        //处理只读
        /*if (this.options['enable'] && (this.options['enable'] == 'false' || this.options['enable'] == false)){
                this.setEnable(false);
        }else {
            this.dataModel.refEnable(this.field).subscribe(function (value) {
                self.setEnable(value);
            });
            this.setEnable(this.dataModel.isEnable(this.field));
        }*/

        var oEnable = this.options.enable,
            enable;
        if (typeof oEnable == 'undefined') {
            enable = this.dataModel.getRowMeta(this.field, 'enable');
        } else {
            enable = oEnable;
        }
        this.enable = enable;
        this.setEnable(this.enable);
        this.dataModel.refEnable(this.field).subscribe(function (value) {
            self.setEnable(value);
        });
    },
    methods: {
        setEnable: function setEnable(enable) {
            if (enable === true || enable === 'true') {
                this.enable = true;
                this.element.removeAttribute('readonly');
                removeClass(this.element.parentNode, 'disablecover');
            } else if (enable === false || enable === 'false') {
                this.enable = false;
                this.element.setAttribute('readonly', 'readonly');
                addClass(this.element.parentNode, 'disablecover');
            }
        }
    }
};

/**
 * Module : Kero Enable Mixin
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-08 16:32:54
 */

var RequiredMixin = {
    init: function init() {
        var self = this;
        this.required = this.getOption('required');
        this.dataModel.refRowMeta(this.field, "required").subscribe(function (value) {
            self.setRequired(value);
        });
        //this.setRequired(this.dataModel.getMeta(this.field, "required"));
    },
    methods: {
        setRequired: function setRequired(required) {
            if (required === true || required === 'true') {
                this.required = true;
            } else if (required === false || required === 'false') {
                this.required = false;
            }
        }
    }
};

/**
 * Module : Kero Validate Mixin
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-10 14:53:43
 */
var ValidateMixin = {
    init: function init() {
        this.placement = this.getOption('placement');
        this.tipId = this.getOption('tipId');
        this.tipAliveTime = this.getOption('tipAliveTime');
        this.errorMsg = this.getOption('errorMsg');
        this.nullMsg = this.getOption('nullMsg');
        this.regExp = this.getOption('regExp');
        this.successId = this.getOption('successId');
        this.hasSuccess = this.getOption('hasSuccess');
        this.notipFlag = this.getOption('notipFlag');
        this.showFix = this.getOption('showFix');

        // if (this.validType) {
        this.validate = new Validate({
            el: this.element,
            single: true,
            validMode: 'manually',
            required: this.required,
            validType: this.validType,
            placement: this.placement,
            tipId: this.tipId,
            tipAliveTime: this.tipAliveTime,
            successId: this.successId,
            notipFlag: this.notipFlag,
            hasSuccess: this.hasSuccess,
            errorMsg: this.errorMsg,
            nullMsg: this.nullMsg,
            maxLength: this.maxLength,
            minLength: this.minLength,
            max: this.max,
            min: this.min,
            maxNotEq: this.maxNotEq,
            minNotEq: this.minNotEq,
            reg: this.regExp,
            showFix: this.showFix
        });
        // };
    },
    methods: {
        /**
         *校验
         */
        doValidate: function doValidate$$1(options) {
            if (this.validate) {
                if (options && options['trueValue'] === true) {
                    options['showMsg'] = options['showMsg'] || false;
                    var result = this.validate.check({ pValue: this.getValue(), showMsg: options['showMsg'] });
                } else {
                    var result = this.validate.check();
                }
                result.comp = this;
                return result;
            } else {
                return { passed: true, comp: this };
            }
        },
        /**
         * 是否需要清除数据
         */
        _needClean: function _needClean() {
            if (this.validate) return this.validate._needClean();else return false;
        }
    }
};

/**
 * Module : Kero adapter 基类
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-09 10:00:00
 */
/**
 * adapter基类
 */

var BaseAdapter = Class.create({
    mixins: [ValueMixin, EnableMixin, RequiredMixin, ValidateMixin],
    /**
     *
     * @param comp
     * @param options ：
     *      el: '#content',  对应的dom元素
     *      options: {},     配置
     *      model:{}        模型，包括数据和事件
     */
    initialize: function initialize(options) {
        this.initBefore();
        //组合mixin中的方法
        for (var i = 0; i < this.mixins.length; i++) {
            var mixin = this.mixins[i];
            for (var key in mixin['methods']) {
                if (!this[key]) {
                    this[key] = mixin['methods'][key];
                }
            }
        }

        //this.comp = comp;
        this.element = options['el'];
        this.options = options['options'];
        this.viewModel = options['model'];
        this.app = options['app'];
        this.dataModel = null;
        this.mixins = this.mixins || [];
        this.parseDataModel();
        this.init();
        //执行mixin中的初始化方法
        for (var i in this.mixins) {
            var mixin = this.mixins[i];
            if (mixin['init']) mixin.init.call(this);
        }
    },
    initBefore: function initBefore() {},
    parseDataModel: function parseDataModel() {
        if (!this.options || !this.options["data"]) return;
        this.field = this.options["field"];
        var dtId = this.options["data"];
        this.dataModel = getJSObject(this.viewModel, this.options["data"]);
        if (this.dataModel) {
            var opt = {};
            if (this.options.type === 'u-date') {
                opt.type = 'date';
            }
            if (this.field) this.dataModel.createField(this.field, opt);
        }
    },
    getOption: function getOption(key) {
        var rs = this.dataModel.getRowMeta(this.field, key);
        if (rs === 0) {
            return 0;
        } else {
            return rs || this.options[key];
        }
    },
    init: function init() {}
});
window.u = window.u || {};
u.BaseAdapter = BaseAdapter;

/**
 * Module : Cascader的Kero组件
 * Author : huyue(huyueb@yonyou.com)
 * Date	  : 2017-05-19 09:52:13
 */

var CascaderAdapter = u.BaseAdapter.extend({

    init: function init() {
        var self = this;
        // 获取参数
        var id = this.options.id,
            data = this.options.data,
            is_hover = this.options.is_hover,
            obj = {
            el: this.element,
            id: id,
            data: getJSObject(this.viewModel, this.options['datasource'])
        };
        //判断如果传入了is_hover参数，并且为true，就将触发事件的状态由click改为mouseenter
        if (is_hover) {
            obj['trigger_type'] = 'mouseenter';
        }
        this.comp = new u.Cascader(obj);
        this.comp.on('change', function (event) {
            self.setValue(event.value);
        });
    },

    /**
     * 模型数据 datatable 改变调用的方法
     * @param {Object} value
     */
    modelValueChange: function modelValueChange(value) {
        this.comp.setValue(value);
    }

});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: CascaderAdapter,
    name: 'u-cascader'
});

/**
 * Module : Kero Check Adapter
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-08 15:50:03
 */

var CheckboxAdapter = u.BaseAdapter.extend({
    init: function init() {
        var self = this;
        this.isGroup = this.options['isGroup'] === true || this.options['isGroup'] === 'true';
        this.otherValue = this.options['otherValue'] || '其他';
        this.beforeEdit = getFunction(this.viewModel, this.options['beforeEdit']);
        if (this.options['datasource'] || this.options['hasOther']) {
            // 存在datasource或者有其他选项，将当前dom元素保存，以后用于复制新的dom元素
            if (env$1.isIE) {
                this.checkboxTemplateHTML = this.element.innerHTML;
            } else {
                this.checkboxTemplateArray = [];
                for (var i = 0, count = this.element.childNodes.length; i < count; i++) {
                    this.checkboxTemplateArray.push(this.element.childNodes[i]);
                }
            }
        }
        if (this.options['datasource']) {
            this.isGroup = true;
            this.datasource = getJSObject(this.viewModel, this.options['datasource']);
            if (this.datasource) this.setComboData(this.datasource);
        } else {
            if (this.element['u.Checkbox']) {
                this.comp = this.element['u.Checkbox'];
            } else {
                this.comp = new Checkbox(this.element);
                this.comp.beforeEdit = this.beforeEdit;
                this.element['u.Checkbox'] = this.comp;
            }

            // 由于不同浏览器input的value不一样，所以默认checkedValue修改为true

            this.checkedValue = this.options['checkedValue'] || true;
            this.unCheckedValue = this.options["unCheckedValue"];

            this.comp.on('change', function () {
                if (self.slice) return;
                if (!self.dataModel) return;
                var modelValue = self.dataModel.getValue(self.field);
                modelValue = modelValue ? modelValue + '' : '';
                if (self.isGroup) {
                    var valueArr = modelValue == '' ? [] : modelValue.split(',');

                    if (self.comp._inputElement.checked) {
                        valueArr.push(self.checkedValue);
                    } else {
                        var index = valueArr.indexOf(self.checkedValue);
                        valueArr.splice(index, 1);
                    }
                    self.dataModel.setValue(self.field, valueArr.join(','));
                } else {
                    if (self.comp._inputElement.checked) {
                        self.dataModel.setValue(self.field, self.checkedValue);
                    } else {
                        self.dataModel.setValue(self.field, self.unCheckedValue);
                    }
                }
            });
        }
        // 如果存在其他
        if (this.options['hasOther']) {
            var node = null;
            if (env$1.isIE) {
                var nowHtml = this.element.innerHTML;
                this.element.innerHTML = nowHtml + this.checkboxTemplateHTML;
            } else {
                for (var j = 0; j < this.checkboxTemplateArray.length; j++) {
                    this.element.appendChild(this.checkboxTemplateArray[j].cloneNode(true));
                }
            }

            var LabelS = this.element.querySelectorAll('.u-checkbox');
            self.lastLabel = LabelS[LabelS.length - 1];
            var allCheckS = this.element.querySelectorAll('[type=checkbox]');
            self.lastCheck = allCheckS[allCheckS.length - 1];
            var nameDivs = this.element.querySelectorAll('[data-role=name]');
            self.lastNameDiv = nameDivs[nameDivs.length - 1];
            self.lastNameDiv.innerHTML = '其他';
            self.otherInput = makeDOM('<input disabled type="text" style="width: 80%">');
            self.lastNameDiv.parentNode.appendChild(self.otherInput);
            self.lastCheck.value = '';

            var comp;
            if (self.lastLabel['u.Checkbox']) {
                comp = self.lastLabel['u.Checkbox'];
            } else {
                comp = new Checkbox(self.lastLabel);
            }
            self.lastLabel['u.Checkbox'] = comp;
            self.otherComp = comp;
            comp.on('change', function () {
                if (self.slice) return;
                var modelValue = self.dataModel.getValue(self.field);
                modelValue = modelValue ? modelValue + '' : '';
                var valueArr = modelValue == '' ? [] : modelValue.split(',');
                if (comp._inputElement.checked) {
                    var oldIndex = valueArr.indexOf(self.otherInput.oldValue);
                    if (oldIndex > -1) {
                        valueArr.splice(oldIndex, 1);
                    }
                    if (self.otherInput.value) {
                        valueArr.push(self.otherInput.value);
                    }
                    var otherValueIndex = valueArr.indexOf(self.otherValue);
                    if (otherValueIndex < 0) {
                        valueArr.push(self.otherValue);
                    }

                    // 选中后可编辑
                    comp.element.querySelectorAll('input[type="text"]').forEach(function (ele) {
                        ele.removeAttribute('disabled');
                    });
                } else {
                    var index = valueArr.indexOf(self.otherInput.value);
                    if (index > -1) {
                        valueArr.splice(index, 1);
                    }

                    var otherValueIndex = valueArr.indexOf(self.otherValue);
                    if (otherValueIndex > -1) {
                        valueArr.splice(otherValueIndex, 1);
                    }

                    // 未选中则不可编辑
                    comp.element.querySelectorAll('input[type="text"]').forEach(function (ele) {
                        ele.setAttribute('disabled', 'true');
                    });
                }
                //self.slice = true;
                self.dataModel.setValue(self.field, valueArr.join(','));
                //self.slice = false;
            });

            on$1(self.otherInput, 'blur', function (e) {
                self.lastCheck.value = this.value;
                self.otherComp.trigger('change');
                this.oldValue = this.value;
            });
            on$1(self.otherInput, 'click', function (e) {
                stopEvent(e);
            });
        }

        if (this.dataModel) {
            this.dataModel.ref(this.field).subscribe(function (value) {
                if (!value) value = "";
                self.modelValueChange(value);
            });
        }
    },
    setComboData: function setComboData(comboData) {
        var self = this;
        this.datasource = comboData;
        this.element.innerHTML = '';
        if (env$1.isIE) {
            var htmlStr = '';
            for (var i = 0, len = comboData.length; i < len; i++) {
                htmlStr += this.checkboxTemplateHTML;
            }
            this.element.innerHTML = htmlStr;
        } else {
            for (var i = 0, len = comboData.length; i < len; i++) {
                for (var j = 0; j < this.checkboxTemplateArray.length; j++) {
                    this.element.appendChild(this.checkboxTemplateArray[j].cloneNode(true));
                }
            }
        }

        var allCheck = this.element.querySelectorAll('[type=checkbox]');
        var allName = this.element.querySelectorAll('[data-role=name]');
        for (var k = 0; k < allCheck.length; k++) {
            allCheck[k].value = comboData[k].pk || comboData[k].value;
            allName[k].innerHTML = comboData[k].name;
        }
        this.element.querySelectorAll('.u-checkbox').forEach(function (ele) {
            var comp;
            if (ele['u.Checkbox']) {
                comp = ele['u.Checkbox'];
            } else {
                comp = new Checkbox(ele);
                comp.beforeEdit = self.beforeEdit;
            }
            ele['u.Checkbox'] = comp;
            comp.on('change', function () {
                if (self.slice) return;
                var modelValue = self.dataModel.getValue(self.field);
                modelValue = modelValue ? modelValue + '' : '';
                var valueArr = modelValue == '' ? [] : modelValue.split(',');
                if (comp._inputElement.checked) {
                    valueArr.push(comp._inputElement.value);
                } else {
                    var index = valueArr.indexOf(comp._inputElement.value);
                    valueArr.splice(index, 1);
                }
                //self.slice = true;
                self.dataModel.setValue(self.field, valueArr.join(','));
                //self.slice = false;
            });
        });
    },
    modelValueChange: function modelValueChange(val) {
        var self = this;
        if (this.slice) return;

        if (this.isGroup) {
            if (this.datasource) {
                this.showValue = '';
                this.trueValue = val;
                if (this.options.hasOther) {
                    var otherVal = '';
                    if (val) otherVal = val + ',';
                }
                this.element.querySelectorAll('.u-checkbox').forEach(function (ele) {
                    var comp = ele['u.Checkbox'];
                    if (comp) {
                        var inputValue = comp._inputElement.value;
                        if (inputValue && comp._inputElement.checked != (val + ',').indexOf(inputValue + ',') > -1) {
                            self.slice = true;
                            comp.toggle();
                            self.slice = false;
                        }
                        if (inputValue && (val + ',').indexOf(inputValue + ',') > -1) {
                            if (self.options.hasOther) {
                                otherVal = otherVal.replace(inputValue + ',', '');
                            }
                            var nameSpan = ele.querySelector('[data-role=name]');
                            var showValue = $(nameSpan).text();
                            if (showValue) {
                                self.showValue += showValue + ',';
                            }
                        }
                    }
                });
                if (this.options.hasOther) {
                    if (otherVal.indexOf(this.otherValue + ',') > -1) {
                        self.lastCheck.value = this.otherValue;
                        otherVal = otherVal.replace(this.otherValue + ',', '');
                    }
                    otherVal = otherVal.replace(/\,/g, '');
                    if (otherVal) {
                        self.otherInput.oldValue = otherVal;
                        self.otherInput.value = otherVal;
                        self.showValue += otherVal + ',';
                        self.otherInput.removeAttribute('disabled');
                        self.otherComp._inputElement.checked = true;
                        self.otherComp._updateClasses();
                    }
                }
            }
        } else {
            var flag;
            if (this.checkedValue === true) flag = val === this.checkedValue || val === "true";else flag = val === this.checkedValue;
            if (this.comp._inputElement.checked != flag) {
                this.slice = true;
                this.comp.toggle();
                this.slice = false;
            }
        }
    },

    setEnable: function setEnable(enable) {
        this.enable = enable === true || enable === 'true';
        if (this.isGroup) {
            if (this.datasource) {
                if (this.otherInput && !this.enable) {
                    this.otherInput.setAttribute('disabled', true);
                }
                this.element.querySelectorAll('.u-checkbox').forEach(function (ele) {
                    var comp = ele['u.Checkbox'];
                    if (comp) {
                        if (enable === true || enable === 'true') {
                            comp.enable();
                        } else {
                            comp.disable();
                        }
                    }
                });
            }
        } else {
            if (this.enable) {
                this.comp.enable();
            } else {
                this.comp.disable();
            }
        }
    }
});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: CheckboxAdapter,
    name: 'u-checkbox'
});

/**
 * Module : Kero webpack entry index
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-09 09:52:13
 */

var CkEditorAdapter = u.BaseAdapter.extend({
    init: function init() {
        var self = this;
        this.e_editor = this.id + "-ckeditor";
        this.render(this.options);
    },

    render: function render(data) {
        var cols = data.cols || 80;
        var rows = data.rows || 10;
        var self = this;
        var tpls = '<textarea cols="' + cols + '" id="' + this.e_editor + '" name="' + this.e_editor + '_name' + '" rows="' + rows + '"></textarea>';
        $(this.element).append(tpls);
        CKEDITOR.replace(this.e_editor + '_name');
        var tmpeditor = CKEDITOR.instances[this.e_editor];
        this.tmpeditor = tmpeditor;
        this.tmpeditor.on('blur', function () {
            self.setValue(tmpeditor.getData());
        });

        this.tmpeditor.on('focus', function () {
            self.setShowValue(self.getValue());
        });
    },

    modelValueChange: function modelValueChange(value) {
        if (this.slice) return;
        value = value || "";
        this.trueValue = value;
        this.showValue = value;
        this.setShowValue(this.showValue);
    },

    getValue: function getValue() {
        return this.trueValue;
    },

    setShowValue: function setShowValue(showValue) {
        var self = this;
        this.showValue = showValue;
        this.element.value = showValue;
        this.tmpeditor.setData(showValue);

        //同一页面多次复制有些时候会不生效，setData为异步方法导致。
        if (self.setShowValueInter) clearInterval(self.setShowValueInter);
        self.setShowValueInter = setInterval(function () {
            if (self.tmpeditor.document && self.tmpeditor.document.$ && self.tmpeditor.document.$.body) {
                self.tmpeditor.document.$.body.innerHTML = showValue;
                clearInterval(self.setShowValueInter);
            }
        }, 100);
    },

    getShowValue: function getShowValue() {
        return this.showValue;
    },

    getContent: function getContent() {
        return $('#' + this.e_editor).html();
    },

    setContent: function setContent(txt) {
        $('#' + this.e_editor).html(txt);
    }

});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: CkEditorAdapter,
    name: 'u-ckeditor'
});

/**
 * Module : Kero webpack entry index
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-09 09:52:13
 */

var ComboboxAdapter = u.BaseAdapter.extend({
    init: function init() {
        var self = this;
        this.datasource = getJSObject(this.viewModel, this.options['datasource']);
        this.mutil = this.options.mutil || false;
        this.onlySelect = this.options.onlySelect || false;
        this.showFix = this.options.showFix || false;
        this.validType = 'combobox';
        this.isAutoTip = this.options.isAutoTip || false;

        if (!this.element['u.Combo']) {
            this.comp = new u.Combo({
                el: this.element,
                mutilSelect: this.mutil,
                onlySelect: this.onlySelect,
                showFix: this.showFix,
                isAutoTip: this.isAutoTip
            });
            this.element['u.Combo'] = this.comp;
        } else {
            this.comp = this.element['u.Combo'];
        }

        var isDsObservable = ko.isObservable(this.datasource);
        if (this.datasource) {
            this.comp.setComboData(isDsObservable ? ko.toJS(this.datasource) : this.datasource);
        } else {
            if (u.isIE8 || u.isIE9) alert("IE8/IE9必须设置datasource");
        }
        if (isDsObservable) {
            // datasource 发生变化时改变控件
            this.datasource.subscribe(function (value) {
                self.comp.setComboData(value);
            });
        }

        this.comp.on('select', function (event) {
            self.setValue(event.value);
            self.setShowValue(event.name);
        });
    },
    setComboData: function setComboData(datas, options) {
        this.comp.setComboData(datas, options);
    },
    modelValueChange: function modelValueChange(value) {
        if (this.slice) return;
        //this.trueValue = value;
        if (value === null || typeof value == "undefined") value = "";
        this.comp.setValue(value);
        if (this.mutil) this.showValue = this.comp.name;
        //下面两句会在校验中用到
        this.trueValue = this.formater ? this.formater.format(value) : value;
        this.element.trueValue = this.trueValue;
    },

    //getValue: function () {
    //    return this.trueValue
    //},
    setEnable: function setEnable(enable) {
        var self = this;
        if (enable === true || enable === 'true') {
            this.enable = true;
            this.element.removeAttribute('readonly');
            this.comp._input.removeAttribute('readonly');
            removeClass(this.element.parentNode, 'disablecover');
            on$1(this.comp._input, 'focus', function (e) {
                self.comp.show(e);
                stopEvent(e);
            });
            if (this.comp.iconBtn) {
                on$1(this.comp.iconBtn, 'click', function (e) {
                    self.comp.show(e);
                    stopEvent(e);
                });
            }
        } else if (enable === false || enable === 'false') {
            this.enable = false;
            this.element.setAttribute('readonly', 'readonly');
            this.comp._input.setAttribute('readonly', 'readonly');
            addClass(this.element.parentNode, 'disablecover');
            off$1(this.comp._input, 'focus');
            if (this.comp.iconBtn) {
                off$1(this.comp.iconBtn, 'click');
            }
        }
    }
});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: ComboboxAdapter,
    name: 'u-combobox'
});

/**
 * Module : Kero float adapter
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-09 15:16:08
 */

var FloatAdapter = u.BaseAdapter.extend({
    init: function init() {
        var self = this;
        this.element = this.element.nodeName === 'INPUT' ? this.element : this.element.querySelector('input');
        if (!this.element) {
            throw new Error('not found INPUT element, u-meta:' + JSON.stringify(this.options));
        }
        this.maskerMeta = core.getMaskerMeta('float') || {};
        this.validType = 'float';
        this.maskerMeta.precision = this.getOption('precision') || this.maskerMeta.precision;
        this.max = this.getOption('max');
        this.min = this.getOption('min');
        var placeholder = this.options['placeholder'];
        if (placeholder) this.element.placeholder = placeholder;
        //如果max为false并且不为0
        if (!this.max && this.max !== 0) {
            this.max = "10000000000000000000";
        }
        //如果min为false并且不为0
        if (!this.min && this.min !== 0) {
            this.min = "-10000000000000000000";
        }
        // this.max = this.getOption('max') || "10000000000000000000";
        // this.min = this.getOption('min') || "-10000000000000000000";
        this.maxNotEq = this.getOption('maxNotEq');
        this.minNotEq = this.getOption('minNotEq');

        //处理数据精度
        this.dataModel.refRowMeta(this.field, "precision").subscribe(function (precision) {
            if (precision === undefined) return;
            self.setPrecision(precision);
        });
        this.formater = new NumberFormater(this.maskerMeta.precision);
        this.masker = new NumberMasker(this.maskerMeta);
        on$1(this.element, 'focus', function () {
            if (self.enable) {
                self.onFocusin();
                try {
                    var e = event.srcElement;
                    var r = e.createTextRange();
                    r.moveStart('character', e.value.length);
                    r.collapse(true);
                    r.select();
                } catch (e) {}
            }
        });

        on$1(this.element, 'blur', function () {
            var newValue;
            if (self.enable) {
                if (!self.doValidate().passed && self._needClean()) {
                    if (self.required && (self.element.value === null || self.element.value === undefined || self.element.value === '')) {
                        // 因必输项清空导致检验没通过的情况
                        self.setValue('');
                    } else {
                        self.element.value = self.getShowValue();
                    }
                } else {
                    newValue = self.element.value ? self.element.value.replaceAll(',', '') : "";
                    self.setValue(newValue);
                }
            }
        });

        on$1(this.element, 'keydown', function (e) {
            if (self.enable) {
                var code = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
                if (e.ctrlKey && (e.keyCode == 67 || e.keyCode == 86)) {
                    //复制粘贴
                    return true;
                }
                if (!(code >= 48 && code <= 57 || code >= 96 && code <= 105 || code == 37 || code == 102 || code == 39 || code == 8 || code == 46 || code == 110 || code == 190)) {
                    //阻止默认浏览器动作(W3C)
                    if (e && e.preventDefault) e.preventDefault();
                    //IE中阻止函数器默认动作的方式
                    else window.event.returnValue = false;
                    return false;
                }
            }
        });
    },
    hide: function hide() {
        var self = this,
            newValue;
        if (self.enable) {
            if (!self.doValidate().passed && self._needClean()) {
                if (self.required && (self.element.value === null || self.element.value === undefined || self.element.value === '')) {
                    // 因必输项清空导致检验没通过的情况
                    self.setValue('');
                } else {
                    self.element.value = self.getShowValue();
                }
            } else {
                newValue = self.element.value ? self.element.value.replaceAll(',', '') : "";
                self.setValue(newValue);
            }
        }
    },
    /**
     * 修改精度
     * @param {Integer} precision
     */
    setPrecision: function setPrecision(precision) {
        if (this.maskerMeta.precision == precision) return;
        this.maskerMeta.precision = precision;
        this.formater = new NumberFormater(this.maskerMeta.precision);
        this.masker = new NumberMasker(this.maskerMeta);
        var currentRow = this.dataModel.getCurrentRow();
        if (currentRow) {
            var v = this.dataModel.getCurrentRow().getValue(this.field);
            this.showValue = this.masker.format(this.formater.format(v)).value;
        } else {
            this.showValue = this.masker.format(this.formater.format(this.trueValue)).value;
        }

        this.setShowValue(this.showValue);
    },

    onFocusin: function onFocusin() {
        var v = this.getValue(),
            vstr = v + '',
            focusValue = v;
        if (isNumber$1(v) && isNumber$1(this.maskerMeta.precision)) {
            if (vstr.indexOf('.') >= 0) {
                var sub = vstr.substr(vstr.indexOf('.') + 1);
                if (sub.length < this.maskerMeta.precision || parseInt(sub.substr(this.maskerMeta.precision)) == 0) {
                    focusValue = this.formater.format(v);
                }
            } else if (this.maskerMeta.precision > 0) {
                focusValue = this.formater.format(v);
            }
        }

        focusValue = parseFloat(focusValue) === 0 ? parseFloat(focusValue) : parseFloat(focusValue) || '';
        this.setShowValue(focusValue);
    },
    _needClean: function _needClean() {
        return true;
    }
});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: FloatAdapter,
    name: 'float'
});

/**
 * Module : Kero currency
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-09 13:42:14
 */

/**
 * 货币控件
 */
var CurrencyAdapter = FloatAdapter.extend({
    init: function init() {
        FloatAdapter.prototype.init.call(this);
        var self = this;
        this.maskerMeta = core.getMaskerMeta('currency') || {};
        this.maskerMeta.precision = this.getOption('precision') || this.maskerMeta.precision;
        this.maskerMeta.curSymbol = this.getOption('curSymbol') || this.maskerMeta.curSymbol;
        this.validType = 'float';
        this.dataModel.on(this.field + '.curSymbol.' + DataTable$1.ON_CURRENT_META_CHANGE, function (event) {
            self.setCurSymbol(event.newValue);
        });
        this.formater = new NumberFormater(this.maskerMeta.precision);
        this.masker = new CurrencyMasker(this.maskerMeta);
    },
    /**
     * 修改精度
     * @param {Integer} precision
     */
    setPrecision: function setPrecision(precision) {
        if (this.maskerMeta.precision == precision) return;
        this.maskerMeta.precision = precision;
        this.formater = new NumberFormater(this.maskerMeta.precision);
        this.masker = new CurrencyMasker(this.maskerMeta);
        var currentRow = this.dataModel.getCurrentRow();
        if (currentRow) {
            var v = this.dataModel.getCurrentRow().getValue(this.field);
            this.showValue = this.masker.format(this.formater.format(v)).value;
        } else {
            this.showValue = this.masker.format(this.formater.format(this.trueValue)).value;
        }
        this.setShowValue(this.showValue);
    },
    /**
     * 修改币符
     * @param {String} curSymbol
     */
    setCurSymbol: function setCurSymbol(curSymbol) {
        if (this.maskerMeta.curSymbol == curSymbol) return;
        this.maskerMeta.curSymbol = curSymbol;
        this.masker.formatMeta.curSymbol = this.maskerMeta.curSymbol;
        this.element.trueValue = this.trueValue;
        this.showValue = this.masker.format(this.trueValue).value;
        this.setShowValue(this.showValue);
    },
    onFocusin: function onFocusin(e) {
        var v = this.getValue(),
            vstr = v + '',
            focusValue = v;
        if (isNumber$1(v) && isNumber$1(this.maskerMeta.precision)) {
            if (vstr.indexOf('.') >= 0) {
                var sub = vstr.substr(vstr.indexOf('.') + 1);
                if (sub.length < this.maskerMeta.precision || parseInt(sub.substr(this.maskerMeta.precision)) == 0) {
                    focusValue = this.formater.format(v);
                }
            } else if (this.maskerMeta.precision > 0) {
                focusValue = this.formater.format(v);
            }
        }
        this.setShowValue(focusValue);
    }
});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: CurrencyAdapter,
    name: 'currency'
});

/**
 * Module : Kero datetime
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-09 14:59:37
 */

var DateTimeAdapter = u.BaseAdapter.extend({
    init: function init() {
        var self = this,
            adapterType,
            format;
        if (this.options.type === 'u-date') {
            this.adapterType = 'date';
        } else {
            this.adapterType = 'datetime';
            addClass(this.element, 'time');
        }

        this.timezone = this.getOption('timezone') || getCookie(U_TIMEZONE);

        if (!this.options['format'] && typeof getFormatFun == 'function') {
            // 根据语种获取format
            this.options['format'] = getFormatFun();
        }

        this.beforeValueChangeFun = getFunction(this.viewModel, this.options['beforeValueChangeFun']);

        this.maskerMeta = core.getMaskerMeta(this.adapterType) || {};
        this.maskerMeta.format = this.options['format'] || this.maskerMeta.format;
        if (this.dataModel) {
            this.dataModel.on(this.field + '.format.' + DataTable$1.ON_CURRENT_META_CHANGE, function (event) {
                self.setFormat(event.newValue);
            });
        }

        if (this.dataModel && !this.options['format']) this.options.format = this.dataModel.getMeta(this.field, "format");

        if (!this.options['format']) {
            if (this.options.type === 'u-date') {
                this.options.format = "YYYY-MM-DD";
            } else if (this.options.type === 'year') {
                this.options.format = "YYYY";
            } else if (this.options.type === 'month') {
                this.options.format = "MM";
            } else if (this.options.type === 'yearmonth') {
                this.options.format = "YYYY-MM";
            } else {
                this.options.format = "YYYY-MM-DD HH:mm:ss";
            }
        }
        format = this.options.format;
        this.maskerMeta.format = format || this.maskerMeta.format;

        this.startField = this.options.startField ? this.options.startField : this.dataModel.getMeta(this.field, "startField");

        this.endField = this.options.endField ? this.options.endField : this.dataModel.getMeta(this.field, "endField");

        // this.formater = new $.DateFormater(this.maskerMeta.format);
        // this.masker = new DateTimeMasker(this.maskerMeta);
        this.op = {};
        var mobileDateFormat = "",
            mobileTimeFormat = "",
            dateOrder = "",
            timeOrder = "";
        if (env$1.isMobile) {
            switch (format) {
                case "YYYY-MM-DD":
                    mobileDateFormat = "yy-mm-dd";
                    dateOrder = mobileDateFormat.replace(/-/g, '');
                    break;
                case "YYYY-MM-DD HH:mm":
                    mobileDateFormat = "yy-mm-dd";
                    mobileTimeFormat = "HH:ii";
                    dateOrder = mobileDateFormat.replace(/-/g, '');
                    timeOrder = mobileTimeFormat.replace(/\:/g, '');
                    break;
                case "YYYY-MM":
                    mobileDateFormat = "yy-mm";
                    dateOrder = mobileDateFormat.replace(/-/g, '');
                    break;
                default:
                    mobileDateFormat = "yy-mm-dd";
                    mobileTimeFormat = "HH:ii:ss";
                    dateOrder = mobileDateFormat.replace(/-/g, '');
                    timeOrder = mobileTimeFormat.replace(/\:/g, '');
            }

            this.op = {
                theme: "android-holo-light",
                mode: "scroller",
                lang: "zh",
                endYear: '9999',
                cancelText: null,
                dateFormat: mobileDateFormat,
                timeWheels: timeOrder,
                dateWheels: dateOrder,
                timeFormat: mobileTimeFormat,
                onSelect: function onSelect(val) {
                    if (typeof self.options.beforeValueChangeFun == 'function') {
                        if (!self.options.beforeValueChangeFun.call(this, this.pickerDate)) {
                            return;
                        }
                    }
                    self.setValue(val);
                }
            };
            this._span = this.element.querySelector("span");
            this.element = this.element.querySelector("input");
            this.element.setAttribute('readonly', 'readonly');
            var placeholder = this.options['placeholder'];
            if (placeholder) this.element.placeholder = placeholder;
            if (this._span) {
                on$1(this._span, 'click', function (e) {
                    self.element.focus();
                    stopEvent(e);
                });
            }
            if (this.adapterType == 'date') {
                $(this.element).mobiscroll().date(this.op);
            } else {
                $(this.element).mobiscroll().datetime(this.op);
            }
        } else {
            this.comp = new DateTimePicker$1({
                el: this.element,
                placeholder: this.options.placeholder,
                format: this.maskerMeta.format,
                showFix: this.options.showFix,
                beforeValueChangeFun: this.beforeValueChangeFun,
                timezone: this.timezone
            });
        }

        this.element['u.DateTimePicker'] = this.comp;

        if (!env$1.isMobile) {
            this.comp.on('select', function (event) {
                self.setValue(event.value);
            });
        }

        this.setStartField(this.startField);
        this.setEndField(this.endField);
        if (!env$1.isMobile) {
            // 校验
            this.comp.on('validate', function (event) {
                self.doValidate();
            });
        }
    },

    setEndField: function setEndField(endField) {
        var self = this;
        self.endField = endField;
        if (self.dataModel) {
            if (self.endField) {
                self.dataModel.ref(self.endField).subscribe(function (value) {
                    if (env$1.isMobile) {
                        var valueObj = date.getDateObj(value);
                        if (valueObj) {
                            self.resetDataObj(valueObj);
                        }
                        self.op.minDate = valueObj;
                        if (self.adapterType == 'date') {
                            $(self.element).mobiscroll().date(self.op);
                        } else {
                            $(self.element).mobiscroll().datetime(self.op);
                        }
                        var nowDate = date.getDateObj(self.dataModel.getValue(self.field));
                        if (nowDate) {
                            self.resetDataObj(nowDate);
                        }
                        if (nowDate && nowDate.getTime() > valueObj.getTime() && value) {
                            self.dataModel.setValue(self.field, '');
                        }
                    } else {
                        self.comp.setEndDate(value);
                        var nowDate = self.comp.date;
                        if (nowDate) {
                            self.resetDataObj(nowDate);
                        }
                        var valueObj = date.getDateObj(value);
                        if (valueObj) {
                            self.resetDataObj(valueObj);
                        }
                        if (nowDate && value && nowDate.getTime() > valueObj.getTime()) {
                            self.dataModel.setValue(self.field, '');
                        }
                    }
                });
            }

            if (self.endField) {
                var endValue = self.dataModel.getValue(self.endField);
                if (endValue) {
                    if (env$1.isMobile) {
                        self.op.minDate = date.getDateObj(endValue);
                        if (self.adapterType == 'date') {
                            $(self.element).mobiscroll().date(self.op);
                        } else {
                            $(self.element).mobiscroll().datetime(self.op);
                        }
                    } else {
                        self.comp.setEndDate(endValue);
                    }
                }
            }
        }
    },

    setStartField: function setStartField(startField) {
        var self = this;
        self.startField = startField;
        if (self.dataModel) {
            if (self.startField) {
                self.dataModel.ref(self.startField).subscribe(function (value) {
                    if (env$1.isMobile) {
                        value = date.getDateObj(value);

                        // var valueObj = self.setMobileStartDate(value, self.options.format);
                        var valueObj = value;
                        if (valueObj) {
                            self.resetDataObj(valueObj);
                        }
                        self.op.minDate = valueObj;
                        if (self.adapterType == 'date') {
                            $(self.element).mobiscroll().date(self.op);
                        } else {
                            $(self.element).mobiscroll().datetime(self.op);
                        }
                        var nowDate = date.getDateObj(self.dataModel.getValue(self.field));
                        if (nowDate) {
                            self.resetDataObj(nowDate);
                        }
                        if (nowDate && nowDate.getTime() < valueObj.getTime() && value) {
                            self.dataModel.setValue(self.field, '');
                        }
                    } else {
                        self.comp.setStartDate(value, self.options.format);
                        var nowDate = self.comp.date;
                        if (nowDate) {
                            self.resetDataObj(nowDate);
                        }
                        var valueObj = date.getDateObj(value);
                        if (valueObj) {
                            self.resetDataObj(valueObj);
                        }
                        if (nowDate && value && nowDate.getTime() < valueObj.getTime()) {
                            self.dataModel.setValue(self.field, '');
                        }
                    }
                });
            }
            if (self.startField) {
                var startValue = self.dataModel.getValue(self.startField);
                if (startValue) {
                    if (env$1.isMobile) {
                        startValue = date.getDateObj(startValue);
                        self.op.minDate = self.setMobileStartDate(startValue, self.options.format);
                        if (self.adapterType == 'date') {
                            $(self.element).mobiscroll().date(self.op);
                        } else {
                            $(self.element).mobiscroll().datetime(self.op);
                        }
                    } else {
                        self.comp.setStartDate(startValue, self.options.format);
                    }
                }
            }
        }
    },

    setMobileStartDate: function setMobileStartDate(startDate, type) {

        if (startDate) {
            switch (type) {
                case 'YYYY-MM':
                    startDate = date.add(startDate, 'M', 1);
                    break;
                case 'YYYY-MM-DD':
                    startDate = date.add(startDate, 'd', 1);
                    break;
            }
        }
        return startDate;
    },

    modelValueChange: function modelValueChange(value) {
        if (this.slice) return;
        this.trueValue = value;
        if (env$1.isMobile) {
            if (value) {
                value = date.format(value, this.options.format);
                $(this.element).scroller('setDate', date.getDateObj(value), true);
            } else {
                this.setShowValue('');
            }
        } else {
            this.comp.setDate(value);
        }
    },
    setFormat: function setFormat(format) {
        if (this.maskerMeta.format == format) return;
        this.options.format = format;
        this.maskerMeta.format = format;
        if (!env$1.isMobile) this.comp.setFormat(format);
        // this.formater = new $.DateFormater(this.maskerMeta.format);
        // this.masker = new DateTimeMasker(this.maskerMeta);
    },

    beforeSetValue: function beforeSetValue(value) {
        if (this.dataModel) {
            var valueObj = date.getDateObj(value);
            if (valueObj) {
                if (!(typeof this.timezone != 'undefined' && this.timezone != null && this.timezone != '')) {
                    this.resetDataObj(valueObj);
                }
            }
            if (this.startField) {
                var startValue = this.dataModel.getValue(this.startField);
                var startValueObj = date.getDateObj(startValue);
                if (startValueObj) {
                    if (!(typeof this.timezone != 'undefined' && this.timezone != null && this.timezone != '')) {
                        this.resetDataObj(startValueObj);
                    }
                }
                if (startValueObj && valueObj && valueObj.getTime() < startValueObj.getTime()) {
                    return;
                }
            }
            if (this.endField) {
                var endValue = this.dataModel.getValue(this.endField);
                var endValueObj = date.getDateObj(endValue);
                if (endValueObj) {
                    if (!(typeof this.timezone != 'undefined' && this.timezone != null && this.timezone != '')) {
                        this.resetDataObj(endValueObj);
                    }
                }
                if (endValueObj && valueObj && valueObj.getTime() > endValueObj.getTime()) {
                    return;
                }
            }
        }
        if (!(typeof this.timezone != 'undefined' && this.timezone != null && this.timezone != '')) {
            value = date.format(value, this.options.format);
        } else {
            value = value.getTime();
        }
        return value;
    },
    setEnable: function setEnable(enable) {
        if (enable === true || enable === 'true') {
            this.enable = true;
            if (env$1.isMobile) {
                this.element.removeAttribute('disabled');
            } else {
                this.comp._input.removeAttribute('readonly');
            }
            removeClass(this.element.parentNode, 'disablecover');
        } else if (enable === false || enable === 'false') {
            this.enable = false;
            if (env$1.isMobile) {
                this.element.setAttribute('disabled', 'disabled');
            } else {
                this.comp._input.setAttribute('readonly', 'readonly');
            }
            addClass(this.element.parentNode, 'disablecover');
        }
        if (!env$1.isMobile) this.comp.setEnable(enable);
    },

    resetDataObj: function resetDataObj(dataObj) {
        if (this.options.format.indexOf('h') < 0 && this.options.format.indexOf('H') < 0) {
            dataObj.setHours(0);
        }
        if (this.options.format.indexOf('m') < 0) {
            dataObj.setMinutes(0);
        }
        if (this.options.format.indexOf('s') < 0) {
            dataObj.setSeconds(0);
            dataObj.setMilliseconds(0);
        }
    }

});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: DateTimeAdapter,
    name: 'u-date'
});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: DateTimeAdapter,
    name: 'u-datetime'
});

/**
 * Module : Kero year adapter
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-10 12:40:46
 */

var YearAdapter = u.BaseAdapter.extend({
    init: function init() {
        var self = this;
        this.validType = 'year';

        this.comp = new Year({
            el: this.element,
            showFix: this.options.showFix
        });

        this.comp.on('valueChange', function (event) {
            self.slice = true;
            self.setValue(event.value);
            self.slice = false;
            //self.setValue(event.value);
        });
    },
    modelValueChange: function modelValueChange(value) {
        if (this.slice) return;
        this.comp.setValue(value);
    },
    setEnable: function setEnable(enable) {}
});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: YearAdapter,
    name: 'u-year'
});

/**
 * Module : Kero month
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-09 18:46:30
 */

var MonthAdapter = u.BaseAdapter.extend({
    init: function init() {
        var self = this;
        this.validType = 'month';

        this.comp = new Month({
            el: this.element,
            showFix: this.options.showFix
        });

        // ui影响datatable
        this.comp.on('valueChange', function (event) {
            // 防止循环
            self.slice = true;
            self.dataModel.setValue(self.field, event.value);
            self.slice = false;
            //self.setValue(event.value);
        });
        // datatable反影响ui

    },
    // 触发空间
    modelValueChange: function modelValueChange(value) {
        if (this.slice) return;
        this.comp.setValue(value);
    },
    setEnable: function setEnable(enable) {}
});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: MonthAdapter,
    name: 'u-month'
});

/**
 * Module : Kero yearmonth adapter
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-10 14:11:50
 */

var YearMonthAdapter = u.BaseAdapter.extend({
    init: function init() {
        var self = this;
        this.validType = 'yearmonth';

        this.comp = new YearMonth({
            el: this.element,
            showFix: this.options.showFix
        });

        this.comp.on('valueChange', function (event) {
            self.slice = true;
            self.dataModel.setValue(self.field, event.value);
            self.slice = false;
        });
    },
    modelValueChange: function modelValueChange(value) {
        if (this.slice) return;
        this.comp.setValue(value);
    },
    setEnable: function setEnable(enable) {}
});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: YearMonthAdapter,
    name: 'u-yearmonth'
});

/**
 * Module : Kero time adapter
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-10 12:40:46
 */

var TimeAdapter = u.BaseAdapter.extend({
    init: function init(options) {
        var self = this;
        this.validType = 'time';

        this.maskerMeta = core.getMaskerMeta('time') || {};
        this.maskerMeta.format = this.dataModel.getMeta(this.field, "format") || this.maskerMeta.format;

        if (this.options.type == 'u-clockpicker' && !env$1.isIE8) this.comp = new ClockPicker(this.element);else this.comp = new Time(this.element);
        var dataType = this.dataModel.getMeta(this.field, 'type');
        this.dataType = dataType || 'string';

        this.comp.on('valueChange', function (event) {
            var setValueFlag = false;
            self.slice = true;
            if (event.value == '') {
                self.dataModel.setValue(self.field, '');
            } else {
                var _date = self.dataModel.getValue(self.field);
                if (self.dataType === 'datetime') {
                    var valueArr = event.value.split(':');
                    //如果_date为空时赋值就无法赋值，所以为空时设置了个默认值
                    if (!_date) {
                        _date = "1970-01-01 00:00:00";
                        setValueFlag = true;
                    }
                    _date = date.getDateObj(_date);
                    if (!_date) {
                        self.dataModel.setValue(self.field, '');
                    } else {
                        if (event.value == (_date.getHours() < 10 ? '0' + _date.getHours() : _date.getHours()) + ':' + (_date.getMinutes() < 10 ? '0' + _date.getMinutes() : _date.getMinutes()) + ':' + (_date.getSeconds() < 10 ? '0' + _date.getSeconds() : _date.getSeconds())) {
                            if (!setValueFlag) {
                                self.slice = false;
                                return;
                            }
                        }
                        _date.setHours(valueArr[0]);
                        _date.setMinutes(valueArr[1]);
                        _date.setSeconds(valueArr[2]);
                        self.dataModel.setValue(self.field, u.date.format(_date, 'YYYY-MM-DD HH:mm:ss'));
                    }
                } else {
                    if (event.value == _date) return;
                    self.dataModel.setValue(self.field, event.value);
                }
            }

            self.slice = false;
            //self.setValue(event.value);
        });
    },
    modelValueChange: function modelValueChange(value) {
        if (this.slice) return;
        var compValue = '';
        if (this.dataType === 'datetime') {
            var _date = date.getDateObj(value);
            if (!_date) compValue = '';else compValue = (_date.getHours() < 10 ? '0' + _date.getHours() : _date.getHours()) + ':' + (_date.getMinutes() < 10 ? '0' + _date.getMinutes() : _date.getMinutes()) + ':' + (_date.getSeconds() < 10 ? '0' + _date.getSeconds() : _date.getSeconds());
        } else {
            compValue = value;
        }
        this.comp.setValue(compValue);
    },
    setEnable: function setEnable(enable) {}
});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: TimeAdapter,
    name: 'u-time'
});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: TimeAdapter,
    name: 'u-clockpicker'
});

/**
 * Module : Kero string adapter
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-09 20:12:42
 */

var StringAdapter = u.BaseAdapter.extend({
    init: function init() {
        var self = this;
        this.element = this.element.nodeName === 'INPUT' ? this.element : this.element.querySelector('input');
        if (!this.element) {
            throw new Error('not found INPUT element, u-meta:' + JSON.stringify(this.options));
        }
        this.validType = this.options['validType'] || 'string';
        this.minLength = this.getOption('minLength');
        this.maxLength = this.getOption('maxLength');
        var placeholder = this.options['placeholder'];
        if (placeholder) this.element.placeholder = placeholder;

        on$1(this.element, 'focus', function () {
            if (self.enable) {
                self.setShowValue(self.getValue());
                try {
                    var e = event.srcElement;
                    var r = e.createTextRange();
                    r.moveStart('character', e.value.length);
                    r.collapse(true);
                    r.select();
                } catch (e) {}
            }
        });

        on$1(this.element, 'blur', function (e) {
            if (self.enable) {
                if (!self.doValidate().passed && self._needClean()) {
                    if (self.required && (self.element.value === null || self.element.value === undefined || self.element.value === '')) {
                        // 因必输项清空导致检验没通过的情况
                        self.setValue('');
                    } else {
                        self.element.value = self.getShowValue();
                    }
                } else self.setValue(self.element.value);
            }
        });
    },
    hide: function hide() {
        var self = this;
        if (self.enable) {
            if (!self.doValidate().passed && self._needClean()) {
                if (self.required && (self.element.value === null || self.element.value === undefined || self.element.value === '')) {
                    // 因必输项清空导致检验没通过的情况
                    self.setValue('');
                } else {
                    self.element.value = self.getShowValue();
                }
            } else self.setValue(self.element.value);
        }
    }
});
if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: StringAdapter,
    name: 'string'
});

/**
 * Module : Kero integer
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-09 18:29:59
 */

var IntegerAdapter = u.BaseAdapter.extend({
    init: function init() {
        var self = this;
        this.element = this.element.nodeName === 'INPUT' ? this.element : this.element.querySelector('input');
        if (!this.element) {
            throw new Error('not found INPUT element, u-meta:' + JSON.stringify(this.options));
        }
        var placeholder = this.options['placeholder'];
        if (placeholder) this.element.placeholder = placeholder;
        this.maskerMeta = core.getMaskerMeta('integer') || {};
        this.validType = this.options['validType'] || 'integer';
        this.maskerMeta.precision = this.getOption('precision') || this.maskerMeta.precision;
        this.max = this.options['max'];
        this.min = this.options['min'];
        this.maxNotEq = this.options['maxNotEq'];
        this.minNotEq = this.options['minNotEq'];
        this.maxLength = this.options['maxLength'] ? options['maxLength'] : 25;
        this.minLength = this.options['mixLength'] ? options['mixLength'] : 0;
        if (this.dataModel) {
            this.min = this.dataModel.getMeta(this.field, "min") !== undefined ? this.dataModel.getMeta(this.field, "min") : this.min;
            this.max = this.dataModel.getMeta(this.field, "max") !== undefined ? this.dataModel.getMeta(this.field, "max") : this.max;
            this.minNotEq = this.dataModel.getMeta(this.field, "minNotEq") !== undefined ? this.dataModel.getMeta(this.field, "minNotEq") : this.minNotEq;
            this.maxNotEq = this.dataModel.getMeta(this.field, "maxNotEq") !== undefined ? this.dataModel.getMeta(this.field, "maxNotEq") : this.maxNotEq;
            this.minLength = isNumber$1(this.dataModel.getMeta(this.field, "minLength")) ? this.dataModel.getMeta(this.field, "minLength") : this.minLength;
            this.maxLength = isNumber$1(this.dataModel.getMeta(this.field, "maxLength")) ? this.dataModel.getMeta(this.field, "maxLength") : this.maxLength;
        }
        this.formater = new NumberFormater(this.maskerMeta.precision);
        this.masker = new NumberMasker(this.maskerMeta);
        on$1(this.element, 'focus', function () {
            if (self.enable) {
                self.setShowValue(self.getValue());
                try {
                    var e = event.srcElement;
                    var r = e.createTextRange();
                    r.moveStart('character', e.value.length);
                    r.collapse(true);
                    r.select();
                } catch (e) {}
            }
        });

        on$1(this.element, 'blur', function () {
            if (self.enable) {
                if (!self.doValidate().passed && self._needClean()) {
                    if (self.required && (self.element.value === null || self.element.value === undefined || self.element.value === '')) {
                        // 因必输项清空导致检验没通过的情况
                        self.setValue('');
                    } else {
                        self.element.value = self.getShowValue();
                    }
                } else self.setValue(self.element.value);
            }
        });

        on$1(this.element, 'keydown', function (e) {
            if (self.enable) {
                var code = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
                if (e.ctrlKey && (e.keyCode == 67 || e.keyCode == 86)) {
                    //复制粘贴
                    return true;
                }
                if (!(code >= 48 && code <= 57 || code >= 96 && code <= 105 || code == 37 || code == 39 || code == 8 || code == 46)) {
                    //阻止默认浏览器动作(W3C)
                    if (e && e.preventDefault) e.preventDefault();
                    //IE中阻止函数器默认动作的方式
                    else window.event.returnValue = false;
                    return false;
                }
            }
        });
    },
    hide: function hide() {
        var self = this;
        self.element.value = (self.element.value + '').replace(/\,/g, '');
        if (self.enable) {
            if (!self.doValidate().passed && self._needClean()) {
                if (self.required && (self.element.value === null || self.element.value === undefined || self.element.value === '')) {
                    // 因必输项清空导致检验没通过的情况
                    self.setValue('');
                } else {
                    self.element.value = self.getShowValue();
                }
            } else self.setValue(self.element.value);
        }
    }
});
if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: IntegerAdapter,
    name: 'integer'
});

/**
 * Module : Kero percent
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-10 10:33:09
 */

var RadioAdapter = u.BaseAdapter.extend({
    init: function init() {
        var self = this;
        this.dynamic = false;
        this.otherValue = this.options['otherValue'] || '其他';
        if (this.options['datasource'] || this.options['hasOther']) {
            // 存在datasource或者有其他选项，将当前dom元素保存，以后用于复制新的dom元素
            if (env$1.isIE) {
                this.radioTemplateHTML = this.element.innerHTML;
            } else {
                this.radioTemplateArray = [];
                for (var i = 0, count = this.element.childNodes.length; i < count; i++) {
                    this.radioTemplateArray.push(this.element.childNodes[i]);
                }
            }
        }
        if (this.options['datasource']) {
            this.dynamic = true;
            this.datasource = getJSObject(this.viewModel, this.options['datasource']);
            if (this.datasource) this.setComboData(this.datasource);
        } else {
            this.comp = new Radio(this.element);
            this.element['u.Radio'] = this.comp;
            this.eleValue = this.comp._btnElement.value;

            this.comp.on('change', function (event) {
                if (self.slice) return;
                var modelValue = self.dataModel.getValue(self.field);
                //var valueArr = modelValue == '' ?  [] : modelValue.split(',');
                if (self.comp._btnElement.checked) {
                    self.dataModel.setValue(self.field, self.eleValue);
                }
            });
        }

        // 如果存在其他
        if (this.options['hasOther']) {
            var node = null;
            if (env$1.isIE) {
                var nowHtml = this.element.innerHTML;
                this.element.innerHTML = nowHtml + this.radioTemplateHTML;
            } else {
                for (var j = 0; j < this.radioTemplateArray.length; j++) {
                    this.element.appendChild(this.radioTemplateArray[j].cloneNode(true));
                }
            }

            var LabelS = this.element.querySelectorAll('.u-radio');
            self.lastLabel = LabelS[LabelS.length - 1];
            var allRadioS = this.element.querySelectorAll('[type=radio]');
            self.lastRadio = allRadioS[allRadioS.length - 1];
            var nameDivs = this.element.querySelectorAll('.u-radio-label');
            self.lastNameDiv = nameDivs[nameDivs.length - 1];
            self.lastNameDiv.innerHTML = '其他';
            self.otherInput = makeDOM('<input type="text" disabled style="vertical-align: middle;line-height: normal;width: 80%">');
            self.lastNameDiv.parentNode.appendChild(self.otherInput);
            self.lastRadio.value = '';

            var comp;
            if (self.lastLabel['u.Radio']) {
                comp = self.lastLabel['u.Radio'];
            } else {
                comp = new Radio(self.lastLabel);
            }
            self.lastLabel['u.Radio'] = comp;
            self.otherComp = comp;
            comp.on('change', function () {
                if (comp._btnElement.checked) {
                    if (self.otherInput.value) {
                        self.dataModel.setValue(self.field, self.otherInput.value);
                    } else {
                        self.dataModel.setValue(self.field, self.otherValue);
                    }
                    // 选中后可编辑
                    comp.element.querySelectorAll('input[type="text"]').forEach(function (ele) {
                        ele.removeAttribute('disabled');
                    });
                } else {
                    comp.element.querySelectorAll('input[type="text"]').forEach(function (ele) {
                        ele.setAttribute('disabled', true);
                    });
                }
            });

            on$1(self.otherInput, 'blur', function (e) {
                self.otherComp.trigger('change');
            });
            on$1(self.otherInput, 'click', function (e) {
                stopEvent(e);
            });
        }

        this.dataModel.ref(this.field).subscribe(function (value) {
            self.modelValueChange(value);
        });
    },
    setComboData: function setComboData(comboData) {

        var self = this;
        this.datasource = comboData;
        this.element.innerHTML = '';
        if (env$1.isIE) {
            var htmlStr = '';
            for (var i = 0, len = comboData.length; i < len; i++) {
                htmlStr += this.radioTemplateHTML;
            }
            this.element.innerHTML = htmlStr;
        } else {
            for (var i = 0, len = comboData.length; i < len; i++) {
                for (var j = 0; j < this.radioTemplateArray.length; j++) {
                    this.element.appendChild(this.radioTemplateArray[j].cloneNode(true));
                }
                //this.radioTemplate.clone().appendTo(this.element)
            }
        }

        var allRadio = this.element.querySelectorAll('[type=radio]');
        var allName = this.element.querySelectorAll('.u-radio-label');
        for (var k = 0; k < allRadio.length; k++) {
            allRadio[k].value = comboData[k].pk || comboData[k].value;
            allName[k].innerHTML = comboData[k].name;
        }

        this.radioInputName = '';
        if (allRadio.length > 0) {
            this.radioInputName = allRadio[0].name;
        }

        this.element.querySelectorAll('.u-radio').forEach(function (ele) {
            var comp = new Radio(ele);
            ele['u.Radio'] = comp;

            comp.on('change', function (event) {
                if (comp._btnElement.checked) {
                    self.dataModel.setValue(self.field, comp._btnElement.value);
                }
                // 其他元素input输入框不能进行编辑
                var allChild = comp.element.parentNode.children;
                var siblingAry = [];
                for (var i = 0; i < allChild.length; i++) {
                    if (allChild[i] == comp.element) {} else {
                        siblingAry.push(allChild[i]);
                    }
                }
                siblingAry.forEach(function (children) {
                    var childinput = children.querySelectorAll('input[type="text"]');
                    if (childinput) {
                        childinput.forEach(function (inputele) {
                            inputele.setAttribute('disabled', 'true');
                        });
                    }
                });
            });
        });
    },

    modelValueChange: function modelValueChange(value) {
        if (this.slice) return;
        var fetch = false,
            self = this;
        if (this.dynamic) {
            if (this.datasource) {
                this.showValue = '';
                this.trueValue = value;
                this.element.querySelectorAll('.u-radio').forEach(function (ele) {
                    var comp = ele['u.Radio'];
                    if (comp) {
                        var inptuValue = comp._btnElement.value;
                        if (inptuValue && inptuValue == value) {
                            fetch = true;
                            addClass(comp.element, 'is-checked');
                            comp._btnElement.click();
                            var nameSpan = ele.querySelector('.u-radio-label');
                            var showValue = $(nameSpan).text();
                            if (showValue) {
                                self.showValue = showValue;
                            }
                        } else {
                            removeClass(comp.element, 'is-checked');
                        }
                    }
                });
            }
        } else {
            if (this.eleValue == value) {
                fetch = true;
                this.slice = true;
                addClass(this.comp.element, 'is-checked');
                //this.comp._btnElement.click(); // https://github.com/iuap-design/tinper.org/issues/41
                this.slice = false;
            }
        }
        if (this.options.hasOther && !fetch && value) {
            this.showValue = value;
            if (!this.enable) {
                this.lastRadio.removeAttribute('disabled');
            }
            u.addClass(this.lastLabel, 'is-checked');
            this.lastRadio.checked = true;
            if (value != this.otherValue) {
                this.otherInput.value = value;
            }
            this.lastRadio.removeAttribute('disabled');
            this.otherInput.removeAttribute('disabled');
            if (!this.enable) {
                this.lastRadio.setAttribute('disabled', true);
            }
        }
    },

    setEnable: function setEnable(enable) {
        this.enable = enable === true || enable === 'true';
        if (this.dynamic) {
            if (this.datasource) {
                if (this.otherInput && !this.enable) {
                    this.otherInput.setAttribute('disabled', true);
                }
                this.element.querySelectorAll('.u-radio').forEach(function (ele) {
                    var comp = ele['u.Radio'];
                    if (comp) {
                        if (enable === true || enable === 'true') {
                            comp.enable();
                        } else {
                            comp.disable();
                        }
                    }
                });
            }
        } else {
            if (this.enable) {
                this.comp.enable();
            } else {
                this.comp.disable();
            }
        }
    }
});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: RadioAdapter,
    name: 'u-radio'
});

/**
 * Module : Kero url adapter
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-10 13:51:26
 */
var UrlAdapter = StringAdapter.extend({
    init: function init() {

        UrlAdapter.superclass.init.apply(this);
        this.validType = 'url';
        /*
         * 因为需要输入，因此不显示为超链接
         */
    },
    // 如果enable为false则显示<a>标签
    setEnable: function setEnable(enable) {
        if (enable === true || enable === 'true') {
            this.enable = true;
            this.element.removeAttribute('readonly');
            removeClass(this.element.parentNode, 'disablecover');
            if (this.aDom) {
                this.aDom.style.display = 'none';
            }
        } else if (enable === false || enable === 'false') {
            this.enable = false;
            this.element.setAttribute('readonly', 'readonly');
            addClass(this.element.parentNode, 'disablecover');
            if (!this.aDom) {
                this.aDom = makeDOM('<div style="position:absolute;background:#fff;z-index:999;"><a href="' + this.trueValue + '" target="_blank" style="position:absolue;">' + this.trueValue + '</a></div>');
                var left = this.element.offsetLeft;
                var width = this.element.offsetWidth;
                var top = this.element.offsetTop;
                var height = this.element.offsetHeight;
                this.aDom.style.left = left + 'px';
                this.aDom.style.width = width + 'px';
                this.aDom.style.top = top + 'px';
                this.aDom.style.height = height + 'px';
                this.element.parentNode.appendChild(this.aDom);
            }
            var $a = $(this.aDom).find('a');
            $a.href = this.trueValue;
            $a.innerHTML = this.trueValue;
            this.aDom.style.display = 'block';
        }
    }
});
if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: UrlAdapter,
    name: 'url'
});

/**
 * Module : Kero password
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-09 19:19:33
 */

/**
 * 密码控件
 */
var PassWordAdapter = StringAdapter.extend({
    init: function init() {
        var oThis = this;
        StringAdapter.prototype.init.call(this);
        if (env$1.isIE8) {
            var outStr = this.element.outerHTML;
            var l = outStr.length;
            outStr = outStr.substring(0, l - 1) + ' type="password"' + outStr.substring(l - 1);
            var newEle = document.createElement(outStr);
            var parent = this.element.parentNode;
            parent.insertBefore(newEle, this.element.nextSibling);
            parent.removeChild(this.element);
            this.element = newEle;
        } else {
            this.element.type = "password";
        }
        oThis.element.title = '';
        this._element = this.element.parentNode;
        this.span = this._element.querySelector("span");
        if (env$1.isIE8) {
            this.span.style.display = 'none';
        }
        if (this.span) {
            on$1(this.span, 'click', function () {
                if (oThis.element.type == 'password') {
                    oThis.element.type = 'text';
                } else {
                    oThis.element.type = 'password';
                }
            });
        }
    },
    setShowValue: function setShowValue(showValue) {
        this.showValue = showValue;
        this.element.value = showValue;
        this.element.title = '';
    }
});
if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: PassWordAdapter,
    name: 'password'
});

/**
 * Module : Kero percent
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-09 20:02:50
 */
/**
 * 百分比控件
 */
var PercentAdapter = FloatAdapter.extend({
    init: function init() {
        FloatAdapter.prototype.init.call(this);
        this.validType = 'float';
        this.maskerMeta = core.getMaskerMeta('percent') || {};
        this.maskerMeta.precision = this.getOption('precision') || this.maskerMeta.precision;
        if (this.maskerMeta.precision) {
            this.maskerMeta.precision = parseInt(this.maskerMeta.precision) + 2;
        }
        this.formater = new NumberFormater(this.maskerMeta.precision);
        this.masker = new PercentMasker(this.maskerMeta);
    }
});
if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: PercentAdapter,
    name: 'percent'
});

/**
 * Module : Kero Grid Adapter
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-09 16:17:17
 */

var GridAdapter = u.BaseAdapter.extend({
    mixins: [],
    init: function init() {
        var options = this.options,

        // 初始options中包含grid的属性设置，还需要增加dataSource、columns、transMap以及事件处理
        opt = options || {},
            viewModel = this.viewModel;
        var element = this.element;

        this.id = opt['id'];

        var oThis = this;
        var compDiv = null;
        var comp = null;
        this.dataTable = getJSObject(viewModel, options["data"]);
        this.element = element;
        this.$element = $(element);
        this.editComponentDiv = {};
        this.editComponent = {};
        this.id = options['id'];
        this.gridOptions = options;

        // 在html中将函数类参数进行处理
        this.gridOptions.onBeforeRowSelected = getFunction(viewModel, this.gridOptions.onBeforeRowSelected);
        this.gridOptions.onRowSelected = getFunction(viewModel, this.gridOptions.onRowSelected);
        this.gridOptions.onBeforeRowUnSelected = getFunction(viewModel, this.gridOptions.onBeforeRowUnSelected);
        this.gridOptions.onRowUnSelected = getFunction(viewModel, this.gridOptions.onRowUnSelected);
        this.gridOptions.onBeforeAllRowSelected = getFunction(viewModel, this.gridOptions.onBeforeAllRowSelected);
        this.gridOptions.onAllRowSelected = getFunction(viewModel, this.gridOptions.onAllRowSelected);
        this.gridOptions.onBeforeAllRowUnSelected = getFunction(viewModel, this.gridOptions.onBeforeAllRowUnSelected);
        this.gridOptions.onAllRowUnSelected = getFunction(viewModel, this.gridOptions.onAllRowUnSelected);
        this.gridOptions.onBeforeRowFocus = getFunction(viewModel, this.gridOptions.onBeforeRowFocus);
        this.gridOptions.onRowFocus = getFunction(viewModel, this.gridOptions.onRowFocus);
        this.gridOptions.onBeforeRowUnFocus = getFunction(viewModel, this.gridOptions.onBeforeRowUnFocus);
        this.gridOptions.onRowUnFocus = getFunction(viewModel, this.gridOptions.onRowUnFocus);
        this.gridOptions.onDblClickFun = getFunction(viewModel, this.gridOptions.onDblClickFun);
        this.gridOptions.onBeforeValueChange = getFunction(viewModel, this.gridOptions.onBeforeValueChange);
        this.gridOptions.onValueChange = getFunction(viewModel, this.gridOptions.onValueChange);
        this.gridOptions.onBeforeClickFun = getFunction(viewModel, this.gridOptions.onBeforeClickFun);
        this.gridOptions.onBeforeEditFun = getFunction(viewModel, this.gridOptions.onBeforeEditFun);
        this.gridOptions.onRowHover = getFunction(viewModel, this.gridOptions.onRowHover);
        this.gridOptions.afterCreate = getFunction(viewModel, this.gridOptions.afterCreate);
        this.gridOptions.onSortFun = getFunction(viewModel, this.gridOptions.onSortFun);
        this.gridOptions.filterDataFun = getFunction(viewModel, this.gridOptions.filterDataFun);
        this.gridOptions.onTreeExpandFun = getFunction(viewModel, this.gridOptions.onTreeExpandFun);

        /*扩展onBeforeEditFun，如果点击的是单选或者复选的话则不执行原有的编辑处理，直接通过此js进行处理*/
        var customOnBeforeEditFun = this.gridOptions.onBeforeEditFun;
        var newOnBeforeEditFun = function newOnBeforeEditFun(obj) {
            var colIndex = obj.colIndex;
            var $tr = obj.$tr;

            if ($($tr.find('td')[colIndex]).find('[type=radio]').length > 0 || $($tr.find('td')[colIndex]).find('[type=checkbox]').length > 0) {
                return false;
            } else {
                if (typeof customOnBeforeEditFun == 'function') {
                    return customOnBeforeEditFun(obj);
                } else {
                    return true;
                }
            }
        };
        this.gridOptions.onBeforeEditFun = newOnBeforeEditFun;
        /*
         * 处理column参数  item
         * div子项div存储column信息
         */
        var columns = [];
        $("div", this.$element).each(function () {
            var ops = $(this).attr('options');
            if (typeof ops == "undefined") var column = eval("(" + ops + ")");else var column = JSON.parse(ops);
            // 处理精度，以dataTable的精度为准

            /*处理editType*/
            var eType = getFunction(viewModel, column.editType);
            var rType = getFunction(viewModel, column.renderType);
            var afterEType = getFunction(viewModel, column.afterEType);
            var afterRType = getFunction(viewModel, column.afterRType);
            var sumRenderType = getFunction(viewModel, column.sumRenderType);
            var groupSumRenderType = getFunction(viewModel, column.groupSumRenderType);
            column.sumRenderType = sumRenderType;
            column.groupSumRenderType = groupSumRenderType;
            var eOptions = {};
            if (column.editOptions) {
                if (typeof column.editOptions == "undefined") var eOptions = eval("(" + column.editOptions + ")");else var eOptions = column.editOptions;
            }
            eOptions.data = options['data'];
            eOptions.field = column['field'];
            // 默认按照string处理
            if (!eType) eType = 'string';
            if (eType == 'number') // 兼容之前版本
                eType = 'integer';
            if (eType == 'string' || eType == 'integer' || eType == 'checkbox' || eType == 'combo' || eType == 'radio' || eType == 'float' || eType == 'currency' || eType == 'datetime' || eType == 'year' || eType == 'month' || eType == 'yearmonth' || eType == 'date' || eType == 'time' || eType == 'url' || eType == 'password' || eType == 'percent' || eType == 'phoneNumber' || eType == 'landLine' || eType == 'textArea') {
                oThis.createDefaultEdit(eType, eOptions, options, viewModel, column);
                column.editType = function (obj) {
                    if (oThis.editComponentDiv[column.field] && oThis.editComponentDiv[column.field][0].childNodes.length > 0) {} else {
                        //IE8有问题，所以需要重新创建div,将上面的代码直接拷贝
                        oThis.createDefaultEdit(eType, eOptions, options, viewModel, column);
                    }
                    var comp = oThis.editComponent[column.field];
                    var rowId = obj.rowObj['$_#_@_id'];
                    var row = oThis.dataTable.getRowByRowId(rowId);
                    var index = oThis.dataTable.getRowIndex(row);
                    if (comp) {
                        comp.options.rowIndex = index;
                    }
                    if (!comp) {
                        $(obj.element).parent().focus();
                        return;
                    }
                    obj.element.innerHTML = '';
                    var row = oThis.getDataTableRow(obj.rowObj);
                    $(obj.element).append(oThis.editComponentDiv[column.field]);

                    if (comp.required) {
                        $(obj.element).parent().parent().find('.u-grid-edit-mustFlag').show();
                    }

                    // checkbox 类型  此段逻辑不知道是什么，暂时注释掉
                    // if($Div.find('.checkbox').length > 0) {
                    // 	$Div.closest('.u-grid-edit-div').css({'position': 'absolute', 'left': '83px'});
                    // 	$Div.closest('.u-grid-edit-whole-div').find('.u-grid-edit-label').css({'margin-left': '112px', 'text-align': 'left'})
                    // }
                    $(obj.element).parent().focus();
                    if (comp && comp.modelValueChange) {
                        setTimeout(function () {
                            comp.modelValueChange(obj.value);
                        });
                    }

                    obj.gridObj.editComp = comp;

                    // form也按照showFix为true处理，如果有问题则调整组件显示
                    // if(obj.gridObj.options.editType == 'form'){
                    // 	//form默认为false
                    // 	try{
                    // 		comp.options.showFix = false;
                    // 	}catch(e){

                    // 	}
                    // 	try{
                    // 		comp.comp.options.showFix = false;
                    // 	}catch(e){

                    // 	}
                    // }else{
                    // 	try{
                    // 		comp.options.showFix = true;
                    // 	}catch(e){

                    // 	}
                    // 	try{
                    // 		comp.comp.options.showFix = true;
                    // 	}catch(e){

                    // 	}
                    // }

                    // 根据惊道需求增加editype之后的处理,此处只针对grid.js中的默认eType进行处理，非默认通过eType进行处理
                    if (typeof afterEType == 'function') {
                        afterEType.call(this, obj);
                    }
                };
            } else if (typeof eType == 'function') {
                column.editType = eType;
            }

            if (rType == 'booleanRender') {
                column.renderType = function (obj) {

                    var grid = obj.gridObj;
                    var datatable = grid.dataTable;
                    var rowId = obj.row.value['$_#_@_id'];
                    var row = datatable.getRowByRowId(rowId);
                    var checkStr = '',
                        disableStr = '';

                    if (obj.value == 'Y' || obj.value == 'true') {
                        checkStr = ' is-checked';
                    }
                    if (grid.options.editType == 'form') {
                        disableStr = ' is-disabled';
                    }
                    var htmlStr = '<label class="u-checkbox is-upgraded ' + checkStr + disableStr + '">' + '<input type="checkbox" class="u-checkbox-input">' + '<span class="u-checkbox-label"></span>' + '<span class="u-checkbox-focus-helper"></span><span class="u-checkbox-outline"><span class="u-checkbox-tick-outline"></span></span>' + '</label>';

                    obj.element.innerHTML = htmlStr;

                    $(obj.element).find('input').on('click', function (e) {
                        $(this).parent().toggleClass('is-checked');
                        if (!obj.gridObj.options.editable) {
                            stopEvent(e);
                            return false;
                        }
                        if ($(this).parent().hasClass('is-checked')) {
                            this.checked = true;
                        } else {
                            this.checked = false;
                        }
                        var value = this.checked ? "Y" : "N";
                        var column = obj.gridCompColumn;
                        var field = column.options.field;
                        row.setValue(field, value);
                    });

                    // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                    if (typeof afterRType == 'function') {
                        afterRType.call(this, obj);
                    }
                };
                // 如果是booleanRender并且没有设置eType则设置eType为空方法
                if (!column.eType && !column.editable) {
                    column.editable = false;
                }
            } else if (rType == 'disableBooleanRender') {
                column.renderType = function (obj) {

                    var grid = obj.gridObj;
                    var datatable = grid.dataTable;
                    var rowId = obj.row.value['$_#_@_id'];
                    var row = datatable.getRowByRowId(rowId);
                    var checkStr = '',
                        disableStr = '';

                    if (obj.value == 'Y' || obj.value == 'true') {
                        checkStr = 'is-checked';
                    }
                    disableStr = ' is-disabled';
                    var htmlStr = '<label class="u-checkbox is-upgraded ' + checkStr + disableStr + '">' + '<input type="checkbox" class="u-checkbox-input">' + '<span class="u-checkbox-label"></span>' + '<span class="u-checkbox-focus-helper"></span><span class="u-checkbox-outline"><span class="u-checkbox-tick-outline"></span></span>' + '</label>';

                    obj.element.innerHTML = htmlStr;

                    // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                    if (typeof afterRType == 'function') {
                        afterRType.call(this, obj);
                    }
                };
                // 如果是booleanRender并且没有设置eType则设置eType为空方法
                if (!column.eType && !column.editable) {
                    column.editable = false;
                }
            } else if (rType == 'switchRender') {
                column.renderType = function (obj) {

                    var grid = obj.gridObj;
                    var datatable = grid.dataTable;
                    var rowId = obj.row.value['$_#_@_id'];
                    var row = datatable.getRowByRowId(rowId);
                    var checkStr = '',
                        disableStr = '';

                    if (obj.value == 'Y' || obj.value == 'true') {
                        checkStr = 'checked';
                    }
                    disableStr = ' is-disabled';
                    var htmlStr = '<label class="u-switch">' + ' <input type="checkbox"  class="u-switch-input" ' + checkStr + '>' + ' <span class="u-switch-label"></span>' + '</label>';

                    obj.element.innerHTML = htmlStr;
                    var comp = new u.Switch($(obj.element).find('label')[0]);
                    comp.on('change', function (event) {
                        var column = obj.gridCompColumn;
                        var field = column.options.field;
                        if (event.isChecked) {
                            row.setValue(field, 'Y');
                        } else {
                            row.setValue(field, 'N');
                        }
                    });

                    // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                    if (typeof afterRType == 'function') {
                        afterRType.call(this, obj);
                    }
                };
            } else if (rType == 'integerRender') {
                column.renderType = function (obj) {
                    var grid = obj.gridObj;
                    var column = obj.gridCompColumn;
                    var field = column.options.field;
                    obj.element.innerHTML = obj.value;
                    /*设置header为right*/
                    $('#' + grid.options.id + '_header_table').find('th[field="' + field + '"]').css('text-align', 'right');
                    $(obj.element).css('text-align', 'right');
                    $(obj.element).css('color', '#e33c37');
                    $(obj.element).find('.u-grid-header-link').css('padding-right', '3em');
                    // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                    if (typeof afterRType == 'function') {
                        afterRType.call(this, obj);
                    }
                };
            } else if (rType == 'currencyRender') {
                column.renderType = function (obj) {
                    //需要处理精度

                    var grid = obj.gridObj;
                    var column = obj.gridCompColumn;
                    var field = column.options.field;
                    var rowIndex = obj.rowIndex;
                    var datatable = grid.dataTable;
                    var rowId = $(grid.dataSourceObj.rows[rowIndex].value).attr("$_#_@_id");
                    var row = datatable.getRowByRowId(rowId);
                    if (!row) return;
                    var rprec = row.getMeta(field, 'precision');
                    var maskerMeta = core.getMaskerMeta('currency') || {};
                    var precision = typeof parseFloat(rprec) == 'number' ? rprec : maskerMeta.precision;
                    maskerMeta.precision = precision;

                    maskerMeta.precision = precision || maskerMeta.precision;
                    var formater = new NumberFormater(maskerMeta.precision);
                    var masker = new CurrencyMasker(maskerMeta);
                    var svalue = masker.format(formater.format(obj.value)).value;
                    obj.element.innerHTML = svalue;
                    /*设置header为right*/
                    $('#' + grid.options.id + '_header_table').find('th[field="' + field + '"]').css('text-align', 'right');
                    $(obj.element).css('text-align', 'right');
                    $(obj.element).css('color', '#e33c37');
                    $(obj.element).find('.u-grid-header-link').css('padding-right', '3em');
                    $(obj.element).attr('title', svalue);

                    // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                    if (typeof afterRType == 'function') {
                        afterRType.call(this, obj);
                    }
                };
            } else if (rType == 'floatRender') {
                column.renderType = function (obj) {
                    //需要处理精度

                    var grid = obj.gridObj;
                    var column = obj.gridCompColumn;
                    var field = column.options.field;
                    var rowIndex = obj.rowIndex;
                    var datatable = grid.dataTable;
                    var rowId = $(grid.dataSourceObj.rows[rowIndex].value).attr("$_#_@_id");
                    var row = datatable.getRowByRowId(rowId);
                    if (!row) return;
                    var rprec = row.getMeta(field, 'precision') || column.options.precision;
                    var maskerMeta = core.getMaskerMeta('float') || {};
                    var precision = typeof parseFloat(rprec) == 'number' ? rprec : maskerMeta.precision;
                    maskerMeta.precision = precision;

                    var formater = new NumberFormater(maskerMeta.precision);
                    var masker = new NumberMasker(maskerMeta);
                    var svalue = masker.format(formater.format(obj.value)).value;
                    obj.element.innerHTML = svalue;
                    /*设置header为right*/
                    $('#' + grid.options.id + '_header_table').find('th[field="' + field + '"]').css('text-align', 'right');
                    $(obj.element).css('text-align', 'right');
                    $(obj.element).css('color', '#e33c37');
                    $(obj.element).find('.u-grid-header-link').css('padding-right', '3em');
                    $(obj.element).attr('title', svalue);

                    // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                    if (typeof afterRType == 'function') {
                        afterRType.call(this, obj);
                    }
                };
            } else if (rType == 'comboRender') {
                column.renderType = function (obj) {

                    //需要将key转化为name
                    var ds = getJSObject(viewModel, eOptions['datasource']);
                    if (!ds) ds = getJSObject(viewModel, column['datasource']);
                    obj.element.innerHTML = '';
                    if (nameArr) {
                        nameArr.length = 0;
                    }

                    var valArr = obj.value.split(',');
                    var nameArr = [];
                    for (var i = 0, length = ds.length; i < length; i++) {
                        for (var j = 0; j < valArr.length; j++) {
                            if (valArr[j] != '' && valArr[j] != null && typeof valArr[j] != 'undefined' && ds[i].value == valArr[j]) {
                                nameArr.push(ds[i].name);
                            }
                        }
                    }
                    var svalue = nameArr.toString();
                    if (!svalue) svalue = obj.value;
                    obj.element.innerHTML = svalue;
                    $(obj.element).attr('title', svalue);

                    // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                    if (typeof afterRType == 'function') {
                        afterRType.call(this, obj);
                    }
                };
            } else if (rType == 'dateRender') {
                //通过grid的dataType为Date format处理
                column.renderType = function (obj) {
                    var svalue = dateRender(obj.value, obj.gridCompColumn.options['format']);
                    obj.element.innerHTML = svalue;
                    $(obj.element).attr('title', svalue);
                    // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                    if (typeof afterRType == 'function') {
                        afterRType.call(this, obj);
                    }
                };
            } else if (rType == 'dateTimeRender') {
                //通过grid的dataType为DateTime format处理
                column.renderType = function (obj) {
                    var svalue = dateTimeRender(obj.value);
                    obj.element.innerHTML = svalue;
                    $(obj.element).attr('title', svalue);

                    // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                    if (typeof afterRType == 'function') {
                        afterRType.call(this, obj);
                    }
                };
            } else if (typeof rType == 'function') {
                column.renderType = rType;
            } else if (rType == 'radioRender') {
                column.renderType = function (params) {
                    //debugger
                    var ds = getJSObject(viewModel, eOptions['datasource']);
                    if (!ds) ds = getJSObject(viewModel, column['datasource']);
                    var value = params.value;
                    var compDiv = $('<div class="u-grid-edit-item-radio"></div>');
                    var checkStr = '';

                    params.element.innerHTML = "";
                    $(params.element).append(compDiv);

                    for (var i = 0; i < ds.length; i++) {
                        // if (ds[i].value == value) compDiv.append('<input name="' + column.field + params.row.value['$_#_@_id'] + '" type="radio" value="' + ds[i].value + '" checked="true" /><i data-role="name">' + ds[i].name + '</i>');else compDiv.append('<input name="' + column.field + params.row.value['$_#_@_id'] + '" type="radio" value="' + ds[i].value + '"/><i data-role="name">' + ds[i].name + '</i>');
                        // 修改处
                        checkStr = "";
                        if (ds[i].value == value) {
                            checkStr = "is-checked";
                        }
                        var htmlStr = '<label class="u-radio is-upgraded ' + checkStr + '" for="' + column.field + params.row.value['$_#_@_id'] + i + '" >' + '<input type="radio" id="' + column.field + params.row.value['$_#_@_id'] + i + '" class="u-radio-button" name="' + column.field + params.row.value['$_#_@_id'] + '" value="' + ds[i].value + '">' + '<span class="u-radio-label">' + ds[i].name + '</span>' + '<span class="u-radio-outer-circle"></span><span class="u-radio-inner-circle"></span>' + '</label>';

                        compDiv.append(htmlStr);
                    }
                    compDiv.find(":radio").each(function () {

                        $(this).on('click', function () {

                            var val = this.value;
                            compDiv.find(":radio").each(function () {
                                if (this.value == val) {
                                    $(this).parent().addClass('is-checked');
                                } else {
                                    $(this).parent().removeClass('is-checked');
                                }
                            });
                            var grid = params.gridObj;
                            var column = params.gridCompColumn;
                            var field = column.options.field;
                            var datatable = grid.dataTable;
                            //var rowIndex = params.rowIndex
                            //var tmprowId =  $(grid.dataSourceObj.rows[rowIndex].value).attr("$_#_@_id");
                            var rowId = params.row.value['$_#_@_id'];

                            var row = datatable.getRowByRowId(rowId);

                            row.setValue(field, val);
                        });
                    });
                    //					var comp = new $.compManager.plugs.radio(compDiv[0],eOptions,viewModel);
                    //					for( var i=0,length=rdo.length; i<length; i++){
                    //					   if(rdo[i].pk==value){
                    //					   	 obj.element.innerHTML = '<input type="radio" checked><i data-role="name">'+rdo[i].name+'</i>';
                    //					   	 break;
                    //					   }
                    //					}
                    // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                    if (typeof afterRType == 'function') {
                        afterRType.call(this, obj);
                    }
                };
            } else if (rType == 'urlRender') {
                //通过grid的dataType为DateTime format处理
                column.renderType = function (obj) {
                    obj.element.innerHTML = '<a href="' + obj.value + '" target="_blank">' + obj.value + '</a>';

                    // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                    if (typeof afterRType == 'function') {
                        afterRType.call(this, obj);
                    }
                };
            } else if (rType == 'passwordRender') {
                //通过grid的dataType为DateTime format处理
                column.renderType = function (obj) {
                    obj.element.innerHTML = '<input type="password" disable="true" role="grid-for-edit" readonly="readonly" style="border:0px;background:none;padding:0px;" value="' + obj.value + '" title=""><span class="uf uf-eyeopen right-span" role="grid-for-edit"></span>';
                    var span = obj.element.querySelector('span');
                    var input = obj.element.querySelector('input');
                    input.value = obj.value;
                    $(span).on('click', function () {
                        if (input.type == 'password') {
                            input.type = 'text';
                        } else {
                            input.type = 'password';
                        }
                    });
                    // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                    if (typeof afterRType == 'function') {
                        afterRType.call(this, obj);
                    }
                };
            } else if (rType == 'percentRender') {
                column.renderType = function (obj) {
                    //需要处理精度

                    var grid = obj.gridObj;
                    var column = obj.gridCompColumn;
                    var field = column.options.field;
                    var rowIndex = obj.rowIndex;
                    var datatable = grid.dataTable;
                    var rowId = $(grid.dataSourceObj.rows[rowIndex].value).attr("$_#_@_id");
                    var row = datatable.getRowByRowId(rowId);
                    if (!row) return;
                    var rprec = row.getMeta(field, 'precision') || column.options.precision;
                    var maskerMeta = core.getMaskerMeta('percent') || {};
                    var precision = typeof parseFloat(rprec) == 'number' ? rprec : maskerMeta.precision;
                    maskerMeta.precision = precision;
                    if (maskerMeta.precision) {
                        maskerMeta.precision = parseInt(maskerMeta.precision) + 2;
                    }

                    var formater = new NumberFormater(maskerMeta.precision);
                    var masker = new PercentMasker(maskerMeta);
                    var svalue = masker.format(formater.format(obj.value)).value;
                    obj.element.innerHTML = svalue;
                    $(obj.element).css('text-align', 'right');
                    $(obj.element).attr('title', svalue);

                    // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                    if (typeof afterRType == 'function') {
                        afterRType.call(this, obj);
                    }
                };
            } else if (rType == 'autoWidthRender') {
                column.renderType = function (obj) {
                    var grid = obj.gridObj,
                        v = obj.value,
                        ele = obj.element,
                        column = obj.gridCompColumn;

                    ele.innerHTML = v;
                    ele.style.position = 'absolute';
                    var width = ele.offsetWidth;
                    var nowWidth = column.options.width;
                    if (width > nowWidth) {
                        grid.setColumnWidth(column, width);
                    }
                    ele.style.position = 'relative';

                    // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                    if (typeof afterRType == 'function') {
                        afterRType.call(this, obj);
                    }
                };
            }

            var defineSumRenderType = column.sumRenderType;
            column.sumRenderType = function (obj) {
                obj.value = parseFloat(obj.value);
                var grid = obj.gridObj;
                var column = obj.gridCompColumn;
                var rprec = column.options.precision;
                var maskerMeta = core.getMaskerMeta('float') || {};
                var precision = rprec == 0 || rprec && typeof parseFloat(rprec) == 'number' ? rprec : maskerMeta.precision;
                maskerMeta.precision = precision;

                var formater = new NumberFormater(maskerMeta.precision);
                var masker = new NumberMasker(maskerMeta);
                var svalue = masker.format(formater.format(obj.value)).value;
                obj.element.innerHTML = svalue;
                $(obj.element).parent().css('text-align', 'right');
                $(obj.element).css('text-align', 'right');
                $(obj.element).attr('title', svalue);
                if (typeof defineSumRenderType == 'function') defineSumRenderType.call(grid, obj);
            };

            columns.push(column);
        });

        //暂时未使用，后续考虑完善代码，不要删除！
        /*
        var app = options['app'];
        if (app && app.adjustFunc)
         	app.adjustFunc.call(app, {id: this.id, type:'gridColumn', columns:columns});
        */
        this.gridOptions.columns = columns;

        /*
         * 处理viewModel与grid之间的绑定
         *
         */

        this.dataTable.pageIndex.subscribe(function (value) {
            oThis.grid.setDataSource({});
        });

        this.dataTable.pageSize.subscribe(function (value) {
            oThis.grid.setDataSource({});
        });

        var onRowSelectedFun = this.gridOptions.onRowSelected;
        // 选中
        this.gridOptions.onRowSelected = function (obj) {
            if (!oThis.selectSilence) {
                var rowId = oThis.grid.dataSourceObj.rows[obj.rowIndex].value['$_#_@_id'];
                var index = oThis.dataTable.getIndexByRowId(rowId);
                if (oThis.grid.options.multiSelect) {
                    oThis.dataTable.addRowsSelect([index]);
                } else {
                    oThis.dataTable.setRowSelect(index);
                }
            }
            if (onRowSelectedFun) {
                onRowSelectedFun.call(oThis, obj);
            }
        };
        this.dataTable.on(DataTable$1.ON_ROW_SELECT, function (event) {
            // if (oThis.onRowSelectTimeout)
            //     clearTimeout(oThis.onRowSelectTimeout);
            // oThis.onRowSelectTimeout = setTimeout(function() {
            //     onRowSelectFun(event);
            // }, 200);
            // 后续考虑优化的时候要考虑反选
            onRowSelectFun(event);
        });

        var onRowSelectFun = function onRowSelectFun(event) {
            oThis.selectSilence = true;
            var gridSelectRows = [];
            $.each(oThis.grid.getSelectRows(), function () {
                gridSelectRows.push(this);
            });
            $.each(gridSelectRows, function () {
                var rowId = this['$_#_@_id'];
                var unSelectFlag = true;
                $.each(event.rowIds, function () {
                    if (this == rowId) unSelectFlag = false;
                });
                if (unSelectFlag) {
                    var index = oThis.grid.getRowIndexByValue('$_#_@_id', rowId);
                    // oThis.selectSilence = true;
                    oThis.grid.setRowUnselect(index);
                    // oThis.selectSilence = false;
                }
            });

            /*index转化为grid的index*/
            $.each(event.rowIds, function () {
                var index = oThis.grid.getRowIndexByValue('$_#_@_id', this);
                var selectFlag = true;
                if (index > -1) {
                    selectFlag = oThis.grid.setRowSelect(parseInt(index));
                    if (!selectFlag) {
                        oThis.dataTable.setRowUnSelect(oThis.dataTable.getIndexByRowId(this));
                    }
                }
            });
            oThis.selectSilence = false;
        };

        //全选
        this.dataTable.on(DataTable$1.ON_ROW_ALLSELECT, function (event) {
            oThis.grid.setAllRowSelect();
        });

        //全返选
        this.dataTable.on(DataTable$1.ON_ROW_ALLUNSELECT, function (event) {
            oThis.grid.setAllRowUnSelect();
        });

        // 反选
        var onRowUnSelectedFun = this.gridOptions.onRowUnSelected;
        this.gridOptions.onRowUnSelected = function (obj) {
            if (!oThis.selectSilence) {
                var rowId = oThis.grid.dataSourceObj.rows[obj.rowIndex].value['$_#_@_id'];
                var index = oThis.dataTable.getIndexByRowId(rowId);
                oThis.dataTable.setRowUnSelect(index);
            }
            if (onRowUnSelectedFun) {
                onRowUnSelectedFun.call(oThis, obj);
            }
        };
        this.dataTable.on(DataTable$1.ON_ROW_UNSELECT, function (event) {
            oThis.selectSilence = true;
            $.each(event.rowIds, function () {
                var index = oThis.grid.getRowIndexByValue('$_#_@_id', this);
                var unSelectFlag = true;
                if (index > -1) {
                    unSelectFlag = oThis.grid.setRowUnselect(parseInt(index));
                    if (!unSelectFlag) {
                        if (oThis.grid.options.multiSelect) {
                            oThis.dataTable.addRowsSelect([oThis.dataTable.getIndexByRowId(this)]);
                        } else {
                            oThis.dataTable.setRowSelect(oThis.dataTable.getIndexByRowId(this));
                        }
                    }
                }
            });
            oThis.selectSilence = false;
        });

        var onRowFocusFun = this.gridOptions.onRowFocus;
        // focus
        this.gridOptions.onRowFocus = function (obj) {
            if (!oThis.focusSilence) {
                var rowId = oThis.grid.dataSourceObj.rows[obj.rowIndex].value['$_#_@_id'];
                var index = oThis.dataTable.getIndexByRowId(rowId);

                if (oThis.grid.options.rowClickBan) {
                    oThis.dataTable.setRowFocus(index, true);
                } else {
                    oThis.dataTable.setRowFocus(index);
                }
            }

            if (onRowFocusFun) {
                onRowFocusFun.call(oThis, obj);
            }
        };
        this.dataTable.on(DataTable$1.ON_ROW_FOCUS, function (event) {
            oThis.focusSilence = true;
            /*index转化为grid的index*/
            var index = oThis.grid.getRowIndexByValue('$_#_@_id', event.rowId);

            var focusFlag = true;
            if (index > -1) {
                focusFlag = oThis.grid.setRowFocus(parseInt(index));

                if (!focusFlag) {
                    oThis.dataTable.setRowUnFocus(oThis.dataTable.getIndexByRowId(event.rowId));
                }
            }
            oThis.focusSilence = false;
        });

        // 反focus
        var onRowUnFocusFun = this.gridOptions.onRowUnFocus;
        this.gridOptions.onRowUnFocus = function (obj) {
            if (!oThis.focusSilence) {
                var rowId = oThis.grid.dataSourceObj.rows[obj.rowIndex].value['$_#_@_id'];
                var index = oThis.dataTable.getIndexByRowId(rowId);
                oThis.dataTable.setRowUnFocus(index);
            }
            if (onRowUnFocusFun) {
                onRowUnFocusFun.call(oThis, obj);
            }
        };
        this.dataTable.on(DataTable$1.ON_ROW_UNFOCUS, function (event) {
            oThis.focusSilence = true;
            var index = oThis.grid.getRowIndexByValue('$_#_@_id', event.rowId);
            var unFocusFlag = true;
            if (index > -1) {
                unFocusFlag = oThis.grid.setRowUnFocus(parseInt(index));
                if (!unFocusFlag) {
                    oThis.dataTable.setRowFocus(oThis.dataTable.getIndexByRowId(event.rowId));
                }
            }
            oThis.focusSilence = false;
        });

        // 增行,只考虑viewModel传入grid
        //		var onRowInsertFun = this.gridOptions.onRowInsert;
        //		this.gridOptions.onRowInsert = function(obj){
        //			dataTable.insertRow(obj.index,obj.row);
        //			if(onRowSelectedFun){
        //				viewModel[onRowUnSelectedFun].call(grid,grid, row, rowindex);
        //			}
        //		};
        this.dataTable.on(DataTable$1.ON_INSERT, function (event) {
            oThis.silence = true;
            var gridRows = new Array();
            $.each(event.rows, function () {
                var row = this.data;
                var id = this.rowId;
                var gridRow = {};
                for (var filed in row) {
                    gridRow[filed] = row[filed].value;
                }
                gridRow['$_#_@_id'] = id;
                gridRows.push(gridRow);
            });
            oThis.grid.addRows(gridRows, event.index);
            oThis.silence = false;
        });

        this.dataTable.on(DataTable$1.ON_UPDATE, function (event) {
            oThis.silence = true;
            $.each(event.rows, function () {
                var row = this.data;
                var id = this.rowId;
                var gridRow = {};
                for (var filed in row) {
                    gridRow[filed] = row[filed].value;
                }
                gridRow['$_#_@_id'] = id;
                var index = oThis.grid.getRowIndexByValue('$_#_@_id', id);
                oThis.grid.updateRow(index, gridRow);
            });
            oThis.silence = false;
        });

        this.dataTable.on(DataTable$1.ON_VALUE_CHANGE, function (obj) {
            oThis.silence = true;
            var id = obj.rowId;
            var index = oThis.grid.getRowIndexByValue('$_#_@_id', id);
            if (index == -1) {
                return;
            }
            var field = obj.field;
            var value = obj.newValue;
            oThis.grid.updateValueAt(index, field, value);
            //oThis.grid.editClose();
            oThis.silence = false;
        });
        // 数据改变
        var onValueChangeFun = this.gridOptions.onValueChange;
        this.gridOptions.onValueChange = function (obj) {
            if (!oThis.silence) {
                var row = oThis.getDataTableRow(oThis.grid.dataSourceObj.rows[obj.rowIndex].value);
                if (row) {
                    if ($.type(obj.newValue) == 'object') {
                        row.setValue(obj.field, obj.newValue.trueValue);
                        row.setMeta(obj.field, 'display', obj.newValue.showValue);
                    } else {
                        row.setValue(obj.field, obj.newValue);
                    }
                }
            }
            if (onValueChangeFun) {
                onValueChangeFun.call(oThis, obj);
            }
        };

        // 删行,只考虑viewModel传入grid
        // this.gridOptions.onRowDelete = function(obj) {
        //     if (!oThis.deleteSilence) {
        //         var row = obj.row;
        //         var datatableIndex = oThis.getDatatableRowIndexByGridRow(row.value);
        //         oThis.dataTable.setRowDelete(datatableIndex);
        //         $('.tooltip').remove();
        //     }
        // };
        this.dataTable.on(DataTable$1.ON_DELETE, function (event) {
            oThis.deleteSilence = true;
            /*index转化为grid的index*/
            var gridIndexs = new Array();
            $.each(event.rowIds, function () {
                var index = oThis.grid.getRowIndexByValue('$_#_@_id', this);
                gridIndexs.push(index);
            });
            oThis.grid.deleteRows(gridIndexs);
            $('.tooltip').remove();
            oThis.deleteSilence = false;
        });

        this.dataTable.on(DataTable$1.ON_DELETE_ALL, function (event) {
            oThis.deleteSilence = true;
            oThis.grid.setDataSource({});
            $('.tooltip').remove();
            oThis.deleteSilence = false;
        });

        // 加载数据,只考虑viewModel传入grid
        this.dataTable.on(DataTable$1.ON_LOAD, function (data) {
            oThis.silence = true;
            if (data.length > 0) {
                var values = new Array();

                $.each(data, function () {
                    var value = {};
                    var dataObj = this.data;
                    var id = this.rowId;
                    for (var p in dataObj) {
                        var v = dataObj[p].value;
                        value[p] = v;
                    }
                    value['$_#_@_id'] = id;
                    values.push(value);
                });
                var dataSource = {};
                dataSource['values'] = values;
                oThis.grid.setDataSource(dataSource);
            }
            oThis.silence = false;
        });
        this.dataTable.on(DataTable$1.ON_ENABLE_CHANGE, function (enable) {
            oThis.enableSilence = true;
            oThis.grid.setEditable(enable.enable);
            oThis.enableSilence = false;
        });

        this.dataTable.on(DataTable$1.ON_ROW_META_CHANGE, function (event) {
            oThis.metaSilence = true;
            var field = event.field,
                meta = event.meta,
                row = event.row,
                newValue = event.newValue;
            if (meta == 'required') {
                oThis.grid.setRequired(field, newValue);
            }
            if (meta == 'precision') {
                var comp = oThis.editComponent[field];
                if (comp && comp.setPrecision) {
                    comp.setPrecision(newValue);
                }

                var index = oThis.grid.getRowIndexByValue('$_#_@_id', row.rowId);
                if (index == -1) {
                    return;
                }
                var value = row.getValue(field);

                oThis.grid.updateValueAt(index, field, value, true);
            }
            oThis.metaSilence = false;
        });

        this.dataTable.on(DataTable$1.ON_META_CHANGE, function (event) {
            oThis.metaSilence = true;
            var field = event.field;
            var meta = event.meta;
            if (meta == 'precision') {
                oThis.grid.renderTypeFun({
                    field: field
                });
            }
            oThis.metaSilence = false;
        });

        this.gridOptions.transMap = {
            ml_show_column: trans('gridComp.show_column', '显示/隐藏列'),
            ml_clear_set: trans('gridComp.clear_set', '清除设置'),
            ml_no_rows: trans('gridComp.no_rows', '无数据'),
            ml_sum: trans('gridComp.sum', '合计:'),
            ml_close: trans('gridComp.close', '关闭')
        };
        // 创建grid
        this.grid = $(element).grid(this.gridOptions);
        this.grid.dataTable = this.dataTable;
        this.grid.viewModel = viewModel;
        this.grid.gridModel = this;

        //如果先插入数据再创建grid需要处理 load
        var data = this.dataTable.rows();
        if (data.length > 0) {
            var values = new Array();

            $.each(data, function () {
                var value = {};
                var dataObj = this.data;
                var id = this.rowId;
                for (var p in dataObj) {
                    var v = dataObj[p].value;
                    value[p] = v;
                }
                value['$_#_@_id'] = id;
                values.push(value);
            });
            var dataSource = {};
            dataSource['values'] = values;
            oThis.grid.setDataSource(dataSource);
        }

        // 选中行
        var selectIndexs = oThis.dataTable.getSelectedIndexs();
        if (selectIndexs.length > 0) {
            $.each(selectIndexs, function () {
                oThis.grid.setRowSelect(this);
            });
        }
        return this;
    },

    getName: function getName() {
        return 'grid';
    },

    setRenderType: function setRenderType(obj) {
        this.createDefaultRender(obj);
    },

    createDefaultRender: function createDefaultRender(obj) {
        var field = obj.field,
            rType = obj.rType,
            eOptions = obj.eOptions;
        var oThis = this;
        var column = oThis.grid.getColumnByField(field).options;
        var viewModel = oThis.grid.viewModel;
        if (eOptions) {
            //判断是否为json对象
            if ((typeof eOptions === 'undefined' ? 'undefined' : _typeof(eOptions)) == "object" && Object.prototype.toString.call(eOptions).toLowerCase() == "[object object]" && !obj.length) {
                eOptions = eOptions;
                //判断是否为string
            } else if (typeof eOptions == "string") {
                eOptions = JSON.parse(eOptions);
            }
        } else {
            eOptions = {};
            if (column.editOptions) {
                if (typeof column.editOptions == "undefined") var eOptions = eval("(" + column.editOptions + ")");else var eOptions = column.editOptions;
            }
            eOptions.data = options['data'];
            eOptions.field = column['field'];
        }
        if (rType == 'booleanRender') {
            var renderType = function renderType(obj) {
                var checkStr = '';
                if (obj.value == 'Y') {
                    checkStr = 'checked';
                }
                var htmlStr = '<input type="checkbox"   style="cursor:default;" ' + checkStr + '>';
                obj.element.innerHTML = htmlStr;

                var grid = obj.gridObj;
                var datatable = grid.dataTable;
                var rowId = obj.row.value['$_#_@_id'];

                var row = datatable.getRowByRowId(rowId);
                $(obj.element).find('input').on('click', function () {
                    if (!obj.gridObj.options.editable) {
                        stopEvent(e);
                        return false;
                    }
                    var value = this.checked ? "Y" : "N";
                    var column = obj.gridCompColumn;
                    var field = column.options.field;
                    row.setValue(field, value);
                });

                // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                if (typeof afterRType == 'function') {
                    afterRType.call(this, obj);
                }
            };
        } else if (rType == 'disableBooleanRender') {
            var renderType = function renderType(obj) {
                var checkStr = '';
                if (obj.value == 'Y') {
                    checkStr = 'checked';
                }
                var htmlStr = '<input type="checkbox"  disabled style="cursor:default;" ' + checkStr + '>';
                obj.element.innerHTML = htmlStr;

                var grid = obj.gridObj;
                var datatable = grid.dataTable;
                var rowId = obj.row.value['$_#_@_id'];

                var row = datatable.getRowByRowId(rowId);

                // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                if (typeof afterRType == 'function') {
                    afterRType.call(this, obj);
                }
            };
        } else if (rType == 'switchRender') {
            column.renderType = function (obj) {

                var grid = obj.gridObj;
                var datatable = grid.dataTable;
                var rowId = obj.row.value['$_#_@_id'];
                var row = datatable.getRowByRowId(rowId);
                var checkStr = '',
                    disableStr = '';

                if (obj.value == 'Y' || obj.value == 'true') {
                    checkStr = 'checked';
                }
                disableStr = ' is-disabled';
                var htmlStr = '<label class="u-switch">' + ' <input type="checkbox"  class="u-switch-input" ' + checkStr + '>' + ' <span class="u-switch-label"></span>' + '</label>';

                obj.element.innerHTML = htmlStr;
                var comp = new u.Switch($(obj.element).find('label')[0]);
                comp.on('change', function (event) {
                    var column = obj.gridCompColumn;
                    var field = column.options.field;
                    if (event.isChecked) {
                        row.setValue(field, 'Y');
                    } else {
                        row.setValue(field, 'N');
                    }
                });

                // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                if (typeof afterRType == 'function') {
                    afterRType.call(this, obj);
                }
            };
        } else if (rType == 'integerRender') {
            column.dataType = 'Int';
            var renderType = function renderType(obj) {
                var grid = obj.gridObj;
                var column = obj.gridCompColumn;
                var field = column.options.field;
                obj.element.innerHTML = obj.value;
                /*设置header为right*/
                $('#' + grid.options.id + '_header_table').find('th[field="' + field + '"]').css('text-align', 'right');
                $(obj.element).css('text-align', 'right');
                $(obj.element).css('color', '#e33c37');
                $(obj.element).find('.u-grid-header-link').css('padding-right', '3em');
                // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                if (typeof afterRType == 'function') {
                    afterRType.call(this, obj);
                }
            };
        } else if (rType == 'currencyRender') {
            var renderType = function renderType(obj) {
                //需要处理精度

                var grid = obj.gridObj;
                var column = obj.gridCompColumn;
                var field = column.options.field;
                var rowIndex = obj.rowIndex;
                var datatable = grid.dataTable;
                var rowId = $(grid.dataSourceObj.rows[rowIndex].value).attr("$_#_@_id");
                var row = datatable.getRowByRowId(rowId);
                if (!row) return;
                var rprec = row.getMeta(field, 'precision');
                var maskerMeta = core.getMaskerMeta('float') || {};
                var precision = typeof parseFloat(rprec) == 'number' ? rprec : maskerMeta.precision;
                maskerMeta.precision = precision;

                maskerMeta.precision = precision || maskerMeta.precision;
                var formater = new NumberFormater(maskerMeta.precision);
                var masker = new NumberMasker(maskerMeta);
                var svalue = masker.format(formater.format(obj.value)).value;
                obj.element.innerHTML = svalue;
                /*设置header为right*/
                $('#' + grid.options.id + '_header_table').find('th[field="' + field + '"]').css('text-align', 'right');
                $(obj.element).css('text-align', 'right');
                $(obj.element).css('color', '#e33c37');
                $(obj.element).find('.u-grid-header-link').css('padding-right', '3em');
                $(obj.element).attr('title', svalue);

                // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                if (typeof afterRType == 'function') {
                    afterRType.call(this, obj);
                }
            };
        } else if (rType == 'floatRender') {
            column.dataType = 'Float';
            var renderType = function renderType(obj) {
                //需要处理精度

                var grid = obj.gridObj;
                var column = obj.gridCompColumn;
                var field = column.options.field;
                var rowIndex = obj.rowIndex;
                var datatable = grid.dataTable;
                var rowId = $(grid.dataSourceObj.rows[rowIndex].value).attr("$_#_@_id");
                var row = datatable.getRowByRowId(rowId);
                if (!row) return;
                var rprec = row.getMeta(field, 'precision') || column.options.precision;
                var maskerMeta = core.getMaskerMeta('float') || {};
                var precision = typeof parseFloat(rprec) == 'number' ? rprec : maskerMeta.precision;
                maskerMeta.precision = precision;

                var formater = new NumberFormater(maskerMeta.precision);
                var masker = new NumberMasker(maskerMeta);
                var svalue = masker.format(formater.format(obj.value)).value;
                obj.element.innerHTML = svalue;
                /*设置header为right*/
                $('#' + grid.options.id + '_header_table').find('th[field="' + field + '"]').css('text-align', 'right');
                $(obj.element).css('text-align', 'right');
                $(obj.element).css('color', '#e33c37');
                $(obj.element).find('.u-grid-header-link').css('padding-right', '3em');
                $(obj.element).attr('title', svalue);

                // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                if (typeof afterRType == 'function') {
                    afterRType.call(this, obj);
                }
            };
        } else if (rType == 'comboRender') {
            var renderType = function renderType(obj) {

                //需要将key转化为name
                var ds = getJSObject(viewModel, eOptions['datasource']);
                if (!ds) ds = getJSObject(viewModel, column['datasource']);
                obj.element.innerHTML = '';
                if (nameArr) {
                    nameArr.length = 0;
                }

                var valArr = obj.value.split(',');
                var nameArr = [];
                for (var i = 0, length = ds.length; i < length; i++) {
                    for (var j = 0; j < valArr.length; j++) {
                        if (ds[i].value == valArr[j]) {
                            nameArr.push(ds[i].name);
                        }
                    }
                }
                var svalue = nameArr.toString();
                if (!svalue) svalue = obj.value;
                obj.element.innerHTML = svalue;
                $(obj.element).attr('title', svalue);

                // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                if (typeof afterRType == 'function') {
                    afterRType.call(this, obj);
                }
            };
        } else if (rType == 'dateRender') {
            //通过grid的dataType为Date format处理
            var renderType = function renderType(obj) {
                var svalue = dateRender(obj.value, obj.gridCompColumn.options['format']);
                obj.element.innerHTML = svalue;
                $(obj.element).attr('title', svalue);
                // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                if (typeof afterRType == 'function') {
                    afterRType.call(this, obj);
                }
            };
        } else if (rType == 'dateTimeRender') {
            //通过grid的dataType为DateTime format处理
            var renderType = function renderType(obj) {
                var svalue = dateTimeRender(obj.value);
                obj.element.innerHTML = svalue;
                $(obj.element).attr('title', svalue);

                // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                if (typeof afterRType == 'function') {
                    afterRType.call(this, obj);
                }
            };
        } else if (typeof rType == 'function') {
            var renderType = rType;
        } else if (rType == 'radioRender') {
            var renderType = function renderType(params) {
                //debugger
                var ds = getJSObject(viewModel, eOptions['datasource']);
                if (!ds) ds = getJSObject(viewModel, column['datasource']);
                var value = params.value;
                var compDiv = $('<div class="u-grid-edit-item-radio"></div>');

                params.element.innerHTML = "";
                $(params.element).append(compDiv);

                for (var i = 0; i < ds.length; i++) {
                    if (ds[i].value == value) compDiv.append('<input name="' + column.field + params.row.value['$_#_@_id'] + '" type="radio" value="' + ds[i].value + '" checked="true" /><i data-role="name">' + ds[i].name + '</i>');else compDiv.append('<input name="' + column.field + params.row.value['$_#_@_id'] + '" type="radio" value="' + ds[i].value + '"/><i data-role="name">' + ds[i].name + '</i>');
                }
                compDiv.find(":radio").each(function () {

                    $(this).on('click', function () {

                        var val = this.value;
                        compDiv.find(":radio").each(function () {
                            if (this.value == val) {
                                this.checked = true;
                            } else {
                                this.checked = false;
                            }
                        });
                        var grid = params.gridObj;
                        var column = params.gridCompColumn;
                        var field = column.options.field;
                        var datatable = grid.dataTable;
                        //var rowIndex = params.rowIndex
                        //var tmprowId =  $(grid.dataSourceObj.rows[rowIndex].value).attr("$_#_@_id");
                        var rowId = params.row.value['$_#_@_id'];

                        var row = datatable.getRowByRowId(rowId);

                        row.setValue(field, val);
                    });
                });
                //					var comp = new $.compManager.plugs.radio(compDiv[0],eOptions,viewModel);
                //					for( var i=0,length=rdo.length; i<length; i++){
                //					   if(rdo[i].pk==value){
                //					   	 obj.element.innerHTML = '<input type="radio" checked><i data-role="name">'+rdo[i].name+'</i>';
                //					   	 break;
                //					   }
                //					}
                // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                if (typeof afterRType == 'function') {
                    afterRType.call(this, obj);
                }
            };
        } else if (rType == 'urlRender') {
            //通过grid的dataType为DateTime format处理
            var renderType = function renderType(obj) {
                obj.element.innerHTML = '<a href="' + obj.value + '" target="_blank">' + obj.value + '</a>';

                // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                if (typeof afterRType == 'function') {
                    afterRType.call(this, obj);
                }
            };
        } else if (rType == 'passwordRender') {
            //通过grid的dataType为DateTime format处理
            var renderType = function renderType(obj) {
                obj.element.innerHTML = '<input type="password" disable="true" role="grid-for-edit" readonly="readonly" style="border:0px;background:none;padding:0px;" value="' + obj.value + '" title=""><span class="uf uf-eyeopen right-span" role="grid-for-edit"></span>';
                var span = obj.element.querySelector('span');
                var input = obj.element.querySelector('input');
                input.value = obj.value;
                $(span).on('click', function () {
                    if (input.type == 'password') {
                        input.type = 'text';
                    } else {
                        input.type = 'password';
                    }
                });
                // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                if (typeof afterRType == 'function') {
                    afterRType.call(this, obj);
                }
            };
        } else if (rType == 'percentRender') {
            var renderType = function renderType(obj) {
                //需要处理精度

                var grid = obj.gridObj;
                var column = obj.gridCompColumn;
                var field = column.options.field;
                var rowIndex = obj.rowIndex;
                var datatable = grid.dataTable;
                var rowId = $(grid.dataSourceObj.rows[rowIndex].value).attr("$_#_@_id");
                var row = datatable.getRowByRowId(rowId);
                if (!row) return;
                var rprec = row.getMeta(field, 'precision') || column.options.precision;
                var maskerMeta = core.getMaskerMeta('percent') || {};
                var precision = typeof parseFloat(rprec) == 'number' ? rprec : maskerMeta.precision;
                maskerMeta.precision = precision;
                if (maskerMeta.precision) {
                    maskerMeta.precision = parseInt(maskerMeta.precision) + 2;
                }

                var formater = new NumberFormater(maskerMeta.precision);
                var masker = new PercentMasker(maskerMeta);
                var svalue = masker.format(formater.format(obj.value)).value;
                obj.element.innerHTML = svalue;
                $(obj.element).css('text-align', 'right');
                $(obj.element).attr('title', svalue);

                // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                if (typeof afterRType == 'function') {
                    afterRType.call(this, obj);
                }
            };
        } else if (rType == 'autoWidthRender') {
            var renderType = function renderType(obj) {
                var grid = obj.gridObj,
                    v = obj.value,
                    ele = obj.element,
                    column = obj.gridCompColumn;

                ele.innerHTML = v;
                ele.style.position = 'absolute';
                var width = ele.offsetWidth;
                var nowWidth = column.options.width;
                if (width > nowWidth) {
                    grid.setColumnWidth(column, width);
                }
                ele.style.position = 'relative';

                // 根据惊道需求增加renderType之后的处理,此处只针对grid.js中的默认render进行处理，非默认通过renderType进行处理
                if (typeof afterRType == 'function') {
                    afterRType.call(this, obj);
                }
            };
        }
        var renderArr = {};
        renderArr[column.field] = renderType;

        column.renderType = function (obj) {
            var rendertypefun = renderArr[column.field];

            rendertypefun.call(this, obj);
        };
    },

    setEditType: function setEditType(obj) {
        var eType = obj.eType,
            field = obj.field,
            eOptions = obj.eOptions;
        var oThis = this;
        var column = oThis.grid.getColumnByField(field).options;
        var viewModel = oThis.grid.viewModel;
        var options = oThis.gridOptions;

        if (eOptions) {
            //判断是否为json对象
            if ((typeof eOptions === 'undefined' ? 'undefined' : _typeof(eOptions)) == "object" && Object.prototype.toString.call(eOptions).toLowerCase() == "[object object]" && !obj.length) {
                eOptions = eOptions;
                //判断是否为string
            } else if (typeof eOptions == "string") {
                eOptions = JSON.parse(eOptions);
            }
        } else {
            eOptions = {};
            if (column.editOptions) {
                if (typeof column.editOptions == "undefined") var eOptions = eval("(" + column.editOptions + ")");else var eOptions = column.editOptions;
            }
            eOptions.data = options['data'];
            eOptions.field = column['field'];
        }
        if (!field) {
            return false;
        }
        if (column) {
            oThis.createDefaultEdit(eType, eOptions, options, viewModel, column);
        }
    },

    createDefaultEdit: function createDefaultEdit(eType, eOptions, options, viewModel, column) {
        var oThis = this;
        eOptions.showFix = true;
        eOptions.rowIndex = 0;
        var compDiv, comp;
        if (eType == 'string') {
            compDiv = $('<div ><input type="text" class="u-input"><label class="u-label"></label></div>');
            if (!options.editType || options.editType == "default") {
                compDiv.addClass("eType-input");
            }
            eOptions.dataType = 'string';
            comp = new u.TextFieldAdapter({
                el: compDiv[0],
                options: eOptions,
                model: viewModel
            });
            //$.compManager.plugs.string(compDiv.find("input")[0],eOptions,viewModel);
        } else if (eType == 'integer') {
            compDiv = $('<div><input type="text" class="u-grid-edit-item-integer"></div>');
            if (!options.editType || options.editType == "default") {
                compDiv.addClass("eType-input");
            }
            eOptions.dataType = 'integer';
            comp = new IntegerAdapter({
                el: compDiv[0],
                options: eOptions,
                model: viewModel
            });
            column.dataType = 'Int';
            //comp = new $.compManager.plugs.integer(compDiv.find("input")[0],eOptions,viewModel);
        } else if (eType == 'checkbox') {
            compDiv = $('<div><input id="' + oThis.id + "_edit_field_" + column['field'] + '" type="checkbox" class="u-grid-edit-item-checkbox"></div>');
            //eOptions.dataType = 'integer';

            if ($.CheckboxComp) {
                comp = new $.CheckboxComp(compDiv.find("input")[0], eOptions, viewModel);
            } else {
                comp = new CheckboxAdapter({
                    el: compDiv[0],
                    options: eOptions,
                    model: viewModel
                });
            }

            //comp = new $.compManager.plugs.check(compDiv.find("input")[0],eOptions,viewModel);
        } else if (eType == 'combo') {
            // compDiv = $('<div class="input-group  form_date u-grid-edit-item-comb"><div  type="text" class="form-control grid-combox"></div><i class="input-group-addon" ><i class="uf uf-anglearrowdown"></i></i></div>');
            compDiv = $('<div class="eType-input"><input type="text" class="u-grid-edit-item-float"></div>');
            //comp = new $.compManager.plugs.combo(compDiv[0],eOptions,viewModel);
            //comp = new Combobox({
            //	el:compDiv[0],
            //	options:eOptions,
            //	model: viewModel
            //});
            if ($.Combobox) {
                //兼容旧版本
                compDiv = $('<div class="input-group  form_date u-grid-edit-item-comb"><div  type="text" class="form-control grid-combox"></div><i class="input-group-addon" ><i class="uf uf-anglearrowdown"></i></i></div>');
                comp = new $.Combobox(compDiv[0], eOptions, viewModel);
            } else {
                comp = new ComboboxAdapter({
                    el: compDiv[0],
                    options: eOptions,
                    model: viewModel
                });
                if (oThis.gridOptions.customEditPanelClass) {
                    if (oThis.gridOptions.customEditPanelClass.indexOf('u-combo-ul') < 0) {
                        oThis.gridOptions.customEditPanelClass += ',u-combo-ul';
                    }
                } else {
                    oThis.gridOptions.customEditPanelClass = 'u-combo-ul';
                }
            }
        } else if (eType == 'radio') {
            if (!options.editType || options.editType == "default") {
                compDiv = null;
                comp = null;
            } else {
                compDiv = $('<div class="u-grid-edit-item-radio"><input type="radio" name="identity" /><i data-role="name"></i></div>');
                //comp = new $.compManager.plugs.radio(compDiv[0],eOptions,viewModel);
                comp = new RadioAdapter({
                    el: compDiv[0],
                    options: eOptions,
                    model: viewModel
                });
            }
        } else if (eType == 'float') {
            compDiv = $('<div><input type="text" class="u-grid-edit-item-float"></div>');
            if (!options.editType || options.editType == "default") {
                compDiv.addClass("eType-input");
            }
            //comp = new $.compManager.plugs.float(compDiv.find("input")[0],eOptions,viewModel);
            eOptions.dataType = 'float';
            comp = new FloatAdapter({
                el: compDiv[0],
                options: eOptions,
                model: viewModel
            });
            column.dataType = 'Float';
        } else if (eType == 'currency') {
            compDiv = $('<div><input type="text" class="u-grid-edit-item-currency"></div>');
            if (!options.editType || options.editType == "default") {
                compDiv.addClass("eType-input");
            }
            //comp = new $.compManager.plugs.currency(compDiv.find("input")[0],eOptions,viewModel);
            eOptions.dataType = 'currency';
            comp = new CurrencyAdapter({
                el: compDiv[0],
                options: eOptions,
                model: viewModel
            });
        } else if (eType == 'datetime') {
            compDiv = $('<div class="input-group u-grid-edit-item-datetime" ><input class="form-control" /><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span></div>');

            //comp = new $.compManager.plugs.datetime(compDiv[0],eOptions,viewModel);
            if ($.DateTime) {
                comp = new $.DateTime(compDiv[0], eOptions, viewModel);
            } else {
                comp = new DateTimeAdapter({
                    el: compDiv[0],
                    options: eOptions,
                    model: viewModel
                });
                if (oThis.gridOptions.customEditPanelClass) {
                    if (oThis.gridOptions.customEditPanelClass.indexOf('u-date-panel') < 0) {
                        oThis.gridOptions.customEditPanelClass += ',u-date-panel';
                    }
                } else {
                    oThis.gridOptions.customEditPanelClass = 'u-date-panel';
                }
            }
        } else if (eType == 'time') {
            compDiv = $('<div class="input-group u-grid-edit-item-datetime" ><input class="form-control" /><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span></div>');

            //comp = new $.compManager.plugs.datetime(compDiv[0],eOptions,viewModel);
            if ($.DateTime) {
                comp = new $.DateTime(compDiv[0], eOptions, viewModel);
            } else {
                comp = new TimeAdapter({
                    el: compDiv[0],
                    options: eOptions,
                    model: viewModel
                });
                if (oThis.gridOptions.customEditPanelClass) {
                    if (oThis.gridOptions.customEditPanelClass.indexOf('u-date-panel') < 0) {
                        oThis.gridOptions.customEditPanelClass += ',u-date-panel';
                    }
                } else {
                    oThis.gridOptions.customEditPanelClass = 'u-date-panel';
                }
            }
        } else if (eType == 'date') {
            compDiv = $('<div class="input-group u-grid-edit-item-date" ><input class="form-control" /><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span></div>');

            //comp = new $.compManager.plugs.date(compDiv[0],eOptions,viewModel);
            if ($.DateComp) {
                comp = new $.DateComp(compDiv[0], eOptions, viewModel);
            } else {
                eOptions.type = 'u-date';
                comp = new DateTimeAdapter({
                    el: compDiv[0],
                    options: eOptions,
                    model: viewModel
                });
                if (oThis.gridOptions.customEditPanelClass) {
                    if (oThis.gridOptions.customEditPanelClass.indexOf('u-date-panel') < 0) {
                        oThis.gridOptions.customEditPanelClass += ',u-date-panel';
                    }
                } else {
                    oThis.gridOptions.customEditPanelClass = 'u-date-panel';
                }
            }
        } else if (eType == 'year') {
            compDiv = $('<div class="input-group u-grid-edit-item-date" ><input class="form-control" /><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span></div>');

            //comp = new $.compManager.plugs.date(compDiv[0],eOptions,viewModel);
            if ($.DateComp) {
                comp = new $.DateComp(compDiv[0], eOptions, viewModel);
            } else {
                eOptions.type = 'year';
                comp = new YearAdapter({
                    el: compDiv[0],
                    options: eOptions,
                    model: viewModel
                });
                if (oThis.gridOptions.customEditPanelClass) {
                    if (oThis.gridOptions.customEditPanelClass.indexOf('u-date-panel') < 0) {
                        oThis.gridOptions.customEditPanelClass += ',u-date-panel';
                    }
                } else {
                    oThis.gridOptions.customEditPanelClass = 'u-date-panel';
                }
            }
        } else if (eType == 'month') {
            compDiv = $('<div class="input-group u-grid-edit-item-date" ><input class="form-control" /><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span></div>');

            //comp = new $.compManager.plugs.date(compDiv[0],eOptions,viewModel);
            if ($.DateComp) {
                comp = new $.DateComp(compDiv[0], eOptions, viewModel);
            } else {
                eOptions.type = 'month';
                comp = new MonthAdapter({
                    el: compDiv[0],
                    options: eOptions,
                    model: viewModel
                });
                if (oThis.gridOptions.customEditPanelClass) {
                    if (oThis.gridOptions.customEditPanelClass.indexOf('u-date-panel') < 0) {
                        oThis.gridOptions.customEditPanelClass += ',u-date-panel';
                    }
                } else {
                    oThis.gridOptions.customEditPanelClass = 'u-date-panel';
                }
            }
        } else if (eType == 'yearmonth') {
            compDiv = $('<div class="input-group u-grid-edit-item-date" ><input class="form-control" /><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span></div>');

            //comp = new $.compManager.plugs.date(compDiv[0],eOptions,viewModel);
            if ($.DateComp) {
                comp = new $.DateComp(compDiv[0], eOptions, viewModel);
            } else {
                eOptions.type = 'yearmonth';
                comp = new YearMonthAdapter({
                    el: compDiv[0],
                    options: eOptions,
                    model: viewModel
                });
                if (oThis.gridOptions.customEditPanelClass) {
                    if (oThis.gridOptions.customEditPanelClass.indexOf('u-date-panel') < 0) {
                        oThis.gridOptions.customEditPanelClass += ',u-date-panel';
                    }
                } else {
                    oThis.gridOptions.customEditPanelClass = 'u-date-panel';
                }
            }
        } else if (eType == 'url') {
            compDiv = $('<div><input type="text" class="u-grid-edit-item-string"></div>');
            if (!options.editType || options.editType == "default") {
                compDiv.addClass("eType-input");
            }
            eOptions.dataType = 'url';
            comp = new UrlAdapter({
                el: compDiv[0],
                options: eOptions,
                model: viewModel
            });
            //$.compManager.plugs.string(compDiv.find("input")[0],eOptions,viewModel);
        } else if (eType == 'password') {
            compDiv = $('<div><input type="text" class="u-grid-edit-item-string"><span class="uf uf-eyeopen right-span"></span></div>');
            if (!options.editType || options.editType == "default") {
                compDiv.addClass("eType-input");
            }
            eOptions.dataType = 'password';
            comp = new PassWordAdapter({
                el: compDiv[0],
                options: eOptions,
                model: viewModel
            });
            //$.compManager.plugs.string(compDiv.find("input")[0],eOptions,viewModel);
        } else if (eType == 'percent') {

            compDiv = $('<div><input type="text" class="u-grid-edit-item-float"></div>');
            if (!options.editType || options.editType == "default") {
                compDiv.addClass("eType-input");
            }
            //comp = new $.compManager.plugs.float(compDiv.find("input")[0],eOptions,viewModel);
            eOptions.dataType = 'precent';
            comp = new PercentAdapter({
                el: compDiv[0],
                options: eOptions,
                model: viewModel
            });
        } else if (eType == 'phoneNumber') {
            compDiv = $('<div ><input type="text" class="u-input"></div>');
            if (!options.editType || options.editType == "default") {
                compDiv.addClass("eType-input");
            }
            eOptions.dataType = 'phoneNumber';
            comp = new u.PhoneNumberAdapter({
                el: compDiv[0],
                options: eOptions,
                model: viewModel
            });
        } else if (eType == 'landLine') {
            compDiv = $('<div ><input type="text" class="u-input"></div>');
            if (!options.editType || options.editType == "default") {
                compDiv.addClass("eType-input");
            }
            eOptions.dataType = 'landLine';
            comp = new u.LandLineAdapter({
                el: compDiv[0],
                options: eOptions,
                model: viewModel
            });
        } else if (eType == 'textArea') {
            compDiv = $('<div ><textarea></div>');
            if (!options.editType || options.editType == "default") {
                compDiv.addClass("eType-input");
            }
            comp = new u.TextAreaAdapter({
                el: compDiv[0],
                options: eOptions,
                model: viewModel
            });
        }

        if (comp && comp.dataAdapter) {
            comp = comp.dataAdapter;
        }

        oThis.editComponentDiv[column.field] = compDiv;
        oThis.editComponent[column.field] = comp;
    },

    /**
     * 获取grid行对应的数据模型行对象
     * @param {Object} gridRow
     */
    getDataTableRow: function getDataTableRow(gridRow) {
        var rowId = gridRow['$_#_@_id'];
        var row = null;
        var rowIndex = this.dataTable.getIndexByRowId(rowId);
        if (rowIndex > -1) row = this.dataTable.getRow(rowIndex);
        return row;
    },

    getDatatableRowIndexByGridRow: function getDatatableRowIndexByGridRow(gridRow) {
        var rowId = gridRow['$_#_@_id'];
        var rowIndex = this.dataTable.getIndexByRowId(rowId);
        return rowIndex;
    },

    setEnable: function setEnable(enable) {
        this.grid.setEditable(enable);
    },

    setShowHeader: function setShowHeader(showHeader) {
        this.grid.setShowHeader(showHeader);
    },

    // 传入要编辑的tr对应的jquery对象
    editRowFun: function editRowFun(index) {
        this.dataTable.setRowSelect(index);
        this.grid.editRowIndexFun(index);
    },
    /*
    grid校验之后不显示提示信息，只返回提示信息，由调用者主动处理
    传入参数：	trueValue 不处理
    			showMsg 不处理
    返回：	passed 是否通过
    		MsgObj 包含id以及提示信息，后续可扩展
    		Msg 提示信息
    */
    doValidate: function doValidate$$1(options) {
        var rows = this.grid.dataSourceObj.rows,
            gridColumnArr = this.grid.gridCompColumnArr,
            passed = true,
            MsgArr = new Array(),
            evalStr = '',
            rowMsg = '',
            wholeMsg = '',
            columnShowMsg = '',
            hasErrow = false;

        // 遍历所有列
        for (var j = 0; j < gridColumnArr.length; j++) {
            // 遍历所有行
            var column = gridColumnArr[j],
                columnOptions = gridColumnArr[j].options,
                field = columnOptions.field,
                title = columnOptions.title,
                required = columnOptions.required,
                validType,
                placement,
                tipId,
                errorMsg,
                nullMsg,
                maxLength,
                minLength,
                max,
                min,
                maxNotEq,
                minNotEq,
                reg;
            if (columnOptions.editOptions) {
                validType = columnOptions.editOptions.validType || '';
                placement = columnOptions.editOptions.placement || '';
                tipId = columnOptions.editOptions.tipId || '';
                errorMsg = columnOptions.editOptions.errorMsg || '';
                nullMsg = columnOptions.editOptions.nullMsg || '';
                maxLength = columnOptions.editOptions.maxLength || '';
                minLength = columnOptions.editOptions.minLength || '';
                max = columnOptions.editOptions.max || '';
                min = columnOptions.editOptions.min || '';
                maxNotEq = columnOptions.editOptions.maxNotEq || '';
                minNotEq = columnOptions.editOptions.minNotEq || '';
                reg = columnOptions.editOptions.regExp || '';
                required = columnOptions.editOptions.required || columnOptions.required || '';
            }

            var columnPassedFlag = true,
                columnMsg = '',
                elel = document.body;
            if (this.editComponent[field] && this.editComponent[field].element) {
                elel = this.editComponent[field].element;
            }
            var validate$$1 = new Validate({
                el: elel,
                single: true,
                required: required,
                validType: validType,
                placement: placement,
                tipId: tipId,
                errorMsg: errorMsg,
                nullMsg: nullMsg,
                maxLength: maxLength,
                minLength: minLength,
                max: max,
                min: min,
                maxNotEq: maxNotEq,
                minNotEq: minNotEq,
                reg: reg,
                showFix: true
            });
            for (var i = 0; i < rows.length; i++) {
                var value = rows[i].value[field];
                var result = validate$$1.check({
                    pValue: value,
                    showMsg: false
                });
                passed = result.passed && passed;
                if (!result.passed) {
                    columnPassedFlag = false;
                    if (options.showMsg && columnMsg.indexOf(result.Msg) < 0) {
                        columnMsg += result.Msg + ' ';
                    }
                    // 设置背景色
                    var index = this.grid.getIndexOfColumn(column);
                    var contentDiv = document.getElementById(this.grid.options.id + '_content_tbody');
                    var row = contentDiv.querySelectorAll('tr')[i];
                    var td = row.querySelectorAll('td')[index];
                    var div = td.querySelector('div');
                    addClass(td, 'u-grid-err-td');
                    addClass(div, 'u-grid-err-td');
                    var msg = '(' + title + ')' + result.Msg + ';';
                    evalStr = 'if(typeof obj' + i + ' == \'undefined\'){var obj' + i + '= {}; MsgArr.push(obj' + i + ');obj' + i + '.rowNum = ' + i + '; obj' + i + '.arr = new Array();}obj' + i + '.arr.push(msg)';
                    eval(evalStr);
                }
            }
            // 如果存在错误信息并且提示信息
            if (!columnPassedFlag && options.showMsg) {
                columnShowMsg += title + ':' + columnMsg + '<br>';
            }
            if (!columnPassedFlag) {
                if (!hasErrow) {
                    // 滚动条要滚动到第一次出现错误的数据列
                    hasErrow = true;
                    var ind = this.grid.getIndexOfColumn(column);
                    var thDom = $('#' + this.grid.options.id + '_header_table th', this.grid.$ele)[ind];
                    var left = thDom.attrLeftTotalWidth;
                    var contentDom = $('#' + this.grid.options.id + '_content_div', this.grid.$ele)[0];
                    contentDom.scrollLeft = left;
                }
            }
        }
        if (columnShowMsg) showMessage({
            msg: columnShowMsg,
            showSeconds: 3
        });
        if (MsgArr.length > 0) {
            MsgArr.sort(function (a1, a2) {
                if (a1.rowNum > a2.rowNum) return 1;else return -1;
            });
        }

        for (var k = 0; k < MsgArr.length; k++) {
            var rowNum = MsgArr[k].rowNum;
            rowMsg = MsgArr[k].arr.join('');
            wholeMsg += '第' + (rowNum + 1) + '行:' + rowMsg;
        }

        return {
            passed: passed,
            comp: this,
            Msg: wholeMsg
        };
    },
    /**
     * [动态的设置下拉框的数据源]
     * 只有renderType设置为comboRender，editType为combo的情况才能通过此方式修改datasource
     * @param {[object]} data {fieldName:字段名, comboData:下拉的数据源}
     */
    setComboDataByField: function setComboDataByField(data) {
        var oThis, comboboxAdapter;
        oThis = this;
        // 如果data不存在则不赋值
        if (!data) {
            return;
        }
        //获取comboboxAdapter
        comboboxAdapter = oThis.editComponent[data.fieldName];
        comboboxAdapter.comp.setComboData(data.comboData);
    },

    setColumnFixed: function setColumnFixed(field, fixed) {
        this.grid.setColumnFixed(field, fixed);
    }
});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: GridAdapter,
    name: 'grid'
});

/**
 * Module : Kero pagination
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-09 19:09:39
 */

var PaginationAdapter = u.BaseAdapter.extend({
    mixins: [],
    init: function init() {
        var self = this;
        if (!this.dataModel.pageSize() && this.options.pageSize) this.dataModel.pageSize(this.options.pageSize);
        this.options.pageSize = this.dataModel.pageSize() || this.options.pageSize;
        var options = extend({}, {
            el: this.element
        }, this.options);
        this.comp = new pagination(options);
        this.element['u.pagination'] = this.comp;
        this.comp.dataModel = this.dataModel;
        this.pageChange = getFunction(this.viewModel, this.options['pageChange']);
        this.sizeChange = getFunction(this.viewModel, this.options['sizeChange']);

        this.comp.on('pageChange', function (pageIndex) {
            self.defaultPageChange(pageIndex);
            if (typeof self.pageChange == 'function') {
                self.pageChange(pageIndex);
            }
        });
        this.comp.on('sizeChange', function (size, pageIndex) {
            self.defaultSizeChange(size, pageIndex);
            if (typeof self.sizeChange == 'function') {
                self.sizeChange(size, pageIndex);
            }
        });

        this.dataModel.totalPages.subscribe(function (value) {
            self.comp.update({
                totalPages: value
            });
        });

        this.dataModel.pageSize.subscribe(function (value) {
            self.comp.update({
                pageSize: value
            });
        });

        this.dataModel.pageIndex.subscribe(function (value) {
            self.comp.update({
                currentPage: value + 1
            });
        });

        this.dataModel.totalRow.subscribe(function (value) {
            self.comp.update({
                totalCount: value
            });
        });

        if (this.comp.options.pageList.length > 0) {
            this.comp.options.pageSize = this.comp.options.pageList[0];
            ///this.comp.trigger('sizeChange', options.pageList[0])
            var checkIndex = 0;
            var defalutPageSize = this.comp.dataModel.pageSize();
            if (defalutPageSize > 0) {
                checkIndex = this.comp.options.pageList.indexOf(defalutPageSize);
            }
            checkIndex = checkIndex < 0 ? 0 : checkIndex;
            this.dataModel.pageSize(this.comp.options.pageList[checkIndex]);
        }

        // 如果datatable已经创建则根据datatable设置分页组件
        // self.comp.update({totalPages: this.dataModel.totalPages()})
        // self.comp.update({pageSize: this.dataModel.pageSize()})
        // self.comp.update({currentPage: this.dataModel.pageIndex() + 1})
        // self.comp.update({totalCount: this.dataModel.totalRow()})
        self.comp.update({
            totalPages: this.dataModel.totalPages(),
            pageSize: this.dataModel.pageSize(),
            currentPage: this.dataModel.pageIndex() + 1,
            totalCount: this.dataModel.totalRow()
        });
    },

    defaultPageChange: function defaultPageChange(pageIndex) {
        this.dataModel.pageIndex(pageIndex);
        if (this.dataModel.hasPage(pageIndex)) {
            this.dataModel.setCurrentPage(pageIndex);
        } else {}
    },

    defaultSizeChange: function defaultSizeChange(size, pageIndex) {
        this.dataModel.pageSize(size);
    },

    disableChangeSize: function disableChangeSize() {
        this.comp.disableChangeSize();
    },

    enableChangeSize: function enableChangeSize() {
        this.comp.enableChangeSize();
    }
});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: PaginationAdapter,
    name: 'pagination'
});

/**
 * Module : Kero phonenumber
 * Author : Alex(zhoubyc@yonyou.com)
 * Date	  : 2016-08-09 20:02:50
 */
/**
 * 手机号控件
 */
var PhoneNumberAdapter = StringAdapter.extend({
    init: function init() {
        var self = this;
        this.element = this.element.nodeName === 'INPUT' ? this.element : this.element.querySelector('input');
        PhoneNumberAdapter.superclass.init.apply(this);
        this.validType = 'phone';
        this.masker = new PhoneNumberMasker(this.maskerMeta);

        on$1(this.element, 'keydown', function (e) {
            if (self.enable) {
                var code = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
                if (e.ctrlKey && (e.keyCode == 67 || e.keyCode == 86)) {
                    //复制粘贴
                    return true;
                }
                if (!(code >= 48 && code <= 57 || code >= 96 && code <= 105 || code == 37 || code == 39 || code == 8 || code == 46)) {
                    //阻止默认浏览器动作(W3C)
                    if (e && e.preventDefault) e.preventDefault();
                    //IE中阻止函数器默认动作的方式
                    else window.event.returnValue = false;
                    return false;
                }
            }
        });
    }
});
if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: PhoneNumberAdapter,
    name: 'phoneNumber'
});

/**
 * Module : Kero LandLine
 * Author : Alex(zhoubyc@yonyou.com)
 * Date	  : 2016-08-09 20:02:50
 */
/**
 * 电话号码控件
 */
var LandLineAdapter = StringAdapter.extend({
    init: function init() {
        var self = this;
        this.element = this.element.nodeName === 'INPUT' ? this.element : this.element.querySelector('input');
        LandLineAdapter.superclass.init.apply(this);
        this.validType = 'landline';
        this.masker = new PhoneNumberMasker(this.maskerMeta);

        on$1(this.element, 'keydown', function (e) {
            if (self.enable) {
                var code = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
                if (e.ctrlKey && (e.keyCode == 67 || e.keyCode == 86)) {
                    //复制粘贴
                    return true;
                }
                if (!(code >= 48 && code <= 57 || code >= 96 && code <= 105 || code == 37 || code == 39 || code == 8 || code == 46 || code == 109 || code == 189)) {
                    //阻止默认浏览器动作(W3C)
                    if (e && e.preventDefault) e.preventDefault();
                    //IE中阻止函数器默认动作的方式
                    else window.event.returnValue = false;
                    return false;
                }
            }
        });
    }
});
if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: LandLineAdapter,
    name: 'landLine'
});

/**
 * Module : Kero percent
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-09 20:02:50
 */

var ProgressAdapter = u.BaseAdapter.extend({
    init: function init() {
        var self = this;

        this.comp = new Progress(this.element);
        this.element['u.Progress'] = this.comp;

        this.dataModel.ref(this.field).subscribe(function (value) {
            self.modelValueChange(value);
        });
    },

    modelValueChange: function modelValueChange(val) {
        this.comp.setProgress(val);
    }
});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: ProgressAdapter,
    name: 'u-progress'
});

/**
 * Module : Kero switch adapter
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-10 10:42:15
 */

var SwitchAdapter = u.BaseAdapter.extend({
    init: function init() {
        var self = this;
        this.options = this.options;
        this.comp = new Switch(this.element);
        this.element['u.Switch'] = this.comp;
        this.checkedValue = this.options['checkedValue'] || this.comp._inputElement.value;
        this.unCheckedValue = this.options["unCheckedValue"];
        this.comp.on('change', function (event) {
            if (self.slice) return;
            if (self.comp._inputElement.checked) {
                self.dataModel.setValue(self.field, self.checkedValue);
            } else {
                self.dataModel.setValue(self.field, self.unCheckedValue);
            }
        });

        this.dataModel.ref(this.field).subscribe(function (value) {
            self.modelValueChange(value);
        });

        var self = this;
        //处理只读
        if (this.options['enable'] && (this.options['enable'] == 'false' || this.options['enable'] == false)) {
            this.setEnable(false);
        } else {
            this.dataModel.refEnable(this.field).subscribe(function (value) {
                self.setEnable(value);
            });
            this.setEnable(this.dataModel.isEnable(this.field));
        }
    },

    modelValueChange: function modelValueChange(val) {
        if (this.slice) return;
        if (this.comp._inputElement.checked != (val === this.checkedValue)) {
            this.slice = true;
            this.comp.toggle();
            this.slice = false;
        }
    },
    setEnable: function setEnable(enable) {
        if (enable === true || enable === 'true') {
            this.enable = true;
            this.comp.enable();
        } else if (enable === false || enable === 'false') {
            this.enable = false;
            this.comp.disable();
        }
    }
});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: SwitchAdapter,
    name: 'u-switch'
});

/**
 * Module : Kero textarea adapter
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-10 12:40:46
 */

var TextAreaAdapter = u.BaseAdapter.extend({
    init: function init() {
        var self = this;
        this.element = this.element.nodeName === 'TEXTAREA' ? this.element : this.element.querySelector('textarea');
        if (!this.element) {
            throw new Error('not found TEXTAREA element, u-meta:' + JSON.stringify(this.options));
        }
        var placeholder = this.options['placeholder'];
        if (placeholder) this.element.placeholder = placeholder;

        on$1(this.element, 'focus', function () {
            self.setShowValue(self.getValue());
        });
        on$1(this.element, 'blur', function () {
            self.setValue(self.element.value);
        });
    }
});
if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: TextAreaAdapter,
    name: 'textarea'
});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: TextAreaAdapter,
    name: 'u-textarea'
});

/**
 * Module : Kero textfield adapter
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-10 13:00:27
 */

var TextFieldAdapter = u.BaseAdapter.extend({
    init: function init() {
        var options = {};
        var dataType = this.dataModel.getMeta(this.field, 'type') || 'string';
        this.comp = new Text(this.element);
        this.element['u.Text'] = this.comp;

        options["options"] = this.options;
        options["el"] = this.element;
        options["model"] = this.viewModel;
        options["app"] = this.app;

        if (dataType === 'float') {
            this.trueAdpt = new FloatAdapter(options);
        } else if (dataType === 'string') {
            this.trueAdpt = new StringAdapter(options);
        } else if (dataType === 'integer') {
            this.trueAdpt = new IntegerAdapter(options);
        } else {
            return;
            //throw new Error("'u-text' only support 'float' or 'string' or 'integer' field type, not support type: '" + dataType + "', field: '" +this.field+ "'");
        }
        extend(this, this.trueAdpt);

        this.trueAdpt.comp = this.comp;
        this.trueAdpt.setShowValue = function (showValue) {
            this.showValue = showValue;
            this.comp.change(showValue);
            this.element.title = showValue;
        };
        // 解决初始设置值后，没有走这个setShowValue方法问题
        if (this.trueAdpt.enable) {
            this.trueAdpt.setShowValue(this.trueAdpt.getValue());
        }
        return this.trueAdpt;
    }
});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: TextFieldAdapter,
    name: 'u-text'
});

/**
 * Module : Kero yearmonth adapter
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-10 14:11:50
 */

var MonthDateAdapter = u.BaseAdapter.extend({
    init: function init() {
        var self = this;
        this.validType = 'monthdate';
        this.format = this.getOption('format');
        this.comp = new MonthDate({
            el: this.element,
            showFix: this.options.showFix,
            format: this.format
        });

        this.comp.on('valueChange', function (event) {
            self.slice = true;
            if (self.dataModel.getValue(self.field) !== event.value) {
                self.dataModel.setValue(self.field, event.value);
            }
            self.slice = false;
            //self.setValue(event.value);
        });
    },
    modelValueChange: function modelValueChange(value) {
        if (this.slice) return;
        this.comp.setValue(value);
    },
    setEnable: function setEnable(enable) {}
});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: MonthDateAdapter,
    name: 'u-monthdate'
});

/**
 * Module : Kero tree adapter
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-16 10:44:14
 */

var TreeAdapter = u.BaseAdapter.extend({
    mixins: [],
    init: function init() {
        var options = this.options,
            opt = options || {},
            viewModel = this.viewModel;
        var element = this.element;
        this.id = opt['id'];

        var oThis = this;
        this.dataTable = getJSObject(viewModel, options["data"]);
        this.element = element;
        this.$element = $(element);
        this.id = options['id'];
        this.element.id = this.id;
        this.options = options;
        this.events = $.extend(true, {}, options.events);
        var treeSettingDefault = {
            //			async: {  //缓加载
            //				enable: oThis.options.asyncFlag,
            //				url: oThis.options.asyncFun
            //			},
            data: {
                simpleData: {
                    enable: true
                }
            },
            check: {
                chkboxType: {
                    "Y": "",
                    "N": ""
                }
            },
            callback: {
                //点击前
                beforeClick: function beforeClick(e, id, node) {
                    if (oThis.events.beforeClick) {
                        getFunction(viewModel, oThis.events.beforeClick)(e, id, node);
                    }
                },
                // 选中/取消选中事件
                onCheck: function onCheck(e, id, node) {
                    if (oThis.selectSilence) {
                        return;
                    }
                    var nodes = oThis.tree.getCheckedNodes();
                    var nowSelectIndexs = oThis.dataTable.getSelectedIndexs();
                    var indexArr = [];
                    for (var i = 0; i < nodes.length; i++) {
                        // 获取到节点的idValue
                        var idValue = nodes[i].id;
                        // 根据idValue查找到对应数据的rowId
                        var rowId = oThis.getRowIdByIdValue(idValue);
                        var index = oThis.dataTable.getIndexByRowId(rowId);
                        indexArr.push(index);
                    }

                    // 比较2个数组的差异然后进行选中及反选
                    var needSelectArr = [];
                    for (var i = 0; i < indexArr.length; i++) {
                        var nowIndex = indexArr[i];
                        var hasFlag = false;
                        for (var j = 0; j < nowSelectIndexs.length; j++) {
                            if (nowIndex == nowSelectIndexs[j]) {
                                hasFlag = true;
                                break;
                            }
                        }
                        if (!hasFlag) {
                            needSelectArr.push(nowIndex);
                        }
                    }
                    var needUnSelectArr = [];
                    for (var i = 0; i < nowSelectIndexs.length; i++) {
                        var nowIndex = nowSelectIndexs[i];
                        var hasFlag = false;
                        for (var j = 0; j < indexArr.length; j++) {
                            if (nowIndex == indexArr[j]) {
                                hasFlag = true;
                                break;
                            }
                        }
                        if (!hasFlag) {
                            needUnSelectArr.push(nowIndex);
                        }
                    }

                    oThis.dataTable.addRowsSelect(needSelectArr);
                    oThis.dataTable.setRowsUnSelect(needUnSelectArr);
                    // 获取到节点的idValue
                    var idValue = node.id;
                    // 根据idValue查找到对应数据的rowId
                    var rowId = oThis.getRowIdByIdValue(idValue);
                    var index = oThis.dataTable.getIndexByRowId(rowId);
                    oThis.dataTable.setRowFocus(index);
                },
                // 单选时点击触发选中
                onClick: function onClick(e, id, node) {
                    if (oThis.selectSilence) {
                        return;
                    }
                    //点击时取消所有超链接效果
                    $('#' + id + ' li').removeClass('focusNode');
                    $('#' + id + ' a').removeClass('focusNode');
                    //添加focusNode样式
                    $('#' + node.tId).addClass('focusNode');
                    $('#' + node.tId + '_a').addClass('focusNode');
                    // 获取到节点的idValue
                    var idValue = node.id;
                    // 根据idValue查找到对应数据的rowId
                    var rowId = oThis.getRowIdByIdValue(idValue);
                    var index = oThis.dataTable.getIndexByRowId(rowId);
                    //上面这种情况说明是checkbox选中需要addRowSelect
                    if (oThis.tree.setting.check.enable && oThis.tree.setting.check.chkStyle === 'checkbox') {
                        oThis.dataTable.addRowSelect(index);
                    } else {
                        oThis.dataTable.setRowSelect(index);
                    }
                    oThis.dataTable.setRowFocus(index);

                    if (oThis.events.onClick) {
                        getFunction(viewModel, oThis.events.onClick)(e, id, node);
                    }
                }
            }

        };

        var setting = {};
        if (this.options.setting) {
            //if (typeof(JSON) == "undefined")
            //	setting = eval("(" + this.options.setting + ")");
            //else
            setting = getJSObject(viewModel, this.options.setting) || getJSObject(window, this.options.setting);
        }

        // 遍历callback先执行默认之后再执行用户自定义的。
        var callbackObj = treeSettingDefault.callback;
        var userCallbackObj = setting.callback;

        var callbackObj = treeSettingDefault.callback;
        var userCallbackObj = setting.callback;

        var userBeforeClick = userCallbackObj && userCallbackObj['beforeClick'];
        if (userBeforeClick) {
            var newBeforeClick = function newBeforeClick() {
                callbackObj['beforeClick'].apply(this, arguments);
                userBeforeClick.apply(this, arguments);
            };
            userCallbackObj['beforeClick'] = newBeforeClick;
        }

        var userOnCheck = userCallbackObj && userCallbackObj['onCheck'];
        if (userOnCheck) {
            var newOnCheck = function newOnCheck() {
                callbackObj['onCheck'].apply(this, arguments);
                userOnCheck.apply(this, arguments);
            };
            userCallbackObj['onCheck'] = newOnCheck;
        }

        var userOnClick = userCallbackObj && userCallbackObj['onClick'];
        if (userOnClick) {
            var newOnClick = function newOnClick() {
                callbackObj['onClick'].apply(this, arguments);
                userOnClick.apply(this, arguments);
            };
            userCallbackObj['onClick'] = newOnClick;
        }

        /*for(var f in callbackObj){
        	var fun = callbackObj[f],
        		userFun = userCallbackObj && userCallbackObj[f];
        	if(userFun){
        		var newF = function(){
        			fun.apply(this,arguments);
        			userFun.apply(this,arguments);
        		}
        		userCallbackObj[f] = newF;
        	}
        }*/

        var treeSetting = $.extend(true, {}, treeSettingDefault, setting);

        var treeData = [];
        // 根据idField、pidField、nameField构建ztree所需data
        var data = this.dataTable.rows();
        if (data.length > 0) {
            if (this.options.codeTree) {
                // 首先按照string进行排序
                data.sort(function (a, b) {
                    var aObj = a.data;
                    var bObj = b.data;
                    var v1 = aObj[oThis.options.idField].value + '';
                    var v2 = bObj[oThis.options.idField].value + '';
                    try {
                        return v1.localeCompare(v2);
                    } catch (e) {
                        return 0;
                    }
                });
                var idArr = new Array();
                $.each(data, function () {
                    var dataObj = this.data;
                    var idValue = dataObj[oThis.options.idField].value;
                    idArr.push(idValue);
                });
                var preValue = '';
                $.each(data, function () {
                    var value = oThis.cloneValue(this.data);
                    var dataObj = this.data;
                    var idValue = dataObj[oThis.options.idField].value;
                    var nameValue = dataObj[oThis.options.nameField].value;
                    var pidValue = '';
                    var startFlag = -1;
                    // 如果当前值包含上一个值则上一个值为pid
                    if (preValue != '') {
                        var startFlag = idValue.indexOf(preValue);
                    }
                    if (startFlag == 0) {
                        pidValue = preValue;
                    } else {
                        for (var i = 1; i < preValue.length; i++) {
                            var s = preValue.substr(0, i);
                            var f = idValue.indexOf(s);
                            if (f == 0) {
                                var index = $.inArray(s, idArr);
                                if (index > 0 || index == 0) {
                                    pidValue = s;
                                }
                            } else {
                                break;
                            }
                        }
                    }
                    value['id'] = idValue;
                    value['pId'] = pidValue;
                    value['name'] = nameValue;

                    treeData.push(value);
                    preValue = idValue;
                });
            } else {
                var values = new Array();
                $.each(data, function () {
                    var value = oThis.cloneValue(this.data);
                    var dataObj = this.data;
                    var idValue = dataObj[oThis.options.idField].value;
                    var pidValue = dataObj[oThis.options.pidField].value;
                    var nameValue = dataObj[oThis.options.nameField].value;

                    value['id'] = idValue;
                    value['pId'] = pidValue;
                    value['name'] = nameValue;
                    treeData.push(value);
                });
            }
        }

        this.tree = $.fn.zTree.init(this.$element, treeSetting, treeData);

        // dataTable事件
        this.dataTable.on(DataTable$1.ON_ROW_SELECT, function (event) {
            oThis.selectSilence = true;
            var nodes = oThis.tree.getCheckedNodes();
            $.each(nodes, function () {
                var node = this;
                if (oThis.tree.setting.view.selectedMulti == true && node.checked) {
                    oThis.tree.checkNode(node, false, true, true);
                } else {
                    oThis.tree.cancelSelectedNode(node);
                }
            });
            /*index转化为grid的index*/
            $.each(event.rowIds, function () {
                var row = oThis.dataTable.getRowByRowId(this);
                var dataObj = row.data;
                var idValue = dataObj[oThis.options.idField].value;
                var node = oThis.tree.getNodeByParam('id', idValue);
                if (oThis.tree.setting.view.selectedMulti == true) {
                    if (!node.checked) oThis.tree.checkNode(node, true, false, true);
                } else {
                    oThis.tree.selectNode(node, false);
                }
            });
            oThis.selectSilence = false;
        });

        this.dataTable.on(DataTable$1.ON_ROW_UNSELECT, function (event) {
            /*index转化为grid的index*/
            $.each(event.rowIds, function () {
                var row = oThis.dataTable.getRowByRowId(this);
                var dataObj = row.data;
                var idValue = dataObj[oThis.options.idField].value;
                var node = oThis.tree.getNodeByParam('id', idValue);
                if (oThis.tree.setting.view.selectedMulti == true && node.checked) {
                    oThis.tree.checkNode(node, false, true, true);
                } else {
                    oThis.tree.cancelSelectedNode(node);
                }
            });
        });

        this.dataTable.on(DataTable$1.ON_INSERT, function (event) {
            //var gridRows = new Array();
            var dataArray = [],
                nodes = [];
            var hasChild = false; //是否含有子节点
            $.each(event.rows, function () {
                var value = oThis.cloneValue(this.data),
                    hasPar = false;
                var dataObj = this.data;
                var idValue = dataObj[oThis.options.idField].value;
                var pidValue = dataObj[oThis.options.pidField].value;
                var nameValue = dataObj[oThis.options.nameField].value;
                value['id'] = idValue;
                value['pId'] = pidValue;
                value['name'] = nameValue;
                var childNode = oThis.tree.getNodeByParam('pid', idValue);
                var pNode = oThis.tree.getNodeByParam('id', pidValue);
                if (childNode && childNode.length > 0) {
                    hasChild = true;
                }
                if (pNode && pNode.length > 0) {
                    hasPar = true;
                    //oThis.tree.addNodes(pNode, value, true);
                }
                if (!hasChild && hasPar) {
                    //不存在子节点,存在父节点之间插入
                    oThis.tree.addNodes(pNode, value, true);
                } else {
                    dataArray.push(value);
                }
            });
            if (!hasChild) {
                //如果没有子节点，将当前节点作为根节点之间插入
                nodes = oThis.tree.transformTozTreeNodes(dataArray);
                oThis.tree.addNodes(null, nodes, true, event.index);
            } else {//如果含有子节点,重新渲染

            }
        });

        this.dataTable.on(DataTable$1.ON_DELETE, function (event) {
            /*index转化为grid的index*/
            $.each(event.rows, function () {
                var row = this;
                var idValue = row.getValue(oThis.options.idField);
                var node = oThis.tree.getNodeByParam('id', idValue);
                oThis.tree.removeNode(node);
            });
        });

        this.dataTable.on(DataTable$1.ON_DELETE_ALL, function (event) {
            var nodes = oThis.tree.getNodes();
            for (var i = 0, l = nodes.length; i < l; i++) {
                var node = oThis.tree.getNodeByParam('id', nodes[i].id);
                oThis.tree.removeNode(node);
                i--;
                l = nodes.length;
            }
        });

        // 加载数据,只考虑viewModel传入grid
        this.dataTable.on(DataTable$1.ON_LOAD, function (data) {
            var data = oThis.dataTable.rows();
            if (data.length > 0) {
                var values = new Array();
                $.each(data, function () {
                    var value = {};
                    var dataObj = this.data;
                    var idValue = dataObj[oThis.options.idField].value;
                    var pidValue = dataObj[oThis.options.pidField].value;
                    var nameValue = dataObj[oThis.options.nameField].value;

                    value['id'] = idValue;
                    value['pId'] = pidValue;
                    value['name'] = nameValue;
                    treeData.push(value);
                });
            }

            this.tree = $.fn.zTree.init(this.$element, treeSetting, treeData);
        });

        this.dataTable.on(DataTable$1.ON_VALUE_CHANGE, function (event) {
            var row = oThis.dataTable.getRowByRowId(event.rowId);
            if (!row) return;
            var treeArray = oThis.tree.getNodes();
            var id = row.getValue(oThis.options.idField);
            var node = oThis.tree.getNodeByParam('id', id);
            if (!node && treeArray) {
                //如果node为null则取树数组的最后一个节点

                node = treeArray[treeArray.length - 1];
            }
            var field = event.field;
            var value = event.newValue;
            if (oThis.options.idField == field && node) {
                node.id = value;
                oThis.tree.updateNode(node);
            }
            if (oThis.options.nameField == field && node) {
                node.name = value;
                oThis.tree.updateNode(node);
            } else if (oThis.options.pidField == field) {
                var targetNode = oThis.tree.getNodeByParam('id', value);
                oThis.tree.moveNode(targetNode, node, "inner");
            }
        });

        // 通过树id获取dataTable的rowId
        this.getRowIdByIdValue = function (idValue) {
            var oThis = this;
            var rowId = null;
            $.each(this.dataTable.rows(), function () {
                var dataObj = this.data;
                var id = this.rowId;
                if (dataObj[oThis.options.idField].value == idValue) {
                    rowId = id;
                }
            });
            return rowId;
        };

        return this;
    },

    getName: function getName() {
        return 'tree';
    },

    cloneValue: function cloneValue(Data) {
        var newData = {};
        for (var field in Data) {
            var value = Data[field].value;
            newData[field] = value;
        }
        return newData;
    }

});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: TreeAdapter,
    name: 'tree'
    //dataType: 'float'
});

/**
 * Module : Kero multilang adapter
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-10 14:11:50
 */

var MultilangAdapter = u.BaseAdapter.extend({
    mixins: [],
    init: function init() {

        var self = this;
        var multinfo;
        if (this.options) {
            multinfo = this.options.multinfo;
        } else {
            multinfo = core.getLanguages(); //暂时不支持
        }
        multinfo = multinfo.split(',');

        self.multiLen = multinfo.length;
        var multidata = [];
        this.field = this.options.field;

        if (parseInt(this.options.rowIndex) > -1) {
            if ((this.options.rowIndex + '').indexOf('.') > 0) {
                // 主子表的情况
                var childObj = ValueMixin.methods.getChildVariable.call(this);
                var lastRow = childObj.lastRow;
                var lastField = childObj.lastField;
                this.field = lastField;
            }
        }

        // 创建组件 - 此处不加el?
        this.comp = new Multilang({
            el: this.element,
            "multinfo": multinfo,
            "field": this.field
        });

        if (parseInt(this.options.rowIndex) > -1) {
            if ((this.options.rowIndex + '').indexOf('.') > 0) {
                // 主子表的情况
                var childObj = ValueMixin.methods.getChildVariable.call(this);
                var lastRow = childObj.lastRow;
                var lastField = childObj.lastField;

                this.dataModel.on(DataTable.ON_VALUE_CHANGE, function (opt) {
                    var id = opt.rowId;
                    var field = opt.field;
                    var value = opt.newValue;
                    var obj = {
                        fullField: self.options.field,
                        index: self.options.rowIndex
                    };
                    var selfRow = self.dataModel.getChildRow(obj);
                    var row = opt.rowObj;
                    if (selfRow == row && field.indexOf(lastField) == 0) {
                        self.modelValueChange(field, value);
                    }
                });

                this.dataModel.on(DataTable.ON_INSERT, function (opt) {
                    var obj = {
                        fullField: self.options.field,
                        index: self.options.rowIndex
                    };
                    var field,
                        value,
                        row = self.dataModel.getChildRow(obj);
                    if (row) {
                        for (var i = 0; i < self.multiLen; i++) {
                            if (i == 0) {
                                field = lastField;
                            } else {
                                field = lastField + (i + 1);
                            }
                            value = row.getValue(field);
                            self.modelValueChange(field, value);
                        }
                    }
                });

                if (lastRow) {
                    var field, value;
                    for (var i = 0; i < self.multiLen; i++) {
                        if (i == 0) {
                            field = lastField;
                        } else {
                            field = lastField + (i + 1);
                        }
                        value = lastRow.getValue(field);
                        self.modelValueChange(field, value);
                    }
                }
            } else {

                this.dataModel.on(DataTable.ON_VALUE_CHANGE, function (opt) {
                    var id = opt.rowId;
                    var field = opt.field;
                    var value = opt.newValue;
                    var row = opt.rowObj;
                    var rowIndex = self.dataModel.getRowIndex(row);
                    if (rowIndex == self.options.rowIndex && field.indexOf(self.field) == 0) {
                        self.modelValueChange(field, value);
                    }
                });

                this.dataModel.on(DataTable.ON_INSERT, function (opt) {
                    var field,
                        value,
                        row = self.dataModel.getRow(self.options.rowIndex);
                    if (row) {
                        for (var i = 0; i < self.multiLen; i++) {
                            if (i == 0) {
                                field = self.field;
                            } else {
                                field = self.field + (i + 1);
                            }
                            value = row.getValue(field);
                            self.modelValueChange(field, value);
                        }
                    }
                });

                var rowObj = this.dataModel.getRow(this.options.rowIndex);
                var field, value;
                if (rowObj) {
                    for (var i = 0; i < self.multiLen; i++) {
                        if (i == 0) {
                            field = self.field;
                        } else {
                            field = self.field + (i + 1);
                        }
                        value = rowObj.getValue(field);
                        self.modelValueChange(field, value);
                    }
                }
            }
        } else {
            // datatable传值到UI - 初始化 & 监听
            this.dataModel.on(DataTable.ON_VALUE_CHANGE, function (opt) {
                var id = opt.rowId;
                var field = opt.field;
                var value = opt.newValue;
                var row = opt.rowObj;
                if (field.indexOf(self.field) == 0) {
                    self.modelValueChange(field, value);
                }
            });

            this.dataModel.on(DataTable.ON_INSERT, function (opt) {
                var field,
                    value,
                    row = opt.rows[0];
                for (var i = 0; i < self.multiLen; i++) {
                    if (i == 0) {
                        field = self.field;
                    } else {
                        field = self.field + (i + 1);
                    }
                    value = row.getValue(field);
                    self.modelValueChange(field, value);
                }
            });
            var field, value;
            for (var i = 0; i < self.multiLen; i++) {
                if (i == 0) {
                    field = self.field;
                } else {
                    field = self.field + (i + 1);
                }
                value = self.dataModel.getValue(field);
                self.modelValueChange(field, value);
            }
        }

        // meta标签写入方式
        // var rowObj = this.dataModel.getRow(this.options.rowIndex);
        // if (rowObj) {
        //     this.modelValueChange(rowObj.getValue(this.field));
        // }

        // UI传值到datatable
        this.comp.on('change.u.multilang', function (object) {
            self.slice = true;
            self.setValue(object.field, object.newValue);
            self.slide = false;
        });
    },
    modelValueChange: function modelValueChange(field, value) {
        this.comp.setDataValue(field, value);
    },
    /**
     * [setValue   由于多语组件对应多个field，因此setValue需要额外传入field字段]
     * @param {[type]} field [发生改变的字段]
     * @param {[type]} value [发生改变的值]
     */
    setValue: function setValue(field, value) {
        this.slice = true;
        if (parseInt(this.options.rowIndex) > -1) {
            if ((this.options.rowIndex + '').indexOf('.') > 0) {
                var childObj = ValueMixin.methods.getChildVariable.call(this);
                var lastRow = childObj.lastRow;
                if (lastRow) lastRow.setValue(field, value);
            } else {
                var rowObj = this.dataModel.getRow(this.options.rowIndex);
                if (rowObj) rowObj.setValue(field, value);
            }
        } else {
            this.dataModel.setValue(field, value);
        }
        this.slice = false;
    }

});

if (u.compMgr) u.compMgr.addDataAdapter({
    adapter: MultilangAdapter,
    name: 'u-multilang'
});

/**
 * Module : Kero webpack entry index
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-10 14:51:05
 */
var ex$1 = {
	BaseAdapter: BaseAdapter,
	CascaderAdapter: CascaderAdapter,
	CheckboxAdapter: CheckboxAdapter,
	CkEditorAdapter: CkEditorAdapter,
	ComboboxAdapter: ComboboxAdapter,
	CurrencyAdapter: CurrencyAdapter,
	DateTimeAdapter: DateTimeAdapter,
	FloatAdapter: FloatAdapter,
	IntegerAdapter: IntegerAdapter,
	MonthAdapter: MonthAdapter,
	MonthDateAdapter: MonthDateAdapter,
	PaginationAdapter: PaginationAdapter,
	PassWordAdapter: PassWordAdapter,
	PercentAdapter: PercentAdapter,
	PhoneNumberAdapter: PhoneNumberAdapter,
	LandLineAdapter: LandLineAdapter,
	StringAdapter: StringAdapter,
	ProgressAdapter: ProgressAdapter,
	RadioAdapter: RadioAdapter,
	SwitchAdapter: SwitchAdapter,
	TextAreaAdapter: TextAreaAdapter,
	TextFieldAdapter: TextFieldAdapter,
	TimeAdapter: TimeAdapter,
	UrlAdapter: UrlAdapter,
	YearAdapter: YearAdapter,
	YearMonthAdapter: YearMonthAdapter,
	EnableMixin: EnableMixin,
	RequiredMixin: RequiredMixin,
	ValidateMixin: ValidateMixin,
	ValueMixin: ValueMixin,
	MultilangAdapter: MultilangAdapter
};

extend(ex$1, window.u || {});
window.u = ex$1;

/**
 * Module : kero app serverEvent dataTable
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2016-07-29 09:34:01
 */
/**
 * 增加一个datatable
 * @memberof ServerEvent
 * @param  {number} dataTableId dataTable的id：唯一标示
 * @param  {string} rule
 * all：所有数据；
 * current：当前行数据；
 * focus：焦点行数据；
 * select：选中行数据；
 * change：发生改变的数据；
 * @example
 * app.serverEvent().addDataTable('datatableid','all')
 */
var addDataTable$1 = function addDataTable(dataTableId, rule) {
    var dataTable = this.app.getDataTable(dataTableId);
    this.datas[dataTableId] = dataTable.getDataByRule(rule);
    return this;
};

/**
 * 增加多个datatable
 * @memberof ServerEvent
 * @param  {array} dataTables dataTable的数组
 * @param  {string} rule
 * all：所有数据；
 * current：当前行数据；
 * focus：焦点行数据；
 * select：选中行数据；
 * change：发生改变的数据；
 * @example
 * app.serverEvent().addDataTables([datatableId,datatableId1,datatableId2],'all')
 */
var addDataTables = function addDataTables(dataTables, rule) {
    if (arguments.length == 2) {
        for (var i = 0; i < dataTables.length; i++) {
            var rule;
            if (typeof arguments[1] == 'string') {
                rule = arguments[1];
            } else if (isArray(arguments[1])) {
                rule = arguments[1][i];
            }
            this.addDataTable(dataTables[i], rule);
        }
    } else {
        for (var i = 0; i < dataTables.length; i++) {
            var dt = dataTables[i];
            if (typeof dt == 'string') this.addDataTable(dt);else {
                for (var key in dt) {
                    this.addDataTable(key, dt[key]);
                }
            }
        }
    }
    return this;
};

/**
 * 将rule对着匹配的datatable列表全部加入进来
 * @memberof ServerEvent
 * @param  {string} rule
 * all：所有数据；
 * current：当前行数据；
 * focus：焦点行数据；
 * select：选中行数据；
 * change：发生改变的数据；
 * @example
 * app.serverEvent().addAllDataTables('all')
 */
var addAllDataTables = function addAllDataTables(rule) {
    var dts = this.app.dataTables;
    for (var i = 0; i < dts.length; i++) {
        this.addDataTable(dts[i].id, rule);
    }
};

//将datable的列表更新
var updateDataTables = function updateDataTables(dataTables) {
    for (var key in dataTables) {
        var dt = this.app.getDataTable(key);
        if (dt) {
            dt.setData(dataTables[key]);
            dt.updateMeta(dataTables[key].meta);
        }
    }
};

/**
 * Module : kero app serverEvent fire
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2016-07-29 09:34:01
 */
/**
 * 前端缓存:前端会存储所有页的数据信息
 * @memberof ServerEvent
 * @param  {object} p 请求的json参数字段，必须包含url
 * @param  {string} p.url 请求地址
 * @param  {string} [p.type] 请求类型
 * @param  {string} [p.success] 请求成功回调方法
 * @param  {string} [p.error] 请求失败回调方法
 * @example <caption>fire方法的使用示例</caption>
 * app.serverEvent().addDataTable('dataTableid').fire({
 *  type:"get",
 *  url:"..../list",
 *  success:function(data){
 *  },
 *  error:function(data){
 *  }
 * })
 * @example <caption>fire方法传递给后台的数据示例</caption>
 * {
     "environment": {
         "clientAttributes": {}
     },
     "dataTables": {
         "dictTypeDa": {
             "meta": {
                 ...
             },
             "params": {
                 "cls": "com.yonyou.iuap.example.entity.mybatis.SysDictType",
                 "search_dicttypecode": "",
                 "search_dicttypename": ""
             },
             "pages": [{
                 "index": 0,
                 "select": [],
                 "focus": -1,
                 "rows": []
             }],
             "pageSize": 5,
             "pageIndex": 0,
             "isChanged": false,
             "master": "",
             "pageCache": true
         }
     },
     "compression": false,
     "compressType": "",
     "parameters": {}
 * }
 * @example <caption>fire方法后台返回的数据示例</caption>
 * {
     "dataTables": {
         "dictTypeDa": {
             "pageSize": 5,
             "pageIndex": 0,
             "totalPages": 5,
             "totalRow": 25,
             "pages": [{
                 "index": 0,
                 "select": [],
                 "current": -1,
                 "rows": [{
                     "id": "r22901",
                     "status": "nrm",
                     "data": {
                         ...
                     }
                 }...]
             }],
             "meta": null
         }
     },
     "comps": "",
     "custom": "",
     "contentType": ""
 * }
 */
var fire = function fire(p) {
    var self = this;
    var data = this.getData();
    data.parameters = ko.utils.stringifyJson(this.params);
    var params = {
        type: p.type || "POST",
        data: p.params || {},
        url: p.url || ServerEvent.DEFAULT.url,
        async: typeof p.async == 'undefined' ? ServerEvent.DEFAULT.async : p.async,
        singleton: p.singleton || ServerEvent.DEFAULT.singleton,
        success: p.success,
        error: p.error,
        dataType: 'json'
    };
    params.data.ctrl = p.ctrl;
    params.data.method = p.method;
    if (this.event) params.data.event = ko.utils.stringifyJson(this.event);
    var preSuccess = p.preSuccess || function () {};
    var orignSuccess = p.success || function () {};
    var orignError = params.error; //|| function(){}
    this.orignError = orignError;
    var deferred = params.deferred;
    if (!deferred || !deferred.resolve) {
        deferred = {
            resolve: function resolve() {}, reject: function reject() {}
        };
    }
    params.success = function (data, state, xhr) {
        if (typeof data === 'string') data = JSON.parse(data);
        if (self.processXHRError(self, data, state, xhr)) {
            preSuccess.call(null, data);
            self._successFunc(data, deferred);
            orignSuccess.call(null, data.custom);
            deferred.resolve();
        } else {
            deferred.reject();
        }
    };
    params.error = function (data, state, xhr) {
        if (typeof data === 'string') data = JSON.parse(data);
        if (self.processXHRError(self, data, state, xhr)) {
            if (orignError) orignError.call(null, data.custom);
            //				self._successFunc(data, deferred)
        } else {
            deferred.reject();
        }
    };
    params.data = extend(params.data, data);
    if ($) $.ajax(params);else ajax(params);
};

//数据请求成功后的回调方法实现
//deferred对象是从jQuery 1.5.0版本开始引入的
//deferred对象有三种执行状态----未完成，已完成和已失败
//deferred.resolve()，将deferred对象的执行状态从"未完成"改为"已完成"，从而触发success()方法。
//deferred.reject()，将deferred对象的执行状态从"未完成"改为"已失败"，从而触发error()方法。
var _successFunc$1 = function _successFunc(data, deferred) {
    if (typeof data === 'string') data = JSON.parse(data);
    var dataTables = data.dataTables;
    var dom = data.dom;
    if (dom) this.updateDom(JSON.parse(dom));
    if (dataTables) this.updateDataTables(dataTables, deferred);
};

//设置成功回调方法
var setSuccessFunc = function setSuccessFunc(func) {
    this._successFunc = func;
};

/**
 * Module : kero app serverEvent processXHRError
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-07-29 09:34:01
 */

/****
 * 通过去判断请求头来验证请求是否成功
 * @memberof ServerEvent
 * @param  {object} self  ServerEvent的this对象
 * @param  {object} rsl   请求返回的数据
 * @param  {object} state 描述状态的字符串
 * @param  {object} xhr   jqXHR对象
 */
var processXHRError = function processXHRError(self, rsl, state, xhr) {
    if (typeof rsl === 'string') rsl = JSON.parse(rsl);
    if (xhr.getResponseHeader && xhr.getResponseHeader("X-Error")) {
        if (self.orignError) self.orignError.call(self, rsl, state, xhr);else {
            if (u.showMessageDialog) u.showMessageDialog({ type: "info", title: "提示", msg: rsl["message"], backdrop: true });else alert(rsl["message"]);
            if (rsl["operate"]) {
                eval(rsl["operate"]);
            }
        }
        return false;
    }
    return true;
};

/**
 * Module : kero app serverEvent util
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-07-29 09:34:01
 */
/**
 * 设置数据是否压缩，fire方法默认是false
 * @memberof ServerEvent
 * @param  {boolean} compression 是否压缩的参数值
 * @example
 * app.serverEvent().setCompression(true)
 */
var setCompression = function setCompression(compression) {
    if (!env$1.isIE8 && !window.pako && compression == true) alert("can't compression, please include  pako!");else this.compression = compression;
};

/**
 * 为fire方法添加请求参数
 * @memberof ServerEvent
 * @param  {string} key   参数key
 * @param  {string} value 参数value
 * @example
 * app.serverEvent().addParameter('key', 'value')
 */
var addParameter = function addParameter(key, value) {
    this.params[key] = value;
    return this;
};

/**
 * 为fire的ajax请求参数中设置事件参数,设置到params.data.event上面
 * @memberof ServerEvent
 * @param  {string} event 事件
 * @example
 * app.serverEvent().setEvent(function(){
 *  ...
 * })
 */
var setEvent = function setEvent(event) {
    this.event = _formatEvent(event);
    return this;
};

//转换事件
var _formatEvent = function _formatEvent(event) {
    return event;
};

//获取会话等参数数据，并将参数传递到fire参数中
var getData$3 = function getData() {
    var envJson = ko.utils.stringifyJson(this.app.getEnvironment()),
        datasJson = ko.utils.stringifyJson(this.datas, function replacer(key, value) {
        if (typeof value === "undefined" || value == null) {
            return '';
        }
        return value;
    }),
        compressType = '',
        compression = false;
    if (window.trimServerEventData) {
        datasJson = window.trimServerEventData(datasJson);
    }
    if (this.compression) {
        if (!env$1.isIE8 && window.pako) {
            envJson = encodeBase64(window.pako.gzip(envJson));
            datasJson = encodeBase64(window.pako.gzip(datasJson));
            compression = true;
            compressType = 'gzip';
        }
    }
    return {
        environment: envJson,
        dataTables: datasJson,
        compression: compression,
        compressType: compressType
    };
};

//iuap_quickstart项目中没有，不太清楚该功能
var updateDom = function updateDom() {
    each(dom, function (i, n) {
        var vo = n.two;
        var key = n.one;
        _updateDom(key, vo);
    });
};

//TODO 去除jQuery后有问题待修改
//iuap_quickstart项目中没有，不太清楚该功能
function _updateDom(key, vos) {
    for (var i in vos) {
        var vo = vos[i];
        for (var key in vo) {
            var props = vo[key];
            if (key == 'trigger') {
                trigger$1(key, props[0]);
            } else {
                if (u.isArray(props)) {
                    each(props, function (i, n) {
                        key[i](n);
                    });
                } else try {
                    key[i](vo);
                } catch (error) {
                    key[i](vo[i]);
                }
            }
        }
    }
}

/**
 * Module : Kero webpack entry serverEvnet index
 * Author : liuyk(liuyuekai@yonyou.com)
 * Date   : 2016-08-09 15:24:46
 */

//相关依赖导入
/**
 * ServerEvent
 * @namespace
 * @description 前端请求事件
 */

var ServerEvent$1 = function ServerEvent(app) {
    classCallCheck(this, ServerEvent);


    this.app = app;
    this.datas = {};
    this.params = {};
    this.event = null;
    this.ent = u.core.collectEnvironment();
    if (!u.debugMode) {
        //此处需要修改
        this.compression = true;
    }
};

// dataTable


ServerEvent$1.prototype.addDataTable = addDataTable$1;
ServerEvent$1.prototype.addDataTables = addDataTables;
ServerEvent$1.prototype.addAllDataTables = addAllDataTables;
ServerEvent$1.prototype.updateDataTables = updateDataTables;

// fire
ServerEvent$1.prototype.fire = fire;
ServerEvent$1.prototype.setSuccessFunc = setSuccessFunc;
ServerEvent$1.prototype._successFunc = _successFunc$1;

// processXHRError
ServerEvent$1.prototype.processXHRError = processXHRError;

//util
ServerEvent$1.prototype.setCompression = setCompression;
ServerEvent$1.prototype.addParameter = addParameter;
ServerEvent$1.prototype.setEvent = setEvent;
ServerEvent$1.prototype.getData = getData$3;
ServerEvent$1.prototype.updateDom = updateDom;

ServerEvent$1.DEFAULT = {
    async: true,
    singleton: true,
    url: (window.$ctx || '/iwebap') + '/evt/dispatch'
};

window.ServerEvent = ServerEvent$1;

/**
 * Module : Kero webpack entry index
 * Author : yaoxinc
 * Date	  : 2017-01-17 16:51:05
 */
var ex$2 = {
  EnableMixin: EnableMixin,
  RequiredMixin: RequiredMixin,
  ValidateMixin: ValidateMixin,
  ValueMixin: ValueMixin
};

extend(ex$2, window.u || {});
window.u = ex$2;

exports.u = u;
exports.DataTable = DataTable$1;
