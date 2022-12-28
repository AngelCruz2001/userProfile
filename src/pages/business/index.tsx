import { Outlet } from "react-router-dom";
import styles from "styles/modules/Business.module.scss";
export const BusinessScreen = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};
