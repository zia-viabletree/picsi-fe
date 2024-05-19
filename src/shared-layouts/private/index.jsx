import React from "react";
import { Header } from "../../components";

const PrivateSharedLayout = ({ children }) => {
  return (
    <section className="pv-wrapper">
      <Header />
      {children}
    </section>
  );
};

export default PrivateSharedLayout;
