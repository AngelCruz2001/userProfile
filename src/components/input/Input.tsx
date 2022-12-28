import { ErrorMessage, Field, useField } from "formik";
import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
  name: string;
  nameDisplayed: string;
  type?: string;
  options?: { id: string; name: string }[];
}
export const Input = ({
  name,
  type = "text",
  nameDisplayed,
  options,
}: InputProps) => {
  const data = useField(name);
  const isActive = data[1].value !== ""; // The label is going to react when the input has a value. 

  return (
    <div className={styles.container}>
      {type === "select" ? (
        <Field
          type={type}
          name={name}
          className={`${styles.input} ${isActive && styles.active}`}
          as="select"
        >
          <option value="" disabled></option>
          {options?.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Field>
      ) : (
        <Field
          type={type}
          placeholder=""
          name={name}
          className={`${styles.input} ${isActive && styles.active}`}
        />
      )}

      {(type !== "date" || isActive) && (
        <label className={`${styles.label} `}>{nameDisplayed}</label>
      )}
      <div className={styles.error}>
        <ErrorMessage name={name} component="span" />
      </div>
    </div>
  );
};
