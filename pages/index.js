import styles from "../styles/Home.module.css";
import Hero from "../components/Home/Hero/Hero";
import Head from "next/head";
import FeaturedProducts from "../components/Home/FeaturedProducts/FeaturedProducts";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import AboutUs from "../components/AboutUs/AboutUs";
import Carousel from "../components/Carousel/Carousel";

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Home - GC Enterprises</title>
      </Head>
      <Hero />
      <FeaturedProducts />
      <AboutUs />
      <Carousel />
      <SocialLinks />
    </div>
  );
}
