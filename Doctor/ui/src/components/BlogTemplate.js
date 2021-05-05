import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const BlogTemplate = (props) => {
  const generateBlogList = (blogs) => {
    return blogs?.map((blog, index) => {
      return (
        <div class="blog-list">
          <img src={blog.image} class="img-fluid" alt="#" />
          <div class="blog-date">
            <h3>05</h3>
            <span>JUN</span>
          </div>
          <div class="blog-text-wrap">
            <div class="blog-comment-top">
              <p>
                <i class="far fa-user"></i>Jhone Doe <span>|</span>{" "}
                <i class="far fa-user"></i>Jhone Doe
              </p>
              <label>{blog.tag}</label>
            </div>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <Link to={`/blog/${blog.slug}`}>
              <a class="btn btn-primary">Read More</a>
            </Link>
          </div>
        </div>
      );
    });
  };

  const generatePages = (count) => {
    return Array.from({ length: count }).map((val, index) => {
      return (
        <li>
          <Link
            to={
              props.category
                ? `/blogs/${props.category}/${index + 1}`
                : props.search
                ? `/search/${props.search}/${index + 1}`
                : `/blogs/${index + 1}`
            }
            onClick={() => props.setPage((prevPage) => !prevPage)}
          >
            {index + 1}
          </Link>
        </li>
      );
    });
  };

  return (
    <div>
      <Header />
      <section class="space sub-header">
        <div class="container container-custom">
          <div class="row">
            <div class="col-md-6">
              <div class="sub-header_content">
                <p>BLOG STANDARD</p>
                <h3>
                  Lorem ipsum dolor sit ametco nse
                  <br /> ctetur adipisicing elitsed.
                </h3>
                <span>
                  <i>Home / Blog Standard</i>
                </span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="sub-header_main">
                <h2>Blog</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//End Sub header */}
      {/*//End Header */}
      {/*==================== Blog List ====================*/}
      <section class="space">
        <div class="container container-custom">
          <div class="row">
            <div class="col-md-8">
              <form action="#">{generateBlogList(props.blogs)}</form>
              <ul class="pagination">{generatePages(props.count)}</ul>
            </div>
            <Sidebar {...props} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogTemplate;
