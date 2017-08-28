import { Component, Input, Output, EventEmitter, ElementRef, ViewEncapsulation, ChangeDetectorRef, Renderer, forwardRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LocaleService } from './services/datepickerLocale.service';
import { UtilService } from './services/datepickerUtil.service';
export var MYDP_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return MDBDatePickerComponent; }),
    multi: true
};
var CalToggle;
(function (CalToggle) {
    CalToggle[CalToggle["Open"] = 1] = "Open";
    CalToggle[CalToggle["CloseByDateSel"] = 2] = "CloseByDateSel";
    CalToggle[CalToggle["CloseByCalBtn"] = 3] = "CloseByCalBtn";
    CalToggle[CalToggle["CloseByOutClick"] = 4] = "CloseByOutClick";
})(CalToggle || (CalToggle = {}));
var Year;
(function (Year) {
    Year[Year["min"] = 1000] = "min";
    Year[Year["max"] = 9999] = "max";
})(Year || (Year = {}));
var InputFocusBlur;
(function (InputFocusBlur) {
    InputFocusBlur[InputFocusBlur["focus"] = 1] = "focus";
    InputFocusBlur[InputFocusBlur["blur"] = 2] = "blur";
})(InputFocusBlur || (InputFocusBlur = {}));
var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["enter"] = 13] = "enter";
    KeyCode[KeyCode["space"] = 32] = "space";
})(KeyCode || (KeyCode = {}));
var MonthId;
(function (MonthId) {
    MonthId[MonthId["prev"] = 1] = "prev";
    MonthId[MonthId["curr"] = 2] = "curr";
    MonthId[MonthId["next"] = 3] = "next";
})(MonthId || (MonthId = {}));
var MDBDatePickerComponent = (function () {
    function MDBDatePickerComponent(elem, renderer, cdr, localeService, utilService) {
        var _this = this;
        this.elem = elem;
        this.renderer = renderer;
        this.cdr = cdr;
        this.localeService = localeService;
        this.utilService = utilService;
        this.label = '';
        this.placeholder = '';
        this.dateChanged = new EventEmitter();
        this.inputFieldChanged = new EventEmitter();
        this.calendarViewChanged = new EventEmitter();
        this.calendarToggle = new EventEmitter();
        this.inputFocusBlur = new EventEmitter();
        this.showSelector = false;
        this.visibleMonth = { monthTxt: '', monthNbr: 0, year: 1 };
        this.selectedMonth = { monthTxt: '', monthNbr: 0, year: 0 };
        this.selectedDate = { year: 0, month: 0, day: 0 };
        this.weekDays = [];
        this.dates = [];
        this.selectionDayTxt = '';
        this.invalidDate = false;
        this.disableTodayBtn = false;
        this.dayIdx = 0;
        this.weekDayOpts = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
        this.editMonth = false;
        this.invalidMonth = false;
        this.editYear = false;
        this.invalidYear = false;
        this.prevMonthDisabled = false;
        this.nextMonthDisabled = false;
        this.prevYearDisabled = false;
        this.nextYearDisabled = false;
        this.prevMonthId = MonthId.prev;
        this.currMonthId = MonthId.curr;
        this.nextMonthId = MonthId.next;
        this.tmp = { year: this.getToday().year, month: this.getToday().month, day: this.getToday().day };
        this.opts = {
            dayLabelsFull: {},
            dayLabels: {},
            monthLabelsFull: {},
            monthLabels: {},
            dateFormat: '',
            showTodayBtn: true,
            todayBtnTxt: '',
            firstDayOfWeek: '',
            sunHighlight: true,
            markCurrentDay: true,
            disableUntil: { year: 0, month: 0, day: 0 },
            disableSince: { year: 0, month: 0, day: 0 },
            disableDays: [],
            enableDays: [],
            markDates: [],
            markWeekends: {},
            disableDateRanges: [],
            disableWeekends: false,
            showWeekNumbers: false,
            height: '32px',
            width: '100%',
            selectionTxtFontSize: '1rem',
            showClearDateBtn: true,
            alignSelectorRight: false,
            disableHeaderButtons: true,
            minYear: Year.min,
            maxYear: Year.max,
            componentDisabled: false,
            showSelectorArrow: true,
            ariaLabelInputField: 'Date input field',
            ariaLabelClearDate: 'Clear Date',
            ariaLabelOpenCalendar: 'Open Calendar',
            ariaLabelPrevMonth: 'Previous Month',
            ariaLabelNextMonth: 'Next Month',
            ariaLabelPrevYear: 'Previous Year',
            ariaLabelNextYear: 'Next Year'
        };
        this.months = [];
        this.years = [];
        this.onChangeCb = function () { };
        this.onTouchedCb = function () { };
        this.setLocaleOptions();
        renderer.listenGlobal(this.elem.nativeElement, 'click', function (event) {
            if (_this.showSelector &&
                event.target &&
                _this.elem.nativeElement !== event.target &&
                !_this.elem.nativeElement.contains(event.target)) {
                _this.removeInlineStyle();
                _this.showSelector = false;
                _this.calendarToggle.emit(CalToggle.CloseByOutClick);
            }
            if (event.target.classList.contains('picker__holder')) {
                _this.removeInlineStyle();
                _this.showSelector = false;
            }
            if (true && event.target && _this.elem.nativeElement.contains(event.target)) {
                _this.resetMonthYearEdit();
            }
        });
    }
    MDBDatePickerComponent.prototype.removeInlineStyle = function () {
        setTimeout(function () {
            document.documentElement.style.removeProperty('overflow');
        }, 155);
    };
    MDBDatePickerComponent.prototype.setLocaleOptions = function () {
        var _this = this;
        var opts = this.localeService.getLocaleOptions(this.locale);
        Object.keys(opts).forEach(function (k) {
            _this.opts[k] = opts[k];
        });
    };
    MDBDatePickerComponent.prototype.setOptions = function () {
        var _this = this;
        if (this.options !== undefined) {
            Object.keys(this.options).forEach(function (k) {
                _this.opts[k] = _this.options[k];
            });
        }
        if (this.opts.minYear < Year.min) {
            this.opts.minYear = Year.min;
        }
        if (this.opts.maxYear > Year.max) {
            this.opts.maxYear = Year.max;
        }
        if (this.disabled !== undefined) {
            this.opts.componentDisabled = this.disabled;
        }
        var separator = this.utilService.getDateFormatSeparator(this.opts.dateFormat);
    };
    MDBDatePickerComponent.prototype.resetMonthYearEdit = function () {
        this.editMonth = false;
        this.editYear = false;
        this.invalidMonth = false;
        this.invalidYear = false;
    };
    MDBDatePickerComponent.prototype.onUserDateInput = function (value) {
        this.invalidDate = false;
        if (value.length === 0) {
            this.clearDate();
        }
        else {
            var date = this.utilService.isDateValid(value, this.opts.dateFormat, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.monthLabels, this.opts.enableDays);
            if (date.day !== 0 && date.month !== 0 && date.year !== 0) {
                this.selectDate(date);
            }
            else {
                this.invalidDate = true;
            }
        }
        if (this.invalidDate) {
            this.inputFieldChanged.emit({ value: value, dateFormat: this.opts.dateFormat, valid: !(value.length === 0 || this.invalidDate) });
            this.onChangeCb('');
            this.onTouchedCb();
        }
    };
    MDBDatePickerComponent.prototype.onFocusInput = function (event) {
        this.openBtnClicked();
        this.inputFocusBlur.emit({ reason: InputFocusBlur.focus, value: event.target.value });
        document.documentElement.style.overflow = 'hidden';
        this.divFocus.nativeElement.focus();
    };
    MDBDatePickerComponent.prototype.onBlurInput = function (event) {
        this.selectionDayTxt = event.target.value;
        this.onTouchedCb();
        this.inputFocusBlur.emit({ reason: InputFocusBlur.blur, value: event.target.value });
    };
    MDBDatePickerComponent.prototype.onUserMonthInput = function (value) {
        this.invalidMonth = false;
        var m = this.utilService.isMonthLabelValid(value, this.opts.monthLabels);
        if (m !== -1) {
            this.editMonth = false;
            if (m !== this.visibleMonth.monthNbr) {
                this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: this.visibleMonth.year };
                this.generateCalendar(m, this.visibleMonth.year, true);
            }
        }
        else {
            this.invalidMonth = true;
        }
    };
    MDBDatePickerComponent.prototype.onUserYearInput = function (value) {
        this.invalidYear = false;
        var y = this.utilService.isYearLabelValid(Number(value), this.opts.minYear, this.opts.maxYear);
        if (y !== -1) {
            this.editYear = false;
            if (y !== this.visibleMonth.year) {
                this.visibleMonth = { monthTxt: this.visibleMonth.monthTxt, monthNbr: this.visibleMonth.monthNbr, year: y };
                this.generateCalendar(this.visibleMonth.monthNbr, y, true);
            }
        }
        else {
            this.invalidYear = true;
        }
    };
    MDBDatePickerComponent.prototype.isTodayDisabled = function () {
        this.disableTodayBtn = this.utilService.isDisabledDay(this.getToday(), this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays);
    };
    MDBDatePickerComponent.prototype.parseOptions = function () {
        if (this.locale) {
            this.setLocaleOptions();
        }
        this.setOptions();
        this.isTodayDisabled();
        this.dayIdx = this.weekDayOpts.indexOf(this.opts.firstDayOfWeek);
        if (this.dayIdx !== -1) {
            var idx = this.dayIdx;
            for (var i = 0; i < this.weekDayOpts.length; i++) {
                this.weekDays.push(this.opts.dayLabels[this.weekDayOpts[idx]]);
                idx = this.weekDayOpts[idx] === 'sa' ? 0 : idx + 1;
            }
        }
    };
    MDBDatePickerComponent.prototype.writeValue = function (value) {
        if (value && value['date']) {
            this.updateDateValue(this.parseSelectedDate(value['date']), false);
        }
        else if (value === '') {
            this.updateDateValue({ year: 0, month: 0, day: 0 }, true);
        }
    };
    MDBDatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCb = fn;
    };
    MDBDatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCb = fn;
    };
    MDBDatePickerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.hasOwnProperty('selector') && changes['selector'].currentValue > 0) {
            this.openBtnClicked();
        }
        if (changes.hasOwnProperty('placeholder')) {
            this.placeholder = changes['placeholder'].currentValue;
        }
        if (changes.hasOwnProperty('locale')) {
            this.locale = changes['locale'].currentValue;
        }
        if (changes.hasOwnProperty('disabled')) {
            this.disabled = changes['disabled'].currentValue;
        }
        if (changes.hasOwnProperty('options')) {
            this.options = changes['options'].currentValue;
        }
        this.weekDays.length = 0;
        this.parseOptions();
        if (changes.hasOwnProperty('defaultMonth')) {
            var dm = changes['defaultMonth'].currentValue;
            if (dm !== null && dm !== undefined && dm !== '') {
                this.selectedMonth = this.parseSelectedMonth(dm);
            }
            else {
                this.selectedMonth = { monthTxt: '', monthNbr: 0, year: 0 };
            }
        }
        if (changes.hasOwnProperty('selDate')) {
            var sd = changes['selDate'];
            if (sd.currentValue !== null &&
                sd.currentValue !== undefined &&
                sd.currentValue !== '' &&
                Object.keys(sd.currentValue).length !== 0) {
                this.selectedDate = this.parseSelectedDate(sd.currentValue);
                setTimeout(function () {
                    _this.onChangeCb(_this.getDateModel(_this.selectedDate));
                });
            }
            else {
                if (!sd.isFirstChange()) {
                    this.clearDate();
                }
            }
        }
        if (this.showSelector) {
            this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, false);
        }
    };
    MDBDatePickerComponent.prototype.removeBtnClicked = function () {
        this.clearDate();
        if (this.showSelector) {
            this.calendarToggle.emit(CalToggle.CloseByCalBtn);
        }
    };
    MDBDatePickerComponent.prototype.openBtnClicked = function () {
        this.showSelector = !this.showSelector;
        if (this.showSelector) {
            this.setVisibleMonth();
            this.calendarToggle.emit(CalToggle.Open);
        }
        else {
            this.calendarToggle.emit(CalToggle.CloseByCalBtn);
        }
    };
    MDBDatePickerComponent.prototype.setVisibleMonth = function () {
        var y = 0, m = 0;
        if (!this.utilService.isInitializedDate(this.selectedDate)) {
            if (this.selectedMonth.year === 0 && this.selectedMonth.monthNbr === 0) {
                var today = this.getToday();
                y = today.year;
                m = today.month;
            }
            else {
                y = this.selectedMonth.year;
                m = this.selectedMonth.monthNbr;
            }
        }
        else {
            y = this.selectedDate.year;
            m = this.selectedDate.month;
        }
        this.visibleMonth = { monthTxt: this.opts.monthLabels[m], monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    };
    MDBDatePickerComponent.prototype.monthList = function () {
        this.months = [];
        for (var i = 1; i <= 12; i++) {
            this.months.push({ index: i, short: this.opts.monthLabels[i], label: this.opts.monthLabelsFull[i] });
        }
    };
    MDBDatePickerComponent.prototype.yearsList = function () {
        this.years = [];
        var currentYear = this.visibleMonth.year;
        var firstYear = currentYear - 7 > 0 ? currentYear - 7 : 1;
        var lastYear = currentYear - 7 > 0 ? currentYear + 7 : currentYear + 7 + firstYear % 7;
        firstYear = firstYear < this.opts.minYear ? this.opts.minYear : firstYear;
        lastYear = lastYear > this.opts.maxYear ? this.opts.maxYear : lastYear;
        for (var i = firstYear; i <= lastYear; i++) {
            this.years.push(i);
        }
    };
    MDBDatePickerComponent.prototype.prevMonth = function () {
        var d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() - 1);
        var y = d.getFullYear();
        var m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    };
    MDBDatePickerComponent.prototype.nextMonth = function () {
        var d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() + 1);
        var y = d.getFullYear();
        var m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    };
    MDBDatePickerComponent.prototype.prevYear = function () {
        this.visibleMonth.year--;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
    };
    MDBDatePickerComponent.prototype.nextYear = function () {
        this.visibleMonth.year++;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
    };
    MDBDatePickerComponent.prototype.todayClicked = function () {
        var today = this.getToday();
        if (!this.utilService.isDisabledDay(today, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays)) {
            this.selectDate(today);
        }
        if (today.year !== this.visibleMonth.year || today.month !== this.visibleMonth.monthNbr) {
            this.visibleMonth = { monthTxt: this.opts.monthLabels[today.month], monthNbr: today.month, year: today.year };
            this.generateCalendar(today.month, today.year, true);
        }
    };
    MDBDatePickerComponent.prototype.cellClicked = function (cell) {
        if (cell.cmo === this.prevMonthId) {
            this.prevMonth();
        }
        else if (cell.cmo === this.currMonthId) {
            if (cell.dateObj.year === this.selectedDate.year &&
                cell.dateObj.month === this.selectedDate.month &&
                cell.dateObj.day === this.selectedDate.day) {
                this.clearDate();
            }
            else {
                this.selectDate(cell.dateObj);
            }
        }
        else if (cell.cmo === this.nextMonthId) {
            this.nextMonth();
        }
        this.resetMonthYearEdit();
    };
    MDBDatePickerComponent.prototype.cellKeyDown = function (event, cell) {
        if ((event.keyCode === KeyCode.enter || event.keyCode === KeyCode.space) && !cell.disabled) {
            event.preventDefault();
            this.cellClicked(cell);
        }
    };
    MDBDatePickerComponent.prototype.clearDate = function () {
        var date = { year: 0, month: 0, day: 0 };
        this.dateChanged.emit({ date: date, jsdate: null, formatted: '', epoc: 0 });
        this.onChangeCb('');
        this.onTouchedCb();
        this.updateDateValue(date, true);
    };
    MDBDatePickerComponent.prototype.selectDate = function (date) {
        this.tmp = date;
        var dateModel = this.getDateModel(date);
        this.dateChanged.emit(dateModel);
        this.onChangeCb(dateModel);
        this.onTouchedCb();
        this.updateDateValue(date, false);
        if (this.showSelector) {
            this.calendarToggle.emit(CalToggle.CloseByDateSel);
        }
    };
    MDBDatePickerComponent.prototype.updateDateValue = function (date, clear) {
        this.selectedDate = date;
        this.selectionDayTxt = clear ? '' : this.formatDate(date);
        this.inputFieldChanged.emit({ value: this.selectionDayTxt, dateFormat: this.opts.dateFormat, valid: !clear });
        this.invalidDate = false;
    };
    MDBDatePickerComponent.prototype.getDateModel = function (date) {
        return this.formatDate(date);
    };
    MDBDatePickerComponent.prototype.preZero = function (val) {
        return parseInt(val, 0) < 10 ? '0' + val : val;
    };
    MDBDatePickerComponent.prototype.formatDate = function (val) {
        var d = val.day;
        var dd = this.preZero(val.day);
        var ddd = this.opts.dayLabels[this.getWeekday(val)];
        var dddd = this.opts.dayLabelsFull[this.getWeekday(val)];
        var m = val.month;
        var mm = this.preZero(val.month);
        var mmm = this.getMonthShort(val.month);
        var mmmm = this.getMonthFull(val.month);
        var yy = val.year.toString().slice(2, 4);
        var yyyy = val.year;
        var toReplace = this.opts.dateFormat.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
        var formatted = '';
        toReplace.forEach(function (el) {
            switch (el) {
                case 'dddd':
                    el = el.replace(el, dddd);
                    break;
                case 'ddd':
                    el = el.replace(el, ddd);
                    break;
                case 'dd':
                    el = el.replace(el, dd);
                    break;
                case 'd':
                    el = el.replace(el, d);
                    break;
                case 'mmmm':
                    el = el.replace(el, mmmm);
                    break;
                case 'mmm':
                    el = el.replace(el, mmm);
                    break;
                case 'mm':
                    el = el.replace(el, mm);
                    break;
                case 'm':
                    el = el.replace(el, m);
                    break;
                case 'yyyy':
                    el = el.replace(el, yyyy);
                    break;
                case 'yy':
                    el = el.replace(el, yy);
                    break;
            }
            formatted += el;
        });
        return formatted;
    };
    MDBDatePickerComponent.prototype.monthText = function (m) {
        return this.opts.monthLabels[m];
    };
    MDBDatePickerComponent.prototype.weekText = function (m) {
        return this.opts.dayLabelsFull[m];
    };
    MDBDatePickerComponent.prototype.getMonthShort = function (m) {
        return this.opts.monthLabels[m];
    };
    MDBDatePickerComponent.prototype.getMonthFull = function (m) {
        return this.opts.monthLabelsFull[m];
    };
    MDBDatePickerComponent.prototype.monthStartIdx = function (y, m) {
        var d = new Date();
        d.setDate(1);
        d.setMonth(m - 1);
        d.setFullYear(y);
        var idx = d.getDay() + this.sundayIdx();
        return idx >= 7 ? idx - 7 : idx;
    };
    MDBDatePickerComponent.prototype.daysInMonth = function (m, y) {
        return new Date(y, m, 0).getDate();
    };
    MDBDatePickerComponent.prototype.daysInPrevMonth = function (m, y) {
        var d = this.getDate(y, m, 1);
        d.setMonth(d.getMonth() - 1);
        return this.daysInMonth(d.getMonth() + 1, d.getFullYear());
    };
    MDBDatePickerComponent.prototype.isCurrDay = function (d, m, y, cmo, today) {
        return d === today.day && m === today.month && y === today.year && cmo === this.currMonthId;
    };
    MDBDatePickerComponent.prototype.getToday = function () {
        var date = new Date();
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    };
    MDBDatePickerComponent.prototype.getTimeInMilliseconds = function (date) {
        return this.getDate(date.year, date.month, date.day).getTime();
    };
    MDBDatePickerComponent.prototype.getWeekday = function (date) {
        return this.weekDayOpts[this.utilService.getDayNumber(date)];
    };
    MDBDatePickerComponent.prototype.getDate = function (year, month, day) {
        return new Date(year, month - 1, day, 0, 0, 0, 0);
    };
    MDBDatePickerComponent.prototype.sundayIdx = function () {
        return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
    };
    MDBDatePickerComponent.prototype.generateCalendar = function (m, y, notifyChange) {
        this.dates.length = 0;
        var today = this.getToday();
        var monthStart = this.monthStartIdx(y, m);
        var dInThisM = this.daysInMonth(m, y);
        var dInPrevM = this.daysInPrevMonth(m, y);
        var dayNbr = 1;
        var cmo = this.prevMonthId;
        for (var i = 1; i < 7; i++) {
            var week = [];
            if (i === 1) {
                var pm = dInPrevM - monthStart + 1;
                for (var j = pm; j <= dInPrevM; j++) {
                    var date = { year: y, month: m - 1, day: j };
                    week.push({ dateObj: date, cmo: cmo, currDay: this.isCurrDay(j, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends) });
                }
                cmo = this.currMonthId;
                var daysLeft = 7 - week.length;
                for (var j = 0; j < daysLeft; j++) {
                    var date = { year: y, month: m, day: dayNbr };
                    week.push({ dateObj: date, cmo: cmo, currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends) });
                    dayNbr++;
                }
            }
            else {
                for (var j = 1; j < 8; j++) {
                    if (dayNbr > dInThisM) {
                        dayNbr = 1;
                        cmo = this.nextMonthId;
                    }
                    var date = { year: y, month: cmo === this.currMonthId ? m : m + 1, day: dayNbr };
                    week.push({ dateObj: date, cmo: cmo, currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends) });
                    dayNbr++;
                }
            }
            var weekNbr = this.opts.showWeekNumbers &&
                this.opts.firstDayOfWeek === 'mo' ?
                this.utilService.getWeekNumber(week[0].dateObj) : 0;
            this.dates.push({ week: week, weekNbr: weekNbr });
        }
        this.setHeaderBtnDisabledState(m, y);
        if (notifyChange) {
            this.calendarViewChanged.emit({
                year: y,
                month: m,
                first: {
                    number: 1,
                    weekday: this.getWeekday({
                        year: y,
                        month: m,
                        day: 1
                    })
                },
                last: {
                    number: dInThisM,
                    weekday: this.getWeekday({
                        year: y,
                        month: m,
                        day: dInThisM
                    })
                }
            });
        }
        this.monthList();
        this.yearsList();
    };
    MDBDatePickerComponent.prototype.parseSelectedDate = function (selDate) {
        var date = { day: 0, month: 0, year: 0 };
        if (typeof selDate === 'string') {
            var sd = selDate;
            date.day = this.utilService.parseDatePartNumber(this.opts.dateFormat, sd, 'dd');
            date.month = this.opts.dateFormat.indexOf('mmm') !== -1
                ? this.utilService.parseDatePartMonthName(this.opts.dateFormat, sd, 'mmm', this.opts.monthLabels)
                : this.utilService.parseDatePartNumber(this.opts.dateFormat, sd, 'mm');
            date.year = this.utilService.parseDatePartNumber(this.opts.dateFormat, sd, 'yyyy');
        }
        else if (typeof selDate === 'object') {
            date = selDate;
        }
        this.selectionDayTxt = this.formatDate(date);
        return date;
    };
    MDBDatePickerComponent.prototype.parseSelectedMonth = function (ms) {
        return this.utilService.parseDefaultMonth(ms);
    };
    MDBDatePickerComponent.prototype.setHeaderBtnDisabledState = function (m, y) {
        var dpm = false;
        var dpy = false;
        var dnm = false;
        var dny = false;
        if (this.opts.disableHeaderButtons) {
            dpm = this.utilService.isMonthDisabledByDisableUntil({
                year: m === 1 ? y - 1 : y,
                month: m === 1 ? 12 : m - 1,
                day: this.daysInMonth(m === 1 ? 12 : m - 1, m === 1 ? y - 1 : y)
            }, this.opts.disableUntil);
            dpy = this.utilService.isMonthDisabledByDisableUntil({
                year: y - 1,
                month: m,
                day: this.daysInMonth(m, y - 1)
            }, this.opts.disableUntil);
            dnm = this.utilService.isMonthDisabledByDisableSince({
                year: m === 12 ? y + 1 : y,
                month: m === 12 ? 1 : m + 1,
                day: 1
            }, this.opts.disableSince);
            dny = this.utilService.isMonthDisabledByDisableSince({ year: y + 1, month: m, day: 1 }, this.opts.disableSince);
        }
        this.prevMonthDisabled = m === 1 && y === this.opts.minYear || dpm;
        this.prevYearDisabled = y - 1 < this.opts.minYear || dpy;
        this.nextMonthDisabled = m === 12 && y === this.opts.maxYear || dnm;
        this.nextYearDisabled = y + 1 > this.opts.maxYear || dny;
    };
    MDBDatePickerComponent.prototype.checkActive = function () {
        if (this.placeholder.length > 0) {
            return true;
        }
        else {
            if (this.showSelector) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    return MDBDatePickerComponent;
}());
export { MDBDatePickerComponent };
MDBDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-date-picker',
                exportAs: 'mdbdatepicker',
                templateUrl: './datapicker.component.html',
                providers: [LocaleService, UtilService, MYDP_VALUE_ACCESSOR],
                encapsulation: ViewEncapsulation.None
            },] },
];
MDBDatePickerComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
    { type: ChangeDetectorRef, },
    { type: LocaleService, },
    { type: UtilService, },
]; };
MDBDatePickerComponent.propDecorators = {
    'options': [{ type: Input },],
    'locale': [{ type: Input },],
    'defaultMonth': [{ type: Input },],
    'selDate': [{ type: Input },],
    'label': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'selector': [{ type: Input },],
    'disabled': [{ type: Input },],
    'dateChanged': [{ type: Output },],
    'inputFieldChanged': [{ type: Output },],
    'calendarViewChanged': [{ type: Output },],
    'calendarToggle': [{ type: Output },],
    'inputFocusBlur': [{ type: Output },],
    'divFocus': [{ type: ViewChild, args: ['divFocus',] },],
};
//# sourceMappingURL=datepicker.component.js.map