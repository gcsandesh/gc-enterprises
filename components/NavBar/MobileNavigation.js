import styles from "./NavBar.module.css";
import React from "react";
import NavLinks from "./NavLinks";

export default function MobileNavigation(props) {
  return (
    <div className={styles.MobileNavigation}>
      <NavLinks toggleMenu={props.toggleMenu} />
    </div>
  );
}
