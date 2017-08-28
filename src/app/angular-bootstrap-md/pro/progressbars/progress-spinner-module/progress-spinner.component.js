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
import { Component, HostBinding, ChangeDetectionStrategy, Input, ElementRef, NgZone, Renderer, Directive } from '@angular/core';
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
export { MdProgressSpinnerCssMatStylerDirective };
MdProgressSpinnerCssMatStylerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbSpinners], mat-progress-spinner'
            },] },
];
MdProgressSpinnerCssMatStylerDirective.ctorParameters = function () { return []; };
MdProgressSpinnerCssMatStylerDirective.propDecorators = {
    'true': [{ type: HostBinding, args: ['class.mat-progress-spinner',] },],
};
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
export { MdProgressSpinnerComponent };
MdProgressSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-Spinners, mat-progress-spinner',
                templateUrl: 'progress-spinner.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
MdProgressSpinnerComponent.ctorParameters = function () { return [
    { type: NgZone, },
    { type: ElementRef, },
    { type: Renderer, },
]; };
MdProgressSpinnerComponent.propDecorators = {
    'color': [{ type: Input },],
    'value': [{ type: Input }, { type: HostBinding, args: ['attr.aria-valuenow',] },],
    'mode': [{ type: HostBinding, args: ['attr.mode',] }, { type: Input },],
};
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
export { MdSpinnerComponent };
MdSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-spinners, mat-spinner, mdb-progress-spinner',
                templateUrl: 'progress-spinner.component.html',
                styleUrls: ['progress-spinner.component.scss'],
            },] },
];
MdSpinnerComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: NgZone, },
    { type: Renderer, },
]; };
MdSpinnerComponent.propDecorators = {
    'progressbar': [{ type: HostBinding, args: ['role',] },],
    'indeterminate': [{ type: HostBinding, args: ['mode',] },],
    'true': [{ type: HostBinding, args: ['class.mat-spinner',] },],
};
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
//# sourceMappingURL=progress-spinner.component.js.map