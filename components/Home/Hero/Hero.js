import React from "react";
import Image from "next/image";
import heroImage from "../../../public/hero-image.jpg";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={`${styles.heroContent} container`}>
        <div className={styles.heroText}>
          <h1 className={styles.heroText__heading}>
            Welcome to GC Clothing Store
          </h1>
          <p>Shop, Wear, Feel</p>
        </div>
      </div>
    </div>
  );
}
