import { Component, Input, ContentChildren, forwardRef } from '@angular/core';
import { SBItemComponent } from './sb-item';
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
export { SqueezeBoxComponent };
SqueezeBoxComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'squeezebox',
                selector: 'mdb-squeezebox',
                templateUrl: 'squeezebox.html'
            },] },
];
SqueezeBoxComponent.ctorParameters = function () { return []; };
SqueezeBoxComponent.propDecorators = {
    'multiple': [{ type: Input },],
    'items': [{ type: ContentChildren, args: [forwardRef(function () { return SBItemComponent; }),] },],
};
//# sourceMappingURL=squeezebox.js.map