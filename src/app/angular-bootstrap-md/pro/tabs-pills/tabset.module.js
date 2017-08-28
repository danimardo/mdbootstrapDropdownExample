import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgTranscludeDirective } from './transclude.directive';
import { TabHeadingDirective } from './tab-heading.directive';
import { TabDirective } from './tab.directive';
import { TabsetComponent } from './tabset.component';
import { TabsetConfig } from './tabset.config';
import { RippleDirective } from './ripple-effect.component';
var TabsModule = (function () {
    function TabsModule() {
    }
    TabsModule.forRoot = function () {
        return {
            ngModule: TabsModule,
            providers: [TabsetConfig]
        };
    };
    return TabsModule;
}());
export { TabsModule };
TabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [NgTranscludeDirective, TabDirective, TabsetComponent, TabHeadingDirective, RippleDirective],
                exports: [TabDirective, TabsetComponent, TabHeadingDirective, NgTranscludeDirective, RippleDirective]
            },] },
];
TabsModule.ctorParameters = function () { return []; };
//# sourceMappingURL=tabset.module.js.map