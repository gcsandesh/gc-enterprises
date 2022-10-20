import React from "react";
import styles from "./ProductCard.module.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductCard({ eachProduct }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImgContainer}>
        <img src={eachProduct.image} className={styles.productImg} />
      </div>

      <div>
        <div className={styles.ratingContainer}>
          <span>
            <FontAwesomeIcon icon={faStar} className={styles.ratingStar} />
          </span>
          <span className={styles.rating}>{eachProduct.rating.rate}</span> <span className={styles.ratingCount}>({eachProduct.rating.count} reviews)</span>
        </div>
        <h3 className={styles.title}>{eachProduct.title}</h3>
        <div className={styles.priceContainer}>
          <strong>$</strong>{" "}
          <span className={styles.price}>{eachProduct.price}</span>
        </div>
      </div>

      {/* <div> */}
        <button className={styles.shopNowBtn}>Shop Now</button>
        <button className={styles.addToCartBtn}>Add to Cart</button>
      {/* </div> */}
    </div>
  );
}
