import React from "react";
import ExceptionalService from "../ExceptionalService/ExceptionalService";
import Header from "../Header/Header";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import "./Home.css";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Services />
      <ExceptionalService />
      <MakeAppointment />
      <Testimonial />
    </div>
  );
};

export default Home;
