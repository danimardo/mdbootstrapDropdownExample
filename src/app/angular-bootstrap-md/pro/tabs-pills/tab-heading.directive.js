import { Directive, TemplateRef } from '@angular/core';
import { TabDirective } from './tab.directive';
var TabHeadingDirective = (function () {
    function TabHeadingDirective(templateRef, tab) {
        tab.headingRef = templateRef;
    }
    return TabHeadingDirective;
}());
export { TabHeadingDirective };
TabHeadingDirective.decorators = [
    { type: Directive, args: [{ selector: '[mdbTabHeading]' },] },
];
TabHeadingDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: TabDirective, },
]; };
//# sourceMappingURL=tab-heading.directive.js.map