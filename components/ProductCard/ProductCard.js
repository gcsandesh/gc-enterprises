import React from "react";
import Image from "next/image";
import styles from "./ProductCard.module.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImgContainer}>
        <Image
          src={product.image}
          className={styles.productImg}
          alt="Clothing Item"
          width="200"
          height="225"
        />
      </div>

      <div>
        <div className={styles.ratingContainer}>
          <span>
            <FontAwesomeIcon icon={faStar} className={styles.ratingStar} />
          </span>
          <span className={styles.rating}>{product.rating.rate}</span>{" "}
          <span className={styles.ratingCount}>
            ({product.rating.count} reviews)
          </span>
        </div>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.priceContainer}>
          <strong>$</strong>{" "}
          <span className={styles.price}>{product.price}</span>
        </div>
      </div>

      {/* <div> */}
      <button className={styles.shopNowBtn}>Shop Now</button>
      <button className={styles.addToCartBtn}>Add to Cart</button>
      {/* </div> */}
    </div>
  );
}
