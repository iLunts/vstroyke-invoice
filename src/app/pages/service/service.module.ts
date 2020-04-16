import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceListComponent } from './list/list.component';
import { ServiceCreateComponent } from './create/create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [
    ServiceListComponent,
    ServiceCreateComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
