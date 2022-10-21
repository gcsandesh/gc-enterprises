import React from "react";
import styles from "./Shop.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";

export async function getStaticProps() {
  // getting men's  items
  let mensItemsResponse = await fetch(
    "https://fakestoreapi.com/products/category/men's%20clothing"
  );
  const mensItems = await mensItemsResponse.json();

  // getting women's  items
  let womensItemsResponse = await fetch(
    "https://fakestoreapi.com/products/category/women's%20clothing"
  );
  const womensItems = await womensItemsResponse.json();

  // If any one is not there, just return
  if (!mensItems || !womensItems) return;

  return {
    props: {
      data: { mensClothing: mensItems, womensClothing: womensItems },
    },
  };
}

export default function Shop({ data }) {
  const { mensClothing, womensClothing } = data;
  return (
    <div>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>For Women</h2>
        <div className={styles.allProductCards}>
          {womensClothing.map((eachProduct) => (
            <ProductCard product={eachProduct} key={eachProduct.id} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>For Men</h2>
        <div className={styles.allProductCards}>
          {mensClothing.map((eachProduct) => (
            <ProductCard product={eachProduct} key={eachProduct.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
