import { Directive, ElementRef, Renderer, Input } from '@angular/core';
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
export { FocusDirective };
FocusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbDpFocus]'
            },] },
];
FocusDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
FocusDirective.propDecorators = {
    'value': [{ type: Input },],
};
//# sourceMappingURL=datepickerFocus.directive.js.map