import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Layout = (props) => {
  return (
    <div className="root">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};
