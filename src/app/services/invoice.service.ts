import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Invoice } from '../models/invoice.model';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private dbPath = '/invoices';
  invoicesRef: AngularFirestoreCollection<Invoice> = null;

  constructor(
    private _fs: AngularFirestore,
  ) {
    this.invoicesRef = _fs.collection(this.dbPath);
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
