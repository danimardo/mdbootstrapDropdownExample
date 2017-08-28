import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRevealComponent } from './card-reveal.component';
import { CardRotatingComponent } from './card-rotating.component';
var CardsModule = (function () {
    function CardsModule() {
    }
    CardsModule.forRoot = function () {
        return { ngModule: CardsModule, providers: [] };
    };
    return CardsModule;
}());
export { CardsModule };
CardsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [CardRevealComponent, CardRotatingComponent],
                exports: [CardRevealComponent, CardRotatingComponent]
            },] },
];
CardsModule.ctorParameters = function () { return []; };
//# sourceMappingURL=cards.module.js.map