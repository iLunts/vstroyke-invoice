import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'fb-field-info',
  templateUrl: './field-info.component.html',
  styleUrls: ['./field-info.component.less']
})
export class FbFieldInfoComponent implements OnInit {
  @Input() info?: string;
  @Input() control: AbstractControl;

  constructor() { }

  ngOnInit() {
  }

}
