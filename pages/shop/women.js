import React from "react";
import ProductCard from "./ProductCard";
import styles from "./Shop.module.css";

export async function getStaticProps() {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/women's%20clothing"
  );
  const data = await response.json();

  return {
    props: {
      data: data,
    },
  };
}
export default function Women({ data }) {
  return (
    <div>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Women</h2>
          <div className={styles.allProductCards}>
            {data.map((product) => (
              <ProductCard eachProduct={product} key={product.id} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
