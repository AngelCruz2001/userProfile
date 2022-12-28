import React from "react";
import styles from "./ButtonSubmit.module.scss";
interface ButtonSubmitProps {
  text: string;
  disabled?: boolean;
}

export const ButtonSubmit = ({ text, disabled }: ButtonSubmitProps) => {
  return (
    <button className={styles.button} type="submit" disabled={disabled}>
      {text}
    </button>
  );
};
