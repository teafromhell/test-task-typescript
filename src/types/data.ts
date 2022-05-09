export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {[key:string]:string};
  phone: any;
  website: string;
  company: {[key:string]:string};
}

export interface IInput {
  name: string;
  username: string;
  comment: string;
  email: string;
  street: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
}
