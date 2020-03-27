import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'fb-toggle',
  templateUrl: './fb-toggle.component.html',
  styleUrls: ['./fb-toggle.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FbToggleComponent),
      multi: true
    }
  ],
})
export class FbToggleComponent implements OnInit {
  @Input() label: string;
  @Input('value') val: string;
  @Input() disabled: boolean;

  randomId = '';

  constructor() { }

  ngOnInit() {
    this.getRandomId();
  }

  // Both onChange and onTouched are functions
  onChange: any = () => { };
  onTouched: any = () => { };

  get value() {
    return this.val;
  }

  set value(val) { }

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

  getRandomId() {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const length = 20;
    for (var i = length; i > 0; --i) this.randomId += chars[Math.floor(Math.random() * chars.length)];
  }
}
