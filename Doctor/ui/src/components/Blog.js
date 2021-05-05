import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import removeScripts from "../utils/removeScripts";
import BlogTemplate from "./BlogTemplate";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(null);
  const [page, setPage] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    removeScripts();
  }, []);

  useEffect(async () => {
    await fetch("/api/get-blogs/" + props.match.params.page + "/")
      .then((res) => res.json())
      .then((data) => setBlogs(data.data));
  }, [page]);

  useEffect(async () => {
    await fetch("/api/pagecount/getallblogs")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BlogTemplate {...props} blogs={blogs} count={count} setPage={setPage} />
  );
};

export default Blog;
