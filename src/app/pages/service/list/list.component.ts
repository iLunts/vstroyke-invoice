import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Service } from 'src/app/models/service.model';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'data-service-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ServiceListComponent implements OnInit {
  serviceList: Service[] = [];

  constructor(
    private _service: ServicesService,
    private _notifcation: NotificationService,
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

  delete(_id: string) {
    this._service.delete(_id).catch(
      error => {
        this._notifcation.error(error);
      }
    );
  }
}
