import React from "react";
import styles from "./spinner.module.css";
export const Spinner = ({ visible }) => {
  if (!visible) return null;
  return (
    <div className={styles.spinners}>
      <div className={styles.spinnercontainer}>
        <div className={styles.loadingspinner}></div>
      </div>
    </div>
  );
};
