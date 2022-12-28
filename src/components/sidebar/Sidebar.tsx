import React, { useEffect } from "react";
import { Link, NavLink, useParams, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import { SidebarItem } from "./SidebarItem";
import { faPlus, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useGetData } from "hooks/useGetData";
import { startGetUsers } from "store/users/thunks";
import { SkeletonSidebar } from "./SkeletonSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";

export const Sidebar = () => {
  const location = useLocation();

  const type = useMemo(() => {
    const url = location.pathname.split("/");
    return url[1] as "users" | "business";
  }, [location.pathname]);

  const { data, status } = useGetData(type);
  const [search, setSearch] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.search}>
        <input type="text" placeholder="Buscar" onChange={handleChange} />
        <NavLink to={`${type}/add`} className={styles.add}>
          <FontAwesomeIcon icon={faPlus} />
        </NavLink>
      </div>
      {status === "loading" ? (
        <SkeletonSidebar skeleton={6} />
      ) : (
        data
          ?.map((data) => (
            <SidebarItem
              key={data.id}
              name={data.name}
              path={`/${type}/${data.id}`}
            />
          ))
          .filter((item) => item.props.name.includes(search))
      )}
    </div>
  );
};
