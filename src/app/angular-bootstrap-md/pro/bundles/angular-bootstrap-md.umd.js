(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("rxjs/Observable"), require("@angular/http"), require("@angular/platform-browser"), require("rxjs/Subject"), require("rxjs/add/operator/catch"), require("@angular/router"), require("rxjs/Subscriber"), require("rxjs/add/observable/from"), require("rxjs/add/observable/merge"), require("rxjs/add/observable/timer"), require("rxjs/add/operator/combineLatest"), require("rxjs/add/operator/map"), require("rxjs/add/operator/mergeAll"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/forms", "rxjs/Observable", "@angular/http", "@angular/platform-browser", "rxjs/Subject", "rxjs/add/operator/catch", "@angular/router", "rxjs/Subscriber", "rxjs/add/observable/from", "rxjs/add/observable/merge", "rxjs/add/observable/timer", "rxjs/add/operator/combineLatest", "rxjs/add/operator/map", "rxjs/add/operator/mergeAll"], factory);
	else if(typeof exports === 'object')
		exports["angular-bootstrap-md.umd"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("rxjs/Observable"), require("@angular/http"), require("@angular/platform-browser"), require("rxjs/Subject"), require("rxjs/add/operator/catch"), require("@angular/router"), require("rxjs/Subscriber"), require("rxjs/add/observable/from"), require("rxjs/add/observable/merge"), require("rxjs/add/observable/timer"), require("rxjs/add/operator/combineLatest"), require("rxjs/add/operator/map"), require("rxjs/add/operator/mergeAll"));
	else
		root["angular-bootstrap-md.umd"] = factory(root["@angular/core"], root["@angular/common"], root["@angular/forms"], root["rxjs/Observable"], root["@angular/http"], root["@angular/platform-browser"], root["rxjs/Subject"], root["rxjs/add/operator/catch"], root["@angular/router"], root["rxjs/Subscriber"], root["rxjs/add/observable/from"], root["rxjs/add/observable/merge"], root["rxjs/add/observable/timer"], root["rxjs/add/operator/combineLatest"], root["rxjs/add/operator/map"], root["rxjs/add/operator/mergeAll"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_48__, __WEBPACK_EXTERNAL_MODULE_49__, __WEBPACK_EXTERNAL_MODULE_50__, __WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_118__, __WEBPACK_EXTERNAL_MODULE_119__, __WEBPACK_EXTERNAL_MODULE_120__, __WEBPACK_EXTERNAL_MODULE_121__, __WEBPACK_EXTERNAL_MODULE_122__, __WEBPACK_EXTERNAL_MODULE_123__, __WEBPACK_EXTERNAL_MODULE_124__, __WEBPACK_EXTERNAL_MODULE_125__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 104);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdbCompleterDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MdbCompleterDirective = (function () {
    function MdbCompleterDirective() {
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.highlighted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.opened = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._hasHighlighted = false;
        this._hasSelected = false;
        this._cancelBlur = false;
        this._isOpen = false;
    }
    MdbCompleterDirective.prototype.registerList = function (list) {
        this.list = list;
    };
    MdbCompleterDirective.prototype.registerDropdown = function (dropdown) {
        this.dropdown = dropdown;
    };
    MdbCompleterDirective.prototype.onHighlighted = function (item) {
        this.highlighted.emit(item);
        this._hasHighlighted = !!item;
    };
    MdbCompleterDirective.prototype.onSelected = function (item, clearList) {
        if (clearList === void 0) { clearList = true; }
        this.selected.emit(item);
        if (item) {
            this._hasSelected = true;
        }
        if (clearList) {
            this.clear();
        }
    };
    MdbCompleterDirective.prototype.search = function (term) {
        if (this._hasSelected) {
            this.selected.emit(null);
            this._hasSelected = false;
        }
        if (this.list) {
            this.list.search(term);
        }
    };
    MdbCompleterDirective.prototype.clear = function () {
        if (this.dropdown) {
            this.dropdown.clear();
        }
        if (this.list) {
            this.list.clear();
        }
        this._hasHighlighted = false;
        this.isOpen = false;
    };
    MdbCompleterDirective.prototype.selectCurrent = function () {
        if (this.dropdown) {
            this.dropdown.selectCurrent();
        }
    };
    MdbCompleterDirective.prototype.nextRow = function () {
        if (this.dropdown) {
            this.dropdown.nextRow();
        }
    };
    MdbCompleterDirective.prototype.prevRow = function () {
        if (this.dropdown) {
            this.dropdown.prevRow();
        }
    };
    MdbCompleterDirective.prototype.hasHighlighted = function () {
        return this._hasHighlighted;
    };
    MdbCompleterDirective.prototype.cancelBlur = function (cancel) {
        this._cancelBlur = cancel;
    };
    MdbCompleterDirective.prototype.isCancelBlur = function () {
        return this._cancelBlur;
    };
    MdbCompleterDirective.prototype.open = function () {
        if (!this._isOpen) {
            this.isOpen = true;
            this.list.open();
        }
    };
    Object.defineProperty(MdbCompleterDirective.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        set: function (open) {
            this._isOpen = open;
            this.opened.emit(this._isOpen);
            if (this.list) {
                this.list.isOpen(open);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCompleterDirective.prototype, "autoHighlightIndex", {
        get: function () {
            return this._autoHighlightIndex;
        },
        set: function (index) {
            this._autoHighlightIndex = index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCompleterDirective.prototype, "hasSelected", {
        get: function () {
            return this._hasSelected;
        },
        enumerable: true,
        configurable: true
    });
    return MdbCompleterDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MdbCompleterDirective.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MdbCompleterDirective.prototype, "highlighted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MdbCompleterDirective.prototype, "opened", void 0);
MdbCompleterDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdbCompleter]',
    })
], MdbCompleterDirective);



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sb_item_body__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__squeezebox__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SBItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SBItemComponent = (function () {
    function SBItemComponent(squeezebox) {
        this.collapsed = true;
        this.squeezebox = squeezebox;
    }
    SBItemComponent.prototype.ngAfterViewInit = function () {
        this.body.toggle(this.collapsed);
    };
    SBItemComponent.prototype.toggle = function (collapsed) {
        this.squeezebox.didItemToggled(this);
        this.applyToggle(collapsed);
    };
    SBItemComponent.prototype.applyToggle = function (collapsed) {
        this.collapsed = collapsed;
        this.body.toggle(collapsed);
    };
    return SBItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SBItemComponent.prototype, "collapsed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_1__sb_item_body__["a" /* SBItemBodyComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__sb_item_body__["a" /* SBItemBodyComponent */])
], SBItemComponent.prototype, "body", void 0);
SBItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        exportAs: 'sbItem',
        selector: 'mdb-item',
        templateUrl: 'sb-item.html'
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_2__squeezebox__["a" /* SqueezeBoxComponent */]; }))),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__squeezebox__["a" /* SqueezeBoxComponent */]])
], SBItemComponent);



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GlobalConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastPackage; });

var GlobalConfig = (function () {
    function GlobalConfig() {
    }
    return GlobalConfig;
}());

var ToastPackage = (function () {
    function ToastPackage(toastId, config, message, title, toastType, toastRef) {
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this._onAction = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    ToastPackage.prototype.triggerTap = function () {
        this._onTap.next();
        this._onTap.complete();
    };
    ToastPackage.prototype.onTap = function () {
        return this._onTap.asObservable();
    };
    ToastPackage.prototype.triggerAction = function (action) {
        this._onAction.next(action);
        this._onAction.complete();
    };
    ToastPackage.prototype.onAction = function () {
        return this._onAction.asObservable();
    };
    return ToastPackage;
}());



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MAX_CHARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MIN_SEARCH_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TEXT_SEARCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TEXT_NO_RESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CLEAR_TIMEOUT; });
/* harmony export (immutable) */ __webpack_exports__["c"] = isNil;
var MAX_CHARS = 524288;
var MIN_SEARCH_LENGTH = 3;
var PAUSE = 100;
var TEXT_SEARCHING = 'Searching...';
var TEXT_NO_RESULTS = 'No results found';
var CLEAR_TIMEOUT = 50;
function isNil(value) {
    return typeof value === 'undefined' || value === null;
}
;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageScrollUtilService; });
var PageScrollUtilService = (function () {
    function PageScrollUtilService() {
    }
    PageScrollUtilService.isUndefinedOrNull = function (variable) {
        return (typeof variable === 'undefined') || variable === undefined || variable === null;
    };
    PageScrollUtilService.extractElementPosition = function (document, scrollTargetElement) {
        var body = document.body;
        var docEl = document.documentElement;
        var windowPageYOffset = document.defaultView && document.defaultView.pageYOffset || undefined;
        var windowPageXOffset = document.defaultView && document.defaultView.pageXOffset || undefined;
        var scrollTop = windowPageYOffset || docEl.scrollTop || body.scrollTop;
        var scrollLeft = windowPageXOffset || docEl.scrollLeft || body.scrollLeft;
        var clientTop = docEl.clientTop || body.clientTop || 0;
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;
        if (PageScrollUtilService.isUndefinedOrNull(scrollTargetElement)) {
            return { top: scrollTop, left: scrollLeft };
        }
        var box = scrollTargetElement.getBoundingClientRect();
        var top = box.top + scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;
        return { top: Math.round(top), left: Math.round(left) };
    };
    return PageScrollUtilService;
}());



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EasingLogic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageScrollConfig; });
var EasingLogic = (function () {
    function EasingLogic() {
    }
    return EasingLogic;
}());

var PageScrollConfig = (function () {
    function PageScrollConfig() {
    }
    Object.defineProperty(PageScrollConfig, "defaultEasingLogic", {
        get: function () {
            return PageScrollConfig._easingLogic;
        },
        set: function (easingLogic) {
            PageScrollConfig._easingLogic = easingLogic;
        },
        enumerable: true,
        configurable: true
    });
    return PageScrollConfig;
}());

PageScrollConfig._interval = 10;
PageScrollConfig._minScrollDistance = 2;
PageScrollConfig._defaultNamespace = 'default';
PageScrollConfig.defaultIsVerticalScrolling = true;
PageScrollConfig._logLevel = 2;
PageScrollConfig.defaultDuration = 1250;
PageScrollConfig.defaultScrollOffset = 0;
PageScrollConfig.defaultAdvancedInlineOffsetCalculation = false;
PageScrollConfig._interruptEvents = ['mousedown', 'wheel', 'DOMMouseScroll', 'mousewheel', 'keyup', 'touchmove'];
PageScrollConfig._interruptKeys = [33, 34, 35, 36, 38, 40];
PageScrollConfig.defaultInterruptible = true;
PageScrollConfig._easingLogic = {
    ease: function (t, b, c, d) {
        return c * t / d + b;
    }
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_squeezebox__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_sb_item__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_sb_item_head__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_sb_item_body__ = __webpack_require__(26);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__components_sb_item__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__components_sb_item_head__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__components_sb_item_body__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__components_squeezebox__["a"]; });
/* unused harmony export SQUEEZEBOX_COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SqueezeBoxModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SQUEEZEBOX_COMPONENTS = [__WEBPACK_IMPORTED_MODULE_2__components_squeezebox__["a" /* SqueezeBoxComponent */], __WEBPACK_IMPORTED_MODULE_3__components_sb_item__["a" /* SBItemComponent */], __WEBPACK_IMPORTED_MODULE_4__components_sb_item_head__["a" /* SBItemHeadComponent */], __WEBPACK_IMPORTED_MODULE_5__components_sb_item_body__["a" /* SBItemBodyComponent */]];
var SqueezeBoxModule = (function () {
    function SqueezeBoxModule() {
    }
    return SqueezeBoxModule;
}());
SqueezeBoxModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [SQUEEZEBOX_COMPONENTS],
        exports: [SQUEEZEBOX_COMPONENTS]
    })
], SqueezeBoxModule);







/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__portal_portal__ = __webpack_require__(30);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overlay_overlay__ = __webpack_require__(29);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__overlay_overlay__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_1__overlay_overlay__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overlay_overlay_container__ = __webpack_require__(28);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_2__overlay_overlay_container__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlay_overlay_ref__ = __webpack_require__(53);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_3__overlay_overlay_ref__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_toast_directive__ = __webpack_require__(97);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__toast_toast_directive__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__toast_toast_directive__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toast_toast_component__ = __webpack_require__(31);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__toast_toast_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toast_toast_service__ = __webpack_require__(32);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__toast_toast_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toast_toast_config__ = __webpack_require__(5);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__toast_toast_config__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__toast_toast_config__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__toast_toast_module__ = __webpack_require__(98);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__toast_toast_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toast_toast_injector__ = __webpack_require__(54);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_9__toast_toast_injector__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_9__toast_toast_injector__["b"]; });












/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__completerModule__ = __webpack_require__(99);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__completerModule__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_completer_component__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__components_completer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_completer_list_item_component__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__components_completer_list_item_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_completer_service__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__services_completer_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_factory_service__ = __webpack_require__(62);
/* unused harmony reexport localDataFactory */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__services_data_factory_service__["a"]; });
/* unused harmony reexport remoteDataFactory */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__services_data_factory_service__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_local_data_service__ = __webpack_require__(36);
/* unused harmony reexport LocalData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_remote_data_service__ = __webpack_require__(37);
/* unused harmony reexport RemoteData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_base_data_service__ = __webpack_require__(34);
/* unused harmony reexport CompleterBaseData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_completer_directive__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__directives_completer_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_dropdown_directive__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_9__directives_dropdown_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_input_directive__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_10__directives_input_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_list_context_directive__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_11__directives_list_context_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_row_directive__ = __webpack_require__(61);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_12__directives_row_directive__["a"]; });















/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cards_module__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cards_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_reveal_component__ = __webpack_require__(63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__card_reveal_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_rotating_component__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__card_rotating_component__["a"]; });





/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_datepickerLocale_service__ = __webpack_require__(68);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__services_datepickerLocale_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_datepickerUtil_service__ = __webpack_require__(69);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__services_datepickerUtil_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_datepickerFocus_directive__ = __webpack_require__(67);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__directives_datepickerFocus_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_datepickerAutofill_directive__ = __webpack_require__(66);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__directives_datepickerAutofill_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datepicker_component__ = __webpack_require__(65);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__datepicker_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__datepicker_component__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datepicker_module__ = __webpack_require__(101);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__datepicker_module__["a"]; });








/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chart_simple_component__ = __webpack_require__(70);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__chart_simple_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart_smallpie_component__ = __webpack_require__(71);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__chart_smallpie_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart_simple_module__ = __webpack_require__(102);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__chart_simple_module__["a"]; });





/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module_mdb_uploader_module__ = __webpack_require__(103);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__module_mdb_uploader_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_mdb_uploader_class__ = __webpack_require__(38);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__classes_mdb_uploader_class__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__classes_mdb_uploader_class__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_mdb_file_select_directive__ = __webpack_require__(73);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__directives_mdb_file_select_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_mdb_file_drop_directive__ = __webpack_require__(72);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__directives_mdb_file_drop_directive__["a"]; });






/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__char_counter_directive__ = __webpack_require__(74);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__char_counter_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__char_counter_module__ = __webpack_require__(105);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__char_counter_module__["a"]; });




/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__diacritics__ = __webpack_require__(76);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__diacritics__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__option__ = __webpack_require__(77);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__option__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__option_list__ = __webpack_require__(39);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__option_list__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_component__ = __webpack_require__(41);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__select_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__select_component__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_dropdown_component__ = __webpack_require__(40);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__select_dropdown_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__select_module__ = __webpack_require__(106);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__select_module__["a"]; });








/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bar_component__ = __webpack_require__(78);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__bar_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_directive__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__progress_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progressbar_component__ = __webpack_require__(82);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__progressbar_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progressbar_module__ = __webpack_require__(83);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__progressbar_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progressbar_config_component__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__progressbar_config_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_spinner_component__ = __webpack_require__(81);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__progress_spinner_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_spinner_module___ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_bars_module___ = __webpack_require__(108);
/* unused harmony export MaterialRootModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ProgressBars; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MATERIAL_MODULES = [
    __WEBPACK_IMPORTED_MODULE_8__progress_bars_module___["a" /* MdProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_7__progress_spinner_module___["a" /* MdProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_4__progressbar_module__["a" /* ProgressbarModule */]
];
var MaterialRootModule = (function () {
    function MaterialRootModule() {
    }
    return MaterialRootModule;
}());
MaterialRootModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__progress_bars_module___["a" /* MdProgressBarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__progress_spinner_module___["a" /* MdProgressSpinnerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__progressbar_module__["a" /* ProgressbarModule */].forRoot()
        ],
        exports: MATERIAL_MODULES,
    })
], MaterialRootModule);

var ProgressBars = (function () {
    function ProgressBars() {
    }
    ProgressBars.forRoot = function () {
        return { ngModule: MaterialRootModule };
    };
    return ProgressBars;
}());
ProgressBars = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: MATERIAL_MODULES,
        exports: MATERIAL_MODULES,
    })
], ProgressBars);



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidenav_component__ = __webpack_require__(84);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sidenav_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenav_module__ = __webpack_require__(110);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__sidenav_module__["a"]; });




/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdb_page_scroll_directive__ = __webpack_require__(85);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__mdb_page_scroll_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_service__ = __webpack_require__(44);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_config__ = __webpack_require__(8);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_config__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_config__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdb_page_scroll_instance__ = __webpack_require__(86);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__mdb_page_scroll_instance__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdb_page_scroll_util_service__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__mdb_page_scroll_util_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mdb_page_scroll_module__ = __webpack_require__(111);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__mdb_page_scroll_module__["a"]; });








/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sticky_content_directive__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sticky_content_module__ = __webpack_require__(113);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sticky_content_directive__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__sticky_content_module__["a"]; });





/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transclude_directive__ = __webpack_require__(90);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__transclude_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_directive__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__tab_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_heading_directive__ = __webpack_require__(89);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__tab_heading_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabset_component__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__tabset_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabset_config__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__tabset_config__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabset_module__ = __webpack_require__(114);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__tabset_module__["a"]; });








/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chips_component__ = __webpack_require__(91);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__chips_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chips_module__ = __webpack_require__(115);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__chips_module__["a"]; });




/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timepicker_component__ = __webpack_require__(92);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__timepicker_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timepicker_module__ = __webpack_require__(116);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__timepicker_module__["a"]; });




/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SBItemBodyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SBItemBodyComponent = (function () {
    function SBItemBodyComponent(renderer) {
        this.renderer = renderer;
        this.height = '0';
    }
    SBItemBodyComponent.prototype.toggle = function (collapsed) {
        var _this = this;
        var height = '0';
        if (!collapsed) {
            this.renderer.setElementStyle(this.bodyEl.nativeElement, 'height', 'auto');
            height = this.bodyEl.nativeElement.offsetHeight + 'px';
            this.renderer.setElementStyle(this.bodyEl.nativeElement, 'height', '0');
        }
        setTimeout(function () { return _this.renderer.setElementStyle(_this.bodyEl.nativeElement, 'height', height); }, 50);
    };
    return SBItemBodyComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('body'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], SBItemBodyComponent.prototype, "bodyEl", void 0);
SBItemBodyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        exportAs: 'sbItemBody',
        selector: 'mdb-item-body',
        templateUrl: 'sb-item.body.html'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], SBItemBodyComponent);



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sb_item__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqueezeBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SqueezeBoxComponent = (function () {
    function SqueezeBoxComponent() {
        this.multiple = true;
    }
    SqueezeBoxComponent.prototype.didItemToggled = function (item) {
        if (!this.multiple) {
            this.items.toArray().forEach(function (i) {
                if (i !== item) {
                    i.applyToggle(true);
                }
            });
        }
    };
    return SqueezeBoxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SqueezeBoxComponent.prototype, "multiple", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_1__sb_item__["a" /* SBItemComponent */]; })),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], SqueezeBoxComponent.prototype, "items", void 0);
SqueezeBoxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        exportAs: 'squeezebox',
        selector: 'mdb-squeezebox',
        templateUrl: 'squeezebox.html'
    }),
    __metadata("design:paramtypes", [])
], SqueezeBoxComponent);



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayContainer; });
var OverlayContainer = (function () {
    function OverlayContainer() {
    }
    OverlayContainer.prototype.getContainerElement = function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    OverlayContainer.prototype._createContainer = function () {
        var container = document.createElement('div');
        container.classList.add('overlay-container');
        document.body.appendChild(container);
        this._containerElement = container;
    };
    return OverlayContainer;
}());



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portal_dom_portal_host__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overlay_ref__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlay_container__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OVERLAY_PROVIDERS; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Overlay = (function () {
    function Overlay(_overlayContainer, _componentFactoryResolver, _appRef) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._paneElements = {};
    }
    Overlay.prototype.create = function (positionClass, overlayContainer) {
        return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
    };
    Overlay.prototype.getPaneElement = function (positionClass, overlayContainer) {
        if (!this._paneElements[positionClass]) {
            this._paneElements[positionClass] = this._createPaneElement(positionClass, overlayContainer);
        }
        return this._paneElements[positionClass];
    };
    Overlay.prototype._createPaneElement = function (positionClass, overlayContainer) {
        var pane = document.createElement('div');
        pane.id = 'toast-container';
        pane.classList.add(positionClass);
        if (!overlayContainer) {
            this._overlayContainer.getContainerElement().appendChild(pane);
        }
        else {
            overlayContainer.getContainerElement().appendChild(pane);
        }
        return pane;
    };
    Overlay.prototype._createPortalHost = function (pane) {
        return new __WEBPACK_IMPORTED_MODULE_1__portal_dom_portal_host__["a" /* DomPortalHost */](pane, this._componentFactoryResolver, this._appRef);
    };
    Overlay.prototype._createOverlayRef = function (pane) {
        return new __WEBPACK_IMPORTED_MODULE_2__overlay_ref__["a" /* OverlayRef */](this._createPortalHost(pane));
    };
    return Overlay;
}());
Overlay = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__overlay_container__["a" /* OverlayContainer */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]])
], Overlay);

var OVERLAY_PROVIDERS = [
    Overlay,
    __WEBPACK_IMPORTED_MODULE_3__overlay_container__["a" /* OverlayContainer */],
];


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BasePortalHost; });
var ComponentPortal = (function () {
    function ComponentPortal(component, injector) {
        this.component = component;
        this.injector = injector;
    }
    ComponentPortal.prototype.attach = function (host, newestOnTop) {
        this._attachedHost = host;
        return host.attach(this, newestOnTop);
    };
    ComponentPortal.prototype.detach = function () {
        var host = this._attachedHost;
        this._attachedHost = null;
        return host.detach();
    };
    Object.defineProperty(ComponentPortal.prototype, "isAttached", {
        get: function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    ComponentPortal.prototype.setAttachedHost = function (host) {
        this._attachedHost = host;
    };
    return ComponentPortal;
}());

var BasePortalHost = (function () {
    function BasePortalHost() {
    }
    BasePortalHost.prototype.attach = function (portal, newestOnTop) {
        this._attachedPortal = portal;
        return this.attachComponentPortal(portal, newestOnTop);
    };
    BasePortalHost.prototype.detach = function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
        }
        this._attachedPortal = null;
        if (this._disposeFn != null) {
            this._disposeFn();
            this._disposeFn = null;
        }
    };
    BasePortalHost.prototype.setDisposeFn = function (fn) {
        this._disposeFn = fn;
    };
    return BasePortalHost;
}());



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastComponent = (function () {
    function ToastComponent(toastService, toastPackage, appRef) {
        var _this = this;
        this.toastService = toastService;
        this.toastPackage = toastPackage;
        this.appRef = appRef;
        this.width = -1;
        this.toastClasses = '';
        this.state = 'inactive';
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.toastClasses = toastPackage.toastType + " " + toastPackage.config.toastClass;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
            _this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
            _this.remove();
        });
    }
    ToastComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    };
    ToastComponent.prototype.activateToast = function () {
        var _this = this;
        this.state = 'active';
        if (this.options.timeOut !== 0) {
            this.timeout = setTimeout(function () {
                _this.remove();
            }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
            }
        }
        if (this.options.onActivateTick) {
            this.appRef.tick();
        }
    };
    ToastComponent.prototype.updateProgress = function () {
        if (this.width === 0) {
            return;
        }
        var now = new Date().getTime();
        var remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.width <= 0) {
            this.width = 0;
        }
    };
    ToastComponent.prototype.remove = function () {
        var _this = this;
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = 'removed';
        this.timeout = setTimeout(function () {
            return _this.toastService.remove(_this.toastPackage.toastId);
        }, 300);
    };
    ToastComponent.prototype.tapToast = function () {
        if (this.state === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    };
    ToastComponent.prototype.stickAround = function () {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        clearInterval(this.intervalId);
        this.width = 0;
    };
    ToastComponent.prototype.delayedHideToast = function () {
        var _this = this;
        if (+this.options.extendedTimeOut === 0 || this.state === 'removed') {
            return;
        }
        this.timeout = setTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
        this.options.timeOut = +this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + this.options.timeOut;
        this.width = 100;
        if (this.options.progressBar) {
            this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    return ToastComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
    __metadata("design:type", Object)
], ToastComponent.prototype, "toastClasses", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@flyInOut'),
    __metadata("design:type", Object)
], ToastComponent.prototype, "state", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ToastComponent.prototype, "tapToast", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ToastComponent.prototype, "stickAround", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ToastComponent.prototype, "delayedHideToast", null);
ToastComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdb-toast-component',
        templateUrl: './toast.component.html',
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('flyInOut', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    display: 'none',
                    opacity: 0
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: .5 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('removed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('300ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('active => removed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('300ms ease-in')),
            ]),
        ],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__toast_service__["a" /* ToastService */],
        __WEBPACK_IMPORTED_MODULE_1__toast_config__["a" /* ToastPackage */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]])
], ToastComponent);



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overlay_overlay__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__portal_portal__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toast_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_injector__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toast_token__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toast_component__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var ToastService = (function () {
    function ToastService(toastConfig, overlay, _injector, sanitizer) {
        this.toastConfig = toastConfig;
        this.overlay = overlay;
        this._injector = _injector;
        this.sanitizer = sanitizer;
        this.index = 0;
        this.previousToastMessage = '';
        this.currentlyActive = 0;
        this.toasts = [];
        function use(source, defaultValue) {
            return toastConfig && source !== undefined ? source : defaultValue;
        }
        this.toastConfig = this.applyConfig(toastConfig);
        this.toastConfig.maxOpened = use(this.toastConfig.maxOpened, 0);
        this.toastConfig.autoDismiss = use(this.toastConfig.autoDismiss, false);
        this.toastConfig.newestOnTop = use(this.toastConfig.newestOnTop, true);
        this.toastConfig.preventDuplicates = use(this.toastConfig.preventDuplicates, false);
        if (!this.toastConfig.iconClasses) {
            this.toastConfig.iconClasses = {};
        }
        this.toastConfig.iconClasses.error = this.toastConfig.iconClasses.error || 'toast-error';
        this.toastConfig.iconClasses.info = this.toastConfig.iconClasses.info || 'toast-info';
        this.toastConfig.iconClasses.success = this.toastConfig.iconClasses.success || 'toast-success';
        this.toastConfig.iconClasses.warning = this.toastConfig.iconClasses.warning || 'toast-warning';
        this.toastConfig.timeOut = use(this.toastConfig.timeOut, 5000);
        this.toastConfig.closeButton = use(this.toastConfig.closeButton, false);
        this.toastConfig.extendedTimeOut = use(this.toastConfig.extendedTimeOut, 1000);
        this.toastConfig.progressBar = use(this.toastConfig.progressBar, false);
        this.toastConfig.enableHtml = use(this.toastConfig.enableHtml, false);
        this.toastConfig.toastClass = use(this.toastConfig.toastClass, 'toast');
        this.toastConfig.positionClass = use(this.toastConfig.positionClass, 'toast-top-right');
        this.toastConfig.titleClass = use(this.toastConfig.titleClass, 'toast-title');
        this.toastConfig.messageClass = use(this.toastConfig.messageClass, 'toast-message');
        this.toastConfig.tapToDismiss = use(this.toastConfig.tapToDismiss, true);
        this.toastConfig.toastComponent = use(this.toastConfig.toastComponent, __WEBPACK_IMPORTED_MODULE_6__toast_component__["a" /* ToastComponent */]);
        this.toastConfig.onActivateTick = use(this.toastConfig.onActivateTick, false);
    }
    ToastService.prototype.show = function (message, title, override, type) {
        if (type === void 0) { type = ''; }
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    ToastService.prototype.success = function (message, title, override) {
        var type = this.toastConfig.iconClasses.success;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    ToastService.prototype.error = function (message, title, override) {
        var type = this.toastConfig.iconClasses.error;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    ToastService.prototype.info = function (message, title, override) {
        var type = this.toastConfig.iconClasses.info;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    ToastService.prototype.warning = function (message, title, override) {
        var type = this.toastConfig.iconClasses.warning;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    ToastService.prototype.clear = function (toastId) {
        for (var _i = 0, _a = this.toasts; _i < _a.length; _i++) {
            var toast = _a[_i];
            if (toastId !== undefined) {
                if (toast.toastId === toastId) {
                    toast.toastRef.manualClose();
                    return;
                }
            }
            else {
                toast.toastRef.manualClose();
            }
        }
    };
    ToastService.prototype.remove = function (toastId) {
        var found = this._findToast(toastId);
        if (!found) {
            return false;
        }
        found.activeToast.toastRef.close();
        this.toasts.splice(found.index, 1);
        this.currentlyActive = this.currentlyActive - 1;
        if (!this.toastConfig.maxOpened || !this.toasts.length) {
            return false;
        }
        if (this.currentlyActive <= +this.toastConfig.maxOpened && this.toasts[this.currentlyActive]) {
            var p = this.toasts[this.currentlyActive].toastRef;
            if (!p.isInactive()) {
                this.currentlyActive = this.currentlyActive + 1;
                p.activate();
            }
        }
        return true;
    };
    ToastService.prototype.isDuplicate = function (message) {
        for (var i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].message === message) {
                return true;
            }
        }
        return false;
    };
    ToastService.prototype.applyConfig = function (override) {
        if (override === void 0) { override = {}; }
        function use(source, defaultValue) {
            return override && source !== undefined ? source : defaultValue;
        }
        var current = __assign({}, this.toastConfig);
        current.closeButton = use(override.closeButton, current.closeButton);
        current.extendedTimeOut = use(override.extendedTimeOut, current.extendedTimeOut);
        current.progressBar = use(override.progressBar, current.progressBar);
        current.timeOut = use(override.timeOut, current.timeOut);
        current.enableHtml = use(override.enableHtml, current.enableHtml);
        current.toastClass = use(override.toastClass, current.toastClass);
        current.positionClass = use(override.positionClass, current.positionClass);
        current.titleClass = use(override.titleClass, current.titleClass);
        current.messageClass = use(override.messageClass, current.messageClass);
        current.tapToDismiss = use(override.tapToDismiss, current.tapToDismiss);
        current.toastComponent = use(override.toastComponent, current.toastComponent);
        current.onActivateTick = use(override.onActivateTick, current.onActivateTick);
        return current;
    };
    ToastService.prototype._findToast = function (toastId) {
        for (var i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].toastId === toastId) {
                return { index: i, activeToast: this.toasts[i] };
            }
        }
        return null;
    };
    ToastService.prototype._buildNotification = function (toastType, message, title, config) {
        var _this = this;
        if (this.toastConfig.preventDuplicates && this.isDuplicate(message)) {
            return null;
        }
        this.previousToastMessage = message;
        var keepInactive = false;
        if (this.toastConfig.maxOpened && this.currentlyActive >= this.toastConfig.maxOpened) {
            keepInactive = true;
            if (this.toastConfig.autoDismiss) {
                this.clear(this.toasts[this.toasts.length - 1].toastId);
            }
        }
        var overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
        this.index = this.index + 1;
        var sanitizedMessage = message;
        if (message && config.enableHtml) {
            sanitizedMessage = this.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SecurityContext"].HTML, message);
        }
        var toastRef = new __WEBPACK_IMPORTED_MODULE_4__toast_injector__["b" /* ToastRef */](overlayRef);
        var toastPackage = new __WEBPACK_IMPORTED_MODULE_3__toast_config__["a" /* ToastPackage */](this.index, config, sanitizedMessage, title, toastType, toastRef);
        var ins = {
            toastId: this.index,
            message: message,
            toastRef: toastRef,
            onShown: toastRef.afterActivate(),
            onHidden: toastRef.afterActivate(),
            onTap: toastPackage.onTap(),
            onAction: toastPackage.onAction(),
        };
        var toastInjector = new __WEBPACK_IMPORTED_MODULE_4__toast_injector__["a" /* ToastInjector */](toastPackage, this._injector);
        var component = new __WEBPACK_IMPORTED_MODULE_2__portal_portal__["a" /* ComponentPortal */](config.toastComponent, toastInjector);
        ins.portal = overlayRef.attach(component, this.toastConfig.newestOnTop);
        if (!keepInactive) {
            setTimeout(function () {
                ins.toastRef.activate();
                _this.currentlyActive = _this.currentlyActive + 1;
            });
        }
        this.toasts.push(ins);
        return ins;
    };
    return ToastService;
}());
ToastService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__toast_token__["a" /* TOAST_CONFIG */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__toast_config__["b" /* GlobalConfig */],
        __WEBPACK_IMPORTED_MODULE_1__overlay_overlay__["a" /* Overlay */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
        __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["DomSanitizer"]])
], ToastService);



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__completer_directive__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CtrRowItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdbDropdownDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CtrRowItem = (function () {
    function CtrRowItem(row, index) {
        this.row = row;
        this.index = index;
    }
    return CtrRowItem;
}());

var MdbDropdownDirective = (function () {
    function MdbDropdownDirective(completer, el) {
        this.completer = completer;
        this.el = el;
        this.rows = [];
        this.completer.registerDropdown(this);
    }
    MdbDropdownDirective.prototype.ngOnInit = function () {
        var css = getComputedStyle(this.el.nativeElement);
        this.isScrollOn = css.maxHeight && css.overflowY === 'auto';
    };
    MdbDropdownDirective.prototype.ngOnDestroy = function () {
        this.completer.registerDropdown(null);
    };
    MdbDropdownDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        var autoHighlightIndex = this.completer.autoHighlightIndex;
        if (autoHighlightIndex) {
            setTimeout(function () {
                _this.highlightRow(autoHighlightIndex);
            }, 0);
        }
    };
    MdbDropdownDirective.prototype.onMouseDown = function (event) {
        var _this = this;
        this.completer.cancelBlur(true);
        setTimeout(function () {
            _this.completer.cancelBlur(false);
        }, 0);
    };
    MdbDropdownDirective.prototype.registerRow = function (row) {
        this.rows.push(row);
    };
    MdbDropdownDirective.prototype.highlightRow = function (index) {
        var highlighted = this.rows.find(function (row) { return row.index === index; });
        if (index < 0) {
            if (this.currHighlighted) {
                this.currHighlighted.row.setHighlighted(false);
            }
            this.currHighlighted = undefined;
            this.completer.onHighlighted(null);
            return;
        }
        if (!highlighted) {
            return;
        }
        if (this.currHighlighted) {
            this.currHighlighted.row.setHighlighted(false);
        }
        this.currHighlighted = highlighted;
        this.currHighlighted.row.setHighlighted(true);
        this.completer.onHighlighted(this.currHighlighted.row.getDataItem());
        if (this.isScrollOn && this.currHighlighted) {
            var rowTop = this.dropdownRowTop();
            if (rowTop < 0) {
                this.dropdownScrollTopTo(rowTop - 1);
            }
            else {
                var row = this.currHighlighted.row.getNativeElement();
                if (this.dropdownHeight() < row.getBoundingClientRect().bottom) {
                    this.dropdownScrollTopTo(this.dropdownRowOffsetHeight(row));
                    if (this.el.nativeElement.getBoundingClientRect().bottom - this.dropdownRowOffsetHeight(row)
                        < row.getBoundingClientRect().top) {
                        this.dropdownScrollTopTo(row.getBoundingClientRect().top - (this.el.nativeElement.getBoundingClientRect().top
                            + parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10)));
                    }
                }
            }
        }
    };
    MdbDropdownDirective.prototype.clear = function () {
        this.rows = [];
    };
    MdbDropdownDirective.prototype.onSelected = function (item) {
        this.completer.onSelected(item);
    };
    MdbDropdownDirective.prototype.selectCurrent = function () {
        if (this.currHighlighted) {
            this.onSelected(this.currHighlighted.row.getDataItem());
        }
        else if (this.rows.length > 0) {
            this.onSelected(this.rows[0].row.getDataItem());
        }
    };
    MdbDropdownDirective.prototype.nextRow = function () {
        var nextRowIndex = 0;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index + 1;
        }
        this.highlightRow(nextRowIndex);
    };
    MdbDropdownDirective.prototype.prevRow = function () {
        var nextRowIndex = -1;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index - 1;
        }
        this.highlightRow(nextRowIndex);
    };
    MdbDropdownDirective.prototype.dropdownScrollTopTo = function (offset) {
        this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
    };
    MdbDropdownDirective.prototype.dropdownRowTop = function () {
        return this.currHighlighted.row.getNativeElement().getBoundingClientRect().top -
            (this.el.nativeElement.getBoundingClientRect().top +
                parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10));
    };
    MdbDropdownDirective.prototype.dropdownHeight = function () {
        return this.el.nativeElement.getBoundingClientRect().top +
            parseInt(getComputedStyle(this.el.nativeElement).maxHeight, 10);
    };
    MdbDropdownDirective.prototype.dropdownRowOffsetHeight = function (row) {
        var css = getComputedStyle(row);
        return row.offsetHeight +
            parseInt(css.marginTop, 10) + parseInt(css.marginBottom, 10);
    };
    return MdbDropdownDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MdbDropdownDirective.prototype, "onMouseDown", null);
MdbDropdownDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdbDropdown]',
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__completer_directive__["a" /* MdbCompleterDirective */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], MdbDropdownDirective);



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterBaseData; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CompleterBaseData = (function (_super) {
    __extends(CompleterBaseData, _super);
    function CompleterBaseData() {
        return _super.call(this) || this;
    }
    CompleterBaseData.prototype.cancel = function () { };
    CompleterBaseData.prototype.searchFields = function (searchFields) {
        this._searchFields = searchFields;
        return this;
    };
    CompleterBaseData.prototype.titleField = function (titleField) {
        this._titleField = titleField;
        return this;
    };
    CompleterBaseData.prototype.descriptionField = function (descriptionField) {
        this._descriptionField = descriptionField;
        return this;
    };
    CompleterBaseData.prototype.imageField = function (imageField) {
        this._imageField = imageField;
        return this;
    };
    CompleterBaseData.prototype.convertToItem = function (data) {
        var image = null;
        var formattedText;
        var formattedDesc;
        if (this._titleField) {
            formattedText = this.extractTitle(data);
        }
        else {
            formattedText = data;
        }
        if (this._descriptionField) {
            formattedDesc = this.extractValue(data, this._descriptionField);
        }
        if (this._imageField) {
            image = this.extractValue(data, this._imageField);
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__globals__["c" /* isNil */])(formattedText)) {
            return null;
        }
        return {
            title: formattedText,
            description: formattedDesc,
            image: image,
            originalObject: data
        };
    };
    CompleterBaseData.prototype.extractMatches = function (data, term) {
        var _this = this;
        var matches = [];
        var searchFields = this._searchFields ? this._searchFields.split(',') : null;
        if (this._searchFields !== null && this._searchFields !== undefined && term !== '') {
            matches = data.filter(function (item) {
                var values = searchFields ?
                    searchFields.map(function (searchField) { return _this.extractValue(item, searchField); }).filter(function (value) { return !!value; }) : [item];
                return values.some(function (value) { return value.toString().toLowerCase().indexOf(term.toString().toLowerCase()) >= 0; });
            });
        }
        else {
            matches = data;
        }
        return matches;
    };
    CompleterBaseData.prototype.extractTitle = function (item) {
        var _this = this;
        return this._titleField.split(',')
            .map(function (field) {
            return _this.extractValue(item, field);
        })
            .reduce(function (acc, titlePart) { return acc ? acc + " " + titlePart : titlePart; });
    };
    CompleterBaseData.prototype.extractValue = function (obj, key) {
        var keys;
        var result;
        if (key) {
            keys = key.split('.');
            result = obj;
            for (var i = 0; i < keys.length; i++) {
                if (result) {
                    result = result[keys[i]];
                }
            }
        }
        else {
            result = obj;
        }
        return result;
    };
    CompleterBaseData.prototype.processResults = function (matches) {
        var i;
        var results = [];
        if (matches && matches.length > 0) {
            for (i = 0; i < matches.length; i++) {
                var item = this.convertToItem(matches[i]);
                if (item) {
                    results.push(item);
                }
            }
        }
        return results;
    };
    return CompleterBaseData;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]));



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_data_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remote_data_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CompleterService = (function () {
    function CompleterService(localDataFactory, remoteDataFactory) {
        this.localDataFactory = localDataFactory;
        this.remoteDataFactory = remoteDataFactory;
    }
    CompleterService.prototype.local = function (data, searchFields, titleField) {
        if (searchFields === void 0) { searchFields = ''; }
        if (titleField === void 0) { titleField = ''; }
        var localData = this.localDataFactory();
        return localData
            .data(data)
            .searchFields(searchFields)
            .titleField(titleField);
    };
    CompleterService.prototype.remote = function (url, searchFields, titleField) {
        if (searchFields === void 0) { searchFields = ''; }
        if (titleField === void 0) { titleField = ''; }
        var remoteData = this.remoteDataFactory();
        return remoteData
            .remoteUrl(url)
            .searchFields(searchFields)
            .titleField(titleField);
    };
    return CompleterService;
}());
CompleterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__local_data_service__["a" /* LocalData */])),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__remote_data_service__["a" /* RemoteData */])),
    __metadata("design:paramtypes", [Object, Object])
], CompleterService);



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_data_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalData; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalData = (function (_super) {
    __extends(LocalData, _super);
    function LocalData() {
        return _super.call(this) || this;
    }
    LocalData.prototype.data = function (data) {
        var _this = this;
        if (data instanceof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) {
            data.subscribe(function (res) {
                _this._data = res;
                if (_this.savedTerm) {
                    _this.search(_this.savedTerm);
                }
            });
        }
        else {
            this._data = data;
        }
        return this;
    };
    LocalData.prototype.search = function (term) {
        if (!this._data) {
            this.savedTerm = term;
        }
        else {
            this.savedTerm = null;
            var matches = this.extractMatches(this._data, term);
            this.next(this.processResults(matches));
        }
    };
    LocalData.prototype.convertToItem = function (data) {
        return _super.prototype.convertToItem.call(this, data);
    };
    return LocalData;
}(__WEBPACK_IMPORTED_MODULE_2__base_data_service__["a" /* CompleterBaseData */]));
LocalData = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LocalData);



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_data_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteData; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var RemoteData = (function (_super) {
    __extends(RemoteData, _super);
    function RemoteData(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this._urlFormater = null;
        _this._dataField = null;
        return _this;
    }
    RemoteData.prototype.remoteUrl = function (remoteUrl) {
        this._remoteUrl = remoteUrl;
        return this;
    };
    RemoteData.prototype.urlFormater = function (urlFormater) {
        this._urlFormater = urlFormater;
    };
    RemoteData.prototype.dataField = function (dataField) {
        this._dataField = dataField;
    };
    RemoteData.prototype.headers = function (headers) {
        this._headers = headers;
    };
    RemoteData.prototype.requestOptions = function (requestOptions) {
        this._requestOptions = requestOptions;
    };
    RemoteData.prototype.search = function (term) {
        var _this = this;
        this.cancel();
        var url = '';
        if (this._urlFormater) {
            url = this._urlFormater(term);
        }
        else {
            url = this._remoteUrl + encodeURIComponent(term);
        }
        if (!this._requestOptions) {
            this._requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"]();
            this._requestOptions.headers = this._headers || new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        }
        this.remoteSearch = this.http.get(url, this._requestOptions)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var matches = _this.extractValue(data, _this._dataField);
            return _this.extractMatches(matches, term);
        })
            .map(function (matches) {
            var results = _this.processResults(matches);
            _this.next(results);
            return results;
        })
            .catch(function (err) {
            _this.error(err);
            return null;
        })
            .subscribe();
    };
    RemoteData.prototype.cancel = function () {
        if (this.remoteSearch) {
            this.remoteSearch.unsubscribe();
        }
    };
    RemoteData.prototype.convertToItem = function (data) {
        return _super.prototype.convertToItem.call(this, data);
    };
    return RemoteData;
}(__WEBPACK_IMPORTED_MODULE_3__base_data_service__["a" /* CompleterBaseData */]));



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscriber__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscriber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subscriber__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_from__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeAll__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeAll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeAll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_combineLatest__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_combineLatest__);
/* unused harmony export UploadStatus */
/* harmony export (immutable) */ __webpack_exports__["b"] = humanizeBytes;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDBUploaderService; });







var UploadStatus;
(function (UploadStatus) {
    UploadStatus[UploadStatus["Queue"] = 0] = "Queue";
    UploadStatus[UploadStatus["Uploading"] = 1] = "Uploading";
    UploadStatus[UploadStatus["Done"] = 2] = "Done";
    UploadStatus[UploadStatus["Canceled"] = 3] = "Canceled";
})(UploadStatus || (UploadStatus = {}));
function humanizeBytes(bytes) {
    if (bytes === 0) {
        return '0 Byte';
    }
    var k = 1024;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
var MDBUploaderService = (function () {
    function MDBUploaderService() {
        this.files = [];
        this.serviceEvents = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.uploads = [];
    }
    MDBUploaderService.prototype.handleFiles = function (files) {
        var _this = this;
        this.fileList = files;
        this.files = [].map.call(files, function (file, i) {
            var uploadFile = {
                fileIndex: i,
                id: _this.generateId(),
                name: file.name,
                size: file.size,
                type: file.type,
                progress: {
                    status: UploadStatus.Queue,
                    data: {
                        percentage: 0,
                        speed: null,
                        speedHuman: null
                    }
                },
                lastModifiedDate: file.lastModifiedDate
            };
            _this.serviceEvents.emit({ type: 'addedToQueue', file: uploadFile });
            return uploadFile;
        });
        this.serviceEvents.emit({ type: 'allAddedToQueue' });
    };
    MDBUploaderService.prototype.initInputEvents = function (input) {
        var _this = this;
        input.subscribe(function (event) {
            switch (event.type) {
                case 'uploadFile':
                    _this.serviceEvents.emit({ type: 'start', file: event.file });
                    var sub = _this.uploadFile(event.file, event).subscribe(function (data) {
                        _this.serviceEvents.emit(data);
                    });
                    _this.uploads.push({ file: event.file, sub: sub });
                    break;
                case 'uploadAll':
                    var concurrency = event.concurrency > 0 ? event.concurrency : Number.POSITIVE_INFINITY;
                    var subscriber = __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscriber__["Subscriber"].create(function (data) {
                        _this.serviceEvents.emit(data);
                    });
                    _this.uploads = _this.uploads.concat(_this.files.map(function (file) {
                        return { file: file, sub: null };
                    }));
                    var subscription = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from(_this.files.map(function (file) { return _this.uploadFile(file, event); }))
                        .mergeAll(concurrency)
                        .combineLatest(function (data) { return data; })
                        .subscribe(subscriber);
                    break;
                case 'cancel':
                    var id_1 = event.id || null;
                    if (!id_1) {
                        return;
                    }
                    var index = _this.uploads.findIndex(function (upload) { return upload.file.id === id_1; });
                    if (index !== -1) {
                        if (_this.uploads[index].sub) {
                            _this.uploads[index].sub.unsubscribe();
                        }
                        _this.serviceEvents.emit({ type: 'cancelled', file: _this.uploads[index].file });
                        _this.uploads[index].file.progress.status = UploadStatus.Canceled;
                    }
                    break;
                case 'cancelAll':
                    _this.uploads.forEach(function (upload) {
                        upload.file.progress.status = UploadStatus.Canceled;
                        _this.serviceEvents.emit({ type: 'cancelled', file: upload.file });
                    });
                    break;
            }
        });
    };
    MDBUploaderService.prototype.uploadFile = function (file, event) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            var url = event.url;
            var method = event.method || 'POST';
            var data = event.data || {};
            var headers = event.headers || {};
            var reader = new FileReader();
            var xhr = new XMLHttpRequest();
            var time = new Date().getTime();
            var load = 0;
            xhr.upload.addEventListener('progress', function (e) {
                if (e.lengthComputable) {
                    var percentage = Math.round((e.loaded * 100) / e.total);
                    var diff = new Date().getTime() - time;
                    time += diff;
                    load = e.loaded - load;
                    var speed = parseInt((load / diff * 1000), 10);
                    file.progress = {
                        status: UploadStatus.Uploading,
                        data: {
                            percentage: percentage,
                            speed: speed,
                            speedHuman: humanizeBytes(speed) + "/s"
                        }
                    };
                    observer.next({ type: 'uploading', file: file });
                }
            }, false);
            xhr.upload.addEventListener('error', function (e) {
                observer.error(e);
                observer.complete();
            });
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    file.progress = {
                        status: UploadStatus.Done,
                        data: {
                            percentage: 100,
                            speed: null,
                            speedHuman: null
                        }
                    };
                    try {
                        file.response = JSON.parse(xhr.response);
                    }
                    catch (e) {
                        file.response = xhr.response;
                    }
                    observer.next({ type: 'done', file: file });
                    observer.complete();
                }
            };
            xhr.open(method, url, true);
            var form = new FormData();
            try {
                var uploadFile_1 = _this.fileList.item(file.fileIndex);
                var uploadIndex = _this.uploads.findIndex(function (upload) { return upload.file.size === uploadFile_1.size; });
                if (_this.uploads[uploadIndex].file.progress.status === UploadStatus.Canceled) {
                    observer.complete();
                }
                form.append('file', uploadFile_1, uploadFile_1.name);
                Object.keys(data).forEach(function (key) { return form.append(key, data[key]); });
                Object.keys(headers).forEach(function (key) { return xhr.setRequestHeader(key, headers[key]); });
                _this.serviceEvents.emit({ type: 'start', file: file });
                xhr.send(form);
            }
            catch (e) {
                observer.complete();
            }
            return function () {
                xhr.abort();
                reader.abort();
            };
        });
    };
    MDBUploaderService.prototype.generateId = function () {
        return Math.random().toString(36).substring(7);
    };
    return MDBUploaderService;
}());



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__option__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__diacritics__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionList; });


var OptionList = (function () {
    function OptionList(options) {
        this._highlightedOption = null;
        if (typeof options === 'undefined' || options === null) {
            options = [];
        }
        this._options = options.map(function (option) {
            var o = new __WEBPACK_IMPORTED_MODULE_0__option__["a" /* Option */](option);
            if (option.disabled) {
                o.disabled = true;
            }
            if (option.group) {
                o.disabled = true;
                o.group = true;
            }
            return o;
        });
        this._hasShown = this._options.length > 0;
        this.highlight();
    }
    OptionList.equalValues = function (v0, v1) {
        if (v0.length !== v1.length) {
            return false;
        }
        var a = v0.slice().sort();
        var b = v1.slice().sort();
        return a.every(function (v, i) {
            return v === b[i];
        });
    };
    Object.defineProperty(OptionList.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    OptionList.prototype.getOptionsByValue = function (value) {
        return this.options.filter(function (option) {
            return option.value === value;
        });
    };
    Object.defineProperty(OptionList.prototype, "value", {
        get: function () {
            return this.selection.map(function (selectedOption) {
                return selectedOption.value;
            });
        },
        set: function (v) {
            v = typeof v === 'undefined' || v === null ? [] : v;
            this.options.forEach(function (option) {
                option.selected = v.indexOf(option.value) > -1;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "selection", {
        get: function () {
            return this.options.filter(function (option) {
                return option.selected;
            });
        },
        enumerable: true,
        configurable: true
    });
    OptionList.prototype.select = function (option, multiple) {
        if (!multiple) {
            this.clearSelection();
        }
        option.selected = true;
    };
    OptionList.prototype.deselect = function (option) {
        option.selected = false;
    };
    OptionList.prototype.clearSelection = function () {
        this.options.forEach(function (option) {
            option.selected = false;
        });
    };
    Object.defineProperty(OptionList.prototype, "filtered", {
        get: function () {
            return this.options.filter(function (option) {
                return option.shown;
            });
        },
        enumerable: true,
        configurable: true
    });
    OptionList.prototype.filter = function (term) {
        var anyShown = false;
        if (term.trim() === '') {
            this.resetFilter();
            anyShown = this.options.length > 0;
        }
        else {
            this.options.forEach(function (option) {
                var l = __WEBPACK_IMPORTED_MODULE_1__diacritics__["a" /* Diacritics */].strip(option.label).toUpperCase();
                var t = __WEBPACK_IMPORTED_MODULE_1__diacritics__["a" /* Diacritics */].strip(term).toUpperCase();
                option.shown = l.indexOf(t) > -1;
            });
        }
        this.highlight();
        this._hasShown = anyShown;
        return anyShown;
    };
    OptionList.prototype.resetFilter = function () {
        this.options.forEach(function (option) {
            option.shown = true;
        });
    };
    Object.defineProperty(OptionList.prototype, "highlightedOption", {
        get: function () {
            return this._highlightedOption;
        },
        enumerable: true,
        configurable: true
    });
    OptionList.prototype.highlight = function () {
        var option = this.hasShownSelected() ?
            this.getFirstShownSelected() : this.getFirstShown();
        this.highlightOption(option);
    };
    OptionList.prototype.highlightOption = function (option) {
        this.clearHighlightedOption();
        if (option !== null) {
            option.highlighted = true;
            this._highlightedOption = option;
        }
    };
    OptionList.prototype.highlightNextOption = function () {
        var shownOptions = this.filtered;
        var index = this.getHighlightedIndexFromList(shownOptions);
        if (index > -1 && index < shownOptions.length - 1) {
            this.highlightOption(shownOptions[index + 1]);
        }
    };
    OptionList.prototype.highlightPreviousOption = function () {
        var shownOptions = this.filtered;
        var index = this.getHighlightedIndexFromList(shownOptions);
        if (index > 0) {
            this.highlightOption(shownOptions[index - 1]);
        }
    };
    OptionList.prototype.clearHighlightedOption = function () {
        if (this.highlightedOption !== null) {
            this.highlightedOption.highlighted = false;
            this._highlightedOption = null;
        }
    };
    OptionList.prototype.getHighlightedIndexFromList = function (options) {
        for (var i = 0; i < options.length; i++) {
            if (options[i].highlighted) {
                return i;
            }
        }
        return -1;
    };
    OptionList.prototype.getHighlightedIndex = function () {
        return this.getHighlightedIndexFromList(this.filtered);
    };
    Object.defineProperty(OptionList.prototype, "hasShown", {
        get: function () {
            return this._hasShown;
        },
        enumerable: true,
        configurable: true
    });
    OptionList.prototype.hasSelected = function () {
        return this.options.some(function (option) {
            return option.selected;
        });
    };
    OptionList.prototype.hasShownSelected = function () {
        return this.options.some(function (option) {
            return option.shown && option.selected;
        });
    };
    OptionList.prototype.getFirstShown = function () {
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.shown) {
                return option;
            }
        }
        return null;
    };
    OptionList.prototype.getFirstShownSelected = function () {
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.shown && option.selected) {
                return option;
            }
        }
        return null;
    };
    return OptionList;
}());



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__option_list__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectDropdownComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectDropdownComponent = (function () {
    function SelectDropdownComponent(_elementRef) {
        this._elementRef = _elementRef;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.optionClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.singleFilterClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.singleFilterInput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.singleFilterKeydown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabledColor = '#fff';
        this.disabledTextColor = '9e9e9e';
    }
    SelectDropdownComponent.prototype.ngOnInit = function () {
        this.optionsReset();
    };
    SelectDropdownComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('optionList')) {
            this.optionsReset();
        }
        var container = this._elementRef.nativeElement.classList;
        setTimeout(function () { container.add('fadeInSelect'); }, 200);
    };
    SelectDropdownComponent.prototype.ngAfterViewInit = function () {
        this.moveHighlightedIntoView();
        if (!this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.focus();
        }
    };
    SelectDropdownComponent.prototype.onSingleFilterClick = function (event) {
        this.singleFilterClick.emit(null);
    };
    SelectDropdownComponent.prototype.onSingleFilterInput = function (event) {
        this.singleFilterInput.emit(event.target.value);
    };
    SelectDropdownComponent.prototype.onSingleFilterKeydown = function (event) {
        this.singleFilterKeydown.emit(event);
    };
    SelectDropdownComponent.prototype.onOptionsWheel = function (event) {
        this.handleOptionsWheel(event);
    };
    SelectDropdownComponent.prototype.onOptionMouseover = function (option) {
        this.optionList.highlightOption(option);
    };
    SelectDropdownComponent.prototype.onOptionClick = function (option) {
        this.optionClicked.emit(option);
    };
    SelectDropdownComponent.prototype.optionsReset = function () {
        this.optionList.filter('');
        this.optionList.highlight();
    };
    SelectDropdownComponent.prototype.getOptionStyle = function (option) {
        if (option.highlighted) {
            var style = {};
            if (typeof this.highlightColor !== 'undefined') {
                style['background-color'] = this.highlightColor;
            }
            if (typeof this.highlightTextColor !== 'undefined') {
                style['color'] = this.highlightTextColor;
            }
            return style;
        }
        else {
            return {};
        }
    };
    SelectDropdownComponent.prototype.clearFilterInput = function () {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
    };
    SelectDropdownComponent.prototype.moveHighlightedIntoView = function () {
        var list = this.optionsList.nativeElement;
        var listHeight = list.offsetHeight;
        var itemIndex = this.optionList.getHighlightedIndex();
        if (itemIndex > -1) {
            var item = list.children[0].children[itemIndex];
            var itemHeight = item.offsetHeight;
            var itemTop = itemIndex * itemHeight;
            var itemBottom = itemTop + itemHeight;
            var viewTop = list.scrollTop;
            var viewBottom = viewTop + listHeight;
            if (itemBottom > viewBottom) {
                list.scrollTop = itemBottom - listHeight;
            }
            else if (itemTop < viewTop) {
                list.scrollTop = itemTop;
            }
        }
    };
    SelectDropdownComponent.prototype.handleOptionsWheel = function (e) {
        var div = this.optionsList.nativeElement;
        var atTop = div.scrollTop === 0;
        var atBottom = div.offsetHeight + div.scrollTop === div.scrollHeight;
        if (atTop && e.deltaY < 0) {
            e.preventDefault();
        }
        else if (atBottom && e.deltaY > 0) {
            e.preventDefault();
        }
    };
    return SelectDropdownComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], SelectDropdownComponent.prototype, "filterEnabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SelectDropdownComponent.prototype, "highlightColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SelectDropdownComponent.prototype, "highlightTextColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], SelectDropdownComponent.prototype, "left", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], SelectDropdownComponent.prototype, "multiple", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SelectDropdownComponent.prototype, "notFoundMsg", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__option_list__["a" /* OptionList */])
], SelectDropdownComponent.prototype, "optionList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], SelectDropdownComponent.prototype, "top", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], SelectDropdownComponent.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SelectDropdownComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SelectDropdownComponent.prototype, "close", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SelectDropdownComponent.prototype, "optionClicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SelectDropdownComponent.prototype, "singleFilterClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SelectDropdownComponent.prototype, "singleFilterInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SelectDropdownComponent.prototype, "singleFilterKeydown", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('filterInput'),
    __metadata("design:type", Object)
], SelectDropdownComponent.prototype, "filterInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('optionsList'),
    __metadata("design:type", Object)
], SelectDropdownComponent.prototype, "optionsList", void 0);
SelectDropdownComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdb-select-dropdown',
        templateUrl: 'select-dropdown.component.html',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], SelectDropdownComponent);



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_dropdown_component__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__option_list__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SELECT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SelectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SELECT_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return SelectComponent; }),
    multi: true
};
var SelectComponent = (function () {
    function SelectComponent(el) {
        this.el = el;
        this.allowClear = false;
        this.disabled = false;
        this.multiple = false;
        this.noFilter = 0;
        this.notFoundMsg = 'No results found';
        this.placeholder = '';
        this.filterPlaceholder = '';
        this.label = '';
        this.filterEnabled = false;
        this.opened = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.closed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deselected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.noOptionsFound = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.KEYS = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            UP: 38,
            DOWN: 40
        };
        this._value = [];
        this.hasSelected = false;
        this.hasFocus = false;
        this.isOpen = false;
        this.isBelow = true;
        this.filterInputWidth = 1;
        this.isDisabled = false;
        this.placeholderView = '';
        this.clearClicked = false;
        this.selectContainerClicked = false;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    SelectComponent.prototype.closeSelect = function ($event) {
        if (!this.isChild(event.target) && this.isOpen) {
            this.closeDropdown();
        }
    };
    ;
    SelectComponent.prototype.ngOnInit = function () {
        this.placeholderView = this.placeholder;
    };
    SelectComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('options')) {
            this.updateOptionsList(changes['options'].isFirstChange());
        }
        if (changes.hasOwnProperty('noFilter')) {
            var numOptions = this.optionList.options.length;
            var minNumOptions = changes['noFilter'].currentValue;
            this.filterEnabled = numOptions >= minNumOptions;
        }
    };
    SelectComponent.prototype.isChild = function (elemnt) {
        var node = elemnt.parentNode;
        while (node != null) {
            if (node === this.el.nativeElement) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    SelectComponent.prototype.onWindowClick = function () {
        if (!this.selectContainerClicked && !this.multiple) {
            this.closeDropdown();
        }
        this.clearClicked = false;
        this.selectContainerClicked = false;
    };
    SelectComponent.prototype.onWindowResize = function () {
        this.updateWidth();
    };
    SelectComponent.prototype.onSelectContainerClick = function (event) {
        this.selectContainerClicked = true;
        if (!this.clearClicked) {
            this.toggleDropdown();
        }
    };
    SelectComponent.prototype.onSelectContainerFocus = function () {
        this.onTouched();
    };
    SelectComponent.prototype.onSelectContainerKeydown = function (event) {
        this.handleSelectContainerKeydown(event);
    };
    SelectComponent.prototype.onDropdownOptionClicked = function (option) {
        this.multiple ?
            this.toggleSelectOption(option) : this.selectOption(option);
    };
    SelectComponent.prototype.onDropdownClose = function (focus) {
        this.closeDropdown(focus);
    };
    SelectComponent.prototype.onSingleFilterClick = function () {
        this.selectContainerClicked = true;
    };
    SelectComponent.prototype.onSingleFilterInput = function (term) {
        var hasShown = this.optionList.filter(term);
        if (!hasShown) {
            this.noOptionsFound.emit(term);
        }
    };
    SelectComponent.prototype.onSingleFilterKeydown = function (event) {
        this.handleSingleFilterKeydown(event);
    };
    SelectComponent.prototype.onMultipleFilterInput = function (event) {
        var _this = this;
        if (!this.isOpen) {
            this.openDropdown();
        }
        this.updateFilterWidth();
        setTimeout(function () {
            var term = event.target.value;
            var hasShown = _this.optionList.filter(term);
            if (!hasShown) {
                _this.noOptionsFound.emit(term);
            }
        });
    };
    SelectComponent.prototype.onMultipleFilterKeydown = function (event) {
        this.handleMultipleFilterKeydown(event);
    };
    SelectComponent.prototype.onClearSelectionClick = function (event) {
        this.clearClicked = true;
        this.clearSelection();
        this.closeDropdown(true);
    };
    SelectComponent.prototype.onDeselectOptionClick = function (option) {
        this.clearClicked = true;
        this.deselectOption(option);
    };
    SelectComponent.prototype.open = function () {
        this.openDropdown();
    };
    SelectComponent.prototype.close = function () {
        this.closeDropdown();
    };
    Object.defineProperty(SelectComponent.prototype, "value", {
        get: function () {
            return this.multiple ? this._value : this._value[0];
        },
        set: function (v) {
            if (typeof v === 'undefined' || v === null || v === '') {
                v = [];
            }
            else if (typeof v === 'string') {
                v = [v];
            }
            else if (!Array.isArray(v)) {
                throw new TypeError('Value must be a string or an array.');
            }
            if (!__WEBPACK_IMPORTED_MODULE_3__option_list__["a" /* OptionList */].equalValues(v, this._value)) {
                this.optionList.value = v;
                this.valueChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.clear = function () {
        this.clearSelection();
    };
    SelectComponent.prototype.select = function (value) {
        var _this = this;
        this.optionList.getOptionsByValue(value).forEach(function (option) {
            _this.selectOption(option);
        });
    };
    SelectComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    SelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    SelectComponent.prototype.valueChanged = function () {
        this._value = this.optionList.value;
        this.hasSelected = this._value.length > 0;
        this.placeholderView = this.hasSelected ? '' : this.placeholder;
        this.updateFilterWidth();
        this.onChange(this.value);
    };
    SelectComponent.prototype.updateOptionsList = function (firstTime) {
        var v;
        if (!firstTime) {
            v = this.optionList.value;
        }
        this.optionList = new __WEBPACK_IMPORTED_MODULE_3__option_list__["a" /* OptionList */](this.options);
        if (!firstTime) {
            this.optionList.value = v;
            this.valueChanged();
        }
    };
    SelectComponent.prototype.toggleDropdown = function () {
        if (!this.isDisabled) {
            this.isOpen ? this.closeDropdown(true) : this.openDropdown();
        }
    };
    SelectComponent.prototype.openDropdown = function () {
        if (!this.isOpen) {
            this.updateWidth();
            this.updatePosition();
            this.isOpen = true;
            if (this.multiple && this.filterEnabled) {
                this.filterInput.nativeElement.focus();
            }
            this.opened.emit(null);
        }
    };
    SelectComponent.prototype.closeDropdown = function (focus) {
        var _this = this;
        if (focus === void 0) { focus = false; }
        var container = this.el.nativeElement.lastElementChild.classList;
        container.remove('fadeInSelect');
        setTimeout(function () {
            if (_this.isOpen) {
                _this.clearFilterInput();
                _this.isOpen = false;
                if (focus) {
                    _this.focus();
                }
                _this.closed.emit(null);
            }
        }, 200);
    };
    SelectComponent.prototype.selectOption = function (option) {
        if (!option.selected) {
            this.optionList.select(option, this.multiple);
            this.valueChanged();
            this.selected.emit(option.wrappedOption);
        }
    };
    SelectComponent.prototype.deselectOption = function (option) {
        if (option.selected) {
            this.optionList.deselect(option);
            this.valueChanged();
            this.deselected.emit(option.wrappedOption);
        }
    };
    SelectComponent.prototype.clearSelection = function () {
        var selection = this.optionList.selection;
        if (selection.length > 0) {
            this.optionList.clearSelection();
            this.valueChanged();
            if (selection.length === 1) {
                this.deselected.emit(selection[0].wrappedOption);
            }
            else {
                this.deselected.emit(selection.map(function (option) {
                    return option.wrappedOption;
                }));
            }
        }
    };
    SelectComponent.prototype.toggleSelectOption = function (option) {
        option.selected ?
            this.deselectOption(option) : this.selectOption(option);
    };
    SelectComponent.prototype.selectHighlightedOption = function () {
        var option = this.optionList.highlightedOption;
        if (option !== null) {
            this.selectOption(option);
            this.closeDropdown(true);
        }
    };
    SelectComponent.prototype.deselectLast = function () {
        var sel = this.optionList.selection;
        if (sel.length > 0) {
            var option = sel[sel.length - 1];
            this.deselectOption(option);
            this.setMultipleFilterInput(option.label + ' ');
        }
    };
    SelectComponent.prototype.clearFilterInput = function () {
        if (this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
        else {
            this.dropdown.clearFilterInput();
        }
    };
    SelectComponent.prototype.setMultipleFilterInput = function (value) {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = value;
        }
    };
    SelectComponent.prototype.handleSelectContainerKeydown = function (event) {
        var _this = this;
        var key = event.which;
        if (this.isOpen) {
            if (key === this.KEYS.ESC ||
                (key === this.KEYS.UP && event.altKey)) {
                this.closeDropdown(true);
            }
            else if (key === this.KEYS.TAB) {
                this.closeDropdown();
            }
            else if (key === this.KEYS.ENTER) {
                this.selectHighlightedOption();
            }
            else if (key === this.KEYS.UP) {
                this.optionList.highlightPreviousOption();
                this.dropdown.moveHighlightedIntoView();
                if (!this.filterEnabled) {
                    event.preventDefault();
                }
            }
            else if (key === this.KEYS.DOWN) {
                this.optionList.highlightNextOption();
                this.dropdown.moveHighlightedIntoView();
                if (!this.filterEnabled) {
                    event.preventDefault();
                }
            }
        }
        else {
            if (key === this.KEYS.ENTER || key === this.KEYS.SPACE ||
                (key === this.KEYS.DOWN && event.altKey)) {
                setTimeout(function () { _this.openDropdown(); });
            }
        }
    };
    SelectComponent.prototype.handleMultipleFilterKeydown = function (event) {
        var key = event.which;
        if (key === this.KEYS.BACKSPACE) {
            if (this.hasSelected && this.filterEnabled &&
                this.filterInput.nativeElement.value === '') {
                this.deselectLast();
            }
        }
    };
    SelectComponent.prototype.handleSingleFilterKeydown = function (event) {
        var key = event.which;
        if (key === this.KEYS.ESC || key === this.KEYS.TAB
            || key === this.KEYS.UP || key === this.KEYS.DOWN
            || key === this.KEYS.ENTER) {
            this.handleSelectContainerKeydown(event);
        }
    };
    SelectComponent.prototype.focus = function () {
        this.hasFocus = true;
        if (this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.focus();
        }
        else {
            this.selectionSpan.nativeElement.focus();
        }
    };
    SelectComponent.prototype.blur = function () {
        this.hasFocus = false;
        this.selectionSpan.nativeElement.blur();
    };
    SelectComponent.prototype.updateWidth = function () {
        this.width = this.selectionSpan.nativeElement.offsetWidth;
    };
    SelectComponent.prototype.updatePosition = function () {
        var e = this.selectionSpan.nativeElement;
        this.left = e.offsetLeft;
        this.top = e.offsetTop + e.offsetHeight;
    };
    SelectComponent.prototype.updateFilterWidth = function () {
        if (typeof this.filterInput !== 'undefined') {
            var value = this.filterInput.nativeElement.value;
            this.filterInputWidth = value.length === 0 ?
                1 + this.placeholderView.length * 10 : 1 + value.length * 10;
        }
    };
    return SelectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], SelectComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "allowClear", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SelectComponent.prototype, "highlightColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SelectComponent.prototype, "highlightTextColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "multiple", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "noFilter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "notFoundMsg", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "filterPlaceholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "label", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "filterEnabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], SelectComponent.prototype, "opened", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], SelectComponent.prototype, "closed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], SelectComponent.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], SelectComponent.prototype, "deselected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], SelectComponent.prototype, "noOptionsFound", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selection'),
    __metadata("design:type", Object)
], SelectComponent.prototype, "selectionSpan", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dropdown'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__select_dropdown_component__["a" /* SelectDropdownComponent */])
], SelectComponent.prototype, "dropdown", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('filterInput'),
    __metadata("design:type", Object)
], SelectComponent.prototype, "filterInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SelectComponent.prototype, "closeSelect", null);
SelectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdb-ng-select',
        templateUrl: 'select.component.html',
        providers: [SELECT_VALUE_ACCESSOR],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], SelectComponent);



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressDirective = (function () {
    function ProgressDirective() {
        this.addClass = true;
        this.bars = [];
        this._max = 100;
    }
    Object.defineProperty(ProgressDirective.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (v) {
            this._max = v;
            this.bars.forEach(function (bar) {
                bar.recalculatePercentage();
            });
        },
        enumerable: true,
        configurable: true
    });
    ProgressDirective.prototype.addBar = function (bar) {
        if (!this.animate) {
            bar.transition = 'none';
        }
        this.bars.push(bar);
    };
    ProgressDirective.prototype.removeBar = function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
    return ProgressDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ProgressDirective.prototype, "animate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('attr.max'),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], ProgressDirective.prototype, "max", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.progress'),
    __metadata("design:type", Object)
], ProgressDirective.prototype, "addClass", void 0);
ProgressDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: 'mdbProgress, [mdbProgress]' })
], ProgressDirective);



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressbarConfigComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProgressbarConfigComponent = (function () {
    function ProgressbarConfigComponent() {
        this.animate = true;
        this.max = 100;
    }
    return ProgressbarConfigComponent;
}());
ProgressbarConfigComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ProgressbarConfigComponent);



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_util_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageScrollService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageScrollService = PageScrollService_1 = (function () {
    function PageScrollService() {
        var _this = this;
        this.runningInstances = [];
        this.onInterrupted = {
            report: function (event, pageScrollInstance) {
                if (!pageScrollInstance.interruptible) {
                    return;
                }
                var shouldStop = true;
                if (event.type === 'keyup') {
                    if (__WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__["a" /* PageScrollConfig */]._interruptKeys.indexOf(event.keyCode) === -1) {
                        shouldStop = false;
                    }
                }
                else if (event.type === 'mousedown') {
                    if (!pageScrollInstance.scrollingViews.some(function (scrollingView) { return scrollingView.contains(event.target); })) {
                        shouldStop = false;
                    }
                }
                if (shouldStop) {
                    _this.stopAll(pageScrollInstance.namespace);
                }
            }
        };
        if (PageScrollService_1.instanceCounter > 0 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
            console.warn('An instance of PageScrollService already exists, usually ' +
                'including one provider should be enough, so double check.');
        }
        PageScrollService_1.instanceCounter++;
    }
    PageScrollService.prototype.stopInternal = function (interrupted, pageScrollInstance) {
        var index = this.runningInstances.indexOf(pageScrollInstance);
        if (index >= 0) {
            this.runningInstances.splice(index, 1);
        }
        if (pageScrollInstance.interruptListenersAttached) {
            pageScrollInstance.detachInterruptListeners();
        }
        if (pageScrollInstance.timer) {
            clearInterval(pageScrollInstance.timer);
            pageScrollInstance.timer = undefined;
            pageScrollInstance.fireEvent(!interrupted);
            return true;
        }
        return false;
    };
    PageScrollService.prototype.start = function (pageScrollInstance) {
        var _this = this;
        this.stopAll(pageScrollInstance.namespace);
        if (pageScrollInstance.scrollingViews === null || pageScrollInstance.scrollingViews.length === 0) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
                console.warn('No scrollingViews specified, this ng2-page-scroll does not know which DOM elements to scroll');
            }
            return;
        }
        var startScrollPositionFound = false;
        pageScrollInstance.startScrollPosition = 0;
        pageScrollInstance.scrollingViews.forEach(function (scrollingView) {
            if (__WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(scrollingView)) {
                return;
            }
            var scrollPosition = pageScrollInstance.getScrollPropertyValue(scrollingView);
            if (!startScrollPositionFound && scrollPosition) {
                pageScrollInstance.startScrollPosition = scrollPosition;
                startScrollPositionFound = true;
            }
        });
        var pageScrollOffset = pageScrollInstance.getCurrentOffset();
        var scrollTargetPosition = pageScrollInstance.extractScrollTargetPosition();
        pageScrollInstance.targetScrollPosition = Math.round((pageScrollInstance.verticalScrolling ? scrollTargetPosition.top : scrollTargetPosition.left) - pageScrollOffset);
        pageScrollInstance.distanceToScroll = pageScrollInstance.targetScrollPosition - pageScrollInstance.startScrollPosition;
        if (isNaN(pageScrollInstance.distanceToScroll)) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
            }
            pageScrollInstance.fireEvent(false);
            return;
        }
        var allReadyAtDestination = Math.abs(pageScrollInstance.distanceToScroll) < __WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__["a" /* PageScrollConfig */]._minScrollDistance;
        pageScrollInstance.executionDuration = pageScrollInstance.duration;
        if (!__WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(pageScrollInstance.speed) && __WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(pageScrollInstance.duration)) {
            pageScrollInstance.executionDuration = pageScrollInstance.distanceToScroll / pageScrollInstance.speed * 1000;
        }
        var tooShortInterval = pageScrollInstance.executionDuration <= __WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__["a" /* PageScrollConfig */]._interval;
        if (allReadyAtDestination || tooShortInterval) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
                if (allReadyAtDestination) {
                }
                else {
                }
            }
            pageScrollInstance.setScrollPosition(pageScrollInstance.targetScrollPosition);
            pageScrollInstance.fireEvent(true);
            return;
        }
        if (pageScrollInstance.interruptible ||
            (__WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(pageScrollInstance.interruptible) && __WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__["a" /* PageScrollConfig */].defaultInterruptible)) {
            pageScrollInstance.attachInterruptListeners(this.onInterrupted);
        }
        pageScrollInstance.startTime = new Date().getTime();
        pageScrollInstance.endTime = pageScrollInstance.startTime + pageScrollInstance.executionDuration;
        pageScrollInstance.timer = setInterval(function (_pageScrollInstance) {
            var currentTime = new Date().getTime();
            var newScrollPosition;
            var stopNow = false;
            if (_pageScrollInstance.endTime <= currentTime) {
                newScrollPosition = _pageScrollInstance.targetScrollPosition;
                stopNow = true;
            }
            else {
                newScrollPosition = Math.round(_pageScrollInstance.easingLogic.ease(currentTime - _pageScrollInstance.startTime, _pageScrollInstance.startScrollPosition, _pageScrollInstance.distanceToScroll, _pageScrollInstance.executionDuration));
            }
            if (!_pageScrollInstance.setScrollPosition(newScrollPosition)) {
                stopNow = true;
            }
            if (stopNow) {
                _this.stopInternal(false, _pageScrollInstance);
            }
        }, __WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__["a" /* PageScrollConfig */]._interval, pageScrollInstance);
        this.runningInstances.push(pageScrollInstance);
    };
    PageScrollService.prototype.stopAll = function (namespace) {
        if (this.runningInstances.length > 0) {
            var stoppedSome = false;
            for (var i = 0; i < this.runningInstances.length; ++i) {
                var pageScrollInstance = this.runningInstances[i];
                if (__WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(namespace) || namespace.length === 0 ||
                    pageScrollInstance.namespace === namespace) {
                    stoppedSome = true;
                    this.stopInternal(true, pageScrollInstance);
                    i--;
                }
            }
            return stoppedSome;
        }
        return false;
    };
    PageScrollService.prototype.stop = function (pageScrollInstance) {
        return this.stopInternal(true, pageScrollInstance);
    };
    return PageScrollService;
}());
PageScrollService.instanceCounter = 0;
PageScrollService = PageScrollService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], PageScrollService);

var PageScrollService_1;


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabset_component__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabDirective = (function () {
    function TabDirective(tabset, el) {
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deselect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.removed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addClass = true;
        this.test = true;
        this.el = null;
        this.el = el;
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    Object.defineProperty(TabDirective.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (active) {
            var _this = this;
            if (this.disabled && active || !active) {
                if (!active) {
                    this.removeClass(this.el.nativeElement, 'show');
                    setTimeout(function () {
                        _this._active = active;
                        _this.deselect.emit(_this);
                    }, 150);
                }
                return;
            }
            setTimeout(function () {
                _this._active = active;
                _this.classAdd(_this.el.nativeElement, 'show');
            }, 150);
            this.select.emit(this);
            this.tabset.tabs.forEach(function (mdbTab) {
                if (mdbTab !== _this) {
                    mdbTab.active = false;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    TabDirective.prototype.ngOnInit = function () {
        this.removable = this.removable;
    };
    TabDirective.prototype.hasClass = function (el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        }
        else {
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        }
    };
    TabDirective.prototype.classAdd = function (el, className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!this.hasClass(el, className)) {
            el.className += ' ' + className;
        }
        ;
    };
    TabDirective.prototype.removeClass = function (el, className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (this.hasClass(el, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    };
    return TabDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TabDirective.prototype, "heading", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TabDirective.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TabDirective.prototype, "removable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TabDirective.prototype, "customClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.active'),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TabDirective.prototype, "active", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], TabDirective.prototype, "select", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], TabDirective.prototype, "deselect", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], TabDirective.prototype, "removed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.tab-pane'),
    __metadata("design:type", Object)
], TabDirective.prototype, "addClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.fade'),
    __metadata("design:type", Object)
], TabDirective.prototype, "test", void 0);
TabDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: 'mdb-tab, [mdbTab]' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tabset_component__["a" /* TabsetComponent */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], TabDirective);



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabset_config__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ripple_effect_component__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsetComponent = (function () {
    function TabsetComponent(config, ripple) {
        this.ripple = ripple;
        this.tabs = [];
        this.classMap = {};
        this.clazz = true;
        this.showBsTab = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.shownBsTab = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.hideBsTab = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.hiddenBsTab = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        Object.assign(this, config);
    }
    Object.defineProperty(TabsetComponent.prototype, "vertical", {
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    TabsetComponent.prototype.setActiveTab = function (index) {
        this.tabs[index - 1].active = true;
    };
    Object.defineProperty(TabsetComponent.prototype, "justified", {
        get: function () {
            return this._justified;
        },
        set: function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    TabsetComponent.prototype.click = function (event, index) {
        var prev = this.tabEl.toArray()[this.getActive()];
        var clicked = this.tabEl.toArray()[index];
        this.hideBsTab.emit({
            target: clicked,
            relatedTarget: prev
        });
        this.showBsTab.emit({
            target: clicked,
            relatedTarget: prev
        });
        this.setActiveTab(index + 1);
        if (this.contentClass !== 'vertical') {
            this.ripple.el = clicked;
            this.ripple.click(event);
        }
        this.hiddenBsTab.emit({
            target: clicked,
            relatedTarget: prev
        });
        this.shownBsTab.emit({
            target: clicked,
            relatedTarget: prev
        });
    };
    TabsetComponent.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
    };
    TabsetComponent.prototype.getActive = function () {
        var tabs = this.tabs.map(function (object, index) {
            return {
                index: index,
                object: object
            };
        });
        for (var _i = 0, tabs_1 = tabs; _i < tabs_1.length; _i++) {
            var tab = tabs_1[_i];
            if (tab.object.active) {
                return tab.index;
            }
        }
    };
    TabsetComponent.prototype.addTab = function (tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && tab.active !== false;
    };
    TabsetComponent.prototype.removeTab = function (tab) {
        var index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        if (tab.active && this.hasAvailableTabs(index)) {
            var newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        tab.removed.emit(tab);
        this.tabs.splice(index, 1);
    };
    TabsetComponent.prototype.getClosestTabIndex = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var step = 1; step <= tabsLength; step += 1) {
            var prevIndex = index - step;
            var nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    TabsetComponent.prototype.hasAvailableTabs = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    TabsetComponent.prototype.setClassMap = function () {
        this.classMap = {
            'nav-stacked': this.vertical,
            'nav-justified': this.justified,
        };
    };
    TabsetComponent.prototype.listGet = function () {
        if (this.vertical) {
            this.listGetClass = 'col-md-3';
        }
        else {
            this.listGetClass = 'col-md-12';
        }
    };
    TabsetComponent.prototype.tabsGet = function () {
        if (this.vertical) {
            this.tabsGetClass = 'col-md-9';
        }
        else {
            this.tabsGetClass = 'col-md-12';
        }
    };
    TabsetComponent.prototype.ngOnInit = function () {
        this.listGet();
        this.tabsGet();
    };
    return TabsetComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.tab-container'),
    __metadata("design:type", Object)
], TabsetComponent.prototype, "clazz", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TabsetComponent.prototype, "buttonClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TabsetComponent.prototype, "contentClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('tabEl', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
    __metadata("design:type", Object)
], TabsetComponent.prototype, "tabEl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], TabsetComponent.prototype, "showBsTab", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], TabsetComponent.prototype, "shownBsTab", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], TabsetComponent.prototype, "hideBsTab", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], TabsetComponent.prototype, "hiddenBsTab", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TabsetComponent.prototype, "vertical", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TabsetComponent.prototype, "justified", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TabsetComponent.prototype, "type", null);
TabsetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdb-tabset',
        templateUrl: 'tabset.component.html',
        providers: [__WEBPACK_IMPORTED_MODULE_2__ripple_effect_component__["a" /* RippleDirective */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tabset_config__["a" /* TabsetConfig */], __WEBPACK_IMPORTED_MODULE_2__ripple_effect_component__["a" /* RippleDirective */]])
], TabsetComponent);



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsetConfig; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabsetConfig = (function () {
    function TabsetConfig() {
        this.type = 'tabs';
    }
    return TabsetConfig;
}());
TabsetConfig = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], TabsetConfig);



/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_48__;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_49__;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_50__;

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image_popup__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightBoxModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LightBoxModule = (function () {
    function LightBoxModule() {
    }
    return LightBoxModule;
}());
LightBoxModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__image_popup__["a" /* ImageModalComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__image_popup__["a" /* ImageModalComponent */]]
    })
], LightBoxModule);



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sb_item__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SBItemHeadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SBItemHeadComponent = (function () {
    function SBItemHeadComponent(sbItem) {
        this.sbItem = sbItem;
    }
    SBItemHeadComponent.prototype.toggleClick = function (event) {
        event.preventDefault();
        this.sbItem.collapsed = !this.sbItem.collapsed;
        this.sbItem.toggle(this.sbItem.collapsed);
    };
    return SBItemHeadComponent;
}());
SBItemHeadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        exportAs: 'sbItemHead',
        selector: 'mdb-item-head',
        templateUrl: 'sb-item.head.html'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sb_item__["a" /* SBItemComponent */]])
], SBItemHeadComponent);



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayRef; });
var OverlayRef = (function () {
    function OverlayRef(_portalHost) {
        this._portalHost = _portalHost;
    }
    OverlayRef.prototype.attach = function (portal, newestOnTop) {
        return this._portalHost.attach(portal, newestOnTop);
    };
    OverlayRef.prototype.detach = function () {
        return this._portalHost.detach();
    };
    return OverlayRef;
}());



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast_config__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToastRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastInjector; });


var ToastRef = (function () {
    function ToastRef(_overlayRef) {
        this._overlayRef = _overlayRef;
        this._afterClosed = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this._activate = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this._manualClose = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    ToastRef.prototype.manualClose = function () {
        this._manualClose.next();
        this._manualClose.complete();
    };
    ToastRef.prototype.manualClosed = function () {
        return this._manualClose.asObservable();
    };
    ToastRef.prototype.close = function () {
        this._overlayRef.detach();
        this._afterClosed.next();
        this._afterClosed.complete();
    };
    ToastRef.prototype.afterClosed = function () {
        return this._afterClosed.asObservable();
    };
    ToastRef.prototype.isInactive = function () {
        return this._activate.isStopped;
    };
    ToastRef.prototype.activate = function () {
        this._activate.next();
        this._activate.complete();
    };
    ToastRef.prototype.afterActivate = function () {
        return this._activate.asObservable();
    };
    return ToastRef;
}());

var ToastInjector = (function () {
    function ToastInjector(_toastPackage, _parentInjector) {
        this._toastPackage = _toastPackage;
        this._parentInjector = _parentInjector;
    }
    ToastInjector.prototype.get = function (token, notFoundValue) {
        if (token === __WEBPACK_IMPORTED_MODULE_1__toast_config__["a" /* ToastPackage */] && this._toastPackage) {
            return this._toastPackage;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return ToastInjector;
}());



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOAST_CONFIG; });

var TOAST_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('ToastConfig');


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* unused harmony export slideIn */
/* unused harmony export fadeIn */
/* unused harmony export slideOut */
/* unused harmony export flipState */
/* unused harmony export turnState */
/* unused harmony export iconsState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return socialsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return zoomState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return restartState; });
/* unused harmony export flyInOut */

var slideIn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('slideIn', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, transform: 'translateX(-300%)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(0)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease')),
]);
var fadeIn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fadeIn', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease')),
]);
var slideOut = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('slideOut', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, transform: 'translateX(-300%)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(0)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease')),
]);
var flipState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('flipState', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'rotateY(179.9deg)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'rotateY(0)' })),
]);
var turnState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('turnState', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'rotateY(179.9deg)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'rotateY(0)' })),
]);
var iconsState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('iconsState', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('isactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ visibility: 'visible', transform: 'translate(-6%)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('isnotactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ visibility: 'hidden', transform: 'translate(27%)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('isactive => isnotactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('100ms ease-in')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('isnotactive => isactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-out')),
]);
var socialsState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('socialsState', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ visibility: 'visible', transform: 'translateY(-100%)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ visibility: 'hidden', transform: 'translateY(0)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-out')),
]);
var zoomState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('zoomState', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale(1, 1)', cursor: 'zoom-out' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale(0.9, 0.9)', cursor: 'zoom-in' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('300ms ease-in')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('300ms ease-out')),
]);
var restartState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('restartState', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale(0.9, 0.9)' })),
]);
var flyInOut = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('flyInOut', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ display: 'none', opacity: 0.7 })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0.7 })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('removed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('300ms ease-in')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('active => removed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('300ms ease-in')),
]);


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterListItemComponent; });

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompleterListItemComponent = (function () {
    function CompleterListItemComponent() {
        this.parts = [];
    }
    CompleterListItemComponent.prototype.ngOnInit = function () {
        if (!this.searchStr) {
            this.parts.push({ isMatch: false, text: this.text });
            return;
        }
        var matchStr = this.text.toLowerCase();
        var matchPos = matchStr.indexOf(this.searchStr.toLowerCase());
        var startIndex = 0;
        while (matchPos >= 0) {
            var matchText = this.text.slice(matchPos, matchPos + this.searchStr.length);
            if (matchPos === 0) {
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length;
            }
            else if (matchPos > 0) {
                var matchPart = this.text.slice(startIndex, matchPos);
                this.parts.push({ isMatch: false, text: matchPart });
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length + matchPart.length;
            }
            matchPos = matchStr.indexOf(this.searchStr.toLowerCase(), startIndex);
        }
        if (startIndex < this.text.length) {
            this.parts.push({ isMatch: false, text: this.text.slice(startIndex, this.text.length) });
        }
    };
    return CompleterListItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CompleterListItemComponent.prototype, "text", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CompleterListItemComponent.prototype, "searchStr", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CompleterListItemComponent.prototype, "matchClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CompleterListItemComponent.prototype, "type", void 0);
CompleterListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdb-completer-list-item',
        templateUrl: 'completer-list-item.component.html'
    })
], CompleterListItemComponent);



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_completer_directive__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_completer_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterComponent; });

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var noop = function () { };
var COMPLETER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CompleterComponent; }),
    multi: true
};
var CompleterComponent = (function () {
    function CompleterComponent(completerService) {
        this.completerService = completerService;
        this.inputName = '';
        this.inputId = '';
        this.pause = __WEBPACK_IMPORTED_MODULE_4__globals__["b" /* PAUSE */];
        this.minSearchLength = __WEBPACK_IMPORTED_MODULE_4__globals__["a" /* MIN_SEARCH_LENGTH */];
        this.maxChars = __WEBPACK_IMPORTED_MODULE_4__globals__["e" /* MAX_CHARS */];
        this.overrideSuggested = false;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.fillHighlighted = true;
        this.placeholder = '';
        this.autoMatch = false;
        this.disableInput = false;
        this.autofocus = false;
        this.openOnFocus = false;
        this.autoHighlight = false;
        this.focused = false;
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.highlighted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.blur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.focusEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.opened = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.keyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.keydown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.searchStr = '';
        this.control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('');
        this.displaySearching = true;
        this.displayNoResults = true;
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
        this._focus = false;
        this._open = false;
        this._textNoResults = __WEBPACK_IMPORTED_MODULE_4__globals__["f" /* TEXT_NO_RESULTS */];
        this._textSearching = __WEBPACK_IMPORTED_MODULE_4__globals__["g" /* TEXT_SEARCHING */];
    }
    Object.defineProperty(CompleterComponent.prototype, "value", {
        get: function () { return this.searchStr; },
        set: function (v) {
            if (v !== this.searchStr) {
                this.searchStr = v;
            }
            this._onChangeCallback(v);
        },
        enumerable: true,
        configurable: true
    });
    ;
    CompleterComponent.prototype.ngAfterViewInit = function () {
        if (this.autofocus) {
            this._focus = true;
        }
    };
    CompleterComponent.prototype.ngAfterViewChecked = function () {
        if (this._focus) {
            this.mdbInput.nativeElement.focus();
            this._focus = false;
        }
    };
    CompleterComponent.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    CompleterComponent.prototype.writeValue = function (value) {
        this.searchStr = value;
    };
    CompleterComponent.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    CompleterComponent.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    Object.defineProperty(CompleterComponent.prototype, "datasource", {
        set: function (source) {
            if (source) {
                if (source instanceof Array) {
                    this.dataService = this.completerService.local(source);
                }
                else if (typeof (source) === 'string') {
                    this.dataService = this.completerService.remote(source);
                }
                else {
                    this.dataService = source;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleterComponent.prototype, "textNoResults", {
        set: function (text) {
            if (this._textNoResults !== text) {
                this._textNoResults = text;
                this.displayNoResults = this._textNoResults && this._textNoResults !== 'false';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleterComponent.prototype, "textSearching", {
        set: function (text) {
            if (this._textSearching !== text) {
                this._textSearching = text;
                this.displaySearching = this._textSearching && this._textSearching !== 'false';
            }
        },
        enumerable: true,
        configurable: true
    });
    CompleterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.completer.selected.subscribe(function (item) {
            _this.selected.emit(item);
        });
        this.completer.highlighted.subscribe(function (item) {
            _this.highlighted.emit(item);
        });
        this.completer.opened.subscribe(function (isOpen) {
            _this._open = isOpen;
            _this.opened.emit(isOpen);
        });
    };
    CompleterComponent.prototype.onBlur = function () {
        this.blur.emit();
        this.onTouched();
        if (this.searchStr === undefined || this.searchStr === '') {
            this.focused = false;
        }
    };
    CompleterComponent.prototype.onFocus = function () {
        this.focusEvent.emit();
        this.onTouched();
        this.focused = true;
    };
    CompleterComponent.prototype.onKeyup = function (event) {
        this.keyup.emit(event);
    };
    CompleterComponent.prototype.onKeydown = function (event) {
        this.keydown.emit(event);
    };
    CompleterComponent.prototype.onChange = function (value) {
        this.value = value;
    };
    CompleterComponent.prototype.open = function () {
        this.completer.open();
    };
    CompleterComponent.prototype.close = function () {
        this.completer.clear();
    };
    CompleterComponent.prototype.focus = function () {
        if (this.mdbInput) {
            this.mdbInput.nativeElement.focus();
        }
        else {
            this._focus = true;
        }
    };
    CompleterComponent.prototype.isOpen = function () {
        return this._open;
    };
    return CompleterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "dataService", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "inputName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "inputId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "pause", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "minSearchLength", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "maxChars", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "overrideSuggested", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "clearSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "clearUnselected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "fillHighlighted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CompleterComponent.prototype, "matchClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], CompleterComponent.prototype, "fieldTabindex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "autoMatch", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "disableInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CompleterComponent.prototype, "inputClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "autofocus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "openOnFocus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "initialValue", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "autoHighlight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CompleterComponent.prototype, "label", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "highlighted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "blur", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "focusEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CompleterComponent.prototype, "opened", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], CompleterComponent.prototype, "keyup", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], CompleterComponent.prototype, "keydown", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__directives_completer_directive__["a" /* MdbCompleterDirective */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__directives_completer_directive__["a" /* MdbCompleterDirective */])
], CompleterComponent.prototype, "completer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mdbInput'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], CompleterComponent.prototype, "mdbInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CompleterComponent.prototype, "datasource", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], CompleterComponent.prototype, "textNoResults", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], CompleterComponent.prototype, "textSearching", null);
CompleterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdb-completer',
        templateUrl: './completer.component.html',
        providers: [COMPLETER_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_completer_service__["a" /* CompleterService */]])
], CompleterComponent);



/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__completer_directive__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdbInputDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var KEY_DW = 40;
var KEY_RT = 39;
var KEY_UP = 38;
var KEY_LF = 37;
var KEY_ES = 27;
var KEY_EN = 13;
var KEY_TAB = 9;
var MdbInputDirective = (function () {
    function MdbInputDirective(completer, ngModel, el) {
        var _this = this;
        this.completer = completer;
        this.ngModel = ngModel;
        this.el = el;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.overrideSuggested = false;
        this.fillHighlighted = true;
        this.openOnFocus = false;
        this.ngModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._searchStr = '';
        this._displayStr = '';
        this.blurTimer = null;
        this.completer.selected.subscribe(function (item) {
            if (!item) {
                return;
            }
            if (_this.clearSelected) {
                _this.searchStr = '';
            }
            else {
                _this.searchStr = item.title;
            }
            _this.ngModelChange.emit(_this.searchStr);
        });
        this.completer.highlighted.subscribe(function (item) {
            if (_this.fillHighlighted) {
                if (item) {
                    _this._displayStr = item.title;
                    _this.ngModelChange.emit(item.title);
                }
                else {
                    _this._displayStr = _this.searchStr;
                    _this.ngModelChange.emit(_this.searchStr);
                }
            }
        });
        this.ngModel.valueChanges.subscribe(function (value) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__globals__["c" /* isNil */])(value) && _this._displayStr !== value) {
                if (_this.searchStr !== value) {
                    _this.completer.search(value);
                }
                _this.searchStr = value;
            }
        });
    }
    MdbInputDirective.prototype.keyupHandler = function (event) {
        if (event.keyCode === KEY_LF || event.keyCode === KEY_RT || event.keyCode === KEY_TAB) {
            return;
        }
        if (event.keyCode === KEY_UP || event.keyCode === KEY_EN) {
            event.preventDefault();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.search(this.searchStr);
        }
        else if (event.keyCode === KEY_ES) {
            this.restoreSearchValue();
            this.completer.clear();
        }
        else {
            if (this.searchStr) {
                this.completer.open();
            }
        }
    };
    MdbInputDirective.prototype.keydownHandler = function (event) {
        if (event.keyCode === KEY_EN) {
            if (this.completer.hasHighlighted()) {
                event.preventDefault();
            }
            this.handleSelection();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.open();
            this.completer.nextRow();
        }
        else if (event.keyCode === KEY_UP) {
            event.preventDefault();
            this.completer.prevRow();
        }
        else if (event.keyCode === KEY_TAB) {
            this.handleSelection();
        }
        else if (event.keyCode === KEY_ES) {
            event.preventDefault();
        }
    };
    MdbInputDirective.prototype.onBlur = function (event) {
        var _this = this;
        if (this.completer.isCancelBlur()) {
            setTimeout(function () {
                _this.el.nativeElement.focus();
            }, 0);
            return;
        }
        this.blurTimer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].timer(200).subscribe(function () {
            _this.blurTimer.unsubscribe();
            _this.blurTimer = null;
            if (_this.overrideSuggested) {
                _this.completer.onSelected({ title: _this.searchStr, originalObject: null });
            }
            else {
                if (_this.clearUnselected && !_this.completer.hasSelected) {
                    _this.searchStr = '';
                }
                else {
                    _this.restoreSearchValue();
                }
            }
            _this.completer.clear();
        });
    };
    MdbInputDirective.prototype.onfocus = function () {
        if (this.blurTimer) {
            this.blurTimer.unsubscribe();
            this.blurTimer = null;
        }
        if (this.openOnFocus) {
            this.completer.open();
        }
    };
    Object.defineProperty(MdbInputDirective.prototype, "searchStr", {
        get: function () {
            return this._searchStr;
        },
        set: function (term) {
            this._searchStr = term;
            this._displayStr = term;
        },
        enumerable: true,
        configurable: true
    });
    MdbInputDirective.prototype.handleSelection = function () {
        if (this.completer.hasHighlighted()) {
            this._searchStr = '';
            this.completer.selectCurrent();
        }
        else if (this.overrideSuggested) {
            this.completer.onSelected({ title: this.searchStr, originalObject: null });
        }
        else {
            this.completer.clear();
        }
    };
    MdbInputDirective.prototype.restoreSearchValue = function () {
        if (this.fillHighlighted) {
            if (this._displayStr !== this.searchStr) {
                this._displayStr = this.searchStr;
                this.ngModelChange.emit(this.searchStr);
            }
        }
    };
    return MdbInputDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('clearSelected'),
    __metadata("design:type", Object)
], MdbInputDirective.prototype, "clearSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('clearUnselected'),
    __metadata("design:type", Object)
], MdbInputDirective.prototype, "clearUnselected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('overrideSuggested'),
    __metadata("design:type", Object)
], MdbInputDirective.prototype, "overrideSuggested", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fillHighlighted'),
    __metadata("design:type", Object)
], MdbInputDirective.prototype, "fillHighlighted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('openOnFocus'),
    __metadata("design:type", Object)
], MdbInputDirective.prototype, "openOnFocus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MdbInputDirective.prototype, "ngModelChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MdbInputDirective.prototype, "keyupHandler", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MdbInputDirective.prototype, "keydownHandler", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('blur', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MdbInputDirective.prototype, "onBlur", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('focus', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MdbInputDirective.prototype, "onfocus", null);
MdbInputDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdbInput]',
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__completer_directive__["a" /* MdbCompleterDirective */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgModel"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], MdbInputDirective);



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_timer__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__completer_directive__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals__ = __webpack_require__(6);
/* unused harmony export CtrListContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdbListDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CtrListContext = (function () {
    function CtrListContext(results, searching, searchInitialized, isOpen) {
        this.results = results;
        this.searching = searching;
        this.searchInitialized = searchInitialized;
        this.isOpen = isOpen;
    }
    return CtrListContext;
}());

var MdbListDirective = (function () {
    function MdbListDirective(completer, templateRef, viewContainer, cd) {
        this.completer = completer;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.mdbListMinSearchLength = __WEBPACK_IMPORTED_MODULE_4__globals__["a" /* MIN_SEARCH_LENGTH */];
        this.mdbListPause = __WEBPACK_IMPORTED_MODULE_4__globals__["b" /* PAUSE */];
        this.mdbListAutoMatch = false;
        this.mdbListAutoHighlight = false;
        this.term = null;
        this.searchTimer = null;
        this.clearTimer = null;
        this.ctx = new CtrListContext([], false, false, false);
        this._initialValue = null;
    }
    MdbListDirective.prototype.ngOnInit = function () {
        this.completer.registerList(this);
        this.viewContainer.createEmbeddedView(this.templateRef, new CtrListContext([], false, false, false));
    };
    Object.defineProperty(MdbListDirective.prototype, "dataService", {
        set: function (newService) {
            var _this = this;
            this._dataService = newService;
            if (this._dataService) {
                this._dataService
                    .catch(function (err) { return _this.handleError(err); })
                    .subscribe(function (results) {
                    _this.ctx.searchInitialized = true;
                    _this.ctx.searching = false;
                    _this.ctx.results = results;
                    if (_this.mdbListAutoMatch && results.length === 1 && results[0].title && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__globals__["c" /* isNil */])(_this.term) &&
                        results[0].title.toLocaleLowerCase() === _this.term.toLocaleLowerCase()) {
                        _this.completer.onSelected(results[0]);
                    }
                    if (_this._initialValue) {
                        _this.initialValue = _this._initialValue;
                        _this._initialValue = null;
                    }
                    if (_this.mdbListAutoHighlight) {
                        _this.completer.autoHighlightIndex = _this.getBestMatchIndex();
                    }
                    _this.refreshTemplate();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbListDirective.prototype, "initialValue", {
        set: function (value) {
            var _this = this;
            if (this._dataService && typeof this._dataService.convertToItem === 'function') {
                setTimeout(function () {
                    var initialItem = _this._dataService.convertToItem(value);
                    if (initialItem) {
                        _this.completer.onSelected(initialItem, false);
                    }
                });
            }
            else if (!this._dataService) {
                this._initialValue = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    MdbListDirective.prototype.search = function (term) {
        var _this = this;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__globals__["c" /* isNil */])(term) && term.length >= this.mdbListMinSearchLength && this.term !== term) {
            if (this.searchTimer) {
                this.searchTimer.unsubscribe();
                this.searchTimer = null;
            }
            if (!this.ctx.searching) {
                this.ctx.results = [];
                this.ctx.searching = true;
                this.ctx.searchInitialized = true;
                this.refreshTemplate();
            }
            if (this.clearTimer) {
                this.clearTimer.unsubscribe();
            }
            this.searchTimer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].timer(this.mdbListPause).subscribe(function () {
                _this.searchTimerComplete(term);
            });
        }
        else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__globals__["c" /* isNil */])(term) && term.length < this.mdbListMinSearchLength) {
            this.clear();
        }
    };
    MdbListDirective.prototype.clear = function () {
        var _this = this;
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
        }
        this.clearTimer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].timer(__WEBPACK_IMPORTED_MODULE_4__globals__["d" /* CLEAR_TIMEOUT */]).subscribe(function () {
            _this._clear();
        });
    };
    MdbListDirective.prototype.open = function () {
        if (!this.ctx.searchInitialized) {
            this.search('');
        }
        this.refreshTemplate();
    };
    MdbListDirective.prototype.isOpen = function (open) {
        this.ctx.isOpen = open;
    };
    MdbListDirective.prototype._clear = function () {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
            this.searchTimer = null;
        }
        if (this.dataService) {
            this.dataService.cancel();
        }
        this.viewContainer.clear();
    };
    MdbListDirective.prototype.searchTimerComplete = function (term) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__globals__["c" /* isNil */])(term) || term.length < this.mdbListMinSearchLength) {
            this.ctx.searching = false;
            return;
        }
        this.term = term;
        this._dataService.search(term);
    };
    MdbListDirective.prototype.handleError = function (error) {
        this.ctx.searching = false;
        var errMsg = 'search error';
        if (error) {
            errMsg = (error.message) ? error.message :
                error.status ? error.status + " - " + error.statusText : 'Server error';
        }
        if (console && console.error) {
            console.error(errMsg);
        }
        this.refreshTemplate();
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    MdbListDirective.prototype.refreshTemplate = function () {
        this.viewContainer.clear();
        if (this.ctx.results && this.ctx.isOpen) {
            this.viewContainer.createEmbeddedView(this.templateRef, this.ctx);
        }
        this.cd.markForCheck();
    };
    MdbListDirective.prototype.getBestMatchIndex = function () {
        var _this = this;
        if (!this.ctx.results) {
            return null;
        }
        var bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase() === _this.term.toLocaleLowerCase(); });
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase().startsWith(_this.term.toLocaleLowerCase()); });
        }
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase().includes(_this.term.toLocaleLowerCase()); });
        }
        return bestMatch < 0 ? null : bestMatch;
    };
    return MdbListDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MdbListDirective.prototype, "mdbListMinSearchLength", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MdbListDirective.prototype, "mdbListPause", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MdbListDirective.prototype, "mdbListAutoMatch", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MdbListDirective.prototype, "mdbListAutoHighlight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('mdbList'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdbListDirective.prototype, "dataService", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('mdbListInitialValue'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdbListDirective.prototype, "initialValue", null);
MdbListDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: '[mdbList]',
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Host"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__completer_directive__["a" /* MdbCompleterDirective */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])
], MdbListDirective);



/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_directive__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdbRowDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MdbRowDirective = (function () {
    function MdbRowDirective(el, renderer, dropdown) {
        this.el = el;
        this.renderer = renderer;
        this.dropdown = dropdown;
        this.selected = false;
    }
    MdbRowDirective.prototype.ngOnInit = function () {
        this.dropdown.registerRow(new __WEBPACK_IMPORTED_MODULE_1__dropdown_directive__["b" /* CtrRowItem */](this, this._rowIndex));
    };
    Object.defineProperty(MdbRowDirective.prototype, "mdbRow", {
        set: function (index) {
            this._rowIndex = index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbRowDirective.prototype, "dataItem", {
        set: function (item) {
            this._item = item;
        },
        enumerable: true,
        configurable: true
    });
    MdbRowDirective.prototype.onClick = function (event) {
        this.dropdown.onSelected(this._item);
    };
    MdbRowDirective.prototype.onMouseEnter = function (event) {
        this.dropdown.highlightRow(this._rowIndex);
    };
    MdbRowDirective.prototype.setHighlighted = function (selected) {
        this.selected = selected;
        this.renderer.setElementClass(this.el.nativeElement, 'completer-selected-row', this.selected);
    };
    MdbRowDirective.prototype.getNativeElement = function () {
        return this.el.nativeElement;
    };
    MdbRowDirective.prototype.getDataItem = function () {
        return this._item;
    };
    return MdbRowDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], MdbRowDirective.prototype, "mdbRow", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdbRowDirective.prototype, "dataItem", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MdbRowDirective.prototype, "onClick", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MdbRowDirective.prototype, "onMouseEnter", null);
MdbRowDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdbRow]',
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1__dropdown_directive__["a" /* MdbDropdownDirective */]])
], MdbRowDirective);



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_data_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remote_data_service__ = __webpack_require__(37);
/* unused harmony export localDataFactory */
/* unused harmony export remoteDataFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalDataFactoryProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RemoteDataFactoryProvider; });



function localDataFactory() {
    return function () {
        return new __WEBPACK_IMPORTED_MODULE_1__local_data_service__["a" /* LocalData */]();
    };
}
function remoteDataFactory(http) {
    return function () {
        return new __WEBPACK_IMPORTED_MODULE_2__remote_data_service__["a" /* RemoteData */](http);
    };
}
var LocalDataFactoryProvider = { provide: __WEBPACK_IMPORTED_MODULE_1__local_data_service__["a" /* LocalData */], useFactory: localDataFactory };
var RemoteDataFactoryProvider = { provide: __WEBPACK_IMPORTED_MODULE_2__remote_data_service__["a" /* RemoteData */], useFactory: remoteDataFactory, deps: [__WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]] };


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_animations_component__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardRevealComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CardRevealComponent = (function () {
    function CardRevealComponent() {
    }
    CardRevealComponent.prototype.toggle = function () {
        this.show = !this.show;
        this.socials = (this.socials === 'active') ? 'inactive' : 'active';
    };
    return CardRevealComponent;
}());
CardRevealComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdb-card-reveal',
        templateUrl: 'card-reveal.component.html',
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations_animations_component__["c" /* socialsState */]]
    })
], CardRevealComponent);



/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardRotatingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CardRotatingComponent = (function () {
    function CardRotatingComponent() {
        this.rotate = false;
    }
    CardRotatingComponent.prototype.toggle = function () {
        this.rotate = !this.rotate;
    };
    return CardRotatingComponent;
}());
CardRotatingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdb-card-rotating',
        templateUrl: 'card-rotating.component.html'
    })
], CardRotatingComponent);



/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datepickerLocale_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_datepickerUtil_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MYDP_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDBDatePickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MYDP_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MDBDatePickerComponent; }),
    multi: true
};
var CalToggle;
(function (CalToggle) {
    CalToggle[CalToggle["Open"] = 1] = "Open";
    CalToggle[CalToggle["CloseByDateSel"] = 2] = "CloseByDateSel";
    CalToggle[CalToggle["CloseByCalBtn"] = 3] = "CloseByCalBtn";
    CalToggle[CalToggle["CloseByOutClick"] = 4] = "CloseByOutClick";
})(CalToggle || (CalToggle = {}));
var Year;
(function (Year) {
    Year[Year["min"] = 1000] = "min";
    Year[Year["max"] = 9999] = "max";
})(Year || (Year = {}));
var InputFocusBlur;
(function (InputFocusBlur) {
    InputFocusBlur[InputFocusBlur["focus"] = 1] = "focus";
    InputFocusBlur[InputFocusBlur["blur"] = 2] = "blur";
})(InputFocusBlur || (InputFocusBlur = {}));
var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["enter"] = 13] = "enter";
    KeyCode[KeyCode["space"] = 32] = "space";
})(KeyCode || (KeyCode = {}));
var MonthId;
(function (MonthId) {
    MonthId[MonthId["prev"] = 1] = "prev";
    MonthId[MonthId["curr"] = 2] = "curr";
    MonthId[MonthId["next"] = 3] = "next";
})(MonthId || (MonthId = {}));
var MDBDatePickerComponent = (function () {
    function MDBDatePickerComponent(elem, renderer, cdr, localeService, utilService) {
        var _this = this;
        this.elem = elem;
        this.renderer = renderer;
        this.cdr = cdr;
        this.localeService = localeService;
        this.utilService = utilService;
        this.label = '';
        this.placeholder = '';
        this.dateChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.inputFieldChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.calendarViewChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.calendarToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.inputFocusBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showSelector = false;
        this.visibleMonth = { monthTxt: '', monthNbr: 0, year: 1 };
        this.selectedMonth = { monthTxt: '', monthNbr: 0, year: 0 };
        this.selectedDate = { year: 0, month: 0, day: 0 };
        this.weekDays = [];
        this.dates = [];
        this.selectionDayTxt = '';
        this.invalidDate = false;
        this.disableTodayBtn = false;
        this.dayIdx = 0;
        this.weekDayOpts = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
        this.editMonth = false;
        this.invalidMonth = false;
        this.editYear = false;
        this.invalidYear = false;
        this.prevMonthDisabled = false;
        this.nextMonthDisabled = false;
        this.prevYearDisabled = false;
        this.nextYearDisabled = false;
        this.prevMonthId = MonthId.prev;
        this.currMonthId = MonthId.curr;
        this.nextMonthId = MonthId.next;
        this.tmp = { year: this.getToday().year, month: this.getToday().month, day: this.getToday().day };
        this.opts = {
            dayLabelsFull: {},
            dayLabels: {},
            monthLabelsFull: {},
            monthLabels: {},
            dateFormat: '',
            showTodayBtn: true,
            todayBtnTxt: '',
            firstDayOfWeek: '',
            sunHighlight: true,
            markCurrentDay: true,
            disableUntil: { year: 0, month: 0, day: 0 },
            disableSince: { year: 0, month: 0, day: 0 },
            disableDays: [],
            enableDays: [],
            markDates: [],
            markWeekends: {},
            disableDateRanges: [],
            disableWeekends: false,
            showWeekNumbers: false,
            height: '32px',
            width: '100%',
            selectionTxtFontSize: '1rem',
            showClearDateBtn: true,
            alignSelectorRight: false,
            disableHeaderButtons: true,
            minYear: Year.min,
            maxYear: Year.max,
            componentDisabled: false,
            showSelectorArrow: true,
            ariaLabelInputField: 'Date input field',
            ariaLabelClearDate: 'Clear Date',
            ariaLabelOpenCalendar: 'Open Calendar',
            ariaLabelPrevMonth: 'Previous Month',
            ariaLabelNextMonth: 'Next Month',
            ariaLabelPrevYear: 'Previous Year',
            ariaLabelNextYear: 'Next Year'
        };
        this.months = [];
        this.years = [];
        this.onChangeCb = function () { };
        this.onTouchedCb = function () { };
        this.setLocaleOptions();
        renderer.listenGlobal(this.elem.nativeElement, 'click', function (event) {
            if (_this.showSelector &&
                event.target &&
                _this.elem.nativeElement !== event.target &&
                !_this.elem.nativeElement.contains(event.target)) {
                _this.removeInlineStyle();
                _this.showSelector = false;
                _this.calendarToggle.emit(CalToggle.CloseByOutClick);
            }
            if (event.target.classList.contains('picker__holder')) {
                _this.removeInlineStyle();
                _this.showSelector = false;
            }
            if (true && event.target && _this.elem.nativeElement.contains(event.target)) {
                _this.resetMonthYearEdit();
            }
        });
    }
    MDBDatePickerComponent.prototype.removeInlineStyle = function () {
        setTimeout(function () {
            document.documentElement.style.removeProperty('overflow');
        }, 155);
    };
    MDBDatePickerComponent.prototype.setLocaleOptions = function () {
        var _this = this;
        var opts = this.localeService.getLocaleOptions(this.locale);
        Object.keys(opts).forEach(function (k) {
            _this.opts[k] = opts[k];
        });
    };
    MDBDatePickerComponent.prototype.setOptions = function () {
        var _this = this;
        if (this.options !== undefined) {
            Object.keys(this.options).forEach(function (k) {
                _this.opts[k] = _this.options[k];
            });
        }
        if (this.opts.minYear < Year.min) {
            this.opts.minYear = Year.min;
        }
        if (this.opts.maxYear > Year.max) {
            this.opts.maxYear = Year.max;
        }
        if (this.disabled !== undefined) {
            this.opts.componentDisabled = this.disabled;
        }
        var separator = this.utilService.getDateFormatSeparator(this.opts.dateFormat);
    };
    MDBDatePickerComponent.prototype.resetMonthYearEdit = function () {
        this.editMonth = false;
        this.editYear = false;
        this.invalidMonth = false;
        this.invalidYear = false;
    };
    MDBDatePickerComponent.prototype.onUserDateInput = function (value) {
        this.invalidDate = false;
        if (value.length === 0) {
            this.clearDate();
        }
        else {
            var date = this.utilService.isDateValid(value, this.opts.dateFormat, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.monthLabels, this.opts.enableDays);
            if (date.day !== 0 && date.month !== 0 && date.year !== 0) {
                this.selectDate(date);
            }
            else {
                this.invalidDate = true;
            }
        }
        if (this.invalidDate) {
            this.inputFieldChanged.emit({ value: value, dateFormat: this.opts.dateFormat, valid: !(value.length === 0 || this.invalidDate) });
            this.onChangeCb('');
            this.onTouchedCb();
        }
    };
    MDBDatePickerComponent.prototype.onFocusInput = function (event) {
        this.openBtnClicked();
        this.inputFocusBlur.emit({ reason: InputFocusBlur.focus, value: event.target.value });
        document.documentElement.style.overflow = 'hidden';
        this.divFocus.nativeElement.focus();
    };
    MDBDatePickerComponent.prototype.onBlurInput = function (event) {
        this.selectionDayTxt = event.target.value;
        this.onTouchedCb();
        this.inputFocusBlur.emit({ reason: InputFocusBlur.blur, value: event.target.value });
    };
    MDBDatePickerComponent.prototype.onUserMonthInput = function (value) {
        this.invalidMonth = false;
        var m = this.utilService.isMonthLabelValid(value, this.opts.monthLabels);
        if (m !== -1) {
            this.editMonth = false;
            if (m !== this.visibleMonth.monthNbr) {
                this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: this.visibleMonth.year };
                this.generateCalendar(m, this.visibleMonth.year, true);
            }
        }
        else {
            this.invalidMonth = true;
        }
    };
    MDBDatePickerComponent.prototype.onUserYearInput = function (value) {
        this.invalidYear = false;
        var y = this.utilService.isYearLabelValid(Number(value), this.opts.minYear, this.opts.maxYear);
        if (y !== -1) {
            this.editYear = false;
            if (y !== this.visibleMonth.year) {
                this.visibleMonth = { monthTxt: this.visibleMonth.monthTxt, monthNbr: this.visibleMonth.monthNbr, year: y };
                this.generateCalendar(this.visibleMonth.monthNbr, y, true);
            }
        }
        else {
            this.invalidYear = true;
        }
    };
    MDBDatePickerComponent.prototype.isTodayDisabled = function () {
        this.disableTodayBtn = this.utilService.isDisabledDay(this.getToday(), this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays);
    };
    MDBDatePickerComponent.prototype.parseOptions = function () {
        if (this.locale) {
            this.setLocaleOptions();
        }
        this.setOptions();
        this.isTodayDisabled();
        this.dayIdx = this.weekDayOpts.indexOf(this.opts.firstDayOfWeek);
        if (this.dayIdx !== -1) {
            var idx = this.dayIdx;
            for (var i = 0; i < this.weekDayOpts.length; i++) {
                this.weekDays.push(this.opts.dayLabels[this.weekDayOpts[idx]]);
                idx = this.weekDayOpts[idx] === 'sa' ? 0 : idx + 1;
            }
        }
    };
    MDBDatePickerComponent.prototype.writeValue = function (value) {
        if (value && value['date']) {
            this.updateDateValue(this.parseSelectedDate(value['date']), false);
        }
        else if (value === '') {
            this.updateDateValue({ year: 0, month: 0, day: 0 }, true);
        }
    };
    MDBDatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCb = fn;
    };
    MDBDatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCb = fn;
    };
    MDBDatePickerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.hasOwnProperty('selector') && changes['selector'].currentValue > 0) {
            this.openBtnClicked();
        }
        if (changes.hasOwnProperty('placeholder')) {
            this.placeholder = changes['placeholder'].currentValue;
        }
        if (changes.hasOwnProperty('locale')) {
            this.locale = changes['locale'].currentValue;
        }
        if (changes.hasOwnProperty('disabled')) {
            this.disabled = changes['disabled'].currentValue;
        }
        if (changes.hasOwnProperty('options')) {
            this.options = changes['options'].currentValue;
        }
        this.weekDays.length = 0;
        this.parseOptions();
        if (changes.hasOwnProperty('defaultMonth')) {
            var dm = changes['defaultMonth'].currentValue;
            if (dm !== null && dm !== undefined && dm !== '') {
                this.selectedMonth = this.parseSelectedMonth(dm);
            }
            else {
                this.selectedMonth = { monthTxt: '', monthNbr: 0, year: 0 };
            }
        }
        if (changes.hasOwnProperty('selDate')) {
            var sd = changes['selDate'];
            if (sd.currentValue !== null &&
                sd.currentValue !== undefined &&
                sd.currentValue !== '' &&
                Object.keys(sd.currentValue).length !== 0) {
                this.selectedDate = this.parseSelectedDate(sd.currentValue);
                setTimeout(function () {
                    _this.onChangeCb(_this.getDateModel(_this.selectedDate));
                });
            }
            else {
                if (!sd.isFirstChange()) {
                    this.clearDate();
                }
            }
        }
        if (this.showSelector) {
            this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, false);
        }
    };
    MDBDatePickerComponent.prototype.removeBtnClicked = function () {
        this.clearDate();
        if (this.showSelector) {
            this.calendarToggle.emit(CalToggle.CloseByCalBtn);
        }
    };
    MDBDatePickerComponent.prototype.openBtnClicked = function () {
        this.showSelector = !this.showSelector;
        if (this.showSelector) {
            this.setVisibleMonth();
            this.calendarToggle.emit(CalToggle.Open);
        }
        else {
            this.calendarToggle.emit(CalToggle.CloseByCalBtn);
        }
    };
    MDBDatePickerComponent.prototype.setVisibleMonth = function () {
        var y = 0, m = 0;
        if (!this.utilService.isInitializedDate(this.selectedDate)) {
            if (this.selectedMonth.year === 0 && this.selectedMonth.monthNbr === 0) {
                var today = this.getToday();
                y = today.year;
                m = today.month;
            }
            else {
                y = this.selectedMonth.year;
                m = this.selectedMonth.monthNbr;
            }
        }
        else {
            y = this.selectedDate.year;
            m = this.selectedDate.month;
        }
        this.visibleMonth = { monthTxt: this.opts.monthLabels[m], monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    };
    MDBDatePickerComponent.prototype.monthList = function () {
        this.months = [];
        for (var i = 1; i <= 12; i++) {
            this.months.push({ index: i, short: this.opts.monthLabels[i], label: this.opts.monthLabelsFull[i] });
        }
    };
    MDBDatePickerComponent.prototype.yearsList = function () {
        this.years = [];
        var currentYear = this.visibleMonth.year;
        var firstYear = currentYear - 7 > 0 ? currentYear - 7 : 1;
        var lastYear = currentYear - 7 > 0 ? currentYear + 7 : currentYear + 7 + firstYear % 7;
        firstYear = firstYear < this.opts.minYear ? this.opts.minYear : firstYear;
        lastYear = lastYear > this.opts.maxYear ? this.opts.maxYear : lastYear;
        for (var i = firstYear; i <= lastYear; i++) {
            this.years.push(i);
        }
    };
    MDBDatePickerComponent.prototype.prevMonth = function () {
        var d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() - 1);
        var y = d.getFullYear();
        var m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    };
    MDBDatePickerComponent.prototype.nextMonth = function () {
        var d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() + 1);
        var y = d.getFullYear();
        var m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    };
    MDBDatePickerComponent.prototype.prevYear = function () {
        this.visibleMonth.year--;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
    };
    MDBDatePickerComponent.prototype.nextYear = function () {
        this.visibleMonth.year++;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
    };
    MDBDatePickerComponent.prototype.todayClicked = function () {
        var today = this.getToday();
        if (!this.utilService.isDisabledDay(today, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays)) {
            this.selectDate(today);
        }
        if (today.year !== this.visibleMonth.year || today.month !== this.visibleMonth.monthNbr) {
            this.visibleMonth = { monthTxt: this.opts.monthLabels[today.month], monthNbr: today.month, year: today.year };
            this.generateCalendar(today.month, today.year, true);
        }
    };
    MDBDatePickerComponent.prototype.cellClicked = function (cell) {
        if (cell.cmo === this.prevMonthId) {
            this.prevMonth();
        }
        else if (cell.cmo === this.currMonthId) {
            if (cell.dateObj.year === this.selectedDate.year &&
                cell.dateObj.month === this.selectedDate.month &&
                cell.dateObj.day === this.selectedDate.day) {
                this.clearDate();
            }
            else {
                this.selectDate(cell.dateObj);
            }
        }
        else if (cell.cmo === this.nextMonthId) {
            this.nextMonth();
        }
        this.resetMonthYearEdit();
    };
    MDBDatePickerComponent.prototype.cellKeyDown = function (event, cell) {
        if ((event.keyCode === KeyCode.enter || event.keyCode === KeyCode.space) && !cell.disabled) {
            event.preventDefault();
            this.cellClicked(cell);
        }
    };
    MDBDatePickerComponent.prototype.clearDate = function () {
        var date = { year: 0, month: 0, day: 0 };
        this.dateChanged.emit({ date: date, jsdate: null, formatted: '', epoc: 0 });
        this.onChangeCb('');
        this.onTouchedCb();
        this.updateDateValue(date, true);
    };
    MDBDatePickerComponent.prototype.selectDate = function (date) {
        this.tmp = date;
        var dateModel = this.getDateModel(date);
        this.dateChanged.emit(dateModel);
        this.onChangeCb(dateModel);
        this.onTouchedCb();
        this.updateDateValue(date, false);
        if (this.showSelector) {
            this.calendarToggle.emit(CalToggle.CloseByDateSel);
        }
    };
    MDBDatePickerComponent.prototype.updateDateValue = function (date, clear) {
        this.selectedDate = date;
        this.selectionDayTxt = clear ? '' : this.formatDate(date);
        this.inputFieldChanged.emit({ value: this.selectionDayTxt, dateFormat: this.opts.dateFormat, valid: !clear });
        this.invalidDate = false;
    };
    MDBDatePickerComponent.prototype.getDateModel = function (date) {
        return this.formatDate(date);
    };
    MDBDatePickerComponent.prototype.preZero = function (val) {
        return parseInt(val, 0) < 10 ? '0' + val : val;
    };
    MDBDatePickerComponent.prototype.formatDate = function (val) {
        var d = val.day;
        var dd = this.preZero(val.day);
        var ddd = this.opts.dayLabels[this.getWeekday(val)];
        var dddd = this.opts.dayLabelsFull[this.getWeekday(val)];
        var m = val.month;
        var mm = this.preZero(val.month);
        var mmm = this.getMonthShort(val.month);
        var mmmm = this.getMonthFull(val.month);
        var yy = val.year.toString().slice(2, 4);
        var yyyy = val.year;
        var toReplace = this.opts.dateFormat.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
        var formatted = '';
        toReplace.forEach(function (el) {
            switch (el) {
                case 'dddd':
                    el = el.replace(el, dddd);
                    break;
                case 'ddd':
                    el = el.replace(el, ddd);
                    break;
                case 'dd':
                    el = el.replace(el, dd);
                    break;
                case 'd':
                    el = el.replace(el, d);
                    break;
                case 'mmmm':
                    el = el.replace(el, mmmm);
                    break;
                case 'mmm':
                    el = el.replace(el, mmm);
                    break;
                case 'mm':
                    el = el.replace(el, mm);
                    break;
                case 'm':
                    el = el.replace(el, m);
                    break;
                case 'yyyy':
                    el = el.replace(el, yyyy);
                    break;
                case 'yy':
                    el = el.replace(el, yy);
                    break;
            }
            formatted += el;
        });
        return formatted;
    };
    MDBDatePickerComponent.prototype.monthText = function (m) {
        return this.opts.monthLabels[m];
    };
    MDBDatePickerComponent.prototype.weekText = function (m) {
        return this.opts.dayLabelsFull[m];
    };
    MDBDatePickerComponent.prototype.getMonthShort = function (m) {
        return this.opts.monthLabels[m];
    };
    MDBDatePickerComponent.prototype.getMonthFull = function (m) {
        return this.opts.monthLabelsFull[m];
    };
    MDBDatePickerComponent.prototype.monthStartIdx = function (y, m) {
        var d = new Date();
        d.setDate(1);
        d.setMonth(m - 1);
        d.setFullYear(y);
        var idx = d.getDay() + this.sundayIdx();
        return idx >= 7 ? idx - 7 : idx;
    };
    MDBDatePickerComponent.prototype.daysInMonth = function (m, y) {
        return new Date(y, m, 0).getDate();
    };
    MDBDatePickerComponent.prototype.daysInPrevMonth = function (m, y) {
        var d = this.getDate(y, m, 1);
        d.setMonth(d.getMonth() - 1);
        return this.daysInMonth(d.getMonth() + 1, d.getFullYear());
    };
    MDBDatePickerComponent.prototype.isCurrDay = function (d, m, y, cmo, today) {
        return d === today.day && m === today.month && y === today.year && cmo === this.currMonthId;
    };
    MDBDatePickerComponent.prototype.getToday = function () {
        var date = new Date();
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    };
    MDBDatePickerComponent.prototype.getTimeInMilliseconds = function (date) {
        return this.getDate(date.year, date.month, date.day).getTime();
    };
    MDBDatePickerComponent.prototype.getWeekday = function (date) {
        return this.weekDayOpts[this.utilService.getDayNumber(date)];
    };
    MDBDatePickerComponent.prototype.getDate = function (year, month, day) {
        return new Date(year, month - 1, day, 0, 0, 0, 0);
    };
    MDBDatePickerComponent.prototype.sundayIdx = function () {
        return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
    };
    MDBDatePickerComponent.prototype.generateCalendar = function (m, y, notifyChange) {
        this.dates.length = 0;
        var today = this.getToday();
        var monthStart = this.monthStartIdx(y, m);
        var dInThisM = this.daysInMonth(m, y);
        var dInPrevM = this.daysInPrevMonth(m, y);
        var dayNbr = 1;
        var cmo = this.prevMonthId;
        for (var i = 1; i < 7; i++) {
            var week = [];
            if (i === 1) {
                var pm = dInPrevM - monthStart + 1;
                for (var j = pm; j <= dInPrevM; j++) {
                    var date = { year: y, month: m - 1, day: j };
                    week.push({ dateObj: date, cmo: cmo, currDay: this.isCurrDay(j, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends) });
                }
                cmo = this.currMonthId;
                var daysLeft = 7 - week.length;
                for (var j = 0; j < daysLeft; j++) {
                    var date = { year: y, month: m, day: dayNbr };
                    week.push({ dateObj: date, cmo: cmo, currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends) });
                    dayNbr++;
                }
            }
            else {
                for (var j = 1; j < 8; j++) {
                    if (dayNbr > dInThisM) {
                        dayNbr = 1;
                        cmo = this.nextMonthId;
                    }
                    var date = { year: y, month: cmo === this.currMonthId ? m : m + 1, day: dayNbr };
                    week.push({ dateObj: date, cmo: cmo, currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends) });
                    dayNbr++;
                }
            }
            var weekNbr = this.opts.showWeekNumbers &&
                this.opts.firstDayOfWeek === 'mo' ?
                this.utilService.getWeekNumber(week[0].dateObj) : 0;
            this.dates.push({ week: week, weekNbr: weekNbr });
        }
        this.setHeaderBtnDisabledState(m, y);
        if (notifyChange) {
            this.calendarViewChanged.emit({
                year: y,
                month: m,
                first: {
                    number: 1,
                    weekday: this.getWeekday({
                        year: y,
                        month: m,
                        day: 1
                    })
                },
                last: {
                    number: dInThisM,
                    weekday: this.getWeekday({
                        year: y,
                        month: m,
                        day: dInThisM
                    })
                }
            });
        }
        this.monthList();
        this.yearsList();
    };
    MDBDatePickerComponent.prototype.parseSelectedDate = function (selDate) {
        var date = { day: 0, month: 0, year: 0 };
        if (typeof selDate === 'string') {
            var sd = selDate;
            date.day = this.utilService.parseDatePartNumber(this.opts.dateFormat, sd, 'dd');
            date.month = this.opts.dateFormat.indexOf('mmm') !== -1
                ? this.utilService.parseDatePartMonthName(this.opts.dateFormat, sd, 'mmm', this.opts.monthLabels)
                : this.utilService.parseDatePartNumber(this.opts.dateFormat, sd, 'mm');
            date.year = this.utilService.parseDatePartNumber(this.opts.dateFormat, sd, 'yyyy');
        }
        else if (typeof selDate === 'object') {
            date = selDate;
        }
        this.selectionDayTxt = this.formatDate(date);
        return date;
    };
    MDBDatePickerComponent.prototype.parseSelectedMonth = function (ms) {
        return this.utilService.parseDefaultMonth(ms);
    };
    MDBDatePickerComponent.prototype.setHeaderBtnDisabledState = function (m, y) {
        var dpm = false;
        var dpy = false;
        var dnm = false;
        var dny = false;
        if (this.opts.disableHeaderButtons) {
            dpm = this.utilService.isMonthDisabledByDisableUntil({
                year: m === 1 ? y - 1 : y,
                month: m === 1 ? 12 : m - 1,
                day: this.daysInMonth(m === 1 ? 12 : m - 1, m === 1 ? y - 1 : y)
            }, this.opts.disableUntil);
            dpy = this.utilService.isMonthDisabledByDisableUntil({
                year: y - 1,
                month: m,
                day: this.daysInMonth(m, y - 1)
            }, this.opts.disableUntil);
            dnm = this.utilService.isMonthDisabledByDisableSince({
                year: m === 12 ? y + 1 : y,
                month: m === 12 ? 1 : m + 1,
                day: 1
            }, this.opts.disableSince);
            dny = this.utilService.isMonthDisabledByDisableSince({ year: y + 1, month: m, day: 1 }, this.opts.disableSince);
        }
        this.prevMonthDisabled = m === 1 && y === this.opts.minYear || dpm;
        this.prevYearDisabled = y - 1 < this.opts.minYear || dpy;
        this.nextMonthDisabled = m === 12 && y === this.opts.maxYear || dnm;
        this.nextYearDisabled = y + 1 > this.opts.maxYear || dny;
    };
    MDBDatePickerComponent.prototype.checkActive = function () {
        if (this.placeholder.length > 0) {
            return true;
        }
        else {
            if (this.showSelector) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    return MDBDatePickerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MDBDatePickerComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MDBDatePickerComponent.prototype, "locale", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MDBDatePickerComponent.prototype, "defaultMonth", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MDBDatePickerComponent.prototype, "selDate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MDBDatePickerComponent.prototype, "label", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MDBDatePickerComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], MDBDatePickerComponent.prototype, "selector", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], MDBDatePickerComponent.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MDBDatePickerComponent.prototype, "dateChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MDBDatePickerComponent.prototype, "inputFieldChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MDBDatePickerComponent.prototype, "calendarViewChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MDBDatePickerComponent.prototype, "calendarToggle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MDBDatePickerComponent.prototype, "inputFocusBlur", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('divFocus'),
    __metadata("design:type", Object)
], MDBDatePickerComponent.prototype, "divFocus", void 0);
MDBDatePickerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdb-date-picker',
        exportAs: 'mdbdatepicker',
        templateUrl: './datapicker.component.html',
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_datepickerLocale_service__["a" /* LocaleService */], __WEBPACK_IMPORTED_MODULE_3__services_datepickerUtil_service__["a" /* UtilService */], MYDP_VALUE_ACCESSOR],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
        __WEBPACK_IMPORTED_MODULE_2__services_datepickerLocale_service__["a" /* LocaleService */],
        __WEBPACK_IMPORTED_MODULE_3__services_datepickerUtil_service__["a" /* UtilService */]])
], MDBDatePickerComponent);



/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputAutoFillDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["backspace"] = 8] = "backspace";
    KeyCode[KeyCode["delete"] = 46] = "delete";
})(KeyCode || (KeyCode = {}));
var InputAutoFillDirective = (function () {
    function InputAutoFillDirective(el, rndr) {
        this.el = el;
        this.rndr = rndr;
    }
    InputAutoFillDirective.prototype.onKeyUp = function (evt) {
        if (!this.opts.enabled || evt.keyCode === KeyCode.backspace || evt.keyCode === KeyCode.delete) {
            return;
        }
        var val = this.getInputValue();
        var ews = this.endsWith(val, this.opts.separator);
        var parts = val.split(this.opts.separator);
        var idx = parts.length - 1;
        if (val.indexOf(this.opts.separator + this.opts.separator) !== -1 || idx > 2) {
            return;
        }
        if (!ews &&
            (val.length === this.getPartLength(0) ||
                val.length === this.getPartLength(0) + this.getPartLength(1) + this.opts.separator.length)) {
            this.setInputValue(val + this.opts.separator);
        }
        else if (ews &&
            parts[idx - 1].length < this.getPartLength(idx - 1) &&
            this.isNumber(parts[idx - 1]) && (this.isDay(idx - 1) || this.isMonth(idx - 1))) {
            this.setInputValue(this.insertPos(val, val.length - 2, '0'));
        }
        else if (parts[idx].length < this.getPartLength(idx) &&
            this.isNumber(parts[idx]) &&
            (Number(parts[idx]) > 3 &&
                this.isDay(idx) ||
                Number(parts[idx]) > 1 &&
                    this.isMonth(idx))) {
            this.setInputValue(this.insertPos(val, val.length - 1, '0') + (idx < 2 ? this.opts.separator : ''));
        }
    };
    InputAutoFillDirective.prototype.endsWith = function (val, suffix) {
        return val.indexOf(suffix, val.length - suffix.length) !== -1;
    };
    InputAutoFillDirective.prototype.insertPos = function (str, idx, val) {
        return str.substr(0, idx) + val + str.substr(idx);
    };
    InputAutoFillDirective.prototype.getPartLength = function (idx) {
        return this.opts.formatParts[idx].length;
    };
    InputAutoFillDirective.prototype.isNumber = function (val) {
        return val.match(/[1-9]/) !== null;
    };
    InputAutoFillDirective.prototype.isDay = function (idx) {
        return this.opts.formatParts[idx].indexOf('d') !== -1;
    };
    InputAutoFillDirective.prototype.isMonth = function (idx) {
        return this.opts.formatParts[idx].indexOf('m') !== -1 && this.opts.formatParts[idx].length === 2;
    };
    InputAutoFillDirective.prototype.getInputValue = function () {
        return this.el.nativeElement.value;
    };
    InputAutoFillDirective.prototype.setInputValue = function (val) {
        this.rndr.setElementProperty(this.el.nativeElement, 'value', val);
    };
    return InputAutoFillDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputAutoFillDirective.prototype, "opts", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], InputAutoFillDirective.prototype, "onKeyUp", null);
InputAutoFillDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdbInputAutoFill]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], InputAutoFillDirective);



/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FocusDirective = (function () {
    function FocusDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    FocusDirective.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
    };
    return FocusDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FocusDirective.prototype, "value", void 0);
FocusDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdbDpFocus]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], FocusDirective);



/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LocaleService = (function () {
    function LocaleService() {
        this.locales = {
            'en': {
                dayLabelsFull: {
                    su: 'Sunday',
                    mo: 'Monday',
                    tu: 'Tuesday',
                    we: 'Wednesday',
                    th: 'Thursday',
                    fr: 'Friday',
                    sa: 'Saturday'
                },
                dayLabels: {
                    su: 'Sun',
                    mo: 'Mon',
                    tu: 'Tue',
                    we: 'Wed',
                    th: 'Thu',
                    fr: 'Fri',
                    sa: 'Sat'
                },
                monthLabelsFull: {
                    1: 'January',
                    2: 'February',
                    3: 'March',
                    4: 'April',
                    5: 'May',
                    6: 'June',
                    7: 'July',
                    8: 'August',
                    9: 'September',
                    10: 'October',
                    11: 'November',
                    12: 'December'
                },
                monthLabels: {
                    1: 'Jan',
                    2: 'Feb',
                    3: 'Mar',
                    4: 'Apr',
                    5: 'May',
                    6: 'Jun',
                    7: 'Jul',
                    8: 'Aug',
                    9: 'Sep',
                    10: 'Oct',
                    11: 'Nov',
                    12: 'Dec'
                },
                dateFormat: 'yyyy-mm-dd',
                todayBtnTxt: 'Today',
                clearBtnTxt: 'Clear',
                closeBtnTxt: 'Close',
                firstDayOfWeek: 'mo',
                sunHighlight: true,
            }
        };
    }
    LocaleService.prototype.getLocaleOptions = function (locale) {
        if (locale && this.locales.hasOwnProperty(locale)) {
            return this.locales[locale];
        }
        return this.locales['en'];
    };
    return LocaleService;
}());
LocaleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], LocaleService);



/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UtilService = (function () {
    function UtilService() {
    }
    UtilService.prototype.isDateValid = function (dateStr, dateFormat, minYear, maxYear, disableUntil, disableSince, disableWeekends, disableDays, disableDateRanges, monthLabels, enableDays) {
        var returnDate = { day: 0, month: 0, year: 0 };
        var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var isMonthStr = this.getDatePartIndex(dateFormat, 'mmm') !== -1;
        if (dateStr.length !== dateFormat.length) {
            return returnDate;
        }
        var separator = this.getDateFormatSeparator(dateFormat);
        var parts = dateStr.split(separator);
        if (parts.length !== 3) {
            return returnDate;
        }
        var day = this.parseDatePartNumber(dateFormat, dateStr, 'dd');
        var month = isMonthStr ?
            this.parseDatePartMonthName(dateFormat, dateStr, 'mmm', monthLabels) :
            this.parseDatePartNumber(dateFormat, dateStr, 'mm');
        var year = this.parseDatePartNumber(dateFormat, dateStr, 'yyyy');
        if (day !== -1 && month !== -1 && year !== -1) {
            if (year < minYear || year > maxYear || month < 1 || month > 12) {
                return returnDate;
            }
            var date = { year: year, month: month, day: day };
            if (this.isDisabledDay(date, disableUntil, disableSince, disableWeekends, disableDays, disableDateRanges, enableDays)) {
                return returnDate;
            }
            if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
                daysInMonth[1] = 29;
            }
            if (day < 1 || day > daysInMonth[month - 1]) {
                return returnDate;
            }
            return date;
        }
        return returnDate;
    };
    UtilService.prototype.getDateFormatSeparator = function (dateFormat) {
        return dateFormat.replace(/[dmy]/g, '')[0];
    };
    UtilService.prototype.isMonthLabelValid = function (monthLabel, monthLabels) {
        for (var key = 1; key <= 12; key++) {
            if (monthLabel.toLowerCase() === monthLabels[key].toLowerCase()) {
                return key;
            }
        }
        return -1;
    };
    UtilService.prototype.isYearLabelValid = function (yearLabel, minYear, maxYear) {
        if (yearLabel >= minYear && yearLabel <= maxYear) {
            return yearLabel;
        }
        return -1;
    };
    UtilService.prototype.parseDatePartNumber = function (dateFormat, dateString, datePart) {
        var pos = this.getDatePartIndex(dateFormat, datePart);
        if (pos !== -1) {
            var value = dateString.substring(pos, pos + datePart.length);
            if (!/^\d+$/.test(value)) {
                return -1;
            }
            return parseInt(value, 0);
        }
        return -1;
    };
    UtilService.prototype.parseDatePartMonthName = function (dateFormat, dateString, datePart, monthLabels) {
        var pos = this.getDatePartIndex(dateFormat, datePart);
        if (pos !== -1) {
            return this.isMonthLabelValid(dateString.substring(pos, pos + datePart.length), monthLabels);
        }
        return -1;
    };
    UtilService.prototype.getDatePartIndex = function (dateFormat, datePart) {
        return dateFormat.indexOf(datePart);
    };
    UtilService.prototype.parseDefaultMonth = function (monthString) {
        var month = { monthTxt: '', monthNbr: 0, year: 0 };
        if (monthString !== '') {
            var split = monthString.split(monthString.match(/[^0-9]/)[0]);
            month.monthNbr = split[0].length === 2 ? parseInt(split[0], 0) : parseInt(split[1], 0);
            month.year = split[0].length === 2 ? parseInt(split[1], 0) : parseInt(split[0], 0);
        }
        return month;
    };
    UtilService.prototype.isDisabledDay = function (date, disableUntil, disableSince, disableWeekends, disableDays, disableDateRanges, enableDays) {
        for (var _i = 0, enableDays_1 = enableDays; _i < enableDays_1.length; _i++) {
            var e = enableDays_1[_i];
            if (e.year === date.year && e.month === date.month && e.day === date.day) {
                return false;
            }
        }
        var dateMs = this.getTimeInMilliseconds(date);
        if (this.isInitializedDate(disableUntil) && dateMs <= this.getTimeInMilliseconds(disableUntil)) {
            return true;
        }
        if (this.isInitializedDate(disableSince) && dateMs >= this.getTimeInMilliseconds(disableSince)) {
            return true;
        }
        if (disableWeekends) {
            var dn = this.getDayNumber(date);
            if (dn === 0 || dn === 6) {
                return true;
            }
        }
        for (var _a = 0, disableDays_1 = disableDays; _a < disableDays_1.length; _a++) {
            var d = disableDays_1[_a];
            if (d.year === date.year && d.month === date.month && d.day === date.day) {
                return true;
            }
        }
        for (var _b = 0, disableDateRanges_1 = disableDateRanges; _b < disableDateRanges_1.length; _b++) {
            var d = disableDateRanges_1[_b];
            if (this.isInitializedDate(d.begin) &&
                this.isInitializedDate(d.end) &&
                dateMs >= this.getTimeInMilliseconds(d.begin) &&
                dateMs <= this.getTimeInMilliseconds(d.end)) {
                return true;
            }
        }
        return false;
    };
    UtilService.prototype.isMarkedDate = function (date, markedDates, markWeekends) {
        for (var _i = 0, markedDates_1 = markedDates; _i < markedDates_1.length; _i++) {
            var md = markedDates_1[_i];
            for (var _a = 0, _b = md.dates; _a < _b.length; _a++) {
                var d = _b[_a];
                if (d.year === date.year && d.month === date.month && d.day === date.day) {
                    return { marked: true, color: md.color };
                }
            }
        }
        if (markWeekends && markWeekends.marked) {
            var dayNbr = this.getDayNumber(date);
            if (dayNbr === 0 || dayNbr === 6) {
                return { marked: true, color: markWeekends.color };
            }
        }
        return { marked: false, color: '' };
    };
    UtilService.prototype.getWeekNumber = function (date) {
        var d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        d.setDate(d.getDate() + (d.getDay() === 0 ? -3 : 4 - d.getDay()));
        return Math.round(((d.getTime() - new Date(d.getFullYear(), 0, 4).getTime()) / 86400000) / 7) + 1;
    };
    UtilService.prototype.isMonthDisabledByDisableUntil = function (date, disableUntil) {
        return this.isInitializedDate(disableUntil) && this.getTimeInMilliseconds(date) <= this.getTimeInMilliseconds(disableUntil);
    };
    UtilService.prototype.isMonthDisabledByDisableSince = function (date, disableSince) {
        return this.isInitializedDate(disableSince) && this.getTimeInMilliseconds(date) >= this.getTimeInMilliseconds(disableSince);
    };
    UtilService.prototype.isInitializedDate = function (date) {
        return date.year !== 0 && date.month !== 0 && date.day !== 0;
    };
    UtilService.prototype.getTimeInMilliseconds = function (date) {
        return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).getTime();
    };
    UtilService.prototype.getDayNumber = function (date) {
        var d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        return d.getDay();
    };
    return UtilService;
}());
UtilService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], UtilService);



/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimpleChartComponent = (function () {
    function SimpleChartComponent() {
        this.options = {
            barColor: null,
            trackColor: '#f9f9f9',
            scaleColor: '#dfe0e0',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 3,
            size: 110,
            rotate: 0,
            animate: {
                duration: 1000,
                enabled: true
            }
        };
    }
    SimpleChartComponent.prototype.ngOnInit = function () {
        this.options.barColor = '#' + this.barColor;
    };
    return SimpleChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('percent'),
    __metadata("design:type", Object)
], SimpleChartComponent.prototype, "percent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('barColor'),
    __metadata("design:type", String)
], SimpleChartComponent.prototype, "barColor", void 0);
SimpleChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdb-simple-chart',
        templateUrl: './chart-simple.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [])
], SimpleChartComponent);



/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EasyPieChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EasyPieChartComponent = (function () {
    function EasyPieChartComponent(el) {
        this.element = el;
        var options = {
            barColor: '#ef1e25',
            trackColor: '#f9f9f9',
            scaleColor: '#dfe0e0',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 3,
            size: 110,
            rotate: 0,
            animate: {
                duration: 1000,
                enabled: true
            }
        };
        this.options = Object.assign(options, this.options);
    }
    EasyPieChartComponent.prototype.ngOnInit = function () {
        this.element.nativeElement.innerHTML = '';
        this.pieChart = new EasyPieChart(this.element.nativeElement, this.options);
        this.pieChart.update(this.percent);
    };
    EasyPieChartComponent.prototype.ngOnChanges = function (changes) {
        if (!changes['percent'].isFirstChange()) {
            this.pieChart.update(this.percent);
        }
    };
    return EasyPieChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('percent'),
    __metadata("design:type", Object)
], EasyPieChartComponent.prototype, "percent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('options'),
    __metadata("design:type", Object)
], EasyPieChartComponent.prototype, "options", void 0);
EasyPieChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdb-easy-pie-chart',
        template: '<div>Loading</div>'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], EasyPieChartComponent);



/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_mdb_uploader_class__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDBFileDropDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MDBFileDropDirective = (function () {
    function MDBFileDropDirective(platform_id, elementRef) {
        this.platform_id = platform_id;
        this.elementRef = elementRef;
        this.isServer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_common__["isPlatformServer"])(this.platform_id);
        this.stopEvent = function (e) {
            e.stopPropagation();
            e.preventDefault();
        };
        this.upload = new __WEBPACK_IMPORTED_MODULE_2__classes_mdb_uploader_class__["a" /* MDBUploaderService */]();
        this.uploadOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MDBFileDropDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isServer) {
            return;
        }
        this.el = this.elementRef.nativeElement;
        this.upload.serviceEvents.subscribe(function (event) {
            _this.uploadOutput.emit(event);
        });
        if (this.uploadInput instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) {
            this.upload.initInputEvents(this.uploadInput);
        }
        this.el.addEventListener('drop', this.stopEvent, false);
        this.el.addEventListener('dragenter', this.stopEvent, false);
        this.el.addEventListener('dragover', this.stopEvent, false);
        this.el.addEventListener('dragover', this.stopEvent, false);
    };
    MDBFileDropDirective.prototype.ngOnDestroy = function () {
        if (this.isServer) {
            return;
        }
        this.uploadInput.unsubscribe();
    };
    MDBFileDropDirective.prototype.onDrop = function (e) {
        e.stopPropagation();
        e.preventDefault();
        var event = { type: 'drop' };
        this.uploadOutput.emit(event);
        this.upload.handleFiles(e.dataTransfer.files);
    };
    MDBFileDropDirective.prototype.onDragOver = function (e) {
        if (!e) {
            return;
        }
        var event = { type: 'dragOver' };
        this.uploadOutput.emit(event);
    };
    MDBFileDropDirective.prototype.onDragLeave = function (e) {
        if (!e) {
            return;
        }
        var event = { type: 'dragOut' };
        this.uploadOutput.emit(event);
    };
    return MDBFileDropDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MDBFileDropDirective.prototype, "uploadInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MDBFileDropDirective.prototype, "uploadOutput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MDBFileDropDirective.prototype, "onDrop", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], MDBFileDropDirective.prototype, "onDragOver", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], MDBFileDropDirective.prototype, "onDragLeave", null);
MDBFileDropDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdbFileDrop]'
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"])),
    __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], MDBFileDropDirective);



/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_mdb_uploader_class__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDBFileSelectDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MDBFileSelectDirective = (function () {
    function MDBFileSelectDirective(platform_id, elementRef) {
        var _this = this;
        this.platform_id = platform_id;
        this.elementRef = elementRef;
        this.isServer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_common__["isPlatformServer"])(this.platform_id);
        this.fileListener = function () {
            _this.upload.handleFiles(_this.el.files);
        };
        this.upload = new __WEBPACK_IMPORTED_MODULE_2__classes_mdb_uploader_class__["a" /* MDBUploaderService */]();
        this.uploadOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MDBFileSelectDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isServer) {
            return;
        }
        this.el = this.elementRef.nativeElement;
        this.el.addEventListener('change', this.fileListener, false);
        this.upload.serviceEvents.subscribe(function (event) {
            _this.uploadOutput.emit(event);
        });
        if (this.uploadInput instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) {
            this.upload.initInputEvents(this.uploadInput);
        }
    };
    MDBFileSelectDirective.prototype.ngOnDestroy = function () {
        if (this.isServer) {
            return;
        }
        this.el.removeEventListener('change', this.fileListener, false);
        this.uploadInput.unsubscribe();
    };
    return MDBFileSelectDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MDBFileSelectDirective.prototype, "uploadInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MDBFileSelectDirective.prototype, "uploadOutput", void 0);
MDBFileSelectDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdbFileSelect]'
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"])),
    __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], MDBFileSelectDirective);



/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharCounterDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CharCounterDirective = (function () {
    function CharCounterDirective(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.length = 20;
    }
    CharCounterDirective.prototype.ngOnInit = function () {
        this.textContainer = this._renderer.createElement(this._elRef.nativeElement.parentElement, 'p');
        this._renderer.setElementClass(this.textContainer, 'chars', true);
        this.textContainer.innerHTML = '0/' + this.length;
        this._renderer.setElementStyle(this.textContainer, 'display', 'none');
    };
    CharCounterDirective.prototype.onKeyUp = function () {
        this.textContainer.innerHTML = this._elRef.nativeElement.value.length + '/' + this.length;
        if (this._elRef.nativeElement.value.length > this.length) {
            this._renderer.setElementClass(this._elRef.nativeElement, 'invalid', true);
        }
        else {
            this._renderer.setElementClass(this._elRef.nativeElement, 'invalid', false);
        }
    };
    CharCounterDirective.prototype.hide = function () {
        this._renderer.setElementStyle(this.textContainer, 'display', 'none');
    };
    CharCounterDirective.prototype.show = function () {
        this._renderer.setElementStyle(this.textContainer, 'display', 'block');
    };
    return CharCounterDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CharCounterDirective.prototype, "length", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CharCounterDirective.prototype, "onKeyUp", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('blur', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CharCounterDirective.prototype, "hide", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('focus', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CharCounterDirective.prototype, "show", null);
CharCounterDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdbCharCounter]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], CharCounterDirective);



/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pro_animations_animations_component__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageModalComponent = (function () {
    function ImageModalComponent(element) {
        this.element = element;
        this.opened = false;
        this.loading = false;
        this.showRepeat = false;
        this.isMobile = false;
        this.zoomed = 'inactive';
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this.smooth = true;
        this.cancelEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._element = this.element.nativeElement;
        try {
            document.createEvent('TouchEvent');
            this.isMobile = true;
        }
        catch (err) {
            this.isMobile = false;
            return;
        }
    }
    ImageModalComponent.prototype.toggleZoomed = function () {
        this.zoomed = (this.zoomed === 'inactive') ? 'active' : 'inactive';
        this.zoom = !this.zoom;
    };
    ImageModalComponent.prototype.toggleRestart = function () {
        this.zoomed = (this.zoomed === 'inactive') ? 'active' : 'inactive';
    };
    ImageModalComponent.prototype.ngOnInit = function () {
        this.loading = true;
        if (this.imagePointer >= 0) {
            this.showRepeat = false;
            this.openGallery(this.imagePointer);
        }
        else {
            this.showRepeat = true;
        }
    };
    ImageModalComponent.prototype.closeGallery = function () {
        this.smooth = false;
        this.zoom = false;
        if (screenfull.enabled) {
            screenfull.exit();
        }
        this.opened = false;
        this.cancelEvent.emit(null);
    };
    ImageModalComponent.prototype.prevImage = function () {
        this.loading = true;
        this.currentImageIndex--;
        if (this.currentImageIndex < 0) {
            this.currentImageIndex = this.modalImages.length - 1;
        }
        this.openGallery(this.currentImageIndex);
    };
    ImageModalComponent.prototype.nextImage = function () {
        this.loading = true;
        this.currentImageIndex++;
        if (this.modalImages.length === this.currentImageIndex) {
            this.currentImageIndex = 0;
        }
        this.openGallery(this.currentImageIndex);
    };
    ImageModalComponent.prototype.openGallery = function (index) {
        if (!index) {
            this.currentImageIndex = 1;
        }
        this.currentImageIndex = index;
        this.opened = true;
        for (var i = 0; i < this.modalImages.length; i++) {
            if (i === this.currentImageIndex) {
                this.imgSrc = this.modalImages[i].img;
                this.loading = false;
                break;
            }
        }
    };
    ImageModalComponent.prototype.fullScreen = function () {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    };
    Object.defineProperty(ImageModalComponent.prototype, "is_iPhone_or_iPod", {
        get: function () {
            if (navigator && navigator.userAgent && navigator.userAgent != null) {
                var strUserAgent = navigator.userAgent.toLowerCase();
                var arrMatches = strUserAgent.match(/ipad/);
                if (arrMatches != null) {
                    return true;
                }
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ImageModalComponent.prototype.keyboardControl = function (event) {
        if (event.keyCode === 39) {
            this.nextImage();
        }
        if (event.keyCode === 37) {
            this.prevImage();
        }
    };
    ImageModalComponent.prototype.swipe = function (event, action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.nextImage();
        }
        if (action === this.SWIPE_ACTION.LEFT) {
            this.prevImage();
        }
    };
    return ImageModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('modalImages'),
    __metadata("design:type", Object)
], ImageModalComponent.prototype, "modalImages", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('imagePointer'),
    __metadata("design:type", Number)
], ImageModalComponent.prototype, "imagePointer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fullscreen'),
    __metadata("design:type", Boolean)
], ImageModalComponent.prototype, "fullscreen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('zoom'),
    __metadata("design:type", Boolean)
], ImageModalComponent.prototype, "zoom", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('smooth'),
    __metadata("design:type", Object)
], ImageModalComponent.prototype, "smooth", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
    __metadata("design:type", String)
], ImageModalComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('cancelEvent'),
    __metadata("design:type", Object)
], ImageModalComponent.prototype, "cancelEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], ImageModalComponent.prototype, "keyboardControl", null);
ImageModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdb-image-modal',
        animations: [__WEBPACK_IMPORTED_MODULE_1__pro_animations_animations_component__["a" /* zoomState */], __WEBPACK_IMPORTED_MODULE_1__pro_animations_animations_component__["b" /* restartState */]],
        templateUrl: 'image-popup.html',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], ImageModalComponent);



/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Diacritics; });
var Diacritics = (function () {
    function Diacritics() {
    }
    Diacritics.strip = function (text) {
        var _this = this;
        var match = function (a) {
            return _this.DIACRITICS[a] || a;
        };
        return text.replace(/[^\u0000-\u007E]/g, match);
    };
    return Diacritics;
}());

Diacritics.DIACRITICS = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
};


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Option; });
var Option = (function () {
    function Option(option) {
        this.wrappedOption = option;
        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.shown = true;
        this.group = false;
    }
    Object.defineProperty(Option.prototype, "value", {
        get: function () {
            return this.wrappedOption.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "label", {
        get: function () {
            return this.wrappedOption.label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "icon", {
        get: function () {
            if (this.wrappedOption.icon !== '' && this.wrappedOption.icon !== undefined) {
                return this.wrappedOption.icon;
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Option;
}());



/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_directive__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var BarComponent = (function () {
    function BarComponent(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    Object.defineProperty(BarComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (!v && v !== 0) {
                return;
            }
            this._value = v;
            this.recalculatePercentage();
        },
        enumerable: true,
        configurable: true
    });
    BarComponent.prototype.ngOnInit = function () {
        this.progress.addBar(this);
    };
    BarComponent.prototype.ngOnDestroy = function () {
        this.progress.removeBar(this);
    };
    BarComponent.prototype.recalculatePercentage = function () {
        this.percent = +(100 * this.value / this.progress.max).toFixed(2);
        var totalPercentage = this.progress.bars.reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    };
    return BarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BarComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], BarComponent.prototype, "value", null);
BarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdb-bar',
        templateUrl: './bar.component.html'
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__progress_directive__["a" /* ProgressDirective */]])
], BarComponent);



/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
        this.color = 'primary';
        this._value = 0;
        this._bufferValue = 0;
        this.mode = 'determinate';
    }
    Object.defineProperty(ProgressBarComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) { this._value = clamp(v || 0); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "bufferValue", {
        get: function () { return this._bufferValue; },
        set: function (v) { this._bufferValue = clamp(v || 0); },
        enumerable: true,
        configurable: true
    });
    ProgressBarComponent.prototype._primaryTransform = function () {
        var scale = this.value / 100;
        return { transform: "scaleX(" + scale + ")" };
    };
    ProgressBarComponent.prototype._bufferTransform = function () {
        if (this.mode === 'buffer') {
            var scale = this.bufferValue / 100;
            return { transform: "scaleX(" + scale + ")" };
        }
    };
    return ProgressBarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ProgressBarComponent.prototype, "color", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('attr.aria-valuenow'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Number])
], ProgressBarComponent.prototype, "value", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Number])
], ProgressBarComponent.prototype, "bufferValue", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('attr.mode'),
    __metadata("design:type", String)
], ProgressBarComponent.prototype, "mode", void 0);
ProgressBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdb-progress-bar, mat-progress-bar',
        templateUrl: './progressbar.component.html',
        styleUrls: ['./progressbar.component.scss'],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
    })
], ProgressBarComponent);

function clamp(v, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return Math.max(min, Math.min(max, v));
}


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MdProgressSpinnerCssMatStylerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdProgressSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdSpinnerComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DEGREE_IN_RADIANS = Math.PI / 180;
var DURATION_INDETERMINATE = 667;
var DURATION_DETERMINATE = 225;
var startIndeterminate = 3;
var endIndeterminate = 80;
var MAX_ANGLE = 359.99 / 100;
var MdProgressSpinnerCssMatStylerDirective = (function () {
    function MdProgressSpinnerCssMatStylerDirective() {
    }
    return MdProgressSpinnerCssMatStylerDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.mat-progress-spinner'),
    __metadata("design:type", Object)
], MdProgressSpinnerCssMatStylerDirective.prototype, "true", void 0);
MdProgressSpinnerCssMatStylerDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdbSpinners], mat-progress-spinner'
    })
], MdProgressSpinnerCssMatStylerDirective);

var MdProgressSpinnerComponent = (function () {
    function MdProgressSpinnerComponent(_ngZone, _elementRef, _renderer) {
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._lastAnimationId = 0;
        this._mode = 'determinate';
        this._color = 'primary';
    }
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "_ariaValueMin", {
        get: function () {
            return this.mode === 'determinate' ? 0 : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "_ariaValueMax", {
        get: function () {
            return this.mode === 'determinate' ? 100 : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "interdeterminateInterval", {
        get: function () {
            return this._interdeterminateInterval;
        },
        set: function (interval) {
            clearInterval(this._interdeterminateInterval);
            this._interdeterminateInterval = interval;
        },
        enumerable: true,
        configurable: true
    });
    MdProgressSpinnerComponent.prototype.ngOnDestroy = function () {
        this._cleanupIndeterminateAnimation();
    };
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "color", {
        get: function () { return this._color; },
        set: function (value) {
            this._updateColor(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "value", {
        get: function () {
            if (this.mode === 'determinate') {
                return this._value;
            }
        },
        set: function (v) {
            if (v != null && this.mode === 'determinate') {
                var newValue = clamp(v);
                this._animateCircle(this.value || 0, newValue);
                this._value = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (mode) {
            if (mode !== this._mode) {
                if (mode === 'indeterminate') {
                    this._startIndeterminateAnimation();
                }
                else {
                    this._cleanupIndeterminateAnimation();
                    this._animateCircle(0, this._value);
                }
                this._mode = mode;
            }
        },
        enumerable: true,
        configurable: true
    });
    MdProgressSpinnerComponent.prototype._animateCircle = function (animateFrom, animateTo, ease, duration, rotation) {
        var _this = this;
        if (ease === void 0) { ease = linearEase; }
        if (duration === void 0) { duration = DURATION_DETERMINATE; }
        if (rotation === void 0) { rotation = 0; }
        var id = ++this._lastAnimationId;
        var startTime = Date.now();
        var changeInValue = animateTo - animateFrom;
        if (animateTo === animateFrom) {
            this._renderArc(animateTo, rotation);
        }
        else {
            var animation_1 = function () {
                var elapsedTime = Math.max(0, Math.min(Date.now() - startTime, duration));
                _this._renderArc(ease(elapsedTime, animateFrom, changeInValue, duration), rotation);
                if (id === _this._lastAnimationId && elapsedTime < duration) {
                    requestAnimationFrame(animation_1);
                }
            };
            this._ngZone.runOutsideAngular(animation_1);
        }
    };
    MdProgressSpinnerComponent.prototype._startIndeterminateAnimation = function () {
        var _this = this;
        var rotationStartPoint = 0;
        var start = startIndeterminate;
        var end = endIndeterminate;
        var duration = DURATION_INDETERMINATE;
        var animate = function () {
            _this._animateCircle(start, end, materialEase, duration, rotationStartPoint);
            rotationStartPoint = (rotationStartPoint + end) % 100;
            var temp = start;
            start = -end;
            end = -temp;
        };
        if (!this.interdeterminateInterval) {
            this._ngZone.runOutsideAngular(function () {
                _this.interdeterminateInterval = setInterval(animate, duration + 50, 0, false);
                animate();
            });
        }
    };
    MdProgressSpinnerComponent.prototype._cleanupIndeterminateAnimation = function () {
        this.interdeterminateInterval = null;
    };
    MdProgressSpinnerComponent.prototype._renderArc = function (currentValue, rotation) {
        if (rotation === void 0) { rotation = 0; }
        var path = this._path = this._path || this._elementRef.nativeElement.querySelector('path');
        if (path) {
            path.setAttribute('d', getSvgArc(currentValue, rotation));
        }
    };
    MdProgressSpinnerComponent.prototype._updateColor = function (newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    };
    MdProgressSpinnerComponent.prototype._setElementColor = function (color, isAdd) {
        if (color != null && color !== '') {
            this._renderer.setElementClass(this._elementRef.nativeElement, "mat-" + color, isAdd);
        }
    };
    return MdProgressSpinnerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], MdProgressSpinnerComponent.prototype, "color", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('attr.aria-valuenow'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Number])
], MdProgressSpinnerComponent.prototype, "value", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('attr.mode'),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [String])
], MdProgressSpinnerComponent.prototype, "mode", null);
MdProgressSpinnerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdb-Spinners, mat-progress-spinner',
        templateUrl: 'progress-spinner.component.html',
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], MdProgressSpinnerComponent);

var MdSpinnerComponent = (function (_super) {
    __extends(MdSpinnerComponent, _super);
    function MdSpinnerComponent(elementRef, ngZone, renderer) {
        var _this = _super.call(this, ngZone, elementRef, renderer) || this;
        _this.mode = 'indeterminate';
        return _this;
    }
    MdSpinnerComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    return MdSpinnerComponent;
}(MdProgressSpinnerComponent));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('role'),
    __metadata("design:type", Object)
], MdSpinnerComponent.prototype, "progressbar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('mode'),
    __metadata("design:type", Object)
], MdSpinnerComponent.prototype, "indeterminate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.mat-spinner'),
    __metadata("design:type", Object)
], MdSpinnerComponent.prototype, "true", void 0);
MdSpinnerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdb-spinners, mat-spinner, mdb-progress-spinner',
        templateUrl: 'progress-spinner.component.html',
        styleUrls: ['progress-spinner.component.scss'],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], MdSpinnerComponent);

function clamp(v) {
    return Math.max(0, Math.min(100, v));
}
function polarToCartesian(radius, pathRadius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
    return (radius + (pathRadius * Math.cos(angleInRadians))) +
        ',' + (radius + (pathRadius * Math.sin(angleInRadians)));
}
function linearEase(currentTime, startValue, changeInValue, duration) {
    return changeInValue * currentTime / duration + startValue;
}
function materialEase(currentTime, startValue, changeInValue, duration) {
    var time = currentTime / duration;
    var timeCubed = Math.pow(time, 3);
    var timeQuad = Math.pow(time, 4);
    var timeQuint = Math.pow(time, 5);
    return startValue + changeInValue * ((6 * timeQuint) + (-15 * timeQuad) + (10 * timeCubed));
}
function getSvgArc(currentValue, rotation) {
    var startPoint = rotation || 0;
    var radius = 50;
    var pathRadius = 40;
    var startAngle = startPoint * MAX_ANGLE;
    var endAngle = currentValue * MAX_ANGLE;
    var start = polarToCartesian(radius, pathRadius, startAngle);
    var end = polarToCartesian(radius, pathRadius, endAngle + startAngle);
    var arcSweep = endAngle < 0 ? 0 : 1;
    var largeArcFlag;
    if (endAngle < 0) {
        largeArcFlag = endAngle >= -180 ? 0 : 1;
    }
    else {
        largeArcFlag = endAngle <= 180 ? 0 : 1;
    }
    return "M" + start + "A" + pathRadius + "," + pathRadius + " 0 " + largeArcFlag + "," + arcSweep + " " + end;
}


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressSpinnerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressSpinnerComponent = (function () {
    function ProgressSpinnerComponent(el) {
        this.addClass = 'spinner-blue-only';
        this.spinnerType = '';
        this.spinnerColor = 'rainbow';
        this.el = el;
    }
    ProgressSpinnerComponent.prototype.ngAfterViewInit = function () {
        var hostElem = this.el.nativeElement;
        var colorClass = this.spinnerColor;
        this.addClass = 'spinner-rainbow';
        switch (colorClass) {
            case 'green':
                this.addClass = 'spinner-green-only';
                break;
            case 'blue':
                this.addClass = 'spinner-blue-only';
                break;
            case 'yellow':
                this.addClass = 'spinner-yellow-only';
                break;
            case 'red':
                this.addClass = 'spinner-red-only';
                break;
            case 'rainbow':
                this.addClass = 'spinner-rainbow spinner-blue-only mat-progress-spinner';
                this.spinerRun();
                break;
        }
        hostElem.children[0].children[0].className += ' ' + this.addClass;
    };
    ProgressSpinnerComponent.prototype.spinerRun = function () {
        var _this = this;
        var counter = 0;
        var hostElem = this.el.nativeElement;
        setInterval(function () {
            switch (counter) {
                case 0:
                    _this.addClass = 'spinner-red-only mat-progress-spinner ';
                    break;
                case 1:
                    _this.addClass = 'spinner-yellow-only mat-progress-spinner';
                    break;
                case 2:
                    _this.addClass = 'spinner-blue-only mat-progress-spinner';
                    break;
                case 3:
                    _this.addClass = 'spinner-green-only mat-progress-spinner';
                    break;
            }
            hostElem.children[0].children[0].className = ' ' + _this.addClass;
            if (counter < 3) {
                counter++;
            }
            else {
                counter = 0;
            }
        }, 1333);
    };
    return ProgressSpinnerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProgressSpinnerComponent.prototype, "spinnerType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProgressSpinnerComponent.prototype, "spinnerColor", void 0);
ProgressSpinnerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdb-spinner',
        templateUrl: 'progress-spinner.component.html'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], ProgressSpinnerComponent);



/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progressbar_config_component__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressbarComponent = (function () {
    function ProgressbarComponent(config) {
        Object.assign(this, config);
    }
    return ProgressbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ProgressbarComponent.prototype, "animate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ProgressbarComponent.prototype, "max", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ProgressbarComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ProgressbarComponent.prototype, "value", void 0);
ProgressbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdb-progressbar',
        templateUrl: './progressbar.component.html'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__progressbar_config_component__["a" /* ProgressbarConfigComponent */]])
], ProgressbarComponent);



/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bar_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_directive__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progressbar_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progressbar_config_component__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressbarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProgressbarModule = ProgressbarModule_1 = (function () {
    function ProgressbarModule() {
    }
    ProgressbarModule.forRoot = function () {
        return { ngModule: ProgressbarModule_1, providers: [__WEBPACK_IMPORTED_MODULE_5__progressbar_config_component__["a" /* ProgressbarConfigComponent */]] };
    };
    return ProgressbarModule;
}());
ProgressbarModule = ProgressbarModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__progress_directive__["a" /* ProgressDirective */], __WEBPACK_IMPORTED_MODULE_2__bar_component__["a" /* BarComponent */], __WEBPACK_IMPORTED_MODULE_4__progressbar_component__["a" /* ProgressbarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__progress_directive__["a" /* ProgressDirective */], __WEBPACK_IMPORTED_MODULE_2__bar_component__["a" /* BarComponent */], __WEBPACK_IMPORTED_MODULE_4__progressbar_component__["a" /* ProgressbarComponent */]]
    })
], ProgressbarModule);

var ProgressbarModule_1;


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavComponent = (function () {
    function SidenavComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.fixed = true;
    }
    SidenavComponent.prototype.ngAfterViewInit = function () {
        this.windwosWidth = window.innerWidth;
        if (this.fixed) {
            this.renderer.setElementClass(document.body, 'fixed-sn', true);
            if (this.windwosWidth < 1441) {
                this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                this.setShown(false);
            }
            else {
                this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                this.setShown(true);
            }
        }
        else {
            this.renderer.setElementClass(document.body, 'hidden-sn', true);
            this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
            this.setShown(false);
        }
    };
    SidenavComponent.prototype.windwosResize = function () {
        this.windwosWidth = window.innerWidth;
        if (this.fixed) {
            if (this.windwosWidth < 1441 && this.shown) {
                this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                this.setShown(false);
            }
            else {
                this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                this.setShown(true);
            }
            if (this.windwosWidth > 1440 && this.shown) {
                this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                this.hideOverlay();
                this.setShown(false);
            }
        }
        else {
            if (this.windwosWidth > 1440) {
                this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                this.hideOverlay();
                this.setShown(false);
            }
        }
    };
    ;
    SidenavComponent.prototype.show = function () {
        if (this.fixed) {
            if (this.windwosWidth < 1441) {
                this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                this.setShown(true);
                this.showOverlay();
            }
            else {
                this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                this.setShown(true);
            }
        }
        else {
            this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
            this.setShown(true);
            this.showOverlay();
        }
    };
    SidenavComponent.prototype.hide = function () {
        if (this.fixed) {
            if (this.windwosWidth < 1441) {
                this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                this.setShown(false);
                this.hideOverlay();
            }
            else {
                this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                this.setShown(false);
            }
        }
        else {
            this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
            this.setShown(false);
            this.hideOverlay();
        }
    };
    SidenavComponent.prototype.toggle = function () {
        if (this.shown) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    SidenavComponent.prototype.showOverlay = function () {
        var _this = this;
        this.renderer.setElementStyle(this.overlay.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.renderer.setElementStyle(_this.overlay.nativeElement, 'opacity', '1');
        }, 0);
    };
    SidenavComponent.prototype.hideOverlay = function () {
        var _this = this;
        this.renderer.setElementStyle(this.overlay.nativeElement, 'opacity', '0');
        setTimeout(function () {
            _this.renderer.setElementStyle(_this.overlay.nativeElement, 'display', 'none');
        }, 200);
    };
    SidenavComponent.prototype.setShown = function (value) {
        var _this = this;
        setTimeout(function () {
            _this.shown = value;
        }, 510);
    };
    return SidenavComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SidenavComponent.prototype, "class", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SidenavComponent.prototype, "fixed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidenav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], SidenavComponent.prototype, "sideNav", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('overlay'),
    __metadata("design:type", Object)
], SidenavComponent.prototype, "overlay", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SidenavComponent.prototype, "windwosResize", null);
SidenavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdb-sidenav',
        templateUrl: 'sidenav.component.html'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], SidenavComponent);



/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdb_page_scroll_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdb_page_scroll_instance__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mdb_page_scroll_util_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mdb_page_scroll_config__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageScrollDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var PageScrollDirective = (function () {
    function PageScrollDirective(pageScrollService, router, document) {
        this.pageScrollService = pageScrollService;
        this.router = router;
        this.pageScrollHorizontal = null;
        this.pageScrollOffset = null;
        this.pageScrollDuration = null;
        this.pageScrollSpeed = null;
        this.pageScrollEasing = null;
        this.pageScrollAdjustHash = false;
        this.pageScroll = null;
        this.pageScrollFinish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.document = document;
    }
    PageScrollDirective.prototype.ngOnChanges = function (changes) {
        this.pageScrollInstance = undefined;
    };
    PageScrollDirective.prototype.ngOnDestroy = function () {
        if (this.pageScrollInstance) {
            this.pageScrollService.stop(this.pageScrollInstance);
        }
        return undefined;
    };
    PageScrollDirective.prototype.generatePageScrollInstance = function () {
        if (__WEBPACK_IMPORTED_MODULE_5__mdb_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(this.pageScrollInstance)) {
            this.pageScrollInstance = __WEBPACK_IMPORTED_MODULE_4__mdb_page_scroll_instance__["a" /* PageScrollInstance */].newInstance({
                document: this.document,
                scrollTarget: this.href,
                scrollingViews: null,
                namespace: this.pageScroll,
                verticalScrolling: !this.pageScrollHorizontal,
                pageScrollOffset: this.pageScrollOffset,
                pageScrollInterruptible: this.pageScrollInterruptible,
                pageScrollEasingLogic: this.pageScrollEasing,
                pageScrollDuration: this.pageScrollDuration,
                pageScrollSpeed: this.pageScrollSpeed,
                pageScrollFinishListener: this.pageScrollFinish
            });
        }
        return this.pageScrollInstance;
    };
    PageScrollDirective.prototype.pushRouterState = function () {
        if (this.pageScrollAdjustHash && typeof this.pageScrollInstance.scrollTarget === 'string'
            && this.pageScrollInstance.scrollTarget.substr(0, 1) === '#') {
            this.router.navigate([], {
                fragment: this.pageScrollInstance.scrollTarget.substr(1),
                preserveQueryParams: true
            });
        }
    };
    PageScrollDirective.prototype.scroll = function () {
        var pageScrollInstance = this.generatePageScrollInstance();
        this.pushRouterState();
        this.pageScrollService.start(pageScrollInstance);
    };
    PageScrollDirective.prototype.handleClick = function (clickEvent) {
        var _this = this;
        if (this.routerLink && this.router !== null && this.router !== undefined) {
            var urlTree = void 0;
            if (typeof this.routerLink === 'string') {
                urlTree = this.router.parseUrl(this.routerLink);
            }
            else {
                urlTree = this.router.createUrlTree(this.routerLink);
            }
            if (!this.router.isActive(urlTree, true)) {
                var subscription_1 = this.router.events.subscribe(function (routerEvent) {
                    if (routerEvent instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"]) {
                        subscription_1.unsubscribe();
                        _this.scroll();
                    }
                    else if (routerEvent instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationError"] || routerEvent instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationCancel"]) {
                        subscription_1.unsubscribe();
                    }
                });
                return false;
            }
        }
        this.scroll();
        return false;
    };
    return PageScrollDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PageScrollDirective.prototype, "routerLink", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PageScrollDirective.prototype, "href", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PageScrollDirective.prototype, "pageScrollHorizontal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PageScrollDirective.prototype, "pageScrollOffset", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PageScrollDirective.prototype, "pageScrollDuration", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PageScrollDirective.prototype, "pageScrollSpeed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__mdb_page_scroll_config__["b" /* EasingLogic */])
], PageScrollDirective.prototype, "pageScrollEasing", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PageScrollDirective.prototype, "pageScrollInterruptible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PageScrollDirective.prototype, "pageScrollAdjustHash", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PageScrollDirective.prototype, "pageScroll", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], PageScrollDirective.prototype, "pageScrollFinish", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", Boolean)
], PageScrollDirective.prototype, "handleClick", null);
PageScrollDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdbPageScroll]'
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DOCUMENT"])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__mdb_page_scroll_service__["a" /* PageScrollService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], Object])
], PageScrollDirective);



/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_util_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageScrollInstance; });



var PageScrollInstance = (function () {
    function PageScrollInstance(namespace, document) {
        this._namespace = __WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__["a" /* PageScrollConfig */]._defaultNamespace;
        this._verticalScrolling = __WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__["a" /* PageScrollConfig */].defaultIsVerticalScrolling;
        this._offset = __WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__["a" /* PageScrollConfig */].defaultScrollOffset;
        this._duration = __WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__["a" /* PageScrollConfig */].defaultDuration;
        this._easingLogic = __WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__["a" /* PageScrollConfig */].defaultEasingLogic;
        this._interruptible = __WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__["a" /* PageScrollConfig */].defaultInterruptible;
        this._advancedInlineOffsetCalculation = __WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__["a" /* PageScrollConfig */].defaultAdvancedInlineOffsetCalculation;
        this._pageScrollFinish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._startScrollPosition = 0;
        this._interruptListenersAttached = false;
        this._timer = null;
        this._namespace = namespace;
        this.document = document;
    }
    PageScrollInstance.simpleInstance = function (document, scrollTarget, namespace) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            namespace: namespace
        });
    };
    PageScrollInstance.newInstance = function (options) {
        if (__WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.namespace) || options.namespace.length <= 0) {
            options.namespace = __WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__["a" /* PageScrollConfig */]._defaultNamespace;
        }
        var pageScrollInstance = new PageScrollInstance(options.namespace, document);
        if (__WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.scrollingViews) || options.scrollingViews.length === 0) {
            pageScrollInstance._isInlineScrolling = false;
            pageScrollInstance._scrollingViews = [document.documentElement, document.body, document.body.parentNode];
        }
        else {
            pageScrollInstance._isInlineScrolling = true;
            pageScrollInstance._scrollingViews = options.scrollingViews;
        }
        pageScrollInstance._scrollTarget = options.scrollTarget;
        if (!__WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.verticalScrolling)) {
            pageScrollInstance._verticalScrolling = options.verticalScrolling;
        }
        if (!__WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.pageScrollOffset)) {
            pageScrollInstance._offset = options.pageScrollOffset;
        }
        if (!__WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.pageScrollEasingLogic)) {
            pageScrollInstance._easingLogic = options.pageScrollEasingLogic;
        }
        if (__WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.pageScrollDuration) && !__WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.pageScrollSpeed)) {
            pageScrollInstance._speed = options.pageScrollSpeed;
            pageScrollInstance._duration = undefined;
        }
        else if (!__WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.pageScrollDuration)) {
            pageScrollInstance._duration = options.pageScrollDuration;
        }
        if (!__WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.pageScrollFinishListener)) {
            pageScrollInstance._pageScrollFinish = options.pageScrollFinishListener;
        }
        pageScrollInstance._interruptible = options.pageScrollInterruptible ||
            (__WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.pageScrollInterruptible) && __WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__["a" /* PageScrollConfig */].defaultInterruptible);
        pageScrollInstance._advancedInlineOffsetCalculation = options.advancedInlineOffsetCalculation ||
            (__WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.advancedInlineOffsetCalculation) &&
                __WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__["a" /* PageScrollConfig */].defaultAdvancedInlineOffsetCalculation);
        return pageScrollInstance;
    };
    PageScrollInstance.simpleDirectionInstance = function (document, scrollTarget, verticalScrolling, namespace) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            namespace: namespace,
            verticalScrolling: verticalScrolling,
        });
    };
    PageScrollInstance.simpleInlineInstance = function (document, scrollTarget, scrollingView, namespace) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            scrollingViews: [scrollingView],
            verticalScrolling: true,
            namespace: namespace
        });
    };
    PageScrollInstance.simpleInlineDirectionInstance = function (document, scrollTarget, scrollingView, verticalScrolling, namespace) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            scrollingViews: [scrollingView],
            namespace: namespace,
            verticalScrolling: verticalScrolling,
        });
    };
    PageScrollInstance.advancedInstance = function (document, scrollTarget, scrollingViews, namespace, verticalScrolling, pageScrollOffset, pageScrollInterruptible, pageScrollEasingLogic, pageScrollDuration, pageScrollFinishListener) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            scrollingViews: scrollingViews,
            namespace: namespace,
            verticalScrolling: verticalScrolling,
            pageScrollOffset: pageScrollOffset,
            pageScrollInterruptible: pageScrollInterruptible,
            pageScrollEasingLogic: pageScrollEasingLogic,
            pageScrollDuration: pageScrollDuration,
            pageScrollFinishListener: pageScrollFinishListener
        });
    };
    PageScrollInstance.prototype.getScrollPropertyValue = function (scrollingView) {
        if (!this.verticalScrolling) {
            return scrollingView.scrollLeft;
        }
        return scrollingView.scrollTop;
    };
    PageScrollInstance.prototype.extractScrollTargetPosition = function () {
        var scrollTargetElement;
        if (typeof this._scrollTarget === 'string') {
            scrollTargetElement = this.document.getElementById(this._scrollTarget.substr(1));
        }
        else {
            scrollTargetElement = this._scrollTarget;
        }
        if (scrollTargetElement === null || scrollTargetElement === undefined) {
            return { top: NaN, left: NaN };
        }
        if (this._isInlineScrolling) {
            var position = { top: scrollTargetElement.offsetTop, left: scrollTargetElement.offsetLeft };
            if (this._advancedInlineOffsetCalculation && this.scrollingViews.length === 1) {
                var accumulatedParentsPos = { top: 0, left: 0 };
                var theWindow = scrollTargetElement.ownerDocument.defaultView;
                var parentFound = false;
                var parent_1 = scrollTargetElement.parentElement;
                while (!parentFound && !__WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(parent_1)) {
                    if (theWindow.getComputedStyle(parent_1).getPropertyValue('position') === 'relative') {
                        accumulatedParentsPos.top += parent_1.offsetTop;
                        accumulatedParentsPos.left += parent_1.offsetLeft;
                    }
                    parent_1 = parent_1.parentElement;
                    parentFound = parent_1 === this.scrollingViews[0];
                }
                if (parentFound) {
                    position.top += accumulatedParentsPos.top;
                    position.left += accumulatedParentsPos.left;
                }
                else {
                    if (__WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__["a" /* PageScrollConfig */]._logLevel >= 2) {
                        console.warn('Unable to find nested scrolling targets parent!');
                    }
                }
            }
            return position;
        }
        return __WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_util_service__["a" /* PageScrollUtilService */].extractElementPosition(this.document, scrollTargetElement);
    };
    PageScrollInstance.prototype.getCurrentOffset = function () {
        return this._offset;
    };
    PageScrollInstance.prototype.setScrollPosition = function (position) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__["a" /* PageScrollConfig */]._logLevel >= 5) {
            console.warn('Scroll Position: ' + position);
        }
        return this.scrollingViews.reduce(function (oneAlreadyWorked, scrollingView) {
            var startScrollPropertyValue = _this.getScrollPropertyValue(scrollingView);
            if (scrollingView && !__WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(startScrollPropertyValue)) {
                var scrollDistance = Math.abs(startScrollPropertyValue - position);
                var isSmallMovement = scrollDistance < __WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__["a" /* PageScrollConfig */]._minScrollDistance;
                if (!_this.verticalScrolling) {
                    scrollingView.scrollLeft = position;
                }
                else {
                    scrollingView.scrollTop = position;
                }
                if (isSmallMovement || scrollDistance > Math.abs(_this.getScrollPropertyValue(scrollingView) - position)) {
                    return true;
                }
            }
            return oneAlreadyWorked;
        }, false);
    };
    PageScrollInstance.prototype.fireEvent = function (value) {
        if (this._pageScrollFinish) {
            this._pageScrollFinish.emit(value);
        }
    };
    PageScrollInstance.prototype.attachInterruptListeners = function (interruptReporter) {
        var _this = this;
        if (this._interruptListenersAttached) {
            this.detachInterruptListeners();
        }
        this._interruptListener = function (event) {
            interruptReporter.report(event, _this);
        };
        __WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__["a" /* PageScrollConfig */]._interruptEvents.forEach(function (event) { return _this.document.body.addEventListener(event, _this._interruptListener); });
        this._interruptListenersAttached = true;
    };
    PageScrollInstance.prototype.detachInterruptListeners = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1__mdb_page_scroll_config__["a" /* PageScrollConfig */]._interruptEvents.forEach(function (event) { return _this.document.body.removeEventListener(event, _this._interruptListener); });
        this._interruptListenersAttached = false;
    };
    Object.defineProperty(PageScrollInstance.prototype, "namespace", {
        get: function () {
            return this._namespace;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "scrollTarget", {
        get: function () {
            return this._scrollTarget;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "verticalScrolling", {
        get: function () {
            return this._verticalScrolling;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "scrollingViews", {
        get: function () {
            return this._scrollingViews;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "startScrollPosition", {
        get: function () {
            return this._startScrollPosition;
        },
        set: function (value) {
            this._startScrollPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "targetScrollPosition", {
        get: function () {
            return this._targetScrollPosition;
        },
        set: function (value) {
            this._targetScrollPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "distanceToScroll", {
        get: function () {
            return this._distanceToScroll;
        },
        set: function (value) {
            this._distanceToScroll = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "executionDuration", {
        get: function () {
            return this._executionDuration;
        },
        set: function (value) {
            this._executionDuration = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "easingLogic", {
        get: function () {
            return this._easingLogic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "interruptible", {
        get: function () {
            return this._interruptible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "startTime", {
        get: function () {
            return this._startTime;
        },
        set: function (value) {
            this._startTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "endTime", {
        get: function () {
            return this._endTime;
        },
        set: function (value) {
            this._endTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "timer", {
        get: function () {
            return this._timer;
        },
        set: function (value) {
            this._timer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "interruptListenersAttached", {
        get: function () {
            return this._interruptListenersAttached;
        },
        enumerable: true,
        configurable: true
    });
    return PageScrollInstance;
}());



/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__computed_style__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdbStickyDirective; });

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MdbStickyDirective = (function () {
    function MdbStickyDirective(el) {
        var _this = this;
        this.stickyOffsetTop = 0;
        this.scrollHandler = function () {
            var parentRect = _this.el.parentElement.getBoundingClientRect();
            var bodyRect = document.body.getBoundingClientRect();
            var dynProps;
            if (_this.original.float === 'right') {
                var right = bodyRect.right - parentRect.right + _this.original.marginRight;
                dynProps = { right: right + 'px' };
            }
            else if (_this.original.float === 'left') {
                var left = parentRect.left - bodyRect.left + _this.original.marginLeft;
                dynProps = { left: left + 'px' };
            }
            else {
                dynProps = { width: parentRect.width + 'px' };
            }
            if (_this.original.marginTop + _this.original.marginBottom +
                _this.original.boundingClientRect.height + _this.stickyOffsetTop >= parentRect.bottom) {
                var floatAdjustment = _this.original.float === 'right' ? { right: 0 } :
                    _this.original.float === 'left' ? { left: 0 } : {};
                Object.assign(_this.el.style, {
                    position: 'absolute',
                    float: 'none',
                    top: 'inherit',
                    bottom: 0
                }, dynProps, floatAdjustment);
            }
            else if (parentRect.top * -1 + _this.original.marginTop + _this.stickyOffsetTop > _this.original.offsetTop) {
                if (_this.original.float !== 'left' && _this.original.float !== 'right' && !_this.fillerEl) {
                    _this.fillerEl = document.createElement('div');
                    _this.fillerEl.style.height = _this.el.offsetHeight + 'px';
                    _this.parentEl.insertBefore(_this.fillerEl, _this.el);
                }
                Object.assign(_this.el.style, {
                    position: 'fixed',
                    float: 'none',
                    top: _this.stickyOffsetTop + 'px',
                    bottom: 'inherit'
                }, dynProps);
            }
            else {
                if (_this.fillerEl) {
                    _this.parentEl.removeChild(_this.fillerEl);
                    _this.fillerEl = undefined;
                }
                Object.assign(_this.el.style, {
                    position: _this.original.position,
                    float: _this.original.float,
                    top: _this.original.top,
                    bottom: _this.original.bottom,
                    width: _this.original.width,
                    left: _this.original.left
                }, dynProps);
            }
        };
        this.el = this.el = el.nativeElement;
        this.parentEl = this.el.parentElement;
    }
    MdbStickyDirective.prototype.ngAfterViewInit = function () {
        this.el.style.boxSizing = 'border-box';
        if (this.stickyAfter) {
            var cetStickyAfterEl = document.querySelector(this.stickyAfter);
            if (cetStickyAfterEl) {
                this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
            }
        }
        var allowedPositions = ['absolute', 'fixed', 'relative'];
        var parentElPosition = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__computed_style__["a" /* computedStyle */])(this.parentEl, 'position');
        if (allowedPositions.indexOf(parentElPosition) === -1) {
            this.parentEl.style.position = 'relative';
        }
        this.diff = {
            top: this.el.offsetTop - this.parentEl.offsetTop,
            left: this.el.offsetLeft - this.parentEl.offsetLeft
        };
        var elRect = this.el.getBoundingClientRect();
        this.original = {
            boundingClientRect: elRect,
            position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__computed_style__["a" /* computedStyle */])(this.el, 'position'),
            float: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__computed_style__["a" /* computedStyle */])(this.el, 'float'),
            top: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__computed_style__["a" /* computedStyle */])(this.el, 'top'),
            bottom: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__computed_style__["a" /* computedStyle */])(this.el, 'bottom'),
            left: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__computed_style__["a" /* computedStyle */])(this.el, 'left'),
            width: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__computed_style__["a" /* computedStyle */])(this.el, 'width'),
            offsetTop: this.el.offsetTop,
            offsetLeft: this.el.offsetLeft,
            marginTop: parseInt(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__computed_style__["a" /* computedStyle */])(this.el, 'marginTop'), 10),
            marginBottom: parseInt(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__computed_style__["a" /* computedStyle */])(this.el, 'marginBottom'), 10),
            marginLeft: parseInt(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__computed_style__["a" /* computedStyle */])(this.el, 'marginLeft'), 10),
            marginRight: parseInt(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__computed_style__["a" /* computedStyle */])(this.el, 'marginLeft'), 10)
        };
        this.attach();
    };
    MdbStickyDirective.prototype.ngOnDestroy = function () {
        this.detach();
    };
    MdbStickyDirective.prototype.attach = function () {
        window.addEventListener('scroll', this.scrollHandler);
        window.addEventListener('resize', this.scrollHandler);
    };
    MdbStickyDirective.prototype.detach = function () {
        window.removeEventListener('scroll', this.scrollHandler);
        window.removeEventListener('resize', this.scrollHandler);
    };
    return MdbStickyDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MdbStickyDirective.prototype, "stickyAfter", void 0);
MdbStickyDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdbSticky]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], MdbStickyDirective);



/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RippleDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RippleDirective = (function () {
    function RippleDirective(el) {
        this.el = el;
    }
    RippleDirective.prototype.click = function (event) {
        event.stopPropagation();
        if (!this.el.nativeElement.classList.contains('disabled')) {
            var button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            var xPos = event.clientX - button.getBoundingClientRect().left;
            var yPos = event.clientY - button.getBoundingClientRect().top;
            var tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            var ripple = button.appendChild(tmp);
            var top_1 = yPos + 'px';
            var left = xPos + 'px';
            tmp.style.top = top_1;
            tmp.style.left = left;
            var scale = 'scale(' + ((button.clientWidth / 100) * 3) + ') translate(0,0)';
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            var duration = 750;
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    };
    RippleDirective.prototype.removeRipple = function (button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout(function () {
            ripple.style.opacity = '0';
            setTimeout(function () {
                button.removeChild(ripple);
            }, 750);
        }, 200);
    };
    return RippleDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RippleDirective.prototype, "click", null);
RippleDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdbRippleRadius]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], RippleDirective);



/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_directive__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabHeadingDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabHeadingDirective = (function () {
    function TabHeadingDirective(templateRef, tab) {
        tab.headingRef = templateRef;
    }
    return TabHeadingDirective;
}());
TabHeadingDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[mdbTabHeading]' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_1__tab_directive__["a" /* TabDirective */]])
], TabHeadingDirective);



/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgTranscludeDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgTranscludeDirective = (function () {
    function NgTranscludeDirective(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "mdbNgTransclude", {
        get: function () {
            return this._ngTransclude;
        },
        set: function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    return NgTranscludeDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]])
], NgTranscludeDirective.prototype, "mdbNgTransclude", null);
NgTranscludeDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdbNgTransclude]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
], NgTranscludeDirective);



/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* unused harmony export CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialChipsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var noop = function () {
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MaterialChipsComponent; }),
    multi: true
};
var MaterialChipsComponent = (function () {
    function MaterialChipsComponent() {
        this.placeholder = '';
        this.isTagsFocused = false;
        this.tagsfocusedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.labelsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(MaterialChipsComponent.prototype, "tagsfocused", {
        get: function () {
            return this.isTagsFocused;
        },
        enumerable: true,
        configurable: true
    });
    MaterialChipsComponent.prototype.registerOnChange = function (fn) { this.onChangeCallback = fn; };
    MaterialChipsComponent.prototype.registerOnTouched = function (fn) { this.onTouchedCallback = fn; };
    MaterialChipsComponent.prototype.removeValue = function (value) {
        var index = this.values.indexOf(value, 0);
        if (index !== undefined) {
            this.values.splice(index, 1);
            this.labelsChange.emit(this.values);
        }
    };
    MaterialChipsComponent.prototype.addValue = function (value) {
        if (!value || value.trim() === '') {
            return;
        }
        this.values.push(value);
        this.labelsChange.emit(this.values);
        this.labelToAdd = '';
    };
    MaterialChipsComponent.prototype.writeValue = function (value) {
        if (value !== this.values) {
            this.values = value;
        }
    };
    MaterialChipsComponent.prototype.onFocus = function () {
        this.focused = 'md-focused';
        this.isTagsFocused = true;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    };
    MaterialChipsComponent.prototype.focusOutFunction = function () {
        this.focused = '';
        this.isTagsFocused = false;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    };
    return MaterialChipsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('placeholder'),
    __metadata("design:type", Object)
], MaterialChipsComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MaterialChipsComponent.prototype, "tagsfocusedChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MaterialChipsComponent.prototype, "labelsChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], MaterialChipsComponent.prototype, "tagsfocused", null);
MaterialChipsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdb-material-chips',
        templateUrl: 'chips.component.html',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    })
], MaterialChipsComponent);



/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* unused harmony export TIME_PIRCKER_VALUE_ACCESSOT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClockPickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TIME_PIRCKER_VALUE_ACCESSOT = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return ClockPickerComponent; }),
    multi: true
};
var ClockPickerComponent = (function () {
    function ClockPickerComponent(elem, renderer) {
        var _this = this;
        this.elem = elem;
        this.renderer = renderer;
        this.twelvehour = false;
        this.darktheme = false;
        this.placeholder = '';
        this.label = '';
        this.duration = 300;
        this.showClock = false;
        this.showHours = false;
        this.dialRadius = 135;
        this.outerRadius = 110;
        this.innerRadius = 80;
        this.tickRadius = 20;
        this.diameter = this.dialRadius * 2;
        this.hoursTicks = [];
        this.minutesTicks = [];
        this.selectedHours = { 'h': '12', 'm': '00', 'ampm': 'AM' };
        this.endHours = '';
        this.touchSupported = 'ontouchstart' in window;
        this.mousedownEvent = 'mousedown' + (this.touchSupported ? ' touchstart' : '');
        this.mousemoveEvent = 'mousemove' + (this.touchSupported ? ' touchmove' : '');
        this.mouseupEvent = 'mouseup' + (this.touchSupported ? ' touchend' : '');
        this.onChangeCb = function () { };
        this.onTouchedCb = function () { };
        renderer.listenGlobal(this.elem.nativeElement, 'click', function (event) {
            if (_this.showClock &&
                event.target &&
                _this.elem.nativeElement !== event.target &&
                !_this.elem.nativeElement.contains(event.target)) {
                _this.showClock = false;
            }
            if (event.target.classList.contains('picker__holder')) {
                _this.showClock = false;
            }
        });
    }
    ClockPickerComponent.prototype.ngOnInit = function () {
        this.generateTick();
    };
    ClockPickerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer.listenGlobal(this.plate.nativeElement, this.mousedownEvent, function (event) {
            _this.mousedown(event, false);
        });
    };
    ClockPickerComponent.prototype.checkDraw = function () {
        var value;
        var isHours = this.showHours;
        if (isHours) {
            value = parseInt(this.selectedHours.h, 0);
        }
        else {
            value = parseInt(this.selectedHours.m, 0);
        }
        var unit = Math.PI / (isHours ? 6 : 30), radian = value * unit, radius = isHours && value > 0 && value < 13 ? this.innerRadius : this.outerRadius, xd = Math.sin(radian) * radius, yd = -Math.cos(radian) * radius;
        this.setHand(xd, yd, false, false);
    };
    ClockPickerComponent.prototype.mousedown = function (e, space) {
        var _this = this;
        var offset = this.plate.nativeElement.getBoundingClientRect(), isTouch = /^touch/.test(e.type), x0 = offset.left + this.dialRadius, y0 = offset.top + this.dialRadius, dx = (isTouch ? e.originalEvent.touches[0] : e).clientX - x0, dy = (isTouch ? e.originalEvent.touches[0] : e).clientY - y0, z = Math.sqrt(dx * dx + dy * dy);
        var moved = false;
        if (space && (z < this.outerRadius - this.tickRadius || z > this.outerRadius + this.tickRadius)) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (this.showHours) {
            this.setHand(dx, dy, true, false);
        }
        else {
            this.setHand(dx, dy, false, false);
        }
        var mousemoveEventMethod = function (event) {
            event.preventDefault();
            event.stopPropagation();
            var x = event.clientX - x0, y = event.clientY - y0;
            if (!moved && x === dx && y === dy) {
                return;
            }
            moved = true;
            _this.setHand(x, y, false, true);
        };
        var mouseupEventMethod = function (event) {
            document.removeEventListener(_this.mousemoveEvent, mousemoveEventMethod);
            e.preventDefault();
            var x = event.clientX - x0, y = event.clientX - y0;
            if ((space || moved) && x === dx && y === dy) {
                _this.setHand(x, y, false, false);
            }
            _this.showMinutesClock();
            document.removeEventListener(_this.mouseupEvent, mouseupEventMethod);
        };
        document.addEventListener(this.mousemoveEvent, mousemoveEventMethod);
        document.addEventListener(this.mouseupEvent, mouseupEventMethod);
    };
    ClockPickerComponent.prototype.openBtnClicked = function () {
        this.showClock = true;
        this.showHours = true;
        this.checkDraw();
    };
    ClockPickerComponent.prototype.closeBtnClicked = function () {
        var h = this.selectedHours.h;
        var m = this.selectedHours.m;
        var ampm = this.selectedHours.ampm;
        if (this.twelvehour) {
            this.endHours = h + ':' + m + ampm;
        }
        else {
            this.endHours = h + ':' + m;
        }
        this.onChangeCb(this.endHours);
        this.onTouchedCb();
        this.showClock = false;
    };
    ClockPickerComponent.prototype.setHour = function (hour) {
        this.selectedHours.h = hour;
    };
    ClockPickerComponent.prototype.setMinute = function (min) {
        this.selectedHours.m = min;
    };
    ClockPickerComponent.prototype.setAmPm = function (ampm) {
        this.selectedHours.ampm = ampm;
    };
    ClockPickerComponent.prototype.showHoursClock = function () {
        this.showHours = true;
        this.checkDraw();
    };
    ClockPickerComponent.prototype.showMinutesClock = function () {
        this.showHours = false;
        this.checkDraw();
    };
    ClockPickerComponent.prototype.generateTick = function () {
        if (this.twelvehour) {
            for (var i = 1; i < 13; i++) {
                var radian = i / 6 * Math.PI;
                var radius = this.outerRadius;
                var tick = {
                    'hour': i,
                    'left': this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                    'top': this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                };
                this.hoursTicks.push(tick);
            }
        }
        else {
            for (var i = 0; i < 24; i++) {
                var radian = i / 6 * Math.PI;
                var inner = i > 0 && i < 13;
                var radius = inner ? this.innerRadius : this.outerRadius;
                var h = void 0;
                if (i === 0) {
                    h = '0' + i.toString();
                }
                else {
                    h = i;
                }
                var tick = {
                    'hour': h,
                    'left': this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                    'top': this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                };
                this.hoursTicks.push(tick);
            }
        }
        for (var i = 0; i < 60; i += 5) {
            var radian = i / 30 * Math.PI;
            var min = i.toString();
            if (i < 10) {
                min = '0' + i.toString();
            }
            var tick = {
                'min': min,
                'left': this.dialRadius + Math.sin(radian) * this.outerRadius - this.tickRadius,
                'top': this.dialRadius - Math.cos(radian) * this.outerRadius - this.tickRadius,
            };
            this.minutesTicks.push(tick);
        }
    };
    ClockPickerComponent.prototype.setHand = function (x, y, roundBy5, draging) {
        var radian = Math.atan2(x, -y);
        var isHours = this.showHours;
        var unit = Math.PI / (isHours || roundBy5 ? 6 : 30);
        var z = Math.sqrt(x * x + y * y);
        var inner = isHours && z < (this.outerRadius + this.innerRadius) / 2;
        var radius = inner ? this.innerRadius : this.outerRadius;
        var value;
        if (this.showHours) {
            value = parseInt(this.selectedHours.h, 0);
        }
        else {
            value = parseInt(this.selectedHours.m, 0);
        }
        if (this.twelvehour) {
            radius = this.outerRadius;
        }
        if (radian < 0) {
            radian = Math.PI * 2 + radian;
        }
        value = Math.round(radian / unit);
        radian = value * unit;
        if (this.twelvehour) {
            if (isHours) {
                if (value === 0) {
                    value = 12;
                }
            }
            else {
                if (roundBy5) {
                    value *= 5;
                }
                if (value === 60) {
                    value = 0;
                }
            }
        }
        else {
            if (isHours) {
                if (value === 12) {
                    value = 0;
                    value = inner ? (value === 0 ? 12 : value) : value === 0 ? 0 : value + 12;
                }
            }
            else {
                if (roundBy5) {
                    value *= 5;
                }
                if (value === 60) {
                    value = 0;
                }
            }
        }
        if (isHours) {
            this.fg.nativeElement.setAttribute('class', 'clockpicker-canvas-fg');
        }
        else {
            if (value % 5 === 0) {
                this.fg.nativeElement.setAttribute('class', 'clockpicker-canvas-fg');
            }
            else {
                this.fg.nativeElement.setAttribute('class', 'clockpicker-canvas-fg active');
            }
        }
        var cx1 = Math.sin(radian) * (radius - this.tickRadius), cy1 = -Math.cos(radian) * (radius - this.tickRadius), cx2 = Math.sin(radian) * radius, cy2 = -Math.cos(radian) * radius;
        this.hand.nativeElement.setAttribute('x2', cx1);
        this.hand.nativeElement.setAttribute('y2', cy1);
        this.bg.nativeElement.setAttribute('cx', cx2);
        this.bg.nativeElement.setAttribute('cy', cy2);
        this.fg.nativeElement.setAttribute('cx', cx2);
        this.fg.nativeElement.setAttribute('cy', cy2);
        if (this.showHours) {
            if (value < 10) {
                this.setHour('0' + value.toString());
            }
            else {
                this.setHour(value.toString());
            }
        }
        else {
            if (value < 10) {
                this.setMinute('0' + value.toString());
            }
            else {
                this.setMinute(value.toString());
            }
        }
    };
    ClockPickerComponent.prototype.offset = function (obj) {
        var left = 0, top = 0;
        if (obj.offsetParent) {
            do {
                left += obj.offsetLeft;
                top += obj.offsetTop;
            } while (obj = obj.offsetParent);
        }
        return { left: left, top: top };
    };
    ClockPickerComponent.prototype.writeValue = function (value) {
        this.endHours = value;
    };
    ClockPickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCb = fn;
    };
    ClockPickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCb = fn;
    };
    return ClockPickerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('hoursPlate'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], ClockPickerComponent.prototype, "hoursPlate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('minutesPlate'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], ClockPickerComponent.prototype, "minutesPlate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('plate'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], ClockPickerComponent.prototype, "plate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('svg'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], ClockPickerComponent.prototype, "svg", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('g'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], ClockPickerComponent.prototype, "g", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('hand'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], ClockPickerComponent.prototype, "hand", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fg'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], ClockPickerComponent.prototype, "fg", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bg'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], ClockPickerComponent.prototype, "bg", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bearing'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], ClockPickerComponent.prototype, "bearing", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('twelvehour'),
    __metadata("design:type", Object)
], ClockPickerComponent.prototype, "twelvehour", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('darktheme'),
    __metadata("design:type", Object)
], ClockPickerComponent.prototype, "darktheme", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('placeholder'),
    __metadata("design:type", String)
], ClockPickerComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('label'),
    __metadata("design:type", Object)
], ClockPickerComponent.prototype, "label", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('duration'),
    __metadata("design:type", Object)
], ClockPickerComponent.prototype, "duration", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showClock'),
    __metadata("design:type", Object)
], ClockPickerComponent.prototype, "showClock", void 0);
ClockPickerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdb-time-picker',
        templateUrl: './timepicker.component.html',
        providers: [TIME_PIRCKER_VALUE_ACCESSOT]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], ClockPickerComponent);



/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_93__;

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_popup__ = __webpack_require__(75);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__image_popup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_box_module__ = __webpack_require__(51);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__light_box_module__["a"]; });




/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preloader_constants__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDBSpinningPreloader; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MDBSpinningPreloader = (function () {
    function MDBSpinningPreloader(document) {
        this.document = document;
        this.container = this.document.querySelector(__WEBPACK_IMPORTED_MODULE_2__preloader_constants__["a" /* CONTAINER_QUERY */]);
    }
    MDBSpinningPreloader.errorHandler = function () {
        throw new TypeError(__WEBPACK_IMPORTED_MODULE_2__preloader_constants__["b" /* TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE */]);
    };
    MDBSpinningPreloader.prototype.start = function () {
        this.container.classList.remove(__WEBPACK_IMPORTED_MODULE_2__preloader_constants__["c" /* COMPLETE_CLASS_NAME */]);
    };
    MDBSpinningPreloader.prototype.stop = function () {
        this.container.classList.add(__WEBPACK_IMPORTED_MODULE_2__preloader_constants__["c" /* COMPLETE_CLASS_NAME */]);
    };
    Object.defineProperty(MDBSpinningPreloader.prototype, "container", {
        get: function () {
            return this._container;
        },
        set: function (element) {
            if (!element) {
            }
            this._container = element || this.document.createElement(__WEBPACK_IMPORTED_MODULE_2__preloader_constants__["d" /* EMULATE_ELEMENT_NAME */]);
        },
        enumerable: true,
        configurable: true
    });
    return MDBSpinningPreloader;
}());
MDBSpinningPreloader = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DOCUMENT"])),
    __metadata("design:paramtypes", [Object])
], MDBSpinningPreloader);



/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__portal__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomPortalHost; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DomPortalHost = (function (_super) {
    __extends(DomPortalHost, _super);
    function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef) {
        var _this = _super.call(this) || this;
        _this._hostDomElement = _hostDomElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        return _this;
    }
    DomPortalHost.prototype.attachComponentPortal = function (portal, newestOnTop) {
        var _this = this;
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var componentRef;
        componentRef = componentFactory.create(portal.injector);
        this._appRef.attachView(componentRef.hostView);
        this.setDisposeFn(function () {
            _this._appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        });
        if (newestOnTop) {
            this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
        }
        else {
            this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
        }
        return componentRef;
    };
    DomPortalHost.prototype._getComponentRootNode = function (componentRef) {
        return componentRef.hostView.rootNodes[0];
    };
    return DomPortalHost;
}(__WEBPACK_IMPORTED_MODULE_0__portal__["b" /* BasePortalHost */]));



/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastContainerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToastContainerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastContainerDirective = (function () {
    function ToastContainerDirective(el) {
        this.el = el;
    }
    ToastContainerDirective.prototype.getContainerElement = function () {
        return this.el.nativeElement;
    };
    return ToastContainerDirective;
}());
ToastContainerDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdbToastContainer]',
        exportAs: 'mdb-toast-container',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], ToastContainerDirective);

var ToastContainerModule = ToastContainerModule_1 = (function () {
    function ToastContainerModule() {
    }
    ToastContainerModule.forRoot = function () {
        return {
            ngModule: ToastContainerModule_1,
            providers: []
        };
    };
    return ToastContainerModule;
}());
ToastContainerModule = ToastContainerModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        exports: [ToastContainerDirective],
        declarations: [ToastContainerDirective],
    })
], ToastContainerModule);

var ToastContainerModule_1;


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_component__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toast_token__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__overlay_overlay_container__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__overlay_overlay__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ToastModule = ToastModule_1 = (function () {
    function ToastModule(parentModule) {
        if (parentModule) {
            throw new Error('ToastModule is already loaded. It should only be imported in your application\'s main module.');
        }
    }
    ToastModule.forRoot = function (config) {
        return {
            ngModule: ToastModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__toast_token__["a" /* TOAST_CONFIG */], useValue: config },
                __WEBPACK_IMPORTED_MODULE_5__overlay_overlay_container__["a" /* OverlayContainer */],
                __WEBPACK_IMPORTED_MODULE_6__overlay_overlay__["a" /* Overlay */],
                __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */],
            ]
        };
    };
    return ToastModule;
}());
ToastModule = ToastModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* ToastComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* ToastComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* ToastComponent */]],
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
    __metadata("design:paramtypes", [ToastModule])
], ToastModule);

var ToastModule_1;


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_completer_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_completer_list_item_component__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_completer_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_factory_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_completer_directive__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_dropdown_directive__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_input_directive__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_list_context_directive__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_row_directive__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__angular_common__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2CompleterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var Ng2CompleterModule = (function () {
    function Ng2CompleterModule() {
    }
    return Ng2CompleterModule;
}());
Ng2CompleterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_12__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__components_completer_list_item_component__["a" /* CompleterListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_7__directives_completer_directive__["a" /* MdbCompleterDirective */],
            __WEBPACK_IMPORTED_MODULE_8__directives_dropdown_directive__["a" /* MdbDropdownDirective */],
            __WEBPACK_IMPORTED_MODULE_9__directives_input_directive__["a" /* MdbInputDirective */],
            __WEBPACK_IMPORTED_MODULE_10__directives_list_context_directive__["a" /* MdbListDirective */],
            __WEBPACK_IMPORTED_MODULE_11__directives_row_directive__["a" /* MdbRowDirective */],
            __WEBPACK_IMPORTED_MODULE_3__components_completer_component__["a" /* CompleterComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__components_completer_component__["a" /* CompleterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_completer_list_item_component__["a" /* CompleterListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_7__directives_completer_directive__["a" /* MdbCompleterDirective */],
            __WEBPACK_IMPORTED_MODULE_8__directives_dropdown_directive__["a" /* MdbDropdownDirective */],
            __WEBPACK_IMPORTED_MODULE_9__directives_input_directive__["a" /* MdbInputDirective */],
            __WEBPACK_IMPORTED_MODULE_10__directives_list_context_directive__["a" /* MdbListDirective */],
            __WEBPACK_IMPORTED_MODULE_11__directives_row_directive__["a" /* MdbRowDirective */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_completer_service__["a" /* CompleterService */],
            __WEBPACK_IMPORTED_MODULE_6__services_data_factory_service__["a" /* LocalDataFactoryProvider */],
            __WEBPACK_IMPORTED_MODULE_6__services_data_factory_service__["b" /* RemoteDataFactoryProvider */]
        ]
    })
], Ng2CompleterModule);



/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_reveal_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_rotating_component__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CardsModule = CardsModule_1 = (function () {
    function CardsModule() {
    }
    CardsModule.forRoot = function () {
        return { ngModule: CardsModule_1, providers: [] };
    };
    return CardsModule;
}());
CardsModule = CardsModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__card_reveal_component__["a" /* CardRevealComponent */], __WEBPACK_IMPORTED_MODULE_3__card_rotating_component__["a" /* CardRotatingComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__card_reveal_component__["a" /* CardRevealComponent */], __WEBPACK_IMPORTED_MODULE_3__card_rotating_component__["a" /* CardRotatingComponent */]]
    })
], CardsModule);

var CardsModule_1;


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datepicker_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_datepickerFocus_directive__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_datepickerAutofill_directive__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDBDatePickerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MDBDatePickerModule = (function () {
    function MDBDatePickerModule() {
    }
    return MDBDatePickerModule;
}());
MDBDatePickerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__datepicker_component__["a" /* MDBDatePickerComponent */], __WEBPACK_IMPORTED_MODULE_4__directives_datepickerFocus_directive__["a" /* FocusDirective */], __WEBPACK_IMPORTED_MODULE_5__directives_datepickerAutofill_directive__["a" /* InputAutoFillDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__datepicker_component__["a" /* MDBDatePickerComponent */], __WEBPACK_IMPORTED_MODULE_4__directives_datepickerFocus_directive__["a" /* FocusDirective */], __WEBPACK_IMPORTED_MODULE_5__directives_datepickerAutofill_directive__["a" /* InputAutoFillDirective */]]
    })
], MDBDatePickerModule);



/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart_simple_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart_smallpie_component__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartSimpleModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChartSimpleModule = (function () {
    function ChartSimpleModule() {
    }
    return ChartSimpleModule;
}());
ChartSimpleModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__chart_simple_component__["a" /* SimpleChartComponent */], __WEBPACK_IMPORTED_MODULE_2__chart_smallpie_component__["a" /* EasyPieChartComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__chart_simple_component__["a" /* SimpleChartComponent */], __WEBPACK_IMPORTED_MODULE_2__chart_smallpie_component__["a" /* EasyPieChartComponent */]
        ],
        imports: []
    })
], ChartSimpleModule);



/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_mdb_file_drop_directive__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_mdb_file_select_directive__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDBUploaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MDBUploaderModule = (function () {
    function MDBUploaderModule() {
    }
    return MDBUploaderModule;
}());
MDBUploaderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__directives_mdb_file_select_directive__["a" /* MDBFileSelectDirective */],
            __WEBPACK_IMPORTED_MODULE_1__directives_mdb_file_drop_directive__["a" /* MDBFileDropDirective */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__directives_mdb_file_select_directive__["a" /* MDBFileSelectDirective */],
            __WEBPACK_IMPORTED_MODULE_1__directives_mdb_file_drop_directive__["a" /* MDBFileDropDirective */]
        ]
    })
], MDBUploaderModule);



/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__autocomplete__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards___ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_input___ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tags___ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progressbars___ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_pills___ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__alerts___ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_select___ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__date_picker___ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__time_picker___ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lightbox_light_box_module__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sidenav___ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__easy_charts___ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__accordion___ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sticky_content___ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__smoothscroll_index__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__inputs___ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__autocomplete___ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2CompleterModule", function() { return __WEBPACK_IMPORTED_MODULE_18__autocomplete___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CompleterComponent", function() { return __WEBPACK_IMPORTED_MODULE_18__autocomplete___["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CompleterListItemComponent", function() { return __WEBPACK_IMPORTED_MODULE_18__autocomplete___["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CompleterService", function() { return __WEBPACK_IMPORTED_MODULE_18__autocomplete___["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LocalDataFactoryProvider", function() { return __WEBPACK_IMPORTED_MODULE_18__autocomplete___["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteDataFactoryProvider", function() { return __WEBPACK_IMPORTED_MODULE_18__autocomplete___["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MdbCompleterDirective", function() { return __WEBPACK_IMPORTED_MODULE_18__autocomplete___["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MdbDropdownDirective", function() { return __WEBPACK_IMPORTED_MODULE_18__autocomplete___["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MdbInputDirective", function() { return __WEBPACK_IMPORTED_MODULE_18__autocomplete___["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MdbListDirective", function() { return __WEBPACK_IMPORTED_MODULE_18__autocomplete___["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MdbRowDirective", function() { return __WEBPACK_IMPORTED_MODULE_18__autocomplete___["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CardsModule", function() { return __WEBPACK_IMPORTED_MODULE_2__cards___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CardRotatingComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__cards___["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CardRevealComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__cards___["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__progressbars___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarConfigComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__progressbars___["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarModule", function() { return __WEBPACK_IMPORTED_MODULE_5__progressbars___["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBars", function() { return __WEBPACK_IMPORTED_MODULE_5__progressbars___["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressDirective", function() { return __WEBPACK_IMPORTED_MODULE_5__progressbars___["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressSpinnerComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__progressbars___["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__progressbars___["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialChipsComponent", function() { return __WEBPACK_IMPORTED_MODULE_4__tags___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialChipsModule", function() { return __WEBPACK_IMPORTED_MODULE_4__tags___["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TabDirective", function() { return __WEBPACK_IMPORTED_MODULE_6__tabs_pills___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeadingDirective", function() { return __WEBPACK_IMPORTED_MODULE_6__tabs_pills___["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__tabs_pills___["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetConfig", function() { return __WEBPACK_IMPORTED_MODULE_6__tabs_pills___["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return __WEBPACK_IMPORTED_MODULE_6__tabs_pills___["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgTranscludeDirective", function() { return __WEBPACK_IMPORTED_MODULE_6__tabs_pills___["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__preloader_preloader_service__ = __webpack_require__(95);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDBSpinningPreloader", function() { return __WEBPACK_IMPORTED_MODULE_19__preloader_preloader_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__alerts___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ToastContainerDirective", function() { return __WEBPACK_IMPORTED_MODULE_7__alerts___["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ToastContainerModule", function() { return __WEBPACK_IMPORTED_MODULE_7__alerts___["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ToastInjector", function() { return __WEBPACK_IMPORTED_MODULE_7__alerts___["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPackage", function() { return __WEBPACK_IMPORTED_MODULE_7__alerts___["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ToastRef", function() { return __WEBPACK_IMPORTED_MODULE_7__alerts___["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ToastModule", function() { return __WEBPACK_IMPORTED_MODULE_7__alerts___["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return __WEBPACK_IMPORTED_MODULE_7__alerts___["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalConfig", function() { return __WEBPACK_IMPORTED_MODULE_7__alerts___["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return __WEBPACK_IMPORTED_MODULE_7__alerts___["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_PROVIDERS", function() { return __WEBPACK_IMPORTED_MODULE_7__alerts___["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayContainer", function() { return __WEBPACK_IMPORTED_MODULE_7__alerts___["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRef", function() { return __WEBPACK_IMPORTED_MODULE_7__alerts___["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SelectModule", function() { return __WEBPACK_IMPORTED_MODULE_8__material_select___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Diacritics", function() { return __WEBPACK_IMPORTED_MODULE_8__material_select___["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return __WEBPACK_IMPORTED_MODULE_8__material_select___["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OptionList", function() { return __WEBPACK_IMPORTED_MODULE_8__material_select___["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_VALUE_ACCESSOR", function() { return __WEBPACK_IMPORTED_MODULE_8__material_select___["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__material_select___["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDropdownComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__material_select___["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDBDatePickerComponent", function() { return __WEBPACK_IMPORTED_MODULE_9__date_picker___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDBDatePickerModule", function() { return __WEBPACK_IMPORTED_MODULE_9__date_picker___["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "InputAutoFillDirective", function() { return __WEBPACK_IMPORTED_MODULE_9__date_picker___["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MYDP_VALUE_ACCESSOR", function() { return __WEBPACK_IMPORTED_MODULE_9__date_picker___["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return __WEBPACK_IMPORTED_MODULE_9__date_picker___["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleService", function() { return __WEBPACK_IMPORTED_MODULE_9__date_picker___["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FocusDirective", function() { return __WEBPACK_IMPORTED_MODULE_9__date_picker___["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TimePickerModule", function() { return __WEBPACK_IMPORTED_MODULE_10__time_picker___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ClockPickerComponent", function() { return __WEBPACK_IMPORTED_MODULE_10__time_picker___["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__lightbox___ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LightBoxModule", function() { return __WEBPACK_IMPORTED_MODULE_20__lightbox___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModalComponent", function() { return __WEBPACK_IMPORTED_MODULE_20__lightbox___["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return __WEBPACK_IMPORTED_MODULE_12__sidenav___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavModule", function() { return __WEBPACK_IMPORTED_MODULE_12__sidenav___["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ChartSimpleModule", function() { return __WEBPACK_IMPORTED_MODULE_13__easy_charts___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EasyPieChartComponent", function() { return __WEBPACK_IMPORTED_MODULE_13__easy_charts___["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleChartComponent", function() { return __WEBPACK_IMPORTED_MODULE_13__easy_charts___["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SBItemComponent", function() { return __WEBPACK_IMPORTED_MODULE_14__accordion___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SBItemBodyComponent", function() { return __WEBPACK_IMPORTED_MODULE_14__accordion___["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SBItemHeadComponent", function() { return __WEBPACK_IMPORTED_MODULE_14__accordion___["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SqueezeBoxComponent", function() { return __WEBPACK_IMPORTED_MODULE_14__accordion___["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SqueezeBoxModule", function() { return __WEBPACK_IMPORTED_MODULE_14__accordion___["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MdbStickyDirective", function() { return __WEBPACK_IMPORTED_MODULE_15__sticky_content___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MdbStickyModule", function() { return __WEBPACK_IMPORTED_MODULE_15__sticky_content___["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__smoothscroll___ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDBPageScrollModule", function() { return __WEBPACK_IMPORTED_MODULE_21__smoothscroll___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PageScrollDirective", function() { return __WEBPACK_IMPORTED_MODULE_21__smoothscroll___["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PageScrollConfig", function() { return __WEBPACK_IMPORTED_MODULE_21__smoothscroll___["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PageScrollInstance", function() { return __WEBPACK_IMPORTED_MODULE_21__smoothscroll___["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PageScrollService", function() { return __WEBPACK_IMPORTED_MODULE_21__smoothscroll___["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PageScrollUtilService", function() { return __WEBPACK_IMPORTED_MODULE_21__smoothscroll___["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EasingLogic", function() { return __WEBPACK_IMPORTED_MODULE_21__smoothscroll___["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__inputs__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CharCounterDirective", function() { return __WEBPACK_IMPORTED_MODULE_22__inputs__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CharCounterModule", function() { return __WEBPACK_IMPORTED_MODULE_22__inputs__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__file_input__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDBFileDropDirective", function() { return __WEBPACK_IMPORTED_MODULE_23__file_input__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDBFileSelectDirective", function() { return __WEBPACK_IMPORTED_MODULE_23__file_input__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDBUploaderModule", function() { return __WEBPACK_IMPORTED_MODULE_23__file_input__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDBUploaderService", function() { return __WEBPACK_IMPORTED_MODULE_23__file_input__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "humanizeBytes", function() { return __WEBPACK_IMPORTED_MODULE_23__file_input__["e"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBRootModulePro", function() { return MDBRootModulePro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBBootstrapModulePro", function() { return MDBBootstrapModulePro; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__autocomplete__["a" /* Ng2CompleterModule */],
    __WEBPACK_IMPORTED_MODULE_2__cards___["a" /* CardsModule */],
    __WEBPACK_IMPORTED_MODULE_3__file_input___["c" /* MDBUploaderModule */],
    __WEBPACK_IMPORTED_MODULE_4__tags___["b" /* MaterialChipsModule */],
    __WEBPACK_IMPORTED_MODULE_5__progressbars___["d" /* ProgressBars */],
    __WEBPACK_IMPORTED_MODULE_6__tabs_pills___["e" /* TabsModule */],
    __WEBPACK_IMPORTED_MODULE_7__alerts___["g" /* ToastModule */],
    __WEBPACK_IMPORTED_MODULE_8__material_select___["a" /* SelectModule */],
    __WEBPACK_IMPORTED_MODULE_9__date_picker___["b" /* MDBDatePickerModule */],
    __WEBPACK_IMPORTED_MODULE_10__time_picker___["a" /* TimePickerModule */],
    __WEBPACK_IMPORTED_MODULE_11__lightbox_light_box_module__["a" /* LightBoxModule */],
    __WEBPACK_IMPORTED_MODULE_12__sidenav___["b" /* SidenavModule */],
    __WEBPACK_IMPORTED_MODULE_13__easy_charts___["a" /* ChartSimpleModule */],
    __WEBPACK_IMPORTED_MODULE_14__accordion___["e" /* SqueezeBoxModule */],
    __WEBPACK_IMPORTED_MODULE_15__sticky_content___["b" /* MdbStickyModule */],
    __WEBPACK_IMPORTED_MODULE_16__smoothscroll_index__["a" /* MDBPageScrollModule */],
    __WEBPACK_IMPORTED_MODULE_17__inputs___["b" /* CharCounterModule */]
];
var MDBRootModulePro = (function () {
    function MDBRootModulePro() {
    }
    return MDBRootModulePro;
}());
MDBRootModulePro = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__autocomplete__["a" /* Ng2CompleterModule */],
            __WEBPACK_IMPORTED_MODULE_2__cards___["a" /* CardsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__tags___["b" /* MaterialChipsModule */],
            __WEBPACK_IMPORTED_MODULE_5__progressbars___["d" /* ProgressBars */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__tabs_pills___["e" /* TabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__alerts___["g" /* ToastModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__material_select___["a" /* SelectModule */],
            __WEBPACK_IMPORTED_MODULE_9__date_picker___["b" /* MDBDatePickerModule */],
            __WEBPACK_IMPORTED_MODULE_10__time_picker___["a" /* TimePickerModule */],
            __WEBPACK_IMPORTED_MODULE_11__lightbox_light_box_module__["a" /* LightBoxModule */],
            __WEBPACK_IMPORTED_MODULE_12__sidenav___["b" /* SidenavModule */],
            __WEBPACK_IMPORTED_MODULE_13__easy_charts___["a" /* ChartSimpleModule */],
            __WEBPACK_IMPORTED_MODULE_14__accordion___["e" /* SqueezeBoxModule */],
            __WEBPACK_IMPORTED_MODULE_15__sticky_content___["b" /* MdbStickyModule */],
            __WEBPACK_IMPORTED_MODULE_16__smoothscroll_index__["a" /* MDBPageScrollModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_17__inputs___["b" /* CharCounterModule */].forRoot()
        ],
        exports: MODULES,
        providers: [],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
    })
], MDBRootModulePro);

var MDBBootstrapModulePro = (function () {
    function MDBBootstrapModulePro() {
    }
    MDBBootstrapModulePro.forRoot = function () {
        return { ngModule: MDBRootModulePro };
    };
    return MDBBootstrapModulePro;
}());
MDBBootstrapModulePro = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({ exports: MODULES })
], MDBBootstrapModulePro);



/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__char_counter_directive__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharCounterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CharCounterModule = CharCounterModule_1 = (function () {
    function CharCounterModule() {
    }
    CharCounterModule.forRoot = function () {
        return { ngModule: CharCounterModule_1, providers: [] };
    };
    return CharCounterModule;
}());
CharCounterModule = CharCounterModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__char_counter_directive__["a" /* CharCounterDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__char_counter_directive__["a" /* CharCounterDirective */]]
    })
], CharCounterModule);

var CharCounterModule_1;


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_component__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_dropdown_component__ = __webpack_require__(40);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SelectModule = (function () {
    function SelectModule() {
    }
    return SelectModule;
}());
SelectModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__select_component__["b" /* SelectComponent */],
            __WEBPACK_IMPORTED_MODULE_4__select_dropdown_component__["a" /* SelectDropdownComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__select_component__["b" /* SelectComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]
        ]
    })
], SelectModule);



/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EMULATE_ELEMENT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTAINER_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return COMPLETE_CLASS_NAME; });
/* unused harmony export CONTAINER_CLASS_NAME */
/* unused harmony export CONTAINER_NAME */
var CONTAINER_CLASS_NAME = 'spinning-preloader-container';
var COMPLETE_CLASS_NAME = 'complete';
var CONTAINER_QUERY = "." + CONTAINER_CLASS_NAME;
var CONTAINER_NAME = CONTAINER_CLASS_NAME.split('-').join(' ');
var TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE = "The " + CONTAINER_NAME + " was not found";
var EMULATE_ELEMENT_NAME = 'div';



/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progressbar_component__ = __webpack_require__(79);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdProgressBarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MdProgressBarModule = MdProgressBarModule_1 = (function () {
    function MdProgressBarModule() {
    }
    MdProgressBarModule.forRoot = function () {
        return {
            ngModule: MdProgressBarModule_1,
            providers: []
        };
    };
    return MdProgressBarModule;
}());
MdProgressBarModule = MdProgressBarModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__progressbar_component__["a" /* ProgressBarComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__progressbar_component__["a" /* ProgressBarComponent */]],
    })
], MdProgressBarModule);


var MdProgressBarModule_1;


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_spinner_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_spinner_component__ = __webpack_require__(81);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdProgressSpinnerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MdProgressSpinnerModule = MdProgressSpinnerModule_1 = (function () {
    function MdProgressSpinnerModule() {
    }
    MdProgressSpinnerModule.forRoot = function () {
        return {
            ngModule: MdProgressSpinnerModule_1,
            providers: []
        };
    };
    return MdProgressSpinnerModule;
}());
MdProgressSpinnerModule = MdProgressSpinnerModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__progress_spinner_component__["a" /* MdProgressSpinnerComponent */],
            __WEBPACK_IMPORTED_MODULE_1__progress_spinner_component__["b" /* MdSpinnerComponent */],
            __WEBPACK_IMPORTED_MODULE_1__progress_spinner_component__["c" /* MdProgressSpinnerCssMatStylerDirective */],
            __WEBPACK_IMPORTED_MODULE_2__progress_spinner_component__["a" /* ProgressSpinnerComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__progress_spinner_component__["a" /* MdProgressSpinnerComponent */],
            __WEBPACK_IMPORTED_MODULE_1__progress_spinner_component__["b" /* MdSpinnerComponent */],
            __WEBPACK_IMPORTED_MODULE_1__progress_spinner_component__["c" /* MdProgressSpinnerCssMatStylerDirective */],
            __WEBPACK_IMPORTED_MODULE_2__progress_spinner_component__["a" /* ProgressSpinnerComponent */]
        ],
    })
], MdProgressSpinnerModule);


var MdProgressSpinnerModule_1;


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidenav_component__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SidenavModule = (function () {
    function SidenavModule() {
    }
    return SidenavModule;
}());
SidenavModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sidenav_component__["a" /* SidenavComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__sidenav_component__["a" /* SidenavComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
        ]
    })
], SidenavModule);



/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdb_page_scroll_directive__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDBPageScrollModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MDBPageScrollModule = MDBPageScrollModule_1 = (function () {
    function MDBPageScrollModule() {
    }
    MDBPageScrollModule.forRoot = function () {
        return {
            ngModule: MDBPageScrollModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_service__["a" /* PageScrollService */], useClass: __WEBPACK_IMPORTED_MODULE_2__mdb_page_scroll_service__["a" /* PageScrollService */] }
            ]
        };
    };
    return MDBPageScrollModule;
}());
MDBPageScrollModule = MDBPageScrollModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__mdb_page_scroll_directive__["a" /* PageScrollDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__mdb_page_scroll_directive__["a" /* PageScrollDirective */]]
    })
], MDBPageScrollModule);

var MDBPageScrollModule_1;


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = computedStyle;
function computedStyle(element, styleProp) {
    var el;
    el = (typeof element === 'string') ? document.querySelector(element) : element;
    var value;
    var defaultView = (el.ownerDocument || document).defaultView;
    if (defaultView && defaultView.getComputedStyle) {
        styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
        return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    }
    else if (el['currentStyle']) {
        styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
            return letter.toUpperCase();
        });
        value = el['currentStyle'][styleProp];
        if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
            return (function (val) {
                var oldLeft = el.style.left, oldRsLeft = el['runtimeStyle'].left;
                el['runtimeStyle'].left = el['currentStyle'].left;
                el.style.left = value || 0;
                value = el.style['pixelLeft'] + 'px';
                el.style.left = oldLeft;
                el['runtimeStyle'].left = oldRsLeft;
                return value;
            })(value);
        }
        return value;
    }
}


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sticky_content_directive__ = __webpack_require__(87);
/* unused harmony reexport MdbStickyDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdbStickyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MdbStickyModule = (function () {
    function MdbStickyModule() {
    }
    return MdbStickyModule;
}());
MdbStickyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__sticky_content_directive__["a" /* MdbStickyDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__sticky_content_directive__["a" /* MdbStickyDirective */]]
    })
], MdbStickyModule);



/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transclude_directive__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_heading_directive__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tab_directive__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabset_component__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabset_config__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ripple_effect_component__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TabsModule = TabsModule_1 = (function () {
    function TabsModule() {
    }
    TabsModule.forRoot = function () {
        return {
            ngModule: TabsModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_6__tabset_config__["a" /* TabsetConfig */]]
        };
    };
    return TabsModule;
}());
TabsModule = TabsModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__transclude_directive__["a" /* NgTranscludeDirective */], __WEBPACK_IMPORTED_MODULE_4__tab_directive__["a" /* TabDirective */], __WEBPACK_IMPORTED_MODULE_5__tabset_component__["a" /* TabsetComponent */], __WEBPACK_IMPORTED_MODULE_3__tab_heading_directive__["a" /* TabHeadingDirective */], __WEBPACK_IMPORTED_MODULE_7__ripple_effect_component__["a" /* RippleDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__tab_directive__["a" /* TabDirective */], __WEBPACK_IMPORTED_MODULE_5__tabset_component__["a" /* TabsetComponent */], __WEBPACK_IMPORTED_MODULE_3__tab_heading_directive__["a" /* TabHeadingDirective */], __WEBPACK_IMPORTED_MODULE_2__transclude_directive__["a" /* NgTranscludeDirective */], __WEBPACK_IMPORTED_MODULE_7__ripple_effect_component__["a" /* RippleDirective */]]
    })
], TabsModule);

var TabsModule_1;


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chips_component__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialChipsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialChipsModule = (function () {
    function MaterialChipsModule() {
    }
    return MaterialChipsModule;
}());
MaterialChipsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__chips_component__["a" /* MaterialChipsComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__chips_component__["a" /* MaterialChipsComponent */]]
    })
], MaterialChipsModule);



/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timepicker_component__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimePickerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TimePickerModule = (function () {
    function TimePickerModule() {
    }
    return TimePickerModule;
}());
TimePickerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__timepicker_component__["a" /* ClockPickerComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__timepicker_component__["a" /* ClockPickerComponent */]]
    })
], TimePickerModule);



/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return Hammer;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');


/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_118__;

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_119__;

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_120__;

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_121__;

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_122__;

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_123__;

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_124__;

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_125__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=angular-bootstrap-md.umd.js.map