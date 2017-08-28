import { Directive, EventEmitter, Output } from '@angular/core';
var MdbCompleterDirective = (function () {
    function MdbCompleterDirective() {
        this.selected = new EventEmitter();
        this.highlighted = new EventEmitter();
        this.opened = new EventEmitter();
        this._hasHighlighted = false;
        this._hasSelected = false;
        this._cancelBlur = false;
        this._isOpen = false;
    }
    MdbCompleterDirective.prototype.registerList = function (list) {
        this.list = list;
    };
    MdbCompleterDirective.prototype.registerDropdown = function (dropdown) {
        this.dropdown = dropdown;
    };
    MdbCompleterDirective.prototype.onHighlighted = function (item) {
        this.highlighted.emit(item);
        this._hasHighlighted = !!item;
    };
    MdbCompleterDirective.prototype.onSelected = function (item, clearList) {
        if (clearList === void 0) { clearList = true; }
        this.selected.emit(item);
        if (item) {
            this._hasSelected = true;
        }
        if (clearList) {
            this.clear();
        }
    };
    MdbCompleterDirective.prototype.search = function (term) {
        if (this._hasSelected) {
            this.selected.emit(null);
            this._hasSelected = false;
        }
        if (this.list) {
            this.list.search(term);
        }
    };
    MdbCompleterDirective.prototype.clear = function () {
        if (this.dropdown) {
            this.dropdown.clear();
        }
        if (this.list) {
            this.list.clear();
        }
        this._hasHighlighted = false;
        this.isOpen = false;
    };
    MdbCompleterDirective.prototype.selectCurrent = function () {
        if (this.dropdown) {
            this.dropdown.selectCurrent();
        }
    };
    MdbCompleterDirective.prototype.nextRow = function () {
        if (this.dropdown) {
            this.dropdown.nextRow();
        }
    };
    MdbCompleterDirective.prototype.prevRow = function () {
        if (this.dropdown) {
            this.dropdown.prevRow();
        }
    };
    MdbCompleterDirective.prototype.hasHighlighted = function () {
        return this._hasHighlighted;
    };
    MdbCompleterDirective.prototype.cancelBlur = function (cancel) {
        this._cancelBlur = cancel;
    };
    MdbCompleterDirective.prototype.isCancelBlur = function () {
        return this._cancelBlur;
    };
    MdbCompleterDirective.prototype.open = function () {
        if (!this._isOpen) {
            this.isOpen = true;
            this.list.open();
        }
    };
    Object.defineProperty(MdbCompleterDirective.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        set: function (open) {
            this._isOpen = open;
            this.opened.emit(this._isOpen);
            if (this.list) {
                this.list.isOpen(open);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCompleterDirective.prototype, "autoHighlightIndex", {
        get: function () {
            return this._autoHighlightIndex;
        },
        set: function (index) {
            this._autoHighlightIndex = index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCompleterDirective.prototype, "hasSelected", {
        get: function () {
            return this._hasSelected;
        },
        enumerable: true,
        configurable: true
    });
    return MdbCompleterDirective;
}());
export { MdbCompleterDirective };
MdbCompleterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbCompleter]',
            },] },
];
MdbCompleterDirective.ctorParameters = function () { return []; };
MdbCompleterDirective.propDecorators = {
    'selected': [{ type: Output },],
    'highlighted': [{ type: Output },],
    'opened': [{ type: Output },],
};
//# sourceMappingURL=completer.directive.js.map