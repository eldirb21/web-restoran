import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Signup = (props) => {
  const navigate = useNavigate();
  const [state, setstate] = useState({
    name: "",
    username: "",
    password: "",
    isLoading: false,
  });
  const signupHandler = (e) => {
    e.preventDefault();
    navigate("/sign-in");
    props.doLogin("login", state);
  };
  return (
    <div className="container-bg">
      <div className="card-container">
        <h1>Sign Up</h1>
        <input
          type="input"
          placeholder="Name"
          value={state.name}
          onChange={(val) => setstate({ ...state, name: val.target.value })}
        />
        <input
          type="input"
          placeholder="Email"
          value={state.username}
          onChange={(val) => setstate({ ...state, username: val.target.value })}
        />
        <input
          type="input"
          placeholder="Password"
          value={state.password}
          onChange={(val) => setstate({ ...state, password: val.target.value })}
        />

        <button className="btn-bg uppercase" onClick={signupHandler}>
          Submit
        </button>
        <p>or</p>
        <button className="btn uppercase" onClick={() => navigate("/sign-in")}>
          Back
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
