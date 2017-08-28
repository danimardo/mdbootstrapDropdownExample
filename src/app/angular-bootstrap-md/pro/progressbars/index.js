import { NgModule } from '@angular/core';
export { BarComponent } from './bar.component';
export { ProgressDirective } from './progress.directive';
export { ProgressbarComponent } from './progressbar.component';
export { ProgressbarModule } from './progressbar.module';
export { ProgressbarConfigComponent } from './progressbar.config.component';
export { ProgressSpinnerComponent } from './progress-spinner.component';
import { ProgressbarModule } from './progressbar.module';
import { MdProgressSpinnerModule } from './progress-spinner-module/';
import { MdProgressBarModule } from './progress-bars-module/';
var MATERIAL_MODULES = [
    MdProgressBarModule,
    MdProgressSpinnerModule,
    ProgressbarModule
];
var MaterialRootModule = (function () {
    function MaterialRootModule() {
    }
    return MaterialRootModule;
}());
export { MaterialRootModule };
MaterialRootModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MdProgressBarModule.forRoot(),
                    MdProgressSpinnerModule.forRoot(),
                    ProgressbarModule.forRoot()
                ],
                exports: MATERIAL_MODULES,
            },] },
];
MaterialRootModule.ctorParameters = function () { return []; };
var ProgressBars = (function () {
    function ProgressBars() {
    }
    ProgressBars.forRoot = function () {
        return { ngModule: MaterialRootModule };
    };
    return ProgressBars;
}());
export { ProgressBars };
ProgressBars.decorators = [
    { type: NgModule, args: [{
                imports: MATERIAL_MODULES,
                exports: MATERIAL_MODULES,
            },] },
];
ProgressBars.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map