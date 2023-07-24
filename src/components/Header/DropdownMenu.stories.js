import React from "react";
import { BrowserRouter } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

export default {
  title: "Components/Header/DropdownMenu",
  component: DropdownMenu,
};

export const Default = () => (
  <BrowserRouter>
    <DropdownMenu open={true} onClose={() => console.log("Dropdown closed")} />
  </BrowserRouter>
);
