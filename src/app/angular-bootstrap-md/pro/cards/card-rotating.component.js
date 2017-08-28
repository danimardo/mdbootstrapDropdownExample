import { Component } from '@angular/core';
var CardRotatingComponent = (function () {
    function CardRotatingComponent() {
        this.rotate = false;
    }
    CardRotatingComponent.prototype.toggle = function () {
        this.rotate = !this.rotate;
    };
    return CardRotatingComponent;
}());
export { CardRotatingComponent };
CardRotatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card-rotating',
                templateUrl: 'card-rotating.component.html'
            },] },
];
CardRotatingComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=card-rotating.component.js.map