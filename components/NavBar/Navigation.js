import React from "react";
import styles from "../../styles/NavBar.module.css";
import NavLinks from "./NavLinks";

export default function Navigation() {
  return (
    <div className={styles.Navigation}>
      <NavLinks />
    </div>
  );
}