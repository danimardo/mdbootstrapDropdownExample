import { Component, trigger, state, transition, animate, style, HostBinding, HostListener, ApplicationRef, } from '@angular/core';
import { ToastPackage } from './toast.config';
import { ToastService } from './toast.service';
var ToastComponent = (function () {
    function ToastComponent(toastService, toastPackage, appRef) {
        var _this = this;
        this.toastService = toastService;
        this.toastPackage = toastPackage;
        this.appRef = appRef;
        this.width = -1;
        this.toastClasses = '';
        this.state = 'inactive';
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.toastClasses = toastPackage.toastType + " " + toastPackage.config.toastClass;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
            _this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
            _this.remove();
        });
    }
    ToastComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    };
    ToastComponent.prototype.activateToast = function () {
        var _this = this;
        this.state = 'active';
        if (this.options.timeOut !== 0) {
            this.timeout = setTimeout(function () {
                _this.remove();
            }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
            }
        }
        if (this.options.onActivateTick) {
            this.appRef.tick();
        }
    };
    ToastComponent.prototype.updateProgress = function () {
        if (this.width === 0) {
            return;
        }
        var now = new Date().getTime();
        var remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.width <= 0) {
            this.width = 0;
        }
    };
    ToastComponent.prototype.remove = function () {
        var _this = this;
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = 'removed';
        this.timeout = setTimeout(function () {
            return _this.toastService.remove(_this.toastPackage.toastId);
        }, 300);
    };
    ToastComponent.prototype.tapToast = function () {
        if (this.state === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    };
    ToastComponent.prototype.stickAround = function () {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        clearInterval(this.intervalId);
        this.width = 0;
    };
    ToastComponent.prototype.delayedHideToast = function () {
        var _this = this;
        if (+this.options.extendedTimeOut === 0 || this.state === 'removed') {
            return;
        }
        this.timeout = setTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
        this.options.timeOut = +this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + this.options.timeOut;
        this.width = 100;
        if (this.options.progressBar) {
            this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    return ToastComponent;
}());
export { ToastComponent };
ToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-toast-component',
                templateUrl: './toast.component.html',
                animations: [
                    trigger('flyInOut', [
                        state('inactive', style({
                            display: 'none',
                            opacity: 0
                        })),
                        state('active', style({ opacity: .5 })),
                        state('removed', style({ opacity: 0 })),
                        transition('inactive => active', animate('300ms ease-in')),
                        transition('active => removed', animate('300ms ease-in')),
                    ]),
                ],
            },] },
];
ToastComponent.ctorParameters = function () { return [
    { type: ToastService, },
    { type: ToastPackage, },
    { type: ApplicationRef, },
]; };
ToastComponent.propDecorators = {
    'toastClasses': [{ type: HostBinding, args: ['class',] },],
    'state': [{ type: HostBinding, args: ['@flyInOut',] },],
    'tapToast': [{ type: HostListener, args: ['click',] },],
    'stickAround': [{ type: HostListener, args: ['mouseenter',] },],
    'delayedHideToast': [{ type: HostListener, args: ['mouseleave',] },],
};
//# sourceMappingURL=toast.component.js.map