import { SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { ComponentType } from '../portal/portal';
import { ToastRef } from './toast.injector';
export interface IndividualConfig {
    timeOut?: number;
    closeButton?: boolean;
    extendedTimeOut?: number;
    progressBar?: boolean;
    enableHtml?: boolean;
    toastClass?: string;
    positionClass?: string;
    titleClass?: string;
    messageClass?: string;
    tapToDismiss?: boolean;
    toastComponent?: ComponentType<any>;
    onActivateTick?: boolean;
}
export interface ToastIconClasses {
    error?: string;
    info?: string;
    success?: string;
    warning?: string;
}
export interface GlobalConfig extends IndividualConfig {
    maxOpened?: number;
    autoDismiss?: boolean;
    iconClasses?: ToastIconClasses;
    newestOnTop?: boolean;
    preventDuplicates?: boolean;
}
export declare class GlobalConfig {
}
export declare class ToastPackage {
    toastId: number;
    config: IndividualConfig;
    message: string | SafeHtml;
    title: string;
    toastType: string;
    toastRef: ToastRef<any>;
    private _onTap;
    private _onAction;
    constructor(toastId: number, config: IndividualConfig, message: string | SafeHtml, title: string, toastType: string, toastRef: ToastRef<any>);
    triggerTap(): void;
    onTap(): Observable<any>;
    triggerAction(action?: any): void;
    onAction(): Observable<any>;
}
