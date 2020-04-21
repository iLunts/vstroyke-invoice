import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { EgrService } from 'src/app/services/egr.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { NotifierService } from 'angular-notifier';
import { NotificationService } from 'src/app/services/notification.service';
import { BankService } from 'src/app/services/bank.service';
import { Bank } from 'src/app/models/bank.model';

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
  customerInfo: Customer;
  bicCode: string;
  bankList: Bank[] = [];

  constructor(
    private _customer: CustomerService,
    private _fs: AngularFirestore,
    private _auth: AuthService,
    private _fb: FormBuilder,
    private _egr: EgrService,
    private _router: Router,
    private _bank: BankService,
    private _notification: NotificationService,
    ) {
      this.fetchBank();
      this.form = this._fb.group({
        UNP: [null, [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(12),
        ]],
        createDate: [moment().format('DD.MM.YYYY'), [
          Validators.required,
        ]],
        bankAccounts: this._fb.group({
          bank: [null, [
            Validators.required
          ]],
          swift: [null, [
            Validators.required
          ]],
        }),
      });
    }

  ngOnInit() {
  }

  get f() {
    return this.form.controls;
  }
  get fb() {
    return this.form.get('bank');
    // return this.form.get('bank');
  }

  fetchBank() {
    this._bank.getAll().valueChanges().subscribe(
      (data: Bank[]) => {
        if (data) {
          this.bankList = data;
        }
      }
    );
  }

  changePaymentOptions() {

  }

  checkAddCustomer() {
    return this.form.invalid || !this.customerInfo;
  }

  getCompanyInfo() {
    if (this.f.UNP.valid) {
      this._egr.getCompanyInfo(this.f.UNP.value).subscribe(
        (data: any) => {
          if (data) {
            this.customerInfo = new Customer();
            this.customerInfo._id = null;
            this.customerInfo._userId = this._auth.getUserId();
            this.customerInfo._createdDate = moment.utc().format('DD.MM.YYYY');
            this.customerInfo.TP = data.type;
            this.customerInfo.NM = data.id;
            this.customerInfo.DC = data.creationDate;
            this.customerInfo.DD = data.delitionDate;
            this.customerInfo.NU = data.issueDepartment.id;
            this.customerInfo.VU = data.issueDepartment.vu;
            this.customerInfo.NS = data.status.id;
            this.customerInfo.VS = data.status.vs;
            this.customerInfo.VNM = data.fullName;

            if (data.type === 2) {
              this.customerInfo.VSN = 'ИП ' + data.fullName;
            } else {
              this.customerInfo.VSN = data.shortName;
            }

            this.customerInfo.VFN = data.firmName;
            this.customerInfo.ACT = data.active;
            this.customerInfo.Z = data.canSellShares;
            this.customerInfo.VNMB = null;
            this.customerInfo.VSNB = null;
            this.customerInfo.VFNB = null;
          }
        }
      );
    }
  }

  clearCustomer() {
    this.customerInfo = null;
    this.form.controls.UNP.reset();
    this.checkAddCustomer();
  }

  addCustomer() {
    if (this.form.invalid || !this.customerInfo) {
      return;
    } else {
      this._fs.collection('/customers', q => q.where('_userId', '==', this._auth.getUserId()).where('NM', '==', this.customerInfo.NM)).get().subscribe(
        (doc: any) => {
          if (doc.empty) {
            this._customer.add(this.customerInfo);
          } else {
            this._notification.error('Контрагент уже существует');
            this.clearCustomer();
          }
        }
      );
    }
  }

  typeaheadOnSelectBank(event) {
    if (event.item) {
      this.form.controls.bankAccounts.patchValue({
        bank: event.item
      });
      // this.customerInfo.bankAccounts[0].bank = event.item;
      // debugger;
    }
  }
}
