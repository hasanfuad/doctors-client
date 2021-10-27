import React from "react";
import Navbar from "../../../CommonComponets/Navbar/Navbar";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
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
