'use strict';
import { Component, Input } from '@angular/core';
var CompleterListItemComponent = (function () {
    function CompleterListItemComponent() {
        this.parts = [];
    }
    CompleterListItemComponent.prototype.ngOnInit = function () {
        if (!this.searchStr) {
            this.parts.push({ isMatch: false, text: this.text });
            return;
        }
        var matchStr = this.text.toLowerCase();
        var matchPos = matchStr.indexOf(this.searchStr.toLowerCase());
        var startIndex = 0;
        while (matchPos >= 0) {
            var matchText = this.text.slice(matchPos, matchPos + this.searchStr.length);
            if (matchPos === 0) {
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length;
            }
            else if (matchPos > 0) {
                var matchPart = this.text.slice(startIndex, matchPos);
                this.parts.push({ isMatch: false, text: matchPart });
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length + matchPart.length;
            }
            matchPos = matchStr.indexOf(this.searchStr.toLowerCase(), startIndex);
        }
        if (startIndex < this.text.length) {
            this.parts.push({ isMatch: false, text: this.text.slice(startIndex, this.text.length) });
        }
    };
    return CompleterListItemComponent;
}());
export { CompleterListItemComponent };
CompleterListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-completer-list-item',
                templateUrl: 'completer-list-item.component.html'
            },] },
];
CompleterListItemComponent.ctorParameters = function () { return []; };
CompleterListItemComponent.propDecorators = {
    'text': [{ type: Input },],
    'searchStr': [{ type: Input },],
    'matchClass': [{ type: Input },],
    'type': [{ type: Input },],
};
//# sourceMappingURL=completer-list-item.component.js.map