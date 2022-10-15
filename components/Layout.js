import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer";

export const Layout = (props) => {
  return (
    <div className="root">
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
};
