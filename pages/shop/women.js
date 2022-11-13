import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Shop.module.css";
import Head from "next/head";

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
    <>
      <Head>
        <title>Women&apos;s Clothings - GC Enterprises</title>
      </Head>
      <section className={`${styles.section} container`}>
        <h2 className={styles.sectionTitle}>Women</h2>
        <div className={styles.allProductCards}>
          {data.map((eachProduct) => (
            <ProductCard product={eachProduct} key={eachProduct.id} />
          ))}
        </div>
      </section>
    </>
  );
}
