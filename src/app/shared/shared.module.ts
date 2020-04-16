import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask'
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

// Custom components
import { FbFieldComponent } from '../components/ui/fields/field/field.component';
import { FbFieldErrorComponent } from '../components/ui/fields/field-error/field-error.component';
import { FbFieldInfoComponent } from '../components/ui/fields/field-info/field-info.component';
import { FbButtonComponent } from '../components/ui/buttons/button/button.component';
import { FbToggleComponent } from '../components/ui/fb-toggle/fb-toggle.component';
import { InvoiceTableComponent } from '../components/invoice-table/invoice-table.component';
import { InvoiceCreaterComponent } from '../components/invoice-creater/invoice-creater.component';
//

// NGX Bootstrap
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
//

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
//

import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { StrictInputDirective } from '../directives/strict-input.directive';
//

import { NotifierModule, NotifierOptions } from "angular-notifier";
import { NotFoundPageComponent } from '../pages/not-found-page/not-found-page.component';
import { SummToStringPipe } from '../pipes/summ-to-string.pipe';

const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'middle',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 10,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    // StrictInputDirective,
    FbFieldComponent,
    FbFieldErrorComponent,
    FbFieldInfoComponent,
    FbButtonComponent,
    FbToggleComponent,
    InvoiceTableComponent,
    InvoiceCreaterComponent,
    NotFoundPageComponent,
    SummToStringPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    TypeaheadModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxMaskModule.forRoot(),
    NotifierModule.withConfig(customNotifierOptions),
    FlexLayoutModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    NotFoundPageComponent,
    // StrictInputDirective,
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
    TypeaheadModule,
    BsDatepickerModule,
    NgxMaskModule,
    NotifierModule,
    FlexLayoutModule,
    SummToStringPipe,
  ]
})
export class SharedModule { }
