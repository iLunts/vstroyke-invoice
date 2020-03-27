import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[strictInput]'
})

export class StrictInputDirective {
  @Input('strictInput') pattern: any;
  @Input() formControl: FormControl;

  @HostListener('keydown', ['$event']) onkeydown(event) {

    if (event.keyCode === 8 || event.keyCode === 46 || event.keyCode === 9 || event.keyCode === 37 || event.keyCode === 39) {
      return;
    }

    if (!new RegExp(this.pattern).test(event.key)) {
      event.preventDefault();
    }
  }

  @HostListener('keyup', ['$event']) onkeyup() {
    while (this.el.nativeElement.value.indexOf('  ') != -1) {
      this.el.nativeElement.value = this.el.nativeElement.value.replace('  ', ' ').trim();
    }
    if (this.formControl) {
      this.formControl.setValue(this.el.nativeElement.value);
      this.formControl.updateValueAndValidity();
    }
  }

  @HostListener('blur', ['$event']) onblur() {
    this.el.nativeElement.value = this.el.nativeElement.value.trim();
    if (this.formControl) {
      this.formControl.setValue(this.el.nativeElement.value);
      this.formControl.updateValueAndValidity();
    }
  }

  constructor(private el: ElementRef) {}
}
