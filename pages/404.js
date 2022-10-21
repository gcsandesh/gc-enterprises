import Link from "next/link";
import React from "react";
import Head from "next/head";

export default function NotFound() {
  return (
    <>
    <Head>
      <title>404 : Page not found</title>
    </Head>
    <div>
      {/* <h1>404: Wrong Turn?</h1> */}
      <h1>404: Surprise motherfucker!!</h1>
      <div>
        Go back to the{" "}
        <Link href={"/"}>
          <a style={{ textDecoration: "underline", color: "var(--q-dark)" }}>
            Home page
          </a>
        </Link>
      </div>
    </div>
    </>
  );
}
