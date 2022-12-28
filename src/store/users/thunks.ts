import { getUserByID, getUsersName } from "helpers/getUsers";
import {
  addNewUser,
  setActiveUser,
  setStatus,
  setStatusUser,
  setUsers,
} from "./usersSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { IUser } from "../../interfaces/IUser.interface";
import { addUser } from "../../helpers/getUsers";
import {
  getBusinessByID,
  setUserRepresentative,
} from "../../helpers/getBusiness";

export const startGetUsers = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setStatus("loading"));
    setTimeout(() => {
      // Simulate a delay to show the loading state in the UI
      const users = getUsersName();
      dispatch(setUsers(users));
      dispatch(setStatus("idle"));
    }, 1000);
  } catch (error) {
    dispatch(setStatus("failed"));
  }
};

export const startGetUserByID = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(setStatusUser("loading"));

    setTimeout(() => {
      // Simulate a delay to show the loading state in the UI
      const user = getUserByID(id); // With the names and ids of the users, we can get the user by id to show the details in the active user. This is the same as the business
      if (!user) {
        dispatch(setStatusUser("failed"));
        toast.error("Hubo un error al obtener el usuario, intenta de nuevo");
        return;
      }

      dispatch(setStatusUser("idle"));
      dispatch(setActiveUser(user));
    }, 1000);
  } catch (error) {
    console.error(error);
    toast.error("Hubo un error al cargar el usuario");
    dispatch(setStatus("failed"));
  }
};

export const startAddingUser =
  (user: IUser, resetForm: () => void) => async (dispatch: Dispatch) => {
    try {
      const business = getBusinessByID(user.businessRepresentative);

      console.log(business?.name, user.name, business?.userRepresentative);

      if (!business) {
        toast.error("Hubo un error al obtener la empresa, intenta de nuevo");
        return;
      }

      if (
        business.userRepresentative !== user.id &&
        business.userRepresentative
      ) {
        toast.error("Esta empresa ya tiene un usuario asignado");
        return;
      }

      setTimeout(() => {
        // Simulate a delay to show the loading state in the UI
        setUserRepresentative(user.businessRepresentative, user.id); // We set the user as the representative of the business

        addUser(user);
        dispatch(addNewUser(user));

        toast.success(() => {
          resetForm();
          return "Usuario agregado correctamente";
        });
      }, 100);
    } catch (error) {
      console.error(error);
      dispatch(setStatus("failed"));
    }
  };
