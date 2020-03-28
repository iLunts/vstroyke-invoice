import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';
import { Invoice } from 'src/app/models/invoice.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'data-invoice-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class InvoiceDetailsComponent implements OnInit {
  invoice: Invoice;

  constructor(
    private _invoice: InvoiceService,
    private _route: ActivatedRoute,
  ) {
    this._route.params.subscribe((params: any) => {
      if (params.id) {
        this.fetch(params.id);
      }
    })
  }

  ngOnInit() { }

  fetch(id?: string) {
    if (id) {
      this._invoice.get(id).subscribe(
        (data: any) => {
          if(data) {
            this.invoice = data[0];
          }
        }
      );
    }
  }

}
