import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

function QuickLinks() {
  return (
    <div className={styles.menu2}>
      <h3 className={styles.footerMenu__title}>Quick Links</h3>
      <ul className={styles.footerMenu}>
        <li>
          <Link href="/shop/saree">Shop</Link>
        </li>
        <li>
          <Link href="/shop/shirts">About</Link>
        </li>
        <li>
          <Link href="/shop/pants/denim">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default QuickLinks;
