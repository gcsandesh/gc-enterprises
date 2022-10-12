import React from "react";
import Image from "next/image";
import heroImage from "../public/hero-image.jpg";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImg__container}>
        <Image
          src={heroImage}
          className={styles.heroImg}
          alt="Pants, watch, tshirt, shoes in a dark background"
          layout="responsive"
        />
      </div>
      <p className={styles.heroText}>
        <h1 className={styles.heroText__heading}>
          Welcome to GC Clothing Store
        </h1>
      </p>
    </div>
  );
}
