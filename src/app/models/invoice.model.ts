import { Customer } from './customer.model';

export class Invoice {
  _id: string;
  _userId: string;
  number: string;

  constructor(
    _userId?: string,
    number?: string,
  ) {
    this._userId = _userId;
    this.number = number;
  }
}

export class Service {
  name: string;
  price: Price;
}

export class Price {
  amount: number;
  currency: number;
}
