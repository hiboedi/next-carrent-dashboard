import React from "react";
import Props from "./Props";
import MainMenu from "./MainMenu";

function Layout(props: Props) {
  return (
    <div className="flex h-screen w-screen flex-row font-inter">
      <MainMenu />

      {props.children}
    </div>
  );
}

export default Layout;
