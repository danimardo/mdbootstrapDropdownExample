import { Component, ViewChild, Input, ElementRef, Renderer, HostListener } from '@angular/core';
var SidenavComponent = (function () {
    function SidenavComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.fixed = true;
    }
    SidenavComponent.prototype.ngAfterViewInit = function () {
        this.windwosWidth = window.innerWidth;
        if (this.fixed) {
            this.renderer.setElementClass(document.body, 'fixed-sn', true);
            if (this.windwosWidth < 1441) {
                this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                this.setShown(false);
            }
            else {
                this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                this.setShown(true);
            }
        }
        else {
            this.renderer.setElementClass(document.body, 'hidden-sn', true);
            this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
            this.setShown(false);
        }
    };
    SidenavComponent.prototype.windwosResize = function () {
        this.windwosWidth = window.innerWidth;
        if (this.fixed) {
            if (this.windwosWidth < 1441 && this.shown) {
                this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                this.setShown(false);
            }
            else {
                this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                this.setShown(true);
            }
            if (this.windwosWidth > 1440 && this.shown) {
                this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                this.hideOverlay();
                this.setShown(false);
            }
        }
        else {
            if (this.windwosWidth > 1440) {
                this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                this.hideOverlay();
                this.setShown(false);
            }
        }
    };
    ;
    SidenavComponent.prototype.show = function () {
        if (this.fixed) {
            if (this.windwosWidth < 1441) {
                this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                this.setShown(true);
                this.showOverlay();
            }
            else {
                this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                this.setShown(true);
            }
        }
        else {
            this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
            this.setShown(true);
            this.showOverlay();
        }
    };
    SidenavComponent.prototype.hide = function () {
        if (this.fixed) {
            if (this.windwosWidth < 1441) {
                this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                this.setShown(false);
                this.hideOverlay();
            }
            else {
                this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                this.setShown(false);
            }
        }
        else {
            this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
            this.setShown(false);
            this.hideOverlay();
        }
    };
    SidenavComponent.prototype.toggle = function () {
        if (this.shown) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    SidenavComponent.prototype.showOverlay = function () {
        var _this = this;
        this.renderer.setElementStyle(this.overlay.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.renderer.setElementStyle(_this.overlay.nativeElement, 'opacity', '1');
        }, 0);
    };
    SidenavComponent.prototype.hideOverlay = function () {
        var _this = this;
        this.renderer.setElementStyle(this.overlay.nativeElement, 'opacity', '0');
        setTimeout(function () {
            _this.renderer.setElementStyle(_this.overlay.nativeElement, 'display', 'none');
        }, 200);
    };
    SidenavComponent.prototype.setShown = function (value) {
        var _this = this;
        setTimeout(function () {
            _this.shown = value;
        }, 510);
    };
    return SidenavComponent;
}());
export { SidenavComponent };
SidenavComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-sidenav',
                templateUrl: 'sidenav.component.html'
            },] },
];
SidenavComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
SidenavComponent.propDecorators = {
    'class': [{ type: Input },],
    'fixed': [{ type: Input },],
    'sideNav': [{ type: ViewChild, args: ['sidenav',] },],
    'overlay': [{ type: ViewChild, args: ['overlay',] },],
    'windwosResize': [{ type: HostListener, args: ['window:resize',] },],
};
//# sourceMappingURL=sidenav.component.js.map