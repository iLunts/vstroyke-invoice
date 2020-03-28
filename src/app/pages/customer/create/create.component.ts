import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'data-customer-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CustomerCreateComponent implements OnInit {

  constructor(
    private _customer: CustomerService,
    private _auth: AuthService,
  ) { }

  ngOnInit() {
  }

  save() {
    const customer = new Customer('123123123123', 'Test company name', '290348dfhsdf234fewf');
    customer._userId = this._auth.getUserId();
    this._customer.add(customer);
  }

}
