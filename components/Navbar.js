import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faUserAlt } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      {/* <div> */}
      <div className={styles.menuBtn}>
        <div className={styles.hamburger}></div>
        {/* <div className={styles.hamburgerTop}></div>
        <div className={styles.hamburgerMiddle}></div>
        <div className={styles.hamburgerBottom}></div> */}
      </div>
      <div className={styles.siteTitle}>
        <Link href={"/"}>GC Enterprises</Link>
      </div>
      {/* </div> */}
      <ul className={styles.navLinks}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/shop"}>Shop</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className={styles.user}>
        <span>
          <Link href={"/cart"}>
            <FontAwesomeIcon className={styles.fa__icon} icon={faShoppingBag} />
          </Link>
        </span>
        <span>
          <Link href={"/my-account"}>
            <FontAwesomeIcon className={styles.fa__icon} icon={faUserAlt} />
          </Link>
        </span>
      </div>
    </nav>
  );
}
