import React from "react";
import styles from "./textinput.module.css";
export const TextInput = ({ isTextArea = false, label, ...res }) => {
  return (
    <div className={styles.textInput}>
      <label>{label}</label>
      {isTextArea ? <textarea {...res} /> : <input {...res} />}
    </div>
  );
};
