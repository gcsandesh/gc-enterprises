import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

export const Layout = (props) => {
  return (
    <div className="root">
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
