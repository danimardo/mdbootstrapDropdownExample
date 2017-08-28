import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageScrollService } from './mdb-page-scroll.service';
import { PageScrollDirective } from './mdb-page-scroll.directive';
var MDBPageScrollModule = (function () {
    function MDBPageScrollModule() {
    }
    MDBPageScrollModule.forRoot = function () {
        return {
            ngModule: MDBPageScrollModule,
            providers: [
                { provide: PageScrollService, useClass: PageScrollService }
            ]
        };
    };
    return MDBPageScrollModule;
}());
export { MDBPageScrollModule };
MDBPageScrollModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [PageScrollDirective],
                exports: [PageScrollDirective]
            },] },
];
MDBPageScrollModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdb-page-scroll.module.js.map