import { EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { PageScrollService } from './mdb-page-scroll.service';
import { EasingLogic } from './mdb-page-scroll.config';
export declare class PageScrollDirective implements OnChanges, OnDestroy {
    private pageScrollService;
    private router;
    routerLink: any;
    href: string;
    pageScrollHorizontal: boolean;
    pageScrollOffset: number;
    pageScrollDuration: number;
    pageScrollSpeed: number;
    pageScrollEasing: EasingLogic;
    pageScrollInterruptible: boolean;
    pageScrollAdjustHash: boolean;
    pageScroll: string;
    pageScrollFinish: EventEmitter<boolean>;
    private pageScrollInstance;
    private document;
    constructor(pageScrollService: PageScrollService, router: Router, document: any);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private generatePageScrollInstance();
    private pushRouterState();
    private scroll();
    handleClick(clickEvent: Event): boolean;
}
