import React from "react";
import Link from "next/link";
import styles from "../../styles/NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faUserAlt,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

export default function NavBar() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setMenuIsOpen((menuStatus) => !menuStatus);
  };
  return (
    <div className={styles.navBar}>
      {/* hamburger menu btn */}
      <div className={styles.menuBtn}>
        {menuIsOpen ? (
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.fa__icon}
            onClick={toggleMenu}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            className={styles.fa__icon}
            onClick={toggleMenu}
          />
        )}
      </div>
      {/* site title / logo (and tagline) */}
      <div className={styles.siteTitle}>
        <Link href={"/"}>GC Enterprises</Link>
      </div>
      {/* the nav links */}
      {menuIsOpen && <MobileNavigation toggleMenu={toggleMenu} />}
      <Navigation />
      {/* user account and cart options on the right */}
      <div className={styles.user}>
        <Link href={"/cart"}>
          <FontAwesomeIcon className={styles.fa__icon} icon={faShoppingBag} />
        </Link>
        <Link href={"/my-account"}>
          <FontAwesomeIcon className={styles.fa__icon} icon={faUserAlt} />
        </Link>
      </div>
    </div>
  );
}
