import { Component, Renderer, ViewChild } from '@angular/core';
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
export { SBItemBodyComponent };
SBItemBodyComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItemBody',
                selector: 'mdb-item-body',
                templateUrl: 'sb-item.body.html'
            },] },
];
SBItemBodyComponent.ctorParameters = function () { return [
    { type: Renderer, },
]; };
SBItemBodyComponent.propDecorators = {
    'bodyEl': [{ type: ViewChild, args: ['body',] },],
};
//# sourceMappingURL=sb-item.body.js.map