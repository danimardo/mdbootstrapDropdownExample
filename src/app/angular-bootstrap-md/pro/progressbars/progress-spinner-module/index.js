import { NgModule } from '@angular/core';
import { MdProgressSpinnerComponent, MdSpinnerComponent, MdProgressSpinnerCssMatStylerDirective, } from './progress-spinner.component';
import { ProgressSpinnerComponent } from '../progress-spinner.component';
var MdProgressSpinnerModule = (function () {
    function MdProgressSpinnerModule() {
    }
    MdProgressSpinnerModule.forRoot = function () {
        return {
            ngModule: MdProgressSpinnerModule,
            providers: []
        };
    };
    return MdProgressSpinnerModule;
}());
MdProgressSpinnerModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    MdProgressSpinnerComponent,
                    MdSpinnerComponent,
                    MdProgressSpinnerCssMatStylerDirective,
                    ProgressSpinnerComponent
                ],
                declarations: [
                    MdProgressSpinnerComponent,
                    MdSpinnerComponent,
                    MdProgressSpinnerCssMatStylerDirective,
                    ProgressSpinnerComponent
                ],
            },] },
];
MdProgressSpinnerModule.ctorParameters = function () { return []; };
export { MdProgressSpinnerModule };
export * from './progress-spinner.component';
//# sourceMappingURL=index.js.map