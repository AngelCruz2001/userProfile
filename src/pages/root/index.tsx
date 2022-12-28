import { Sidebar, Navbar, Card } from "components";
import { Outlet } from "react-router-dom";
import styles from "styles/modules/Root.module.scss";
import { useEffect } from "react";
import { data } from "helpers/data";

export const Root = () => {
  useEffect(() => {
    // Saving in local storage the information to simulate the database
    console.log("aSDF");
    if (!localStorage.getItem("business"))
      localStorage.setItem("business", JSON.stringify(data.business));
    if (!localStorage.getItem("users"))
      localStorage.setItem("users", JSON.stringify(data.users));
  }, []);

  return (
    <main>
      <Navbar />
      <div className={styles.container}>
        <Card>
          <Sidebar />
        </Card>
        <Card flex={1}>
          <Outlet />
        </Card>
      </div>
    </main>
  );
};
