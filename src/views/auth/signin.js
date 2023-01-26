import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Modal from "react-responsive-modal";
import { useNavigate } from "react-router-dom";
import { doLogin } from "../../redux/actions/authActions";
import "react-responsive-modal/styles.css";

import "./auth.css";
export const Signin = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setstate] = useState({
    username: "",
    password: "",
    isLoading: false,
  });
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/app");
    props.doLogin("login", state);
  };

  const changeHandler = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div className="container_auth">
      <div>
        <button onClick={onOpenModal}>Open modal</button>
        <Modal
          closeOnOverlayClick={false}
          showCloseIcon={false}
          open={true}
          onClose={onCloseModal}
          center
        >
          <div className="card-form">
            <p className="title">Signin</p>
            <form onSubmit={submitHandler}>
              <input
                className="input"
                type="text"
                name="username"
                placeholder="Email"
                value={state.username}
                onChange={changeHandler}
              />
              <br />

              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                value={state.password}
                onChange={changeHandler}
              />
              <br />

              <input className="btn-submit" type="submit" name="submit" />
            </form>
          </div>
        </Modal>
      </div>
      {/* <div className='card-form'>
        <p className='text-hallo'>Signin</p>
        <form onSubmit={submitHandler}>

          <input className='input' type="text" name="username" placeholder='Email' value={state.username}
            onChange={changeHandler} /><br />

          <input className='input' type="password" name="password" placeholder='Password' value={state.password}
            onChange={changeHandler} /><br />

          <input className='btn-submit' type="submit" name="submit" />
        </form>
      </div> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  doLogin,
})(Signin);
