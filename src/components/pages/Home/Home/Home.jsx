import React from "react";
import Footer from "../../../CommonComponets/Footer/Footer";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Doctors from "../Doctors/Doctors";
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
      <Blogs />
      <Doctors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
