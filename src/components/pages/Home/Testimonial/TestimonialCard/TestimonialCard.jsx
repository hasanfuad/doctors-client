import React from "react";

const TestimonialCard = ({ testimonialData }) => {
  return (
    <main className="p-4">
      <div
        className="card py-4  w-100 mx-5"
        style={{
          width: "18rem",
          border: "none",
          boxShadow: "5px 5px 25px lightgray",
        }}
      >
        <div class="card-body">
          <p className="card-text lh-lg fw-normal fs-6">
            {testimonialData.desc}
          </p>
          <div className="d-flex mt-5">
            <div>
              <img
                src={testimonialData.img}
                className="w-75 card-img-top"
                alt="..."
              />
            </div>
            <div>
              <h6 className="card-title" style={{ color: "#14d1ca" }}>
                {testimonialData.name}
              </h6>
              <small>{testimonialData.address}</small>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TestimonialCard;
