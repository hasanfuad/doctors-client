import React, { useState } from "react";
import Sidebar from "../Sidebar";

const AddDoctor = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
    console.log(newInfo);
  };

  const handleChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
    console.log(newFile);
  };

  const styles = {
    backgroundColor: "#F4FDFB",
    height: "100%",
    padding: "20px",
  };
  return (
    <main>
      <h2 className="text-center">Add Doctor</h2>
      <div style={styles} className="container-fluid row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-5">
          <form className="p-5">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                name="email"
                onBlur={handleBlur}
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputName">Name</label>
              <input
                type="text"
                name="name"
                onBlur={handleBlur}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Image Upload</label>
              <input
                type="file"
                class="form-control"
                placeholder="Image Upload"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddDoctor;
