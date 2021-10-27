import React from "react";

const BookingCard = ({ date, bookingData }) => {
  return (
    <div className="col-md-4 mb-5">
      <div className="card p-3">
        <div className="card-body text-center">
          <h5 className="card-title text-brand">{bookingData.subject}</h5>
          <h6>Visiting Hour: {bookingData.visitingHour}</h6>
          <p>Total space: {bookingData.totalSpace}</p>
          <button className="btn btn-primary main-button text-uppercase">
            Book Date
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
