import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarComponent } from './bar.component';
import { ProgressDirective } from './progress.directive';
import { ProgressbarComponent } from './progressbar.component';
import { ProgressbarConfigComponent } from './progressbar.config.component';
var ProgressbarModule = (function () {
    function ProgressbarModule() {
    }
    ProgressbarModule.forRoot = function () {
        return { ngModule: ProgressbarModule, providers: [ProgressbarConfigComponent] };
    };
    return ProgressbarModule;
}());
export { ProgressbarModule };
ProgressbarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [ProgressDirective, BarComponent, ProgressbarComponent],
                exports: [ProgressDirective, BarComponent, ProgressbarComponent]
            },] },
];
ProgressbarModule.ctorParameters = function () { return []; };
//# sourceMappingURL=progressbar.module.js.map