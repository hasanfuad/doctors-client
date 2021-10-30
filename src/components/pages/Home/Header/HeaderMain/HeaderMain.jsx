import React from "react";
import { Link } from "react-router-dom";
import chair from "../../../../../images/Chair.png";
import "./HeaderMain.css";
const HeaderMain = () => {
  return (
    <main>
      <div
        style={{ height: "600px", marginLeft: "20rem" }}
        className="row d-flex align-items-center header-main-bg"
      >
        <div className="col-md-4 offset-md-1">
          <h1 style={{ color: "#3d4558" }}>
            Your New Smile
            <br /> Starts Here
          </h1>
          <p className="mt-4 lh-lg w-75 text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et adipisci
            ad beatae veniam illum autem accusantium distinctio ratione laborum
            fugit itaque quasi voluptatibus ipsam quia, magnam totam recusandae?
            Eum, tempore?
          </p>
          <Link className="btn btn-primary main-button" to="/appointment">
            Get Appointment
          </Link>
        </div>
        <div className="col-md-7">
          <img
            style={{ width: "70%" }}
            className="img-fluid"
            src={chair}
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
