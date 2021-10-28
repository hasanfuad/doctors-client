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
        <form onSubmit={handleSubmit()}>
          <input defaultValue="name" {...register("example")} />
          <br />
          <input {...register("exampleRequired", { required: true })} />
          <br />
          <input type="submit" />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
