import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default Layouts;
