import React, { useState } from "react";
import { Link } from "react-router-dom";
import Headers from "./headers";
import style from "./layout.module.css";

const AdminSidebar = (props) => {
  const [show, setShow] = useState(false);
  return (
    <main className={show ? style.spacetoggle : null}>
      <Headers onClick={() => setShow(!show)} visible={show} notife={10} />
      {/* <header className={`${style.header} ${show ? style.spacetoggle : null}`}>
        <div className={style.headertoggle} onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}></i>
        </div>
      </header> */}

      {/* <aside className={`${style.sidebar} ${show ? style.show : null}`}>
        <nav className={style.nav}>
          <div>
            <Link to="/admin-dashboard" className={style.navlogo}>
              <i className={`fas fa-home-alt ${style.navlogoicon}`}></i>
              <span className={style.navlogoname}>Homepage</span>
            </Link>

            <div className={style.navlist}>
              <Link to="/admin-dashboard" className={`${style.navlink} active`}>
                <i className={`fas fa-tachometer-alt ${style.navlinkicon}`}></i>
                <span className={style.navlinkname}> Dashboard</span>
              </Link>
              <Link to="/admin-employees" className={style.navlink}>
                <i className={`fa-solid fa-users ${style.navlinkicon}`}></i>
                <span className={style.navlinkname}>Employees</span>
              </Link>
              <Link to="/admin-foods" className={style.navlink}>
                <i className={`fa-solid fa-bowl-rice ${style.navlinkicon}`}></i>
                <span className={style.navlinkname}> Foods</span>
              </Link>
              <Link to="/admin-orders" className={style.navlink}>
                <i
                  className={`fa-solid fa-cart-shopping ${style.navlinkicon}`}
                ></i>
                <span className={style.navlinkname}>Orders</span>
              </Link>
            </div>
          </div>

          <Link to="/logout" className={style.navlink}>
            <i className={`fas fa-sign-out ${style.navlinkicon}`}></i>
            <span className={style.navlinkname}>Logout</span>
          </Link>
        </nav>
      </aside> */}
      {props.children}
    </main>
  );
};

export default AdminSidebar;
