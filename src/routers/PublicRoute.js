import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../auth/authContext';

function PublicRoute({ children }) {
  const { user } = useContext(AuthContext);

  return !user.logged ? children : <Navigate to='/home' />;
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
