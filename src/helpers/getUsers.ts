import { IUser } from "interfaces/IUser.interface";
import { v4 as uuid } from "uuid";
import { IUserName } from "../interfaces/IUser.interface";
const users: IUser[] = [
  //This would be a simulation of a database.
  {
    id: "e41333c-0847-4add-8a40-b2bd7d5388f5",
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "555-555-5555",
    address: {
      street: "Main St",
      streetNumber: "123",
      city: "New York",
      state: "NY",
      unitNumber: "123",
      zipCode: "12345",
      colony: "Colonia 1",
      municipality: "Municipio 1",
      country: "Mexico",
    },
    nationality: "Mexican",
    businessRepresentative: "59892075-cfa8-41f7-b3ff-e6d101533ff7",
  },
];

// We have some methods that the backend would have to provide us with.
export const getUsers = () => users;

export const getUsersName = () => {
  const usersName = users.map<IUserName>((user) => {
    return {
      id: user.id,
      name: user.name,
    };
  });

  return usersName;
};

export const getUserByID = (id: string) => {
  const user = users.find((user) => user.id === id);

  return user;
};

export const addUser = (user: IUser) => {
  users.push(user);
};
