import { Component, Input } from '@angular/core';
import { ProgressbarConfigComponent } from './progressbar.config.component';
var ProgressbarComponent = (function () {
    function ProgressbarComponent(config) {
        Object.assign(this, config);
    }
    return ProgressbarComponent;
}());
export { ProgressbarComponent };
ProgressbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-progressbar',
                templateUrl: './progressbar.component.html'
            },] },
];
ProgressbarComponent.ctorParameters = function () { return [
    { type: ProgressbarConfigComponent, },
]; };
ProgressbarComponent.propDecorators = {
    'animate': [{ type: Input },],
    'max': [{ type: Input },],
    'type': [{ type: Input },],
    'value': [{ type: Input },],
};
//# sourceMappingURL=progressbar.component.js.map