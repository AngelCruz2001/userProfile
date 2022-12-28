import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUserAlt } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link className={styles.link} to="/users">
        <FontAwesomeIcon icon={faUserAlt} />
        Usuarios
      </Link>
      <Link className={styles.link} to="/business">
        <FontAwesomeIcon icon={faBriefcase} />
        Empresas
      </Link>
    </div>
  );
};
