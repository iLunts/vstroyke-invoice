import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './list/list.component';
import { CustomerCreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerCreateComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
