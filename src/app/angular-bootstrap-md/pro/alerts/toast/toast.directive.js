import { NgModule, Directive, ElementRef } from '@angular/core';
var ToastContainerDirective = (function () {
    function ToastContainerDirective(el) {
        this.el = el;
    }
    ToastContainerDirective.prototype.getContainerElement = function () {
        return this.el.nativeElement;
    };
    return ToastContainerDirective;
}());
export { ToastContainerDirective };
ToastContainerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbToastContainer]',
                exportAs: 'mdb-toast-container',
            },] },
];
ToastContainerDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
var ToastContainerModule = (function () {
    function ToastContainerModule() {
    }
    ToastContainerModule.forRoot = function () {
        return {
            ngModule: ToastContainerModule,
            providers: []
        };
    };
    return ToastContainerModule;
}());
export { ToastContainerModule };
ToastContainerModule.decorators = [
    { type: NgModule, args: [{
                exports: [ToastContainerDirective],
                declarations: [ToastContainerDirective],
            },] },
];
ToastContainerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=toast.directive.js.map