import { IUser } from "interfaces/IUser.interface";
import { v4 as uuid } from "uuid";
import { IUserName } from "../interfaces/IUser.interface";

// We have some methods that the backend would have to provide us with.
export const getUsers = () =>
  JSON.parse(localStorage.getItem("users")!) as IUser[];

export const getUsersName = () => {
  const users = getUsers();
  const usersName = users.map<IUserName>((user) => {
    return {
      id: user.id,
      name: user.name,
    };
  });

  return usersName;
};

export const getUserByID = (id: string) => {
  const users = getUsers();
  console.log(users);
  const user = users.find((user) => user.id === id);

  return user;
};

export const addUser = (user: IUser) => {
  const users = getUsers();
  users.push(user);
  console.log(users);
  localStorage.setItem("users", JSON.stringify(users));
};
