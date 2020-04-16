import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Service } from 'src/app/models/service.model';

@Component({
  selector: 'data-service-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ServiceListComponent implements OnInit {
  serviceList: Service[] = [];

  constructor(
    private _service: ServicesService,
  ) {
    this.fetch();
  }

  ngOnInit() {
  }

  fetch() {
    this._service.getAll().valueChanges().subscribe(
      (data: Service[]) => {
        this.serviceList = data;
      }
    );
  }

}
