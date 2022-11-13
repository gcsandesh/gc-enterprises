import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Shop.module.css";
import Head from "next/head";

export async function getStaticProps() {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/men's%20clothing"
  );
  const data = await response.json();

  return {
    props: {
      data: data,
    },
  };
}
export default function Men({ data }) {
  return (
    <>
      <Head>
        <title>Men&apos;s Clothings - GC Enterprises</title>
      </Head>
      <section className={`${styles.section} container`}>
        <h2 className={styles.sectionTitle}>Men</h2>
        <div className={styles.allProductCards}>
          {data.map((eachProduct) => (
            <ProductCard product={eachProduct} key={eachProduct.id} />
          ))}
        </div>
      </section>
    </>
  );
}
