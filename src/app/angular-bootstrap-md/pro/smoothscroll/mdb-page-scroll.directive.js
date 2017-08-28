import { Directive, Input, Output, EventEmitter, Inject, Optional, HostListener } from '@angular/core';
import { Router, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { PageScrollService } from './mdb-page-scroll.service';
import { PageScrollInstance } from './mdb-page-scroll.instance';
import { PageScrollUtilService as Util } from './mdb-page-scroll-util.service';
var PageScrollDirective = (function () {
    function PageScrollDirective(pageScrollService, router, document) {
        this.pageScrollService = pageScrollService;
        this.router = router;
        this.pageScrollHorizontal = null;
        this.pageScrollOffset = null;
        this.pageScrollDuration = null;
        this.pageScrollSpeed = null;
        this.pageScrollEasing = null;
        this.pageScrollAdjustHash = false;
        this.pageScroll = null;
        this.pageScrollFinish = new EventEmitter();
        this.document = document;
    }
    PageScrollDirective.prototype.ngOnChanges = function (changes) {
        this.pageScrollInstance = undefined;
    };
    PageScrollDirective.prototype.ngOnDestroy = function () {
        if (this.pageScrollInstance) {
            this.pageScrollService.stop(this.pageScrollInstance);
        }
        return undefined;
    };
    PageScrollDirective.prototype.generatePageScrollInstance = function () {
        if (Util.isUndefinedOrNull(this.pageScrollInstance)) {
            this.pageScrollInstance = PageScrollInstance.newInstance({
                document: this.document,
                scrollTarget: this.href,
                scrollingViews: null,
                namespace: this.pageScroll,
                verticalScrolling: !this.pageScrollHorizontal,
                pageScrollOffset: this.pageScrollOffset,
                pageScrollInterruptible: this.pageScrollInterruptible,
                pageScrollEasingLogic: this.pageScrollEasing,
                pageScrollDuration: this.pageScrollDuration,
                pageScrollSpeed: this.pageScrollSpeed,
                pageScrollFinishListener: this.pageScrollFinish
            });
        }
        return this.pageScrollInstance;
    };
    PageScrollDirective.prototype.pushRouterState = function () {
        if (this.pageScrollAdjustHash && typeof this.pageScrollInstance.scrollTarget === 'string'
            && this.pageScrollInstance.scrollTarget.substr(0, 1) === '#') {
            this.router.navigate([], {
                fragment: this.pageScrollInstance.scrollTarget.substr(1),
                preserveQueryParams: true
            });
        }
    };
    PageScrollDirective.prototype.scroll = function () {
        var pageScrollInstance = this.generatePageScrollInstance();
        this.pushRouterState();
        this.pageScrollService.start(pageScrollInstance);
    };
    PageScrollDirective.prototype.handleClick = function (clickEvent) {
        var _this = this;
        if (this.routerLink && this.router !== null && this.router !== undefined) {
            var urlTree = void 0;
            if (typeof this.routerLink === 'string') {
                urlTree = this.router.parseUrl(this.routerLink);
            }
            else {
                urlTree = this.router.createUrlTree(this.routerLink);
            }
            if (!this.router.isActive(urlTree, true)) {
                var subscription_1 = this.router.events.subscribe(function (routerEvent) {
                    if (routerEvent instanceof NavigationEnd) {
                        subscription_1.unsubscribe();
                        _this.scroll();
                    }
                    else if (routerEvent instanceof NavigationError || routerEvent instanceof NavigationCancel) {
                        subscription_1.unsubscribe();
                    }
                });
                return false;
            }
        }
        this.scroll();
        return false;
    };
    return PageScrollDirective;
}());
export { PageScrollDirective };
PageScrollDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbPageScroll]'
            },] },
];
PageScrollDirective.ctorParameters = function () { return [
    { type: PageScrollService, },
    { type: Router, decorators: [{ type: Optional },] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
]; };
PageScrollDirective.propDecorators = {
    'routerLink': [{ type: Input },],
    'href': [{ type: Input },],
    'pageScrollHorizontal': [{ type: Input },],
    'pageScrollOffset': [{ type: Input },],
    'pageScrollDuration': [{ type: Input },],
    'pageScrollSpeed': [{ type: Input },],
    'pageScrollEasing': [{ type: Input },],
    'pageScrollInterruptible': [{ type: Input },],
    'pageScrollAdjustHash': [{ type: Input },],
    'pageScroll': [{ type: Input },],
    'pageScrollFinish': [{ type: Output },],
    'handleClick': [{ type: HostListener, args: ['click', ['$event'],] },],
};
//# sourceMappingURL=mdb-page-scroll.directive.js.map