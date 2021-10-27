import React from "react";
import image1 from "../../../images//Ellipse 1.png";
import image2 from "../../../images//Ellipse 2.png";
import image3 from "../../../images//Ellipse 3.png";
import BlogDetails from "./BlogDetails/BlogDetails";
import "./Blogs.css";

const blogInfo = [
  {
    name: "Dr. Caudi",
    date: new Date().toDateString(),
    title: "2 times of brush in a day can keep you healthy",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iste reprehenderit, magnam id laborum harum itaque voluptatem consequuntur ut dicta.",
    image: image1,
  },
  {
    name: "Dr. Rashed Kabir",
    date: new Date().toDateString(),
    title: "2 times of brush in a day can keep you healthy",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iste reprehenderit, magnam id laborum harum itaque voluptatem consequuntur ut dicta.",
    image: image2,
  },
  {
    name: "Dr. John Mitchel",
    date: new Date().toDateString(),
    title: "2 times of brush in a day can keep you healthy",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iste reprehenderit, magnam id laborum harum itaque voluptatem consequuntur ut dicta.",
    image: image3,
  },
];

const Blogs = () => {
  return (
    <section className="blogs" style={{ height: "700px" }}>
      <div className="text-center">
        <h6 style={{ color: "#14d1ca" }}>OUR BLOGS</h6>
        <h3 style={{ color: "#3d4558", fontSize: "35px" }}>
          From Our Blog News
        </h3>
      </div>
      <div className="d-flex container mt-5">
        {blogInfo.map((blogData) => (
          <BlogDetails blogData={blogData} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
