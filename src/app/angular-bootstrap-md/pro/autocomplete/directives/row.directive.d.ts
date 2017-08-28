import { ElementRef, Renderer, OnInit } from '@angular/core';
import { CompleterItem } from '../components/completer-item.component';
import { MdbDropdownDirective, CtrRowElement } from './dropdown.directive';
export declare class MdbRowDirective implements CtrRowElement, OnInit {
    private el;
    private renderer;
    private dropdown;
    private selected;
    private _rowIndex;
    private _item;
    constructor(el: ElementRef, renderer: Renderer, dropdown: MdbDropdownDirective);
    ngOnInit(): void;
    mdbRow: number;
    dataItem: CompleterItem;
    onClick(event: any): void;
    onMouseEnter(event: any): void;
    setHighlighted(selected: boolean): void;
    getNativeElement(): any;
    getDataItem(): CompleterItem;
}
