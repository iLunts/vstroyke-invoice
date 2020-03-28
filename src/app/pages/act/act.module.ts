import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActRoutingModule } from './act-routing.module';
import { ActListComponent } from './list/list.component';
import { ActCreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    ActListComponent,
    ActCreateComponent,
  ],
  imports: [
    CommonModule,
    ActRoutingModule
  ]
})
export class ActModule { }
