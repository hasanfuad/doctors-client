import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DashboardMain from "../DashboardMain/DashboardMain";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  const styles = {
    backgroundColor: "lightgray",
    height: "100%",
    padding: "20px",
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
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
          <DashboardMain />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
