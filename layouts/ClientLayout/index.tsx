import React from "react";

type ClientLayoutProps = {
  children: JSX.Element;
};

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <>
      <header>Header Client</header>
      <main>{children}</main>
      <footer>Footer Client</footer>
    </>
  );
};

export default ClientLayout;
