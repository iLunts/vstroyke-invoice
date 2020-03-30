import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './list/list.component';
import { CustomerCreateComponent } from './create/create.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerCreateComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
