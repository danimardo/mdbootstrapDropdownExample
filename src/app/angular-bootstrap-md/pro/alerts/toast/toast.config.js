import { Subject } from 'rxjs/Subject';
var GlobalConfig = (function () {
    function GlobalConfig() {
    }
    return GlobalConfig;
}());
export { GlobalConfig };
var ToastPackage = (function () {
    function ToastPackage(toastId, config, message, title, toastType, toastRef) {
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new Subject();
        this._onAction = new Subject();
    }
    ToastPackage.prototype.triggerTap = function () {
        this._onTap.next();
        this._onTap.complete();
    };
    ToastPackage.prototype.onTap = function () {
        return this._onTap.asObservable();
    };
    ToastPackage.prototype.triggerAction = function (action) {
        this._onAction.next(action);
        this._onAction.complete();
    };
    ToastPackage.prototype.onAction = function () {
        return this._onAction.asObservable();
    };
    return ToastPackage;
}());
export { ToastPackage };
//# sourceMappingURL=toast.config.js.map