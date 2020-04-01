// export class Customer {
//   _id: string;
//   _userId: string;
//   UNP: string;
//   companyName: string;
//   companyTypeId: string;

import * as moment from 'moment';
// import { Address } from 'cluster';

//   // company: Company;
//   // legalAddress: LegalAddress;
//   // bankAddress: BankAddress;

//   //
//   // EGR
//   //
//   // 1) TP - тип субъекта хозяйствования(1 - юридическое лицо, 2 - индивидуальный предприниматель)
//   TP: number;
//   // 2) NM - регистрационный номер субъекта хозяйствования.
//   NM: number;
//   // 3) DC - дата регистрации субъекта хозяйствования.
//   DC: string;
//   // 4) DD - дата исключения из ЕГР(прекращения деятельности в связи с реорганизацией) субъекта хозяйствования.
//   DD: string;
//   // 5) NU - код текущего органа учета субъекта хозяйствования.
//   NU: number;
//   // 6) VU - наименование текущего органа учета субъекта хозяйствования.
//   VU: string;
//   // 7) NS - код текущего состояния субъекта хозяйствования.
//   NS: boolean;
//   // 8) VS - наименование текущего состояния субъекта хозяйствования.
//   VS: string;
//   // 9) VNM - полное наименование юридического лица / ФИО индивидуального предпринимателя на русском языке.
//   VNM: string;
//   // 10) VSN - сокращенное наименование юридического лица на русском языке.
//   VSN: string;
//   // 11) VFN - фирменное наименование юридического лица на русском языке.
//   VFN: string;
//   // 12) ACT - признак активности записи.
//   ACT: boolean;
//   // 13) Z - наличие запрета на отчуждение доли участника в уставном фонде коммерческой организации.
//   Z: boolean;
//   // 14) VNMB - полное наименование юридического лица на белорусском языке.
//   VNMB: string;
//   // 15) VSNB - сокращенное наименование юридического лица на белорусском языке.
//   VSNB: string;
//   // 16) VFNB - фирменное наименование юридического лица на белорусском языке.
//   VFNB: string;


//   constructor(
//     UNP: string,
//     companyName: string,
//     companyTypeId: string,
//     _id?: string,
//     _userId?: string,
//     TP?: number,
//     NM?: number,
//     DC?: string,
//     DD?: string,
//     NU?: number,
//     VU?: string,
//     NS?: boolean,
//     VS?: string,
//     VNM?: string,
//     VSN?: string,
//     VFN?: string,
//     ACT?: boolean,
//     Z?: boolean,
//     VNMB?: string,
//     VSNB?: string,
//     VFNB?: string,
//   ) {
//     this.UNP = UNP;
//     this.companyName = companyName;
//     this.companyTypeId = companyTypeId;
//     this._userId = _userId;

//     // EGR setter
//     this.TP = TP;
//     this.NM = NM;
//     this.DC = DC;
//     this.DD = DD;
//     this.NU = NU;
//     this.VU = VU;
//     this.NS = NS;
//     this.VS = VS;
//     this.VNM = VNM;
//     this.VSN = VSN;
//     this.VFN = VFN;
//     this.ACT = ACT;
//     this.Z = Z;
//     this.VNMB = VNMB;
//     this.VSNB = VSNB;
//     this.VFNB = VFNB;
//   }
// }

export class Customer {
  _id: string;
  _userId: string;
  _createdDate: string;

  // 1) TP - тип субъекта хозяйствования(1 - юридическое лицо, 2 - индивидуальный предприниматель)
  TP: number;
  // 2) NM - регистрационный номер субъекта хозяйствования.
  NM: number;
  // 3) DC - дата регистрации субъекта хозяйствования.
  DC: string;
  // 4) DD - дата исключения из ЕГР(прекращения деятельности в связи с реорганизацией) субъекта хозяйствования.
  DD: string;
  // 5) NU - код текущего органа учета субъекта хозяйствования.
  NU: number;
  // 6) VU - наименование текущего органа учета субъекта хозяйствования.
  VU: string;
  // 7) NS - код текущего состояния субъекта хозяйствования.
  NS: boolean;
  // 8) VS - наименование текущего состояния субъекта хозяйствования.
  VS: string;
  // 9) VNM - полное наименование юридического лица / ФИО индивидуального предпринимателя на русском языке.
  VNM: string;
  // 10) VSN - сокращенное наименование юридического лица на русском языке.
  VSN: string;
  // 11) VFN - фирменное наименование юридического лица на русском языке.
  VFN: string;
  // 12) ACT - признак активности записи.
  ACT: boolean;
  // 13) Z - наличие запрета на отчуждение доли участника в уставном фонде коммерческой организации.
  Z: boolean;
  // 14) VNMB - полное наименование юридического лица на белорусском языке.
  VNMB: string;
  // 15) VSNB - сокращенное наименование юридического лица на белорусском языке.
  VSNB: string;
  // 16) VFNB - фирменное наименование юридического лица на белорусском языке.
  VFNB: string;

  email: string;
  legalAddress: LegalAddress;
  postAddress: PostAddress;
  bank: Bank;

  constructor(
    _id?: string,
    _userId?: string,
    _createdDate?: string,
    TP?: number,
    NM?: number,
    DC?: string,
    DD?: string,
    NU?: number,
    VU?: string,
    NS?: boolean,
    VS?: string,
    VNM?: string,
    VSN?: string,
    VFN?: string,
    ACT?: boolean,
    Z?: boolean,
    VNMB?: string,
    VSNB?: string,
    VFNB?: string,
  ) {
    this._id = _id;
    this._userId = _userId;
    // this._createdDate = _createdDate ? _createdDate : moment.utc().toDate();
    this._createdDate = _createdDate ? _createdDate : moment.utc().toString();

    this.TP = TP ? TP : null;
    this.NM = NM ? NM : null;
    this.DC = DC ? DC : null;
    this.DD = DD ? DD : null;
    this.NU = NU ? NU : null;
    this.VU = VU ? VU : null;
    this.NS = NS ? NS : null;
    this.VS = VS ? VS : null;
    this.VNM = VNM ? VNM : null;
    this.VSN = VSN ? VSN : null;
    this.VFN = VFN ? VFN : null;
    this.ACT = ACT ? ACT : null;
    this.Z = Z ? Z : null;
    this.VNMB = VNMB ? VNMB : null;
    this.VSNB = VSNB ? VSNB : null;
    this.VFNB = VFNB ? VFNB : null;
  }
}

export class LegalAddress {
  country: string;
  city: string;
  zipCode: string;
  street: string;
  home: string;
  office: string;
}

export class PostAddress {
  country: string;
  city: string;
  zipCode: string;
  street: string;
  home: string;
  office: string;
}

export class Bank {
  country: string;
  city: string;
  zipCode: string;
  street: string;
  home: string;
  office: string;
  name: string;
  BIC: string;
  SWIFT: string;

  constructor(
    name?: string,
    BIC?: string,
    SWIFT?: string,
  ) {
    this.name = name;
    this.BIC = BIC;
    this.SWIFT = SWIFT;
  }
}



// export class Company {
//   companyType: string;
//   companyName: string;
//   companyFullName: string; // companyName + companyName
//   UNP: string;
//   OKPO: string;
//   director: Contact;
//   phones: number[];
//   email: string;
//   site: string;
// }

// export class LegalAddress {
//   country: string;
//   city: string;
//   index: string;
//   street: string;
//   home: string;
//   office: string;
// }

// export class BankAddress {
//   country: string;
//   city: string;
//   index: string;
//   street: string;
//   home: string;
//   office: string;
//   BIC: string;
// }

// export class Contact {
//   firstName: string;
//   lastName: string;
//   authority: string;
// }
