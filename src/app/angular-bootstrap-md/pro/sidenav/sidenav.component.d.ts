import { ElementRef, Renderer, AfterViewInit } from '@angular/core';
export declare class SidenavComponent implements AfterViewInit {
    el: ElementRef;
    renderer: Renderer;
    windwosWidth: number;
    shown: boolean;
    class: string;
    fixed: boolean;
    sideNav: ElementRef;
    overlay: any;
    constructor(el: ElementRef, renderer: Renderer);
    ngAfterViewInit(): void;
    windwosResize(): void;
    show(): void;
    hide(): void;
    toggle(): void;
    showOverlay(): void;
    hideOverlay(): void;
    setShown(value: boolean): void;
}
