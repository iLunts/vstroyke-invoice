import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceModule } from './pages/invoice/invoice.module';


const routes: Routes = [
  {
    path: 'invoice',
    loadChildren: () => import('./pages/invoice/invoice.module').then(m => m.InvoiceModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./pages/customer/customer.module').then(m => m.CustomerModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
