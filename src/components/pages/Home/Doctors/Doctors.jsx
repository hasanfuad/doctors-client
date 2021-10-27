import React from "react";
import doctor from "../../../images/5790-removebg.png";
import "./Doctors.css";

const Doctors = () => {
  return (
    <section style={{ height: "600px" }}>
      <div className="text-center">
        <h4 style={{ color: "#14d1ca" }}>Our Doctors</h4>
      </div>
      <div className="container d-flex mt-5">
        <div>
          <img className="w-75 doctor-image" src={doctor} alt="" />
          <div className="mx-5 px-5 mt-4">
            <h6>Dr. Mofiz</h6>
            <p>+123-23422</p>
          </div>
        </div>
        <div>
          <img className="w-75" src={doctor} alt="" />
          <div className="mx-5 px-5 mt-4">
            <h6 className="">Dr. John</h6>
            <p>+123-23422</p>
          </div>
        </div>
        <div>
          <img className="w-75" src={doctor} alt="" />
          <div className="mx-5 px-5 mt-4">
            <h6>Dr. Rohit</h6>
            <p>+123-23422</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
