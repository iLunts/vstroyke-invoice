import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask'

// Custom components
import { FbFieldComponent } from '../components/ui/fields/field/field.component';
import { FbFieldErrorComponent } from '../components/ui/fields/field-error/field-error.component';
import { FbFieldInfoComponent } from '../components/ui/fields/field-info/field-info.component';
import { InvoiceTableComponent } from '../components/invoice-table/invoice-table.component';
import { InvoiceCreaterComponent } from '../components/invoice-creater/invoice-creater.component';
//

// NGX Bootstrap
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
//

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
//

import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StrictInputDirective } from '../directives/strict-input.directive';
import { FbToggleComponent } from '../components/ui/fb-toggle/fb-toggle.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FbButtonComponent } from '../components/ui/buttons/button/button.component';
//

@NgModule({
  declarations: [
    StrictInputDirective,
    FbFieldComponent,
    FbFieldErrorComponent,
    FbFieldInfoComponent,
    FbButtonComponent,
    FbToggleComponent,
    InvoiceTableComponent,
    InvoiceCreaterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxMaskModule.forRoot(),
  ],
  exports: [
    CommonModule,
    StrictInputDirective,
    FbFieldComponent,
    FbFieldErrorComponent,
    FbFieldInfoComponent,
    FbToggleComponent,
    FbButtonComponent,
    InvoiceTableComponent,
    InvoiceCreaterComponent,
    FormsModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    TooltipModule,
    TabsModule,
    BsDatepickerModule,
    NgxMaskModule,
  ]
})
export class SharedModule { }
