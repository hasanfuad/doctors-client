import React from "react";
import "./Services.css";
import ServicesDetail from "./ServicesDetail/ServicesDetail";

const Services = () => {
  return (
    <section>
      <div className="text-center mt-5">
        <h5 style={{ color: "#14d1ca" }}>OUR SERVICES</h5>
        <h2 style={{ color: "#3d4558" }} className="fw-bolder">
          Services We Provide
        </h2>
      </div>
      <div>
        <ServicesDetail />
      </div>
    </section>
  );
};

export default Services;
