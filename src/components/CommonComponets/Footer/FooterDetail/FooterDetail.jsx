import React from "react";
import { Link } from "react-router-dom";
import "./FooterDetail.css";

const FooterDetail = (props) => {
  return (
    <div className="col-md-3">
      <h6 style={{ color: "#1cc7c1" }}>
        {props.menuTitle ? props.menuTitle : " "}
      </h6>
      <ul style={{ textDecoration: "none" }} className="list-unstyled mt-4">
        {props.menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              style={{ textDecoration: "none" }}
              className="text-secondary"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {props.children && props.children}
    </div>
  );
};

export default FooterDetail;
