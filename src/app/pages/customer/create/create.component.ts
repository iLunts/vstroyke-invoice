import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DateValidator } from 'src/app/validators/date-time.validator';
import * as moment from 'moment';

@Component({
  selector: 'data-customer-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CustomerCreateComponent implements OnInit {
  form: FormGroup;
  paymentOptions: any = {
    showTax: false,
    tax: 20,
    showPaymentsTerm: false,
    paymentsTerm: '',
    showEndDate: false,
  };

  constructor(
    private _customer: CustomerService,
    private _auth: AuthService,
    private _fb: FormBuilder,
    ) {
      this.form = this._fb.group({
        UNP: ['', [
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

  ngOnInit() {
  }

  get f() {
    return this.form.controls;
  }

  changePaymentOptions() {

  }

  save() {
    const customer = new Customer('123123123123', 'Test company name', '290348dfhsdf234fewf');
    customer._userId = this._auth.getUserId();
    this._customer.add(customer);
  }

}
