import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";
interface SidebarItemProps {
  name: string;
  path: string;
}
export const SidebarItem = ({ name, path }: SidebarItemProps) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${styles.sidebarItem} ${isActive ? styles.active : ""}`
      }
    >
      <h3>{name}</h3>
    </NavLink>
  );
};
