import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "500px",
    width: "550px",
    textAlign: "center",
  },
};

Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const onSubmit = (data) => {
    console.log(data);
    closeModal();
  };
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h5 className="text-brand">{appointmentOn.subject}</h5>

        <small className="text-center text-secondary">
          ON: {date.toDateString()}
        </small>
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              defaultValue="name"
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="form-control"
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              defaultValue="phone"
              {...register("phone", { required: true })}
              placeholder="Phone Number"
              className="form-control mt-4"
            />
            {errors.phone && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              defaultValue="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="form-control mt-4"
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group row">
            <div className="col-4">
              <select
                className="form-control mt-4"
                {...register("gender", { required: true })}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not set">Other</option>
              </select>
              {errors.gender && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="col-4">
              <input
                defaultValue="age"
                {...register("age", { required: true })}
                className="form-control mt-4"
                name="age"
                placeholder="Your Age"
                type="number"
              />
            </div>
            <div className="col-4">
              <input
                defaultValue="weight"
                {...register("weight", { required: true })}
                className="form-control mt-4"
                name="weight"
                placeholder="Weight"
                type="number"
              />
            </div>
          </div>

          <div className="form-group text-right">
            <button type="submit" className="btn main-button mt-5 text-white">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
