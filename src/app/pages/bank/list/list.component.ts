import { Component, OnInit } from '@angular/core';
import { ImportService } from 'src/app/services/import.service';
import { BankService } from 'src/app/services/bank.service';
import { Bank } from 'src/app/models/bank.model';

@Component({
  selector: 'data-bank-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class BankListComponent implements OnInit {
  bankList: Bank[] = [];

  constructor(
    private _import: ImportService,
    private _bank: BankService,
  ) {
    this.fetch();
  }

  ngOnInit() {
  }

  fetch() {
    this._bank.getAll().valueChanges().subscribe(
      (data: Bank[]) => {
        if (data) {
          this.bankList = data;
        }
      }
    );
  }

  import() {
    // this._import.importAll();
    this._import.importBanks();
  }

}
