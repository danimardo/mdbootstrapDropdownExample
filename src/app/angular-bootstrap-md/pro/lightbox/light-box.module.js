import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ImageModalComponent } from './image-popup';
var LightBoxModule = (function () {
    function LightBoxModule() {
    }
    return LightBoxModule;
}());
export { LightBoxModule };
LightBoxModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [ImageModalComponent],
                exports: [ImageModalComponent]
            },] },
];
LightBoxModule.ctorParameters = function () { return []; };
//# sourceMappingURL=light-box.module.js.map