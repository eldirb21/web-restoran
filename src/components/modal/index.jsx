import React from "react";
import styles from "./modal.module.css";
export const Modal = ({
  title,
  visible,
  onModal,
  children,
  isClose = false,
  withHeader = true,
  contentStyle,
}) => {
  if (!visible) return null;
  return (
    <div className={styles.modal}>
      <div className={`${styles.modalContent} ${contentStyle}`}>
        {withHeader && (
          <div className={styles.modalheader}>
            <label>{title}</label>
            {isClose && (
              <span onClick={onModal} className={styles.close}>
                &times;
              </span>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
