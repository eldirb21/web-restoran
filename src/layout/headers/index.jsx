import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { avatar } from "../../assets/images";
import styles from "./headers.module.css";

export const Headers = ({ onClick, visible, notife }) => {
  const navigate = useNavigate();

  function myFunction() {
    alert("You hovered over the button!");
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("ROLES");
    navigate("/");
    navigate(0);
  }
  return (
    <div className={`${styles.header} ${visible ? styles.spacetoggle : null}`}>
      <div className={styles.headertoggle} onClick={onClick}>
        <i className={`fas fa-bars ${visible ? "fa-solid fa-xmark" : null}`} />
      </div>
      <div className={`row ${styles.contentRight}`}>
        <div className={styles.notife}>
          <i className="fa-solid fa-bell" />
          {notife && <p>{notife}</p>}
        </div>
        <div className={styles.menuavatar}>
          <img
            onMouseOver={myFunction}
            src={avatar}
            className={styles.avatar}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Headers);
