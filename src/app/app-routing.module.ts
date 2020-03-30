import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';


const routes: Routes = [
  {
    path: 'customer',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'invoice',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/invoice/invoice.module').then(m => m.InvoiceModule)
  },
  {
    path: 'act',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/act/act.module').then(m => m.ActModule)
  },
  {
    path: 'contract',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/contract/contract.module').then(m => m.ContractModule)
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
