import { NgModule } from '@angular/core';
import { InvoiceTableComponent } from '../components/invoice-table/invoice-table.component';
import { InvoiceCreaterComponent } from '../components/invoice-creater/invoice-creater.component';
import { FbFieldComponent } from '../components/ui/fields/field/field.component';
import { FbFieldErrorComponent } from '../components/ui/fields/field-error/field-error.component';
import { FbFieldInfoComponent } from '../components/ui/fields/field-info/field-info.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    // FbFieldComponent,
    // FbFieldErrorComponent,
    // FbFieldInfoComponent,
    // InvoiceTableComponent,
    // InvoiceCreaterComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    // FbFieldComponent,
    // FbFieldErrorComponent,
    // FbFieldInfoComponent,
    // InvoiceTableComponent,
    // InvoiceCreaterComponent,
  ]
})
export class ComponentsModule { }
