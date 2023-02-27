import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal } from "../../../components/modal";
import { TextInput } from "../../../components/textinput";
import styles from "./foods.module.css";

export const AddFood = ({ visible, onModal, ...props }) => {
  const [state, setstate] = useState({
    employeeId: "",
    employeeName: "",
    phone: "",
    email: "",
    address: "",
    joinDate: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    // setTimeout(() => {
    //   setSubmitting(false);
    //   setFormData({
    //     reset: true,
    //   });
    // }, 3000);
  };
  return (
    <div>
      <Modal title="Add Employee" isClose visible={visible} onModal={onModal}>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="ID"
            placeholder="ID"
            onChange={(val) => {
              val.preventDefault();
              setstate({ ...state, employeeId: val.target.value });
            }}
            value={state.employeeId}
            required
          />
          <TextInput
            label="Phone"
            placeholder="Phone"
            type="phone"
            name="phone"
            onChange={(val) => {
              val.preventDefault();
              setstate({ ...state, phone: val.target.value });
            }}
            value={state.phone}
            required
          />

          <TextInput
            label="Email"
            placeholder="Email"
            type="email"
            name="email"
            onChange={(val) => {
              val.preventDefault();
              setstate({ ...state, email: val.target.value });
            }}
            value={state.email}
            required
          />
          <TextInput
            label="Join date"
            placeholder="Join date"
            onChange={(val) => {
              val.preventDefault();
              setstate({ ...state, joinDate: val.target.value });
            }}
            value={state.joinDate}
            required
          />
          <TextInput
            isTextArea
            label="Address"
            placeholder="Address"
            onChange={(val) => {
              val.preventDefault();
              setstate({ ...state, address: val.target.value });
            }}
            value={state.address}
            required
          />
          <div className={styles.addEmployeebtn}>
            <button type="reset" disabled={submitting}>
              Reset
            </button>
            <button type="submit" disabled={submitting}>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddFood);
