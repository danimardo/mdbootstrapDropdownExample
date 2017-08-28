import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Ng2CompleterModule } from './autocomplete';
import { CardsModule } from './cards/';
import { MDBUploaderModule } from './file-input/';
import { MaterialChipsModule } from './tags/';
import { ProgressBars } from './progressbars/';
import { TabsModule } from './tabs-pills/';
import { ToastModule } from './alerts/';
import { SelectModule } from './material-select/';
import { MDBDatePickerModule } from './date-picker/';
import { TimePickerModule } from './time-picker/';
import { LightBoxModule } from './lightbox/light-box.module';
import { SidenavModule } from './sidenav/';
import { ChartSimpleModule } from './easy-charts/';
import { SqueezeBoxModule } from './accordion/';
import { MdbStickyModule } from './sticky-content/';
import { MDBPageScrollModule } from './smoothscroll/index';
import { CharCounterModule } from './inputs/';
export { Ng2CompleterModule, CompleterComponent, CompleterListItemComponent, CompleterService, LocalDataFactoryProvider, RemoteDataFactoryProvider, MdbCompleterDirective, MdbDropdownDirective, MdbInputDirective, MdbListDirective, MdbRowDirective } from './autocomplete/';
export { CardsModule, CardRotatingComponent, CardRevealComponent } from './cards/';
export { ProgressbarComponent, ProgressbarConfigComponent, ProgressbarModule, ProgressBars, ProgressDirective, ProgressSpinnerComponent, BarComponent } from './progressbars/';
export { MaterialChipsComponent, MaterialChipsModule } from './tags/';
export { TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule, NgTranscludeDirective } from './tabs-pills/';
export { MDBSpinningPreloader } from './preloader/preloader.service';
export { ToastComponent, ToastContainerDirective, ToastContainerModule, ToastInjector, ToastPackage, ToastRef, ToastModule, ToastService, GlobalConfig, Overlay, OVERLAY_PROVIDERS, OverlayContainer, OverlayRef } from './alerts/';
export { SelectModule, Diacritics, Option, OptionList, SELECT_VALUE_ACCESSOR, SelectComponent, SelectDropdownComponent } from './material-select/';
export { MDBDatePickerComponent, MDBDatePickerModule, InputAutoFillDirective, MYDP_VALUE_ACCESSOR, UtilService, LocaleService, FocusDirective } from './date-picker/';
export { TimePickerModule, ClockPickerComponent } from './time-picker/';
export { LightBoxModule, ImageModalComponent } from './lightbox/';
export { SidenavComponent, SidenavModule } from './sidenav/';
export { ChartSimpleModule, EasyPieChartComponent, SimpleChartComponent } from './easy-charts/';
export { SBItemComponent, SBItemBodyComponent, SBItemHeadComponent, SqueezeBoxComponent, SqueezeBoxModule } from './accordion/';
export { MdbStickyDirective, MdbStickyModule } from './sticky-content/';
export { MDBPageScrollModule, PageScrollDirective, PageScrollConfig, PageScrollInstance, PageScrollService, PageScrollUtilService, EasingLogic } from './smoothscroll/';
export { CharCounterDirective, CharCounterModule } from './inputs';
export { MDBFileDropDirective, MDBFileSelectDirective, MDBUploaderModule, MDBUploaderService, humanizeBytes } from './file-input';
var MODULES = [
    Ng2CompleterModule,
    CardsModule,
    MDBUploaderModule,
    MaterialChipsModule,
    ProgressBars,
    TabsModule,
    ToastModule,
    SelectModule,
    MDBDatePickerModule,
    TimePickerModule,
    LightBoxModule,
    SidenavModule,
    ChartSimpleModule,
    SqueezeBoxModule,
    MdbStickyModule,
    MDBPageScrollModule,
    CharCounterModule
];
var MDBRootModulePro = (function () {
    function MDBRootModulePro() {
    }
    return MDBRootModulePro;
}());
export { MDBRootModulePro };
MDBRootModulePro.decorators = [
    { type: NgModule, args: [{
                imports: [
                    Ng2CompleterModule,
                    CardsModule.forRoot(),
                    MaterialChipsModule,
                    ProgressBars.forRoot(),
                    TabsModule.forRoot(),
                    ToastModule.forRoot(),
                    SelectModule,
                    MDBDatePickerModule,
                    TimePickerModule,
                    LightBoxModule,
                    SidenavModule,
                    ChartSimpleModule,
                    SqueezeBoxModule,
                    MdbStickyModule,
                    MDBPageScrollModule.forRoot(),
                    CharCounterModule.forRoot()
                ],
                exports: MODULES,
                providers: [],
                schemas: [NO_ERRORS_SCHEMA]
            },] },
];
MDBRootModulePro.ctorParameters = function () { return []; };
var MDBBootstrapModulePro = (function () {
    function MDBBootstrapModulePro() {
    }
    MDBBootstrapModulePro.forRoot = function () {
        return { ngModule: MDBRootModulePro };
    };
    return MDBBootstrapModulePro;
}());
export { MDBBootstrapModulePro };
MDBBootstrapModulePro.decorators = [
    { type: NgModule, args: [{ exports: MODULES },] },
];
MDBBootstrapModulePro.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map