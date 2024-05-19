import React from "react";
import { Header } from "../../components";
import "./styles.scss";

const PublicSharedLayout = ({ children }) => {
  return (
    <section className="public-wrapper">
      <Header />
      {children}
    </section>
  );
};

export default PublicSharedLayout;
