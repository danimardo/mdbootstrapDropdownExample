import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var noop = function () {
};
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return MaterialChipsComponent; }),
    multi: true
};
var MaterialChipsComponent = (function () {
    function MaterialChipsComponent() {
        this.placeholder = '';
        this.isTagsFocused = false;
        this.tagsfocusedChange = new EventEmitter();
        this.labelsChange = new EventEmitter();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(MaterialChipsComponent.prototype, "tagsfocused", {
        get: function () {
            return this.isTagsFocused;
        },
        enumerable: true,
        configurable: true
    });
    MaterialChipsComponent.prototype.registerOnChange = function (fn) { this.onChangeCallback = fn; };
    MaterialChipsComponent.prototype.registerOnTouched = function (fn) { this.onTouchedCallback = fn; };
    MaterialChipsComponent.prototype.removeValue = function (value) {
        var index = this.values.indexOf(value, 0);
        if (index !== undefined) {
            this.values.splice(index, 1);
            this.labelsChange.emit(this.values);
        }
    };
    MaterialChipsComponent.prototype.addValue = function (value) {
        if (!value || value.trim() === '') {
            return;
        }
        this.values.push(value);
        this.labelsChange.emit(this.values);
        this.labelToAdd = '';
    };
    MaterialChipsComponent.prototype.writeValue = function (value) {
        if (value !== this.values) {
            this.values = value;
        }
    };
    MaterialChipsComponent.prototype.onFocus = function () {
        this.focused = 'md-focused';
        this.isTagsFocused = true;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    };
    MaterialChipsComponent.prototype.focusOutFunction = function () {
        this.focused = '';
        this.isTagsFocused = false;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    };
    return MaterialChipsComponent;
}());
export { MaterialChipsComponent };
MaterialChipsComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-material-chips',
                templateUrl: 'chips.component.html',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
            },] },
];
MaterialChipsComponent.ctorParameters = function () { return []; };
MaterialChipsComponent.propDecorators = {
    'placeholder': [{ type: Input, args: ['placeholder',] },],
    'tagsfocusedChange': [{ type: Output },],
    'labelsChange': [{ type: Output },],
    'tagsfocused': [{ type: Input },],
};
//# sourceMappingURL=chips.component.js.map