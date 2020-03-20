import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceModule } from './pages/invoice/invoice.module';


const routes: Routes = [
  {
    path: 'invoice',
    loadChildren: () => import('./pages/invoice/invoice.module').then(m => m.InvoiceModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
