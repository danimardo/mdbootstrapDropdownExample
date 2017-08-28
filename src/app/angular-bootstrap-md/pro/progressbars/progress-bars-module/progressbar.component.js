import { Component, ChangeDetectionStrategy, HostBinding, Input, } from '@angular/core';
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
export { ProgressBarComponent };
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-progress-bar, mat-progress-bar',
                templateUrl: './progressbar.component.html',
                styleUrls: ['./progressbar.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
ProgressBarComponent.ctorParameters = function () { return []; };
ProgressBarComponent.propDecorators = {
    'color': [{ type: Input },],
    'value': [{ type: Input }, { type: HostBinding, args: ['attr.aria-valuenow',] },],
    'bufferValue': [{ type: Input },],
    'mode': [{ type: Input }, { type: HostBinding, args: ['attr.mode',] },],
};
function clamp(v, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return Math.max(min, Math.min(max, v));
}
//# sourceMappingURL=progressbar.component.js.map