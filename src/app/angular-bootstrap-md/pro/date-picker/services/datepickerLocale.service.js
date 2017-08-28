import { Injectable } from '@angular/core';
var LocaleService = (function () {
    function LocaleService() {
        this.locales = {
            'en': {
                dayLabelsFull: {
                    su: 'Sunday',
                    mo: 'Monday',
                    tu: 'Tuesday',
                    we: 'Wednesday',
                    th: 'Thursday',
                    fr: 'Friday',
                    sa: 'Saturday'
                },
                dayLabels: {
                    su: 'Sun',
                    mo: 'Mon',
                    tu: 'Tue',
                    we: 'Wed',
                    th: 'Thu',
                    fr: 'Fri',
                    sa: 'Sat'
                },
                monthLabelsFull: {
                    1: 'January',
                    2: 'February',
                    3: 'March',
                    4: 'April',
                    5: 'May',
                    6: 'June',
                    7: 'July',
                    8: 'August',
                    9: 'September',
                    10: 'October',
                    11: 'November',
                    12: 'December'
                },
                monthLabels: {
                    1: 'Jan',
                    2: 'Feb',
                    3: 'Mar',
                    4: 'Apr',
                    5: 'May',
                    6: 'Jun',
                    7: 'Jul',
                    8: 'Aug',
                    9: 'Sep',
                    10: 'Oct',
                    11: 'Nov',
                    12: 'Dec'
                },
                dateFormat: 'yyyy-mm-dd',
                todayBtnTxt: 'Today',
                clearBtnTxt: 'Clear',
                closeBtnTxt: 'Close',
                firstDayOfWeek: 'mo',
                sunHighlight: true,
            }
        };
    }
    LocaleService.prototype.getLocaleOptions = function (locale) {
        if (locale && this.locales.hasOwnProperty(locale)) {
            return this.locales[locale];
        }
        return this.locales['en'];
    };
    return LocaleService;
}());
export { LocaleService };
LocaleService.decorators = [
    { type: Injectable },
];
LocaleService.ctorParameters = function () { return []; };
//# sourceMappingURL=datepickerLocale.service.js.map