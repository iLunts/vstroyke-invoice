import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Service } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private dbPath = '/services';
  servicesRef: AngularFirestoreCollection<Service> = null;
  dbRef: AngularFirestoreCollection<Service> = null;
  private readonly notifier: NotifierService;

  constructor(
    private _fs: AngularFirestore,
    private _auth: AuthService,
    private _router: Router,
    notifierService: NotifierService,
  ) {
    this.notifier = notifierService;
    this.servicesRef = _fs.collection(this.dbPath, q => q.where('_userId', '==', this._auth.getUserId()));
  }

  getAll(): AngularFirestoreCollection<Service> {
    return this.servicesRef;
  }

  getByName(name: string): AngularFirestoreCollection<Service> {
    return this._fs.collection(this.dbPath, q => q.where('_userId', '==', this._auth.getUserId()).where('name', '>=', name));
  }

  add(service: Service): void {
    const pushkey = this._fs.createId();
    service._id = pushkey;
    this._fs.collection(this.dbPath).doc(pushkey).set({ ...service });
    this._router.navigate(['/service']);
    this.notifier.notify('success', 'Контрагент успешно создан');
  }

  delete(_id: string): Promise<void> {
    return this.servicesRef.doc(_id).delete();
  }

  update(_id: string, value: any): Promise<void> {
    return this.servicesRef.doc(_id).update(value);
  }
}
