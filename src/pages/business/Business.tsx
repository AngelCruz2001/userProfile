import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { useEffect } from "react";
import { startGetUserByID } from "store/users/thunks";
import styles from "styles/modules/User.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCity,
  faEnvelope,
  faFlag,
  faGlobe,
  faHashtag,
  faHouse,
  faMailForward,
  faPhone,
  faStreetView,
  faTreeCity,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { ItemInfo } from "../../components/itemInfo/ItemInfo";
import { startGetBusinessByID } from "../../store/business/thunks";
import { useBusiness } from "hooks/useBusiness";

export const Business = () => {
  const { idBusiness } = useParams<{ idBusiness: string }>();

  const { activeBusiness, activeUser } = useBusiness(idBusiness);

  if (!activeBusiness) {
    return <h1>Elija un usuario</h1>;
  }

  return (
    <div className={styles.content}>
      <ItemInfo text={activeBusiness.name} icon={faUser} isATittle={true} />
      <ItemInfo text={activeBusiness.email} icon={faEnvelope} />
      <ItemInfo text={activeBusiness.address.country} icon={faGlobe} />
      <ItemInfo text={activeBusiness.address.state} icon={faFlag} />
      <ItemInfo text={activeBusiness.address.city} icon={faCity} />
      <div style={{ display: "flex", gap: "2rem" }}>
        <ItemInfo text={activeBusiness.address.colony} icon={faTreeCity} />
        <hr />
        <ItemInfo text={activeBusiness.address.street} icon={faStreetView} />
        <hr />
        <ItemInfo text={activeBusiness.address.streetNumber} icon={faHashtag} />
      </div>
      <ItemInfo text={activeBusiness.address.zipCode} icon={faHouse} />
      <ItemInfo text={activeBusiness.dateCreated} icon={faCalendar} />
      <ItemInfo
        text={
          activeUser
            ? `Representada por ${activeUser.name}`
            : "Cargando representante"
        }
        icon={faUser}
      />
    </div>
  );
};
