import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import chair from "../../../images/Chair.png";

const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <main>
      <div
        style={{ height: "600px", marginLeft: "20rem" }}
        className="row d-flex align-items-center header-main-bg"
      >
        <h2 style={{ color: "#3d4558" }}>Appointment</h2>
        <div className="col-md-4 offset-md-1">
          <Calendar
            style={{ outline: "none" }}
            onChange={handleDateChange}
            value={new Date()}
          />
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

export default AppointmentHeader;
