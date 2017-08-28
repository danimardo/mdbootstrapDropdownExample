import { AfterViewInit } from '@angular/core';
import { SBItemBodyComponent } from './sb-item.body';
import { SqueezeBoxComponent } from './squeezebox';
export declare class SBItemComponent implements AfterViewInit {
    private squeezebox;
    collapsed: boolean;
    body: SBItemBodyComponent;
    constructor(squeezebox: SqueezeBoxComponent);
    ngAfterViewInit(): void;
    toggle(collapsed: boolean): void;
    applyToggle(collapsed: boolean): void;
}
