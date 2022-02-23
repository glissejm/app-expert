import PropTypes from "prop-types";
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PublicRoute({ children }) {
  const logged = useSelector((state) => state.auth.logged);
  const user = { logged: logged };

  //true ->
  return !user.logged ? children : <Navigate to="/dashboard" />;
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
