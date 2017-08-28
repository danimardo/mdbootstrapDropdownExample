import { Component, Input } from '@angular/core';
var SimpleChartComponent = (function () {
    function SimpleChartComponent() {
        this.options = {
            barColor: null,
            trackColor: '#f9f9f9',
            scaleColor: '#dfe0e0',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 3,
            size: 110,
            rotate: 0,
            animate: {
                duration: 1000,
                enabled: true
            }
        };
    }
    SimpleChartComponent.prototype.ngOnInit = function () {
        this.options.barColor = '#' + this.barColor;
    };
    return SimpleChartComponent;
}());
export { SimpleChartComponent };
SimpleChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-simple-chart',
                templateUrl: './chart-simple.component.html',
                styles: []
            },] },
];
SimpleChartComponent.ctorParameters = function () { return []; };
SimpleChartComponent.propDecorators = {
    'percent': [{ type: Input, args: ['percent',] },],
    'barColor': [{ type: Input, args: ['barColor',] },],
};
//# sourceMappingURL=chart-simple.component.js.map