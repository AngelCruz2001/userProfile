import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { startGetUserByID } from "store/users/thunks";
import { startGetBusinessByID } from "store/business/thunks";

export const useBusiness = (idBusiness: string | undefined) => {
  const dispatch = useAppDispatch();

  const { activeBusiness } = useAppSelector((state) => state.businessReducer);

  const { activeUser } = useAppSelector((state) => state.usersReducer);

  useEffect(() => {
    if (
      activeBusiness?.userRepresentative &&
      activeBusiness.userRepresentative !== null
    ) {
      dispatch(startGetUserByID(activeBusiness.userRepresentative));
    }
  }, [dispatch, activeBusiness]);

  useEffect(() => {
    if (idBusiness) {
      dispatch(startGetBusinessByID(idBusiness));
    }
  }, [dispatch, idBusiness]);

  return { activeBusiness, activeUser };
};
