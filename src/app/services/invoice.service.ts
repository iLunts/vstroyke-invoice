import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Invoice } from '../models/invoice.model';
import { Observable } from 'rxjs';
import { map
 } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private dbPath = '/invoices';
  invoicesRef: AngularFirestoreCollection<Invoice> = null;

  constructor(
    private _fs: AngularFirestore,
    private _auth: AuthService,
  ) {
    this.invoicesRef = _fs.collection(this.dbPath, q => q.where('_userId', '==', this._auth.getUserId()));
  }

  getAll(): Observable<Invoice[]> {
    return this.invoicesRef.snapshotChanges()
      .pipe(
        map(changes => changes.map(c => (
          {
            _id: c.payload.doc.id,
            ...c.payload.doc.data()
          }
        )))
      );
  }

  get(id: string) {
    return this._fs.collection(this.dbPath, q => q.where('_id', '==', id)).valueChanges();

    // return this.invoicesRef.snapshotChanges()
    //   .pipe(
    //     map(changes => changes.map(c => (
    //       {
    //         _id: c.payload.doc.id,
    //         ...c.payload.doc.data()
    //       }
    //     )))
    //   );
  }

  add(invoice: Invoice): void {
    this.invoicesRef.add({ ...invoice});
  }

  delete(_id: string): Promise<void> {
    return this.invoicesRef.doc(_id).delete();
  }

  update(_id: string, value: any): Promise<void> {
    return this.invoicesRef.doc(_id).update(value);
  }
}
