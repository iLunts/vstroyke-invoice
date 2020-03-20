import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Invoice } from 'src/app/models/invoice.model';

// PDF
import * as jsPDF from 'jspdf';
import * as html2pdf from 'html2pdf.js';
//

@Component({
  selector: 'data-invoice-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class InvoiceCreateComponent implements OnInit {
  // invoice = new Invoice();
  @ViewChild('invoice', { static: false }) invoiceHtml: ElementRef;

  constructor() {}

  ngOnInit() {
  }

  // generatePdf() {
  //   let content = this.contentHtml.nativeElement.innerHTML;
  //   const doc = new jsPDF();
  //   doc.fromHTML(content, 10, 10, {}, function () {
  //     doc.output('export.pdf');
  //   });
  //   doc.save('test.pdf');
  // }

  generateHtmlPdf() {
    const options = {
      filename: 'testHtmlToPdf.pdf',
      image: {type: 'jpeg'},
      html2canvas: {},
      jsPDF: {orientation: 'p'}
    };

    let content = this.invoiceHtml.nativeElement.innerHTML;
    html2pdf().
      from(content).
      set(options).
      save();
  }
}
