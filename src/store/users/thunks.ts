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

export const startGetUsers = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setStatus("loading"));
    setTimeout(() => {
      // Simulate a delay to show the loading state in the UI
      const users = getUsersName();
      dispatch(setUsers(users));
      dispatch(setStatus("idle"));
    }, 2000);
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
    }, 2000);
  } catch (error) {
    console.error(error);
    toast.error("Hubo un error al cargar el usuario");
    dispatch(setStatus("failed"));
  }
};

export const startAddingUser =
  (user: IUser, resetForm: () => void) => async (dispatch: Dispatch) => {
    try {
      setTimeout(() => {
        // Simulate a delay to show the loading state in the UI
        addUser(user);
        dispatch(addNewUser(user));

        toast.success(() => {
          resetForm();
          return "Usuario agregado correctamente";
        });
      }, 2000);
    } catch (error) {
      console.error(error);
      dispatch(setStatus("failed"));
    }
  };
