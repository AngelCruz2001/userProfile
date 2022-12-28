import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { startGetUserByID } from "store/users/thunks";
import { startGetBusinessByID } from "store/business/thunks";
import { useEffect } from "react";

export const useUsers = (idUser: string | undefined) => {
  const dispatch = useAppDispatch();
  const {
    usersReducer: { activeUser, statusUser },
  } = useAppSelector((state) => state);

  const { activeBusiness } = useAppSelector((state) => state.businessReducer);
  const navigator = useNavigate();

  useEffect(() => {
    if (idUser) {
      dispatch(startGetUserByID(idUser));
    }
  }, [dispatch, idUser]);

  useEffect(() => {
    if (activeUser?.businessRepresentative) {
      dispatch(startGetBusinessByID(activeUser.businessRepresentative));
    }
  }, [dispatch, activeUser]);

  useEffect(() => {
    if (statusUser === "failed") {
      navigator("/users");
    }
  }, [statusUser, navigator]);

  return { activeUser, activeBusiness };
};
