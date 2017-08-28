import { NgModule, SkipSelf, Optional, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { TOAST_CONFIG } from './toast.token';
import { ToastService } from './toast.service';
import { OverlayContainer } from '../overlay/overlay-container';
import { Overlay } from '../overlay/overlay';
var ToastModule = (function () {
    function ToastModule(parentModule) {
        if (parentModule) {
            throw new Error('ToastModule is already loaded. It should only be imported in your application\'s main module.');
        }
    }
    ToastModule.forRoot = function (config) {
        return {
            ngModule: ToastModule,
            providers: [
                { provide: TOAST_CONFIG, useValue: config },
                OverlayContainer,
                Overlay,
                ToastService,
            ]
        };
    };
    return ToastModule;
}());
export { ToastModule };
ToastModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [ToastComponent],
                declarations: [ToastComponent],
                entryComponents: [ToastComponent],
            },] },
];
ToastModule.ctorParameters = function () { return [
    { type: ToastModule, decorators: [{ type: Optional }, { type: SkipSelf },] },
]; };
//# sourceMappingURL=toast.module.js.map