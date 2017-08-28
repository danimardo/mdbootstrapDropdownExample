import { Component, Input, Output, ElementRef, EventEmitter, HostListener } from '@angular/core';
import { zoomState, restartState } from '../../pro/animations/animations.component';
import 'hammerjs';
var ImageModalComponent = (function () {
    function ImageModalComponent(element) {
        this.element = element;
        this.opened = false;
        this.loading = false;
        this.showRepeat = false;
        this.isMobile = false;
        this.zoomed = 'inactive';
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this.smooth = true;
        this.cancelEvent = new EventEmitter();
        this._element = this.element.nativeElement;
        try {
            document.createEvent('TouchEvent');
            this.isMobile = true;
        }
        catch (err) {
            this.isMobile = false;
            return;
        }
    }
    ImageModalComponent.prototype.toggleZoomed = function () {
        this.zoomed = (this.zoomed === 'inactive') ? 'active' : 'inactive';
        this.zoom = !this.zoom;
    };
    ImageModalComponent.prototype.toggleRestart = function () {
        this.zoomed = (this.zoomed === 'inactive') ? 'active' : 'inactive';
    };
    ImageModalComponent.prototype.ngOnInit = function () {
        this.loading = true;
        if (this.imagePointer >= 0) {
            this.showRepeat = false;
            this.openGallery(this.imagePointer);
        }
        else {
            this.showRepeat = true;
        }
    };
    ImageModalComponent.prototype.closeGallery = function () {
        this.smooth = false;
        this.zoom = false;
        if (screenfull.enabled) {
            screenfull.exit();
        }
        this.opened = false;
        this.cancelEvent.emit(null);
    };
    ImageModalComponent.prototype.prevImage = function () {
        this.loading = true;
        this.currentImageIndex--;
        if (this.currentImageIndex < 0) {
            this.currentImageIndex = this.modalImages.length - 1;
        }
        this.openGallery(this.currentImageIndex);
    };
    ImageModalComponent.prototype.nextImage = function () {
        this.loading = true;
        this.currentImageIndex++;
        if (this.modalImages.length === this.currentImageIndex) {
            this.currentImageIndex = 0;
        }
        this.openGallery(this.currentImageIndex);
    };
    ImageModalComponent.prototype.openGallery = function (index) {
        if (!index) {
            this.currentImageIndex = 1;
        }
        this.currentImageIndex = index;
        this.opened = true;
        for (var i = 0; i < this.modalImages.length; i++) {
            if (i === this.currentImageIndex) {
                this.imgSrc = this.modalImages[i].img;
                this.loading = false;
                break;
            }
        }
    };
    ImageModalComponent.prototype.fullScreen = function () {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    };
    Object.defineProperty(ImageModalComponent.prototype, "is_iPhone_or_iPod", {
        get: function () {
            if (navigator && navigator.userAgent && navigator.userAgent != null) {
                var strUserAgent = navigator.userAgent.toLowerCase();
                var arrMatches = strUserAgent.match(/ipad/);
                if (arrMatches != null) {
                    return true;
                }
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ImageModalComponent.prototype.keyboardControl = function (event) {
        if (event.keyCode === 39) {
            this.nextImage();
        }
        if (event.keyCode === 37) {
            this.prevImage();
        }
    };
    ImageModalComponent.prototype.swipe = function (event, action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.nextImage();
        }
        if (action === this.SWIPE_ACTION.LEFT) {
            this.prevImage();
        }
    };
    return ImageModalComponent;
}());
export { ImageModalComponent };
ImageModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-image-modal',
                animations: [zoomState, restartState],
                templateUrl: 'image-popup.html',
            },] },
];
ImageModalComponent.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
ImageModalComponent.propDecorators = {
    'modalImages': [{ type: Input, args: ['modalImages',] },],
    'imagePointer': [{ type: Input, args: ['imagePointer',] },],
    'fullscreen': [{ type: Input, args: ['fullscreen',] },],
    'zoom': [{ type: Input, args: ['zoom',] },],
    'smooth': [{ type: Input, args: ['smooth',] },],
    'type': [{ type: Input, args: ['type',] },],
    'cancelEvent': [{ type: Output, args: ['cancelEvent',] },],
    'keyboardControl': [{ type: HostListener, args: ['document:keyup', ['$event'],] },],
};
//# sourceMappingURL=image-popup.js.map