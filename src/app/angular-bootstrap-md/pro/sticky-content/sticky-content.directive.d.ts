import { ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
export declare class MdbStickyDirective implements OnDestroy, AfterViewInit {
    stickyAfter: string;
    el: HTMLElement;
    parentEl: HTMLElement;
    fillerEl: HTMLElement;
    stickyOffsetTop: number;
    diff: any;
    original: any;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    attach(): void;
    detach(): void;
    scrollHandler: () => void;
}
