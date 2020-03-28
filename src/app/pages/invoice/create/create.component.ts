import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Invoice } from 'src/app/models/invoice.model';
import { InvoiceService } from 'src/app/services/invoice.service';
import { AuthService } from 'src/app/services/auth.service';

// PDF
// import * as jsPDF from 'jspdf';
// import * as html2pdf from 'html2pdf.js';
//

// jsPDF
// declare var jsPDF: any;
declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');
//

@Component({
  selector: 'data-invoice-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class InvoiceCreateComponent implements OnInit {
  @ViewChild('invoice', { static: false }) invoiceHtml: ElementRef;

  constructor(
    private _invoice: InvoiceService,
    private _auth: AuthService,
  ) { }

  ngOnInit() {
  }

  generateHtmlPdf() {
    const options = {
      filename: 'testHtmlToPdf.pdf',
      image: {type: 'jpeg'},
      html2canvas: {},
      jsPDF: {orientation: 'p'}
    };

    const content = this.invoiceHtml.nativeElement.innerHTML;
  }

  add() {
    const invoice = new Invoice('1', '3123-333');
    invoice._userId = this._auth.getUserId();
    this._invoice.add(invoice);
  }
}
