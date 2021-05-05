import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import BlogCategoryList from "./BlogCategoryList";
import BlogDetail from "./BlogDetail";
import BlogSearchList from "./BlogSearchList";
import Contact from "./Contact";
import Home from "./Home";
import ScrollToTop from "./ScrollToTop";
import Services from "./Services";

const Main = () => {
  return (
    <div>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/services" component={Services} />
            <Route path="/search/:search/:page" component={BlogSearchList} />
            <Route path="/blog/:slug" component={BlogDetail} />
            <Route path="/blogs/:category/:page" component={BlogCategoryList} />
            <Route path="/blogs/:page" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
};

const appDiv = document.getElementById("app");
render(<Main />, appDiv);

export default Main;
