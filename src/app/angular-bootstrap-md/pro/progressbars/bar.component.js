import { Component, Host, Input } from '@angular/core';
import { ProgressDirective } from './progress.directive';
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
export { BarComponent };
BarComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-bar',
                templateUrl: './bar.component.html'
            },] },
];
BarComponent.ctorParameters = function () { return [
    { type: ProgressDirective, decorators: [{ type: Host },] },
]; };
BarComponent.propDecorators = {
    'type': [{ type: Input },],
    'value': [{ type: Input },],
};
//# sourceMappingURL=bar.component.js.map