import React from "react";
import Navigation from "./Navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pb-20">{children}</main>
      <Navigation />
    </div>
  );
};

export default Layout;
