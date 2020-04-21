import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer.model';
import { map } from 'rxjs/operators';
import { InvoiceService } from 'src/app/services/invoice.service';
import { Invoice } from 'src/app/models/invoice.model';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'data-invoice-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class InvoiceListComponent implements OnInit {
  listData: Customer[] = [];
  invoiceStatuses: any[] = [];

  constructor(
    public _db: AngularFireDatabase,
    private _invoice: InvoiceService,
    private _notification: NotificationService,
  ) {
  }

  ngOnInit() {
    this.fetchStatuses();
    this.fetch();
  }

  fetchStatuses() {
    this._invoice.getAllStatus().subscribe(
      (data: any) => {
        this.invoiceStatuses = data;
      }
    );
  }

  fetch() {
    // this._invoice.getAll().subscribe(
    //   (data: any) => {
    //     this.listData = data;
    //     debugger;
    //   }
    // );
    this._invoice.getAll().valueChanges().subscribe(
      (data: any) => {
        this.listData = data;
      }
    );
  }

  delete(_doc: string) {
    this._invoice.delete(_doc)
    .catch(
      error => {
        this._notification.error('Error delete: ' + error);
        console.log('Error delete: ', error);
      }
    );
  }
}
