import React from "react";

const DashboardMain = ({ appointment }) => {
  return (
    <div>
      <h1>Appointment taken on: {appointment.length}</h1>
      {appointment.map((appt) => (
        <li>{appt.name}</li>
      ))}
    </div>
  );
};

export default DashboardMain;
