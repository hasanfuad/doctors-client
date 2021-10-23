import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./BusinessInfo.css";
import InfoCard from "./InfoCard/InfoCard";

const infosData = [
  {
    title: "Opening Hours",
    desc: "We are open 7 Days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit our location",
    desc: "Dhaka, Bangladesh",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Contact us now",
    desc: "+000 123 34334 22",
    icon: faPhone,
    background: "primary",
  },
];

const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {infosData.map((infoData) => (
          <InfoCard infoData={infoData} />
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
