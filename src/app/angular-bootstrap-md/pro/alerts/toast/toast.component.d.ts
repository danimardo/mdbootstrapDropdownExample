import { OnDestroy, ApplicationRef } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { GlobalConfig, ToastPackage } from './toast.config';
import { ToastService } from './toast.service';
export declare class ToastComponent implements OnDestroy {
    protected toastService: ToastService;
    toastPackage: ToastPackage;
    protected appRef: ApplicationRef;
    message: string | SafeHtml;
    title: string;
    options: GlobalConfig;
    width: number;
    toastClasses: string;
    state: string;
    private timeout;
    private intervalId;
    private hideTime;
    private sub;
    private sub1;
    constructor(toastService: ToastService, toastPackage: ToastPackage, appRef: ApplicationRef);
    ngOnDestroy(): void;
    activateToast(): void;
    updateProgress(): void;
    remove(): void;
    tapToast(): void;
    stickAround(): void;
    delayedHideToast(): void;
}
