import React from "react"
import Link from "next/link"
import styles from "./SocialLinks.module.css"
import {
	FaTwitter,
	FaInstagram,
	FaFacebookF,
	FaYoutube,
} from "react-icons/fa"

export default function SocialLinks() {
	return (
		<section className={styles.section}>
			<h2 className="sectionTitle">Get In Touch</h2>
			<div className={`${styles.icons} container`}>
				<Link href="https://www.twitter.com/gcsandesh_" target="_blank">
					<FaTwitter />
				</Link>
				<Link
					href="https://www.instagram.com/gcsandesh_"
					target="_blank"
				>
					<FaInstagram />
				</Link>
				<Link
					href="https://www.facebook.com/gcsandesh01"
					target="_blank"
				>
					<FaFacebookF />
				</Link>
				<Link href="https://www.youtube.com/@gcsandesh" target="_blank">
					<FaYoutube />
				</Link>
			</div>
		</section>
	)
}
