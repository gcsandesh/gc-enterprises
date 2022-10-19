import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

function SiteInfo() {
  return (
    <Link href={"/"}>
      <div className={styles.siteInfo}>
        <h1 className={styles.siteTitle}>GC Enterprises</h1>
        <p>Shop, Wear, Feel</p>
      </div>
    </Link>
  );
}

export default SiteInfo;
