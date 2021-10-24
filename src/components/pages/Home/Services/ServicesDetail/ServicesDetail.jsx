import React from "react";
import tooth1 from "../../../../images/tooth1.png";
import tooth2 from "../../../../images/tooth2.png";
import tooth3 from "../../../../images/tooth3.png";

const ServicesDetail = () => {
  return (
    <div style={{ height: "550px" }} className="d-flex justify-content-center">
      <div className="row text-center w-75 p-5">
        <div className="col-md-4 p-4">
          <div>
            <img src={tooth1} alt="" />
          </div>
          <div>
            <h6 className="mt-4">Fluoride Treatment</h6>
            <p className="text-start text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              corporis adipisci officiis. corporis adipisci officiis.
            </p>
          </div>
        </div>
        <div className="col-md-4 p-4">
          <div>
            <img src={tooth2} alt="" />
          </div>
          <div>
            <h6 className="mt-4">Cavity Filling</h6>
            <p className="text-start text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              corporis adipisci officiis. corporis adipisci officiis.
            </p>
          </div>
        </div>
        <div className="col-md-4 p-4">
          <div>
            <img src={tooth3} alt="" />
          </div>
          <div>
            <h6 className="mt-4">Teeth Whitening</h6>
            <p className="text-start text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              corporis adipisci officiis.corporis adipisci officiis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetail;
