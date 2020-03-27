export class Customer {
  _id: string;
  UNP: string;
  companyName: string;
  companyTypeId: string;
  // company: Company;
  // legalAddress: LegalAddress;
  // bankAddress: BankAddress;

  constructor(
    UNP: string,
    companyName: string,
    companyTypeId: string,
    _id?: string,
  ) {
    this.UNP = UNP;
    this.companyName = companyName;
    this.companyTypeId = companyTypeId;
  }
}

export class Company {
  companyType: string;
  companyName: string;
  companyFullName: string; // companyName + companyName
  UNP: string;
  OKPO: string;
  director: Contact;
  phones: number[];
  email: string;
  site: string;
}

export class LegalAddress {
  country: string;
  city: string;
  index: string;
  street: string;
  home: string;
  office: string;
}

export class BankAddress {
  country: string;
  city: string;
  index: string;
  street: string;
  home: string;
  office: string;
  BIC: string;
}

export class Contact {
  firstName: string;
  lastName: string;
  authority: string;
}
