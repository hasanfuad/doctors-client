import React from "react";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import HeaderMain from "./HeaderMain/HeaderMain";

const Header = () => {
  return (
    <div className="header-container">
      <Navbar />
      <HeaderMain />
      <BusinessInfo />
    </div>
  );
};

export default Header;
