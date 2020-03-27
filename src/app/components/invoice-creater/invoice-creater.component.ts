import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { DateValidator } from 'src/app/validators/date-time.validator';

@Component({
  selector: 'data-invoice-creater',
  templateUrl: './invoice-creater.component.html',
  styleUrls: ['./invoice-creater.component.less']
})
export class InvoiceCreaterComponent implements OnInit {
  form: FormGroup;
  paymentOptions: any = {
    showTax: false,
    tax: 20,
    showPaymentsTerm: false,
    paymentsTerm: '',
    showEndDate: false,
  };

  constructor(
    private _fb: FormBuilder,
  ) {
    this.form = this._fb.group({
      number: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
      ]],
      createDate: [moment().format('DD.MM.YYYY'), [
        Validators.required,
      ]],
      startDate: [moment().format('DD.MM.YYYY'), [
        Validators.required,
        DateValidator.ueFormat
      ]],
      expiredDate: [moment().add(3, 'days').format('DD.MM.YYYY'), [
        Validators.required,
        DateValidator.ueFormat
      ]],
      billFrom: new FormGroup({}),
      billTo: new FormGroup({}),
      services: new FormGroup({}),
    });
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
  }

  changePaymentOptions() {
    
  }

  save() {
  }
}
