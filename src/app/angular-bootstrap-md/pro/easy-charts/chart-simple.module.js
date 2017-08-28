import { NgModule } from '@angular/core';
import { SimpleChartComponent } from './chart-simple.component';
import { EasyPieChartComponent } from './chart-smallpie.component';
var ChartSimpleModule = (function () {
    function ChartSimpleModule() {
    }
    return ChartSimpleModule;
}());
export { ChartSimpleModule };
ChartSimpleModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SimpleChartComponent, EasyPieChartComponent
                ],
                exports: [
                    SimpleChartComponent, EasyPieChartComponent
                ],
                imports: []
            },] },
];
ChartSimpleModule.ctorParameters = function () { return []; };
//# sourceMappingURL=chart-simple.module.js.map