import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'fb-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.less']
})
export class FbFieldErrorComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() patternInfo: string;

  constructor() { }

  ngOnInit() {
  }

}
