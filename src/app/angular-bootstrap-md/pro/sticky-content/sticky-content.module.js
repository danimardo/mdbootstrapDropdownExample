import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdbStickyDirective } from './sticky-content.directive';
export { MdbStickyDirective };
var MdbStickyModule = (function () {
    function MdbStickyModule() {
    }
    return MdbStickyModule;
}());
export { MdbStickyModule };
MdbStickyModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [MdbStickyDirective],
                exports: [MdbStickyDirective]
            },] },
];
MdbStickyModule.ctorParameters = function () { return []; };
//# sourceMappingURL=sticky-content.module.js.map