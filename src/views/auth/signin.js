import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { doLogin } from "../../redux/actions/authActions";
import "react-responsive-modal/styles.css";
import styles from "./auth.css";
import { Spinner } from "../../components/Spinner";

export const Signin = (props) => {
  const navigate = useNavigate();
  const [state, setstate] = useState({
    username: "eldir",
    password: "eldir",
  });
  useEffect(() => {
    if (Object.keys(props.auth.data).length !== 0) {
      navigate("/");
      navigate(0);
    }
    if (Object.keys(props.auth.errors).length !== 0) {
      alert("error login");
    }
  }, [props.auth]);

  const submitHandler = (e) => {
    e.preventDefault();
    props.doLogin(state);
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
      <Spinner visible={props.auth.loading} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  doLogin,
})(Signin);
