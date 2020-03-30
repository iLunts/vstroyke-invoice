import { Component, OnInit, Input, ViewEncapsulation, forwardRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, AbstractControl } from '@angular/forms';

@Component({
  selector: 'fb-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FbFieldComponent),
      multi: true
    }
  ],
})
export class FbFieldComponent implements OnInit {
  @Output() btnActionclick = new EventEmitter();

  @Input() label: string;
  @Input() prefix: string;
  @Input() set type(value) {
    if (value) {
      this.fieldType = value;
      this.showBtnShowPassword = value === 'password' && !this.showBtnShowPassword;
    } else {
      this.fieldType = 'text';
    }
  }

  @Input() placeholder: string;
  @Input() errors: any;
  @Input() control: AbstractControl;
  @Input('value') val: string;
  @Input() disabled: boolean;
  @Input() readonly = false;
  @Input() fit = '';
  @Input() showClearBtn = false;
  @Input() showBtnShowPassword = false;

  @Input() list: any[] = [];
  @Input() optionValue: string;
  @Input() optionName: string;
  @Input() patternInfo: string;
  @Input() info: string;
  @Input() uppercase = false;
  @Input() lowercase = false;

  @Input() maskPattern: string;
  // @Input() strictInputPattern: string | '^[a-zA-Zа-яА-Я0-9]$';
  @Input() dropSpecialCharactersOption: boolean;

  // Button
  @Input() btnActionShow: boolean;
  @Input() btnActionDisabled: boolean;
  @Input() btnActionText: string;
  @Input() btnActionColor: string;

  // Color
  @Input() colorShow: boolean;
  @Output() colorRandomValue: boolean;

  randomColorArray = [
    '#f44336',
    '#03A9F4',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#00bcd4',
    '#4caf50',
    '#ff5722',
    '#795548',
    '#607d8b'
  ];
  randomColorValue = this.randomColorArray[Math.floor((Math.random() * 11))];
  tooltipMessage: string;
  fieldType: string;

  constructor() { }

  ngOnInit() {
    this.generateTooltipMessages();
  }

  // Both onChange and onTouched are functions
  onChange: any = () => { };
  onTouched: any = () => { };

  get value() {
    return this.val;
  }

  set value(val) {
    if (this.uppercase) {
      this.val = val.toUpperCase();
    } else if (this.lowercase) {
      this.val = val.toLowerCase();
    } else {
      this.val = val;
    }
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  updateValue($event) {
    this.writeValue($event);
    this.onChange($event);
  }

  clear() {
    this.value = null;
    this.writeValue(null);
    this.onChange(null);
  }

  generateTooltipMessages() {
    this.tooltipMessage = 'Это поле ';
    if (this.disabled && this.readonly) {
      this.tooltipMessage += 'только для просмотра';
    }
    if (this.disabled) {
      this.tooltipMessage += 'закрыто';
    }
    if (this.readonly) {
      this.tooltipMessage += 'для чтения';
    }
  }

  togglePasswordType() {
    this.fieldType = this.fieldType === 'password' ? 'text' : 'password';
  }

  btnActionClick(event?: any) {
    if (this.colorShow) {
      this.btnActionclick.emit(
        {
          event: event,
          color: this.randomColorValue,
          value: this.value
        }
      );
    } else {
      this.btnActionclick.emit(
        {event: event}
      );
    }
  }
}
