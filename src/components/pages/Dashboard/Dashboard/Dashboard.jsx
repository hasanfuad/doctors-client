import React, { useEffect, useState, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DashboardMain from "../DashboardMain/DashboardMain";
import Sidebar from "../Sidebar/Sidebar";
import { UserContext } from "../../../../App";

const Dashboard = () => {
  const styles = {
    backgroundColor: "#F4FDFB",
    height: "100%",
    padding: "20px",
  };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointment, setAppointment] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    fetch("http://localhost:5000/appointmentByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: selectedDate, email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [selectedDate]);
  return (
    <section>
      <div style={styles} className="container-fluid row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-5">
          <h3>Date: {selectedDate.toDateString()}</h3>
          <Calendar
            style={{ outline: "none" }}
            onChange={handleDateChange}
            value={new Date()}
          />
        </div>
        <div className="col-md-5">
          <DashboardMain appointment={appointment} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
