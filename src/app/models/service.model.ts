// import { Price } from './invoice.model';
import { Unit } from './unit.model';

export class Service {
  _id: string;
  _userId: string;
  _groupId: string;
  desc: string;
  minCount: number;
  name: string;
  price: number;
  // price: Price;
  tax: number;
  unit: Unit;
}
