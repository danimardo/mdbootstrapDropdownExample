import { Injector, ComponentRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Overlay } from '../overlay/overlay';
import { GlobalConfig, IndividualConfig } from './toast.config';
import { ToastRef } from './toast.injector';
import { ToastContainerDirective } from './toast.directive';
import { DomSanitizer } from '@angular/platform-browser';
export interface ActiveToast {
    toastId?: number;
    message?: string;
    portal?: ComponentRef<any>;
    toastRef?: ToastRef<any>;
    onShown?: Observable<any>;
    onHidden?: Observable<any>;
    onTap?: Observable<any>;
    onAction?: Observable<any>;
}
export declare class ToastService {
    toastConfig: GlobalConfig;
    private overlay;
    private _injector;
    private sanitizer;
    private index;
    private previousToastMessage;
    currentlyActive: number;
    toasts: ActiveToast[];
    overlayContainer: ToastContainerDirective;
    constructor(toastConfig: GlobalConfig, overlay: Overlay, _injector: Injector, sanitizer: DomSanitizer);
    show(message: string, title?: string, override?: IndividualConfig, type?: string): ActiveToast;
    success(message: string, title?: string, override?: IndividualConfig): ActiveToast;
    error(message: string, title?: string, override?: IndividualConfig): ActiveToast;
    info(message: string, title?: string, override?: IndividualConfig): ActiveToast;
    warning(message: string, title?: string, override?: IndividualConfig): ActiveToast;
    clear(toastId?: number): void;
    remove(toastId: number): boolean;
    isDuplicate(message: string): boolean;
    private applyConfig(override?);
    private _findToast(toastId);
    private _buildNotification(toastType, message, title, config);
}
