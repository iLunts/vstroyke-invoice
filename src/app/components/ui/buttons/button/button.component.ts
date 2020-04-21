import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fb-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class FbButtonComponent implements OnInit {
  @Input() type = 'button';
  @Input() disabled: boolean;
  @Input() tabindex: number;

  @Input() set icon(value) {
    if (value) {
      this.iconBtn = 'assets/svg/pack/' + value + '.svg';
    }
  }

  @Input() set color(value) {
    if (value) {
      this.styleBtn += 'btn--' + value + ' ';
    }
  }

  @Input() set loading(value) {
    this.isLoading = value;
    if (value) {
      this.styleBtn += 'btn--revert ';
    } else {
      this.styleBtn.replace('btn--revert ', ' ');
    }
  }

  @Input() set size(value) {
    if (value) {
      this.styleBtn += 'btn--' + value + ' ';
    }
  }

  @Input() set text(value) {
    if (value) {
      this.textBtn = value;
    }
  }

  @Output() click = new EventEmitter();

  isLoading = false;
  iconBtn: string;
  styleBtn = 'btn ';
  textBtn: string;

  constructor() { }

  ngOnInit() {
    this.defaultInit();
  }

  defaultInit() {
    if (!this.textBtn) {
      this.styleBtn += 'btn--square ';
    }
  }

  public onClick(event: Event) {
    // console.log('click - button');
    if (!this.disabled) {
      // console.log('click emit');
    } else {
      // console.log('stop');
      event.stopPropagation();
    }
  }

}
