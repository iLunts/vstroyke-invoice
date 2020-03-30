export class Customer {
  _id: string;
  _userId: string;
  UNP: string;
  companyName: string;
  companyTypeId: string;

  // company: Company;
  // legalAddress: LegalAddress;
  // bankAddress: BankAddress;

  //
  // EGR
  //
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


  constructor(
    UNP: string,
    companyName: string,
    companyTypeId: string,
    _id?: string,
    _userId?: string,
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
    this.UNP = UNP;
    this.companyName = companyName;
    this.companyTypeId = companyTypeId;
    this._userId = _userId;

    // EGR setter
    this.TP = TP;
    this.NM = NM;
    this.DC = DC;
    this.DD = DD;
    this.NU = NU;
    this.VU = VU;
    this.NS = NS;
    this.VS = VS;
    this.VNM = VNM;
    this.VSN = VSN;
    this.VFN = VFN;
    this.ACT = ACT;
    this.Z = Z;
    this.VNMB = VNMB;
    this.VSNB = VSNB;
    this.VFNB = VFNB;
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
