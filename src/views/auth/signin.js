import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { doLogin } from "../../redux/actions/authActions";
import "react-responsive-modal/styles.css";
import styles from "./auth.css";

export const Signin = (props) => {
  const navigate = useNavigate();
  const [state, setstate] = useState({
    username: "",
    password: "",
    isLoading: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("UserTyp", "Admin");
    setTimeout(() => {
      navigate("/admin-dashboard");
      navigate(0)
      props.doLogin("login", state);
    }, 2000);
  };

  return (
    <div className="container-bg">
      <div className="card-container">
        <h1>Login</h1>
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

        <button className="btn-bg uppercase" onClick={submitHandler}>
          Login
        </button>
        <p>or</p>
        <button className="btn uppercase" onClick={() => navigate("/sign-up")}>
          Signup
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  doLogin,
})(Signin);
