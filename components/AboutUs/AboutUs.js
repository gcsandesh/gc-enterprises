import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "./AboutUs.module.css";
import founderImage from "../../public/images/founderImage.jpg";

export default function AboutUs() {
  return (
    <section className={styles.section}>
      <h2 className="sectionTitle">About Us</h2>
      <div className={`${styles.details} container`}>
        <p className={styles.founderImageContainer}>
          <Link href="https://www.gcsandesh.com.np">
            <a target="_blank">
              <Image
                src={founderImage}
                className={styles.founderImage}
                width={1}
                height={1}
                layout="responsive"
                alt="Sandesh GC, the founder of GC Enterprises"
              />
            </a>
          </Link>
        </p>
        <p>
          GC Enterprises is the one-stop solution for all your clothing needs.
          <br />
          Don't take my word for it, see for yourself!
        </p>

        <p>
          Founded by Sandesh GC, GC Enterprises has been fulfilling the clothing
          desires of more than a million customers since the fall of 2022.
        </p>
      </div>
    </section>
  );
}
