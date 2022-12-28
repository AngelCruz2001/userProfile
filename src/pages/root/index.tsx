import { Sidebar, Navbar, Card } from "components";
import { Outlet } from "react-router-dom";
import styles from "styles/modules/Root.module.scss";

export const Root = () => {
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
