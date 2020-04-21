import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Customer } from '../models/customer.model';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Observable } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private dbPath = '/customers';
  customersRef: AngularFirestoreCollection<Customer> = null;
  dbRef: AngularFirestoreCollection<Customer> = null;

  constructor(
    private _fs: AngularFirestore,
    private _auth: AuthService,
    private _router: Router,
    private _notification: NotificationService,
    // notifierService: NotifierService,
  ) {
    this.customersRef = _fs.collection(this.dbPath, q => q.where('_userId', '==', this._auth.getUserId()));
  }

  getAll(): AngularFirestoreCollection<Customer> {
    return this.customersRef;
  }

  add(customer: Customer): void {
    const pushkey = this._fs.createId();
    customer._id = pushkey;
    this._fs.collection(this.dbPath).doc(pushkey).set({ ...customer });
    this._router.navigate(['/customer']);
    this._notification.success('Контрагент успешно создан');
  }

  delete(_id: string): Promise<void> {
    return this.customersRef.doc(_id).delete();
  }

  update(_id: string, value: any): Promise<void> {
    return this.customersRef.doc(_id).update(value);
  }
}
