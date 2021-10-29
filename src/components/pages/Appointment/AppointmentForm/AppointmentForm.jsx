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

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn }) => {
  const handleSubmit = () => {
    console.log("Click on handle submit");
  };
  const {
    register,
    watch,
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
        {/* <form onSubmit={handleSubmit()}>
          <input
            defaultValue="name"
            {...register("name", { required: true })}
            className="w-75 p-1 mt-4"
          />
          <br />
          <input
            defaultValue="phone"
            {...register("phone", { required: true })}
            className="w-75 p-1 mt-4"
          />
          <br />
          <input
            defaultValue="email"
            {...register("email", { required: true })}
            className="w-75 p-1 mt-4"
          />
          <br />
          <select className="form-control" name="gender">
            <option disabled={true} value="Not set">
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Not set">Other</option>
          </select>
          <input
            type="number"
            className="w-25 p-1"
            placeholder="Your Age"
            name=""
            id=""
          />
          <input
            type="number"
            className="w-25 p-1 mx-2"
            name=""
            placeholder="Your weight"
            id=""
          />
          <br />
          <input
            className="mt-4 px-5 p-1 main-button text-white"
            type="submit"
          />
        </form> */}
        <form className="p-5" onSubmit={handleSubmit()}>
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
                defaultValue="name"
                {...register("name", { required: true })}
                className="form-control mt-4"
                name="age"
                placeholder="Your Age"
                type="number"
              />
            </div>
            <div className="col-4">
              <input
                defaultValue="name"
                {...register("name", { required: true })}
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
