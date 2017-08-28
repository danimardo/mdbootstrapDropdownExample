import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ClockPickerComponent } from './timepicker.component';
var TimePickerModule = (function () {
    function TimePickerModule() {
    }
    return TimePickerModule;
}());
export { TimePickerModule };
TimePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [ClockPickerComponent],
                exports: [ClockPickerComponent]
            },] },
];
TimePickerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=timepicker.module.js.map