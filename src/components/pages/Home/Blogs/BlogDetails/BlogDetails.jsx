import React from "react";
import "./BlogDetails.css";

const BlogDetails = ({ blogData }) => {
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
        <div className="d-flex mt-5">
          <div>
            <img
              src={blogData.image}
              className="w-25 mx-5 card-img-top"
              alt="..."
            />
          </div>
          <div style={{ marginLeft: "-50px" }}>
            <h6 className="card-title" style={{ color: "#14d1ca" }}>
              {blogData.name}
            </h6>
            <small>{blogData.date}</small>
          </div>
        </div>
        <div className="card-body mt-3">
          <h6>{blogData.title}</h6>
          <small className="card-text text-secondary lh-lg fw-normal">
            {blogData.desc}
          </small>
        </div>
      </div>
    </main>
  );
};

export default BlogDetails;
