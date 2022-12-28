import { IAddress } from "./IAddress.interface";

export interface IUser {
  id: string;
  name: string;
  email: string;
  nationality: string;
  phone: string;
  address: IAddress;
  businessRepresentative: string;
}

export interface IUserName {
  id: string;
  name: string;
}
