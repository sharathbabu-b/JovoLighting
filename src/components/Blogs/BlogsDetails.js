import React from "react";
import { useParams } from "react-router-dom";
import BlogsData from "../../BlogsData.json";
import Navbar from "../Lightingnavbar"
import FooterBottom from "../Footerbottom";
import "./blogsdetails.css"

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = BlogsData.find((item) => item.slug === slug);
console.log(slug); 

  if (!blog) {
    return <div>Blog not found</div>;
  }

  
  const author = "Mahesh Surasgar";

  return (
    <>
    <Navbar/>
   <section className="section top bottom">
    <div className="container-default w-container">
      <div className="z-index-1">
        <div
          className="inner-container _885px center"
          style={{
            transform: "translate3d(0, 10%, 0) scale3d(1, 1, 1)",
            opacity: 1,
          }}
        >
          <div className="text-center text-light">
            <div className="flex-horizontal wrap-12px mg-bottom-12px">
              <div className="text-200 medium color-neutral-100">{author}</div>
              <div className="divider-details large"></div>
              <div className="text-200 medium color-neutral-100">{blog.date}</div>
            </div>
            <h1 className="display-2 blog-post-page-title">{blog.title}</h1>
          </div>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <img
          src={blog.mainimage}
          alt={blog.title}
          className="hero-image"
        />
        <div className="image-gradient-overlay"></div>
      </div>

      {blog.htmlContent && (
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.htmlContent }}
        ></div>
      )}
    </div>
    <FooterBottom/>
    </section>
    </>
  );
};

export default BlogDetails;
