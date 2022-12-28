import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { useEffect } from "react";
import { startGetUserByID } from "store/users/thunks";
import styles from "styles/modules/User.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faEnvelope,
  faFlag,
  faGlobe,
  faHashtag,
  faHouse,
  faMailForward,
  faPersonChalkboard,
  faPhone,
  faStreetView,
  faTreeCity,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { ItemInfo } from "../../components/itemInfo/ItemInfo";
import { startGetBusinessByID } from "store/business/thunks";
import { useBusiness } from "hooks/useBusiness";
import { useUsers } from "hooks/useUsers";

export const User = () => {
  const { idUser } = useParams<{ idUser: string }>();

  const { activeBusiness, activeUser } = useUsers(idUser);
  if (!activeUser) {
    return <h1>Cargando información del usuario...</h1>;
  }

  return (
    <div>
      <div className={styles.content}>
        <ItemInfo text={activeUser.name} icon={faUser} isATittle={true} />
        <ItemInfo text={activeUser.email} icon={faEnvelope} />
        <ItemInfo text={activeUser.phone} icon={faPhone} />
        <ItemInfo text={activeUser.address.country} icon={faGlobe} />
        <ItemInfo text={activeUser.nationality} icon={faFlag} />
        <ItemInfo text={activeUser.address.city} icon={faCity} />
        <div style={{ display: "flex", gap: "2rem" }}>
          <ItemInfo text={activeUser.address.colony} icon={faTreeCity} />
          <hr />
          <ItemInfo text={activeUser.address.street} icon={faStreetView} />
          <hr />
          <ItemInfo text={activeUser.address.streetNumber} icon={faHashtag} />
        </div>
        <ItemInfo text={activeUser.address.zipCode} icon={faHouse} />
        <ItemInfo
          text={activeBusiness ? activeBusiness.name : "Cargando empresa"}
          icon={faPersonChalkboard}
        />
      </div>
    </div>
  );
};
