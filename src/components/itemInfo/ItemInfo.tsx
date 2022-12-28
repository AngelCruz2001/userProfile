import {
  FontAwesomeIconProps,
  FontAwesomeIcon,
} from "@fortawesome/react-fontawesome";
import styles from "./ItemInfo.module.scss";
import { useAppSelector } from "hooks/reduxHooks";

interface ItemInfoProps {
  text: string;
  icon: FontAwesomeIconProps["icon"];
  isATittle?: boolean;
}

export const ItemInfo = ({ text, icon, isATittle }: ItemInfoProps) => {
  const {
    businessReducer: { businessStatus },
    usersReducer: { statusUser },
  } = useAppSelector((state) => state);

  return (
    <div className={styles.item} key={+new Date()}>
      <span>
        <FontAwesomeIcon icon={icon} />
      </span>

      {isATittle ? (
        <h1
          className={`${
            [statusUser, businessStatus].includes("loading")
              ? styles.loading
              : ""
          }`}
        >
          {text}
        </h1>
      ) : (
        <h3
          className={`${
            [statusUser, businessStatus].includes("loading")
              ? styles.loading
              : ""
          }`}
        >
          {text}
        </h3>
      )}
    </div>
  );
};
