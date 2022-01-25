import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../auth/authContext';

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  localStorage.setItem('lastPath', pathname + search);

  return user.logged ? children : <Navigate to="/" />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
