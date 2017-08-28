import { Component } from '@angular/core';
import { SBItemComponent } from './sb-item';
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
export { SBItemHeadComponent };
SBItemHeadComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItemHead',
                selector: 'mdb-item-head',
                templateUrl: 'sb-item.head.html'
            },] },
];
SBItemHeadComponent.ctorParameters = function () { return [
    { type: SBItemComponent, },
]; };
//# sourceMappingURL=sb-item.head.js.map