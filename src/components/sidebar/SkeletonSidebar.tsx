import styles from "./Sidebar.module.scss";
interface SkeletonSidebarProps {
  skeleton: number;
}
export const SkeletonSidebar = ({ skeleton }: SkeletonSidebarProps) => {
  return (
    <>
      {new Array(skeleton).fill(0).map((_, index) => (
        <div className={styles.loading} key={index}>
          <h3>Cargando...</h3>
        </div>
      ))}
    </>
  );
};
