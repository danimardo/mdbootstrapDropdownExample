import 'rxjs/add/observable/timer';
import { ChangeDetectorRef, Directive, Host, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdbCompleterDirective } from './completer.directive';
import { MIN_SEARCH_LENGTH, PAUSE, CLEAR_TIMEOUT, isNil } from '../globals';
var CtrListContext = (function () {
    function CtrListContext(results, searching, searchInitialized, isOpen) {
        this.results = results;
        this.searching = searching;
        this.searchInitialized = searchInitialized;
        this.isOpen = isOpen;
    }
    return CtrListContext;
}());
export { CtrListContext };
var MdbListDirective = (function () {
    function MdbListDirective(completer, templateRef, viewContainer, cd) {
        this.completer = completer;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.mdbListMinSearchLength = MIN_SEARCH_LENGTH;
        this.mdbListPause = PAUSE;
        this.mdbListAutoMatch = false;
        this.mdbListAutoHighlight = false;
        this.term = null;
        this.searchTimer = null;
        this.clearTimer = null;
        this.ctx = new CtrListContext([], false, false, false);
        this._initialValue = null;
    }
    MdbListDirective.prototype.ngOnInit = function () {
        this.completer.registerList(this);
        this.viewContainer.createEmbeddedView(this.templateRef, new CtrListContext([], false, false, false));
    };
    Object.defineProperty(MdbListDirective.prototype, "dataService", {
        set: function (newService) {
            var _this = this;
            this._dataService = newService;
            if (this._dataService) {
                this._dataService
                    .catch(function (err) { return _this.handleError(err); })
                    .subscribe(function (results) {
                    _this.ctx.searchInitialized = true;
                    _this.ctx.searching = false;
                    _this.ctx.results = results;
                    if (_this.mdbListAutoMatch && results.length === 1 && results[0].title && !isNil(_this.term) &&
                        results[0].title.toLocaleLowerCase() === _this.term.toLocaleLowerCase()) {
                        _this.completer.onSelected(results[0]);
                    }
                    if (_this._initialValue) {
                        _this.initialValue = _this._initialValue;
                        _this._initialValue = null;
                    }
                    if (_this.mdbListAutoHighlight) {
                        _this.completer.autoHighlightIndex = _this.getBestMatchIndex();
                    }
                    _this.refreshTemplate();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbListDirective.prototype, "initialValue", {
        set: function (value) {
            var _this = this;
            if (this._dataService && typeof this._dataService.convertToItem === 'function') {
                setTimeout(function () {
                    var initialItem = _this._dataService.convertToItem(value);
                    if (initialItem) {
                        _this.completer.onSelected(initialItem, false);
                    }
                });
            }
            else if (!this._dataService) {
                this._initialValue = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    MdbListDirective.prototype.search = function (term) {
        var _this = this;
        if (!isNil(term) && term.length >= this.mdbListMinSearchLength && this.term !== term) {
            if (this.searchTimer) {
                this.searchTimer.unsubscribe();
                this.searchTimer = null;
            }
            if (!this.ctx.searching) {
                this.ctx.results = [];
                this.ctx.searching = true;
                this.ctx.searchInitialized = true;
                this.refreshTemplate();
            }
            if (this.clearTimer) {
                this.clearTimer.unsubscribe();
            }
            this.searchTimer = Observable.timer(this.mdbListPause).subscribe(function () {
                _this.searchTimerComplete(term);
            });
        }
        else if (!isNil(term) && term.length < this.mdbListMinSearchLength) {
            this.clear();
        }
    };
    MdbListDirective.prototype.clear = function () {
        var _this = this;
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
        }
        this.clearTimer = Observable.timer(CLEAR_TIMEOUT).subscribe(function () {
            _this._clear();
        });
    };
    MdbListDirective.prototype.open = function () {
        if (!this.ctx.searchInitialized) {
            this.search('');
        }
        this.refreshTemplate();
    };
    MdbListDirective.prototype.isOpen = function (open) {
        this.ctx.isOpen = open;
    };
    MdbListDirective.prototype._clear = function () {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
            this.searchTimer = null;
        }
        if (this.dataService) {
            this.dataService.cancel();
        }
        this.viewContainer.clear();
    };
    MdbListDirective.prototype.searchTimerComplete = function (term) {
        if (isNil(term) || term.length < this.mdbListMinSearchLength) {
            this.ctx.searching = false;
            return;
        }
        this.term = term;
        this._dataService.search(term);
    };
    MdbListDirective.prototype.handleError = function (error) {
        this.ctx.searching = false;
        var errMsg = 'search error';
        if (error) {
            errMsg = (error.message) ? error.message :
                error.status ? error.status + " - " + error.statusText : 'Server error';
        }
        if (console && console.error) {
            console.error(errMsg);
        }
        this.refreshTemplate();
        return Observable.throw(errMsg);
    };
    MdbListDirective.prototype.refreshTemplate = function () {
        this.viewContainer.clear();
        if (this.ctx.results && this.ctx.isOpen) {
            this.viewContainer.createEmbeddedView(this.templateRef, this.ctx);
        }
        this.cd.markForCheck();
    };
    MdbListDirective.prototype.getBestMatchIndex = function () {
        var _this = this;
        if (!this.ctx.results) {
            return null;
        }
        var bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase() === _this.term.toLocaleLowerCase(); });
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase().startsWith(_this.term.toLocaleLowerCase()); });
        }
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase().includes(_this.term.toLocaleLowerCase()); });
        }
        return bestMatch < 0 ? null : bestMatch;
    };
    return MdbListDirective;
}());
export { MdbListDirective };
MdbListDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbList]',
            },] },
];
MdbListDirective.ctorParameters = function () { return [
    { type: MdbCompleterDirective, decorators: [{ type: Host },] },
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ChangeDetectorRef, },
]; };
MdbListDirective.propDecorators = {
    'mdbListMinSearchLength': [{ type: Input },],
    'mdbListPause': [{ type: Input },],
    'mdbListAutoMatch': [{ type: Input },],
    'mdbListAutoHighlight': [{ type: Input },],
    'dataService': [{ type: Input, args: ['mdbList',] },],
    'initialValue': [{ type: Input, args: ['mdbListInitialValue',] },],
};
//# sourceMappingURL=list-context.directive.js.map