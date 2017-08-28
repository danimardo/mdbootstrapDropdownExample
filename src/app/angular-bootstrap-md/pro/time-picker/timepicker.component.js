import { Component, ViewChild, Input, ElementRef, Renderer, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var TIME_PIRCKER_VALUE_ACCESSOT = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return ClockPickerComponent; }),
    multi: true
};
var ClockPickerComponent = (function () {
    function ClockPickerComponent(elem, renderer) {
        var _this = this;
        this.elem = elem;
        this.renderer = renderer;
        this.twelvehour = false;
        this.darktheme = false;
        this.placeholder = '';
        this.label = '';
        this.duration = 300;
        this.showClock = false;
        this.showHours = false;
        this.dialRadius = 135;
        this.outerRadius = 110;
        this.innerRadius = 80;
        this.tickRadius = 20;
        this.diameter = this.dialRadius * 2;
        this.hoursTicks = [];
        this.minutesTicks = [];
        this.selectedHours = { 'h': '12', 'm': '00', 'ampm': 'AM' };
        this.endHours = '';
        this.touchSupported = 'ontouchstart' in window;
        this.mousedownEvent = 'mousedown' + (this.touchSupported ? ' touchstart' : '');
        this.mousemoveEvent = 'mousemove' + (this.touchSupported ? ' touchmove' : '');
        this.mouseupEvent = 'mouseup' + (this.touchSupported ? ' touchend' : '');
        this.onChangeCb = function () { };
        this.onTouchedCb = function () { };
        renderer.listenGlobal(this.elem.nativeElement, 'click', function (event) {
            if (_this.showClock &&
                event.target &&
                _this.elem.nativeElement !== event.target &&
                !_this.elem.nativeElement.contains(event.target)) {
                _this.showClock = false;
            }
            if (event.target.classList.contains('picker__holder')) {
                _this.showClock = false;
            }
        });
    }
    ClockPickerComponent.prototype.ngOnInit = function () {
        this.generateTick();
    };
    ClockPickerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer.listenGlobal(this.plate.nativeElement, this.mousedownEvent, function (event) {
            _this.mousedown(event, false);
        });
    };
    ClockPickerComponent.prototype.checkDraw = function () {
        var value;
        var isHours = this.showHours;
        if (isHours) {
            value = parseInt(this.selectedHours.h, 0);
        }
        else {
            value = parseInt(this.selectedHours.m, 0);
        }
        var unit = Math.PI / (isHours ? 6 : 30), radian = value * unit, radius = isHours && value > 0 && value < 13 ? this.innerRadius : this.outerRadius, xd = Math.sin(radian) * radius, yd = -Math.cos(radian) * radius;
        this.setHand(xd, yd, false, false);
    };
    ClockPickerComponent.prototype.mousedown = function (e, space) {
        var _this = this;
        var offset = this.plate.nativeElement.getBoundingClientRect(), isTouch = /^touch/.test(e.type), x0 = offset.left + this.dialRadius, y0 = offset.top + this.dialRadius, dx = (isTouch ? e.originalEvent.touches[0] : e).clientX - x0, dy = (isTouch ? e.originalEvent.touches[0] : e).clientY - y0, z = Math.sqrt(dx * dx + dy * dy);
        var moved = false;
        if (space && (z < this.outerRadius - this.tickRadius || z > this.outerRadius + this.tickRadius)) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (this.showHours) {
            this.setHand(dx, dy, true, false);
        }
        else {
            this.setHand(dx, dy, false, false);
        }
        var mousemoveEventMethod = function (event) {
            event.preventDefault();
            event.stopPropagation();
            var x = event.clientX - x0, y = event.clientY - y0;
            if (!moved && x === dx && y === dy) {
                return;
            }
            moved = true;
            _this.setHand(x, y, false, true);
        };
        var mouseupEventMethod = function (event) {
            document.removeEventListener(_this.mousemoveEvent, mousemoveEventMethod);
            e.preventDefault();
            var x = event.clientX - x0, y = event.clientX - y0;
            if ((space || moved) && x === dx && y === dy) {
                _this.setHand(x, y, false, false);
            }
            _this.showMinutesClock();
            document.removeEventListener(_this.mouseupEvent, mouseupEventMethod);
        };
        document.addEventListener(this.mousemoveEvent, mousemoveEventMethod);
        document.addEventListener(this.mouseupEvent, mouseupEventMethod);
    };
    ClockPickerComponent.prototype.openBtnClicked = function () {
        this.showClock = true;
        this.showHours = true;
        this.checkDraw();
    };
    ClockPickerComponent.prototype.closeBtnClicked = function () {
        var h = this.selectedHours.h;
        var m = this.selectedHours.m;
        var ampm = this.selectedHours.ampm;
        if (this.twelvehour) {
            this.endHours = h + ':' + m + ampm;
        }
        else {
            this.endHours = h + ':' + m;
        }
        this.onChangeCb(this.endHours);
        this.onTouchedCb();
        this.showClock = false;
    };
    ClockPickerComponent.prototype.setHour = function (hour) {
        this.selectedHours.h = hour;
    };
    ClockPickerComponent.prototype.setMinute = function (min) {
        this.selectedHours.m = min;
    };
    ClockPickerComponent.prototype.setAmPm = function (ampm) {
        this.selectedHours.ampm = ampm;
    };
    ClockPickerComponent.prototype.showHoursClock = function () {
        this.showHours = true;
        this.checkDraw();
    };
    ClockPickerComponent.prototype.showMinutesClock = function () {
        this.showHours = false;
        this.checkDraw();
    };
    ClockPickerComponent.prototype.generateTick = function () {
        if (this.twelvehour) {
            for (var i = 1; i < 13; i++) {
                var radian = i / 6 * Math.PI;
                var radius = this.outerRadius;
                var tick = {
                    'hour': i,
                    'left': this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                    'top': this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                };
                this.hoursTicks.push(tick);
            }
        }
        else {
            for (var i = 0; i < 24; i++) {
                var radian = i / 6 * Math.PI;
                var inner = i > 0 && i < 13;
                var radius = inner ? this.innerRadius : this.outerRadius;
                var h = void 0;
                if (i === 0) {
                    h = '0' + i.toString();
                }
                else {
                    h = i;
                }
                var tick = {
                    'hour': h,
                    'left': this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                    'top': this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                };
                this.hoursTicks.push(tick);
            }
        }
        for (var i = 0; i < 60; i += 5) {
            var radian = i / 30 * Math.PI;
            var min = i.toString();
            if (i < 10) {
                min = '0' + i.toString();
            }
            var tick = {
                'min': min,
                'left': this.dialRadius + Math.sin(radian) * this.outerRadius - this.tickRadius,
                'top': this.dialRadius - Math.cos(radian) * this.outerRadius - this.tickRadius,
            };
            this.minutesTicks.push(tick);
        }
    };
    ClockPickerComponent.prototype.setHand = function (x, y, roundBy5, draging) {
        var radian = Math.atan2(x, -y);
        var isHours = this.showHours;
        var unit = Math.PI / (isHours || roundBy5 ? 6 : 30);
        var z = Math.sqrt(x * x + y * y);
        var inner = isHours && z < (this.outerRadius + this.innerRadius) / 2;
        var radius = inner ? this.innerRadius : this.outerRadius;
        var value;
        if (this.showHours) {
            value = parseInt(this.selectedHours.h, 0);
        }
        else {
            value = parseInt(this.selectedHours.m, 0);
        }
        if (this.twelvehour) {
            radius = this.outerRadius;
        }
        if (radian < 0) {
            radian = Math.PI * 2 + radian;
        }
        value = Math.round(radian / unit);
        radian = value * unit;
        if (this.twelvehour) {
            if (isHours) {
                if (value === 0) {
                    value = 12;
                }
            }
            else {
                if (roundBy5) {
                    value *= 5;
                }
                if (value === 60) {
                    value = 0;
                }
            }
        }
        else {
            if (isHours) {
                if (value === 12) {
                    value = 0;
                    value = inner ? (value === 0 ? 12 : value) : value === 0 ? 0 : value + 12;
                }
            }
            else {
                if (roundBy5) {
                    value *= 5;
                }
                if (value === 60) {
                    value = 0;
                }
            }
        }
        if (isHours) {
            this.fg.nativeElement.setAttribute('class', 'clockpicker-canvas-fg');
        }
        else {
            if (value % 5 === 0) {
                this.fg.nativeElement.setAttribute('class', 'clockpicker-canvas-fg');
            }
            else {
                this.fg.nativeElement.setAttribute('class', 'clockpicker-canvas-fg active');
            }
        }
        var cx1 = Math.sin(radian) * (radius - this.tickRadius), cy1 = -Math.cos(radian) * (radius - this.tickRadius), cx2 = Math.sin(radian) * radius, cy2 = -Math.cos(radian) * radius;
        this.hand.nativeElement.setAttribute('x2', cx1);
        this.hand.nativeElement.setAttribute('y2', cy1);
        this.bg.nativeElement.setAttribute('cx', cx2);
        this.bg.nativeElement.setAttribute('cy', cy2);
        this.fg.nativeElement.setAttribute('cx', cx2);
        this.fg.nativeElement.setAttribute('cy', cy2);
        if (this.showHours) {
            if (value < 10) {
                this.setHour('0' + value.toString());
            }
            else {
                this.setHour(value.toString());
            }
        }
        else {
            if (value < 10) {
                this.setMinute('0' + value.toString());
            }
            else {
                this.setMinute(value.toString());
            }
        }
    };
    ClockPickerComponent.prototype.offset = function (obj) {
        var left = 0, top = 0;
        if (obj.offsetParent) {
            do {
                left += obj.offsetLeft;
                top += obj.offsetTop;
            } while (obj = obj.offsetParent);
        }
        return { left: left, top: top };
    };
    ClockPickerComponent.prototype.writeValue = function (value) {
        this.endHours = value;
    };
    ClockPickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCb = fn;
    };
    ClockPickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCb = fn;
    };
    return ClockPickerComponent;
}());
export { ClockPickerComponent };
ClockPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-time-picker',
                templateUrl: './timepicker.component.html',
                providers: [TIME_PIRCKER_VALUE_ACCESSOT]
            },] },
];
ClockPickerComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
ClockPickerComponent.propDecorators = {
    'hoursPlate': [{ type: ViewChild, args: ['hoursPlate',] },],
    'minutesPlate': [{ type: ViewChild, args: ['minutesPlate',] },],
    'plate': [{ type: ViewChild, args: ['plate',] },],
    'svg': [{ type: ViewChild, args: ['svg',] },],
    'g': [{ type: ViewChild, args: ['g',] },],
    'hand': [{ type: ViewChild, args: ['hand',] },],
    'fg': [{ type: ViewChild, args: ['fg',] },],
    'bg': [{ type: ViewChild, args: ['bg',] },],
    'bearing': [{ type: ViewChild, args: ['bearing',] },],
    'twelvehour': [{ type: Input, args: ['twelvehour',] },],
    'darktheme': [{ type: Input, args: ['darktheme',] },],
    'placeholder': [{ type: Input, args: ['placeholder',] },],
    'label': [{ type: Input, args: ['label',] },],
    'duration': [{ type: Input, args: ['duration',] },],
    'showClock': [{ type: Input, args: ['showClock',] },],
};
//# sourceMappingURL=timepicker.component.js.map