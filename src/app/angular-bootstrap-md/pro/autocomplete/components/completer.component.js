'use strict';
import { Component, Input, Output, EventEmitter, ViewChild, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MdbCompleterDirective } from '../directives/completer.directive';
import { CompleterService } from '../services/completer.service';
import { MAX_CHARS, MIN_SEARCH_LENGTH, PAUSE, TEXT_SEARCHING, TEXT_NO_RESULTS } from '../globals';
import 'rxjs/add/operator/catch';
var noop = function () { };
var COMPLETER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return CompleterComponent; }),
    multi: true
};
var CompleterComponent = (function () {
    function CompleterComponent(completerService) {
        this.completerService = completerService;
        this.inputName = '';
        this.inputId = '';
        this.pause = PAUSE;
        this.minSearchLength = MIN_SEARCH_LENGTH;
        this.maxChars = MAX_CHARS;
        this.overrideSuggested = false;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.fillHighlighted = true;
        this.placeholder = '';
        this.autoMatch = false;
        this.disableInput = false;
        this.autofocus = false;
        this.openOnFocus = false;
        this.autoHighlight = false;
        this.focused = false;
        this.selected = new EventEmitter();
        this.highlighted = new EventEmitter();
        this.blur = new EventEmitter();
        this.focusEvent = new EventEmitter();
        this.opened = new EventEmitter();
        this.keyup = new EventEmitter();
        this.keydown = new EventEmitter();
        this.searchStr = '';
        this.control = new FormControl('');
        this.displaySearching = true;
        this.displayNoResults = true;
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
        this._focus = false;
        this._open = false;
        this._textNoResults = TEXT_NO_RESULTS;
        this._textSearching = TEXT_SEARCHING;
    }
    Object.defineProperty(CompleterComponent.prototype, "value", {
        get: function () { return this.searchStr; },
        set: function (v) {
            if (v !== this.searchStr) {
                this.searchStr = v;
            }
            this._onChangeCallback(v);
        },
        enumerable: true,
        configurable: true
    });
    ;
    CompleterComponent.prototype.ngAfterViewInit = function () {
        if (this.autofocus) {
            this._focus = true;
        }
    };
    CompleterComponent.prototype.ngAfterViewChecked = function () {
        if (this._focus) {
            this.mdbInput.nativeElement.focus();
            this._focus = false;
        }
    };
    CompleterComponent.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    CompleterComponent.prototype.writeValue = function (value) {
        this.searchStr = value;
    };
    CompleterComponent.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    CompleterComponent.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    Object.defineProperty(CompleterComponent.prototype, "datasource", {
        set: function (source) {
            if (source) {
                if (source instanceof Array) {
                    this.dataService = this.completerService.local(source);
                }
                else if (typeof (source) === 'string') {
                    this.dataService = this.completerService.remote(source);
                }
                else {
                    this.dataService = source;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleterComponent.prototype, "textNoResults", {
        set: function (text) {
            if (this._textNoResults !== text) {
                this._textNoResults = text;
                this.displayNoResults = this._textNoResults && this._textNoResults !== 'false';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleterComponent.prototype, "textSearching", {
        set: function (text) {
            if (this._textSearching !== text) {
                this._textSearching = text;
                this.displaySearching = this._textSearching && this._textSearching !== 'false';
            }
        },
        enumerable: true,
        configurable: true
    });
    CompleterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.completer.selected.subscribe(function (item) {
            _this.selected.emit(item);
        });
        this.completer.highlighted.subscribe(function (item) {
            _this.highlighted.emit(item);
        });
        this.completer.opened.subscribe(function (isOpen) {
            _this._open = isOpen;
            _this.opened.emit(isOpen);
        });
    };
    CompleterComponent.prototype.onBlur = function () {
        this.blur.emit();
        this.onTouched();
        if (this.searchStr === undefined || this.searchStr === '') {
            this.focused = false;
        }
    };
    CompleterComponent.prototype.onFocus = function () {
        this.focusEvent.emit();
        this.onTouched();
        this.focused = true;
    };
    CompleterComponent.prototype.onKeyup = function (event) {
        this.keyup.emit(event);
    };
    CompleterComponent.prototype.onKeydown = function (event) {
        this.keydown.emit(event);
    };
    CompleterComponent.prototype.onChange = function (value) {
        this.value = value;
    };
    CompleterComponent.prototype.open = function () {
        this.completer.open();
    };
    CompleterComponent.prototype.close = function () {
        this.completer.clear();
    };
    CompleterComponent.prototype.focus = function () {
        if (this.mdbInput) {
            this.mdbInput.nativeElement.focus();
        }
        else {
            this._focus = true;
        }
    };
    CompleterComponent.prototype.isOpen = function () {
        return this._open;
    };
    return CompleterComponent;
}());
export { CompleterComponent };
CompleterComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-completer',
                templateUrl: './completer.component.html',
                providers: [COMPLETER_CONTROL_VALUE_ACCESSOR]
            },] },
];
CompleterComponent.ctorParameters = function () { return [
    { type: CompleterService, },
]; };
CompleterComponent.propDecorators = {
    'dataService': [{ type: Input },],
    'inputName': [{ type: Input },],
    'inputId': [{ type: Input },],
    'pause': [{ type: Input },],
    'minSearchLength': [{ type: Input },],
    'maxChars': [{ type: Input },],
    'overrideSuggested': [{ type: Input },],
    'clearSelected': [{ type: Input },],
    'clearUnselected': [{ type: Input },],
    'fillHighlighted': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'matchClass': [{ type: Input },],
    'fieldTabindex': [{ type: Input },],
    'autoMatch': [{ type: Input },],
    'disableInput': [{ type: Input },],
    'inputClass': [{ type: Input },],
    'autofocus': [{ type: Input },],
    'openOnFocus': [{ type: Input },],
    'initialValue': [{ type: Input },],
    'autoHighlight': [{ type: Input },],
    'label': [{ type: Input },],
    'selected': [{ type: Output },],
    'highlighted': [{ type: Output },],
    'blur': [{ type: Output },],
    'focusEvent': [{ type: Output },],
    'opened': [{ type: Output },],
    'keyup': [{ type: Output },],
    'keydown': [{ type: Output },],
    'completer': [{ type: ViewChild, args: [MdbCompleterDirective,] },],
    'mdbInput': [{ type: ViewChild, args: ['mdbInput',] },],
    'datasource': [{ type: Input },],
    'textNoResults': [{ type: Input },],
    'textSearching': [{ type: Input },],
};
//# sourceMappingURL=completer.component.js.map