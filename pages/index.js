import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - GC Enterprises</title>
      </Head>
      <div className={styles.container}>
        {/* <Hero /> */}
        Here goes the content
      </div>
    </>
  );
}
