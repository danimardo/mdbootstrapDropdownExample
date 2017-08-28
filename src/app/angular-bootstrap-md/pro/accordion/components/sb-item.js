import { Component, ContentChild, Input, Inject, forwardRef } from '@angular/core';
import { SBItemBodyComponent } from './sb-item.body';
import { SqueezeBoxComponent } from './squeezebox';
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
export { SBItemComponent };
SBItemComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItem',
                selector: 'mdb-item',
                templateUrl: 'sb-item.html'
            },] },
];
SBItemComponent.ctorParameters = function () { return [
    { type: SqueezeBoxComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return SqueezeBoxComponent; }),] },] },
]; };
SBItemComponent.propDecorators = {
    'collapsed': [{ type: Input },],
    'body': [{ type: ContentChild, args: [SBItemBodyComponent,] },],
};
//# sourceMappingURL=sb-item.js.map