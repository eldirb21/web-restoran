import React from "react";
import { connect } from "react-redux";
import { avatar } from "../../assets/images";
import styles from "./headers.module.css";

export const Headers = ({ onClick, visible, notife }) => {
  function myFunction() {
    alert("You hovered over the button!");
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
