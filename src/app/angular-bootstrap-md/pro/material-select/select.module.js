import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select.component';
import { SelectDropdownComponent } from './select-dropdown.component';
export * from './select.component';
var SelectModule = (function () {
    function SelectModule() {
    }
    return SelectModule;
}());
export { SelectModule };
SelectModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SelectComponent,
                    SelectDropdownComponent
                ],
                exports: [
                    SelectComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule
                ]
            },] },
];
SelectModule.ctorParameters = function () { return []; };
//# sourceMappingURL=select.module.js.map