import React, { useEffect, useRef, useState } from "react";

import getCookie from "../utils/getCookie";

const Comment = (props) => {
  const [comments, setComments] = useState([]);
  const [count, setCount] = useState(0);
  const [refresh, setRefresh] = useState(false);

  const aRef = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(async () => {
    await fetch("/api/get-comments/" + props.slug + "/")
      .then((res) => res.json())
      .then((data) => {
        setCount(data.data.length);
        setComments(data.data);
      });
  }, [refresh]);

  const handleSubmit = async (e, comment_type, comment_id) => {
    e.preventDefault();
    const csrftoken = getCookie("csrftoken");

    const request_options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        message: message,
        post: props.slug,
        comment_type: comment_type,
        comment_id: comment_id,
      }),
    };

    await fetch("/api/add-comment/", request_options).then((res) => {
      if (res.status === 400) {
        console.log("Error");
      } else {
        setName("");
        setEmail("");
        setMessage("");
        console.log("Success");
      }
      setRefresh((prevRefresh) => !prevRefresh);
      aRef.current.click();
    });
  };

  const generateComments = () => {
    let parentComments = [];

    comments.map((comment) => {
      if (comment.parent === null) {
        parentComments.push({
          id: comment.id,
          comment: comment,
          replies: [],
        });
      } else {
        parentComments.map((parent) => {
          if (parent.id === comment.parent) {
            parent.replies.push(comment);
          }
        });
      }
    });

    let final = [];
    parentComments.map((parent) => {
      final.push(
        <>
          <div class="media">
            <img
              src="/static/images/team3.jpg"
              class="mr-3 img-fluid"
              alt="#"
            />
            <div class="media-body">
              <p>{parent.comment.message}</p>
              <span>
                <i class="far fa-user"></i> {parent.comment.name}
              </span>
              <a
                href="#"
                ref={aRef}
                data-toggle="collapse"
                data-target={"#reply" + parent.id}
                aria-expanded="false"
                aria-controls={"reply" + parent.id}
              >
                Reply<i class="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
          </div>

          <div class="blog-comment-wrap collapse" id={"reply" + parent.id}>
            <div class="row">
              <div class="col-md-12">
                <h3>Leave Your Reply</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <textarea
                    class="form-control"
                    placeholder="Your Message"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    spellcheck="false"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <a
                    class="btn btn-success mt-4"
                    onClick={(e) => handleSubmit(e, "reply", parent.id)}
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      );

      parent.replies.map((reply) => {
        final.push(
          <>
            <div class="media mt-3 ml-5">
              <a class="mr-3" href="#">
                <img
                  src="/static/images/team2.jpg"
                  class="mr-3 img-fluid"
                  alt="#"
                />
              </a>
              <div class="media-body">
                <p>{reply.message}</p>
                <span>
                  <i class="far fa-user"></i> {reply.name}
                </span>
              </div>
            </div>
            <hr />
          </>
        );
      });
    });
    return final;
  };

  return (
    <>
      <div class="comment-wrap">
        <h3>Comment ({comments?.length})</h3>
        {generateComments()}
      </div>
      <hr />
      <div class="blog-comment-wrap">
        <div class="row">
          <div class="col-md-12">
            <h3>Leave Your Comment</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <textarea
                class="form-control"
                placeholder="Your Message"
                id="exampleFormControlTextarea1"
                rows="3"
                spellcheck="false"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <a
                class="btn btn-success mt-4"
                onClick={(e) => handleSubmit(e, "comment", 1)}
              >
                BOOK NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
