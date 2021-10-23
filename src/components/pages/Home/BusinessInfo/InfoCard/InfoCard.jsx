import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./InfoCard.css";

const InfoCard = ({ infoData }) => {
  return (
    <>
      <div className="col-md-4 text-white">
        <div
          className={`d-flex justify-content-center info-container info-${infoData.background}`}
        >
          <div className="">
            <FontAwesomeIcon className="info-icon" icon={infoData.icon} />
          </div>
          <div className="">
            <h6>{infoData.title}</h6>
            <small>{infoData.desc}</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
