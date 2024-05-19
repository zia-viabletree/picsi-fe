import React from "react";
import { Header } from "../../components";
function AuthSharedLayout({ children }) {
  return (
    <section className="auth-wrapper">
      <Header />
      {children}
    </section>
  );
}

export default AuthSharedLayout;
