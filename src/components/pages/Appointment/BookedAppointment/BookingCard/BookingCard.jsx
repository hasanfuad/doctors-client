import React from "react";
import AppointmentForm from "../../AppointmentForm/AppointmentForm";

const BookingCard = ({ bookingData, date }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-4 mb-5">
      <div className="card p-3">
        <div className="card-body text-center">
          <h5 className="card-title text-brand">{bookingData.subject}</h5>
          <h6>Visiting Hour: {bookingData.visitingHour}</h6>
          <p>Total space: {bookingData.totalSpace}</p>
          <button
            onClick={openModal}
            className="btn btn-primary main-button text-uppercase"
          >
            Book Date
          </button>
          <AppointmentForm
            modalIsOpen={modalIsOpen}
            appointmentOn={bookingData}
            closeModal={closeModal}
            date={date}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
