import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import removeScripts from "../utils/removeScripts";
import BlogTemplate from "./BlogTemplate";

const BlogCategoryList = (props) => {
  const [blogs, setBlogs] = useState(null);
  const [page, setPage] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    removeScripts();
  }, []);

  useEffect(async () => {
    await fetch(
      "/api/blog-list-category/" +
        props.match.params.category +
        "/" +
        props.match.params.page +
        "/"
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data.data));
  }, [page, props.match.params.category]);

  useEffect(async () => {
    await fetch("/api/pagecount/" + props.match.params.category + "/")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BlogTemplate
      {...props}
      blogs={blogs}
      count={count}
      setPage={setPage}
      category={props.match.params.category}
    />
  );
};

export default BlogCategoryList;
