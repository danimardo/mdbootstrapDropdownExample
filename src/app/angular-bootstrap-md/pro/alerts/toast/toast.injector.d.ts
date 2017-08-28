import { Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OverlayRef } from '../overlay/overlay-ref';
import { ToastPackage } from './toast.config';
export declare class ToastRef<T> {
    private _overlayRef;
    componentInstance: T;
    private _afterClosed;
    private _activate;
    private _manualClose;
    constructor(_overlayRef: OverlayRef);
    manualClose(): void;
    manualClosed(): Observable<any>;
    close(): void;
    afterClosed(): Observable<any>;
    isInactive(): boolean;
    activate(): void;
    afterActivate(): Observable<any>;
}
export declare class ToastInjector implements Injector {
    private _toastPackage;
    private _parentInjector;
    constructor(_toastPackage: ToastPackage, _parentInjector: Injector);
    get(token: any, notFoundValue?: any): any;
}
