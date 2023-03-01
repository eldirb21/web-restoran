import React, { useState } from "react";
import styles from "./components.module.css";
const Headers = ({ scroll }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  var scr = scroll ? styles.visible : styles.hidden;
  return (
    <header className={scr}>
      <div className={`row ${styles.headerContent}`}>
        <h1 className={`title ${styles.title}`}>RESTORAN</h1>
        <button
        className={styles.hamburger}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
        <div 
        // className={`row ${styles.menus}`}
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
          <ul>
            <li>HOME</li>
            <li>MENU</li>
            <li>GALLARY</li>
            <li>VISIT</li>
          </ul>
          <button>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Headers;
