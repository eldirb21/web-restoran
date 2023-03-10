import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./boarding.module.css";

export const Boarding = (props) => {
  const navigate = useNavigate();
  const onLogin=()=>{
    navigate("/sign-in");
  }
  return (
    <div className="container">
      <div className={style.headerContainer}>
        <div className={style.header}>
          <h1 className={`title ${style.title}`}>BARATIE</h1>
          <ul>
            <li>HOME</li>
            <li>MENU</li>
            <li>GALLARY</li>
            <li>VISIT</li>
          </ul>
          <button onClick={onLogin}>Login</button>
        </div>
      </div>
      <div style={{ zIndex: 999 }}>
        <h1>Time, dedication, and darn good eats.</h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Boarding);
