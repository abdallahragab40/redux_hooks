import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Page not Found</h1>
      <Link to="/home" className="btn btn--primary">
        Go Home
      </Link>
    </React.Fragment>
  );
};

export default ErrorPage;
