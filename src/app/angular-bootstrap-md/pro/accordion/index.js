import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqueezeBoxComponent } from './components/squeezebox';
import { SBItemComponent } from './components/sb-item';
import { SBItemHeadComponent } from './components/sb-item.head';
import { SBItemBodyComponent } from './components/sb-item.body';
export var SQUEEZEBOX_COMPONENTS = [SqueezeBoxComponent, SBItemComponent, SBItemHeadComponent, SBItemBodyComponent];
var SqueezeBoxModule = (function () {
    function SqueezeBoxModule() {
    }
    return SqueezeBoxModule;
}());
export { SqueezeBoxModule };
SqueezeBoxModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [SQUEEZEBOX_COMPONENTS],
                exports: [SQUEEZEBOX_COMPONENTS]
            },] },
];
SqueezeBoxModule.ctorParameters = function () { return []; };
export * from './components/sb-item';
export * from './components/sb-item.head';
export * from './components/sb-item.body';
export * from './components/squeezebox';
//# sourceMappingURL=index.js.map