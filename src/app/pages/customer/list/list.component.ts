import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { CustomerService } from 'src/app/services/customer.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'data-customer-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];

  constructor(
    public _db: AngularFireDatabase,
    private _customer: CustomerService,
  ) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  add() {
    let customer = new Customer('123123123123', 'Test company name', '290348dfhsdf234fewf');
    this._customer.add(customer);
  }

  getCustomers() {
    this._customer.getAll().snapshotChanges()
      .pipe(
        map(changes => changes.map(c => (
          { _id: c.payload.doc.id, ...c.payload.doc.data() }
        )))
      )
      .subscribe((data: Customer[]) => {
        this.customerList = data;
      });
  }

  deleteCustomer(_id: string) {
    this._customer.delete(_id)
      .catch(
        error => {
          console.log('Error delete: ', error);
        }
      );
  }
}
