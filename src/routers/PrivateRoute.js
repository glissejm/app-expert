import PropTypes from "prop-types";
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  //logged handle the public and privated routes
  //that means:
  //if logged===true -> privateRoute are accesible
  const logged = useSelector((state) => state.auth.logged);
  const user = { logged: logged };

  return user.logged ? children : <Navigate to="/" />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
