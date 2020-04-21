import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import * as moment from 'moment';
import { DateValidator } from 'src/app/validators/date-time.validator';
import { Service } from 'src/app/models/service.model';
import { ServicesService } from 'src/app/services/services.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer.model';
import { InvoiceService } from 'src/app/services/invoice.service';

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
  // invoiceService: { name: string; ed: string; count: number; price: number; tax: string; summ: number; }[];
  invoiceService: any[] = [];
  serviceList: Service[] = [];
  customerList: Customer[] = [];
  customerData: string;
  customerEmail: string;
  validInvoiceServiceList: boolean;

  constructor(
    private _fb: FormBuilder,
    private _service: ServicesService,
    private _invoice: InvoiceService,
    private _customer: CustomerService,
  ) {
    this.fetchServices();
    this.fetchCustomers();
    this.form = this._fb.group({
      number: ['Б/н', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
      ]],
      createDate: [moment().format('DD.MM.YYYY'), [
        Validators.required,
      ]],
      expiredDate: [null, [
        // Validators.required,
        // DateValidator.ueFormat
      ]],
      billTo: [null, [
        Validators.required,
      ]],
      billFrom: [{}, [
        Validators.required,
      ]],
      services: [null, [
        // Validators.required
      ]],
    });

    this.invoiceService = [{}];
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit() { }

  fetchServices() {
    this._service.getAll().snapshotChanges()
      .pipe(
        map(changes => changes.map(c => (
          { _doc: c.payload.doc.id, ...c.payload.doc.data() }
        )))
      )
      .subscribe((data: Service[]) => {
        this.serviceList = data;
      });
  }

  fetchCustomers() {
    this._customer.getAll().snapshotChanges()
      .pipe(
        map(changes => changes.map(c => (
          { _doc: c.payload.doc.id, ...c.payload.doc.data() }
        )))
      )
      .subscribe((data: Customer[]) => {
        this.customerList = data;
      });
  }

  getByNameServices(name: string) {
    this._service.getByName(name).snapshotChanges()
      .pipe(
        map(changes => changes.map(c => (
          { _doc: c.payload.doc.id, ...c.payload.doc.data() }
        )))
      )
      .subscribe((data: Service[]) => {
        this.serviceList = data;
      });
  }

  changePaymentOptions() {
    if (this.paymentOptions.showEndDate) {
      this.form.controls.expiredDate.setValue(moment().add(7, 'days').format('DD.MM.YYYY'));
      this.form.controls.expiredDate.setValidators(
        [
          Validators.required,
          DateValidator.ueFormat
        ]
      );
      this.form.controls.expiredDate.updateValueAndValidity();
    }
  }

  typeaheadOnSelectService(event: any, index: number) {
    if (event) {
      this.invoiceService[index] = event.item;
      this.invoiceService[index]._isSelected = true;
      if (event.item.count) {
        this.invoiceService[index].count = event.item.count;
      } else {
        this.invoiceService[index].count = 1;
      }
    }
  }

  resetCustomer() {
    this.f.billTo.setValue(null);
  }

  typeaheadOnSelectCustomer(event: any) {
    if (event) {
      this.f.billTo.setValue(event.item);
      this.customerData = event.item.VSN;
    }
  }

  addNewService() {
    this.invoiceService.push({});
  }

  removeRow(index: number) {
    this.invoiceService.splice(index, 1);
  }

  getSummValue() {
    let summ = 0;

    this.invoiceService.forEach((element: Service) => {
      if (element.count && element.price) {
        summ += element.count * element.price;
      }
    });

    return summ;
  }

  checkInvoiceServiceList() {
    this.invoiceService.forEach(element => {
      if (element) {
        this.validInvoiceServiceList = false;
        return;
      } else {
        // return;
      }
    });
  }

  save() {
    if (!this.invoiceService || this.form.invalid) {
      return;
    }

    this.form.controls.services.setValue(this.invoiceService);
    this._invoice.add(this.form.value);
  }

  // public getCitiesAsObservable(token: string): Observable<any> {
  //   return Observable.of(
  //     this.citiesComplex.filter((city: any) => {
  //       return city.name.startsWith(token) || city.country.startsWith(token);
  //     })
  //   );
  // }
}
