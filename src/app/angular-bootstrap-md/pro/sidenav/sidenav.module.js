import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
var SidenavModule = (function () {
    function SidenavModule() {
    }
    return SidenavModule;
}());
export { SidenavModule };
SidenavModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SidenavComponent,
                ],
                exports: [
                    SidenavComponent
                ],
                imports: [
                    CommonModule,
                ]
            },] },
];
SidenavModule.ctorParameters = function () { return []; };
//# sourceMappingURL=sidenav.module.js.map