import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DateValidator } from 'src/app/validators/date-time.validator';
import * as moment from 'moment';
import { EgrService } from 'src/app/services/egr.service';
import { HttpParams } from '@angular/common/http';

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
  customerInfo: any;

  constructor(
    private _customer: CustomerService,
    private _auth: AuthService,
    private _fb: FormBuilder,
    private _egr: EgrService,
    ) {
      this.form = this._fb.group({
        UNP: ['', [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(12),
        ]],
        createDate: [moment().format('DD.MM.YYYY'), [
          Validators.required,
        ]],
        startDate: [moment().format('DD.MM.YYYY'), [
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

  getCompanyInfo() {
    // if (this.f.UNP.valid) {
    //   this._egr.getCompanyInfo(this.f.UNP.value).subscribe(
    //     (data: any) => {
    //       if (data && data.length === 1) {
    //         this.customerInfo = data[0];
    //       }
    //     }
    //   );
    // }
    if (this.f.UNP.valid) {
      this._egr.getCompanyInfo(this.f.UNP.value).subscribe(
        (data: any) => {
          if (data) {
            this.customerInfo = data;
          }
        }
      );
    }
  }

  save() {
    // const customer = new Customer('123123123123', 'Test company name', '290348dfhsdf234fewf');
    // customer._userId = this._auth.getUserId();
    // this._customer.add(customer);
  }

}
