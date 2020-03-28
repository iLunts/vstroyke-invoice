import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Customer } from '../models/customer.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private dbPath = '/customers';
  customersRef: AngularFirestoreCollection<Customer> = null;

  constructor(
    private _fs: AngularFirestore,
    private _auth: AuthService,
  ) {
    this.customersRef = _fs.collection(this.dbPath, q => q.where('_userId', '==', this._auth.getUserId()));
  }

  getAll(): AngularFirestoreCollection<Customer> {
    return this.customersRef;
  }

  add(customer: Customer): void {
    this.customersRef.add({...customer});
  }

  delete(_id: string): Promise<void> {
    return this.customersRef.doc(_id).delete();
  }

  update(_id: string, value: any): Promise<void> {
    return this.customersRef.doc(_id).update(value);
  }
}
