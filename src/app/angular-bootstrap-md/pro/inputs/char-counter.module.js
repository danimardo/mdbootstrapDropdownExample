import { NgModule } from '@angular/core';
import { CharCounterDirective } from './char-counter.directive';
var CharCounterModule = (function () {
    function CharCounterModule() {
    }
    CharCounterModule.forRoot = function () {
        return { ngModule: CharCounterModule, providers: [] };
    };
    return CharCounterModule;
}());
export { CharCounterModule };
CharCounterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CharCounterDirective],
                exports: [CharCounterDirective]
            },] },
];
CharCounterModule.ctorParameters = function () { return []; };
//# sourceMappingURL=char-counter.module.js.map