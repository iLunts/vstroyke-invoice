import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { DateValidator } from 'src/app/validators/date-time.validator';
import { Service } from 'src/app/models/service.model';
import { ServicesService } from 'src/app/services/services.service';
import { map } from 'rxjs/operators';

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

  constructor(
    private _fb: FormBuilder,
    private _service: ServicesService,
  ) {
    this.getServices();
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
      total: [12455.99, [
        Validators.required,
      ]],
      billFrom: new FormGroup({}),
      billTo: new FormGroup({}),
      services: new FormGroup({}),
    });

    this.invoiceService = [
      {
        name: 'Аренда мини-экскаватора',
        unit: 'час',
        count: 8,
        price: 45,
        tax: '0',
        summ: 360
      },
    ];
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit() { }

  getServices() {
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

  changePaymentOptions() { }

  save() { }

  typeaheadOnSelect(event: any, index: number) {
    if(event) {
      this.invoiceService[index] = event.item;
      if (event.item.minCount) {
        this.invoiceService[index].count = event.item.minCount;
      } else {
        this.invoiceService[index].count = 1;
      }
      // debugger;
    }
  }

  addNewService() {
    this.invoiceService.push(
      {
        name: null
      }
    );
  }
}
