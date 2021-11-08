import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import DisplayPatientInfo from "./DisplayPatientInfo/DisplayPatientInfo";

const DisplayPatient = () => {
  const [appointmentInfo, setAppointmentInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allAppointments")
      .then((res) => res.json())
      .then((data) => setAppointmentInfo(data));
  }, []);
  return (
    <main className="text-center">
      <div className="text-center mt-4 text-secondary">
        <h2>Appointed All Patients</h2>
      </div>
      <div>
        <Sidebar />
      </div>
      <div className="text-center d-flex justify-content-center mt-4">
        <DisplayPatientInfo appointmentInfo={appointmentInfo} />
      </div>
    </main>
  );
};

export default DisplayPatient;
