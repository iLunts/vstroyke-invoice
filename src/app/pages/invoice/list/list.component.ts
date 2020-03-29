import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer.model';
import { map } from 'rxjs/operators';
import { InvoiceService } from 'src/app/services/invoice.service';
import { Invoice } from 'src/app/models/invoice.model';
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
    this._invoice.getAll().subscribe(
      (data: any) => {
        this.listData = data;
      }
    );
  }

  delete(_id: string) {
    this._invoice.delete(_id)
    .catch(
      error => {
        console.log('Error delete: ', error);
      }
    );
  }
}
