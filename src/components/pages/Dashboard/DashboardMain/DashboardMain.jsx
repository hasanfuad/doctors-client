import React from "react";
import AppointmentShortList from "./AppointmentShortList/AppointmentShortList";

const DashboardMain = ({ appointment }) => {
  return (
    <div className="">
      <h3>Appointment Taken: {appointment.length}</h3>
      {appointment.length ? (
        <div className="">
          <AppointmentShortList appointment={appointment} />
        </div>
      ) : (
        <div className="mt-5">
          <h5 className="text-center text-warning">
            There is no appointment for today
          </h5>
        </div>
      )}
    </div>
  );
};

export default DashboardMain;
