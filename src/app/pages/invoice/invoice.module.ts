import { NgModule } from '@angular/core';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceListComponent } from './list/list.component';
import { InvoiceCreateComponent } from './create/create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { ComponentsModule } from 'src/app/shared/components.module';


@NgModule({
  declarations: [
    InvoiceListComponent,
    InvoiceCreateComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
