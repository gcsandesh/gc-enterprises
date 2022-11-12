import React from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";
import mobStyles from "./MobileNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function NavLinks(props) {
  // const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  // function toggleDropdownMenu() {
  //   setMenuIsOpen(!menuIsOpen);
  // }
  // console.log(menuIsOpen)
  return (
    <ul className={`${styles.navLinks} ${mobStyles.navLinks}`}>
      <Link href={"/"}>
        <li onClick={props.toggleMenu}>Home</li>
      </Link>
      <Link href={"/shop"}>
        <li onClick={props.toggleMenu}>Shop</li>
      </Link>
      <li
        // onClick={toggleDropdownMenu}
        className={`${styles.dropdownContainer} ${mobStyles.dropdownContainer}`}
      >
        Categories
        <FontAwesomeIcon icon={faPlus} className={styles.plusIcon} />
        <ul className={`${styles.dropdownMenu} ${mobStyles.dropdownMenu}`}>
          <Link href={"/shop/men"}>
            <li
              className={`${styles.dropdownMenuItem} ${mobStyles.dropdownMenuItem}`}
              onClick={props.toggleMenu}
            >
              Men
            </li>
          </Link>
          <Link href={"/shop/women"}>
            <li
              className={`${styles.dropdownMenuItem} ${mobStyles.dropdownMenuItem}`}
              onClick={props.toggleMenu}
            >
              Women
            </li>
          </Link>
        </ul>
      </li>
      <Link href={"/about"}>
        <li onClick={props.toggleMenu}>About</li>
      </Link>
      <Link href={"/contact"}>
        <li onClick={props.toggleMenu}>Contact</li>
      </Link>
    </ul>
  );
}
