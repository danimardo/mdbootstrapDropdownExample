import { ComponentRef } from '@angular/core';
import { BasePortalHost, ComponentPortal } from '../portal/portal';
export declare class OverlayRef {
    private _portalHost;
    constructor(_portalHost: BasePortalHost);
    attach(portal: ComponentPortal<any>, newestOnTop: boolean): ComponentRef<any>;
    detach(): void;
}
