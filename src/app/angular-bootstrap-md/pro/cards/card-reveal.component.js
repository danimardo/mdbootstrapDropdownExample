import { Component } from '@angular/core';
import { socialsState } from '../animations/animations.component';
var CardRevealComponent = (function () {
    function CardRevealComponent() {
    }
    CardRevealComponent.prototype.toggle = function () {
        this.show = !this.show;
        this.socials = (this.socials === 'active') ? 'inactive' : 'active';
    };
    return CardRevealComponent;
}());
export { CardRevealComponent };
CardRevealComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card-reveal',
                templateUrl: 'card-reveal.component.html',
                animations: [socialsState]
            },] },
];
CardRevealComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=card-reveal.component.js.map