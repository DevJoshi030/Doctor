import React, { useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return <>{children}</>;
};

export default withRouter(ScrollToTop);
