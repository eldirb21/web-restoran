import React from "react";
import { Modal } from "../modal";
import styles from "./modalAlert.module.css";
const ModalAlert = ({ multibuttton = false, visible, onHidden, onSubmit }) => {
  return (
    <Modal
      withHeader={false}
      visible={visible}
      contentStyle={styles.modalalert}
    >
      <div className={styles.alertheader}>
        <i className="fa fa-times-circle" aria-hidden="true"></i>
      </div>
      <div className={styles.alertbody}>
        <h1>Are You sure ?</h1>
        <p>
          Do you really want to delete these records? This proses cannot be
          undone.
        </p>
      </div>
      <div
        className={
          multibuttton ? styles.alertfootermultibtn : styles.alertfooter
        }
      >
        {multibuttton ? (
          <>
            <button type="reset" onClick={onHidden}>
              Cancel
            </button>
            <button type="submit" onClick={onSubmit}>
              Submit
            </button>
          </>
        ) : (
          <button type="button" onClick={onHidden}>
            Close
          </button>
        )}
      </div>
    </Modal>
  );
};

export default ModalAlert;
