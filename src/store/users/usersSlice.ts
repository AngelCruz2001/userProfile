import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser, IUserName } from "interfaces/IUser.interface";

interface UserState {
  data: IUserName[] | null;
  activeUser: IUser | null;
  status: "idle" | "loading" | "failed";
  statusUser: "idle" | "loading" | "failed";
}

const initialState: UserState = {
  data: null,
  activeUser: null,
  status: "idle",
  statusUser: "idle",
};

export const usersSlice = createSlice({
  name: "usersReducer",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<IUserName[]>) {
      state.data = action.payload;
    },
    setActiveUser(state, action: PayloadAction<IUser>) {
      state.activeUser = action.payload;
    },
    setStatus(state, action: PayloadAction<"idle" | "loading" | "failed">) {
      state.status = action.payload;
    },
    addNewUser(state, action: PayloadAction<IUser>) {
      const userName = {
        id: action.payload.id,
        name: action.payload.name,
      };
      if (state.data) {
        state.data.push(userName);
      } else {
        state.data = [userName];
      }
    },
    setStatusUser(state, action: PayloadAction<"idle" | "loading" | "failed">) {
      state.statusUser = action.payload;
    },
  },
});

export const { addNewUser, setUsers, setActiveUser, setStatus, setStatusUser } =
  usersSlice.actions;
