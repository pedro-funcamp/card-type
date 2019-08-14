(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.CardType = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

exports.default = cardType;

var _cards = require('./cards');

var _cards2 = _interopRequireDefault(_cards);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function cardType(card) {
  var bin = getBin(card);
  var detectedTypes = [];

  _cards2.default.forEach(function (card) {
    card.pattern.forEach(function (pattern) {
      if (checkCard(bin, pattern)) {
        detectedTypes.unshift(card.name);
      }
    });
  });

  return detectedTypes[0] || '';
}

function getBin(value) {
  return value.toString().replace(/\D/g, '').substr(0, 6);
}

function checkCard(bin, pattern) {
  return Array.isArray(pattern) ? checkRange(bin, pattern) : checkPattern(bin, pattern);
}

function checkPattern(bin, pattern) {
  if (pattern instanceof RegExp) {
    return pattern.test(bin);
  }

  pattern = pattern.toString();
  return bin.substr(0, pattern.length) === pattern;
}

function checkRange(bin, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      min = _ref2[0],
      max = _ref2[1];

  var length = min.toString().length;
  var value = parseInt(bin.substr(0, length));

  return value >= min && value <= max;
}

},{"./cards":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  name: 'visa',
  pattern: [4]
}, {
  name: 'mastercard',
  pattern: [[51, 55], [2221, 2720]]
}, {
  name: 'amex',
  pattern: [34, 37]
}, {
  name: 'diners',
  pattern: [36, 309, [300, 305], [38, 39]]
}, {
  name: 'unionpay',
  pattern: [62]
}, {
  name: 'discover',
  pattern: [6011, [622126, 622925], [644, 649], 65]
}, {
  name: 'jcb',
  pattern: [35]
}, {
  name: 'maestro',
  pattern: [5018, 502, 503, 506, 56, 57, 58, 639, 6220, 67]
}, {
  name: 'mastercard',
  pattern: [5021]
}, {
  name: 'elo',
  pattern: [401178, 401179, 431274, 438935, 451416, 457393, 457631, 457632, 504175, 627780, 636297, 636297, 636368, [506699, 506778], [509000, 509999], [650031, 650033], [650035, 650051], [650405, 650439], [650485, 650538], [650541, 650598], [650700, 650718], [650720, 650727], [650901, 650920], [651652, 651679], [655000, 655019], [655021, 655058], [650921, 650978]]
}, {
  name: 'hipercard',
  pattern: [384100, 384140, 384160, /^60(?!11)/]
}];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cards = require('./cards');

Object.defineProperty(exports, 'cards', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cards).default;
  }
});

var _cardType = require('./cardType');

Object.defineProperty(exports, 'cardType', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cardType).default;
  }
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

},{"./cardType":1,"./cards":2}]},{},[3])(3)
});
//# sourceMappingURL=card-type.js.map
