import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { startGetUsers } from "store/users/thunks";
import { IUser } from "../interfaces/IUser.interface";
import { useLocation } from "react-router-dom";
import { startGetBusiness } from "../store/business/thunks";

export const useGetData = (type: "users" | "business") => {
  const dispatch = useAppDispatch();

  const { usersReducer, businessReducer } = useAppSelector((state) => state);

  // useMemo is goint to compare the data and the status of the reducer and if they are the same, it will not re-render the component.
  const { data, status } = useMemo(
    () => (type === "users" ? usersReducer : businessReducer),
    [usersReducer, businessReducer, type]
  );

  useEffect(() => {
    if (type === "users") {
      dispatch(startGetUsers());
    } else {
      dispatch(startGetBusiness());
    }
  }, [type]);

  return { data, status };
};
