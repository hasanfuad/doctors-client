import React, { useState } from "react";
import Footer from "../../../CommonComponets/Footer/Footer";
import Navbar from "../../../CommonComponets/Navbar/Navbar";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import BookedAppointment from "../BookedAppointment/BookedAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <section>
      <Navbar />
      <AppointmentHeader handleDateChange={handleDateChange} />
      <BookedAppointment bookedAppointment={selectedDate} />
      <Footer />
    </section>
  );
};

export default Appointment;
