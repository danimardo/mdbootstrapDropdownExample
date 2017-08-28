import { Directive, Input, ViewContainerRef } from '@angular/core';
var NgTranscludeDirective = (function () {
    function NgTranscludeDirective(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "mdbNgTransclude", {
        get: function () {
            return this._ngTransclude;
        },
        set: function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    return NgTranscludeDirective;
}());
export { NgTranscludeDirective };
NgTranscludeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbNgTransclude]'
            },] },
];
NgTranscludeDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
NgTranscludeDirective.propDecorators = {
    'mdbNgTransclude': [{ type: Input },],
};
//# sourceMappingURL=transclude.directive.js.map