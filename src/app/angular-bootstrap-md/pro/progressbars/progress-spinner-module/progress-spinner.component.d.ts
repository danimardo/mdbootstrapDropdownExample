import { OnDestroy, ElementRef, NgZone, Renderer } from '@angular/core';
export declare type ProgressSpinnerMode = 'determinate' | 'indeterminate';
export declare class MdProgressSpinnerCssMatStylerDirective {
    true: any;
}
export declare class MdProgressSpinnerComponent implements OnDestroy {
    private _ngZone;
    private _elementRef;
    private _renderer;
    private _lastAnimationId;
    private _interdeterminateInterval;
    private _path;
    private _mode;
    private _value;
    private _color;
    readonly _ariaValueMin: number;
    readonly _ariaValueMax: number;
    interdeterminateInterval: any;
    ngOnDestroy(): void;
    color: string;
    value: number;
    mode: ProgressSpinnerMode;
    constructor(_ngZone: NgZone, _elementRef: ElementRef, _renderer: Renderer);
    private _animateCircle(animateFrom, animateTo, ease?, duration?, rotation?);
    private _startIndeterminateAnimation();
    private _cleanupIndeterminateAnimation();
    private _renderArc(currentValue, rotation?);
    private _updateColor(newColor);
    private _setElementColor(color, isAdd);
}
export declare class MdSpinnerComponent extends MdProgressSpinnerComponent implements OnDestroy {
    progressbar: any;
    indeterminate: any;
    true: any;
    constructor(elementRef: ElementRef, ngZone: NgZone, renderer: Renderer);
    ngOnDestroy(): void;
}
