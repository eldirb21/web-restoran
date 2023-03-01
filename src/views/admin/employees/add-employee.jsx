import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal } from "../../../components/modal";
import { TextInput } from "../../../components/textinput";
import styles from "./employees.module.css";
export const AddEmployee = ({ visible, onModal, ...props }) => {
  const [state, setstate] = useState({
    username: "",
    password: "",
    role: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const reverceState = () => {
    setstate({ ...submitting, username: "", password: "", role: "" });
    setSubmitting(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    props.addEmployee(state);
  };

  return (
    <div>
      <Modal title="Add Employee" isClose visible={visible} onModal={onModal}>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="username"
            placeholder="username"
            onChange={(val) => {
              val.preventDefault();
              setstate({ ...state, username: val.target.value });
            }}
            value={state.username}
            required
          />

          <TextInput
            label="role"
            placeholder="role"
            name="role"
            onChange={(val) => {
              val.preventDefault();
              setstate({ ...state, role: val.target.value });
            }}
            value={state.role}
            required
          />

          <TextInput
            isTextArea
            label="password"
            placeholder="password"
            type="password"
            onChange={(val) => {
              val.preventDefault();
              setstate({ ...state, password: val.target.value });
            }}
            value={state.password}
            required
          />
          <div className={styles.addEmployeebtn}>
            <button type="reset" onClick={reverceState}>
              Reset
            </button>
            <button type="submit" onClick={handleSubmit} disabled={submitting}>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddEmployee;
