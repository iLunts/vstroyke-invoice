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
  {
    path: 'service',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/service/service.module').then(m => m.ServiceModule)
  },
  {
    path: 'settings',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'bank',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/bank/bank.module').then(m => m.BankModule)
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
