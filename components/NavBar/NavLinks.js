import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavLinks(props) {
  return (
    <ul className={styles.navLinks}>
      <li onClick={props.toggleMenu}>
        <Link href={"/"}>Home</Link>
      </li>
      <li onClick={props.toggleMenu}>
        <Link href={"/shop"}>Shop</Link>
      </li>
      <li onClick={props.toggleMenu}>
        <Link href={"/about"}>About</Link>
      </li>
      <li onClick={props.toggleMenu}>
        <Link href={"/contact"}>Contact</Link>
      </li>
    </ul>
  );
}
