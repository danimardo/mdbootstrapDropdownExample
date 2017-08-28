import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';
var CharCounterDirective = (function () {
    function CharCounterDirective(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.length = 20;
    }
    CharCounterDirective.prototype.ngOnInit = function () {
        this.textContainer = this._renderer.createElement(this._elRef.nativeElement.parentElement, 'p');
        this._renderer.setElementClass(this.textContainer, 'chars', true);
        this.textContainer.innerHTML = '0/' + this.length;
        this._renderer.setElementStyle(this.textContainer, 'display', 'none');
    };
    CharCounterDirective.prototype.onKeyUp = function () {
        this.textContainer.innerHTML = this._elRef.nativeElement.value.length + '/' + this.length;
        if (this._elRef.nativeElement.value.length > this.length) {
            this._renderer.setElementClass(this._elRef.nativeElement, 'invalid', true);
        }
        else {
            this._renderer.setElementClass(this._elRef.nativeElement, 'invalid', false);
        }
    };
    CharCounterDirective.prototype.hide = function () {
        this._renderer.setElementStyle(this.textContainer, 'display', 'none');
    };
    CharCounterDirective.prototype.show = function () {
        this._renderer.setElementStyle(this.textContainer, 'display', 'block');
    };
    return CharCounterDirective;
}());
export { CharCounterDirective };
CharCounterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbCharCounter]'
            },] },
];
CharCounterDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
CharCounterDirective.propDecorators = {
    'length': [{ type: Input },],
    'onKeyUp': [{ type: HostListener, args: ['keyup', ['$event'],] },],
    'hide': [{ type: HostListener, args: ['blur', ['$event'],] },],
    'show': [{ type: HostListener, args: ['focus', ['$event'],] },],
};
//# sourceMappingURL=char-counter.directive.js.map