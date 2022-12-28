import { Outlet } from "react-router-dom";
import styles from "styles/modules/Users.module.scss";
export const UsersScreen = () => {
  return (
    <div className={styles.container}>
      {/* <h2>Selecciona un usuario. </h2> */}

      <Outlet />
    </div>
  );
};
