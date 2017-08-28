import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progressbar.component';
var MdProgressBarModule = (function () {
    function MdProgressBarModule() {
    }
    MdProgressBarModule.forRoot = function () {
        return {
            ngModule: MdProgressBarModule,
            providers: []
        };
    };
    return MdProgressBarModule;
}());
export { MdProgressBarModule };
MdProgressBarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [ProgressBarComponent],
                declarations: [ProgressBarComponent],
            },] },
];
MdProgressBarModule.ctorParameters = function () { return []; };
export * from './progressbar.component';
//# sourceMappingURL=index.js.map