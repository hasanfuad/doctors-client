import React from "react";
import childPatient from "../../../images/Mask Group 3.png";

const ExceptionalService = () => {
  return (
    <section style={{ height: "700px" }}>
      <div className="row">
        <div className="col-md-6">
          <img
            style={{ width: "50%", marginLeft: "24rem" }}
            className="img-fluid"
            src={childPatient}
            alt=""
          />
        </div>
        <div className="col-md-5">
          <div className="w-50">
            <h2 style={{ color: "#3d4558", fontSize: "35px" }}>
              Exceptional Dental <br /> Care, on Your Terms
            </h2>
            <small className="text-secondary lh-lg mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur velit laudantium exercitationem consectetur molestiae
              magni et explicabo similique accusantium dolorem asperiores
              distinctio incidunt totam ipsum ad architecto ea perferendis
              facilis eum atque, natus aut. Quas eaque placeat expedita quis
              odit. natus aut. Quas eaque placeat expedita quis odit.
            </small>
          </div>
          <button className="mt-5 btn main-button btn-primary">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExceptionalService;
