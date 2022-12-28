import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBusiness, IBusinessName } from "../../interfaces/IBusiness.interface";

interface IBusinessState {
  data: IBusinessName[] | null;
  activeBusiness: IBusiness | null;
  status: "idle" | "loading" | "failed";
  businessStatus: "idle" | "loading" | "failed";
}

const initialState: IBusinessState = {
  data: null,
  activeBusiness: null,
  status: "idle",
  businessStatus: "idle",
};

export const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {
    setBusiness: (state, action: PayloadAction<IBusinessName[]>) => {
      state.data = action.payload;
    },
    setActiveBusiness: (state, action: PayloadAction<IBusiness>) => {
      state.activeBusiness = action.payload;
    },
    setStatus: (
      state,
      action: PayloadAction<"idle" | "loading" | "failed">
    ) => {
      state.status = action.payload;
    },
    setBusinessStatus: (
      state,
      action: PayloadAction<"idle" | "loading" | "failed">
    ) => {
      state.businessStatus = action.payload;
    },
    addNewBusiness: (state, action: PayloadAction<IBusiness>) => {
      const businessName = {
        id: action.payload.id,
        name: action.payload.name,
      };

      if (state.data) state.data.push(businessName);
      else state.data = [businessName];
    },
  },
});

export const {
  setBusiness,
  setActiveBusiness,
  setStatus,
  setBusinessStatus,
  addNewBusiness,
} = businessSlice.actions;
