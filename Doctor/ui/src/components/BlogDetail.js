import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
const BlogDetail = (props) => {
  const [blog, setBlog] = useState(null);

  useEffect(async () => {
    await fetch("/api/get-blog/" + props.match.params.slug + "/")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <div>
      <Header />
      <section class="space sub-header">
        <div class="container container-custom">
          <div class="row">
            <div class="col-md-6">
              <div class="sub-header_content">
                <p>BLOG DETAIL</p>
                <h3>
                  Lorem ipsum dolor sit ametco nse
                  <br /> ctetur adipisicing elitsed.
                </h3>
                <span>
                  <i>Home / Blog Detail</i>
                </span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="sub-header_main">
                <h2>Blog Detail</h2>
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
              <form action="#">
                <div class="blog-list blog-deatil">
                  <img src={blog?.image} class="img-fluid" alt="#" />
                  <div class="blog-date">
                    <h3>05</h3>
                    <span>JUN</span>
                  </div>
                  <div class="blog-text-wrap border-0 pl-0 pr-0">
                    <div class="blog-comment-top border-0">
                      <p>
                        <i class="far fa-user"></i>Jhone Doe <span>|</span>{" "}
                        <i class="far fa-user"></i>Jhone Doe
                      </p>
                    </div>
                    <h2>{blog?.title}</h2>
                    {blog?.description}
                    <div class="tag-block">
                      <div class="row">
                        <div class="col-md-12 col-lg-6">
                          <div class="tags">
                            <span>tags:</span>
                            <ul>
                              <li>
                                <a href="#">{blog?.tag}</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-md-12 col-lg-6">
                          <div class="share">
                            <span>Share:</span>
                            <ul>
                              <li>
                                <a href="#">
                                  <i class="fab fa-facebook-f"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fab fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fab fa-google-plus-g"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fab fa-linkedin-in"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Comment slug={props.match.params.slug} />
              </form>
            </div>
            <Sidebar />
          </div>
        </div>
      </section>
      {/*//End Blog List */}
      {/*==================== Counter ====================*/}
      <Counter />
      <Footer />
    </div>
  );
};

export default BlogDetail;
