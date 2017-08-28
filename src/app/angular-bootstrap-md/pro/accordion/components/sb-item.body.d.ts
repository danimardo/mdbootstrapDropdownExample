import { ElementRef, Renderer } from '@angular/core';
export declare class SBItemBodyComponent {
    private renderer;
    height: string;
    bodyEl: ElementRef;
    constructor(renderer: Renderer);
    toggle(collapsed: boolean): void;
}
