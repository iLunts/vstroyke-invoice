export class Invoice {
  id: string;
  customer: Customer;
  services: Service[];

  constructor() {
    this.customer = new Customer();
    this.services.push(new Service());
  }
}

export class Customer {
  fullName: string;
  address: string;
}

export class Service {
  name: string;
  price: Price;
}

export class Price {
  amount: number;
  currency: number;
}
