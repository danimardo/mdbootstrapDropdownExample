import { NgModule } from '@angular/core';
import { MDBFileDropDirective } from '../directives/mdb-file-drop.directive';
import { MDBFileSelectDirective } from '../directives/mdb-file-select.directive';
var MDBUploaderModule = (function () {
    function MDBUploaderModule() {
    }
    return MDBUploaderModule;
}());
export { MDBUploaderModule };
MDBUploaderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MDBFileSelectDirective,
                    MDBFileDropDirective
                ],
                exports: [
                    MDBFileSelectDirective,
                    MDBFileDropDirective
                ]
            },] },
];
MDBUploaderModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdb-uploader.module.js.map