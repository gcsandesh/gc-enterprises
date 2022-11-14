import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={`${styles.heroContent} container`}>
        <div className={styles.heroText}>
          <h1 className={styles.heroText__heading}>
            Welcome to <br />
            GC Enterprises
          </h1>
          <p>Shop, Wear, Feel</p>
        </div>
      </div>
    </div>
  );
}
