import Image from "next/image";
import React from "react";
import styles from "./FeaturedProducts.module.css";
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <section className={`${styles.featuredProducts} container`}>
      <h2 className="sectionTitle">Featured Products</h2>
      <div className={styles.products}>
        <div className={styles.productCard}>
          <Link href={"/shop/products/17"}>
            <a>
              <Image
                src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
                width={3}
                height={4}
                layout="responsive"
              />
              <span className={styles.tooltip}>
                Rain Jacket Women Windbreaker Striped Climbing Raincoats
                <br />
                <span className={styles.price}>$39.99</span>
              </span>
            </a>
          </Link>
        </div>
        <div className={styles.productCard}>
          <Link href={"/shop/products/4"}>
            <a>
              <Image
                src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                width={3}
                height={4}
                layout="responsive"
              />
              <span className={styles.tooltip}>
                Mens Casual Slim Fit <br />
                <span className={styles.price}>$15.99</span>
              </span>
            </a>
          </Link>
        </div>
        <div className={styles.productCard}>
          <Link href={"/shop/products/1"}>
            <a>
              <Image
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                width={3}
                height={4}
                layout="responsive"
              />
              <span className={styles.tooltip}>
                Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                <br />
                <span className={styles.price}>$15.99</span>
              </span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
