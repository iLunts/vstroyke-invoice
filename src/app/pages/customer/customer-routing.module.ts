import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './list/list.component';
import { CustomerCreateComponent } from './create/create.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CustomerListComponent,
      },
      {
        path: 'create',
        component: CustomerCreateComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
