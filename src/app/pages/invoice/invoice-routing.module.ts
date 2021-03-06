import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceListComponent } from './list/list.component';
import { InvoiceCreateComponent } from './create/create.component';
import { InvoiceDetailsComponent } from './details/details.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: InvoiceListComponent,
      },
      {
        path: 'create',
        component: InvoiceCreateComponent,
      },
      {
        path: ':id',
        component: InvoiceDetailsComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
