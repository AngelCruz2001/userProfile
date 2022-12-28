import { getUserByID, getUsersName } from "helpers/getUsers";
import {
  addNewBusiness,
  setActiveBusiness,
  setBusiness,
  setBusinessStatus,
  setStatus,
} from "./businessSlice";

import { Dispatch } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { getBusinessName } from "helpers/getBusiness";
import { getBusinessByID, addBusiness } from "../../helpers/getBusiness";
import { IBusiness } from "../../interfaces/IBusiness.interface";

export const startGetBusiness = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setStatus("loading"));
    setTimeout(() => {
      // Simulate a delay to show the loading state in the UI
      const business = getBusinessName();
      dispatch(setBusiness(business));
      dispatch(setStatus("idle"));
    }, 2000);
  } catch (error) {
    dispatch(setStatus("failed"));
  }
};

export const startGetBusinessByID =
  (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(setBusinessStatus("loading"));

      setTimeout(() => {
        // Simulate a delay to show the loading state in the UI
        const business = getBusinessByID(id);

        if (!business) {
          dispatch(setBusinessStatus("failed"));
          toast.error("Hubo un error al obtener la empresa, intenta de nuevo");
          return;
        }

        dispatch(setBusinessStatus("idle"));
        dispatch(setActiveBusiness(business));
      }, 2000);
    } catch (error) {
      console.error(error);
      dispatch(setStatus("failed"));
    }
  };

export const startAddingBusiness =
  (business: IBusiness, resetForm: () => void) =>
  async (dispatch: Dispatch) => {
    try {
      setTimeout(() => {
        // Simulate a delay to show the loading state in the UI
        addBusiness(business);
        dispatch(addNewBusiness(business));
        toast.success(() => {
          resetForm();
          return "Empresa agregada correctamente";
        });
      }, 2000);
    } catch (error) {
      console.error(error);
      dispatch(setStatus("failed"));
    }
  };
