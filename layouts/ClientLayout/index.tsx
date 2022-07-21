import React from "react";
import ClientFooter from "./Footer";
import ClientHeader from "./Header";

type ClientLayoutProps = {
  children: JSX.Element;
};

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <div className="font-quicksand">
      <ClientHeader />

      <main>{children}</main>

      <ClientFooter />
    </div>
  );
};

export default ClientLayout;
