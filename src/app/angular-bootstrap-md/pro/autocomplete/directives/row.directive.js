import { Directive, ElementRef, Host, HostListener, Input, Renderer } from '@angular/core';
import { MdbDropdownDirective, CtrRowItem } from './dropdown.directive';
var MdbRowDirective = (function () {
    function MdbRowDirective(el, renderer, dropdown) {
        this.el = el;
        this.renderer = renderer;
        this.dropdown = dropdown;
        this.selected = false;
    }
    MdbRowDirective.prototype.ngOnInit = function () {
        this.dropdown.registerRow(new CtrRowItem(this, this._rowIndex));
    };
    Object.defineProperty(MdbRowDirective.prototype, "mdbRow", {
        set: function (index) {
            this._rowIndex = index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbRowDirective.prototype, "dataItem", {
        set: function (item) {
            this._item = item;
        },
        enumerable: true,
        configurable: true
    });
    MdbRowDirective.prototype.onClick = function (event) {
        this.dropdown.onSelected(this._item);
    };
    MdbRowDirective.prototype.onMouseEnter = function (event) {
        this.dropdown.highlightRow(this._rowIndex);
    };
    MdbRowDirective.prototype.setHighlighted = function (selected) {
        this.selected = selected;
        this.renderer.setElementClass(this.el.nativeElement, 'completer-selected-row', this.selected);
    };
    MdbRowDirective.prototype.getNativeElement = function () {
        return this.el.nativeElement;
    };
    MdbRowDirective.prototype.getDataItem = function () {
        return this._item;
    };
    return MdbRowDirective;
}());
export { MdbRowDirective };
MdbRowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbRow]',
            },] },
];
MdbRowDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
    { type: MdbDropdownDirective, decorators: [{ type: Host },] },
]; };
MdbRowDirective.propDecorators = {
    'mdbRow': [{ type: Input },],
    'dataItem': [{ type: Input },],
    'onClick': [{ type: HostListener, args: ['click', ['$event'],] },],
    'onMouseEnter': [{ type: HostListener, args: ['mouseenter', ['$event'],] },],
};
//# sourceMappingURL=row.directive.js.map