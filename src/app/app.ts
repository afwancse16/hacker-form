export interface ICountry {
  code: string;
  code3: string;
  name: string;
  number: string;
}

export interface ILanguage {
  name: string;
  code: string;
}

export interface IAccount {
  name: string;
  username: string;
  title: string;
  company: string;
  about: string;
  email: string;
  phone: string;
  country: string;
  language: string;
}

export interface INotification {
  communication: boolean;
  security: boolean;
  meetups: boolean;
  somecomments: boolean;
  somementions: boolean;
  somefollows: boolean;
  somereplies: boolean;
}

export interface IPlan {
  plan: string;
  cardholdername: string;
  cardnumber: string;
  expdate: string;
  cvv: string;
  country: string;
  postalcode: string;
}
