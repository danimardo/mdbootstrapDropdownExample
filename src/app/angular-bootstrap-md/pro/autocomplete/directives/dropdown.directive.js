import { Directive, ElementRef, Host, HostListener } from '@angular/core';
import { MdbCompleterDirective } from './completer.directive';
var CtrRowItem = (function () {
    function CtrRowItem(row, index) {
        this.row = row;
        this.index = index;
    }
    return CtrRowItem;
}());
export { CtrRowItem };
var MdbDropdownDirective = (function () {
    function MdbDropdownDirective(completer, el) {
        this.completer = completer;
        this.el = el;
        this.rows = [];
        this.completer.registerDropdown(this);
    }
    MdbDropdownDirective.prototype.ngOnInit = function () {
        var css = getComputedStyle(this.el.nativeElement);
        this.isScrollOn = css.maxHeight && css.overflowY === 'auto';
    };
    MdbDropdownDirective.prototype.ngOnDestroy = function () {
        this.completer.registerDropdown(null);
    };
    MdbDropdownDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        var autoHighlightIndex = this.completer.autoHighlightIndex;
        if (autoHighlightIndex) {
            setTimeout(function () {
                _this.highlightRow(autoHighlightIndex);
            }, 0);
        }
    };
    MdbDropdownDirective.prototype.onMouseDown = function (event) {
        var _this = this;
        this.completer.cancelBlur(true);
        setTimeout(function () {
            _this.completer.cancelBlur(false);
        }, 0);
    };
    MdbDropdownDirective.prototype.registerRow = function (row) {
        this.rows.push(row);
    };
    MdbDropdownDirective.prototype.highlightRow = function (index) {
        var highlighted = this.rows.find(function (row) { return row.index === index; });
        if (index < 0) {
            if (this.currHighlighted) {
                this.currHighlighted.row.setHighlighted(false);
            }
            this.currHighlighted = undefined;
            this.completer.onHighlighted(null);
            return;
        }
        if (!highlighted) {
            return;
        }
        if (this.currHighlighted) {
            this.currHighlighted.row.setHighlighted(false);
        }
        this.currHighlighted = highlighted;
        this.currHighlighted.row.setHighlighted(true);
        this.completer.onHighlighted(this.currHighlighted.row.getDataItem());
        if (this.isScrollOn && this.currHighlighted) {
            var rowTop = this.dropdownRowTop();
            if (rowTop < 0) {
                this.dropdownScrollTopTo(rowTop - 1);
            }
            else {
                var row = this.currHighlighted.row.getNativeElement();
                if (this.dropdownHeight() < row.getBoundingClientRect().bottom) {
                    this.dropdownScrollTopTo(this.dropdownRowOffsetHeight(row));
                    if (this.el.nativeElement.getBoundingClientRect().bottom - this.dropdownRowOffsetHeight(row)
                        < row.getBoundingClientRect().top) {
                        this.dropdownScrollTopTo(row.getBoundingClientRect().top - (this.el.nativeElement.getBoundingClientRect().top
                            + parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10)));
                    }
                }
            }
        }
    };
    MdbDropdownDirective.prototype.clear = function () {
        this.rows = [];
    };
    MdbDropdownDirective.prototype.onSelected = function (item) {
        this.completer.onSelected(item);
    };
    MdbDropdownDirective.prototype.selectCurrent = function () {
        if (this.currHighlighted) {
            this.onSelected(this.currHighlighted.row.getDataItem());
        }
        else if (this.rows.length > 0) {
            this.onSelected(this.rows[0].row.getDataItem());
        }
    };
    MdbDropdownDirective.prototype.nextRow = function () {
        var nextRowIndex = 0;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index + 1;
        }
        this.highlightRow(nextRowIndex);
    };
    MdbDropdownDirective.prototype.prevRow = function () {
        var nextRowIndex = -1;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index - 1;
        }
        this.highlightRow(nextRowIndex);
    };
    MdbDropdownDirective.prototype.dropdownScrollTopTo = function (offset) {
        this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
    };
    MdbDropdownDirective.prototype.dropdownRowTop = function () {
        return this.currHighlighted.row.getNativeElement().getBoundingClientRect().top -
            (this.el.nativeElement.getBoundingClientRect().top +
                parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10));
    };
    MdbDropdownDirective.prototype.dropdownHeight = function () {
        return this.el.nativeElement.getBoundingClientRect().top +
            parseInt(getComputedStyle(this.el.nativeElement).maxHeight, 10);
    };
    MdbDropdownDirective.prototype.dropdownRowOffsetHeight = function (row) {
        var css = getComputedStyle(row);
        return row.offsetHeight +
            parseInt(css.marginTop, 10) + parseInt(css.marginBottom, 10);
    };
    return MdbDropdownDirective;
}());
export { MdbDropdownDirective };
MdbDropdownDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbDropdown]',
            },] },
];
MdbDropdownDirective.ctorParameters = function () { return [
    { type: MdbCompleterDirective, decorators: [{ type: Host },] },
    { type: ElementRef, },
]; };
MdbDropdownDirective.propDecorators = {
    'onMouseDown': [{ type: HostListener, args: ['mousedown', ['$event'],] },],
};
//# sourceMappingURL=dropdown.directive.js.map