import { IAddress } from "./IAddress.interface";

export interface IBusiness {
  id: string;
  name: string;
  email: string;
  address: IAddress;
  dateCreated: string;
  userRepresentative: string | null;
}

export interface IBusinessName {
  id: string;
  name: string;
}
