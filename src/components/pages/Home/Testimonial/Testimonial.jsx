import React from "react";
import patient1 from "../../../images/Ellipse 1.png";
import patient2 from "../../../images/Ellipse 2.png";
import patient3 from "../../../images/Ellipse 3.png";
import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

const testimonialData = [
  {
    name: "Winson Herry",
    address: "California",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nobis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nobis!",
    img: patient1,
  },
  {
    name: "Queenson Derry",
    address: "California",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nobis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nobis!",
    img: patient2,
  },
  {
    name: "Rueenson Berray",
    address: "California",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nobis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nobis!",
    img: patient3,
  },
];
const Testimonial = () => {
  return (
    <section
      className="container testimonialContainer"
      style={{ height: "600px" }}
    >
      <div className="mt-5">
        <h6 style={{ color: "#14d1ca", fontWeight: "bold" }}>TESTIMONIAL</h6>
        <h3 className="mt-3" style={{ color: "#3d4558" }}>
          What's Our Patients <br /> Says..
        </h3>
      </div>
      <div className="d-flex mt-5 align-items-center">
        {testimonialData.map((testimonialData) => (
          <TestimonialCard testimonialData={testimonialData} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
