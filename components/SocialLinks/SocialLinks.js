import React from "react";
import Link from "next/link";
import styles from "./SocialLinks.module.css";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function SocialLinks() {
  return (
    <section className={styles.section}>
      <h2 className="sectionTitle">Get In Touch</h2>
      <div className={`${styles.icons} container`}>
        <Link href="https://www.twitter.com/gcsandesh01">
          <a target="_blank">
            <FaTwitter />
          </a>
        </Link>
        <Link href="https://www.instagram.com/gcsandesh_">
          <a target="_blank">
            <FaInstagram />
          </a>
        </Link>
        <Link href="https://www.facebook.com/gcsandesh01">
          <a target="_blank">
            <FaFacebookF />
          </a>
        </Link>
        <Link href="https://www.youtube.com/@gcsandesh">
          <a target="_blank">
            <FaYoutube />
          </a>
        </Link>
        <Link href="https://www.tiktok.com/@gcsandesh01">
          <a target="_blank">
            <FaTiktok />
          </a>
        </Link>
      </div>
    </section>
  );
}
