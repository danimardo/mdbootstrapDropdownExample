import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialChipsComponent } from './chips.component';
var MaterialChipsModule = (function () {
    function MaterialChipsModule() {
    }
    return MaterialChipsModule;
}());
export { MaterialChipsModule };
MaterialChipsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [MaterialChipsComponent],
                exports: [MaterialChipsComponent]
            },] },
];
MaterialChipsModule.ctorParameters = function () { return []; };
//# sourceMappingURL=chips.module.js.map