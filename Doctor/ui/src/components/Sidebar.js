import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Sidebar = (props) => {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  const history = useHistory();

  useEffect(() => {
    fetch("/api/get-categories/")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  const generateCategories = () => {
    return categories.map((category, index) => {
      return (
        <li key={index}>
          <Link to={`/blogs/${category[0]}/1`}>{category[0]}</Link>{" "}
          <span>{category[1]}</span>
        </li>
      );
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search/${search}/1`);
  };

  return (
    <div class="col-md-4">
      <div class="blog-sidebar">
        <div class="blog-sidebar_heading">
          <h4>Search</h4>
        </div>
        <div class="blog-sidebar_wrap">
          <div class="blog-sidebar_content blog-sidebar_search">
            <form onSubmit={handleSearch}>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search here"
                  id="exampleFormControlInput1"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <i class="fas fa-search"></i>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="blog-sidebar">
        <div class="blog-sidebar_heading">
          <h4>Categories</h4>
        </div>
        <div class="blog-sidebar_wrap">
          <ul class="blog-sidebar_category">{generateCategories()}</ul>
        </div>
      </div>
      <div class="blog-sidebar">
        <div class="blog-sidebar_heading">
          <h4>Tags</h4>
        </div>
        <div class="blog-sidebar_wrap">
          <ul class="blog-sidebar_tags">
            <li>
              <a href="#">Medical</a>
            </li>
            <li>
              <a href="#">Health</a>
            </li>
            <li>
              <a href="#">Doctor</a>
            </li>
            <li>
              <a href="#">Health Lifestyle</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Eye Care</a>
            </li>
            <li>
              <a href="#">Allergic</a>
            </li>
            <li>
              <a href="#">Diagnosis</a>
            </li>
            <li>
              <a href="#">Rehabitation</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="blog-sidebar">
        <div class="blog-sidebar_heading">
          <h4>Follow Us</h4>
        </div>
        <div class="blog-sidebar_wrap">
          <ul class="blog-sidebar_social">
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
      <div class="blog-join_us">
        <div class="blog-join_us-content">
          <h6>AD BANNER</h6>
          <h3>JOIN US</h3>
          <p>Lorem ipsum dolor sit amet conse</p>
          <a href="#" class="btn btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
