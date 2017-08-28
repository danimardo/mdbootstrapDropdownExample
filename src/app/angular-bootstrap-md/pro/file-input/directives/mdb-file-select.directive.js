import { Directive, ElementRef, EventEmitter, Input, Output, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { MDBUploaderService } from '../classes/mdb-uploader.class';
var MDBFileSelectDirective = (function () {
    function MDBFileSelectDirective(platform_id, elementRef) {
        var _this = this;
        this.platform_id = platform_id;
        this.elementRef = elementRef;
        this.isServer = isPlatformServer(this.platform_id);
        this.fileListener = function () {
            _this.upload.handleFiles(_this.el.files);
        };
        this.upload = new MDBUploaderService();
        this.uploadOutput = new EventEmitter();
    }
    MDBFileSelectDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isServer) {
            return;
        }
        this.el = this.elementRef.nativeElement;
        this.el.addEventListener('change', this.fileListener, false);
        this.upload.serviceEvents.subscribe(function (event) {
            _this.uploadOutput.emit(event);
        });
        if (this.uploadInput instanceof EventEmitter) {
            this.upload.initInputEvents(this.uploadInput);
        }
    };
    MDBFileSelectDirective.prototype.ngOnDestroy = function () {
        if (this.isServer) {
            return;
        }
        this.el.removeEventListener('change', this.fileListener, false);
        this.uploadInput.unsubscribe();
    };
    return MDBFileSelectDirective;
}());
export { MDBFileSelectDirective };
MDBFileSelectDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbFileSelect]'
            },] },
];
MDBFileSelectDirective.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    { type: ElementRef, },
]; };
MDBFileSelectDirective.propDecorators = {
    'uploadInput': [{ type: Input },],
    'uploadOutput': [{ type: Output },],
};
//# sourceMappingURL=mdb-file-select.directive.js.map