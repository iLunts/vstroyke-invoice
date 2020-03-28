import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActListComponent } from './list/list.component';
import { ActCreateComponent } from './create/create.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ActListComponent,
      },
      {
        path: 'create',
        component: ActCreateComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActRoutingModule { }
