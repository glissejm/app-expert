import PropTypes from "prop-types";
import React from "react";
import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  const user = { logged: false };

  return !user.logged ? children : <Navigate to="/" />;
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
