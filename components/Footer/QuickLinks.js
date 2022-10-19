import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

function QuickLinks() {
  return (
    <div className={styles.menu2}>
      <h3 className={styles.footerMenu__title}>Quick Links</h3>
      <ul className={styles.footerMenu}>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default QuickLinks;
