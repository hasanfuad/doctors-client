import React from "react";
import ExceptionalService from "../ExceptionalService/ExceptionalService";
import Header from "../Header/Header";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Services />
      <ExceptionalService />
    </div>
  );
};

export default Home;
