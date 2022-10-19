import Link from "next/link";
import React from "react";
import Categories from "./Categories";
import styles from "./Footer.module.css";
import OrderNow from "./OrderNow";
import QuickLinks from "./QuickLinks";
import SiteInfo from "./SiteInfo";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.aboveFooter}>
        <div className="container">
          <div className={styles.aboveFooter__content}>
            <div className={styles.footerCol}>
              <SiteInfo />
            </div>

            <div className={styles.footerCol}>
              <Categories />
            </div>

            <div className={styles.footerCol}>
              <QuickLinks />
            </div>

            <div className={styles.footerCol}>
              <OrderNow />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.belowFooter}>
        Copyright @GC Enterprises - 2022 // Created By:{" "}
        <Link href="https://gcsandesh.com.np">Sandesh GC</Link>
      </div>
    </footer>
  );
}
