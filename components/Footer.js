import {
  faEnvelope,
  faLocationPin,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.aboveFooter}>
        <div className={`container}`}>
          <div class={styles.aboveFooter__content}>
            <div className={styles.footerCol}>
              <div className={styles.siteInfo}>
                <h1 className={styles.siteTitle}>GC Enterprises</h1>
                <p>Shop, Wear, Feel</p>
              </div>
            </div>
            <div className={styles.footerCol}>
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
              <div className={styles.menu2}>
                <h3 className={styles.footerMenu__title}>Top Picks</h3>
                <ul className={styles.footerMenu}>
                  <li>
                    <Link href="/shop/saree">Saree</Link>
                  </li>
                  <li>
                    <Link href="/shop/shirts">Shirt</Link>
                  </li>
                  <li>
                    <Link href="/shop/pants/denim">Denim Pants</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footerCol}>
              <h3 className={styles.footerMenu__title}>Order Now</h3>
              <p>
                <FontAwesomeIcon className={styles.icon} icon={faUser} />
                GC Enterprises
              </p>
              <p>
                <FontAwesomeIcon className={styles.icon} icon={faPhone} />
                +977-9876543210
              </p>
              <p>
                <FontAwesomeIcon className={styles.icon} icon={faLocationPin} />{" "}
                Butwal 11, Kalikanagar
              </p>
              <p>
                <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />{" "}
                info@gcstore.com.np
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.belowFooter}>
        Copyright @<Link href="https://gcsandesh.com.np">SandeshGC</Link> - 2022
      </div>
    </footer>
  );
}
