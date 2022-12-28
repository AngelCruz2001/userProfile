import React from "react";

import styles from "./Card.module.scss";
interface CardProps {
  children: React.ReactNode;
  flex?: number;
}

export const Card = ({ children, flex }: CardProps) => {
  return (
    <div className={styles.card} style={{ flex: flex ? flex : "" }}>
      {children}
    </div>
  );
};
