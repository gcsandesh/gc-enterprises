import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

function Categories() {
  return (
    <div className={styles.menu1}>
      <h3 className={styles.footerMenu__title}>Categories</h3>
      <ul className={styles.footerMenu}>
        <li>
          <Link href="/shop/men">Men</Link>
        </li>
        <li>
          <Link href="/shop/women">Women</Link>
        </li>
      </ul>
    </div>
  );
}

export default Categories;
